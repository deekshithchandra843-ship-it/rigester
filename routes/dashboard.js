const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

/**
 * Build a MongoDB $match object from the request query string.
 * Every dashboard endpoint shares this so the global filters apply
 * consistently across KPIs, charts, and the raw table.
 */
function buildMatch(query) {
  const match = {};
  const { from, to, district, gender, status, occupation } = query;

  // Date range on created_at
  if (from || to) {
    match.created_at = {};
    if (from) match.created_at.$gte = new Date(from);
    if (to) {
      const end = new Date(to);
      end.setHours(23, 59, 59, 999); // include the whole "to" day
      match.created_at.$lte = end;
    }
  }

  // Categorical filters (only applied when provided)
  if (district) match.district = district;
  if (gender) match.gender = gender;
  if (status) match.status = status;
  if (occupation) match.occupation = occupation;

  return match;
}

/**
 * GET /api/dashboard
 * Returns KPIs + every chart's data in ONE aggregation using $facet,
 * so the database does the heavy lifting and we make a single round trip.
 *
 * Query params: from, to, district, gender, status, occupation, groupBy(day|month)
 */
router.get('/dashboard', async (req, res) => {
  try {
    const match = buildMatch(req.query);
    const dateFormat = req.query.groupBy === 'month' ? '%Y-%m' : '%Y-%m-%d';

    const pipeline = [
      { $match: match },
      {
        $facet: {
          // --- KPI: total matching registrations ---
          totals: [{ $count: 'count' }],

          // --- KPI: unique districts represented ---
          uniqueDistricts: [
            { $group: { _id: '$district' } },
            { $count: 'count' },
          ],

          // --- Status breakdown (drives KPI + status pie) ---
          byStatus: [
            { $group: { _id: '$status', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $project: { _id: 0, label: { $ifNull: ['$_id', 'unknown'] }, count: 1 } },
          ],

          // --- Time-series: registrations per day (or month) ---
          timeseries: [
            {
              $group: {
                _id: { $dateToString: { format: dateFormat, date: '$created_at' } },
                count: { $sum: 1 },
              },
            },
            { $sort: { _id: 1 } },
            { $project: { _id: 0, date: '$_id', count: 1 } },
          ],

          // --- Categorical: gender (pie chart) ---
          byGender: [
            { $group: { _id: '$gender', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $project: { _id: 0, label: { $ifNull: ['$_id', 'Unknown'] }, count: 1 } },
          ],

          // --- Categorical: top 10 districts (bar chart) ---
          byDistrict: [
            { $group: { _id: '$district', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 },
            { $project: { _id: 0, label: { $ifNull: ['$_id', 'Unknown'] }, count: 1 } },
          ],

          // --- Categorical: top 8 occupations (bar chart) ---
          byOccupation: [
            { $group: { _id: '$occupation', count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 8 },
            { $project: { _id: 0, label: { $ifNull: ['$_id', 'Unknown'] }, count: 1 } },
          ],
        },
      },
    ];

    const [result] = await Registration.aggregate(pipeline);

    const total = result.totals[0] ? result.totals[0].count : 0;
    const statusMap = {};
    result.byStatus.forEach((s) => {
      statusMap[s.label] = s.count;
    });
    const approved = statusMap['approved'] || 0;
    const pending = statusMap['pending'] || 0;

    res.json({
      kpis: {
        total,
        pending,
        approved,
        uniqueDistricts: result.uniqueDistricts[0] ? result.uniqueDistricts[0].count : 0,
        approvalRate: total ? Math.round((approved / total) * 100) : 0,
      },
      byStatus: result.byStatus,
      timeseries: result.timeseries,
      byGender: result.byGender,
      byDistrict: result.byDistrict,
      byOccupation: result.byOccupation,
    });
  } catch (err) {
    console.error('DASHBOARD ERROR:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/registrations
 * Paginated raw data table. Honors the same global filters.
 * Query params: ...filters, page, limit
 */
router.get('/registrations', async (req, res) => {
  try {
    const match = buildMatch(req.query);
    const page = Math.max(parseInt(req.query.page, 10) || 1, 1);
    const limit = Math.min(parseInt(req.query.limit, 10) || 10, 100);
    const skip = (page - 1) * limit;

    const [rows, total] = await Promise.all([
      Registration.find(match)
        .select('registration_id first_name last_name district occupation gender status created_at')
        .sort({ created_at: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Registration.countDocuments(match),
    ]);

    res.json({
      rows,
      total,
      page,
      pages: Math.ceil(total / limit) || 1,
    });
  } catch (err) {
    console.error('REGISTRATIONS ERROR:', err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /api/filters
 * Distinct values to populate the global filter dropdowns.
 */
router.get('/filters', async (req, res) => {
  try {
    const [districts, genders, statuses, occupations] = await Promise.all([
      Registration.distinct('district'),
      Registration.distinct('gender'),
      Registration.distinct('status'),
      Registration.distinct('occupation'),
    ]);

    const clean = (arr) => arr.filter(Boolean).sort();

    res.json({
      districts: clean(districts),
      genders: clean(genders),
      statuses: clean(statuses),
      occupations: clean(occupations),
    });
  } catch (err) {
    console.error('FILTERS ERROR:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
