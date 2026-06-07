import prisma from "./index"
import { StageType, QuestionType, SlideType } from "./prisma/generated/client"

const questionsData: Record<string, any[]> = {
  sulawesi: [
    {
      id: 1,
      question: "Di pulau manakah latar tempat cerita Nenek Pakande ini terjadi?",
      options: [
        "Pulau Sumatra",
        "Pulau Jawa",
        "Pulau Sulawesi",
        "Pulau Kalimantan",
      ],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "Kapan para ibu di desa berpesan agar anak-anak mereka tidak keluar rumah?",
      options: [
        "Saat matahari terbit di pagi hari", 
        "Menjelang senja atau sore hari", 
        "Pada siang hari yang terik", 
        "Saat hujan turun dengan lebat"
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Menurut cerita para ibu, apa yang suka dilakukan oleh Nenek Pakande?",
      options: [
        "Menangkap anak-anak yang keluar rumah saat sore hari",
        "Memberikan hadiah kepada anak yang rajin menolong",
        "Mengajak anak-anak bermain di ladang",
        "Membantu warga desa memasak makanan lezat untuk warga",
      ],
      correctAnswer: 0,
    },
    {
      id: 4,
      question: "Bagaimana tanggapan anak-anak saat pertama kali mendengar cerita tentang Nenek Pakande?",
      options: [
        "Mereka menangis ketakutan dan langsung pulang",
        "Mereka bersembunyi di dalam kamar dan mengunci pintu",
        "Mereka hanya tertawa dan menganggapnya cerita menakut-nakuti",
        "Mereka mencari Nenek Pakande ke dalam hutan",
      ],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Berapa jumlah anak yang masih asyik kejar-kejaran dan lupa waktu saat matahari hampir tenggelam?",
      options: [
        "Dua anak",
        "Tiga anak",
        "Lima anak",
        "Satu anak",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      question:
        "Benda apa yang dibawa oleh Nenek Pakande di tangannya saat muncul dari semak-semak?",
      options: [
        "Sebuah tongkat kayu yang panjang",
        "Sebuah lentera yang terang",
        "Sebuah karung yang besar",
        "Sebuah jaring ikan",
      ],
      correctAnswer: 2,
    },
    {
      id: 7,
      question: "Berapa banyak anak yang berhasil ditangkap dan dimasukkan ke dalam karung oleh Nenek Pakande?",
      options: [
        "Satu anak",
        "Dua anak",
        "Tiga anak",
        "Tidak ada yang tertangkap",
      ],
      correctAnswer: 1,
    },
    {
      id: 8,
      question:
        "Apa yang dilakukan oleh seluruh warga desa setelah mengetahui ada anak yang hilang?",
      options: ["Pindah ke desa lain yang lebih aman",
        "Berdiam diri di rumah masing-masing", 
        "Berlari ke hutan mencari sambil memanjatkan doa", 
        "Menebang seluruh pohon di hutan"],
      correctAnswer: 2,
    },
    {
      id: 9,
      question: "Bagaimana nasib anak-anak yang hilang setelah warga desa melakukan pencarian?",
      options: [
        "Mereka tidak pernah ditemukan lagi",
        "Mereka berhasil diselamatkan dari cengkeraman Nenek Pakande",
        "Mereka pulang sendiri ke rumah keesokan harinya",
        "Mereka berubah menjadi batu di dalam hutan",
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      question: "Suara apa yang konon masih bisa didengar orang-orang dari kegelapan hutan jika angin malam berembus kencang?",
      options: [
        "Suara tangisan anak kecil",
        "Suara lolongan serigala",
        "Suara tawa lirih Nenek Pakande",
        "Suara ketukan pintu rumah",
      ],
      correctAnswer: 2,
    },
  ],

  sumatra: [
    {
      id: 1,
      question: "Di mana Malin Kundang tinggal bersama ibunya?",
      options: [
        "Di atas gunung yang tinggi",
        "Di dalam istana yang megah",
        "Di tengah hutan yang lebat",
        "Di sebuah desa kecil di tepi laut",
      ],
      correctAnswer: 3,
    },
    {
      id: 2,
      question: "Apa yang dilakukan Malin setiap pagi untuk membantu ibunya ketika masih kecil?",
      options: [
        "Membuat kapal dagang yang besar",
        "Membeli pakaian baru di pasar desa sebelah",
        "Menanam padi di sawah",
        "Mencari ikan dan menjemur hasil tangkapan",
      ],
      correctAnswer: 3,
    },
    {
      id: 3,
      question: "Mengapa Malin Kundang ingin ikut berlayar naik kapal dagang besar?",
      options: [
        "Karena dia bosan tinggal bersama ibunya",
        "Untuk pergi berlibur bersama teman-temannya",
        "Untuk mencari peruntungan dan membuat hidup lebih baik",
        "Untuk bersembunyi dari ibunya",
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "Apa pesan atau nasihat sang ibu saat melepaskan Malin pergi berlayar?",
      options: [
        "Jangan kembali sebelum menjadi raja",
        "Bawakan ibu banyak emas dan permata",
        "Jangan pernah lupakan ibumu",
        "Jangan memakai pakaian yang indah",
      ],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Setelah bertahun-tahun pergi, Malin Kundang berubah menjadi seorang...",
      options: [
        "Prajurit kerajaan yang berani",
        "Saudagar yang kaya raya",
        "Petani yang miskin",
        "Nahkoda kapal yang galak",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      question: "Bagaimana sikap Malin Kundang saat ibunya datang berlari dan memeluknya di pantai?",
      options: [
        "Malin mengajak ibunya naik ke atas kapal megahnya",
        "Malin menepis pelukan ibunya dan mengaku tidak mengenalnya",
        "Malin langsung menangis dan membalas pelukan ibunya",
        "Malin memberikan semua emasnya kepada ibunya",
      ],
      correctAnswer: 1,
    },
    {
      id: 7,
      question: "Mengapa Malin Kundang tidak mau mengakui wanita tua itu sebagai ibunya?",
      options: [
        "Karena ibunya sudah lupa ingatan",
        "Karena wajah wanita itu sama sekali tidak mirip dengannya",
        "Karena wanita itu memakai baju yang terlalu mewah",
        "Karena dia malu memiliki ibu yang miskin di depan istrinya",
      ],
      correctAnswer: 3,
    },
    {
      id: 8,
      question: "Apa yang dilakukan sang ibu setelah hatinya hancur ditolak oleh Malin?",
      options: [
        "Ikut berlayar secara diam-diam di kapal Malin",
        "Kembali ke rumah dan memasak makanan kesukaan Malin",
        "Meminta bantuan warga desa untuk menyerang kapal Malin",
        "Berdoa kepada Tuhan meminta keadilan atas kedurhakaan anaknya",
      ],
      correctAnswer: 3,
    },
    {
      id: 9,
      question: "Apa yang terjadi pada alam sekitar sesaat setelah sang ibu berdoa menahan kepedihan?",
      options: [
        "Matahari bersinar sangat terik dan makanan di dalam kapal menjadi basi",
        "Langit menjadi hitam pekat dan badai besar datang menggulung lautan",
        "Air laut tiba-tiba surut dan kering",
        "Turun salju yang sangat lebat di pantai",
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      question: "Benda apa yang ditemukan di tepi pantai setelah badai usai?",
      options: [
        "Sebuah peti kayu berisi emas murni",
        "Sebongkah batu besar menyerupai manusia yang bersujud",
        "Pecahan kayu kapal yang berubah jadi rumah yang besar",
        "Patung ikan lumba-lumba emas",
      ],
      correctAnswer: 1,
    },
  ],

  jawa: [
    {
      id: 1,
      question: "Siapakah nama kesatria gagah dan sakti yang berhasil menguasai kerajaan dalam waktu singkat?",
      options: [
        "Malin Kundang",
        "Bandung Bondowoso",
        "Magohiduru",
        "Lutung Kasarung",
      ],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Apa yang diinginkan oleh Bandung Bondowoso setelah melihat kecantikan Roro Jonggrang?",
      options: [
        "Ingin menjadikannya pelayan istana",
        "Ingin menikahinya dan menjadikannya permaisuri",
        "Ingin mengusirnya keluar dari kerajaan",
        "Ingin meminta semua perhiasan emasnya",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Mengapa Roro Jonggrang merasa terkejut dengan tawaran sang kesatria?",
      options: [
        "Karena dia tidak mau tinggal di dalam istana",
        "Karena dia ingin pergi merantau ke negeri seberang",
        "Karena dia tidak menyukai sang kesatria yang telah merusak kerajaannya",
        "Karena dia belum mengenal sang kesatria",
      ],
      correctAnswer: 2,
    },
    {
      id: 4,
      question:
        "Apa syarat mustahil yang diajukan Roro Jonggrang agar ia bersedia menikah dengan Bandung Bondowoso?",
      options: [
        "Mencari batu sakti di tepi Sungai Mahakam",
        "Menangkap silumen penyu besar di pantai",
        "Mengumpulkan karung berisi emas murni",
        "Membangun seribu candi dalam waktu satu malam",
      ],
      correctAnswer: 3,
    },
    {
      id: 5,
      question: "Makhluk apa yang dipanggil oleh Bandung Bondowoso menggunakan kesaktiannya untuk membantu membangun candi?",
      options: [
        "Pasukan jin",
        "Burung cerukcuk kuning",
        "Pasukan babi hutan",
        "Warga desa setempat",
      ],
      correctAnswer: 0,
    },
    {
      id: 6,
      question: "Daerah atau tempat manakah yang menjadi riuh oleh suara dentingan batu saat candi mulai dibangun?",
      options: [
        "Halmahera", 
        "Prambanan", 
        "Sulawesi", 
        "Sumba"],
      correctAnswer: 2,
    },
    {
      id: 7,
      question:
        "Apa yang dilakukan Roro Jonggrang bersama para dayang dan wanita desa untuk menggagalkan pembangunan candi?",
      options: [
        "Membakar seluruh candi yang sudah jadi",
        "Menyuruh wanita menumbuk padi dan menyalakan api",
        "Meminta bantuan jin lain untuk merusak batu candi",
        "Melarikan diri ke dalam hutan yang sepi",
      ],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Suara hewan apa yang ikut terdengar setelah langit tampak terang benderang oleh api unggun?",
      options: [
        "Lolongan serigala",
        "Kicauan burung cerukcuk",
        "Kokok ayam jantan",
        "Suara pesut di air",
      ],
      correctAnswer: 2,
    },
    {
      id: 9,
      question: "Berapa jumlah candi yang berhasil dibangun oleh pasukan jin sebelum mereka panik dan pergi menghilang?",
      options: [
        "1.000 candi", 
        "998 candi", 
        "999 candi", 
        "500 candi"
      ],
      correctAnswer: 2,
    },
    {
      id: 10,
      question: "Menjadi apakah Roro Jonggrang setelah Bandung Bondowoso merasa tertipu dan mengarahkan kesaktiannya?",
      options: [
        "Menjadi sebongkah batu besar yang bersujud",
        "Menjadi seekor ikan berwajah manusia",
        "Menjadi patung batu indah",
        "Menjadi silaman penyu yang besar",
      ],
      correctAnswer: 2,
    },
  ],

  papua: [
    {
      id: 1,
      question: "Di daerah manakah latar tempat cerita pemuda pemberani bernama Biwar ini terjadi?",
      options: [
        "Pulau Sumba", 
        "Halmahera Utara", 
        "Tanah Papua", 
        "Sulawesi"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "Makhluk jahat apa yang sering mengganggu dan membuat kehidupan warga desa tidak tenang?",
      options: [
        "Seekor naga raksasa",
        "Kawanan babi hutan sakti",
        "Seorang nenek tua berambut kusut",
        "Dua ekor makhluk seperti ikan",
      ],
      correctAnswer: 0,
    },
    {
      id: 3,
      question: "Di manakah makhluk raksasa jahat itu tinggal?",
      options: [
        "Di atas pohon beringin yang sepi", 
        "Di dasar Sungai Mahakam", 
        "Di dalam gua besar dekat sungai", 
        "Di pulau seberang pantai"],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "Kejahatan apa yang sering dilakukan oleh makhluk raksasa tersebut terhadap warga desa?",
      options: [
        "Membakar seluruh rumah warga kampung",
        "Merusak ladang dan memakan hewan ternak",
        "Mengambil semua perhiasan emas milik warga",
        "Mengajari warga bertani",
      ],
      correctAnswer: 1,
    },
    {
      id: 5,
      question: "Bagaimana reaksi warga desa saat kepala suku bertanya siapa yang berani melawan makhluk jahat tersebut?",
      options: [
        "Semua warga desa langsung maju bersama-sama",
        "Semua orang diam dan tidak ada yang berani maju",
        "Warga desa memilih untuk pindah ke desa lain",
        "Para wanita desa langsung menumbuk padi di lesung",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      question: "Apa saja senjata yang dibawa oleh Biwar saat bersiap pergi pagi-pagi sekali?",
      options: [
        "Tombak pusaka Numbu Ranggata dan batu sakti",
        "Karung besar dan jaring ikan",
        "Tombak, busur, dan anak panah",
        "Pedang panjang dan lentera",
      ],
      correctAnswer: 2,
    },
    {
      id: 7,
      question:
        "Bagian tubuh naga mana yang dibidik dan terkena anak panah Biwar hingga membuat naga itu berteriak kesakitan?",
      options: [
        "Ekor naga", 
        "Mata naga", 
        "Kaki naga", 
        "Sayap naga"],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Di mana Biwar bersembunyi untuk menghindari semburan api saat naga tersebut mengamuk?",
      options: [
        "Di balik batu besar",
        "Di atas pohon kelapa",
        "Di dalam sungai yang deras",
        "Di dalam rumah kosong",
      ],
      correctAnswer: 0,
    },
    {
      id: 9,
      question: "Apa yang dilakukan Biwar untuk mengalahkan naga raksasa itu saat sang naga mulai lelah dan lengah?",
      options: [
        "Melempar naga dengan batu sakti Watu Maladong",
        "Menusuk jantung naga menggunakan tombaknya dengan sekuat tenaga",
        "Memanggil pasukan jin untuk mengikat naga",
        "Mengubah naga menjadi patung batu yang indah",
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      question: "Bagaimana sikap seluruh warga desa saat menyambut Biwar kembali ke kampung halaman?",
      options: [
        "Mereka marah dan mengusir Biwar dari desa karena desa dilanda kekeringan",
        "Mereka menyambutnya dengan sorak-sorai gembira dan memanggilnya pahlawan",
        "Mereka mengabaikan Biwar karena mengira dia berbohong",
        "Mereka menangis sedih di tepi pantai",
      ],
      correctAnswer: 1,
    },
  ],

  maluku: [
    {
      id: 1,
      question: "Di desa dan daerah manakah latar tempat cerita Telaga Biru ini terjadi?",
      options: [
        "Desa Mamuya", 
        "Desa Mahakam", 
        "Desa Sumba", 
        "Desa Berua"],
      correctAnswer: 0,
    },
    {
      id: 2,
      question: "Dari sela-sela benda apakah air jernih tiba-tiba memancar keluar hingga membentuk telaga?",
      options: [
        "Sela-sela akar pohon beringin",
        "Sela-sela batu bekas lahar panas",
        "Sela-sela dinding gua yang gelap",
        "Sela-sela pasir di tepi pantai",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Alat apa yang dipukul bertalu-talu untuk memanggil seluruh warga agar berkumpul di lapangan?",
      options: ["Gong perunggu", 
        "Kentungan", 
        "Gendang besar", 
        "Terompet bambu"],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Siapa nama anak perempuan dan anak laki-laki yang dilaporkan hilang oleh keluarga mereka?",
      options: [
        "Bawang dan Kesuna",
        "Malindo dan Mitaloka",
        "Majojaru dan Magohiduuru",
        "Pakande dan Pesut",
      ],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Ke mana Magohiduuru pergi sebelum ia dinyatakan hilang dan belum kembali?",
      options: [
        "Pergi mencari kayu bakar ke dalam hutan",
        "Pergi merantau ke negeri seberang untuk bekerja",
        "Pergi bersembunyi di bawah pohon beringin",
        "Pergi memancing ikan di tengah telaga",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      question: "Apa yang dilakukan oleh Majojaru setiap kali ada kapal yang bersandar di pelabuhan?",
      options: [
        "Membeli barang dagangan dari negeri seberang untuk Magohiduuru",
        "Membantu awak kapal mengangkat barang-barang",
        "Majoraru menangis di tepi dermaga karena takut dengan air laut",
        "Datang mendekat dan bertanya tentang kabar Magohiduuru",
      ],
      correctAnswer: 3,
    },
    {
      id: 7,
      question:
        "Kabar buruk apa yang disampaikan oleh salah seorang awak kapal kepada Majojaru?",
      options: [
        "Magohiduuru sudah menjadi raja di negeri seberang", 
        "Magohiduuru tidak mau pulang lagi ke Desa Mamuya karena dia sudah berkeluarga", 
        "Kapal Magohiduuru karam dihantam badai besar dan tidak ada yang selamat", 
        "Magohiduuru lupa ingatan dan tinggal di pulau lain"],
      correctAnswer: 2,
    },
    {
      id: 8,
      question: "Di mana Majojaru bersembunyi dan menangis sejadi-jadinya setelah mendengar kabar buruk tersebut?",
      options: [
        "Di dalam rumah kosong miliknya",
        "Di bawah pohon beringin yang sepi",
        "Di atas batu bekas lahar panas",
        "Di dalam perahu kecil yang sedang berlabuh",
      ],
      correctAnswer: 1,
    },
    {
      id: 9,
      question: "Berapa lama Majojaru menangis tanpa henti?",
      options: [
        "Satu jam berturut-turut",
        "Seminggu penuh tanpa istirahat",
        "Tiga hari dua malam berturut-turut",
        "Dua hari dua malam berturut-turut",
      ],
      correctAnswer: 3,
    },
    {
      id: 10,
      question: "Menurut penjelasan Tetua adat, dari manakah sebenarnya air Telaga Biru itu berasal?",
      options: [
        "Dari luapan air laut yang terbawa angin badai",
        "Dari mata air suci yang keluar dari dalam gua",
        "Dari air mata seorang gadis yang sedang patah hati",
        "Dari sisa air hujan yang tertampung di batu lahar",
      ],
      correctAnswer: 2,
    },
  ],

  "nusa tenggara": [
    {
      id: 1,
      question: "Di pulau manakah latar tempat petani tinggal pada awal cerita?",
      options: ["Pulau Jawa", "Pulau Lombok", "Pulau Sumba", "Pulau Flores"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "Hewan apa yang merusak tanaman dan membuat kebun petani berantakan?",
      options: [
        "Gajah liar",
        "Babi hutan",
        "Tikus tanah",
        "Rusa besar",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Apa nama tombak pusaka yang digunakan petani untuk menjaga kebunnya di malam hari?",
      options: [
        "Numbu Ranggata", 
        "Watu Maladong", 
        "Keris Pusaka", 
        "Tombak Sumba"],
      correctAnswer: 0,
    },
    {
      id: 4,
      question: "Makhluk besar apa yang muncul di pantai dan menawarkan diri untuk mengantar petani ke pulau seberang?",
      options: [
        "Siluman paus raksasa",
        "Siluman buaya putih",
        "Siluman penyu besar",
        "Siluman lumba-lumba",
      ],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Dari mana petani harus memanggil penyu saat ia ingin pulang?",
      options: [
        "Pohon kelapa",
        "Pohon beringin",
        "Batu karang yang tinggi",
        "Tiang kapal dagang",
      ],
      correctAnswer: 0,
    },
    {
      id: 6,
      question: "Menurut nenek tua di pulau seberang, siapakah sebenarnya babi hutan yang merusak kebun petani?",
      options: [
        "Hewan peliharaan raksasa yang tersesat",
        "Manusia sakti yang bisa berubah wujud",
        "Siluman dari dasar laut selatan",
        "Hewan biasa yang sedang kelaparan",
      ],
      correctAnswer: 1,
    },
    {
      id: 7,
      question:
        "Siapakah tokoh di desa pulau seberang yang diceritakan sedang sakit karena luka aneh?",
      options: [
        "Nenek tua pembuat ramuan", 
        "Anak dari petani rajin", 
        "Kepala Desa", 
        "Pengawal istana"],
      correctAnswer: 2,
    },
    {
      id: 8,
      question: "Apa dua benda yang diminta oleh petani sebagai syarat untuk menyembuhkan luka aneh tersebut?",
      options: [
        "Emas murni dan pakaian indah",
        "Ramuan nenek tua dan sayur-sayuran segar",
        "Tombak miliknya dan batu sakti Watu Maladong",
        "Kapal besar dan seekor penyu",
      ],
      correctAnswer: 2,
    },
    {
      id: 9,
      question: "Apa yang dilakukan Kepala Desa setelah ia berhasil disembuhkan oleh petani?",
      options: [
        "Memberikan hadiah semua hartanya dan berterima kasih",
        "Marah dan menantang petani untuk bertarung",
        "Mengusir petani keluar dari pulau seberang",
        "Meminta petani menjadi kepala desa yang baru",
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      question: "Apa yang terjadi ketika petani mengangkat tombaknya saat ditantang bertarung oleh Kepala Desa?",
      options: [
        "Tombak itu patah menjadi dua bagian",
        "Keluar asap hitam yang sangat tebal",
        "Petir menyambar dan Kepala Desa pun kalah",
        "Muncul babi hutan yang sangat besar",
      ],
      correctAnswer: 2,
    },
  ],

  bali: [
    {
      id: 1,
      question: "Bagaimana sifat atau karakter yang dimiliki oleh Kesuna?",
      options: [
        "Malas dan suka berbohong", 
        "Rajin, jujur, dan suka membantu", 
        "Sombong dan suka memamerkan harta", 
        "Penakut dan sering menangis"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Apa pekerjaan yang sedang dilakukan oleh Ayah dan Ibu di luar rumah?",
      options: [
        "Berdagang di pasar desa",
        "Mencari kayu bakar di hutan",
        "Bekerja di sawah",
        "Mencari ikan di sungai",
      ],
      correctAnswer: 2,
    },
    {
      id: 3,
      question: "Apa saja pekerjaan rumah yang diselesaikan oleh Kesuna saat orang tuanya pergi?",
      options: [
        "Membersihkan kebun dan menanam bunga", 
        "Menumbuk padi, mengayak, dan memasak", 
        "Mencuci pakaian dan menjahit baju", 
        "Membuat perhiasan emas di dapur"],
      correctAnswer: 1,
    },
    {
      id: 4,
      question: "Apa yang dikatakan Bawang kepada orang tuanya saat mereka pulang dari sawah?",
      options: [
        "Memuji Kesuna karena sudah memasak makanan yang enak",
        "Mengaku bahwa dia dan Kesuna bekerja bersama-sama",
        "Mengadu dan memfitnah bahwa Kesuna tidak mau bekerja",
        "Meminta izin untuk pergi bermain ke hutan",
      ],
      correctAnswer: 2,
    },
    {
      id: 5,
      question: "Apa akibat dari aduan dan kebohongan yang diucapkan oleh Bawang?",
      options: [
        "Ayah menjadi marah dan mengusir Kesuna dari rumah",
        "Ibu memberikan hadiah perhiasan kepada Bawang",
        "Kesuna diberikan hadiah oleh Ayah karena rajin",
        "Bawang dihukum karena ketahuan berbohong",
      ],
      correctAnswer: 0,
    },
    {
      id: 6,
      question: "Hewan apa yang datang mendekati Kesuna saat ia sedang menangis di dalam hutan?",
      options: [
        "Seekor burung cerukcuk kuning",
        "Seekor babi hutan yang besar",
        "Seekor penyu raksasa",
        "Seekor ruda liar",
      ],
      correctAnswer: 0,
    },
    {
      id: 7,
      question:
        "Kejadian ajaib apa yang terjadi ketika burung tersebut mematuk tubuh Kesuna dengan lembut?",
      options: [
        "Tubuh Kesuna menjadi sangat besar", 
        "Muncul perhiasan emas dari bekas patukan burung", 
        "Tubuh Kesuna terluka dan mengeluarkan darah", 
        "Kesuna bisa terbang bersama burung tersebut"],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Bersama siapakah Kesuna akhirnya tinggal setelah Ayah tetap tidak mau menerimanya kembali?",
      options: [
        "Tinggal sendirian di dalam hutan",
        "Tinggal bersama neneknya",
        "Tinggal di rumah Kepala Desa",
        "Tinggal bersama burung cerukcuk kuning",
      ],
      correctAnswer: 1,
    },
    {
      id: 9,
      question: "Apa yang diucapkan Bawang saat bertemu dengan burung yang sama di dalam hutan?",
      options: [
        "Meminta burung tersebut mengantarnya pulang",
        "Menyuruh burung mematuk dirinya supaya mendapat emas",
        "Memberikan makanan kepada burung tersebut",
        "Mengusir burung tersebut karena takut",
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      question: "Apa yang didapatkan oleh Bawang setelah tubuhnya dipatuk oleh burung tersebut?",
      options: [
        "Perhiasan emas yang lebih banyak dari Kesuna",
        "Baju indah milik seorang bangsawan",
        "Luka di tubuh dan rasa kesakitan",
        "Sepotong batu sakti yang mengeluarkan air",
      ],
      correctAnswer: 2,
    },
  ],

  kalimantan: [
    {
      id: 1,
      question: "Di dekat sungai manakah latar tempat cerita ini terjadi?",
      options: [
        "Sungai Kapuas", 
        "Sungai Mahakam", 
        "Sungai Musi", 
        "Sungai Barito"],
      correctAnswer: 1,
    },
    {
      id: 2,
      question: "Mengapa kehidupan sang ayah dan dua anaknya menjadi sulit pada awal cerita?",
      options: [
        "Karena rumah mereka habis terbakar",
        "Karena sang ibu meninggal dunia",
        "Karena desa mereka dilanda banjir besar",
        "Karena sang ayah kehilangan pekerjaannya",
      ],
      correctAnswer: 1,
    },
    {
      id: 3,
      question: "Di manakah sang ayah pertama kali bertemu dengan wanita yang kemudian menjadi ibu tiri anak-anaknya?",
      options: [
        "Di tepi sungai saat mencari ikan", 
        "Di sebuah pasar tradisional", 
        "Di sebuah pesta desa", 
        "Di dalam hutan saat mencari kayu"],
      correctAnswer: 2,
    },
    {
      id: 4,
      question: "Apa yang dilakukan oleh ibu tiri kepada kedua anak tersebut ketika sang ayah pergi bekerja?",
      options: [
        "Memaksa mereka bekerja tanpa makan dan memfitnah mereka malas",
        "Mengajari mereka menari dan menyanyi dengan indah seperti ibu tiri",
        "Mengajak mereka berlibur ke pesta desa",
        "Membelikan mereka pakaian baru yang indah",
      ],
      correctAnswer: 0,
    },
    {
      id: 5,
      question: "Tugas apa yang diperintahkan oleh ibu tiri kepada kedua anak itu sebelum dia pergi meninggalkan rumah?",
      options: [
        "Mencuci pakaian hingga bersih tanpa ada noda sedikit pun",
        "Mencari kayu dua kali lebih banyak dari biasanya",
        "Membersihkan seluruh halaman rumah",
        "Mencari 100 ekor ikan di Sungai Mahakam",
      ],
      correctAnswer: 1,
    },
    {
      id: 6,
      question: "Apa yang ditemukan oleh kedua anak tersebut ketika mereka pulang setelah mencari kayu?",
      options: [
        "Ayah dan ibu tiri sedang menunggu mereka sambil makan",
        "Ibu tiri sedang memasak ikan yang ditangkap dari sungai",
        "Rumah mereka dipenuhi oleh warga desa",
        "Rumah sudah kosong dan semua barang telah dibawa pergi",
      ],
      correctAnswer: 3,
    },
    {
      id: 7,
      question:
        "Apa yang ditemukan kedua anak itu di dalam dapur sebuah rumah kecil setelah berjalan berhari-hari mencari ayahnya?",
      options: [
        "Buah-buahan yang segar", 
        "Bubur panas yang sedang dimasak", 
        "Ikan goreng yang banyak dan lezat", 
        "Air minum yang dingin"],
      correctAnswer: 1,
    },
    {
      id: 8,
      question: "Apa yang dirasakan oleh kedua anak tersebut sesaat setelah memakan makanan di dapur rumah kecil itu?",
      options: [
        "Tubuh mereka terasa sangat dingin dan menggigil",
        "Mereka langsung tertidur pulas karena kenyang",
        "Tubuh mereka terasa panas bagaikan terbakar",
        "Mereka menjadi sangat kuat dan bersemangat",
      ],
      correctAnswer: 2,
    },
    {
      id: 9,
      question: "Ke mana kedua anak itu berlari dan melompat untuk meredakan rasa panas di tubuh mereka?",
      options: [
        "Ke dalam hutan yang rindang",
        "Ke dalam sungai",
        "Ke atas gunung yang sejuk",
        "Ke dalam sumur tua di belakang rumah",
      ],
      correctAnswer: 1,
    },
    {
      id: 10,
      question: "Makhluk seperti apakah Pesut Mahakam yang dilihat oleh sang ayah di akhir cerita?",
      options: [
        "Dua ekor burung yang terbang tinggi ke langit",
        "Dua bongkah batu besar di tepi sungai",
        "Dua makhluk seperti ikan berwajah manusia",
        "Dua ekor buaya raksasa yang menjaga sungai",
      ],
      correctAnswer: 2,
    },
  ],
}

async function main() {
  console.log("Start seeding questions...")

  const islands = await prisma.island.findMany()

  for (const island of islands) {
    const islandKey = island.islandName.toLowerCase()
    const questions = questionsData[islandKey]

    if (!questions) {
      console.log(`No questions found for island: ${island.islandName}`)
      continue
    }

    console.log(`Processing questions for island: ${island.islandName}`)

    // Find Pre-Test and Post-Test stories
    const stories = await prisma.story.findMany({
      where: {
        islandId: island.id,
        title: {
          in: ["Pre-Test", "Post-Test"],
        },
      },
    })

    for (const story of stories) {
      const isPreTest = story.title.includes("Pre-Test")
      const stageType = isPreTest ? StageType.PRE_TEST : StageType.POST_TEST

      console.log(
        `  Seeding questions for story: ${story.title} (${stageType})`
      )

      // Delete existing interactive slides for this story to avoid duplicates
      await prisma.interactiveSlide.deleteMany({
        where: { storyId: story.id },
      })
      console.log(`    Deleted existing interactive slides`)

      // Delete existing questions for this story and stage type to avoid duplicates
      await prisma.question.deleteMany({
        where: {
          storyId: story.id,
          stageType: stageType,
        },
      })

      // Track created questions for interactive slides
      const createdQuestions: { id: string; slideNumber: number }[] = []

      for (const q of questions) {
        const createdQuestion = await prisma.question.create({
          data: {
            storyId: story.id,
            stageType: stageType,
            questionType: QuestionType.MCQ,
            questionText: q.question,
            xpValue: 10, // Default XP value
            answerOptions: {
              create: q.options.map((opt: string, index: number) => ({
                optionText: opt,
                isCorrect: index === q.correctAnswer,
              })),
            },
          },
        })

        // Use the id from questionsData as the slideNumber
        createdQuestions.push({
          id: createdQuestion.id,
          slideNumber: q.id,
        })

        console.log(`    Created question: ${q.question.substring(0, 30)}...`)
      }

      // Create interactive slides for each question (GAME type)
      for (const questionData of createdQuestions) {
        await prisma.interactiveSlide.create({
          data: {
            storyId: story.id,
            slideNumber: questionData.slideNumber,
            slideType: SlideType.GAME,
            questionId: questionData.id,
          },
        })
      }
      console.log(
        `    Created ${createdQuestions.length} interactive slides (GAME)`
      )

      // Add an ENDING slide at the end
      const lastSlideNumber = Math.max(
        ...createdQuestions.map((q) => q.slideNumber)
      )
      await prisma.interactiveSlide.create({
        data: {
          storyId: story.id,
          slideNumber: lastSlideNumber + 1,
          slideType: SlideType.ENDING,
          contentText: "Kuis Selesai.",
        },
      })
      console.log(`    Created ENDING slide`)
    }
  }

  console.log("Seeding questions finished.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
