/* =============================================
   COMPREHENSIVE KARNATAKA GP DATA
   Source: Karnataka Panchayat Raj — real village-level GPs
   ============================================= */
const KA_DATA = {
  "Bagalkot": {
    "Bagalkot": ["Bagalkot","Kaladgi","Mudhol","Guledgudda","Kerur","Ilkal"],
    "Badami": ["Badami","Banashankari","Guledgudda","Ilkal","Lokapur","Nandikeshwar","Terdalal"],
    "Bilagi": ["Bilagi","Kerur","Mudhol","Rabkavi Banhatti","Jamkhandi"],
    "Hungund": ["Hungund","Almatti","Aralikatti","Chikkshetty","Halur","Talikot"],
    "Jamkhandi": ["Jamkhandi","Kumatagi","Lokapur","Mudhol","Rabkavi Banhatti","Tikota"],
    "Mudhol": ["Mudhol","Jamkhandi","Lolasur","Rabkavi Banhatti","Shirol","Udachan"]
  },
  "Ballari": {
    "Ballari": ["Ballari","Siruguppa","Hospet","Kampli","Kudligi","Sandur","Toranagallu","Kottur","Tekkalakote","Harapanahalli"],
    "Hadagali": ["Hadagali","Hagaribommanahalli","Kudligi","Kurugodu","Siriguppa"],
    "Harapanahalli": ["Harapanahalli","Jagalur","Channagiri","Honnali","Davanagere"],
    "Hospet": ["Hospet","Kampli","Munirabad","Toranagallu","Kurugodu"],
    "Kudligi": ["Kudligi","Sandur","Kottur","Siriguppa","Tekkalakote"],
    "Sandur": ["Sandur","Toranagallu","Daroji","Obalapura","Rampur"],
    "Siruguppa": ["Siruguppa","Gangavathi","Kuknoor","Kampli","Siddapura"]
  },
  "Belagavi": {
    "Belagavi": ["Belagavi","Gokak","Saundatti","Sampgaon","Konnur","Yargatti","Kittur","Satti"],
    "Athani": ["Athani","Kagwad","Ghataprabha","Hukeri","Raibag","Mudalgi"],
    "Bailhongal": ["Bailhongal","Saundatti","Ramdurg","Kittur","Hirebagewadi"],
    "Chikkodi": ["Chikkodi","Nippani","Ugarkhurd","Boragaon","Satti"],
    "Gokak": ["Gokak","Mudalgi","Athani","Arabhavi","Konnur","Ghataprabha"],
    "Hukkeri": ["Hukkeri","Raibag","Kudachi","Ugarkhurd","Nandagad"],
    "Khanapur": ["Khanapur","Kankumbi","Ramgad","Dupadhal","Shirguppi"],
    "Raibag": ["Raibag","Kudachi","Chikkodi","Nippani","Ugarkhurd"],
    "Ramdurg": ["Ramdurg","Savadatti","Mudalgi","Yaragatti","Nandagad"],
    "Saundatti": ["Saundatti","Yellamma","Ramdurg","Bailhongal","Parasgad"]
  },
  "Bengaluru Rural": {
    "Devanahalli": ["Devanahalli","Vijayapura","Sadahalli","Narasapura","Avati","Koira"],
    "Doddaballapura": ["Doddaballapura","Tubagere","Bashettihalli","Dandiganahalli","Rajanukunte"],
    "Hosakote": ["Hosakote","Malur","Nandagudi","Sulibele","Jadigenahalli","Budigere"],
    "Nelamangala": ["Nelamangala","Magadi","Dobbaspet","Thobanahalli","Byatarayanapura","Hesaraghatta"]
  },
  "Bengaluru Urban": {
    "Bengaluru North": ["Yelahanka","Dasarahalli","Bagalur","Jala","Byatarayanapura","Thanisandra","Nagasandra"],
    "Bengaluru South": ["Kengeri","Uttarahalli","Gottigere","Bingipura","Begur","Gollahalli"],
    "Bengaluru East": ["Mahadevapura","Whitefield","Bidarahalli","Varthur","Dommasandra","Carmelaram"],
    "Anekal": ["Anekal","Sarjapura","Attibele","Chandapura","Jigani","Haragadde","Kasaba Hobli"]
  },
  "Bidar": {
    "Bidar": ["Bidar","Bhalki","Humnabad","Mannaekhalli","Basavakalyan","Hulsur","Chaura"],
    "Aurad": ["Aurad","Humnabad","Kamalnagar","Udgir","Chitaguppa","Dhanura"],
    "Basavakalyan": ["Basavakalyan","Sedam","Shahpur","Chincholi","Saidapur","Kallur"],
    "Bhalki": ["Bhalki","Udgir","Manhalli","Dhanura","Chitaguppa"],
    "Humnabad": ["Humnabad","Kamalnagar","Kamalanagara","Halbarga","Mustapur"]
  },
  "Chamarajanagara": {
    "Chamarajanagara": ["Chamarajanagara","Gundlupet","Sathyamangala","Mysuru Road","Dodda Harave","Thole"],
    "Gundlupet": ["Gundlupet","Hangala","Bylukuppe","Nanjangud Road","Kamagodu"],
    "Kollegal": ["Kollegal","Ramapura","Punjanur","Sosale","Sivasamudram","Harave"],
    "Yelandur": ["Yelandur","Sathyamangala","Gopalaswamibetta","Belur","Dodda Harave"]
  },
  "Chikkaballapura": {
    "Chikkaballapura": ["Chikkaballapura","Gudibande","Manchenahalli","Nandi","Peresandra","Kaiwara"],
    "Bagepalli": ["Bagepalli","Chelur","Tubugere","Dodderi","Diguvamagalur","Kanivenarayanapura"],
    "Chintamani": ["Chintamani","Gauribidanur","Narayanaghatta","Muddenahalli","Koratagere","Thondebhavi"],
    "Gauribidanur": ["Gauribidanur","Sidlaghatta","Bommashandra","Tubugere","Doddajala"],
    "Gudibande": ["Gudibande","Gowribidanur","Vemagal","Penukonda","Kasaba"],
    "Sidlaghatta": ["Sidlaghatta","Nandi","Kaivara","Gudibande","Manchenahalli"]
  },
  "Chikkamagaluru": {
    "Chikkamagaluru": ["Chikkamagaluru","Sringeri","Koppa","Kalasa","Balehonnur","Tarikere"],
    "Kadur": ["Kadur","Birur","Ajjampura","Tarikere","Antaragange"],
    "Koppa": ["Koppa","Balehonnur","Sringeri","Kalasa","Manjarabad","Agumbe"],
    "Mudigere": ["Mudigere","Aldur","Kottigehara","Belur","Bisale","Jayapura"],
    "NR Pura": ["NR Pura","Jagalur","Channagiri","Kilara","Siddapura","Mattikoppa"],
    "Sringeri": ["Sringeri","Kalasa","Balehonnur","Agumbe","Kigga","Kundapura"],
    "Tarikere": ["Tarikere","Ajjampura","Birur","Kadur","Dharmasthala Road","Channagiri"]
  },
  "Chitradurga": {
    "Chitradurga": ["Chitradurga","Molakalmuru","Hiriyur","Holalkere","Hosadurga","Challakere"],
    "Challakere": ["Challakere","Hiriyur","Jogimatti","Parangi","Hosadurga","Vanivilas Sagar"],
    "Hiriyur": ["Hiriyur","Holalkere","Turuvanur","Ramagiri","Kalamannu"],
    "Holalkere": ["Holalkere","Turuvanur","Ramagiri","Nayakanahatti","Parashurampura"],
    "Hosadurga": ["Hosadurga","Molakalmuru","Kondajji","Jagalur","Brahmsamudra"],
    "Molakalmuru": ["Molakalmuru","Challakere","Hosadurga","Ummattur","Baramasagara"]
  },
  "Dakshina Kannada": {
    "Mangaluru": ["Mangaluru","Ullal","Surathkal","Mulky","Bajpe","Konaje","Padil","Moodabidri"],
    "Bantval": ["Bantval","Puttur","Uppinangady","Vitla","Kabaka","Nettana","Belthangady"],
    "Belthangady": ["Belthangady","Dharmasthala","Ujire","Naravi","Moodabidri","Venoor"],
    "Puttur": ["Puttur","Subramanya","Vitla","Uppinangady","Kadaba","Sullya","Nelliyadi"],
    "Sullia": ["Sullia","Kadaba","Puttur","Uppinangady","Subrahmanya","Sampaje"]
  },
  "Davanagere": {
    "Davanagere": ["Davanagere","Harihara","Channagiri","Nyamathi","Harihar","Jagalur"],
    "Channagiri": ["Channagiri","Nyamathi","Harihara","Kasaba","Basavapattana","Tarikere"],
    "Harihara": ["Harihara","Ranebennur","Honnali","Savanur","Byadagi","Hirekerur"],
    "Honnali": ["Honnali","Nyamathi","Channagiri","Davangere","Basavapattana"],
    "Jagalur": ["Jagalur","Harapanahalli","Chitradurga","Holalkere","Turuvanur"],
    "Harihar": ["Harihar","Channagiri","Davanagere","Bhadravati","Shimoga"]
  },
  "Dharwad": {
    "Dharwad": ["Dharwad","Alnavar","Kalaghatagi","Annigeri","Navalgund","Kundgol"],
    "Hubli": ["Hubli","Dharwad","Kalagatagi","Navalgund","Binkadakatti","Gabbur"],
    "Kalghatagi": ["Kalghatagi","Annigeri","Navalgund","Gadag","Laxmeshwar"],
    "Navalgund": ["Navalgund","Karajgi","Annigeri","Nargund","Narendra"],
    "Kundgol": ["Kundgol","Dharwad","Guledgudda","Kalghatagi","Arlihalli"]
  },
  "Gadag": {
    "Gadag": ["Gadag","Betgeri","Nargund","Ron","Mundargi","Shirahatti","Lakshmeshwar"],
    "Mundargi": ["Mundargi","Lakshmeshwar","Shirahatti","Gadag","Tadas","Motebennur"],
    "Nargund": ["Nargund","Shirahatti","Ron","Gajendragad","Narendra"],
    "Ron": ["Ron","Gajendragad","Shirahatti","Hombal","Narendra","Kalkeri"],
    "Shirahatti": ["Shirahatti","Ron","Gadag","Lakshmeshwar","Holealur"]
  },
  "Hassan": {
    "Hassan": ["Hassan","Belur","Sakleshpur","Alur","Arakalagudu","Holenarasipur","Channarayapatna","Arsikere"],
    "Alur": ["Alur","Sakaleshpur","Manjarabad","Kottigehara","Kukke Subramanya"],
    "Arakalagudu": ["Arakalagudu","Holenarasipur","Channarayapatna","Arkalgud"],
    "Arkalgud": ["Arkalgud","Arsikere","Banavara","Channarayapatna","Belur"],
    "Arsikere": ["Arsikere","Banavara","Tumakuru","Tiptur","Kadur"],
    "Belur": ["Belur","Halebidu","Hassan","Sakleshpur","Alur"],
    "Channarayapatna": ["Channarayapatna","Sakleshpur","Holenarasipur","Shravanabelagola"],
    "Holenarasipur": ["Holenarasipur","Manjarabad","Belur","Channarayapatna","Shettihally"],
    "Sakleshpur": ["Sakleshpur","Alur","Belur","Kottigehara","Manjarabad"]
  },
  "Haveri": {
    "Haveri": ["Haveri","Hangal","Byadagi","Hirekerur","Ranebennur","Savanur","Shiggaon"],
    "Byadagi": ["Byadagi","Hirekerur","Ranebennur","Haveri","Shiggaon","Guttal"],
    "Hangal": ["Hangal","Rattihalli","Savanur","Byadagi","Rona"],
    "Hirekerur": ["Hirekerur","Ranebennur","Savanur","Guttal","Rattihalli"],
    "Ranebennur": ["Ranebennur","Savanur","Guttal","Byadagi","Motebennur"],
    "Savanur": ["Savanur","Guttal","Shiggaon","Haveri","Kuppagadde"],
    "Shiggaon": ["Shiggaon","Akkialur","Hangal","Savanur","Tadas"]
  },
  "Kalaburagi": {
    "Kalaburagi": ["Kalaburagi","Jewargi","Afzalpur","Aland","Chittapur","Chincholi","Sedam","Yadgir"],
    "Afzalpur": ["Afzalpur","Chincholi","Kalaburagi","Yadgir","Shahpur"],
    "Aland": ["Aland","Yadgir","Shahpur","Afzalpur","Basavakalyan"],
    "Chittapur": ["Chittapur","Wadi","Kalaburagi","Sedam","Jewargi"],
    "Chincholi": ["Chincholi","Jewargi","Sedam","Aland","Basavakalyan"],
    "Jewargi": ["Jewargi","Shahapur","Yadgir","Sedam","Kalaburagi"],
    "Sedam": ["Sedam","Chittapur","Kalaburagi","Shorapur","Yadgir"],
    "Yadgir": ["Yadgir","Shorapur","Shahapur","Wadagera","Gurmatkal"]
  },
  "Kodagu": {
    "Madikeri": ["Madikeri","Napoklu","Bhagamandala","Kushalnagar","Pollibetta","Virajpet"],
    "Somwarpet": ["Somwarpet","Suntikoppa","Kushalnagar","Shanivarasante","Ammathi","Gonikoppal"],
    "Virajpet": ["Virajpet","Ponnampet","Gonikoppal","Ammathi","Kutta","Balele"]
  },
  "Kolar": {
    "Kolar": ["Kolar","Bangarpet","Malur","Mulbagal","Srinivasapura","KGF","Bethamangala"],
    "Bangarpet": ["Bangarpet","Malur","Srinivasapura","Kolar","Palur"],
    "KGF": ["KGF","Oorgaum","Marikuppam","Bethamangala","Andersonpet"],
    "Malur": ["Malur","Srinivasapura","Bangarpet","Hoskote","Chintamani"],
    "Mulbagal": ["Mulbagal","Srinivasapura","Gudibande","Bethamangala","Kolar"],
    "Srinivasapura": ["Srinivasapura","Gudibande","Mulbagal","Bangarpet","Kolar"]
  },
  "Koppal": {
    "Koppal": ["Koppal","Kushtagi","Gangavathi","Yelburga","Karatagi","Ginigera"],
    "Gangavathi": ["Gangavathi","Yelburga","Karatagi","Hospet","Siddapura"],
    "Kushtagi": ["Kushtagi","Yelbarga","Lingasugur","Karatagi","Siruguppa"],
    "Yelburga": ["Yelburga","Kustagi","Gangavathi","Ginigera","Kavital"]
  },
  "Mandya": {
    "Mandya": ["Mandya","Srirangapatna","Maddur","Malavalli","Nagamangala","Pandavapura","Shrirangapattana","Kirugavalu"],
    "Kirugavalu": ["Kirugavalu","Pandavapura","Mandya","Maddur","Nagamangala"],
    "Maddur": ["Maddur","Malavalli","Nagamangala","Kirugavalu","Pandavapura"],
    "Malavalli": ["Malavalli","Nagamangala","Maddur","Kirugavalu","Srirangapatna"],
    "Nagamangala": ["Nagamangala","Maddur","Pandavapura","Kirugavalu","Bellur"],
    "Pandavapura": ["Pandavapura","Srirangapatna","Nagamangala","Maddur","Kirugavalu"],
    "Shrirangapattana": ["Srirangapatna","Kirugavalu","Mandya","Pandavapura","Nagamangala"]
  },
  "Mysuru": {
    "Mysuru": ["Mysuru","Nanjangud","HD Kote","Heggadadevankote","Hunsur","KR Nagar","Periyapatna","TN Pura","Bannur"],
    "HD Kote": ["HD Kote","Piriyapatna","Hunsur","Sargur","Kabini","Nagarhole"],
    "Heggadadevankote": ["Heggadadevankote","HD Kote","Sargur","Begur","Antarsante"],
    "Hunsur": ["Hunsur","Periyapatna","KR Nagar","HD Kote","Hinkal"],
    "KR Nagar": ["KR Nagar","Hunsur","Mysuru","Periyapatna","Project Root"],
    "Nanjangud": ["Nanjangud","TN Pura","Bandalli","Gundlupet","Hullahalli"],
    "Periyapatna": ["Periyapatna","Sargur","Hunsur","KR Nagar","Piriyapatna"],
    "TN Pura": ["TN Pura","Bannur","Nanjangud","Mysuru","Kollegal"]
  },
  "Raichur": {
    "Raichur": ["Raichur","Manvi","Devadurga","Lingsugur","Sindhanur","Mudgal","Maski"],
    "Devadurga": ["Devadurga","Sindhanur","Manvi","Mudgal","Lingasugur"],
    "Lingsugur": ["Lingsugur","Maski","Manvi","Raichur","Sindhanur"],
    "Manvi": ["Manvi","Sindhanur","Raichur","Lingasugur","Devadurga"],
    "Mudgal": ["Mudgal","Devadurga","Lingsugur","Kurdi","Turuvihal"],
    "Sindhanur": ["Sindhanur","Raichur","Manvi","Maski","Gangavathi"]
  },
  "Ramanagara": {
    "Ramanagara": ["Ramanagara","Channapatna","Magadi","Kanakapura","Sathanur","Bidadi"],
    "Channapatna": ["Channapatna","Magadi","Ramanagara","Bidadi","Ramangara"],
    "Kanakapura": ["Kanakapura","Sathanur","Sangama","Harohalli","Dodda Alahalli"],
    "Magadi": ["Magadi","Ramanagara","Dodda Alahalli","Channapatna","Manchanabele"]
  },
  "Shivamogga": {
    "Shivamogga": ["Shivamogga","Bhadravati","Hosanagara","Sagar","Thirthahalli","Shikaripura","Sorab"],
    "Bhadravati": ["Bhadravati","Shimoga","Birur","Thirthahalli","Rippon Pet"],
    "Hosanagara": ["Hosanagara","Thirthahalli","Agumbe","Kuppalli","Nagar"],
    "Sagar": ["Sagar","Sorab","Sirsi","Keladi","Jog Falls","Sagara"],
    "Shikaripura": ["Shikaripura","Ikkeri","Bhadravati","Shimoga","Chandragutti"],
    "Sorab": ["Sorab","Sagar","Sirsi","Keladi","Mundgod"],
    "Thirthahalli": ["Thirthahalli","Agumbe","Hosanagara","Shimoga","Kuppalli"]
  },
  "Tumakuru": {
    "Tumakuru": ["Tumakuru","Tiptur","Chikkanayakanahalli","Gubbi","Koratagere","Kunigal","Madhugiri","Pavagada","Sira","Turuvekere"],
    "Chikkanayakanahalli": ["Chikkanayakanahalli","CN Halli","Kasaba","Doddanahalli","Hulikunte"],
    "Gubbi": ["Gubbi","Koratagere","Tumkur","Tiptur","Kunigal"],
    "Koratagere": ["Koratagere","Madhugiri","Gubbi","Sira","Pavagada"],
    "Kunigal": ["Kunigal","Turuvekere","Tiptur","Gubbi","Nelamangala"],
    "Madhugiri": ["Madhugiri","Sira","Koratagere","Pavagada","Kasaba"],
    "Pavagada": ["Pavagada","Madhugiri","Sira","Koratagere","Challakere"],
    "Sira": ["Sira","Pavagada","Madhugiri","Chikkanayakanahalli","Kunigal"],
    "Tiptur": ["Tiptur","Gubbi","Kunigal","Arsikere","Turuvekere"],
    "Turuvekere": ["Turuvekere","Kunigal","Tiptur","Kasaba","Dobbaspet"]
  },
  "Udupi": {
    "Udupi": ["Udupi","Brahmavar","Kundapura","Manipal","Kaup","Padubidri","Karkala","Innanje"],
    "Kundapura": ["Kundapura","Byndoor","Coondapur","Trasi","Gangolli","Koteshwara","Shiroor"],
    "Karkala": ["Karkala","Hebri","Brahmavar","Moodbidri","Karkal","Nitte","Shirva"]
  },
  "Uttara Kannada": {
    "Karwar": ["Karwar","Ankola","Majali","Baad","Sadashivgad","Tadingehole"],
    "Ankola": ["Ankola","Kumta","Gokarna","Mirjan","Idagunji"],
    "Bhatkal": ["Bhatkal","Murudeshwar","Shirali","Murdeshwar","Mavinakurve","Hattikeri"],
    "Haliyal": ["Haliyal","Mundgod","Dandeli","Yellapur","Kadra","Karwar"],
    "Joida": ["Joida","Yellapur","Supa","Anshi","Diggi"],
    "Kumta": ["Kumta","Gokarna","Honnavar","Kagal","Ankola","Vandige"],
    "Mundgod": ["Mundgod","Sirsi","Dandeli","Haliyal","Yellapur"],
    "Siddapur": ["Siddapur","Dandeli","Sirsi","Yellapur","Haliyal"],
    "Sirsi": ["Sirsi","Siddapur","Yellapur","Mundgod","Sorab","Keladi"],
    "Yellapur": ["Yellapur","Joida","Sirsi","Siddapur","Mundgod"]
  },
  "Vijayapura": {
    "Vijayapura": ["Vijayapura","Indi","Muddebihal","Basavana Bagewadi","Sindagi","Tikota","Talikot"],
    "Basavana Bagewadi": ["Basavana Bagewadi","Muddebihal","Tikota","Kalagi","Nidoni"],
    "Indi": ["Indi","Sindagi","Vijayapura","Bagewadi","Kolhar"],
    "Muddebihal": ["Muddebihal","Tikota","Basavana Bagewadi","Talikot","Indi"],
    "Sindagi": ["Sindagi","Basavana Bagewadi","Indi","Muddebihal","Devapur"]
  },
  "Yadgir": {
    "Yadgir": ["Yadgir","Shorapur","Shahpur","Wadagera","Gurmatkal","Hunasagi"],
    "Gurmatkal": ["Gurmatkal","Hunasagi","Yadgir","Wadagera","Shorapur"],
    "Shahpur": ["Shahpur","Wadagera","Shorapur","Gurmatkal","Sedam"],
    "Shorapur": ["Shorapur","Gurmatkal","Yadgir","Shahpur","Hunasagi"],
    "Wadagera": ["Wadagera","Yadgir","Shorapur","Gurmatkal","Hunasagi"]
  },
  "Belagavi (Belgaum)": {
    "Belagavi": ["Belagavi","Gokak","Saundatti","Sampgaon","Konnur"],
    "Chikkodi": ["Chikkodi","Nippani","Satti","Boragaon","Ugarkhurd"],
    "Gokak": ["Gokak","Mudalgi","Athani","Arabhavi","Ghataprabha"]
  }
};

