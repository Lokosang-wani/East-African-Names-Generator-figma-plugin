figma.showUI(__html__, { 
  width: 360, 
  height: 520,
  themeColors: true 
});

interface NameData {
  [country: string]: {
    male: string[];
    female: string[];
  };
}

const names: NameData = {
  "south-sudan": {
    male: [
      // Dinka names
      "Deng", "Mayik", "Mabior", "Makwei", "Akol", "Kuol", "Garang", "Ajak", "Malong", "Biar",
      "Chol", "Majok", "Mamer", "Arok", "Yel", "Ayuen", "Wek", "Lual", "Tor", "Ring",
      "Malual", "Makuac", "Alier", "Mangok", "Thon", "Machot", "Ater", "Awet", "Jok", "Dut",
      "Maker", "Kon", "Bol", "Noon", "Wol", "Kiir", "Chagai", "Mawut", "Dau", "Chol",
      // Nuer names
       "Gatluak", "Ruai", "Tut", "Dok", "Gai", "Nyuon", "Puok", "Koak", "Lam",
      "Thok", "Lul", "Keah", "Riiny", "Teny", "Jal", "Jok", "Chuol", "Lat", "Nyal",
      "Riek", "Dual", "Gatkuoth", "Koang", "Lual", "Pal", "Riek", "Taban", "Yoal", "Zach",
      // Bari names (Equatorian)
      "Wani", "Ladu", "Lokule", "Petero", "Kenyi", "Luwate", "", "Yowani", "Loro", "Pitia",
      "Soro", "Lomude", "Jada", "Juron", "Lemi", "Lokosang", "Laku", "Lasu", "Morbe", "Lojung"
    ],
    female: [
      // Dinka names
      "Akuac", "Ayen", "Abuk", "Ajok", "Adut", "Akech", "Nyandeng", "Atong", "Awien", "Achol",
      "Aluet", "Agoth", "Abok", "Akol", "Aluel", "Atit", "Akuol", "Ayen", "Awut", "Ajak",
      "Alier", "Achuil", "Athieng", "Akon", "Aguer", "Atem", "Aweil", "Akech", "Atong", "Ajieth",
      "Adeng", "Arek", "Awien", "Achan", "Agot", "Aker", "Apieu", "Ariang", "Arou", "Atong",
      // Nuer names
      "Nyaruach", "Nyakuoth", "Nyawal", "Nyathon", "Nyarok", "Nyalel", "Nyaboth", "Nyagoa", "Nyakuar", "Nyariek",
      "Nyabuoy", "Nyatut", "Nyayen", "Nyageer", "Nyakong", "Nyareth", "Nyakech", "Nyathak", "Nyagor", "Nyawech",
      "Nyakim", "Nyalat", "Nyamal", "Nyanen", "Nyapal", "Nyareal", "Nyatuach", "Nyawut", "Nyayoal", "Nyazach",
      // Bari names (Equatorian)
       "Ipon", "Nyoka", "Poni", "Diko", "Muro", "Kiden", "Nadoki", "Hannah", "Zahara", "Hellen",
    ]
  },
  uganda: {
    male: [
      "Mukasa", "Ssali", "Kato", "Wasswa", "Mugisha", "Tumukunde", "Okello", "Odongo", "Byaruhanga", "Mubiru",
      "Nabongo", "Semakula", "Karim", "Lubega", "Kyagulanyi", "Ssebunya", "Musoke", "Kirunda", "Sserubogo", "Kateregga",
      "Muwanga", "Kiwanuka", "Kayongo", "Ssekandi", "Mulindwa", "Nsubuga", "Ssemwogerere", "Kakande", "Lwanga", "Mayanja",
      "Bbosa", "Ssentongo", "Kagwa", "Kasozi", "Mutebi", "Nakibinge", "Walusimbi", "Sekitto", "Kayemba", "Lutaaya",
      "Ojok", "Awany", "Acaye", "Otim", "Olanya", "Okwir", "Oyat", "Oryem", "Ogwang", "Ochan",
      "Komakech", "Lakony", "Aremo", "Ateker", "Ogwal", "Opira", "Opio", "Aciro", "Akello", "Auma"
    ],
    female: [
      "Nakato", "Nabirye", "Namukasa", "Kyomuhendo", "Akello", "Adong", "Nakimuli", "Namubiru", "Nankya", "Babirye",
      "Tendo", "Akankwasa", "Nyangoma", "Mirembe", "Namusoke", "Namatovu", "Nankabirwa", "Nalubega", "Namaganda", "Nakawuki",
      "Nabukenya", "Namuyanja", "Nakayiza", "Nakabugo", "Nalwanga", "Nakirijja", "Nampijja", "Nakibuuka", "Nambi", "Nakanwagi",
      "Namugga", "Nabakooza", "Nalukenge", "Nabatanzi", "Namugenyi", "Nakiguli", "Namata", "Namazzi", "Nabukalu", "Namusisi",
      "Acen", "Aber", "Acan", "Aciro", "Adokorach", "Aguti", "Akot", "Alimo", "Amongin", "Anena",
      "Apiny", "Atim", "Awor", "Ayikoru", "Lamunu", "Lawino", "Lanyero", "Omalo", "Oyella", "Paska"
    ]
  },
  kenya: {
    male: [
      // Kikuyu names
      "Kamau", "Mwangi", "Njoroge", "Kimani", "Macharia", "Karanja", "Muriuki", "Maina", "Wanjiku", "Githiomi",
      "Mwathi", "Kariuki", "Ndung'u", "Mutahi", "Githinji", "Muchiri", "Wachira", "Gathigia", "Kinyua", "Mwenda",
      "Thuo", "Gikonyo", "Mbugua", "Kiguru", "Njenga", "Mutiso", "Kiprotich", "Kiplagat", "Rotich", "Kirui",
      // Luo names
      "Otieno", "Ochieng", "Omondi", "Owino", "Odhiambo", "Okoth", "Onyango", "Ogola", "Awino", "Odero",
      "Ouma", "Osogo", "Oyoo", "Olando", "Ongeri", "Oyaro", "Ongwae", "Okeyo", "Oyugi", "Oluoch",
      // Kalenjin names
      "Kipchoge", "Kiprotich", "Rotich", "Kirui", "Kiprop", "Kiptoo", "Langat", "Bett", "Koech", "Chebet",
      "Kibet", "Kiplimo", "Kipketer", "Cheruiyot", "Cherono", "Kipyegon", "Kemboi", "Kogo", "Koros", "Limo",
      // Luhya names
      "Wanjala", "Barasa", "Wekesa", "Simiyu", "Wanyama", "Wafula", "Kuloba", "Shikuku", "Mudamba", "Mukhwana"
    ],
    female: [
      // Kikuyu names
      "Wanjiku", "Nyawira", "Wairimu", "Njeri", "Muthoni", "Wambui", "Gathoni", "Mukami", "Wanjira", "Wangui",
      "Nyokabi", "Wacu", "Wanjugu", "Njambi", "Wangechi", "Wangari", "Njoki", "Nyambura", "Watiri", "Wacera",
      "Kagendo", "Karimi", "Wawira", "Nduta", "Wairimú", "Githinji", "Kanyua", "Wanjeri", "Kamene", "Njiru",
      // Luo names
      "Akinyi", "Akoth", "Atieno", "Awino", "Adhiambo", "Anyango", "Aoko", "Awuor", "Apiyo", "Akeyo",
      "Achieng", "Adoyo", "Awuonda", "Atieno", "Nyar", "Auma", "Akello", "Adongo", "Anyim", "Asunta",
      // Kalenjin names
      "Chebet", "Cheptoo", "Chepkemoi", "Cherono", "Chepngetich", "Kipyegon", "Jepkosgei", "Jeptoo", "Jebet", "Chelimo",
      "Chepkirui", "Jepchirchir", "Chepkoech", "Jepkemei", "Chepkwony", "Jepkorir", "Chepsoi", "Jepngetich", "Chelangat", "Jemutai",
      // Luhya names
      "Nasike", "Naliaka", "Nekesa", "Nasimiyu", "Nanjala", "Nafula", "Nangila", "Namugala", "Nabwire", "Namusoke"
    ]
  },
  tanzania: {
    male: [
      "Mwalimu", "Juma", "Hamisi", "Bakari", "Mrisho", "Mganga", "Sospeter", "Bahati", "Mwinyimkuu", "Kassim",
      "Ramadhani", "Selemani", "Mwakasege", "Mwamba", "Mwangi", "Msafiri", "Mwenda", "Mwalimu", "Mwinyimoja", "Mwakitwange",
      "Shabani", "Omari", "Rashidi", "Salehe", "Mwinyi", "Msonga", "Mwakabanga", "Mwamnyange", "Mwakifuna", "Mwakanjuki",
      "Hassan", "Hussein", "Maulidi", "Mbaraka", "Mussa", "Mwangoka", "Mwakasanga", "Mwakibolwa", "Mwakisyala", "Mwalimu",
      "Daudi", "Paulo", "Petro", "Yohana", "Yakobo", "Marko", "Luka", "Mathayo", "Simoni", "Andrea",
      "Raphael", "Mikael", "Gabrieli", "Musa", "Ibrahim", "Ismail", "Omar", "Ali", "Mohamed", "Ahmed"
    ],
    female: [
      "Fatuma", "Halima", "Mariam", "Zulekha", "Amina", "Saida", "Mwanaidi", "Rehema", "Nasra", "Asha",
      "Tumaini", "Neema", "Upendo", "Furaha", "Subira", "Zawadi", "Baraka", "Hawa", "Khadija", "Salma",
      "Mwajuma", "Mwanahamisi", "Mwanajuma", "Mwanaisha", "Mwanakhadija", "Mwanamkuu", "Mwanafunzi", "Mwanaomba", "Mwanasheria", "Mwanahawa",
      "Rukia", "Hadija", "Siti", "Bi", "Mama", "Malkia", "Shangazi", "Nyanya", "Bibi", "Dada",
      "Maria", "Anna", "Ruth", "Rebeka", "Sara", "Raheli", "Lea", "Judith", "Esther", "Naomi",
      "Grace", "Joyce", "Rose", "Agnes", "Catherine", "Margaret", "Susan", "Janet", "Helen", "Elizabeth"
    ]
  },
  ethiopia: {
    male: [
      "Dawit", "Yohannes", "Tekle", "Girma", "Haile", "Mulugeta", "Bekele", "Tadesse", "Mesfin", "Getachew",
      "Alemayehu", "Tesfaye", "Dereje", "Worku", "Kebede", "Gebre", "Wolde", "Mengistu", "Fisseha", "Negash",
      "Berhe", "Kassa", "Teshome", "Berhanu", "Desta", "Gashaw", "Gebru", "Addis", "Tamrat", "Tilahun",
      "Abebe", "Solomon", "Daniel", "Samuel", "Michael", "Gabriel", "Raphael", "Elias", "Yosef", "Abraham",
      "Kidane", "Gebremariam", "Woldemichael", "Gebremedhin", "Gebremeskel", "Gebreyesus", "Woldegiorgis", "Gebreselassie", "Woldetensae", "Gebrekidan",
      "Ashenafi", "Addisu", "Alemu", "Amare", "Anbessa", "Aregawi", "Ayalew", "Azeb", "Bayou", "Belachew", "Hanetsa", "Selome"
    ],
    female: [
      "Selamawit", "Hanan", "Tigist", "Meron", "Almaz", "Hirut", "Genet", "Birtukan", "Rahel", "Senait",
      "Tsehay", "Meseret", "Gelila", "Yordanos", "Mahlet", "Bethlehem", "Marta", "Sosina", "Haben", "Lidya",
      "Wubit", "Workitu", "Zenebech", "Yeshiwork", "Tadelech", "Emebet", "Bizunesh", "Kebebush", "Laketch", "Dinknesh",
      "Asnakech", "Bogalech", "Chaltu", "Derartu", "Ejigayehu", "Fantaye", "Gete", "Haregewoin", "Ityopis", "Kalkidan",
      "Letebrhan", "Mekdes", "Netsanet", "Omega", "Petros", "Qedest", "Rozina", "Seble", "Tigest", "Urge",
      "Veronika", "Werknesh", "Xadiya", "Yeshime", "Zara", "Aberash", "Blen", "Chaltu", "Desta", "Eden"
    ]
  },
  eritrea: {
    male: [
      "Yohannes", "Dawit", "Tekle", "Haile", "Berhe", "Gebru", "Kidane", "Gebremariam", "Woldemichael", "Gebremedhin",
      "Gebremeskel", "Gebreyesus", "Woldegiorgis", "Gebreselassie", "Woldetensae", "Gebrekidan", "Tesfai", "Yemane", "Amanuel", "Petros",
      "Mehari", "Berhane", "Tekeste", "Negash", "Fisseha", "Ghebrehiwet", "Kahsay", "Kiflemariam", "Menghistu", "Rezene",
      "Semere", "Tesfamariam", "Woldu", "Yosief", "Zerai", "Abraham", "Daniel", "Efrem", "Fitsum", "Ghirmay",
      "Henok", "Isaac", "Jeremiah", "Kebrom", "Luul", "Mussie", "Natnael", "Osman", "Robel", "Samuel",
      "Tesfalem", "Weldemichael", "Yacob", "Zemichael", "Alem", "Biniam", "Dawit", "Elias", "Filimon", "Ghenet"
    ],
    female: [
      "Hanan", "Selamawit", "Tigist", "Meron", "Almaz", "Hirut", "Genet", "Birtukan", "Rahel", "Senait",
      "Tsehay", "Meseret", "Gelila", "Yordanos", "Mahlet", "Bethlehem", "Marta", "Sosina", "Haben", "Lidya",
      "Sabur", "Ruta", "Hiwet", "Natsinet", "Ghenet", "Blen", "Aida", "Asmeret", "Bereket", "Dawit",
      "Eden", "Feven", "Ghidey", "Helen", "Iman", "Jemila", "Kidist", "Lete", "Mehret", "Nardos",
      "Oqbit", "Petya", "Qeshi", "Ruth", "Saba", "Tekea", "Uziel", "Veronica", "Weini", "Xerti",
      "Yodit", "Zara", "Arsema", "Bisha", "Cham", "Desta", "Efrata", "Fana", "Girmay", "Hawa"
    ]
  },
  somalia: {
    male: [
      "Mohamed", "Ahmed", "Ali", "Hassan", "Omar", "Abdi", "Yusuf", "Abdullahi", "Ibrahim", "Farah",
      "Mohamud", "Adan", "Dahir", "Abdisalam", "Bashir", "Abdulkadir", "Abdirahman", "Osman", "Ismail", "Mustafa",
      "Abdiweli", "Abdifatah", "Abdirisak", "Abdikhadir", "Abdinasir", "Abdiaziz", "Abdimalik", "Abdiqani", "Abdihakim", "Abdirashid",
      "Saed", "Jamal", "Khalid", "Mahmoud", "Rashid", "Salad", "Sharif", "Nur", "Abshir", "Aweys",
      "Bile", "Calas", "Dahir", "Elmi", "Farah", "Gedi", "Hirsi", "Isse", "Jama", "Khadar",
      "Libaan", "Maxamed", "Nuur", "Omer", "Qasim", "Rage", "Saleban", "Tahlil", "Ubah", "Waays"
    ],
    female: [
      "Fatima", "Amina", "Khadija", "Mariam", "Halima", "Sahra", "Zeinab", "Asha", "Fadumo", "Shamso",
      "Hodan", "Nasra", "Sagal", "Ikran", "Warsan", "Ubah", "Habiba", "Hawa", "Jawahir", "Kaltun",
      "Layla", "Marian", "Nadifa", "Ola", "Qali", "Rahma", "Safiya", "Tahliil", "Umm", "Waris",
      "Xaawo", "Yasmiin", "Zahra", "Amal", "Barni", "Canab", "Deka", "Ebla", "Falis", "Goobaad",
      "Hinda", "Idil", "Jacayl", "Kiin", "Luul", "Magool", "Nasteho", "Owliyo", "Qamar", "Roda",
      "Sucdi", "Timiro", "Ubax", "Warsame", "Xamdi", "Yusra", "Zamzam", "Adar", "Bilan", "Cawo"
    ]
  },
  rwanda: {
    male: [
      "Uwimana", "Hakizimana", "Niyonsenga", "Bizimana", "Habimana", "Ndayisaba", "Nsengimana", "Munyaneza", "Nzeyimana", "Tuyishime",
      "Rukundo", "Shyaka", "Gasana", "Mugisha", "Nshimiyimana", "Kayitesi", "Munyangaju", "Nyiragongo", "Byiringiro", "Ndahimana",
      "Ngarambe", "Nzeyimana", "Habyarimana", "Ndayambaje", "Nsabimana", "Ntawukuriryayo", "Rwigema", "Sebatware", "Sindikubwabo", "Uwamahoro",
      "Barayagwiza", "Bagosora", "Bucyana", "Gatsinzi", "Karamira", "Mbonampeka", "Nahimana", "Ngirabatware", "Rutaganda", "Semanza",
      "Emmanuel", "Jean", "Pierre", "Paul", "Jacques", "Claude", "Michel", "François", "André", "Philippe",
      "Tharcisse", "Félicien", "Innocent", "Faustin", "Juvénal", "Casimir", "Stanislas", "Célestin", "Siméon", "Protais"
    ],
    female: [
      "Uwimana", "Mukamana", "Nyirahabimana", "Mukandayisenga", "Mukantwari", "Nyiramugisha", "Uwamahoro", "Uwineza", "Mukamuganga", "Nyiramutuzo",
      "Uwimpaye", "Mukeshimana", "Nyiramana", "Uwamariya", "Mukandoli", "Nyirakamana", "Uwambajimana", "Mukagasana", "Nyirahabineza", "Uwizeyimana",
      "Mukamudenge", "Nyirakabano", "Uwamwezi", "Mukasonga", "Nyirangarama", "Uwihanganye", "Mukarugwiza", "Nyirarukundo", "Uwingabire", "Mukamugire",
      "Esperance", "Immaculée", "Spéciose", "Vestine", "Alphonsine", "Concilie", "Gaudence", "Laurence", "Primitive", "Scholastique",
      "Bernadette", "Clementine", "Francine", "Josephine", "Valentine", "Beatrice", "Christine", "Dominique", "Gertrude", "Jacqueline"
    ]
  },
  burundi: {
    male: [
      "Ndayisenga", "Ntirandekura", "Hakizimana", "Nshimirimana", "Bigirimana", "Niyongabo", "Ndikumana", "Bizumuremyi", "Nzeyimana", "Hakizamungu",
      "Niyonzima", "Kwizera", "Nsabimana", "Kanyuka", "Bizimana", "Niyukuri", "Manirakiza", "Baranshamaje", "Ntahokaja", "Nshimirimana",
      "Uwimana", "Rugema", "Nyangoma", "Ndayiziga", "Nkurunziza", "Ntiranyibagira", "Ndayishimiye", "Uwizeyimana", "Nizigiyimana", "Niyonkuru",
      "Pierre", "Jean", "Emmanuel", "Pascal", "Sylvestre", "Adolphe", "Léonard", "Melchior", "Gaspard", "Salvator",
      "Domitien", "Cyprien", "Évariste", "Frédéric", "Godefroid", "Herménégilde", "Innocent", "Jérémie", "Léandre", "Mathias",
      "Nestor", "Octave", "Protais", "Révérien", "Séverin", "Térence", "Vénuste", "Wenceslas", "Xavier", "Zachée"
    ],
    female: [
      "Niyukuri", "Mukamuganga", "Uwimana", "Nyandwi", "Mukamana", "Nyiramana", "Nkurunziza", "Ndayishimiye", "Uwizeyimana", "Mukeshimana",
      "Niyongira", "Uwimpaye", "Nyirahabimana", "Mukandoli", "Nyiramugisha", "Uwamariya", "Mukantwari", "Nyiramutuzo", "Uwamahoro", "Uwineza",
      "Mukamudenge", "Nyirakabano", "Uwamwezi", "Mukasonga", "Nyirangarama", "Uwihanganye", "Mukarugwiza", "Nyirarukundo", "Uwingabire", "Mukamugire",
      "Agnès", "Béatrice", "Chantal", "Denise", "Espérance", "Françoise", "Générose", "Honorine", "Immaculée", "Jacqueline",
      "Léonie", "Marguerite", "Nathalie", "Odette", "Perpétue", "Régine", "Spéciose", "Thérèse", "Yvonne", "Zénaide",
      "Alphonsine", "Bernadette", "Concilie", "Dévote", "Euphrasie", "Gaudence", "Libérate", "Pascasie", "Vestine", "Consolate"
    ]
  }
};

