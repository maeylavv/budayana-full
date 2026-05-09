// A central dictionary scaling Island > Topic > Level
export const QUIZ_DATA = {
  sumatra: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/level1 sumatra.png',
          text: 'Tahukah kamu? Sumatera Barat memiliki rumah adat yang sangat indah bernama Rumah Gadang. Ciri khas utama rumah ini adalah atapnya yang runcing menjulang ke atas seperti tanduk kerbau, yang disebut dengan Gonjong. Zaman dahulu, atap ini dibuat dari bahan alami bernama Ijuk agar bagian dalam rumah tetap terasa sejuk. Selain itu, Rumah Gadang dibangun berbentuk panggung dengan tiang yang tinggi untuk melindungi penghuninya dari banjir dan gangguan hewan liar di hutan.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Sumatera Barat yang memiliki atap runcing seperti tanduk kerbau?',
            options: ['Rumah Joglo', 'Rumah Gadang', 'Rumah Honai', 'Rumah Limas'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan bentuk atap "Gonjong" (tanduk kerbau) yang benar!',
            options: [
              { text: 'Atap Limas',   emoji: '🔼', image: '/assets/budayana/islands/atap limas.png' },
              { text: 'Atap Runcing', emoji: '⛰️', image: '/assets/budayana/islands/atap runcing.png' },
              { text: 'Atap Datar',   emoji: '➖', image: '/assets/budayana/islands/atap datar.png' },
              { text: 'Atap Kubah',   emoji: '🕌', image: '/assets/budayana/islands/atap kubah.png' }
            ],
            correctIndex: 1, // B - Atap Runcing (Gonjong)
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan untuk membuat atap Rumah Gadang pada zaman dahulu?',
            options: ['Ijuk', 'Seng', 'Genteng', 'Jerami'],
            correctIndex: 0, // A
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Gadang dibuat berbentuk panggung dengan tiang yang tinggi?',
            options: ['Terlihat mewah', 'Menjemur pakaian', 'Terhindar banjir & hewan', 'Udara dingin'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, berapa jumlah minimal lengkungan atap (gonjong) yang biasanya ada pada Rumah Gadang?',
            options: ['2', '4', '6', '8'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/level2 sumatra.png', // Updated image link dynamically targeting Level 2's specific graphic!
          text: 'Rumah Gadang tidak hanya indah, tetapi juga sangat pintar desainnya. Rumah ini dibangun tanpa menggunakan paku besi sama sekali. Sebagai gantinya, para leluhur menggunakan pasak kayu untuk menyambungkan tiang-tiangnya.\n\nMengapa demikian?\nTernyata, sambungan kayu ini membuat bangunan menjadi lentur dan tidak mudah roboh saat terjadi gempa bumi.\n\nSelain itu, setiap ukiran bunga pada dinding rumah melambangkan kekayaan alam Sumatera Barat, sementara atap runcingnya melambangkan kemenangan dan semangat masyarakatnya.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan bagian Rumah Gadang dari yang paling bawah hingga paling atas!',
            draggables: [
              { id: 'd1', text: 'Batu Sandi', color: '#FFF3B0' },
              { id: 'd2', text: 'Lantai Panggung', color: '#dbe0fd' },
              { id: 'd3', text: 'Atap Gonjong', color: '#ffb2d8' },
              { id: 'd4', text: 'Tiang Kayu', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Posisi 1' },
              { id: 'z2', label: 'Posisi 2' },
              { id: 'z3', label: 'Posisi 3' },
              { id: 'z4', label: 'Posisi 4' }
            ],
            correctOrder: ['d1', 'd4', 'd2', 'd3'], // Batu Sandi -> Tiang Kayu -> Lantai Panggung -> Atap Gonjong
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membangun Rumah Gadang yang kuat, jenis kayu apa yang digunakan untuk tiang utama sesuai tradisi?',
            options: ['Kayu Sengon yang ringan', 'Kayu jati atau kayu ulin tua', 'Batang pohon kelapa', 'Papan kayu lapis (triplek)'],
            correctIndex: 1, 
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Gadang disambung tanpa menggunakan paku besi sama sekali?',
            options: ['Agar atap tidak mudah bocor', 'Agar tetap lentur saat terjadi gempa', 'Supaya cahaya matahari tidak masuk', 'Agar burung tidak bisa bersarang'],
            correctIndex: 1, 
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan simbol berikut dengan maknanya!',
            draggables: [
              { id: 'm1', text: 'Atap Runcing', color: '#FFF3B0', image: '/assets/budayana/islands/atap runcing.png' },
              { id: 'm2', text: 'Ukiran Bunga', color: '#D4DCFF', image: '/assets/budayana/islands/ukiran bunga.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Melambangkan kemenangan' },
              { id: 'z2', label: 'Melambangkan kekayaan alam' }
            ],
            correctOrder: ['m1', 'm2'], 
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/level3 sumatra.png', // Or level3 sumatra as per user, I'll use standard image source based on screenshot monkey
          text: 'Seiring berjalannya waktu, banyak Rumah Gadang yang mulai berubah. Karena ijuk semakin sulit ditemukan dan mudah bocor, banyak warga yang mengganti atapnya menggunakan seng. Selain itu, Rumah Gadang yang aslinya sangat luas kini harus dibangun di kota-kota besar yang lahannya semakin sempit.\n\nHal ini memicu perdebatan: apakah kita harus tetap mempertahankan bentuk asli sesuai tradisi, atau boleh mengubahnya agar lebih modern dan praktis?\n\nSebagai generasi penerus, kita harus bijak dalam menjaga warisan budaya ini agar tidak hilang ditelan zaman.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu membangun Rumah Gadang di kota besar, apakah kamu tetap harus membuat tangga di bagian luar?',
            opinions: [
              { id: 'op1', text: 'Tetap Harus' },
              { id: 'op2', text: 'Boleh Diubah' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena tangga luar adalah ciri khas untuk menyambut tamu sesuai tradisi' },
              { id: 'r2', text: 'B. Agar menghemat tempat namun tetap menggunakan ukiran khas di pintu' },
              { id: 'r3', text: 'C. Supaya rumah terlihat unik dibandingkan rumah tetangga' },
              { id: 'r4', text: 'D. Agar orang lain tidak mudah masuk ke dalam rumah' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Menurutmu, mengganti atap ijuk menjadi atap seng pada Rumah Gadang adalah tindakan yang...',
            opinions: [
              { id: 'op1', text: 'Tepat' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena atap seng lebih tahan lama dan tidak mudah bocor' },
              { id: 'r2', text: 'B. Karena kehilangan keaslian dan ciri khas budaya lokal' },
              { id: 'r3', text: 'C. Agar lebih menghemat biaya perawatan setiap tahunnya' },
              { id: 'r4', text: 'D. Supaya rumah terlihat lebih modern seperti rumah di kota' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op1', reasonId: 'r3' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan ajakan untuk temanmu agar mau menjaga kebersihan Rumah Gadang!',
            draggables: [
              { id: 'w1', text: 'menjaga',       color: '#f6bad3ff' },
              { id: 'w2', text: 'Rumah Gadang',  color: '#99AAEF' },
              { id: 'w3', text: 'warisan budaya', color: '#FFC7B1' },
              { id: 'w4', text: 'sebagai',       color: '#a5ec93ff' },
              { id: 'w5', text: 'Ayo kita',      color: '#f5f199ff' },
              { id: 'w6', text: 'kebersihan',    color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w5', 'w1', 'w6', 'w2', 'w4', 'w3'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 sumatra.png',
          text: 'Salah satu makanan tradisional yang paling terkenal dari Sumatera Barat adalah Rendang. Makanan ini berbahan dasar daging sapi yang dimasak dengan aneka rempah dan santan kelapa. Rendang memiliki warna cokelat gelap yang khas. Untuk mendapatkan warna dan rasa yang lezat, Rendang harus dimasak dalam waktu yang sangat lama, yaitu sekitar 4 sampai 8 jam. Karena proses memasak yang lama ini, Rendang bisa awet dan tahan lama meskipun tidak disimpan di dalam kulkas.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan untuk membuat Rendang dari Sumatera Barat?',
            options: ['Daging Ayam', 'Daging Sapi', 'Ikan Tongkol', 'Daging Kambing'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar bumbu cair yang membuat Rendang terasa gurih dan berminyak!',
            options: [
              { text: 'Air Bening', emoji: '💧', image: '/assets/budayana/islands/air bening.png' },
              { text: 'Minyak Goreng', emoji: '🍾', image: '/assets/budayana/islands/minyak goreng.png' },
              { text: 'Santan Kelapa', emoji: '🥥', image: '/assets/budayana/islands/santan kelapa.png' },
              { text: 'Kecap Manis', emoji: '🍯', image: '/assets/budayana/islands/kecap manis.png' }
            ],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berapa lama waktu yang biasanya dibutuhkan untuk memasak Rendang hingga kering?',
            options: ['15 - 30 Menit', '1 Jam', '4 - 8 Jam', '24 Jam Full'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rendang yang sudah dimasak hingga kering bisa tahan lama tanpa kulkas?',
            options: ['Karena dagingnya dicampur dengan garam yang sangat banyak', 'Karena Rendang tidak disukai oleh bakteri', 'Karena proses masak yang lama membunuh bakteri dan santan menjadi pengawet', 'Karena warna cokelat gelap menakuti kuman'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, warna khas dari Rendang yang sudah matang sempurna adalah...',
            options: ['Kuning Cerah', 'Merah Menyala', 'Cokelat Gelap', 'Putih Bersih'],
            correctIndex: 2, // C
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 sumatra.png',
          text: 'Mengapa Rendang harus dimasak hingga kering dan berwarna gelap? Ternyata, proses memasak yang lama berfungsi sebagai pengawet alami. Santan dan rempah-rempah yang mengental akan membungkus daging, sehingga bakteri tidak mudah masuk. Selain itu, Rendang memiliki makna yang dalam bagi masyarakat Minangkabau. Daging melambangkan niniak mamak (pemimpin), santan melambangkan kaum intelektual, cabai melambangkan ulama yang tegas, dan bumbu rempah melambangkan seluruh masyarakat yang bersatu.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan perubahan masakan dari cair hingga menjadi Rendang!',
            draggables: [
              { id: 'd1', text: 'Gulai (Masih Banyak Kuah)', color: '#FFF3B0' },
              { id: 'd2', text: 'Kalio (Kuah Mengental)', color: '#dbe0fd' },
              { id: 'd3', text: 'Rendang (Kuah Kering/Berminyak)', color: '#ffb2d8' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' }
            ],
            correctOrder: ['d1', 'd2', 'd3'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Rendang yang tidak terlalu pedas untuk anak kecil, bumbu mana yang harus dikurangi?',
            options: ['Santan', 'Daging', 'Cabai', 'Lengkuas'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa perbedaan utama antara "Kalio" dan "Rendang" menurut teks?',
            options: ['Kalio menggunakan daging ayam, Rendang menggunakan sapi', 'Kalio masih basah/berkuah kental, Rendang sudah kering dan gelap', 'Kalio rasanya manis, sedangkan Rendang rasanya sangat pahit', 'Kalio dimasak 10 jam, sedangkan Rendang hanya 1 jam'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bahan Rendang dengan simbol maknanya!',
            draggables: [
              { id: 'm1', text: 'Daging Sapi', color: '#FFF3B0', image: '/assets/budayana/islands/daging sapi.png' },
              { id: 'm2', text: 'Cabai', color: '#D4DCFF', image: '/assets/budayana/islands/cabai merah.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Melambangkan Pemimpin (Niniak Mamak)' },
              { id: 'z2', label: 'Melambangkan Ulama yang Tegas' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 sumatra.png',
          text: 'Saat ini, Rendang telah menjadi makanan terlezat di dunia. Banyak orang mulai membuat variasi Rendang, seperti Rendang instan dalam kemasan atau Rendang yang tidak terlalu kering agar lebih cepat matang (disebut Kalio). Namun, ada tantangan besar: apakah Rendang yang dimasak cepat dan masih basah tetap bisa disebut Rendang yang asli? Sebagai generasi muda, kita harus bangga pada warisan kuliner ini dan menjaga cara memasak tradisionalnya agar cita rasanya yang mendunia tidak berubah.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu adalah pengusaha kuliner, apakah kamu setuju menjual "Rendang Instan" dalam kaleng agar bisa dikirim ke luar negeri?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar orang di seluruh dunia bisa mencicipi Rendang dengan mudah' },
              { id: 'r2', text: 'B. Karena Rendang kalengan akan mengubah rasa asli bumbu rempahnya' },
              { id: 'r3', text: 'C. Supaya harga Rendang menjadi lebih mahal dari biasanya' },
              { id: 'r4', text: 'D. Karena memasak Rendang di luar negeri sangat dilarang' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Bolehkah kita mengganti daging sapi dengan daging ayam dan tetap menyebutnya sebagai Rendang?',
            opinions: [
              { id: 'op1', text: 'Boleh' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar orang yang tidak makan daging sapi tetap bisa menikmati bumbu Rendang' },
              { id: 'r2', text: 'B. Rendang asli secara tradisional harus menggunakan daging sapi agar tahan lama' },
              { id: 'r3', text: 'C. Karena rasa daging ayam jauh lebih enak daripada daging sapi' },
              { id: 'r4', text: 'D. Supaya waktu memasaknya menjadi jauh lebih singkat (hanya 30 menit)' }
            ],
            // Jika Boleh -> A; Jika Kurang Tepat -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk bangga pada kuliner asli Indonesia!',
            draggables: [
              { id: 'w1', text: 'Ayo kita', color: '#f5f199ff' },
              { id: 'w2', text: 'cintai', color: '#f6bad3ff' },
              { id: 'w3', text: 'Rendang', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'makanan', color: '#FFC7B1' },
              { id: 'w6', text: 'terlezat di dunia', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 sumatra.png',
          text: 'Pernahkah kamu melihat tarian yang penarinya duduk berjejer dan bergerak sangat cepat? Itu adalah Tari Saman dari suku Gayo, Aceh. Berbeda dengan tarian lain yang diiringi banyak alat musik petik atau tiup, Tari Saman justru menggunakan suara dari gerakan tubuh para penarinya sendiri. Mereka menepuk dada, menepuk tangan, dan menepuk paha untuk menciptakan irama yang kompak. Karena keunikan dan kecepatannya, Tari Saman telah diakui oleh UNESCO sebagai warisan budaya dunia.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Dari provinsi manakah Tari Saman berasal?',
            options: ['Sumatera Barat', 'Aceh', 'Sumatera Selatan', 'Riau'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan posisi penari Saman yang benar!',
            options: [
              { text: 'Berdiri melingkar', emoji: '🕺', image: '/assets/budayana/islands/berdiri melingkar.png' },
              { text: 'Duduk berjejer rapat', emoji: '🧑‍🤝‍🧑', image: '/assets/budayana/islands/duduk berjejer rapat.png' },
              { text: 'Melompat tinggi', emoji: '🏃', image: '/assets/budayana/islands/melompat tinggi.png' },
              { text: 'Berpasangan laki-perempuan', emoji: '👫', image: '/assets/budayana/islands/berpasangan laki-perempuan.png' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang menjadi "alat musik" utama dalam mengiringi gerak Tari Saman?',
            options: ['Gitar dan Bass', 'Seruling Bambu', 'Tepukan tangan, dada, dan paha', 'Piano Elektrik'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang terjadi jika salah satu penari Saman tidak kompak atau salah melakukan gerakan?',
            options: ['Penonton akan ikut menari', 'Gerakan tari akan menjadi lebih lambat', 'Irama musik pengiring akan terganggu/rusak', 'Pakaian penari akan mudah lepas'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, Tari Saman telah diakui sebagai warisan budaya dunia oleh organisasi...',
            options: ['UNICEF', 'WHO', 'UNESCO', 'FIFA'],
            correctIndex: 2, // C
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 sumatra.png',
          text: 'Mengapa Tari Saman tidak menggunakan alat musik seperti musik band modern? Dalam tradisi Aceh, suara tepukan tangan dan dada berfungsi sebagai pengatur tempo dan musik pengiring sekaligus. Keindahan tari ini terletak pada kekompakan dan kerja sama tim. Jika satu penari salah bergerak, maka irama musiknya akan rusak. Selain itu, Tari Saman dipimpin oleh seorang Syeikh yang bernyanyi memberikan instruksi gerakan. Tarian ini melambangkan pendidikan, keagamaan, dan sopan santun masyarakat Aceh.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan tempo (kecepatan) gerakan Tari Saman dari awal hingga akhir!',
            draggables: [
              { id: 'd1', text: 'Lambat (Pembukaan)', color: '#FFF3B0' },
              { id: 'd2', text: 'Sedang', color: '#dbe0fd' },
              { id: 'd3', text: 'Cepat', color: '#ffb2d8' },
              { id: 'd4', text: 'Sangat Cepat (Puncak)', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin menjadi seorang penari Saman yang baik, kemampuan apa yang paling utama harus kamu latih?',
            options: ['Kemampuan melompat tinggi', 'Konsentrasi dan kekompakan tim', 'Kekuatan berlari jauh', 'Kelenturan jari tangan'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa peran seorang "Syeikh" sangat penting dalam pementasan Tari Saman?',
            options: ['Untuk mengumpulkan tiket dari penonton', 'Untuk memimpin nyanyian dan mengatur perubahan gerakan', 'Sebagai penari cadangan jika ada yang sakit', 'Untuk menyiapkan pakaian para penari'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan gerakan tubuh dengan fungsinya dalam Saman!',
            draggables: [
              { id: 'm1', text: 'Tepukan Dada', color: '#FFF3B0', image: '/assets/budayana/islands/tepukan dada.png' },
              { id: 'm2', text: 'Tepukan Tangan', color: '#D4DCFF', image: '/assets/budayana/islands/tepukan tangan.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Memberikan suara berat/bass' },
              { id: 'z2', label: 'Memberikan suara tempo tinggi/treble' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 sumatra.png',
          text: 'Zaman sekarang, banyak Tari Saman ditampilkan dengan tambahan musik elektronik atau alat musik modern agar terdengar lebih "seru". Namun, ada kekhawatiran bahwa suara asli tepukan tubuh yang menjadi ciri khas utama Saman akan tertutup oleh musik keras tersebut. Apakah menurutmu Tari Saman harus tetap menggunakan suara tubuh asli tanpa musik tambahan, atau boleh ditambahkan musik modern agar anak muda lebih tertarik menontonnya? Kita harus bijak menjaga keaslian gerak dan bunyi ini.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika Tari Saman diiringi dengan alat musik drum elektrik agar terdengar lebih modern?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar pertunjukan terlihat lebih keren di depan penonton luar negeri' },
              { id: 'r2', text: 'B. Karena akan menghilangkan suara asli tepukan tubuh yang menjadi keunikan dunia' },
              { id: 'r3', text: 'C. Supaya penari tidak perlu lagi menepuk dada terlalu keras' },
              { id: 'r4', text: 'D. Karena drum elektrik jauh lebih murah daripada kostum tari' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah Tari Saman boleh dipelajari oleh orang yang bukan berasal dari suku Gayo atau Aceh?',
            opinions: [
              { id: 'op1', text: 'Boleh' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar budaya Indonesia semakin dikenal dan dilestarikan oleh banyak orang' },
              { id: 'r2', text: 'B. Karena hanya orang asli daerah tersebut yang memiliki kemampuan bergerak cepat' },
              { id: 'r3', text: 'C. Supaya orang lain bisa meniru gerakannya tanpa seizin suku Gayo' },
              { id: 'r4', text: 'D. Agar tarian tersebut bisa diubah-ubah gerakannya sesuka hati' }
            ],
            // Jika Boleh -> A; Jika Kurang Tepat -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk menjaga kelestarian Tari Saman!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'lestarikan', color: '#f6bad3ff' },
              { id: 'w3', text: 'Tari Saman', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'kebanggaan', color: '#FFC7B1' },
              { id: 'w6', text: 'budaya Indonesia', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  kalimantan: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/level1 kalimantan.png',
          text: 'Di pedalaman Kalimantan, terdapat rumah adat yang sangat panjang bernama Rumah Betang. Sesuai namanya, rumah ini bisa memiliki panjang hingga 150 meter dan dihuni oleh puluhan keluarga secara bersama-sama. Rumah Betang dibangun tinggi di atas tanah menggunakan kayu ulin yang sangat kuat. Untuk masuk ke dalam rumah, warga harus menaiki sebuah tangga kayu yang unik bernama Hejot. Kehidupan di Rumah Betang menunjukkan betapa eratnya rasa persaudaraan masyarakat Dayak.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Kalimantan yang dikenal karena ukurannya yang sangat panjang?',
            options: ['Rumah Joglo', 'Rumah Honai', 'Rumah Betang', 'Rumah Tongkonan'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar "Hejot" atau tangga kayu untuk masuk ke Rumah Betang yang benar!',
            options: [
              { text: 'Tangga Besi', emoji: '🪜', image: '/assets/budayana/islands/tangga besi.png' },
              { text: 'Batang Kayu Bertakik', emoji: '🪵', image: '/assets/budayana/islands/batang kayu bertakik.png' },
              { text: 'Eskalator', emoji: '🔼', image: '/assets/budayana/islands/eskalator.png' },
              { text: 'Lift Kayu', emoji: '🛗', image: '/assets/budayana/islands/lift kayu.png' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jenis kayu apa yang sangat kuat dan sering digunakan sebagai tiang utama Rumah Betang?',
            options: ['Kayu Ulin', 'Kayu Pinus', 'Kayu Sengon', 'Kayu Karet'],
            correctIndex: 0, // A
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Betang dibangun sangat tinggi (3-5 meter) di atas tanah?',
            options: ['Agar bisa melihat pemandangan dari ketinggian', 'Supaya lebih dekat dengan sinar matahari', 'Melindungi diri dari banjir dan hewan buas', 'Agar jemuran pakaian lebih cepat kering'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa nilai utama yang ditunjukkan dari cara hidup masyarakat di Rumah Betang?',
            options: ['Keinginan untuk menjadi kaya', 'Rasa persaudaraan dan gotong royong', 'Persaingan antar keluarga', 'Kemandirian masing-masing orang'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/level2 kalimantan.png',
          text: 'Mengapa Rumah Betang dibuat sangat panjang dan tinggi? Dahulu, tinggi rumah yang mencapai 3 hingga 5 meter bertujuan untuk melindungi warga dari banjir dan serangan musuh atau hewan buas. Di dalam rumah yang panjang ini, terdapat pembagian ruangan yang adil. Bagian depan digunakan sebagai ruang bersama untuk rapat dan upacara adat, sementara bagian belakang dibagi menjadi kamar-kamar untuk setiap keluarga. Di sini, semua masalah diselesaikan dengan cara musyawarah, sehingga tercipta suasana yang damai.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan posisi bagian Rumah Betang dari bawah ke atas!',
            draggables: [
              { id: 'd1', text: 'Tiang Kayu Ulin', color: '#FFF3B0' },
              { id: 'd2', text: 'Lantai Kayu', color: '#dbe0fd' },
              { id: 'd3', text: 'Ruang Kamar', color: '#ffb2d8' },
              { id: 'd4', text: 'Atap Tinggi', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Posisi 1' },
              { id: 'z2', label: 'Posisi 2' },
              { id: 'z3', label: 'Posisi 3' },
              { id: 'z4', label: 'Posisi 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika ada masalah di antara dua keluarga di Rumah Betang, di bagian manakah sebaiknya masalah itu diselesaikan?',
            options: ['Di dalam kamar pribadi masing-masing', 'Di hutan belakang rumah', 'Di ruang bersama bagian depan (Serambi)', 'Di bawah tiang rumah'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang akan terjadi jika tangga "Hejot" ditarik ke atas pada malam hari sesuai tradisi lama?',
            options: ['Pencuri akan memberikan bantuan', 'Udara dingin akan lebih mudah masuk', 'Rumah menjadi lebih aman dari gangguan luar', 'Rumah akan menjadi lebih ringan'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian rumah dengan fungsinya!',
            draggables: [
              { id: 'm1', text: 'Ruang Depan', color: '#FFF3B0', image: '/assets/budayana/islands/ruang depan.png' },
              { id: 'm2', text: 'Kamar Belakang', color: '#D4DCFF', image: '/assets/budayana/islands/kamar belakang.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tempat Musyawarah Bersama' },
              { id: 'z2', label: 'Tempat Tinggal Keluarga' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/level3 kalimantan.png',
          text: 'Kini, banyak keluarga yang mulai meninggalkan Rumah Betang dan membangun rumah pribadi yang terpisah-pisah. Hal ini dikarenakan sulitnya merawat bangunan kayu yang sangat luas dan risiko kebakaran yang tinggi. Namun, jika Rumah Betang ditinggalkan, semangat gotong royong dan kebersamaan antar keluarga dikhawatirkan akan memudar. Apakah kita harus mempertahankan tradisi tinggal bersama di satu rumah panjang, atau cukup menyimpan Rumah Betang sebagai simbol budaya saja? Ini adalah tantangan besar bagi pelestarian budaya Dayak.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu tinggal di Rumah Betang dan melihat salah satu bagian kayu mulai rapuh, tindakan apa yang paling tepat?',
            opinions: [
              { id: 'op1', text: 'Lapor Ketua Adat' },
              { id: 'op2', text: 'Perbaiki Sendiri' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar bisa dikerjakan bersama-sama (gotong royong) oleh semua warga' },
              { id: 'r2', text: 'B. Supaya tidak merepotkan orang lain dan cepat selesai' },
              { id: 'r3', text: 'C. Biar orang lain tidak tahu ada kerusakan di rumah' },
              { id: 'r4', text: 'D. Agar kayu yang rusak bisa dijual ke tempat lain' }
            ],
            // Jika Lapor -> A; Jika Sendiri -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika Rumah Betang diubah menjadi penginapan turis agar tetap terawat?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar ada biaya untuk perbaikan dan budaya dikenal dunia' },
              { id: 'r2', text: 'B. Karena rumah adat harusnya hanya untuk tempat tinggal warga asli' },
              { id: 'r3', text: 'C. Supaya warga bisa mendapatkan uang dengan mudah' },
              { id: 'r4', text: 'D. Agar Rumah Betang terlihat lebih modern seperti hotel' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk menjaga kerukunan di rumah panjang!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'hidup rukun', color: '#f6bad3ff' },
              { id: 'w3', text: 'dan', color: '#99AAEF' },
              { id: 'w4', text: 'bergotong royong', color: '#a5ec93ff' },
              { id: 'w5', text: 'di', color: '#FFC7B1' },
              { id: 'w6', text: 'Rumah Betang', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 kalimantan.png',
          text: 'Pernahkah kamu mencoba sup ayam yang sangat harum dari Kalimantan Selatan? Namanya adalah Soto Banjar. Bahan utamanya adalah daging ayam yang disuwir-suwir. Ciri khas soto ini adalah aroma rempahnya yang sangat kuat karena menggunakan Kayu Manis dan cengkih. Berbeda dengan soto lainnya yang menggunakan nasi, Soto Banjar asli disajikan bersama potongan Ketupat dan pelengkap seperti perkedel kentang serta telur bebek.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan protein utama yang digunakan dalam masakan Soto Banjar?',
            options: ['Daging Sapi', 'Daging Ayam', 'Ikan Haruan', 'Daging Kambing'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar rempah yang memberikan aroma harum yang khas pada Soto Banjar!',
            options: [
              { text: 'Cabai Merah', emoji: '🌶️', image: '/assets/budayana/islands/cabai merah.png' },
              { text: 'Batang Kayu Manis', emoji: '🪵', image: '/assets/budayana/islands/batang kayu manis.png' },
              { text: 'Daun Bayam', emoji: '🥬', image: '/assets/budayana/islands/daun bayam.png' },
              { text: 'Biji Jagung', emoji: '🌽', image: '/assets/budayana/islands/biji jagung.png' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa pengganti nasi yang biasanya disajikan dalam satu mangkuk Soto Banjar?',
            options: ['Roti Tawar', 'Papeda', 'Ketupat', 'Singkong Rebus'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa kuah Soto Banjar memiliki rasa yang gurih dan sedikit kental meskipun tanpa santan?',
            options: ['Karena dicampur dengan tepung terigu yang banyak', 'Karena dicampur dengan sedikit susu cair atau kuning telur', 'Karena air rebusannya diambil dari air kelapa', 'Karena dimasak bersama dengan kulit pisang'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, Soto Banjar biasanya disajikan bersama pelengkap berupa...',
            options: ['Kerupuk Udang dan Tempe', 'Perkedel Kentang dan Telur Bebek', 'Tahu Goreng dan Sambal Kacang', 'Potongan Nanas dan Timun'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 kalimantan.png',
          text: 'Mengapa kuah Soto Banjar terkadang terlihat sedikit keruh dan terasa sangat gurih? Ternyata, dalam resep aslinya, kuah soto dicampur dengan sedikit susu cair atau kuning telur rebus yang dihaluskan. Campuran ini membuat rasa kuah menjadi lebih creamy atau kental tanpa menggunakan santan. Rempah kayu manis di dalamnya bukan hanya untuk pengharum, tetapi juga membantu menghangatkan tubuh. Soto Banjar biasanya dimakan bersama perasan jeruk nipis dan sambal agar rasanya semakin segar.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan langkah penyajian Soto Banjar di dalam mangkuk!',
            draggables: [
              { id: 'd1', text: 'Potongan Ketupat', color: '#FFF3B0' },
              { id: 'd2', text: 'Suwiran Ayam', color: '#dbe0fd' },
              { id: 'd3', text: 'Siraman Kuah Panas', color: '#ffb2d8' },
              { id: 'd4', text: 'Perasan Jeruk Nipis', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Langkah 1' },
              { id: 'z2', label: 'Langkah 2' },
              { id: 'z3', label: 'Langkah 3' },
              { id: 'z4', label: 'Langkah 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Soto Banjar yang aromanya sangat wangi, rempah apa yang wajib kamu masukkan ke dalam air rebusannya?',
            options: ['Kunyit dan Kencur', 'Kayu Manis dan Cengkih', 'Terasi dan Petis', 'Asam Jawa dan Gula Merah'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa fungsi utama dari perasan jeruk nipis yang ditambahkan ke dalam Soto Banjar?',
            options: ['Agar warna kuah berubah menjadi merah', 'Menghilangkan bau amis ayam dan menambah kesegaran rasa', 'Supaya potongan ketupat menjadi lebih keras', 'Agar kuah soto menjadi lebih kental seperti lem'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bahan Soto Banjar dengan ciri khasnya!',
            draggables: [
              { id: 'm1', text: 'Kuah Soto', color: '#FFF3B0', image: '/assets/budayana/islands/kuah_soto.png' },
              { id: 'm2', text: 'Rempah', color: '#D4DCFF', image: '/assets/budayana/islands/rempah.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Gurih karena campuran susu/telur' },
              { id: 'z2', label: 'Wangi karena Kayu Manis' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 kalimantan.png',
          text: 'Saat ini, Soto Banjar mulai dijual di berbagai daerah dengan modifikasi, seperti mengganti ketupat dengan nasi atau menghilangkan perkedel kentangnya agar lebih murah. Muncul perdebatan: apakah Soto Banjar tanpa ketupat dan kayu manis masih bisa disebut Soto Banjar yang asli? Kita harus mengenal bahan-bahan aslinya agar keunikan rasa kuliner dari Suku Banjar ini tetap terjaga kemurniannya hingga masa depan.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu membuka warung soto, setujukah kamu mengganti ketupat dengan nasi putih biasa agar lebih praktis?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar lebih mudah disukai oleh pelanggan yang terbiasa makan nasi' },
              { id: 'r2', text: 'B. Karena Soto Banjar asli identik dengan ketupat, menggantinya akan merubah ciri khasnya' },
              { id: 'r3', text: 'C. Supaya biaya produksi menjadi jauh lebih mahal' },
              { id: 'r4', text: 'D. Agar porsi makanan terlihat lebih kecil' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Menurutmu, apakah penggunaan susu dalam kuah Soto Banjar adalah inovasi yang baik?',
            opinions: [
              { id: 'op1', text: 'Baik' },
              { id: 'op2', text: 'Kurang Baik' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Ya, karena memberikan rasa gurih yang unik tanpa lemak dari santan' },
              { id: 'r2', text: 'B. Tidak, karena rasa susu akan merusak rasa asli kaldu ayam' },
              { id: 'r3', text: 'C. Ya, agar Soto Banjar terlihat seperti makanan luar negeri' },
              { id: 'r4', text: 'D. Tidak, karena susu sulit didapatkan di pasar tradisional' }
            ],
            // Jika Baik -> A; Jika Kurang Baik -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk mencicipi kuliner khas Kalimantan!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'cicipi', color: '#f6bad3ff' },
              { id: 'w3', text: 'kelezatan', color: '#99AAEF' },
              { id: 'w4', text: 'Soto Banjar', color: '#a5ec93ff' },
              { id: 'w5', text: 'yang', color: '#FFC7B1' },
              { id: 'w6', text: 'kaya rempah', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 kalimantan.png',
          text: 'Pernahkah kamu mendengar suara petikan dawai yang sangat merdu dari sebuah kayu yang diukir indah? Alat musik itu bernama Sape dari Suku Dayak, Kalimantan. Sape dimainkan dengan cara dipetik, mirip dengan gitar namun memiliki bentuk yang lebih lebar dan penuh dengan ukiran khas. Musik Sape biasanya digunakan untuk mengiringi Tari Enggang. Dalam tarian ini, para penari mengenakan bulu burung Enggang di tangan mereka dan bergerak melambai-lambai, meniru gerakan burung yang sedang terbang di atas hutan Kalimantan.'
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama alat musik petik tradisional dari Kalimantan yang terbuat dari kayu dan penuh ukiran?',
            options: ['Tifa', 'Sape', 'Gamelan', 'Angklung'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar hewan yang gerakannya ditiru dalam tarian khas suku Dayak ini!',
            options: [
              { text: 'Harimau', emoji: '🐅', image: '/assets/budayana/islands/harimau 2.png' },
              { text: 'Burung Enggang', emoji: '🦤', image: '/assets/budayana/islands/burung enggang.png' },
              { text: 'Gajah', emoji: '🐘', image: '/assets/budayana/islands/gajah.png' },
              { text: 'Kuda', emoji: '🐎', image: '/assets/budayana/islands/kuda.png' }
            ],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Bagaimana cara memainkan alat musik Sape agar menghasilkan nada yang merdu?',
            options: ['Dipukul dengan kayu', 'Ditiup lubangnya', 'Dipetik dawainya', 'Digesek senarnya'],
            correctIndex: 2, // C
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa penari Tari Enggang menggerakkan tangannya melambai naik dan turun?',
            options: ['Karena tangan mereka merasa pegal', 'Meniru gerakan kepakan sayap burung yang sedang terbang', 'Agar penonton tidak mendekat ke arah penari', 'Untuk mengusir nyamuk yang ada di panggung'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, burung Enggang bagi masyarakat Dayak merupakan simbol dari...',
            options: ['Kekayaan dan Uang', 'Keberanian dan Kesetiaan', 'Kecepatan dan Kekuatan', 'Kemandirian dan Kesendirian'],
            correctIndex: 1, // B
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 kalimantan.png',
          text: 'Bagi masyarakat Dayak, burung Enggang adalah simbol keberanian dan kesetiaan. Gerakan Tari Enggang yang naik turun melambangkan hubungan antara manusia dengan langit dan bumi. Sementara itu, musik Sape berfungsi sebagai penghantar perasaan. Dahulu, Sape digunakan sebagai alat musik untuk menyembuhkan orang sakit karena suaranya yang menenangkan. Keunikan tarian ini terletak pada koordinasi antara petikan Sape yang lembut dengan gerakan tangan penari yang harus terlihat sangat ringan seolah-olah sedang melayang di udara.'
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan persiapan sebelum pementasan Tari Enggang!',
            draggables: [
              { id: 'd1', text: 'Setel Dawai Sape', color: '#FFF3B0' },
              { id: 'd2', text: 'Pakai Kostum Adat', color: '#dbe0fd' },
              { id: 'd3', text: 'Pasang Bulu Enggang di Jari', color: '#ffb2d8' },
              { id: 'd4', text: 'Mulai Menari', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika suara Sape dimainkan dengan tempo yang sangat pelan dan sedih, gerakan apa yang paling cocok dilakukan oleh penari Enggang?',
            options: ['Melompat-lompat dengan sangat cepat', 'Bergerak melambai dengan sangat halus dan pelan', 'Berhenti menari dan duduk di lantai', 'Berteriak mengikuti irama musik'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa penggunaan bulu burung Enggang asli sekarang mulai diganti dengan bulu buatan (sintetis)?',
            options: ['Karena bulu buatan jauh lebih ringan daripada bulu asli', 'Untuk melindungi burung Enggang agar tidak punah di hutan', 'Karena bulu asli tidak bisa dicuci jika kotor', 'Agar warna kostum menjadi lebih mengkilap'],
            correctIndex: 1, // B
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen seni dengan maknanya!',
            draggables: [
              { id: 'm1', text: 'Suara Sape', color: '#FFF3B0', image: '/assets/budayana/islands/suara sape.png' },
              { id: 'm2', text: 'Gerakan Naik Turun', color: '#D4DCFF', image: '/assets/budayana/islands/gerakan naik turun.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Penghantar perasaan dan ketenangan' },
              { id: 'z2', label: 'Hubungan manusia dengan langit dan bumi' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 kalimantan.png',
          text: 'Zaman sekarang, alat musik Sape sudah mulai mendunia dan dimainkan dengan tambahan listrik (Sape elektrik) agar suaranya lebih keras di panggung besar. Namun, beberapa orang tua di desa khawatir bahwa suara Sape elektrik akan menghilangkan kesakralan dan kelembutan suara kayu aslinya. Selain itu, bulu burung Enggang asli sekarang dilarang digunakan untuk kostum tari karena burung tersebut dilindungi. Apakah menurutmu penggunaan bulu buatan dan Sape elektrik mengurangi nilai budaya kita? Kita harus tetap melestarikan seni ini tanpa merusak alam sekitarnya.'
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika alat musik Sape dimainkan dengan aliran musik modern seperti Rock atau DJ?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar musik Sape lebih dikenal oleh anak muda di seluruh dunia' },
              { id: 'r2', text: 'B. Karena akan menghilangkan ketenangan dan makna asli dari suara Sape' },
              { id: 'r3', text: 'C. Supaya orang tidak lagi menganggap Sape sebagai alat musik kuno' },
              { id: 'r4', text: 'D. Karena Sape memang diciptakan untuk musik yang sangat berisik' }
            ],
            // Jika Setuju -> A; Jika Tidak Setuju -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Jika kamu seorang penari, apakah kamu tetap merasa bangga menari Enggang menggunakan bulu buatan daripada bulu asli?',
            opinions: [
              { id: 'op1', text: 'Tetap Bangga' },
              { id: 'op2', text: 'Kurang Bangga' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena melestarikan budaya tidak harus menyakiti hewan di alam' },
              { id: 'r2', text: 'B. Karena keindahan tarian hanya bisa terlihat jika menggunakan bahan yang asli' },
              { id: 'r3', text: 'C. Supaya biaya membuat kostum menjadi lebih murah' },
              { id: 'r4', text: 'D. Agar turis tidak protes saat melihat pertunjukan kita' }
            ],
            // Jika Tetap Bangga -> A; Jika Kurang Bangga -> B
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk melestarikan seni budaya Kalimantan!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'alunan Sape', color: '#99AAEF' },
              { id: 'w4', text: 'dan', color: '#a5ec93ff' },
              { id: 'w5', text: 'Tari Enggang', color: '#FFC7B1' },
              { id: 'w6', text: 'warisan Dayak', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  sulawesi: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/rumah1 sulawesi.png',
          text: "Di Sulawesi Selatan, terdapat rumah adat yang sangat megah bernama Rumah Tongkonan. Rumah ini memiliki atap yang melengkung indah menyerupai bentuk perahu atau tanduk kerbau. Tongkonan dibangun sebagai rumah panggung dari kayu yang kuat. Hal yang paling unik adalah bagian depan rumah yang dihiasi dengan deretan Tanduk Kerbau. Semakin banyak tanduk kerbau yang dipasang, menunjukkan semakin tinggi kedudukan atau status sosial keluarga yang tinggal di sana."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Sulawesi Selatan yang atapnya menyerupai bentuk perahu?',
            options: ['Rumah Gadang', 'Rumah Tongkonan', 'Rumah Joglo', 'Rumah Honai'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar hiasan yang selalu ada di bagian depan Rumah Tongkonan!',
            options: [
              { text: 'Ukiran Bunga', emoji: '🌸', image: '/assets/budayana/islands/ukiran bunga.png' },
              { text: 'Deretan Tanduk Kerbau', emoji: '🐂', image: '/assets/budayana/islands/deretan tanduk kerbau.png' },
              { text: 'Patung Burung', emoji: '🐦', image: '/assets/budayana/islands/patung burung.png' },
              { text: 'Anyaman Bambu', emoji: '🎋', image: '/assets/budayana/islands/anyaman bambu.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Ke arah manakah Rumah Tongkonan selalu dibangun menghadap?',
            options: ['Utara', 'Selatan', 'Barat', 'Timur'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang ditunjukkan oleh banyaknya jumlah tanduk kerbau di depan sebuah Rumah Tongkonan?',
            options: ['Jumlah anggota keluarga yang tinggal', 'Luasnya lahan sawah yang dimiliki', 'Status sosial atau kedudukan keluarga', 'Usia bangunan rumah tersebut'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa kegunaan utama dari kolong rumah (bagian bawah) pada Rumah Tongkonan?',
            options: ['Tempat menyambut tamu resmi', 'Tempat untuk tidur anggota keluarga', 'Tempat ternak atau alat pertanian', 'Tempat untuk memasak makanan'],
            correctIndex: 2,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/rumah2 sulawesi.png',
          text: "Rumah Tongkonan selalu dibangun menghadap ke arah Utara. Bagi masyarakat Toraja, arah Utara melambangkan asal-usul leluhur dan kehidupan. Di dinding rumah, terdapat ukiran khas bernama Passura' yang memiliki empat warna utama: merah, hitam, kuning, dan putih. Ukiran ini tidak hanya hiasan, tapi menceritakan tentang hubungan manusia dengan Tuhan, sesama, dan alam semesta. Selain itu, kolong rumah yang tinggi biasanya digunakan sebagai tempat untuk memelihara hewan ternak atau menyimpan alat pertanian."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan posisi bagian Rumah Tongkonan dari paling bawah hingga paling atas!',
            draggables: [
              { id: 'd1', text: 'Kolong Rumah', color: '#FFF3B0' },
              { id: 'd2', text: 'Badan Kayu', color: '#dbe0fd' },
              { id: 'd3', text: 'Dinding Ukiran', color: '#ffb2d8' },
              { id: 'd4', text: 'Atap Perahu', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Posisi 1' },
              { id: 'z2', label: 'Posisi 2' },
              { id: 'z3', label: 'Posisi 3' },
              { id: 'z4', label: 'Posisi 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: "Jika kamu ingin memberikan warna pada ukiran Passura', warna apa yang tidak termasuk dalam 4 warna utama tradisi Toraja?",
            options: ['Merah', 'Kuning', 'Biru', 'Hitam'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa ukiran di dinding Tongkonan dianggap sangat penting bagi masyarakatnya?',
            options: ['Agar dinding kayu tidak mudah dimakan rayap', 'Karena menceritakan hubungan manusia, alam, dan Tuhan', 'Supaya rumah terlihat lebih berwarna-warni', 'Karena ukiran tersebut berfungsi sebagai pengganti jendela'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen rumah dengan simbolnya!',
            draggables: [
              {
                id: 'm1',
                text: 'Tanduk Kerbau',
                image: '/assets/budayana/islands/tanduk kerbau.png',
                color: '#FFF3B0'
              },
              {
                id: 'm2',
                text: 'Arah Utara',
                image: '/assets/budayana/islands/arah utara.png',
                color: '#D4DCFF'
              }
            ],
            dropZones: [
              { id: 'z1', label: 'Simbol Kemakmuran/Status' },
              { id: 'z2', label: 'Simbol Kehidupan/Leluhur' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/rumah3 sulawesi.png',
          text: "Membangun dan merawat Rumah Tongkonan membutuhkan biaya yang sangat besar dan waktu yang lama karena ukirannya harus dibuat dengan tangan. Saat ini, banyak generasi muda Toraja yang merantau ke kota dan membangun rumah modern yang lebih sederhana. Muncul sebuah pemikiran: apakah Rumah Tongkonan harus tetap dibangun dengan banyak tanduk kerbau asli yang mahal, atau boleh diganti dengan hiasan lain yang lebih terjangkau? Kita harus mencari cara agar tradisi Tongkonan tetap terjaga di tengah dunia yang terus berubah."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika biaya membeli tanduk kerbau asli sangat mahal, setujukah kamu jika tanduk tersebut diganti dengan tiruan dari kayu?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar tradisi tetap terlihat meski dengan biaya lebih murah' },
              { id: 'r2', text: 'B. Keaslian nilai budaya akan hilang jika diganti barang tiruan' },
              { id: 'r3', text: 'C. Supaya rumah tetap terlihat cantik bagi wisatawan' },
              { id: 'r4', text: 'D. Karena tanduk kayu lebih ringan dan mudah dipasang' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah Rumah Tongkonan tetap dipertahankan sebagai tempat tinggal, atau cukup dijadikan museum saja?',
            opinions: [
              { id: 'op1', text: 'Tempat Tinggal' },
              { id: 'op2', text: 'Museum Saja' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar budaya tetap hidup dan dirasakan oleh keluarga setiap hari' },
              { id: 'r2', text: 'B. Supaya bangunan lebih terawat dan terlindungi dari kerusakan' },
              { id: 'r3', text: 'C. Agar anak muda tidak perlu repot merawat rumah yang besar' },
              { id: 'r4', text: 'D. Karena tinggal di rumah panggung sudah tidak zaman lagi' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk mempelajari makna di balik ukiran Toraja!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'pahami', color: '#f6bad3ff' },
              { id: 'w3', text: 'makna suci', color: '#99AAEF' },
              { id: 'w4', text: 'ukiran', color: '#a5ec93ff' },
              { id: 'w5', text: 'Rumah Tongkonan', color: '#FFC7B1' },
              { id: 'w6', text: 'Sulawesi', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makan1 sulawesi.png',
          text: "Pernahkah kamu mendengar tentang sup daging yang sangat gurih dari Sulawesi Selatan? Namanya adalah Coto Makassar. Makanan ini berbahan dasar daging sapi and bagian lainnya yang direbus dalam waktu lama. Kuah Coto Makassar terlihat kental dan berwarna kecokelatan karena dicampur dengan Kacang Tanah yang telah disangrai dan dihaluskan. Berbeda dengan sup lainnya, Coto Makassar tidak dimakan bersama nasi, melainkan bersama Ketupat yang dibungkus daun pandan atau daun kelapa."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan dalam masakan Coto Makassar?',
            options: ['Daging Ayam', 'Daging Sapi', 'Ikan Laut', 'Daging Kambing'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar bahan tambahan yang membuat kuah Coto Makassar menjadi kental and gurih!',
            options: [
              { text: 'Tepung Terigu', emoji: '🌾', image: '/assets/budayana/islands/tepung terigu.png' },
              { text: 'Kacang Tanah Halus', emoji: '🥜', image: '/assets/budayana/islands/kacang tanah halus.png' },
              { text: 'Parutan Keju', emoji: '🧀', image: '/assets/budayana/islands/parutan keju.png' },
              { text: 'Potongan Roti', emoji: '🍞', image: '/assets/budayana/islands/potongan roti.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa nama pengganti nasi yang biasanya disajikan bersama Coto Makassar?',
            options: ['Roti Tawar', 'Papeda', 'Ketupat', 'Singkong Rebus'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, mengapa kuah Coto Makassar berwarna kecokelatan and kental?',
            options: [
              'Karena dicampur dengan cokelat bubuk',
              'Karena campuran kacang tanah sangrai yang dihaluskan',
              'Karena menggunakan kecap manis yang sangat banyak',
              'Karena kuahnya dibiarkan hangus saat dimasak'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Ke manakah Coto Makassar biasanya disajikan pada zaman dahulu menurut sejarahnya?',
            options: [
              'Hanya untuk makanan di rumah sendiri',
              'Disajikan di istana kerajaan untuk tamu kehormatan',
              'Untuk dijual di pasar-pasar malam',
              'Untuk bekal para pelaut saat pergi jauh'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makan2 sulawesi.png',
          text: "Mengapa kuah Coto Makassar memiliki rasa yang sangat kaya and wangi? Rahasianya ada pada bumbu rahasia yang disebut Ampah Pappa atau 'Empat Puluh'. Artinya, kuahnya menggunakan sekitar 40 jenis rempah-rempah asli Indonesia seperti serai, lengkuas, jahe, and ketumbar. Banyaknya rempah ini bukan hanya untuk rasa, tetapi juga berfungsi sebagai obat tradisional untuk kesehatan tubuh. Dahulu, Coto Makassar adalah makanan istimewa yang disajikan di istana kerajaan untuk menjamu tamu-tamu kehormatan."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan proses pembuatan Coto Makassar yang benar!',
            draggables: [
              { id: 'd1', text: 'Rebus Daging', color: '#FFF3B0' },
              { id: 'd2', text: 'Haluskan 40 Rempah', color: '#dbe0fd' },
              { id: 'd3', text: 'Masukkan Kacang Tanah', color: '#ffb2d8' },
              { id: 'd4', text: 'Sajikan dengan Ketupat', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Coto Makassar yang wangi and sehat sesuai tradisi, bumbu manakah yang wajib ada dalam campuran "Ampah Pappa"?',
            options: ['Gula Pasir and Garam saja', 'Serai, Lengkuas, and Jahe', 'Saus Tomat and Sambal Botol', 'Cuka and Air Kelapa'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa manfaat dari penggunaan 40 jenis rempah dalam kuah Coto menurut teks?',
            options: [
              'Agar daging sapi menjadi berwarna merah',
              'Memberikan rasa kaya sekaligus sebagai obat bagi tubuh',
              'Supaya kuah Coto tidak mudah tumpah',
              'Agar ketupat menjadi lebih cepat matang'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen Coto dengan tujuannya!',
            draggables: [
              { id: 'm1', text: 'Rempah Ampah Pappa', color: '#FFF3B0', image: '/assets/budayana/islands/rempah ampah.png' },
              { id: 'm2', text: 'Ketupat Daun Pandan', color: '#D4DCFF', image: '/assets/budayana/islands/ketupat.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Memberikan Aroma and Kesehatan' },
              { id: 'z2', label: 'Teman Makan Pengganti Nasi' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makan3 sulawesi.png',
          text: "Saat ini, Coto Makassar sudah banyak dijual di luar Sulawesi, bahkan hingga ke luar negeri. Namun, karena bahan rempahnya yang mencapai 40 jenis, banyak penjual yang mulai mengurangi jumlah bumbu agar lebih praktis and murah. Tantangannya adalah: apakah Coto Makassar yang bumbunya tidak lengkap tetap bisa disebut Coto asli? Jika kita terus membiarkan resep asli ini hilang, maka kekayaan rasa rempah asli Sulawesi mungkin akan terlupakan oleh generasi masa depan."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu membuka restoran, setujukah kamu mengurangi jumlah rempah Coto agar harga jualnya lebih murah?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar lebih banyak orang yang mampu membeli Coto Makassar' },
              { id: 'r2', text: 'B. Karena akan merusak keaslian rasa and nilai sejarah 40 bumbu' },
              { id: 'r3', text: 'C. Supaya proses memasak menjadi lebih cepat and efisien' },
              { id: 'r4', text: 'D. Karena pelanggan tidak akan tahu jika bumbunya dikurangi' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Menurutmu, apakah Coto Makassar sebaiknya tetap dimakan dengan ketupat atau boleh diganti dengan nasi biasa?',
            opinions: [
              { id: 'op1', text: 'Tetap Ketupat' },
              { id: 'op2', text: 'Boleh Nasi' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Menjaga cara makan tradisional yang sudah ada sejak zaman kerajaan' },
              { id: 'r2', text: 'B. Nasi lebih mudah didapat and lebih mengenyangkan bagi banyak orang' },
              { id: 'r3', text: 'C. Agar tampilan Coto terlihat lebih modern and berbeda' },
              { id: 'r4', text: 'D. Karena ketupat sangat sulit untuk dibuka bungkusnya' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk menjaga keaslian resep nusantara!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'resep asli', color: '#99AAEF' },
              { id: 'w4', text: 'Coto Makassar', color: '#a5ec93ff' },
              { id: 'w5', text: 'sebagai', color: '#FFC7B1' },
              { id: 'w6', text: 'warisan Sulawesi', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 sulawesi.png',
          text: "Pernahkah kamu melihat tarian di mana para penarinya membawa kipas and bergerak dengan sangat lambat? Itu adalah Tari Kipas Pakarena dari Gowa, Sulawesi Selatan. Penarinya adalah perempuan yang mengenakan pakaian adat bernama Baju Bodo. Keunikan tarian ini adalah gerakannya yang sangat lembut meski musik pengiringnya terdengar sangat keras and cepat. Penari tidak boleh membuka mata terlalu lebar and tidak boleh mengangkat kaki terlalu tinggi, karena tarian ini melambangkan kesantunan and kelembutan perempuan."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa benda utama yang dibawa oleh penari dalam Tari Kipas Pakarena?',
            options: ['Piring', 'Payung', 'Kipas', 'Selendang'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar alat musik pukul yang menjadi pengatur irama utama dalam tarian Sulawesi ini!',
            options: [
              { text: 'Gitar', emoji: '🎸', image: '/assets/budayana/islands/gitar.png' },
              { text: 'Ganrang (Gendang)', emoji: '🥁', image: '/assets/budayana/islands/ganrang.png' },
              { text: 'Biola', emoji: '🎻', image: '/assets/budayana/islands/biola.png' },
              { text: 'Pianika', emoji: '🎹', image: '/assets/budayana/islands/pianika.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa nama pakaian adat yang dikenakan oleh penari perempuan dalam Tari Kipas Pakarena?',
            options: ['Baju Bodo', 'Kebaya', 'Baju Kurung', 'Ulos'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa gerakan kaki para penari Pakarena tidak boleh diangkat terlalu tinggi?',
            options: [
              'Karena lantai pertunjukan sangat licin',
              'Agar penari tidak merasa cepat lelah',
              'Melambangkan kesantunan and kelembutan perempuan',
              'Supaya kipas yang dibawa tidak terjatuh'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, gerakan berputar searah jarum jam dalam tarian ini melambangkan...',
            options: [
              'Perputaran roda kendaraan',
              'Waktu yang berjalan sangat cepat',
              'Siklus atau perjalanan hidup manusia',
              'Arah mata angin yang berbeda-beda'
            ],
            correctIndex: 2,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 sulawesi.png',
          text: "Mengapa musik pengiring Tari Kipas Pakarena sangat bersemangat sementara penarinya bergerak sangat lambat? Alat musik utamanya adalah Ganrang (gendang) and Puin-puin (seruling Sulawesi). Irama gendang yang cepat melambangkan ketegasan and semangat kaum laki-laki, sedangkan gerakan penari yang lembut melambangkan sifat perempuan yang sabar and patuh. Setiap gerakan tari, seperti gerakan berputar searah jarum jam, melambangkan siklus hidup manusia yang selalu berputar. Tarian ini mengajarkan kita tentang rasa syukur and keseimbangan dalam hidup."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan jalannya pertunjukan Tari Kipas Pakarena!',
            draggables: [
              { id: 'd1', text: 'Duduk Bersimpuh (Awal)', color: '#FFF3B0' },
              { id: 'd2', text: 'Memainkan Kipas', color: '#dbe0fd' },
              { id: 'd3', text: 'Berputar Perlahan', color: '#ffb2d8' },
              { id: 'd4', text: 'Duduk Kembali (Akhir)', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika pemain Gendang (Ganrang) memukul dengan irama yang sangat cepat and keras, apa yang harus dilakukan oleh penari Pakarena?',
            options: [
              'Menari dengan gerakan yang sangat cepat juga',
              'Tetap menari dengan gerakan lembut and lambat',
              'Berhenti menari and menunggu musik pelan',
              'Melemparkan kipas ke arah penonton'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa pesan yang ingin disampaikan dari perbedaan musik yang keras and tarian yang lembut?',
            options: [
              'Bahwa pemain musik and penari tidak bekerja sama',
              'Melambangkan keseimbangan antara ketegasan laki-laki and kelembutan perempuan',
              'Agar penonton tidak merasa mengantuk saat melihat tarian lambat',
              'Supaya suara seruling Puin-puin tidak terdengar sumbang'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian pertunjukan dengan maknanya!',
            draggables: [
              { id: 'm1', text: 'Irama Gendang Cepat', color: '#FFF3B0', image: '/assets/budayana/islands/irama gendang.png' },
              { id: 'm2', text: 'Gerakan Tari Lambat', color: '#D4DCFF', image: '/assets/budayana/islands/tari lambat.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Simbol Ketegasan Laki-laki' },
              { id: 'z2', label: 'Simbol Kesabaran Perempuan' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 sulawesi.png',
          text: "Saat ini, Tari Kipas Pakarena sering ditampilkan untuk menyambut turis. Namun, karena gerakannya yang sangat lambat, beberapa orang merasa tarian ini membosankan and ingin mempercepat gerakannya agar terlihat lebih modern. Muncul sebuah diskusi: apakah kita boleh mengubah kecepatan gerakan Tari Pakarena agar lebih menarik, atau harus tetap lambat sesuai filosofi aslinya? Sebagai penjaga budaya, kita harus memahami bahwa keindahan tarian ini justru terletak pada kesabaran and kelembutannya."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika gerakan Tari Pakarena dibuat menjadi cepat (enerjik) agar lebih disukai anak muda zaman sekarang?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar tarian tradisional Sulawesi terlihat lebih seru and tidak membosankan' },
              { id: 'r2', text: 'B. Karena akan menghilangkan filosofi kelembutan and kesantunan yang menjadi jiwa tarian ini' },
              { id: 'r3', text: 'C. Supaya penari bisa membakar lebih banyak kalori saat berolahraga tari' },
              { id: 'r4', text: 'D. Karena kipas akan lebih awet jika digerakkan dengan cepat' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah alat musik tiup "Puin-puin" diganti dengan rekaman musik dari handphone saat pertunjukan di sekolah?',
            opinions: [
              { id: 'op1', text: 'Boleh Menggunakan Rekaman' },
              { id: 'op2', text: 'Harus Alat Musik Asli' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar lebih praktis and tidak perlu mencari pemain musik profesional' },
              { id: 'r2', text: 'B. Menjaga keaslian suara and menghargai seniman musik tradisional' },
              { id: 'r3', text: 'C. Supaya suara musik bisa diatur volumenya menjadi sangat keras' },
              { id: 'r4', text: 'D. Karena handphone memiliki pilihan musik yang lebih banyak' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk menjaga keanggunan budaya Sulawesi!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'kelembutan', color: '#99AAEF' },
              { id: 'w4', text: 'Tari Pakarena', color: '#a5ec93ff' },
              { id: 'w5', text: 'sebagai', color: '#FFC7B1' },
              { id: 'w6', text: 'kebanggaan Sulawesi', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  maluku: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/rumah1 maluku.png',
          text: "Di Kepulauan Maluku, terdapat rumah adat yang sangat penting bernama Rumah Baileo. Rumah ini bukanlah rumah tinggal biasa, melainkan tempat pertemuan warga and upacara adat. Baileo berbentuk panggung and memiliki ukuran yang cukup besar. Hal yang paling mencolok adalah Rumah Baileo seringkali dibuat tanpa dinding. Hal ini dilakukan agar roh para leluhur bebas keluar masuk and masyarakat bisa melihat kegiatan di dalam rumah dengan jelas."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Kepulauan Maluku yang digunakan sebagai tempat musyawarah warga?',
            options: ['Rumah Gadang', 'Rumah Betang', 'Rumah Baileo', 'Rumah Joglo'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang paling menunjukkan ciri khas Rumah Baileo!',
            options: [
              { text: 'Rumah Tertutup Rapat', emoji: '🏠', image: '/assets/budayana/islands/rumah tertutup rapat.png' },
              { text: 'Rumah Panggung Tanpa Dinding', emoji: '🏛️', image: '/assets/budayana/islands/rumah panggung tanpa dinding.png' },
              { text: 'Rumah Bulat', emoji: '🛖', image: '/assets/budayana/islands/rumah bulat.png' },
              { text: 'Rumah di Atas Pohon', emoji: '🌳', image: '/assets/budayana/islands/rumah di atas pohon.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Baileo secara tradisional dibangun tanpa menggunakan dinding?',
            options: [
              'Karena kekurangan bahan kayu untuk dinding',
              'Supaya biaya pembangunan menjadi sangat murah',
              'Agar roh leluhur bebas keluar masuk and menjaga keterbukaan',
              'Agar warga tidak perlu membuat pintu and jendela'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa kegunaan utama dari Rumah Baileo bagi masyarakat Maluku?',
            options: [
              'Tempat tinggal keluarga besar sehari-hari',
              'Tempat pertemuan adat and musyawarah warga',
              'Tempat untuk menyimpan hasil tangkapan ikan',
              'Tempat untuk mengungsi saat terjadi banjir'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang ingin ditunjukkan dari desain Baileo yang terbuka bagi masyarakat di sekitarnya?',
            options: [
              'Masyarakat Maluku suka pamer kekayaan',
              'Bangunan tersebut belum selesai dikerjakan',
              'Transparansi and kebersamaan antar warga desa',
              'Bahwa masyarakat Maluku tidak suka privasi'
            ],
            correctIndex: 2,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/rumah2 maluku.png',
          text: "Struktur Rumah Baileo memiliki aturan yang sangat kuat terkait adat. Tiang-tiang rumah ini berjumlah sembilan atau lima, yang melambangkan persatuan kelompok desa di Maluku (Siwalima). Di dalam Baileo, terdapat banyak ukiran bermakna, seperti ukiran dua ekor ayam beradu yang diapit oleh dua ekor babi hutan. Ukiran ini melambangkan perdamaian and kerukunan antar warga desa. Karena tidak berdinding, angin laut yang sejuk bebas masuk ke dalam ruangan, menciptakan suasana yang tenang untuk bermusyawarah."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan bagian Rumah Baileo dari bagian pondasi hingga atap!',
            draggables: [
              { id: 'd1', text: 'Tiang Kayu', color: '#FFF3B0' },
              { id: 'd2', text: 'Lantai Panggung', color: '#dbe0fd' },
              { id: 'd3', text: 'Ukiran Ayam Beradu', color: '#ffb2d8' },
              { id: 'd4', text: 'Atap Rumbia', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Posisi 1' },
              { id: 'z2', label: 'Posisi 2' },
              { id: 'z3', label: 'Posisi 3' },
              { id: 'z4', label: 'Posisi 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin mengadakan rapat warga di Baileo, kapan waktu yang paling tepat agar tidak terganggu panas matahari?',
            options: [
              'Siang hari saat matahari tepat di atas atap',
              'Sore hari saat angin laut mulai masuk ke ruang terbuka',
              'Saat turun hujan deras tanpa angin',
              'Tengah malam saat tidak ada orang lain'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa makna dari ukiran dua ekor ayam yang beradu pada dinding Baileo?',
            options: [
              'Larangan untuk memelihara ayam di desa',
              'Melambangkan perdamaian and kerukunan warga',
              'Menunjukkan bahwa warga desa suka bertarung',
              'Sebagai penanda waktu pagi hari telah tiba'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian rumah dengan jumlah tiangnya!',
            draggables: [
              { id: 'm1', text: 'Sembilan Tiang', color: '#FFF3B0', image: '/assets/budayana/islands/sembilan tiang.png' },
              { id: 'm2', text: 'Tanpa Dinding', color: '#D4DCFF', image: '/assets/budayana/islands/tanpa dinding.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Simbol Persatuan Kelompok Desa' },
              { id: 'z2', label: 'Simbol Keterbukaan Masyarakat' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/rumah3 maluku.png',
          text: "Saat ini, tantangan menjaga Rumah Baileo adalah penggunaan bahan atap rumbia yang mudah rusak oleh cuaca laut yang keras. Beberapa desa mulai menggunakan bahan seng agar lebih awet. Namun, ada kekhawatiran bahwa penggunaan bahan modern akan menghilangkan 'jiwa' and kesakralan Baileo. Selain itu, karena Baileo tidak berdinding, barang-barang adat di dalamnya bisa saja dicuri atau rusak. Apakah kita harus memberi dinding and pintu pada Baileo agar lebih aman, atau membiarkannya terbuka demi menjaga nilai tradisi? Sebagai generasi muda, kita harus mencari jalan tengahnya."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika ada barang sejarah penting di dalam Baileo, setujukah kamu jika bagian belakang Baileo diberi dinding kayu agar lebih aman?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Keamanan barang sejarah lebih penting daripada bentuk bangunan' },
              { id: 'r2', text: 'B. Menambahkan dinding akan merusak nilai asli keterbukaan Baileo' },
              { id: 'r3', text: 'C. Agar ruangan menjadi lebih gelap and tenang' },
              { id: 'r4', text: 'D. Supaya warga tidak bisa lagi mengintip ke dalam' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah penggunaan atap seng pada Baileo modern lebih baik daripada atap daun rumbia?',
            opinions: [
              { id: 'op1', text: 'Lebih Baik' },
              { id: 'op2', text: 'Kurang Baik' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Atap seng tidak mudah bocor and lebih tahan lama di daerah pantai' },
              { id: 'r2', text: 'B. Atap rumbia menjaga suhu tetap dingin and lebih bernilai seni' },
              { id: 'r3', text: 'C. Seng lebih murah sehingga warga tidak perlu kerja bakti mencari daun' },
              { id: 'r4', text: 'D. Atap seng terlihat lebih bergaya and kekinian' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk menjaga kerukunan di tanah Maluku!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'persatuan', color: '#99AAEF' },
              { id: 'w4', text: 'dan', color: '#a5ec93ff' },
              { id: 'w5', text: 'kerukunan', color: '#FFC7B1' },
              { id: 'w6', text: 'di', color: '#e3baf4ff' },
              { id: 'w7', text: 'Rumah Baileo', color: '#FFF3B0' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }, { id: 'z7' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 maluku.png',
          text: "Pernahkah kamu membayangkan rasa sup ikan yang segar sekaligus hangat? Di Kepulauan Banda, Maluku, terdapat makanan khas bernama Ikan Kuah Pala. Bahan utamanya adalah ikan laut segar yang dimasak dengan kuah kuning. Keunikan makanan ini terletak pada penggunaan Buah Pala sebagai bumbu utamanya. Rasa sup ini sangat segar dengan sedikit rasa asam and aroma rempah yang harum. Dahulu, makanan ini sering disajikan untuk menjamu tamu-tamu penting yang datang ke Kepulauan Banda."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan rempah utama yang menjadi ciri khas dari sup ikan asal Kepulauan Banda, Maluku ini?',
            options: ['Ketumbar', 'Buah Pala', 'Kayu Manis', 'Daun Pandan'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar Ikan Kuah Pala yang biasanya memiliki warna kuah yang segar!',
            options: [
              { text: 'Kuah Hitam Pekat', emoji: '🥣', image: '/assets/budayana/islands/kuah hitam pekat.png' },
              { text: 'Kuah Kuning Bening', emoji: '🥘', image: '/assets/budayana/islands/kuah kuning bening.png' },
              { text: 'Kuah Merah Cabai', emoji: '🍲', image: '/assets/budayana/islands/kuah merah cabai.png' },
              { text: 'Kuah Putih Susu', emoji: '🥛', image: '/assets/budayana/islands/kuah putih susu.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Di daerah manakah masakan Ikan Kuah Pala ini pertama kali menjadi sangat terkenal?',
            options: ['Jakarta', 'Surabaya', 'Kepulauan Banda', 'Medan'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa buah pala digunakan dalam masakan ikan laut menurut teks?',
            options: [
              'Agar warna ikan berubah menjadi ungu',
              'Untuk memberikan aroma harum and menghilangkan bau amis',
              'Supaya ikan menjadi lebih keras saat dimakan',
              'Agar air kuah berubah menjadi sangat manis'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, kepada siapakah Ikan Kuah Pala sering disajikan pada zaman dahulu?',
            options: [
              'Hanya untuk makanan di rumah sendiri',
              'Sebagai makanan untuk hewan ternak',
              'Menjamu tamu-tamu penting yang berkunjung',
              'Untuk bekal para petani di hutan'
            ],
            correctIndex: 2,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 maluku.png',
          text: "Mengapa buah pala digunakan dalam masakan ikan ini? Ternyata, selain memberikan aroma harum, buah pala juga berfungsi untuk menghilangkan bau amis pada ikan laut. Kepulauan Banda sangat terkenal sebagai penghasil pala terbaik di dunia sejak ratusan tahun lalu. Dalam satu mangkuk Ikan Kuah Pala, biasanya ditambahkan juga rempah lain seperti merica and kenari. Masakan ini tidak hanya mengenyangkan, tetapi juga bermanfaat untuk menghangatkan tubuh and melancarkan pencernaan."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan proses pembuatan Ikan Kuah Pala yang benar!',
            draggables: [
              { id: 'd1', text: 'Bersihkan Ikan Segar', color: '#FFF3B0' },
              { id: 'd2', text: 'Haluskan Rempah & Pala', color: '#dbe0fd' },
              { id: 'd3', text: 'Rebus Air and Bumbu', color: '#ffb2d8' },
              { id: 'd4', text: 'Masukkan Ikan hingga Matang', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Ikan Kuah Pala yang rasanya asli and hangat, bagian manakah dari tanaman pala yang paling tepat digunakan?',
            options: [
              'Akar pohonnya',
              'Kulit batangnya',
              'Daging buah atau biji palanya',
              'Daunnya yang sudah kering'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa manfaat kesehatan yang didapatkan jika kita memakan Ikan Kuah Pala yang kaya rempah?',
            options: [
              'Membuat gigi menjadi lebih tajam',
              'Menghangatkan tubuh and melancarkan pencernaan',
              'Membantu rambut tumbuh lebih cepat dalam satu hari',
              'Membuat kita menjadi mengantuk sepanjang hari'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian masakan dengan fungsinya!',
            draggables: [
              { id: 'm1', text: 'Buah Pala', color: '#FFF3B0', image: '/assets/budayana/islands/buah_pala.png' },
              { id: 'm2', text: 'Ikan Laut Segar', color: '#D4DCFF', image: '/assets/budayana/islands/ikan_laut.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Menghilangkan Bau Amis' },
              { id: 'z2', label: 'Sumber Protein Utama' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 maluku.png',
          text: "Saat ini, Ikan Kuah Pala menjadi daya tarik wisata kuliner di Maluku. Namun, pohon pala membutuhkan waktu lama untuk tumbuh and berbuah. Jika pohon-pohon pala di Maluku berkurang karena lahan hutan diubah menjadi pemukiman, maka bumbu asli masakan ini akan sulit didapatkan. Muncul sebuah tantangan: apakah kita harus mulai menanam pohon pala di halaman rumah masing-masing, atau mengganti bumbu pala dengan bahan kimia buatan agar masakan ini tetap bisa dijual murah? Kita harus menjaga kelestarian rempah asli kita agar masakan legendaris ini tidak hilang."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika buah pala asli semakin sulit ditemukan, setujukah kamu jika rasa pala diganti dengan penyedap rasa buatan (esens) saja?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar harga masakan tetap murah and mudah diproduksi banyak' },
              { id: 'r2', text: 'B. Karena akan menghilangkan manfaat kesehatan and keaslian rasa rempahnya' },
              { id: 'r3', text: 'C. Supaya masakan tersebut bisa tahan hingga bertahun-tahun' },
              { id: 'r4', text: 'D. Karena anak-anak tidak tahu perbedaan rasa asli and buatan' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah setiap sekolah di Maluku memiliki taman pohon pala sebagai tempat belajar siswa?',
            opinions: [
              { id: 'op1', text: 'Harus' },
              { id: 'op2', text: 'Tidak Perlu' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar siswa mengenal rempah asli daerahnya and menjaga kelestariannya' },
              { id: 'r2', text: 'B. Karena menanam pohon di sekolah akan membuat halaman menjadi kotor' },
              { id: 'r3', text: 'C. Supaya siswa bisa menjual buah pala untuk membeli mainan' },
              { id: 'r4', text: 'D. Karena pohon pala sangat cocok dijadikan tempat berteduh saat olahraga' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk menjaga kekayaan rempah Maluku!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'lestarikan', color: '#f6bad3ff' },
              { id: 'w3', text: 'rempah pala', color: '#99AAEF' },
              { id: 'w4', text: 'agar', color: '#a5ec93ff' },
              { id: 'w5', text: 'Ikan Kuah Pala', color: '#FFC7B1' },
              { id: 'w6', text: 'tetap ada', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 maluku.png',
          text: "Pernahkah kamu melihat tarian di mana para penarinya melambai-lambaikan sapu tangan? Itulah Tari Lenso dari Maluku. Kata 'Lenso' berarti sapu tangan. Tarian ini dilakukan secara bersama-sama, biasanya oleh para pemuda and pemudi untuk menyambut tamu atau merayakan pesta rakyat. Irama musik yang mengiringinya sangat ceria and bersemangat, dihasilkan dari perpaduan alat musik pukul seperti Tifa and rangkaian gong kecil yang disebut Totobuang."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa benda utama yang digunakan oleh penari dalam Tari Lenso?',
            options: ['Kipas', 'Piring', 'Sapu Tangan', 'Payung'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar alat musik Maluku yang berupa rangkaian gong kecil dalam sebuah rak kayu!',
            options: [
              { text: 'Suling', emoji: '🎋', image: '/assets/budayana/islands/suling.png' },
              { text: 'Totobuang', emoji: '🔔', image: '/assets/budayana/islands/totobuang.png' },
              { text: 'Gitar', emoji: '🎸', image: '/assets/budayana/islands/gitar.png' },
              { text: 'Biola', emoji: '🎻', image: '/assets/budayana/islands/biola.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa arti dari kata "Lenso" dalam bahasa masyarakat Maluku?',
            options: ['Sapu Tangan', 'Selamat Datang', 'Tari Persahabatan', 'Musik Merdu'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Tari Lenso biasanya dilakukan secara bersama-sama oleh banyak orang?',
            options: [
              'Karena kostumnya harus dipakai beramai-ramai',
              'Melambangkan persahabatan and keterbukaan masyarakat',
              'Agar panggung pertunjukan tidak terlihat kosong',
              'Karena gerakannya sangat sulit jika dilakukan sendiri'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Perpaduan suara kayu dari Tifa and suara logam dari Totobuang melambangkan...',
            options: [
              'Perbedaan yang membuat perkelahian',
              'Bunyi yang sangat berisik and mengganggu',
              'Persatuan and kedamaian antar masyarakat Maluku',
              'Alat musik yang harganya sangat mahal'
            ],
            correctIndex: 2,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 maluku.png',
          text: "Tari Lenso bukan sekadar tarian biasa, tetapi merupakan simbol persahabatan and keterbukaan masyarakat Maluku kepada siapa saja yang datang. Gerakan kakinya yang melompat kecil and ayunan sapu tangannya mengikuti irama Tifa Totobuang. Tifa memberikan ketukan yang kuat, sedangkan Totobuang menghasilkan nada-nada yang indah. Keharmonisan antara suara kayu (Tifa) and logam (Totobuang) melambangkan persatuan berbagai kelompok masyarakat di Maluku yang hidup berdampingan dengan damai."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan jalannya gerakan dalam Tari Lenso!',
            draggables: [
              { id: 'd1', text: 'Berdiri Berjejer', color: '#FFF3B0' },
              { id: 'd2', text: 'Mengayun Sapu Tangan', color: '#dbe0fd' },
              { id: 'd3', text: 'Melompat Kecil', color: '#ffb2d8' },
              { id: 'd4', text: 'Memberikan Sapu Tangan ke Tamu', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika irama musik Tifa Totobuang menjadi semakin cepat, apa yang harus dilakukan oleh para penari Lenso?',
            options: [
              'Berhenti menari and duduk',
              'Mengayunkan sapu tangan and melompat lebih lincah',
              'Membuang sapu tangan ke lantai',
              'Mengganti gerakan menjadi tarian lambat'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa fungsi utama dari musik Totobuang dalam pertunjukan Tari Lenso?',
            options: [
              'Sebagai hiasan panggung agar terlihat indah',
              'Memberikan nada-nada lagu yang indah untuk mengiringi tarian',
              'Agar penari tidak perlu membawa sapu tangan',
              'Untuk menakuti musuh yang datang ke desa'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan alat musik dengan bahannya!',
            draggables: [
              { id: 'm1', text: 'Tifa', color: '#FFF3B0', image: '/assets/budayana/islands/tifa.png' },
              { id: 'm2', text: 'Totobuang', color: '#D4DCFF', image: '/assets/budayana/islands/totobuang 2.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Terbuat dari Kayu and Kulit Hewan' },
              { id: 'z2', label: 'Terbuat dari Logam Kuningan/Perunggu' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 maluku.png',
          text: "Saat ini, Tari Lenso sering dipadukan with alat musik modern seperti trompet and gitar (musik Orkes). Namun, beberapa tokoh adat khawatir jika musik Tifa Totobuang yang asli ditinggalkan, maka ciri khas suara tradisional Maluku akan hilang. Selain itu, sapu tangan yang dahulu dijahit tangan kini banyak diganti with tisu atau kain pabrik biasa. Apakah menurutmu penggunaan musik modern and bahan kain praktis mengurangi nilai ketulusan dalam menyambut tamu? Kita harus menjaga agar keceriaan Tari Lenso tetap memiliki akar budaya yang kuat."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika Tari Lenso diiringi musik DJ agar lebih disukai oleh wisatawan mancanegara?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar budaya Maluku terlihat lebih modern and mengikuti zaman' },
              { id: 'r2', text: 'B. Karena akan menghilangkan keaslian suara Tifa Totobuang yang bersejarah' },
              { id: 'r3', text: 'C. Supaya penari bisa bergerak lebih bebas tanpa aturan' },
              { id: 'r4', text: 'D. Karena musik DJ lebih mudah didapatkan daripada pemain Tifa' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah menurutmu sapu tangan dalam Tari Lenso boleh diganti with selendang yang panjang?',
            opinions: [
              { id: 'op1', text: 'Boleh' },
              { id: 'op2', text: 'Kurang Tepat' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar tarian terlihat lebih cantik with kain yang berwarna-warni' },
              { id: 'r2', text: 'B. Karena nama tariannya adalah \'Lenso\' (Sapu Tangan), sehingga ciri khasnya harus dijaga' },
              { id: 'r3', text: 'C. Supaya penari tidak kesulitan memegang sapu tangan yang kecil' },
              { id: 'r4', text: 'D. Agar tarian Lenso terlihat mirip with tarian dari daerah lain' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk menjaga keceriaan budaya Maluku!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'persahabatan', color: '#99AAEF' },
              { id: 'w4', text: 'melalui', color: '#a5ec93ff' },
              { id: 'w5', text: 'Tari Lenso', color: '#FFC7B1' },
              { id: 'w6', text: 'Maluku', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  papua: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/rumah1 papua.png',
          text: "Di pegunungan Papua yang dingin, terdapat rumah adat yang unik bernama Rumah Honai. Rumah ini berbentuk bulat with atap yang sangat rendah and menutupi hampir seluruh bangunan. Atap Honai dibuat dari tumpukan Jerami atau Alang-alang yang sangat tebal. Rumah ini sengaja dibuat tanpa jendela and hanya memiliki satu pintu kecil. Desain ini bertujuan untuk menahan suhu dingin and kabut di pegunungan agar bagian dalam rumah tetap hangat."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Papua yang berbentuk bulat and memiliki atap rendah?',
            options: ['Rumah Gadang', 'Rumah Joglo', 'Rumah Honai', 'Rumah Tongkonan'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan bentuk atap Rumah Honai yang benar!',
            options: [
              { text: 'Atap Runcing', emoji: '⛰️', image: '/assets/budayana/islands/atap runcing.png' },
              { text: 'Atap Bulat Seperti Jamur', emoji: '🍄', image: '/assets/budayana/islands/atap bulat seperti jamur.png' },
              { text: 'Atap Limas', emoji: '🔼', image: '/assets/budayana/islands/atap limas.png' },
              { text: 'Atap Datar', emoji: '➖', image: '/assets/budayana/islands/atap datar.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Bahan alami apa yang digunakan untuk membuat atap Rumah Honai yang tebal?',
            options: ['Jerami atau Alang-alang', 'Daun Pisang', 'Kulit Kayu', 'Tanah Liat'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Rumah Honai dibuat tanpa jendela and hanya memiliki satu pintu kecil?',
            options: [
              'Agar penghuni rumah tidak bisa dilihat orang luar',
              'Karena jendela sulit dibuat di dalam hutan',
              'Untuk menahan udara dingin masuk ke dalam rumah',
              'Supaya rumah terlihat lebih gelap'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Di manakah biasanya masyarakat Papua membangun Rumah Honai sesuai fungsinya?',
            options: [
              'Di pinggir pantai yang terik',
              'Di tengah rawa-rawa',
              'Di daerah pegunungan yang dingin',
              'Di atas pohon yang tinggi'
            ],
            correctIndex: 2,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/rumah2 papua.png',
          text: "Struktur Rumah Honai yang bulat ternyata memiliki rahasia hebat. Bentuk lingkaran ini membuat angin kencang di pegunungan hanya melewati sisi rumah tanpa merobohkannya. Di bagian tengah lantai rumah, biasanya terdapat sebuah lingkaran untuk membuat api unggun yang disebut Omai. Api ini berfungsi sebagai penghangat and penerangan. Karena atap jeraminya sangat tebal and rapat, asap dari api unggun tidak langsung keluar, sehingga suhu panas tetap terjaga di dalam rumah untuk waktu yang lama."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan bagian Rumah Honai dari bagian luar ke bagian paling dalam!',
            draggables: [
              { id: 'd1', text: 'Atap Jerami', color: '#FFF3B0' },
              { id: 'd2', text: 'Dinding Kayu', color: '#dbe0fd' },
              { id: 'd3', text: 'Pintu Kecil', color: '#ffb2d8' },
              { id: 'd4', text: 'Api Unggun/Omai', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat api unggun di dalam Honai, di manakah posisi yang paling aman agar tidak membakar dinding?',
            options: [
              'Di pojok pintu masuk',
              'Menempel pada dinding kayu',
              'Di tengah lantai dalam lingkaran khusus',
              'Di bawah atap jerami yang rendah'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa bentuk Rumah Honai dibuat bulat (lingkaran) and bukan kotak?',
            options: [
              'Agar lebih mudah dibangun oleh banyak orang',
              'Supaya terlihat lebih indah dipandang dari jauh',
              'Agar angin kencang pegunungan tidak merobohkan bangunan',
              'Karena bahan kayu hanya bisa ditekuk secara bulat'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian Honai with fungsinya!',
            draggables: [
              { id: 'm1', text: 'Atap Jerami Tebal', color: '#FFF3B0', image: '/assets/budayana/islands/atap jerami.png' },
              { id: 'm2', text: 'Dinding Tanpa Jendela', color: '#D4DCFF', image: '/assets/budayana/islands/dinding tanpa jendela.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Menahan Suhu Panas' },
              { id: 'z2', label: 'Menghalau Kabut Dingin' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/rumah3 papua.png',
          text: "Saat ini, beberapa masyarakat Papua mulai membangun rumah from bahan semen and atap seng. Namun, rumah modern ini sering kali terasa sangat dingin di malam hari karena tidak bisa menahan suhu seperti Rumah Honai asli. Tantangannya adalah, jerami untuk atap Honai kini semakin sulit dicari and mudah terbakar jika terkena api. Apakah kita harus tetap menggunakan jerami demi kehangatan, atau beralih ke bahan modern yang lebih aman namun dingin? Kita perlu memikirkan cara agar kearifan lokal Honai tetap bertahan di masa depan."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu adalah seorang arsitek di Papua, apakah kamu setuju jika atap jerami diganti with seng yang lebih tahan api?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar rumah lebih aman from bahaya kebakaran' },
              { id: 'r2', text: 'B. Karena seng akan membuat rumah terasa sangat dingin di malam hari' },
              { id: 'r3', text: 'C. Supaya rumah terlihat lebih modern seperti di kota' },
              { id: 'r4', text: 'D. Karena seng lebih mudah dibersihkan daripada jerami' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah Rumah Honai modern mulai memiliki jendela kecil untuk sirkulasi udara?',
            opinions: [
              { id: 'op1', text: 'Harus Ada' },
              { id: 'op2', text: 'Tetap Tanpa Jendela' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar asap from api unggun bisa keluar and lebih sehat' },
              { id: 'r2', text: 'B. Menjaga tradisi asli agar suhu di dalam tetap sangat hangat' },
              { id: 'r3', text: 'C. Supaya cahaya matahari bisa masuk ke dalam ruangan' },
              { id: 'r4', text: 'D. Agar penghuni bisa melihat pemandangan di luar rumah' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk menghargai keunikan arsitektur Papua!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'banggakan', color: '#f6bad3ff' },
              { id: 'w3', text: 'keunikan', color: '#99AAEF' },
              { id: 'w4', text: 'Rumah Honai', color: '#a5ec93ff' },
              { id: 'w5', text: 'warisan', color: '#FFC7B1' },
              { id: 'w6', text: 'tanah Papua', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 papua.png',
          text: "Di tanah Papua, terdapat makanan pokok yang sangat unik bernama Papeda. Papeda terbuat from Sagu, yaitu tepung yang diambil from batang pohon sagu. Bentuk Papeda menyerupai bubur yang kental, berwarna putih bening, and memiliki tekstur yang kenyal serta lengket seperti lem. Papeda biasanya disajikan di dalam wadah kayu atau gerabah and dimakan bersama Ikan Kuah Kuning yang segar agar rasanya menjadi lebih nikmat."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan untuk membuat Papeda from Papua?',
            options: ['Tepung Terigu', 'Tepung Beras', 'Tepung Sagu', 'Tepung Jagung'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang paling tepat menunjukkan tekstur Papeda yang sudah matang!',
            options: [
              { text: 'Nasi Butiran', emoji: '🍚', image: '/assets/budayana/islands/nasi butiran.png' },
              { text: 'Bubur Putih Bening and Lengket', emoji: '🥣', image: '/assets/budayana/islands/bubur putih bening and lengket.png' },
              { text: 'Roti Keras', emoji: '🥖', image: '/assets/budayana/islands/roti keras.png' },
              { text: 'Mi Kuning', emoji: '🍜', image: '/assets/budayana/islands/mi kuning.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Lauk apa yang biasanya menjadi pendamping utama saat memakan Papeda?',
            options: ['Ayam Goreng', 'Ikan Kuah Kuning', 'Sayur Lodeh', 'Rendang Daging'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Papeda memiliki tekstur yang lengket and sangat kental?',
            options: [
              'Karena dicampur with lem makanan',
              'Hasil from tepung sagu yang disiram air mendidih',
              'Karena dimasak terlalu lama di atas api',
              'Karena tepung sagu dicampur with susu'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Dari manakah tepung sagu diperoleh oleh masyarakat Papua?',
            options: [
              'Dari biji padi di sawah',
              'Dari bagian dalam batang pohon sagu',
              'Dari akar pohon kelapa',
              'Dari buah hutan yang jatuh'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 papua.png',
          text: "Pohon sagu sangat berarti bagi masyarakat Papua karena merupakan sumber kehidupan. Satu pohon sagu besar bisa menghasilkan ratusan kilogram tepung yang bisa memberi makan banyak orang. Proses pembuatan Papeda membutuhkan ketelitian; tepung sagu harus disiram with air yang benar-benar mendidih sambil diaduk cepat agar matang merata and menjadi bening. Selain sehat, Papeda kaya akan serat and tidak mengandung banyak lemak, sehingga sangat baik untuk kesehatan tubuh kita."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan proses pembuatan Papeda yang benar!',
            draggables: [
              { id: 'd1', text: 'Peras Batang Sagu', color: '#FFF3B0' },
              { id: 'd2', text: 'Ambil Tepung Sagu', color: '#dbe0fd' },
              { id: 'd3', text: 'Siram Air Mendidih', color: '#ffb2d8' },
              { id: 'd4', text: 'Aduk Hingga Bening', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin mengambil Papeda from wadah tanpa berantakan, alat tradisional apa yang sebaiknya kamu gunakan?',
            options: [
              'Sendok and Garpu Besi',
              'Gata-gata (Sepasang Sumpit Kayu)',
              'Pisau Dapur',
              'Centong Nasi Besar'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang akan terjadi jika tepung sagu disiram with air yang tidak mendidih (hanya hangat)?',
            options: [
              'Papeda akan menjadi sangat manis',
              'Papeda akan berubah warna menjadi merah',
              'Tepung sagu tidak akan mengental and tetap cair',
              'Papeda akan berubah menjadi batu yang keras'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian tanaman sagu with manfaatnya!',
            draggables: [
              { id: 'm1', text: 'Batang Pohon', color: '#FFF3B0', image: '/assets/budayana/islands/batang pohon.png' },
              { id: 'm2', text: 'Daun Sagu', color: '#D4DCFF', image: '/assets/budayana/islands/daun sagu.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Sumber Tepung Sagu' },
              { id: 'z2', label: 'Bahan Atap Rumah' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 papua.png',
          text: "Saat ini, banyak anak muda di kota-kota besar di Papua yang mulai lebih sering makan nasi daripada Papeda karena nasi dianggap lebih mudah didapat. Padahal, hutan sagu di Papua adalah yang terluas di dunia. Muncul sebuah kekhawatiran: jika masyarakat Papua berhenti makan Papeda, maka hutan-hutan sagu mungkin tidak akan dijaga lagi and bisa rusak. Apakah kita harus tetap menjadikan Papeda sebagai makanan utama di sekolah-sekolah, atau membiarkan nasi menggantikan peran sagu sepenuhnya?"
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu adalah kepala sekolah di Papua, setujukah kamu jika kantin sekolah diwajibkan menjual Papeda seminggu sekali?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar anak-anak tetap mengenal and mencintai makanan asli daerahnya' },
              { id: 'r2', text: 'B. Karena anak-anak lebih suka makan nasi and makanan instan' },
              { id: 'r3', text: 'C. Supaya sekolah terlihat lebih tradisional dibandingkan sekolah lain' },
              { id: 'r4', text: 'D. Agar persediaan nasi di kantin tidak cepat habis' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah menurutmu membuat "Papeda Instan" (langsung seduh) adalah cara yang baik untuk melestarikan sagu?',
            opinions: [
              { id: 'op1', text: 'Ide Bagus' },
              { id: 'op2', text: 'Kurang Bagus' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Ya, agar masyarakat di luar Papua bisa menikmati Papeda with praktis' },
              { id: 'r2', text: 'B. Tidak, karena proses tradisional mengaduk Papeda adalah bagian from keunikan budaya' },
              { id: 'r3', text: 'C. Ya, supaya kita tidak perlu lagi menjaga pohon sagu di hutan' },
              { id: 'r4', text: 'D. Tidak, karena harga Papeda instan pasti akan sangat mahal' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk bangga memakan sagu!',
            draggables: [
              { id: 'w1', text: 'Ayo kita', color: '#f5f199ff' },
              { id: 'w2', text: 'makan sagu', color: '#f6bad3ff' },
              { id: 'w3', text: 'agar', color: '#99AAEF' },
              { id: 'w4', text: 'tubuh sehat', color: '#a5ec93ff' },
              { id: 'w5', text: 'dan', color: '#FFC7B1' },
              { id: 'w6', text: 'hutan terjaga', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 papua.png',
          text: "Pernahkah kamu melihat alat musik yang berbentuk tabung panjang from kayu and dihiasi ukiran indah? Alat musik itu bernama Tifa. Tifa adalah alat musik pukul khas Papua yang bentuknya mirip kendang tetapi lebih ramping. Bagian ujungnya ditutup with kulit hewan, biasanya kulit rusa atau kulit biawak, untuk menghasilkan suara yang nyaring. Tifa selalu digunakan untuk mengiringi tarian adat, seperti Tari Sajojo, di mana semua orang menari bersama with penuh kegembiraan."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama alat musik tradisional khas Papua yang berbentuk tabung panjang and dimainkan with cara dipukul?',
            options: ['Angklung', 'Gamelan', 'Tifa', 'Sasando'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar permukaan Tifa yang digunakan untuk menghasilkan suara!',
            options: [
              { text: 'Permukaan Kayu', emoji: '🪵', image: '/assets/budayana/islands/permukaan kayu.png' },
              { text: 'Kulit Hewan yang Kencang', emoji: '🥁', image: '/assets/budayana/islands/kulit sapi.png' },
              { text: 'Senar Gitar', emoji: '🎸', image: '/assets/budayana/islands/senar gitar.png' },
              { text: 'Lubang Tiup', emoji: '🎋', image: '/assets/budayana/islands/lubang tiup.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jenis kulit hewan apa yang secara tradisional sering digunakan untuk menutup ujung Tifa?',
            options: ['Rusa atau Biawak', 'Sapi atau Kambing', 'Kelinci atau Kucing', 'Ikan atau Ayam'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa tarian tradisional Papua, seperti Sajojo, biasanya dilakukan oleh banyak orang secara bersama-sama?',
            options: [
              'Karena panggungnya terlalu luas jika menari sendiri',
              'Melambangkan kebersamaan and kegembiraan masyarakat',
              'Agar tarian terlihat sangat membingungkan penonton',
              'Karena kostum tarian sangat berat sehingga butuh bantuan orang lain'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa yang dilakukan pemain Tifa agar suara Tifa menjadi lebih nyaring sebelum dimainkan?',
            options: [
              'Merendam Tifa di dalam air sungai',
              'Mengecat Tifa with warna-warni',
              'Memanaskan bagian kulitnya di dekat api',
              'Mengisi bagian dalam Tifa with pasir'
            ],
            correctIndex: 2,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 papua.png',
          text: "Bagi masyarakat Papua, Tifa bukan sekadar alat musik, tetapi merupakan simbol identitas. Kayu yang digunakan untuk membuat Tifa biasanya diambil from pohon Lenggua yang kuat. Sebelum dimainkan, kulit Tifa terkadang dipanaskan dekat api agar kencang and suaranya lebih keras. Dalam tarian Papua, irama Tifa menjadi pemandu langkah kaki. Gerakan tarian yang melompat and dinamis melambangkan semangat, keberanian, and rasa syukur kepada alam yang memberikan mereka kehidupan."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan proses pembuatan Tifa sederhana!',
            draggables: [
              { id: 'd1', text: 'Lubangi Batang Kayu', color: '#FFF3B0' },
              { id: 'd2', text: 'Ukir Sisi Kayu', color: '#dbe0fd' },
              { id: 'd3', text: 'Pasang Kulit Hewan', color: '#ffb2d8' },
              { id: 'd4', text: 'Ikat with Rotan', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu adalah seorang pemain Tifa, apa yang harus kamu lakukan agar irama musikmu sesuai with langkah kaki penari?',
            options: [
              'Memukul Tifa with mata tertutup',
              'Memperhatikan kecepatan gerak penari and memukul sesuai tempo',
              'Memukul Tifa sekeras mungkin tanpa berhenti',
              'Berhenti memukul saat penari mulai melompat'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa fungsi utama from ukiran-ukiran yang ada pada badan kayu Tifa?',
            options: [
              'Agar Tifa tidak licin saat dipegang',
              'Sebagai hiasan yang memiliki makna cerita atau simbol suku',
              'Supaya suara yang dihasilkan menjadi lebih pelan',
              'Sebagai tempat untuk menyimpan makanan kecil'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian musik with maknanya!',
            draggables: [
              { id: 'm1', text: 'Suara Tifa', color: '#FFF3B0', image: '/assets/budayana/islands/suara tifa.png' },
              { id: 'm2', text: 'Gerakan Melompat', color: '#D4DCFF', image: '/assets/budayana/islands/gerakan lompat.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Pemandu semangat and langkah tari' },
              { id: 'z2', label: 'Simbol keberanian and syukur' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 papua.png',
          text: "Saat ini, Tifa banyak dibuat sebagai cenderamata untuk turis dalam ukuran yang sangat kecil. Selain itu, karena perburuan rusa semakin dibatasi untuk menjaga alam, kulit rusa untuk Tifa mulai sulit didapatkan. Beberapa orang mulai mencoba menggantinya with plastik atau karet ban. Muncul sebuah diskusi: apakah Tifa with kulit plastik tetap memiliki nilai budaya yang sama with Tifa kulit asli? Kita harus kreatif dalam melestarikan budaya namun tetap harus menjaga kelestarian hewan di hutan Papua."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika kulit rusa pada Tifa diganti with plastik agar tidak perlu memburu hewan di hutan?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar alam and hewan di Papua tetap terjaga kelestariannya' },
              { id: 'r2', text: 'B. Karena suara from plastik tidak akan senyaring and seindah kulit asli' },
              { id: 'r3', text: 'C. Supaya harga Tifa menjadi jauh lebih mahal bagi turis' },
              { id: 'r4', text: 'D. Karena plastik jauh lebih sulit dibersihkan daripada kulit hewan' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah tarian Papua diajarkan di seluruh sekolah di Indonesia, bukan hanya di Papua saja?',
            opinions: [
              { id: 'op1', text: 'Harus Diajarkan' },
              { id: 'op2', text: 'Di Papua Saja' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar seluruh anak Indonesia mengenal and bangga pada kekayaan budaya Papua' },
              { id: 'r2', text: 'B. Karena tarian Papua hanya boleh ditarikan di tanah Papua saja' },
              { id: 'r3', text: 'C. Supaya semua siswa bisa menjadi pemain Tifa profesional' },
              { id: 'r4', text: 'D. Karena gerakan tarian Papua terlalu sulit untuk dipelajari orang luar' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk bangga with seni budaya Papua!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'banggakan', color: '#f6bad3ff' },
              { id: 'w3', text: 'irama Tifa', color: '#99AAEF' },
              { id: 'w4', text: 'dan', color: '#a5ec93ff' },
              { id: 'w5', text: 'tarian indah', color: '#FFC7B1' },
              { id: 'w6', text: 'dari Papua', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  bali: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/rumah1 bali.png',
          text: "Pernahkah kamu melihat gerbang tinggi yang terbelah dua di Bali? Itu disebut Gapura Candi Bentar. Gapura ini adalah pintu masuk utama menuju halaman rumah adat Bali. Uniknya, gapura ini tidak memiliki atap and bagian kanan-kirinya dibuat sangat mirip atau simetris. Rumah adat Bali biasanya terdiri dari beberapa bangunan terpisah yang dikelilingi oleh tembok pelindung yang disebut Panyengker. Setiap bangunan memiliki fungsi berbeda, seperti tempat sembahyang, tempat tidur, and dapur."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama gerbang khas Bali yang bentuknya terbelah dua and menjadi pintu masuk utama?',
            options: ['Rumah Gadang', 'Gapura Candi Bentar', 'Rumah Joglo', 'Rumah Baileo'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan ciri khas Candi Bentar yang benar!',
            options: [
              { text: 'Gerbang Bertutup', emoji: '🚪', image: '/assets/budayana/islands/gerbang bertutup.png' },
              { text: 'Dua Tiang Kembar Terbelah Tanpa Atap', emoji: '⛩️', image: '/assets/budayana/islands/dua tiang kembar terbelah tanpa atap.png' },
              { text: 'Pintu Kayu Kecil', emoji: '🚪', image: '/assets/budayana/islands/pintu kayu kecil.png' },
              { text: 'Lubang Gua', emoji: '🕳️', image: '/assets/budayana/islands/lubang gua.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa nama tembok keliling yang berfungsi sebagai pelindung rumah adat Bali?',
            options: ['Panyengker', 'Pura', 'Pendopo', 'Honai'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Gapura Candi Bentar dibuat with sisi kanan and kiri yang sangat mirip (simetris)?',
            options: [
              'Agar terlihat lebih mewah bagi tamu',
              'Karena bahan batunya memang harus dibagi dua',
              'Melambangkan keseimbangan dalam kehidupan',
              'Supaya pengerjaannya lebih cepat selesai'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, rumah adat Bali terdiri dari...',
            options: [
              'Satu gedung besar untuk semua orang',
              'Beberapa bangunan terpisah with fungsi berbeda',
              'Rumah yang digantung di atas pohon besar',
              'Kamar-kamar yang disusun secara memanjang'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/rumah2 bali.png',
          text: "Penyusunan rumah adat Bali tidak dilakukan sembarangan, melainkan menggunakan aturan bernama Asta Kosala Kosali. Aturan ini menggunakan ukuran tubuh pemilik rumah, seperti jengkal tangan and langkah kaki, sebagai pedoman membangun. Hal ini bertujuan agar rumah terasa nyaman and selaras with penghuninya. Di bagian depan rumah, biasanya terdapat sebuah balai terbuka yang disebut Bale Kulkul. Selain indah, dinding rumah Bali penuh with ukiran batu padas yang menceritakan tentang hewan, tumbuhan, and dewa-dewi."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan posisi tamu dari luar hingga masuk ke halaman rumah Bali!',
            draggables: [
              { id: 'd1', text: 'Jalan Raya', color: '#FFF3B0' },
              { id: 'd2', text: 'Gapura Candi Bentar', color: '#dbe0fd' },
              { id: 'd3', text: 'Aling-aling (Dinding Penghalang)', color: '#ffb2d8' },
              { id: 'd4', text: 'Halaman Rumah', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Langkah 1' },
              { id: 'z2', label: 'Langkah 2' },
              { id: 'z3', label: 'Langkah 3' },
              { id: 'z4', label: 'Langkah 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin mengukur luas kamar menggunakan aturan Asta Kosala Kosali, alat apa yang harus kamu gunakan?',
            options: [
              'Penggaris plastik 30 cm',
              'Meteran gulung milik tukang',
              'Jengkal tangan atau langkah kaki pemilik rumah',
              'Tali jemuran yang panjang'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa ukiran pada dinding rumah Bali sering menggambarkan tumbuh-tumbuhan and hewan?',
            options: [
              'Karena seniman Bali tidak suka menggambar manusia',
              'Menunjukkan rasa syukur and cinta terhadap alam semesta',
              'Agar dinding rumah tidak terlihat polos and membosankan',
              'Sebagai tanda bahwa pemilik rumah senang berkebun'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian rumah with tujuannya!',
            draggables: [
              { id: 'm1', text: 'Asta Kosala Kosali', color: '#FFF3B0', image: '/assets/budayana/islands/asta kosala.png' },
              { id: 'm2', text: 'Panyengker (Tembok)', color: '#D4DCFF', image: '/assets/budayana/islands/tembok panyengker.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Menciptakan kenyamanan penghuni' },
              { id: 'z2', label: 'Memberikan rasa aman and batas rumah' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/rumah3 bali.png',
          text: "Saat ini, Pulau Bali menjadi tujuan wisata dunia. Banyak orang membangun hotel and vila with meniru gaya Gapura Candi Bentar agar terlihat menarik. Namun, terkadang pembangunan ini mengabaikan aturan Asta Kosala Kosali karena lahan yang terbatas di daerah wisata. Muncul sebuah diskusi: apakah kita harus tetap mengikuti aturan ukuran tubuh pemilik rumah dalam membangun, atau boleh menggunakan ukuran meteran modern agar pembangunan lebih cepat? Sebagai penjaga budaya, kita harus memastikan keindahan Bali tidak hanya jadi hiasan luar saja."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika sebuah hotel besar membangun Candi Bentar raksasa hanya untuk hiasan foto tanpa mengikuti aturan adat, bagaimana pendapatmu?',
            opinions: [
              { id: 'op1', text: 'Boleh Saja' },
              { id: 'op2', text: 'Kurang Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar budaya Bali semakin dikenal banyak orang lewat foto di internet' },
              { id: 'r2', text: 'B. Karena bangunan adat harus memiliki makna filosofi, bukan cuma hiasan' },
              { id: 'r3', text: 'C. Supaya hotel tersebut terlihat lebih mahal and mewah' },
              { id: 'r4', text: 'D. Karena turis memang menyukai bangunan yang terlihat tradisional' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah anak muda Bali tetap belajar cara mengukir batu padas, padahal sekarang sudah ada mesin cetak otomatis?',
            opinions: [
              { id: 'op1', text: 'Harus Belajar' },
              { id: 'op2', text: 'Gunakan Mesin Saja' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar sentuhan seni asli and keunikan tangan manusia tidak hilang' },
              { id: 'r2', text: 'B. Karena menggunakan mesin jauh lebih cepat and hasilnya sangat rapi' },
              { id: 'r3', text: 'C. Supaya anak muda bisa menjual ukiran with harga yang murah' },
              { id: 'r4', text: 'D. Agar semua dinding rumah di Bali memiliki motif yang sama persis' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk menjaga keindahan budaya Bali!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'keselarasan', color: '#99AAEF' },
              { id: 'w4', text: 'dan', color: '#a5ec93ff' },
              { id: 'w5', text: 'keindahan', color: '#FFC7B1' },
              { id: 'w6', text: 'budaya Bali', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 bali.png',
          text: "Jika kamu berkunjung ke Bali, jangan lewatkan makanan lezat bernama Ayam Betutu. Makanan ini berbahan dasar ayam utuh yang bagian perutnya diisi with bumbu rempah khas Bali and daun singkong. Ayam ini kemudian dimasak with cara dipanggang atau dikukus dalam waktu yang sangat lama. Hasilnya, daging ayam menjadi sangat lembut and bumbunya meresap hingga ke tulang. Ayam Betutu biasanya disajikan with nasi hangat, sambal matah, and kacang goreng."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama masakan khas Bali yang berupa ayam utuh with isi bumbu rempah di dalamnya?',
            options: ['Sate Lilit', 'Ayam Betutu', 'Nasi Jinggo', 'Lawar Bali'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar bumbu rahasia khas Bali yang digunakan untuk memasak Ayam Betutu!',
            options: [
              { text: 'Kecap Manis', emoji: '🍯', image: '/assets/budayana/islands/kecap manis.png' },
              { text: 'Aneka Rempah (Base Genep)', emoji: '🌶️🧄', image: '/assets/budayana/islands/aneka rempah (base genep).png' },
              { text: 'Bubuk Cokelat', emoji: '🍫', image: '/assets/budayana/islands/bubuk cokelat.png' },
              { text: 'Tepung Maizena', emoji: '🥣', image: '/assets/budayana/islands/tepung maizena.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Daun apakah yang biasanya dimasukkan ke dalam perut ayam sebagai pelengkap bumbu Betutu?',
            options: ['Daun Mangga', 'Daun Singkong', 'Daun Bayam', 'Daun Teratai'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa daging Ayam Betutu bisa terasa sangat lembut hingga ke tulang?',
            options: [
              'Karena daging ayamnya dipukul-pukul sebelum dimasak',
              'Karena dimasak dalam waktu yang sangat lama (semalam suntuk)',
              'Karena ayam tersebut diberi makan buah-buahan',
              'Karena ayamnya direndam dalam air es selama tiga hari'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa pelengkap yang biasanya disajikan bersama Ayam Betutu?',
            options: [
              'Keju and Roti',
              'Sambal Matah and Kacang Goreng',
              'Mayones and Saus Tomat',
              'Selai Nanas and Mentega'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 bali.png',
          text: "Apa rahasia kelezatan Ayam Betutu? Rahasianya terletak pada bumbu yang disebut Base Genep, yaitu campuran lengkap berbagai rempah seperti kencur, jahe, kunyit, lengkuas, and cabai. Dahulu, Ayam Betutu dimasak with cara tradisional yang unik: ayam dibungkus pelepah pinang atau daun pisang, lalu ditanam di dalam tanah and ditutupi bara sekam padi selama semalam suntuk. Suhu panas yang stabil from sekam padi inilah yang membuat daging ayam menjadi sangat empuk tanpa membuatnya gosong."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan cara memasak Ayam Betutu tradisional!',
            draggables: [
              { id: 'd1', text: 'Bersihkan Ayam', color: '#FFF3B0' },
              { id: 'd2', text: 'Masukkan Bumbu ke Perut', color: '#dbe0fd' },
              { id: 'd3', text: 'Bungkus Daun Pisang', color: '#ffb2d8' },
              { id: 'd4', text: 'Tanam dalam Bara Sekam', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin memasak Ayam Betutu with aroma asap yang harum sesuai tradisi, bahan apa yang harus kamu gunakan sebagai sumber panasnya?',
            options: [
              'Kompor Gas',
              'Bara Sekam Padi (Kulit Padi)',
              'Kompor Listrik',
              'Oven Microwave'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa keuntungan menggunakan teknik "tanam dalam tanah" with bara sekam saat memasak Ayam Betutu?',
            options: [
              'Agar ayam terlindungi from debu and kotoran',
              'Memberikan suhu panas yang stabil agar daging empuk and beraroma khas',
              'Supaya bumbu rempah di dalam perut ayam bisa berubah menjadi emas',
              'Agar ayam tidak bisa ditemukan oleh orang lain saat dimasak'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen masakan with fungsinya!',
            draggables: [
              { id: 'm1', text: 'Base Genep (Rempah)', color: '#FFF3B0', image: '/assets/budayana/islands/base genep.png' },
              { id: 'm2', text: 'Daun Pisang/Pinang', color: '#D4DCFF', image: '/assets/budayana/islands/daun pisang.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Memberikan rasa and aroma yang kuat' },
              { id: 'z2', label: 'Pembungkus agar ayam tidak terkena api langsung' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 bali.png',
          text: "Saat ini, untuk mempercepat pelayanan, banyak restoran yang memasak Ayam Betutu with cara direbus atau menggunakan panci presto. Meskipun lebih cepat, banyak orang berpendapat bahwa rasa and aroma 'asap' from teknik tanam sekam tradisional jauh lebih nikmat. Namun, cara tradisional membutuhkan waktu yang sangat lama and kayu bakar yang banyak. Apakah kita harus tetap mempertahankan cara memasak tradisional yang lama, atau beralih ke cara modern yang lebih cepat demi melayani lebih banyak turis? Kita perlu menjaga keaslian cara memasak ini agar nilai budaya Bali tetap terjaga."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu memiliki restoran, setujukah kamu menggunakan panci presto agar Ayam Betutu matang hanya dalam 30 menit?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar pelanggan tidak menunggu terlalu lama and pelayanan lebih cepat' },
              { id: 'r2', text: 'B. Karena teknik presto akan menghilangkan aroma asap asli and tekstur khas Betutu' },
              { id: 'r3', text: 'C. Supaya daging ayam menjadi hancur and mudah dimakan' },
              { id: 'r4', text: 'D. Karena panci presto jauh lebih murah daripada membeli sekam padi' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah resep "Base Genep" Bali disederhanakan agar anak muda lebih mudah memasaknya?',
            opinions: [
              { id: 'op1', text: 'Sederhanakan' },
              { id: 'op2', text: 'Tetap Lengkap' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar lebih banyak anak muda yang mau belajar memasak masakan tradisional' },
              { id: 'r2', text: 'B. Menjaga kekayaan rasa and keaslian bumbu warisan leluhur Bali' },
              { id: 'r3', text: 'C. Karena bumbu yang terlalu banyak bisa membuat perut menjadi sakit' },
              { id: 'r4', text: 'D. Supaya biaya membeli rempah-rempah menjadi lebih hemat' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk melestarikan kuliner tradisional Bali!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'keaslian', color: '#99AAEF' },
              { id: 'w4', text: 'Ayam Betutu', color: '#a5ec93ff' },
              { id: 'w5', text: 'sebagai', color: '#FFC7B1' },
              { id: 'w6', text: 'kebanggaan Bali', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 bali.png',
          text: "Pernahkah kamu melihat puluhan pria duduk melingkar sambil menyerukan suara 'cak-cak-cak' secara serentak? Itulah Tari Kecak from Bali. Uniknya, tarian ini tidak menggunakan alat musik seperti gamelan atau gitar. Musiknya dihasilkan langsung from perpaduan suara para penarinya yang berjumlah sekitar 50 hingga 70 orang. Mereka mengangkat tangan and menggerakkan tubuh mengikuti irama suara yang kompak, menciptakan suasana yang sangat magis and semangat."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bunyi khas yang diteriakkan oleh para penari dalam pertunjukan Tari Kecak?',
            options: ['"Dor-dor-dor"', '"Ning-nong-ning"', '"Cak-cak-cak"', '"Tak-tung-tak"'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan formasi penari Kecak yang benar!',
            options: [
              { text: 'Barisan memanjang', emoji: '➖', image: '/assets/budayana/islands/barisan memanjang.png' },
              { text: 'Duduk melingkar', emoji: '⭕', image: '/assets/budayana/islands/duduk melingkar.png' },
              { text: 'Berdiri satu-satu', emoji: '🕴️', image: '/assets/budayana/islands/berdiri satu-satu.png' },
              { text: 'Berpegangan tangan', emoji: '🤝', image: '/assets/budayana/islands/berpegangan tangan.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang menjadi "alat musik" utama dalam mengiringi pertunjukan Tari Kecak?',
            options: ['Gamelan Perunggu', 'Seruling Bambu', 'Suara mulut para penarinya', 'Petikan Sape'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa Tari Kecak secara tradisional menggunakan api unggun sebagai penerangan utama?',
            options: [
              'Karena harga lampu listrik sangat mahal di Bali',
              'Menciptakan suasana magis and melambangkan perjuangan melawan kegelapan',
              'Agar penonton merasa hangat saat menonton',
              'Untuk digunakan memasak setelah tarian selesai'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa yang dilambangkan oleh puluhan pria yang duduk melingkar dalam tarian ini?',
            options: [
              'Masyarakat yang sedang mengantre makanan',
              'Barisan tentara kera dalam cerita Ramayana',
              'Kelompok orang yang sedang beristirahat',
              'Penonton yang ikut menari di panggung'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 bali.png',
          text: "Mengapa Tari Kecak tidak menggunakan alat musik eksternal? Dalam sejarah Bali, suara manusia dianggap sebagai instrumen yang paling murni. Kelompok penari yang duduk melingkar melambangkan barisan tentara kera yang membantu tokoh Ramayana. Kekompakan suara 'cak' yang sahut-menyahut berfungsi untuk mengatur ritme gerakan penari utama di tengah lingkaran. Tarian ini biasanya dipentaskan pada waktu senja (sore hari) saat matahari terbenam, with hanya menggunakan cahaya api unggun sebagai penerangan, yang melambangkan perjuangan melawan kegelapan."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan jalannya pertunjukan Tari Kecak!',
            draggables: [
              { id: 'd1', text: 'Penari Masuk Lingkaran', color: '#FFF3B0' },
              { id: 'd2', text: 'Seruan \'Cak\' Dimulai', color: '#dbe0fd' },
              { id: 'd3', text: 'Muncul Tokoh Utama (Rama/Shinta)', color: '#ffb2d8' },
              { id: 'd4', text: 'Atraksi Api di Akhir', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu adalah pemimpin suara dalam Tari Kecak, apa yang harus kamu lakukan agar suara 70 orang tetap kompak?',
            options: [
              'Berteriak paling kencang sendirian',
              'Memberikan kode ketukan atau tempo yang jelas agar semua mengikuti',
              'Menyuruh semua penari menutup telinga mereka',
              'Menggunakan peluit wasit agar terdengar nyaring'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang akan terjadi jika para penari Kecak tidak mengeluarkan suara secara bersamaan (tidak kompak)?',
            options: [
              'Penonton akan ikut berteriak',
              'Irama musik and tempo gerakan penari akan menjadi kacau',
              'Api unggun di tengah akan langsung padam',
              'Pakaian penari akan berubah warna'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen tarian with maknanya!',
            draggables: [
              { id: 'm1', text: 'Suara Manusia', color: '#FFF3B0', image: '/assets/budayana/islands/suara manusia.png' },
              { id: 'm2', text: 'Lingkaran Penari', color: '#D4DCFF', image: '/assets/budayana/islands/lingkaran penari.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Instrumen musik yang murni' },
              { id: 'z2', label: 'Simbol perlindungan and kebersamaan' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 bali.png',
          text: "Saat ini, Tari Kecak menjadi pertunjukan yang paling dicari oleh turis mancanegara. Namun, karena peminatnya sangat banyak, tarian ini terkadang dipentaskan di tempat yang sangat modern with lampu panggung yang terang benderang. Banyak penari senior khawatir bahwa penggunaan lampu listrik akan menghilangkan nilai kesakralan and suasana magis from api unggun asli. Apakah menurutmu Tari Kecak boleh menggunakan lampu warna-warni agar terlihat lebih canggih, atau harus tetap menggunakan api tradisional demi menjaga jiwanya?"
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika Tari Kecak ditambahkan iringan musik drum agar suaranya lebih keras di panggung besar?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar pertunjukan terasa lebih modern and semangat seperti konser musik' },
              { id: 'r2', text: 'B. Karena keunikan Kecak justru terletak pada suara manusia tanpa alat musik apa pun' },
              { id: 'r3', text: 'C. Supaya penari tidak perlu lelah berteriak \'cak-cak-cak\' sepanjang waktu' },
              { id: 'r4', text: 'D. Karena drum bisa membantu memanggil lebih banyak turis untuk datang' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah menurutmu pementasan Kecak di siang hari (terik matahari) tetap sebagus pementasan di waktu senja?',
            opinions: [
              { id: 'op1', text: 'Tetap Bagus' },
              { id: 'op2', text: 'Lebih Bagus Senja' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Siang hari membuat gerakan penari terlihat lebih jelas oleh penonton' },
              { id: 'r2', text: 'B. Waktu senja memberikan suasana magis and mendukung filosofi cahaya api' },
              { id: 'r3', text: 'C. Siang hari membuat penari lebih semangat karena cuaca panas' },
              { id: 'r4', text: 'D. Waktu senja sangat berbahaya karena banyak nyamuk di area terbuka' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk melestarikan keunikan Tari Kecak!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'jaga', color: '#f6bad3ff' },
              { id: 'w3', text: 'kemurnian', color: '#99AAEF' },
              { id: 'w4', text: 'Tari Kecak', color: '#a5ec93ff' },
              { id: 'w5', text: 'sebagai', color: '#FFC7B1' },
              { id: 'w6', text: 'kebanggaan Bali', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  nusa: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/rumah1 nusa .png',
          text: "Di pegunungan terpencil di Pulau Flores, terdapat rumah adat yang sangat unik bernama Mbaru Niang. Rumah ini berbentuk kerucut tinggi and menjulang ke atas seperti gunung. Atapnya dibuat dari daun lontar yang ditutupi oleh ijuk agar sangat kuat menahan hujan and angin. Rumah Mbaru Niang memiliki lima tingkat di dalamnya. Setiap tingkat memiliki kegunaan yang berbeda, mulai dari tempat tinggal hingga tempat menyimpan cadangan makanan."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat dari Flores, Nusa Tenggara Timur yang berbentuk kerucut tinggi?',
            options: ['Rumah Gadang', 'Rumah Joglo', 'Rumah Mbaru Niang', 'Rumah Baileo'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang paling menunjukkan bentuk Rumah Mbaru Niang!',
            options: [
              { text: 'Rumah Atap Datar', emoji: '➖', image: '/assets/budayana/islands/rumah atap datar.png' },
              { text: 'Rumah Tinggi Berbentuk Kerucut', emoji: '📐', image: '/assets/budayana/islands/rumah tinggi berbentuk kerucut.png' },
              { text: 'Rumah Panggung Panjang', emoji: '📏', image: '/assets/budayana/islands/rumah panggung panjang.png' },
              { text: 'Rumah Bulat Rendah', emoji: '🍄', image: '/assets/budayana/islands/rumah bulat rendah.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berapa jumlah tingkat yang ada di dalam sebuah Rumah Mbaru Niang?',
            options: ['2 Tingkat', '3 Tingkat', '5 Tingkat', '7 Tingkat'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa atap Mbaru Niang dibuat sangat miring and menjulang tinggi seperti gunung?',
            options: [
              'Agar terlihat lebih indah dari kejauhan',
              'Supaya bisa menampung banyak orang di dalamnya',
              'Agar air hujan and angin kencang tidak merusak rumah',
              'Agar penghuni rumah bisa melihat laut dari atas'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa kegunaan utama dari tingkat paling bawah (tingkat pertama) pada Mbaru Niang?',
            options: [
              'Tempat menyimpan benih jagung',
              'Tempat tinggal and berkumpulnya keluarga',
              'Tempat menyimpan barang-barang kuno',
              'Tempat untuk menjemur hasil panen'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/rumah2 nusa.png',
          text: "Struktur Mbaru Niang yang tinggi bukan tanpa alasan. Karena berada di desa yang sering tertutup kabut, bentuk kerucut membantu air hujan langsung mengalir ke bawah tanpa merusak atap. Setiap tingkat di rumah ini memiliki nama and fungsi: tingkat pertama untuk tempat tinggal, tingkat kedua untuk menyimpan barang, tingkat ketiga untuk menyimpan benih padi, tingkat keempat untuk cadangan makanan saat kemarau, and tingkat paling atas untuk persembahan kepada leluhur. Hal ini menunjukkan betapa masyarakat Flores sangat memikirkan persiapan masa depan."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan kegunaan tingkat Mbaru Niang dari yang paling bawah ke paling atas!',
            draggables: [
              { id: 'd1', text: 'Tempat Tinggal', color: '#FFF3B0' },
              { id: 'd2', text: 'Simpan Barang', color: '#dbe0fd' },
              { id: 'd3', text: 'Benih Padi', color: '#ffb2d8' },
              { id: 'd4', text: 'Stok Makanan', color: '#ffd5c0' },
              { id: 'd5', text: 'Tempat Leluhur', color: '#A5FFD2' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tingkat 1' },
              { id: 'z2', label: 'Tingkat 2' },
              { id: 'z3', label: 'Tingkat 3' },
              { id: 'z4', label: 'Tingkat 4' },
              { id: 'z5', label: 'Tingkat 5' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4', 'd5'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika terjadi musim kemarau yang panjang, di tingkat manakah warga Waerebo mengambil cadangan makanan mereka?',
            options: [
              'Tingkat pertama (Lutur)',
              'Tingkat kedua (Lobo)',
              'Tingkat keempat (Lempa Rae)',
              'Tingkat paling atas (Hekang Kode)'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa masyarakat Mbaru Niang menyimpan benih tanaman di tingkat yang cukup tinggi (tingkat ketiga)?',
            options: [
              'Agar benih tidak bisa diambil oleh anak-anak',
              'Agar benih tetap kering and aman dari gangguan tikus atau banjir',
              'Supaya benih lebih dekat with sinar matahari di atap',
              'Karena tradisi melarang benih ditaruh di lantai bawah'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian rumah with bahannya!',
            draggables: [
              { id: 'm1', text: 'Atap Kerucut', color: '#FFF3B0', image: '/assets/budayana/islands/atap kerucutt.png' },
              { id: 'm2', text: 'Lantai Rumah', color: '#D4DCFF', image: '/assets/budayana/islands/lantai rumah.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Daun Lontar and Ijuk' },
              { id: 'z2', label: 'Papan Kayu yang Kuat' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/rumah3 nusa.png',
          text: "Rumah Mbaru Niang hampir punah karena proses pembuatannya sangat sulit and lokasinya di atas gunung. Namun, berkat bantuan warga and para ahli, rumah ini kembali dibangun and mendapatkan penghargaan dunia. Sekarang, banyak turis yang ingin menginap di sana. Muncul sebuah pertanyaan: apakah kita boleh mengubah bagian dalam Mbaru Niang menjadi hotel modern agar tamu lebih nyaman, atau harus tetap sederhana sesuai tradisi asli? Kita harus bangga memiliki warisan yang diakui dunia and terus menjaganya."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika turis yang datang ke Waerebo semakin banyak, setujukah kamu jika dibangun tangga besi di luar Mbaru Niang agar tamu lebih mudah naik ke tingkat atas?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar lebih banyak orang tua bisa berkunjung and melihat keindahan rumah' },
              { id: 'r2', text: 'B. Karena tangga besi akan merusak bentuk asli and keaslian bahan kayu Mbaru Niang' },
              { id: 'r3', text: 'C. Supaya warga desa tidak perlu capek memanjat tangga kayu lagi' },
              { id: 'r4', text: 'D. Agar rumah terlihat lebih modern and canggih bagi wisatawan asing' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah Mbaru Niang harus tetap menggunakan lampu pelita (api) sebagai penerangan, atau boleh diganti lampu listrik sepenuhnya?',
            opinions: [
              { id: 'op1', text: 'Lampu Listrik' },
              { id: 'op2', text: 'Lampu Pelita' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar lebih terang untuk belajar and lebih aman from risiko kebakaran' },
              { id: 'r2', text: 'B. Lampu pelita menjaga suasana asli and tradisi turun-temurun' },
              { id: 'r3', text: 'C. Supaya warga bisa menonton televisi di dalam rumah' },
              { id: 'r4', text: 'D. Karena lampu listrik lebih murah daripada minyak pelita' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk menjaga kelestarian Rumah Mbaru Niang!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'rawat', color: '#f6bad3ff' },
              { id: 'w3', text: 'warisan dunia', color: '#99AAEF' },
              { id: 'w4', text: 'Mbaru Niang', color: '#a5ec93ff' },
              { id: 'w5', text: 'di', color: '#FFC7B1' },
              { id: 'w6', text: 'tanah Flores', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan1 nusa.png',
          text: "Pernahkah kamu mencoba daging asap from Nusa Tenggara Timur? Namanya adalah Se'i. Kata 'Se'i' berasal from bahasa daerah di Timor yang berarti daging yang diiris tipis-tipis memanjang. Se'i biasanya terbuat from daging sapi yang dibumbui with garam and rempah. Keunikan Se'i adalah cara memasaknya yang menggunakan asap, bukan dibakar langsung di atas api. Daging Se'i memiliki aroma yang sangat harum and warna kemerahan yang menggugah selera."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa arti nama "Se\'i" dalam bahasa daerah di Timor, Nusa Tenggara Timur?',
            options: ['Daging yang direbus', 'Daging yang diiris tipis memanjang', 'Daging yang digoreng kering', 'Daging yang dibungkus daun'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar teknik memasak Se\'i yang benar sesuai teks!',
            options: [
              { text: 'Digoreng dalam minyak', emoji: '🍳', image: '/assets/budayana/islands/digoreng dalam minyak.png' },
              { text: 'Diletakkan di atas asap kayu', emoji: '💨', image: '/assets/budayana/islands/diletakkan di atas asap kayu.png' },
              { text: 'Direbus dalam air', emoji: '🥣', image: '/assets/budayana/islands/direbus dalam air.png' },
              { text: 'Dibakar langsung di api', emoji: '🔥', image: '/assets/budayana/islands/dibakar langsung di api.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa nama kayu khusus yang digunakan untuk memberikan aroma harum pada Se\'i?',
            options: ['Kayu Kosambi', 'Kayu Mangga', 'Kayu Pinus', 'Kayu Kelapa'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa daging Se\'i dimasak with teknik pengasapan dalam waktu yang lama?',
            options: [
              'Agar daging berubah menjadi sangat pahit',
              'Supaya daging menjadi hangus and berwarna hitam',
              'Sebagai cara tradisional untuk mengawetkan daging',
              'Karena masyarakat Timor tidak memiliki kompor gas'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Sayuran apa yang biasanya menjadi pendamping khas saat memakan Se\'i?',
            options: ['Sayur Bayam Benar', 'Tumis Bunga Pepaya', 'Sayur Lodeh', 'Wortel Rebus'],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 nusa.png',
          text: "Apa yang membuat Se'i berbeda with daging asap lainnya? Rahasianya adalah penggunaan Kayu Kosambi sebagai sumber asapnya. Sebelum diasapi, daging ditutup with daun kosambi agar panasnya terjaga and aroma kayunya meresap sempurna. Teknik pengasapan ini sebenarnya adalah cara tradisional masyarakat Timor untuk mengawetkan daging agar bisa disimpan dalam waktu lama. Se'i biasanya disajikan with tumis bunga pepaya yang sedikit pahit and sambal lu'at yang rasanya asam segar."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan proses pembuatan Se\'i tradisional!',
            draggables: [
              { id: 'd1', text: 'Iris Daging Tipis', color: '#FFF3B0' },
              { id: 'd2', text: 'Beri Bumbu Garam', color: '#dbe0fd' },
              { id: 'd3', text: 'Tutup Daun Kosambi', color: '#ffb2d8' },
              { id: 'd4', text: 'Asapi with Kayu Kosambi', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Se\'i yang aromanya sangat asli, apa yang harus kamu lakukan pada daging saat sedang diasapi?',
            options: [
              'Menyiramnya with air es',
              'Menutupinya with daun kosambi yang segar',
              'Membiarkannya terbuka di udara bebas',
              'Menaburinya with tepung terigu'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa daging Se\'i tidak boleh terkena api langsung saat proses pengasapan?',
            options: [
              'Agar daging tidak menjadi terlalu manis',
              'Supaya daging matang perlahan oleh asap and tidak gosong',
              'Karena api langsung bisa merusak rasa garam',
              'Agar asap tidak keluar from tempat panggangan'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen Se\'i with fungsinya!',
            draggables: [
              { id: 'm1', text: 'Kayu Kosambi', color: '#FFF3B0', image: '/assets/budayana/islands/kayu kosambi.png' },
              { id: 'm2', text: 'Sambal Lu\'at', color: '#D4DCFF', image: '/assets/budayana/islands/sambel luat.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Memberikan aroma asap yang unik' },
              { id: 'z2', label: 'Memberikan rasa asam segar penyeimbang daging' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 nusa.png',
          text: "Saat ini, Se'i menjadi makanan yang sangat populer di kota-kota besar. Namun, karena permintaan yang tinggi, banyak penjual mulai menggunakan asap cair kimia atau kayu sembarangan agar prosesnya lebih cepat and murah. Padahal, aroma asli Se'i hanya bisa dihasilkan from kayu kosambi asli yang tumbuh di alam Nusa Tenggara. Muncul sebuah tantangan: apakah kita harus terus menebang pohon kosambi untuk memasak Se'i, atau mulai menanamnya kembali secara teratur? Kita harus menjaga keseimbangan alam agar kuliner lezat ini tetap bisa dinikmati selamanya."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kayu kosambi semakin langka, setujukah kamu jika penjual menggunakan "asap cair" buatan agar tetap bisa memproduksi Se\'i?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar harga Se\'i tetap murah and mudah dibeli oleh semua orang' },
              { id: 'r2', text: 'B. Karena asap cair tidak akan bisa menyamai aroma and kualitas kayu asli' },
              { id: 'r3', text: 'C. Supaya penjual tidak perlu repot mencari kayu ke hutan' },
              { id: 'r4', text: 'D. Karena bahan kimia jauh lebih sehat daripada asap kayu asli' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah pemerintah mewajibkan setiap pengusaha Se\'i untuk menanam kembali pohon kosambi?',
            opinions: [
              { id: 'op1', text: 'Harus Wajib' },
              { id: 'op2', text: 'Tidak Perlu' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Untuk menjaga kelestarian alam and memastikan bumbu asli Se\'i tetap ada' },
              { id: 'r2', text: 'B. Karena menanam pohon adalah tugas petani, bukan pengusaha makanan' },
              { id: 'r3', text: 'C. Supaya pengusaha memiliki banyak tabungan kayu di masa depan' },
              { id: 'r4', text: 'D. Agar lingkungan restoran menjadi lebih sejuk and hijau' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk menghargai kuliner from Nusa Tenggara!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'cintai', color: '#f6bad3ff' },
              { id: 'w3', text: 'kelezatan', color: '#99AAEF' },
              { id: 'w4', text: 'Se\'i Timor', color: '#a5ec93ff' },
              { id: 'w5', text: 'sebagai', color: '#FFC7B1' },
              { id: 'w6', text: 'kebanggaan nusantara', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 nusa.png',
          text: "Pernahkah kamu melihat alat musik yang terbuat from daun lontar and memiliki banyak senar? Alat musik itu bernama Sasando from Pulau Rote, Nusa Tenggara Timur. Sasando dimainkan with cara dipetik menggunakan kedua tangan. Wadah melengkung from daun lontar kering berfungsi untuk memantulkan suara agar terdengar lebih merdu. Selain Sasando, Nusa Tenggara juga terkenal with Tari Caci, sebuah tarian perang yang dilakukan oleh dua laki-laki yang saling menguji keberanian menggunakan cambuk and perisai."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama alat musik tradisional from Pulau Rote yang terbuat from daun lontar?',
            options: ['Tifa', 'Gamelan', 'Sasando', 'Angklung'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar bahan alam yang digunakan sebagai wadah resonansi (pemantul suara) Sasando!',
            options: [
              { text: 'Kulit Sapi', emoji: '🐂', image: '/assets/budayana/islands/kulit sapi.png' },
              { text: 'Daun Lontar Kering', emoji: '🍂', image: '/assets/budayana/islands/daun lontar kering.png' },
              { text: 'Tempurung Kelapa', emoji: '🥥', image: '/assets/budayana/islands/tempurung kelapa.png' },
              { text: 'Bambu Kuning', emoji: '🎋', image: '/assets/budayana/islands/bambu kuning.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Bagaimana cara memainkan alat musik Sasando agar menghasilkan alunan musik yang indah?',
            options: [
              'Ditiup with kuat',
              'Dipukul with pemukul kayu',
              'Dipetik with kedua tangan',
              'Digesek seperti biola'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa penari Caci menggunakan perisai from kulit kerbau saat melakukan tarian?',
            options: [
              'Sebagai tempat untuk menaruh makanan',
              'Untuk melindungi diri from cambukan lawan',
              'Agar terlihat lebih gagah di depan penonton',
              'Karena perisai tersebut sangat ringan untuk dibawa lari'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa fungsi utama from Tari Caci bagi masyarakat di Flores?',
            options: [
              'Untuk mencari siapa yang paling hebat berkelahi',
              'Upacara syukur hasil panen and simbol kedewasaan',
              'Pertunjukan komedi untuk menghibur anak-anak',
              'Lomba lari cepat antar desa'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 nusa.png',
          text: "Mengapa daun lontar sangat penting bagi alat musik Sasando? Daun lontar bukan hanya hiasan, tetapi merupakan 'ruang gema' alami. Tanpa daun lontar, suara petikan senar tidak akan terdengar nyaring. Dalam Tari Caci, setiap gerakan pemain cambuk and perisai diiringi oleh irama bunyi Gong and Gendang. Tarian ini bukan untuk saling menyakiti, melainkan sebuah upacara syukur atas hasil panen and simbol kedewasaan serta sportivitas bagi laki-laki di Flores."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan proses pembuatan Sasando secara sederhana!',
            draggables: [
              { id: 'd1', text: 'Bersihkan Daun Lontar', color: '#FFF3B0' },
              { id: 'd2', text: 'Jemur Hingga Kering', color: '#dbe0fd' },
              { id: 'd3', text: 'Pasang Bambu and Senar', color: '#ffb2d8' },
              { id: 'd4', text: 'Pasang Wadah Lontar', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Tahap 1' },
              { id: 'z2', label: 'Tahap 2' },
              { id: 'z3', label: 'Tahap 3' },
              { id: 'z4', label: 'Tahap 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin memainkan lagu with nada yang sangat banyak menggunakan Sasando, Sasando jenis apa yang harus kamu pilih?',
            options: [
              'Sasando with 2 senar saja',
              'Sasando with banyak senar (Sasando Dobel)',
              'Sasando tanpa senar sama sekali',
              'Sasando yang dibuat from plastik'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa yang akan terjadi pada suara Sasando jika daun lontarnya robek atau dilepas?',
            options: [
              'Suaranya akan berubah menjadi suara gitar',
              'Suaranya menjadi kecil and tidak merdu lagi',
              'Suaranya akan terdengar sangat keras',
              'Senar Sasando akan putus secara otomatis'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan elemen seni with simbolnya!',
            draggables: [
              { id: 'm1', text: 'Daun Lontar', color: '#FFF3B0', image: '/assets/budayana/islands/daun lontar.png' },
              { id: 'm2', text: 'Cambuk and Perisai', color: '#D4DCFF', image: '/assets/budayana/islands/cambuk perisai.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Ruang gema alami suara Sasando' },
              { id: 'z2', label: 'Simbol sportivitas and keberanian' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 nusa.png',
          text: "Saat ini, Sasando telah berkembang menjadi Sasando elektrik yang bisa dihubungkan ke pengeras suara besar. Hal ini memudahkan Sasando dimainkan di panggung konser dunia. Namun, pohon lontar di Nusa Tenggara mulai berkurang karena banyak ditebang. Jika pohon lontar hilang, kita tidak bisa lagi membuat Sasando tradisional yang asli. Apakah menurutmu Sasando elektrik sudah cukup untuk melestarikan budaya, atau kita harus tetap mewajibkan penanaman pohon lontar agar Sasando asli tidak punah? Kita harus menjaga keseimbangan antara kemajuan zaman and kelestarian alam."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika wadah daun lontar pada Sasando diganti with plastik agar lebih awet and mudah dibersihkan?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar Sasando lebih tahan lama and tidak mudah rusak jika terkena air' },
              { id: 'r2', text: 'B. Karena plastik tidak dapat menghasilkan getaran suara seindah daun lontar asli' },
              { id: 'r3', text: 'C. Supaya harga Sasando menjadi lebih murah bagi masyarakat' },
              { id: 'r4', text: 'D. Karena plastik memiliki warna-warni yang lebih menarik daripada daun kering' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah Tari Caci tetap menggunakan cambuk asli meskipun berisiko melukai penari?',
            opinions: [
              { id: 'op1', text: 'Tetap Cambuk Asli' },
              { id: 'op2', text: 'Ganti Cambuk Kain' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Menjaga nilai sejarah and sportivitas asli from tarian tersebut' },
              { id: 'r2', text: 'B. Agar penari lebih aman and tidak merasakan sakit saat bertanding' },
              { id: 'r3', text: 'C. Supaya tarian bisa diikuti oleh anak-anak kecil di sekolah' },
              { id: 'r4', text: 'D. Karena cambuk kain jauh lebih murah daripada cambuk kulit asli' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk bangga pada seni musik Nusa Tenggara!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'banggakan', color: '#f6bad3ff' },
              { id: 'w3', text: 'petikan Sasando', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'suara indah', color: '#FFC7B1' },
              { id: 'w6', text: 'dari NTT', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  },
  jawa: {
    rumah: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/rumah1 jawa.png',
          text: "Pulau Jawa memiliki rumah adat yang sangat terkenal bernama Rumah Joglo. Ciri khas yang paling menonjol from rumah ini adalah bentuk atapnya yang tinggi menjulang di bagian tengah, yang disebut with Atap Tajug. Rumah Joglo biasanya memiliki empat tiang utama yang sangat kokoh untuk menopang atap, yang disebut Soko Guru. Selain itu, rumah ini sering memiliki halaman yang luas di depan untuk menyambut tamu, yang mencerminkan sikap ramah masyarakat Jawa."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama rumah adat from Pulau Jawa yang memiliki ciri khas empat tiang utama di tengahnya?',
            options: ['Rumah Gadang', 'Rumah Joglo', 'Rumah Kebaya', 'Rumah Baduy'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar yang menunjukkan bentuk atap "Tajug" (Joglo) yang benar!',
            options: [
              { text: 'Atap Kerucut', emoji: '📐', image: '/assets/budayana/islands/atap kerucut.png' },
              { text: 'Atap Trapesium Menjulang', emoji: '🏠', image: '/assets/budayana/islands/atap trapesium menjulang.png' },
              { text: 'Atap Tanduk', emoji: '🐂', image: '/assets/budayana/islands/atap tanduk.png' },
              { text: 'Atap Datar', emoji: '➖', image: '/assets/budayana/islands/atap datar.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa sebutan untuk empat tiang utama yang sangat kokoh pada Rumah Joglo?',
            options: ['Soko Guru', 'Gonjong', 'Pendopo', 'Tumpang Sari'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Apa fungsi utama from bagian "Pendopo" pada Rumah Joglo?',
            options: [
              'Sebagai tempat menyimpan hasil panen',
              'Sebagai tempat tidur tamu yang datang',
              'Sebagai tempat terbuka untuk pertemuan warga',
              'Sebagai tempat untuk memasak makanan'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, mengapa Rumah Joglo sering memiliki halaman depan yang sangat luas?',
            options: [
              'Agar rumah terlihat sangat mahal',
              'Mencerminkan sikap ramah dalam menyambut tamu',
              'Sebagai tempat untuk memelihara hewan ternak',
              'Agar sirkulasi udara di dalam rumah tidak panas'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/rumah2 jawa.png',
          text: "Desain Rumah Joglo mencerminkan status sosial and hubungan manusia with alam. Bagian depan rumah yang terbuka, disebut Pendopo, berfungsi sebagai tempat pertemuan warga. Yang unik, sambungan kayu pada Rumah Joglo menggunakan teknik tumpang sari, yaitu susunan balok kayu yang bertumpuk rapi di bagian atap. Teknik ini tidak hanya indah, tetapi juga membuat bangunan stabil. Semakin banyak tingkatan tumpang sarinya, biasanya menunjukkan bahwa pemilik rumah tersebut adalah orang yang terpandang."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan bagian Rumah Joglo from yang paling depan ke paling belakang!',
            draggables: [
              { id: 'd1', text: 'Halaman', color: '#FFF3B0' },
              { id: 'd2', text: 'Pendopo', color: '#dbe0fd' },
              { id: 'd3', text: 'Pringgitan', color: '#ffb2d8' },
              { id: 'd4', text: 'Omah Dalem', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Bagian 1' },
              { id: 'z2', label: 'Bagian 2' },
              { id: 'z3', label: 'Bagian 3' },
              { id: 'z4', label: 'Bagian 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membangun Rumah Joglo yang sangat kokoh and tahan lama, jenis kayu apa yang paling tepat dipilih sesuai tradisi?',
            options: [
              'Kayu Sengon yang ringan',
              'Kayu Jati tua yang kuat',
              'Batang pohon kelapa',
              'Papan kayu lapis (triplek)'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa susunan kayu "Tumpang Sari" pada atap Joglo dibuat bertingkat-tingkat?',
            options: [
              'Agar atap tidak mudah bocor saat hujan',
              'Untuk memberikan kekuatan struktur and keindahan',
              'Supaya cahaya matahari tidak masuk ke dalam',
              'Agar burung tidak bisa bersarang di atap'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bagian rumah with maknanya!',
            draggables: [
              { id: 'm1', text: 'Pendopo', color: '#FFF3B0', image: '/assets/budayana/islands/pendopo.png' },
              { id: 'm2', text: 'Soko Guru', color: '#D4DCFF', image: '/assets/budayana/islands/soko guru.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Melambangkan Keterbukaan' },
              { id: 'z2', label: 'Melambangkan Kekuatan' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/rumah3 jawa.png',
          text: "Saat ini, tanah di Pulau Jawa semakin padat oleh penduduk. Akibatnya, sulit sekali membangun Rumah Joglo with ukuran aslinya yang luas and menggunakan kayu jati pilihan. Banyak orang kini membangun rumah modern namun tetap menambahkan bentuk atap Joglo di atasnya. Muncul sebuah tantangan: apakah Rumah Joglo harus tetap berukuran luas agar sesuai filosofinya, atau boleh dimodifikasi menjadi lebih kecil agar bisa dibangun di lahan sempit? Kita harus tetap menghargai warisan ini agar filosofi kebersamaan di dalamnya tidak hilang."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Jika kamu tinggal di lahan sempit namun ingin memiliki nuansa Joglo, apakah kamu setuju jika ukuran Pendopo dibuat sangat kecil?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Karena yang penting adalah bentuk atapnya untuk menjaga identitas' },
              { id: 'r2', text: 'B. Pendopo harus luas agar fungsi kebersamaan tidak hilang' },
              { id: 'r3', text: 'C. Supaya biaya pembangunan menjadi lebih murah' },
              { id: 'r4', text: 'D. Agar bagian dalam rumah menjadi lebih luas' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah penggunaan keramik modern untuk lantai Rumah Joglo saat ini lebih baik daripada lantai tanah/semen biasa?',
            opinions: [
              { id: 'op1', text: 'Lebih Baik' },
              { id: 'op2', text: 'Kurang Baik' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar rumah lebih bersih, mudah dirawat, and terlihat modern' },
              { id: 'r2', text: 'B. Lantai semen/tanah menjaga kesan alami and tradisional' },
              { id: 'r3', text: 'C. Supaya rumah terlihat seperti rumah di kota besar' },
              { id: 'r4', text: 'D. Keramik sangat sulit pecah jika terkena tiang kayu' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah pesan untuk mengajak orang lain bangga with Rumah Joglo!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'lestarikan', color: '#f6bad3ff' },
              { id: 'w3', text: 'Rumah Joglo', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'kebanggaan', color: '#FFC7B1' },
              { id: 'w6', text: 'budaya Jawa', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    makanan: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 jawa.png',
          text: "Pernahkah kamu mencicipi makanan manis berwarna cokelat dari Yogyakarta? Namanya adalah Gudeg. Bahan utama Gudeg adalah Nangka Muda yang dipotong kecil-kecil. Nangka ini dimasak bersama santan, gula jawa, and daun jati agar warnanya menjadi cokelat gelap yang cantik. Gudeg biasanya disajikan with nasi, telur pindang, and ayam. Rasa utama from Gudeg adalah manis and gurih, yang sangat disukai oleh masyarakat di Pulau Jawa."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa bahan utama yang digunakan untuk membuat masakan Gudeg?',
            options: ['Buah Pisang Muda', 'Buah Nangka Muda', 'Buah Pepaya', 'Daging Ikan'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar bahan alami yang memberikan rasa manis and warna cokelat pada Gudeg!',
            options: [
              { text: 'Garam Dapur', emoji: '🧂', image: '/assets/budayana/islands/garam dapur.png' },
              { text: 'Gula Jawa/Merah', emoji: '🤎', image: '/assets/budayana/islands/gula jawa merah.png' },
              { text: 'Merica Bubuk', emoji: '🧂', image: '/assets/budayana/islands/merica bubuk.png' },
              { text: 'Madu Lebah', emoji: '🍯', image: '/assets/budayana/islands/madu lebah.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Kota manakah yang sangat terkenal with sebutan "Kota Gudeg" di Pulau Jawa?',
            options: ['Jakarta', 'Bandung', 'Yogyakarta', 'Surabaya'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa daun jati sering dimasukkan saat memasak Gudeg?',
            options: [
              'Agar rasa Gudeg menjadi sangat pedas',
              'Sebagai pengganti nasi saat makan',
              'Sebagai pewarna alami agar Gudeg berwarna cokelat',
              'Agar nangka muda tidak cepat hancur'
            ],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, rasa utama yang akan kamu rasakan saat memakan Gudeg adalah...',
            options: ['Asam and Pedas', 'Manis and Gurih', 'Pahit and Sepat', 'Asin sekali'],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/makanan2 jawa.png',
          text: "Mengapa memasak Gudeg membutuhkan waktu yang sangat lama, bahkan bisa seharian? Ternyata, api yang digunakan harus kecil agar bumbu santan and gula jawa meresap sempurna ke dalam serat nangka muda. Proses ini melambangkan kesabaran and ketelitian masyarakat Jawa dalam mengerjakan sesuatu. Selain itu, daun jati yang dimasukkan saat memasak bukan untuk dimakan, melainkan berfungsi sebagai pewarna alami agar Gudeg terlihat cokelat kemerahan tanpa bahan kimia."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan proses memasak Gudeg yang benar!',
            draggables: [
              { id: 'd1', text: 'Potong Nangka Muda', color: '#FFF3B0' },
              { id: 'd2', text: 'Campur Santan & Bumbu', color: '#dbe0fd' },
              { id: 'd3', text: 'Masak Api Kecil Seharian', color: '#ffb2d8' },
              { id: 'd4', text: 'Gudeg Cokelat Matang', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Langkah 1' },
              { id: 'z2', label: 'Langkah 2' },
              { id: 'z3', label: 'Langkah 3' },
              { id: 'z4', label: 'Langkah 4' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika kamu ingin membuat Gudeg with cara tradisional, wadah apa yang paling tepat digunakan untuk memasaknya agar rasanya lebih sedap?',
            options: ['Panci Plastik', 'Kendil (Kuali Tanah Liat)', 'Kaleng Besi', 'Ember Bambu'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa memasak Gudeg harus menggunakan api yang kecil dalam waktu yang lama?',
            options: [
              'Agar kayu bakar tidak cepat habis',
              'Agar bumbu meresap sempurna ke dalam serat nangka',
              'Supaya warna Gudeg tetap putih bersih',
              'Karena nangka muda sangat takut with api besar'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan bahan Gudeg with fungsinya!',
            draggables: [
              { id: 'm1', text: 'Santan Kelapa', color: '#FFF3B0', image: '/assets/budayana/islands/santan kelapa.png' },
              { id: 'm2', text: 'Gula Jawa', color: '#D4DCFF', image: '/assets/budayana/islands/gula merah.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Memberikan Rasa Gurih' },
              { id: 'z2', label: 'Memberikan Rasa Manis and Warna' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/makanan3 jawa.png',
          text: "Saat ini, Gudeg tidak hanya dijual di kendil (panci tanah liat), tetapi juga sudah ada yang dikemas dalam kaleng agar bisa dibawa sebagai oleh-oleh ke luar negeri. Namun, ada yang merasa bahwa Gudeg kalengan rasanya berbeda with Gudeg segar yang baru matang. Muncul sebuah diskusi: apakah kita harus tetap mempertahankan cara menjual Gudeg secara tradisional di warung lesehan, atau fokus pada penjualan Gudeg kemasan modern agar lebih terkenal? Kita harus menjaga agar cita rasa asli Gudeg tetap dicintai oleh generasi mendatang."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika resep Gudeg diubah menjadi sangat pedas agar disukai anak muda zaman sekarang?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar Gudeg lebih modern and mengikuti selera pasar saat ini' },
              { id: 'r2', text: 'B. Karena rasa asli Gudeg adalah manis, mengubahnya akan menghilangkan ciri khasnya' },
              { id: 'r3', text: 'C. Supaya orang tidak lagi menganggap Gudeg sebagai makanan manis' },
              { id: 'r4', text: 'D. Agar Gudeg bisa bersaing with makanan luar negeri yang pedas' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Apakah menjual Gudeg dalam kemasan kaleng adalah ide yang bagus untuk melestarikan budaya?',
            opinions: [
              { id: 'op1', text: 'Bagus' },
              { id: 'op2', text: 'Kurang Bagus' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Ya, karena with begitu Gudeg bisa dinikmati oleh orang di seluruh dunia' },
              { id: 'r2', text: 'B. Tidak, karena suasana makan Gudeg yang asli adalah di warung lesehan' },
              { id: 'r3', text: 'C. Ya, agar kita tidak perlu lagi belajar cara memasak Gudeg sendiri' },
              { id: 'r4', text: 'D. Tidak, karena kaleng besi bisa merusak rasa nangka muda' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk menjaga warisan kuliner Jawa!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'lestarikan', color: '#f6bad3ff' },
              { id: 'w3', text: 'Gudeg', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'makanan khas', color: '#FFC7B1' },
              { id: 'w6', text: 'kebanggaan Jawa', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    },
    tarian: {
      1: {
        literacy: {
          image: '/assets/budayana/islands/tarian1 jawa.png',
          text: "Pernahkah kamu mendengar suara dentuman alat musik from perunggu atau besi di pertunjukan wayang? Alat musik itu disebut Gamelan. Gamelan terdiri from berbagai instrumen seperti Gong, Kenong, Saron, and Bonang. Cara memainkannya adalah with cara dipukul menggunakan pemukul khusus. Gamelan biasanya digunakan untuk mengiringi tarian tradisional Jawa, seperti Tari Serimpi atau Tari Wayang. Gerakan tari Jawa dikenal sangat halus and mengikuti tempo suara gamelan yang tenang."
        },
        questions: [
          {
            type: 'multiple_choice',
            text: 'Apa nama seperangkat alat musik tradisional from Jawa yang dimainkan with cara dipukul?',
            options: ['Angklung', 'Sasando', 'Gamelan', 'Kolintang'],
            correctIndex: 2,
            xp: 20
          },
          {
            type: 'picture_selection',
            text: 'Pilih gambar alat musik Gamelan yang berfungsi sebagai penutup nada atau gong besar!',
            options: [
              { text: 'Suling', emoji: '🎋', image: '/assets/budayana/islands/suling.png' },
              { text: 'Gong Gantung', emoji: '🔔', image: '/assets/budayana/islands/gong gantung.png' },
              { text: 'Biola', emoji: '🎻', image: '/assets/budayana/islands/biola.png' },
              { text: 'Gitar', emoji: '🎸', image: '/assets/budayana/islands/gitar.png' }
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Bahan logam apa yang biasanya digunakan untuk membuat alat musik gamelan berkualitas tinggi?',
            options: ['Perunggu atau Besi', 'Emas and Perak', 'Plastik and Karet', 'Aluminium and Seng'],
            correctIndex: 0,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa gerakan penari Jawa terlihat sangat halus and lambat pada saat tertentu?',
            options: [
              'Karena penari sedang merasa mengantuk',
              'Mengikuti tempo musik gamelan yang tenang and lembut',
              'Karena kostum penari sangat berat untuk dibawa lari',
              'Agar pertunjukan tari berlangsung sangat lama'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Berdasarkan teks, apa yang menjadi ciri khas from kelompok musik Gamelan?',
            options: [
              'Hanya terdiri from satu alat musik saja',
              'Terdiri from berbagai instrumen yang dimainkan bersama secara selaras',
              'Pemainnya harus berteriak kencang saat bermain',
              'Musiknya selalu dimainkan with sangat cepat and keras'
            ],
            correctIndex: 1,
            xp: 20
          }
        ]
      },
      2: {
        literacy: {
          image: '/assets/budayana/islands/tarian2 jawa.png',
          text: "Musik Gamelan and tarian Jawa melambangkan keselarasan hidup. Di dalam kelompok gamelan, tidak ada satu alat musik yang menonjol sendiri; semua instrumen harus berbunyi bersamaan agar tercipta nada yang indah. Pemimpin irama dalam gamelan adalah Kendang. Kendang bertugas mengatur cepat atau lambatnya gerakan penari. Jika kendang dipukul cepat, maka penari akan bergerak lincah, and jika pelan, penari akan bergerak with sangat halus and anggun."
        },
        questions: [
          {
            type: 'drag_drop',
            text: 'Urutkan alat musik gamelan from yang ukurannya terkecil hingga terbesar!',
            draggables: [
              { id: 'd1', text: 'Saron', color: '#FFF3B0' },
              { id: 'd2', text: 'Bonang', color: '#dbe0fd' },
              { id: 'd3', text: 'Kenong', color: '#ffb2d8' },
              { id: 'd4', text: 'Gong', color: '#ffd5c0' }
            ],
            dropZones: [
              { id: 'z1', label: 'Terkecil' },
              { id: 'z2', label: 'Sedang' },
              { id: 'z3', label: 'Besar' },
              { id: 'z4', label: 'Terbesar' }
            ],
            correctOrder: ['d1', 'd2', 'd3', 'd4'],
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Jika penari ingin mempercepat gerakannya, alat musik gamelan mana yang harus memberikan kode melalui suaranya?',
            options: ['Gong', 'Kendang', 'Suling', 'Gambang'],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'multiple_choice',
            text: 'Mengapa kerja sama tim sangat penting dalam memainkan Gamelan menurut teks?',
            options: [
              'Agar pemain musik tidak merasa bosan',
              'Agar tercipta nada yang indah and selaras tanpa ada yang saling mendahului',
              'Supaya penonton memberikan uang yang banyak',
              'Karena alat musik gamelan sangat berat jika dimainkan sendiri'
            ],
            correctIndex: 1,
            xp: 20
          },
          {
            type: 'drag_drop',
            text: 'Pasangkan alat musik with perannya!',
            draggables: [
              { id: 'm1', text: 'Kendang', color: '#FFF3B0', image: '/assets/budayana/islands/kendang.png' },
              { id: 'm2', text: 'Gong', color: '#D4DCFF', image: '/assets/budayana/islands/gong gantung.png' }
            ],
            dropZones: [
              { id: 'z1', label: 'Mengatur tempo and irama' },
              { id: 'z2', label: 'Menandai akhir from sebuah rangkaian nada' }
            ],
            correctOrder: ['m1', 'm2'],
            xp: 20
          }
        ]
      },
      3: {
        literacy: {
          image: '/assets/budayana/islands/tarian3 jawa.png',
          text: "Saat ini, pembuatan alat musik gamelan asli from perunggu membutuhkan biaya yang sangat mahal and tenaga ahli yang sedikit. Banyak sekolah mulai menggunakan gamelan digital atau rekaman kaset untuk latihan menari. Namun, para seniman berpendapat bahwa getaran suara gamelan asli memberikan perasaan yang berbeda bagi penari. Apakah menurutmu latihan menari with rekaman kaset sudah cukup, atau setiap sekolah tetap harus memiliki set gamelan asli? Kita harus memikirkan cara agar seni musik ini tetap dipelajari with cara yang benar."
        },
        questions: [
          {
            type: 'opinion_reason',
            text: 'Setujukah kamu jika alat musik gamelan diganti with piano atau keyboard agar lebih praktis?',
            opinions: [
              { id: 'op1', text: 'Setuju' },
              { id: 'op2', text: 'Tidak Setuju' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Agar musik tradisional Jawa terdengar lebih seperti musik modern/pop' },
              { id: 'r2', text: 'B. Karena piano tidak bisa menghasilkan suara and getaran khas from logam perunggu gamelan' },
              { id: 'r3', text: 'C. Supaya pemain musik tidak perlu lagi membawa banyak alat yang berat' },
              { id: 'r4', text: 'D. Karena piano lebih mudah dipelajari daripada memainkan bonang' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'opinion_reason',
            text: 'Haruskah setiap siswa di sekolah belajar menari Jawa meskipun mereka merasa gerakannya terlalu lambat?',
            opinions: [
              { id: 'op1', text: 'Harus Belajar' },
              { id: 'op2', text: 'Tidak Perlu' }
            ],
            reasons: [
              { id: 'r1', text: 'A. Untuk melatih kesabaran, kehalusan budi, and melestarikan budaya asli' },
              { id: 'r2', text: 'B. Karena tarian modern jauh lebih seru and membuat tubuh lebih berkeringat' },
              { id: 'r3', text: 'C. Supaya semua siswa bisa menjadi penari profesional di masa depan' },
              { id: 'r4', text: 'D. Agar jam pelajaran seni di sekolah menjadi lebih lama' }
            ],
            correctPairs: [
              { opinionId: 'op1', reasonId: 'r1' },
              { opinionId: 'op2', reasonId: 'r2' }
            ],
            xp: 30
          },
          {
            type: 'drag_drop_sentence',
            text: 'Susunlah ajakan untuk mencintai seni gamelan!',
            draggables: [
              { id: 'w1', text: 'Mari kita', color: '#f5f199ff' },
              { id: 'w2', text: 'lestarikan', color: '#f6bad3ff' },
              { id: 'w3', text: 'suara gamelan', color: '#99AAEF' },
              { id: 'w4', text: 'sebagai', color: '#a5ec93ff' },
              { id: 'w5', text: 'harmoni', color: '#FFC7B1' },
              { id: 'w6', text: 'budaya Jawa', color: '#e3baf4ff' }
            ],
            dropZones: [
              { id: 'z1' }, { id: 'z2' }, { id: 'z3' }, { id: 'z4' }, { id: 'z5' }, { id: 'z6' }
            ],
            correctOrder: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'],
            xp: 40
          }
        ]
      }
    }
  }
}