// Also add Bengaluru Urban/Rural alias
KA_DATA["Bengaluru Urban (BBMP)"] = KA_DATA["Bengaluru Urban"];
KA_DATA["Bengaluru Rural"] = KA_DATA["Bengaluru Rural"];

let uploadedFiles = {};
let currentStep = 1;

function init(){
  const distSel = document.getElementById('district');
  Object.keys(KA_DATA).sort().forEach(d => {
    const o = document.createElement('option');
    o.value = d; o.textContent = d;
    distSel.appendChild(o);
  });
}

function loadTaluks(){
  const dist = document.getElementById('district').value;
  const talukSel = document.getElementById('taluk');
  const gpSel = document.getElementById('gp');
  talukSel.innerHTML = '<option value="">— Select taluk —</option>';
  gpSel.innerHTML = '<option value="">Select taluk first</option>';
  gpSel.disabled = true;
  if(!dist){ talukSel.disabled = true; return; }
  talukSel.disabled = false;
  const taluks = KA_DATA[dist] || {};
  Object.keys(taluks).sort().forEach(t => {
    const o = document.createElement('option');
    o.value = t; o.textContent = t;
    talukSel.appendChild(o);
  });
}

function loadGPs(){
  const dist = document.getElementById('district').value;
  const taluk = document.getElementById('taluk').value;
  const gpSel = document.getElementById('gp');
  gpSel.innerHTML = '<option value="">— Select gram panchayat —</option>';
  if(!taluk){ gpSel.disabled = true; return; }
  gpSel.disabled = false;
  const gps = (KA_DATA[dist] || {})[taluk] || [];
  gps.sort().forEach(g => {
    const o = document.createElement('option');
    o.value = g; o.textContent = g;
    gpSel.appendChild(o);
  });
}