// Function to generate full name (first + last)
function generateFullName(country: string, gender: string): string {
  let firstNamePool: string[] = [];
  let lastNamePool: string[] = [];
  
  if (gender === 'any') {
    firstNamePool = [...names[country].male, ...names[country].female];
    lastNamePool = [...names[country].male, ...names[country].female];
  } else if (gender === 'male') {
    firstNamePool = names[country].male;
    lastNamePool = names[country].male;
  } else if (gender === 'female') {
    firstNamePool = names[country].female;
    // For females, last name can be male (traditional naming pattern)
    lastNamePool = names[country].male;
  }

  const firstName = firstNamePool[Math.floor(Math.random() * firstNamePool.length)];
  const lastName = lastNamePool[Math.floor(Math.random() * lastNamePool.length)];
  
  // Make sure first and last names are different
  if (firstName === lastName && lastNamePool.length > 1) {
    const filteredLastNames = lastNamePool.filter(name => name !== firstName);
    const newLastName = filteredLastNames[Math.floor(Math.random() * filteredLastNames.length)];
    return `${firstName} ${newLastName}`;
  }
  
  return `${firstName} ${lastName}`;
}

figma.ui.onmessage = async (msg) => {
  if (msg.type === 'generate-name') {
    const { country, gender } = msg;
    
    if (!country || !gender || !names[country]) {
      figma.ui.postMessage({
        type: 'name-generated',
        success: false,
        error: 'Please select both country and gender'
      });
      return;
    }

    const fullName = generateFullName(country, gender);
    
    // Check if there's a text node selected
    const selection = figma.currentPage.selection;
    let insertionSuccess = false;
    let message = '';
    
    if (selection.length === 1 && selection[0].type === 'TEXT') {
      try {
        const textNode = selection[0] as TextNode;
        
        // Load the font used by the text node
        await figma.loadFontAsync(textNode.fontName as FontName);
        
        textNode.characters = fullName;
        insertionSuccess = true;
        message = 'Name replaced in selected text layer';
      } catch (error) {
        console.error('Error updating text:', error);
        insertionSuccess = false;
        message = 'Error updating text layer';
      }
    } else {
      // No text selected - inform user to select a text layer first
      insertionSuccess = false;
      message = 'Please select a text layer first';
    }
    
    figma.ui.postMessage({
      type: 'name-generated',
      success: true,
      name: fullName,
      country,
      gender,
      inserted: insertionSuccess,
      message: message
    });
  }

  if (msg.type === 'close') {
    figma.closePlugin();
  }
};