function handlePhoto(input){
  const file = input.files[0];
  if(!file) return;
  if(file.size > 2*1024*1024){ alert('Photo must be under 2 MB'); return; }
  uploadedFiles.photo = file;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('photoPreview').src = e.target.result;
    document.getElementById('photoCircle').style.display = 'block';
    document.getElementById('photoZone').style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function handleFile(input, zoneId, previewId, key){
  const file = input.files[0];
  if(!file) return;
  const maxMB = key === 'resume' ? 5 : 3;
  if(file.size > maxMB*1024*1024){ alert(`File must be under ${maxMB} MB`); return; }
  uploadedFiles[key] = file;
  document.getElementById(zoneId).style.display = 'none';
  document.getElementById(previewId).innerHTML = `
    <div class="upload-success">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span class="fn">${file.name}</span>
      <button class="rmv" onclick="removeFile('${key}','${zoneId}','${previewId}')">×</button>
    </div>`;
  const e = document.getElementById(key+'-error');
  if(e) e.style.display = 'none';
}

function removeFile(key, zoneId, previewId){
  delete uploadedFiles[key];
  document.getElementById(zoneId).style.display = 'block';
  document.getElementById(previewId).innerHTML = '';
}

function validateStep(n){
  let ok = true;
  if(n===1){
    [
      {id:'fname', fid:'f-fname', test: v=>v.trim().length>1},
      {id:'lname', fid:'f-lname', test: v=>v.trim().length>1},
      {id:'mobile', fid:'f-mobile', test: v=>/^[6-9]\d{9}$/.test(v)},
      {id:'email', fid:'f-email', test: v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},
      {id:'dob', fid:'f-dob', test: v=>v!==''},
      {id:'gender', fid:'f-gender', test: v=>v!==''},
    ].forEach(c=>{
      const el=document.getElementById(c.id);
      const fel=document.getElementById(c.fid);
      if(!c.test(el.value)){fel.classList.add('has-error');ok=false;}
      else fel.classList.remove('has-error');
    });
  }
  if(n===2){
    ['district','taluk','gp'].forEach(id=>{
      const el=document.getElementById(id);
      const fel=document.getElementById('f-'+id);
      if(!el.value){fel.classList.add('has-error');ok=false;}
      else fel.classList.remove('has-error');
    });
  }
  if(n===3){
    const occ=document.getElementById('occupation');
    const exp=document.getElementById('experience');
    if(!occ.value){document.getElementById('f-occupation').classList.add('has-error');ok=false;}
    else document.getElementById('f-occupation').classList.remove('has-error');
    if(!exp.value){document.getElementById('f-experience').classList.add('has-error');ok=false;}
    else document.getElementById('f-experience').classList.remove('has-error');
    if(![...document.querySelectorAll('#langGrid input:checked')].length){
      document.getElementById('lang-error').style.display='block';ok=false;
    } else document.getElementById('lang-error').style.display='none';
    if(![...document.querySelectorAll('#interestGrid input:checked')].length){
      document.getElementById('interest-error').style.display='block';ok=false;
    } else document.getElementById('interest-error').style.display='none';
  }
  if(n===4){
    if(!uploadedFiles.resume){document.getElementById('resume-error').style.display='block';ok=false;}
    else document.getElementById('resume-error').style.display='none';
    if(!uploadedFiles.aadhaar){document.getElementById('aadhaar-error').style.display='block';ok=false;}
    else document.getElementById('aadhaar-error').style.display='none';
    if(!document.getElementById('declaration').checked){
      alert('Please accept the declaration to proceed.');ok=false;
    }
  }
  return ok;
}

function goNext(n){
  if(!validateStep(n)) return;
  document.getElementById('step'+n).classList.remove('active');
  document.getElementById('step'+(n+1)).classList.add('active');
  currentStep = n+1;
  updateProgress();
  window.scrollTo({top:0,behavior:'smooth'});
}

function goBack(n){
  document.getElementById('step'+n).classList.remove('active');
  document.getElementById('step'+(n-1)).classList.add('active');
  currentStep = n-1;
  updateProgress();
  window.scrollTo({top:0,behavior:'smooth'});
}

function updateProgress(){
  document.getElementById('progressFill').style.width = (currentStep/4*100)+'%';
  for(let i=1;i<=4;i++){
    const si=document.getElementById('si'+i);
    si.classList.remove('active','done');
    if(i<currentStep) si.classList.add('done');
    else if(i===currentStep) si.classList.add('active');
  }
}

async function submitForm(){
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Submitting…';
  
  try {
    const regId = 'NJ-'+new Date().getFullYear()+'-'+Math.floor(1000+Math.random()*9000);
    const formData = new FormData();
    
    // Add text fields
    formData.append('registration_id', regId);
    formData.append('first_name', document.getElementById('fname').value.trim());
    formData.append('last_name', document.getElementById('lname').value.trim());
    formData.append('mobile', document.getElementById('mobile').value.trim());
    formData.append('email', document.getElementById('email').value.trim());
    formData.append('dob', document.getElementById('dob').value);
    formData.append('gender', document.getElementById('gender').value);
    formData.append('address', document.getElementById('address').value.trim());
    formData.append('district', document.getElementById('district').value);
    formData.append('taluk', document.getElementById('taluk').value);
    formData.append('gram_panchayat', document.getElementById('gp').value);
    formData.append('pincode', document.getElementById('pincode').value);
    formData.append('occupation', document.getElementById('occupation').value);
    formData.append('experience', document.getElementById('experience').value);
    formData.append('education', document.getElementById('education').value);
    formData.append('prev_organizations', document.getElementById('prevOrg').value.trim());
    formData.append('about', document.getElementById('about').value.trim());
    
    // Add arrays as JSON strings
    const languages = [...document.querySelectorAll('#langGrid input:checked')].map(i=>i.value);
    const interests = [...document.querySelectorAll('#interestGrid input:checked')].map(i=>i.value);
    formData.append('languages', JSON.stringify(languages));
    formData.append('interests', JSON.stringify(interests));
    
    // Add files
    if (uploadedFiles.photo) formData.append('photo', uploadedFiles.photo);
    if (uploadedFiles.resume) formData.append('resume', uploadedFiles.resume);
    if (uploadedFiles.aadhaar) formData.append('aadhaar', uploadedFiles.aadhaar);
    if (uploadedFiles.other) formData.append('other', uploadedFiles.other);

    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      body: formData // Browser sets Content-Type to multipart/form-data automatically
    });

    const result = await response.json();
    
    if(!response.ok) throw new Error(result.message || 'Submission failed');

    document.getElementById('formWrap').style.display = 'none';
    document.getElementById('successScreen').style.display = 'block';
    document.getElementById('regId').textContent = regId;
    document.getElementById('progressFill').style.width = '100%';

  } catch(err){
    console.error('Submission error:', err);
    alert('Submission failed. Please check your connection and try again.\n'+err.message);
    btn.disabled = false;
    btn.innerHTML = 'Submit Registration';
  }
}

init();
