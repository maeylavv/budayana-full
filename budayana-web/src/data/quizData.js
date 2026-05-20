export const QUIZ_DATA = {
  "sumatra": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/level1 sumatra.png",
          "text": "Tahukah kamu? Sumatera Barat memiliki rumah adat yang sangat indah bernama Rumah Gadang. Ciri khas utama rumah ini adalah atapnya yang runcing menjulang ke atas seperti tanduk kerbau, yang disebut dengan Gonjong. \n\n Zaman dahulu, atap ini dibuat dari bahan alami bernama Ijuk agar bagian dalam rumah tetap terasa sejuk. Selain itu, Rumah Gadang dibangun berbentuk panggung dengan tiang yang tinggi untuk melindungi penghuninya dari banjir dan gangguan hewan liar di hutan."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama rumah adat dari Sumatera Barat yang memiliki atap runcing seperti tanduk kerbau?",
            "options": [
              "Rumah Honai",
              "Rumah Gadang",
              "Rumah Joglo",
              "Rumah Limas"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang menunjukkan bentuk atap \"Gonjong\" (tanduk kerbau) yang benar!",
            "options": [
              {
                "text": "Atap Kubah",
                "emoji": "🕌",
                "image": "/assets/budayana/islands/atap kubah.png"
              },
              {
                "text": "Atap Datar",
                "emoji": "➖",
                "image": "/assets/budayana/islands/atap datar.png"
              },
              {
                "text": "Atap Runcing",
                "emoji": "⛰️",
                "image": "/assets/budayana/islands/atap runcing.png"
              },
              {
                "text": "Atap Limas",
                "emoji": "🔼",
                "image": "/assets/budayana/islands/atap limas.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa bahan utama yang digunakan untuk membuat atap Rumah Gadang pada zaman dahulu?",
            "options": [
              "Ijuk",
              "Genteng",
              "Seng",
              "Jerami"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Rumah Gadang dibuat berbentuk panggung dengan tiang yang tinggi?",
            "options": [
              "Agar terlihat lebih mewah dari rumah biasa",
              "Untuk tempat menjemur pakaian di luar",
              "Agar terhindar dari banjir dan gangguan hewan liar",
              "Supaya udara di dalam rumah menjadi dingin"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa tiang-tiang penyangga Rumah Gadang tidak ditanamkan langsung ke dalam tanah, tetapi diletakkan di atas batu datar yang disebut Batu Sandi?",
            "options": [
              "Agar rumah bisa dipindahkan dengan mudah ke lokasi lain",
              "Supaya getaran gempa diredam oleh batu sebelum sampai ke bangunan",
              "Karena tanah di Sumatera Barat terlalu keras untuk digali",
              "Agar akar pohon tidak merusak pondasi rumah"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/level2 sumatra.png",
          "text": "Rumah Gadang dibangun dengan kecerdasan tinggi. Tahukah kamu? Tiang-tiang rumah ini tidak ditanam ke tanah, melainkan diletakkan di atas batu datar yang disebut Batu Sandi. Tujuannya agar getaran gempa diredam oleh batu sebelum sampai ke bangunan. Kayu yang dipilih pun sangat kuat, seperti Kayu Surian atau Kayu Ulin yang sudah tua. \n\n Hebatnya, rumah ini dibangun tanpa paku besi, melainkan menggunakan pasak kayu agar bangunan menjadi lentur dan tidak mudah roboh saat gempa. Setiap ukiran bunga di dinding melambangkan kekayaan alam, sementara atap runcingnya melambangkan kemenangan dan semangat."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan bagian Rumah Gadang dari yang paling bawah hingga paling atas!",
            "draggables": [
              {
                "id": "d2",
                "text": "Lantai Panggung",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Atap Gonjong",
                "color": "#ffb2d8"
              },
              {
                "id": "d1",
                "text": "Batu Sandi",
                "color": "#FFF3B0"
              },
              {
                "id": "d4",
                "text": "Tiang Kayu",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Posisi 1"
              },
              {
                "id": "z2",
                "label": "Posisi 2"
              },
              {
                "id": "z3",
                "label": "Posisi 3"
              },
              {
                "id": "z4",
                "label": "Posisi 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d4",
              "d2",
              "d3"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membangun Rumah Gadang yang kuat, jenis kayu apa yang digunakan untuk tiang utama sesuai tradisi?",
            "options": [
              "Kayu Sengon yang ringan",
              "Kayu ulin atau kayu surian yang sudah tua dan keras",
              "Batang pohon kelapa",
              "Papan kayu lapis (triplek)"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Rumah Gadang disambung tanpa menggunakan paku besi sama sekali?",
            "options": [
              "Agar atap tidak mudah bocor",
              "Agar tetap lentur saat terjadi gempa",
              "Agar burung tidak bisa bersarang",
              "Supaya cahaya matahari tidak masuk"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan simbol berikut dengan maknanya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Ukiran Bunga",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/ukiran bunga.png"
              },
              {
                "id": "m1",
                "text": "Atap Runcing",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/atap runcing.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Melambangkan kemenangan dan semangat"
              },
              {
                "id": "z2",
                "label": "Melambangkan kekayaan alam Sumatera Barat"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/level3 sumatra.png",
          "text": "Seiring berjalannya waktu, banyak Rumah Gadang yang mulai berubah. Karena ijuk semakin sulit ditemukan, banyak warga mengganti atapnya menggunakan seng. Selain itu, Rumah Gadang yang aslinya luas kini harus dibangun di lahan kota yang sempit. \n\n Hal ini memicu perdebatan: apakah kita harus tetap mempertahankan bentuk asli sesuai tradisi demi menjaga keaslian budaya, atau boleh mengubahnya agar lebih modern dan praktis? Kita harus bijak menjaga warisan ini agar tidak hilang ditelan zaman."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu membangun Rumah Gadang di kota besar, apakah bentuk aslinya harus tetap dipertahankan?",
            "opinions": [
              {
                "id": "op1",
                "text": "Tetap Harus"
              },
              {
                "id": "op2",
                "text": "Boleh Diubah"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Karena ciri khas tradisi adalah identitas budaya yang harus dijaga"
              },
              {
                "id": "r2",
                "text": "B. Agar bisa menghemat tempat dan menyesuaikan lahan sempit di kota"
              },
              {
                "id": "r3",
                "text": "C. Supaya rumah terlihat unik dibandingkan rumah tetangga"
              },
              {
                "id": "r4",
                "text": "D. Agar orang lain tidak mudah masuk ke dalam rumah"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Menurutmu, mengganti atap ijuk menjadi atap seng pada Rumah Gadang adalah tindakan yang...",
            "opinions": [
              {
                "id": "op1",
                "text": "Tepat"
              },
              {
                "id": "op2",
                "text": "Kurang Tepat"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Karena atap seng lebih tahan lama dan tidak mudah bocor"
              },
              {
                "id": "r3",
                "text": "B. Agar lebih menghemat biaya perawatan setiap tahunnya"
              },
              {
                "id": "r2",
                "text": "C. Karena kehilangan keaslian dan ciri khas budaya lokal"
              },
              {
                "id": "r4",
                "text": "D. Supaya rumah terlihat lebih modern seperti rumah di kota"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op1",
                "reasonId": "r3"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan ajakan untuk temanmu agar mau menjaga kebersihan Rumah Gadang!",
            "draggables": [
              {
                "id": "w6",
                "text": "kebersihan",
                "color": "#e3baf4ff"
              },
              {
                "id": "w1",
                "text": "menjaga",
                "color": "#f6bad3ff"
              },
              {
                "id": "w2",
                "text": "Rumah Gadang",
                "color": "#99AAEF"
              },
              {
                "id": "w5",
                "text": "Ayo kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w4",
                "text": "sebagai",
                "color": "#a5ec93ff"
              },
              {
                "id": "w3",
                "text": "warisan budaya",
                "color": "#FFC7B1"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w5",
              "w1",
              "w6",
              "w2",
              "w4",
              "w3"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan1 sumatra.png",
          "text": "Salah satu makanan tradisional yang paling terkenal dari Sumatera Barat adalah Rendang. Makanan ini berbahan dasar daging sapi yang dimasak dengan santan kelapa dan aneka rempah. Rendang memiliki warna cokelat gelap yang khas. Untuk mendapatkan rasa yang lezat, Rendang harus dimasak dalam waktu lama, sekitar 4 sampai 8 jam. \n\n Karena proses memasak yang lama ini, Rendang bisa awet dan tahan lama hingga beberapa minggu meskipun tidak disimpan di dalam kulkas, berkat minyak santan dan rempah-rempah yang bertindak sebagai pengawet alami."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa bahan utama yang digunakan untuk membuat Rendang dari Sumatera Barat?",
            "options": [
              "Daging Kambing",
              "Daging Ayam",
              "Daging Sapi",
              "Ikan Tongkol"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar bumbu cair yang membuat Rendang terasa gurih dan berminyak!",
            "options": [
              {
                "text": "Minyak Goreng",
                "emoji": "🍾",
                "image": "/assets/budayana/islands/minyak goreng.png"
              },
              {
                "text": "Santan Kelapa",
                "emoji": "🥥",
                "image": "/assets/budayana/islands/santan kelapa.png"
              },
              {
                "text": "Air Bening",
                "emoji": "💧",
                "image": "/assets/budayana/islands/air bening.png"
              },
              {
                "text": "Kecap Manis",
                "emoji": "🍯",
                "image": "/assets/budayana/islands/kecap manis.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berapa lama waktu yang biasanya dibutuhkan untuk memasak Rendang hingga kering?",
            "options": [
              "15 - 30 Menit",
              "24 Jam Full",
              "1 Jam",
              "4 - 8 Jam"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Rendang yang sudah dimasak hingga kering bisa tahan lama tanpa kulkas?",
            "options": [
              "Karena dagingnya dicampur dengan garam yang sangat banyak",
              "Karena warna cokelat gelap menakuti kuman",
              "Karena Rendang tidak disukai oleh bakteri",
              "Karena proses masak yang lama membunuh bakteri dan santan menjadi pengawet"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, warna khas dari Rendang yang sudah matang sempurna adalah...",
            "options": [
              "Merah Menyala",
              "Putih Bersih",
              "Kuning Cerah",
              "Cokelat Gelap"
            ],
            "correctIndex": 3,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 sumatra.png",
          "text": "Memasak Rendang membutuhkan kesabaran karena harus melewati beberapa tahapan: dimulai dari Gulai (yang masih banyak kuah), lalu menjadi Kalio (kuah yang mulai mengental), hingga akhirnya menjadi Rendang (kuah kering dan berminyak). \n\n Selain lezat, Rendang kaya akan simbol: Daging sapi melambangkan pemimpin adat (Niniak Mamak), Santan melambangkan kaum intelektual, dan Cabai melambangkan Alim Ulama yang tegas dalam menyampaikan ajaran agama, dan bumbu rempah melambangkan seluruh lapisan masyarakat yang bersatu padu."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan perubahan masakan dari cair hingga menjadi Rendang!",
            "draggables": [
              {
                "id": "d3",
                "text": "Rendang (Kuah Kering/Berminyak)",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Kalio (Kuah Mengental)",
                "color": "#dbe0fd"
              },
              {
                "id": "d1",
                "text": "Gulai (Masih Banyak Kuah)",
                "color": "#FFF3B0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membuat Rendang yang tidak terlalu pedas untuk anak kecil, bumbu mana yang harus dikurangi?",
            "options": [
              "Santan",
              "Daging",
              "Cabai",
              "Lengkuas"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa perbedaan utama antara \"Kalio\" dan \"Rendang\" menurut teks?",
            "options": [
              "Kalio dimasak 10 jam, sedangkan Rendang hanya 1 jam",
              "Kalio rasanya manis, sedangkan Rendang rasanya sangat pahit",
              "Kalio masih basah/berkuah kental, Rendang sudah kering dan gelap",
              "Kalio menggunakan daging ayam, Rendang menggunakan sapi"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bahan Rendang dengan simbol maknanya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Cabai",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/cabai merah.png"
              },
              {
                "id": "m1",
                "text": "Daging Sapi",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/daging sapi.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Niniak Mamak (Pemimpin Adat)"
              },
              {
                "id": "z2",
                "label": "Alim Ulama (Ulama yang Tegas)"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan3 sumatra.png",
          "text": "Saat ini, Rendang telah menjadi makanan terlezat di dunia. Banyak inovasi muncul, seperti Rendang Instan dalam kaleng agar bisa dikirim ke luar negeri dengan praktis. \n\n Namun, muncul sebuah diskusi: bolehkah kita mengganti daging sapi dengan daging ayam agar orang yang tidak makan sapi tetap bisa menikmati bumbunya? \n\n Selain itu, ada tantangan apakah Rendang yang dimasak cepat dan masih basah (Kalio) tetap bisa disebut Rendang yang asli. Kita harus bangga pada warisan kuliner ini agar cita rasanya tetap terjaga sesuai tradisi aslinya."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu adalah pengusaha kuliner, apakah kamu setuju menjual \"Rendang Instan\" dalam kaleng agar bisa dikirim ke luar negeri?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r3",
                "text": "A. Supaya harga Rendang menjadi lebih mahal dari biasanya"
              },
              {
                "id": "r1",
                "text": "B. Agar orang di seluruh dunia bisa mencicipi Rendang dengan mudah"
              },
              {
                "id": "r2",
                "text": "C. Karena Rendang kalengan akan mengubah rasa asli bumbu rempahnya"
              },
              {
                "id": "r4",
                "text": "D. Karena memasak Rendang di luar negeri sangat dilarang"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Bolehkah kita mengganti daging sapi dengan daging ayam dan tetap menyebutnya sebagai Rendang?",
            "opinions": [
              {
                "id": "op1",
                "text": "Boleh"
              },
              {
                "id": "op2",
                "text": "Kurang Tepat"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Supaya waktu memasaknya menjadi jauh lebih singkat (hanya 30 menit)"
              },
              {
                "id": "r1",
                "text": "B. Agar orang yang tidak makan daging sapi tetap bisa menikmati bumbu Rendang"
              },
              {
                "id": "r3",
                "text": "C. Karena rasa daging ayam jauh lebih enak daripada daging sapi"
              },
              {
                "id": "r2",
                "text": "D. Rendang asli secara tradisional harus menggunakan daging sapi agar tahan lama"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk bangga pada kuliner asli Indonesia!",
            "draggables": [
              {
                "id": "w1",
                "text": "Ayo kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w4",
                "text": "sebagai",
                "color": "#a5ec93ff"
              },
              {
                "id": "w3",
                "text": "Rendang",
                "color": "#99AAEF"
              },
              {
                "id": "w6",
                "text": "terlezat di dunia",
                "color": "#e3baf4ff"
              },
              {
                "id": "w2",
                "text": "cintai",
                "color": "#f6bad3ff"
              },
              {
                "id": "w5",
                "text": "makanan",
                "color": "#FFC7B1"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 sumatra.png",
          "text": "Pernahkah kamu melihat tarian yang penarinya duduk berjejer dan bergerak sangat cepat? Itu adalah Tari Saman dari suku Gayo, Aceh. Berbeda dengan tarian lain yang diiringi banyak alat musik petik atau tiup, Tari Saman justru menggunakan suara dari gerakan tubuh para penarinya sendiri. \n\n Mereka menepuk dada, menepuk tangan, dan menepuk paha untuk menciptakan irama yang kompak. Karena keunikan dan kecepatannya, Tari Saman telah diakui oleh UNESCO sejak tahun 2011 sebagai Warisan Budaya Takbenda yang Memerlukan Perlindungan Mendesak — sebuah pengakuan dunia bahwa tarian ini sangat berharga dan harus kita jaga bersama."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Dari provinsi manakah Tari Saman berasal?",
            "options": [
              "Riau",
              "Aceh",
              "Sumatera Barat",
              "Sumatera Selatan"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang menunjukkan posisi penari Saman yang benar!",
            "options": [
              {
                "text": "Duduk berjejer rapat",
                "emoji": "🧑‍🤝‍🧑",
                "image": "/assets/budayana/islands/duduk berjejer rapat.png"
              },
              {
                "text": "Berpasangan laki-perempuan",
                "emoji": "👫",
                "image": "/assets/budayana/islands/berpasangan laki-perempuan.png"
              },
              {
                "text": "Berdiri melingkar",
                "emoji": "🕺",
                "image": "/assets/budayana/islands/berdiri melingkar.png"
              },
              {
                "text": "Melompat tinggi",
                "emoji": "🏃",
                "image": "/assets/budayana/islands/melompat tinggi.png"
              }
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang menjadi \"alat musik\" utama dalam mengiringi gerak Tari Saman?",
            "options": [
              "Seruling Bambu",
              "Piano Elektrik",
              "Tepukan tangan, dada, dan paha",
              "Gitar dan Bass"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang terjadi jika salah satu penari Saman tidak kompak atau salah melakukan gerakan?",
            "options": [
              "Gerakan tari akan menjadi lebih lambat",
              "Pakaian penari akan mudah lepas",
              "Irama musik pengiring akan terganggu/rusak",
              "Penonton akan ikut menari"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Pada tahun berapa UNESCO secara resmi mengakui Tari Saman sebagai Warisan Budaya Takbenda yang perlu dilindungi?",
            "options": [
              "2008",
              "2010",
              "2011",
              "2015"
            ],
            "correctIndex": 2,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian2 sumatra.png",
          "text": "Mengapa Tari Saman tidak menggunakan alat musik seperti musik band modern? Dalam tradisi Aceh, suara tepukan tangan dan dada berfungsi sebagai pengatur tempo sekaligus musik pengiring. Kunci keindahannya terletak pada konsentrasi dan kekompakan tim; jika satu saja penari salah bergerak, maka irama musiknya akan rusak.\n\nTarian ini dipimpin oleh seorang Syeikh yang bertugas memimpin nyanyian dan memberikan instruksi perubahan gerakan. Setiap gerakan memiliki arti: tepukan dada melambangkan semangat dan keberanian, sedangkan tepukan tangan mengatur kecepatan. Temponya pun sangat unik, dimulai dari lambat, lalu sedang, cepat, hingga sangat cepat di bagian puncak. Selain indah, tarian ini melambangkan pendidikan, keagamaan, dan sopan santun masyarakat Aceh."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan tempo (kecepatan) gerakan Tari Saman dari awal hingga akhir!",
            "draggables": [
              {
                "id": "d2",
                "text": "Sedang",
                "color": "#dbe0fd"
              },
              {
                "id": "d1",
                "text": "Lambat (Pembukaan)",
                "color": "#FFF3B0"
              },
              {
                "id": "d4",
                "text": "Sangat Cepat (Puncak)",
                "color": "#ffd5c0"
              },
              {
                "id": "d3",
                "text": "Cepat",
                "color": "#ffb2d8"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin menjadi seorang penari Saman yang baik, kemampuan apa yang paling utama harus kamu latih?",
            "options": [
              "Kelenturan jari tangan",
              "Konsentrasi dan kekompakan tim",
              "Kemampuan melompat tinggi",
              "Kekuatan berlari jauh"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa peran seorang \"Syeikh\" sangat penting dalam pementasan Tari Saman?",
            "options": [
              "Untuk memimpin nyanyian dan mengatur perubahan gerakan",
              "Untuk menyiapkan pakaian para penari",
              "Sebagai penari cadangan jika ada yang sakit",
              "Untuk mengumpulkan tiket dari penonton"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan gerakan tubuh dengan fungsinya dalam Saman!",
            "draggables": [
              {
                "id": "m2",
                "text": "Tepukan Tangan",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/tepukan tangan.png"
              },
              {
                "id": "m1",
                "text": "Tepukan Dada",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/tepukan dada.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Menciptakan bunyi kuat yang melambangkan semangat dan keberanian"
              },
              {
                "id": "z2",
                "label": "Memberikan irama yang mengatur kecepatan dan kekompakan gerakan"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian3 sumatra.png",
          "text": "Zaman sekarang, banyak Tari Saman ditampilkan dengan tambahan musik elektronik atau drum elektrik agar terdengar lebih modern dan 'seru'. Namun, muncul kekhawatiran bahwa suara asli tepukan tubuh yang menjadi ciri khas utama Saman akan tertutup oleh musik keras tersebut, sehingga identitas aslinya bisa hilang. \n\n Selain itu, ada pendapat bahwa Tari Saman harus terus dipelajari oleh banyak orang, bukan hanya suku Gayo saja, agar budaya Indonesia semakin dikenal luas. Hal ini memicu diskusi: apakah Tari Saman harus tetap menggunakan suara tubuh asli tanpa musik tambahan, atau boleh ditambahkan musik modern agar anak muda lebih tertarik? Kita harus bijak menjaga keaslian gerak dan bunyi ini agar tetap lestari."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika Tari Saman diiringi dengan alat musik drum elektrik agar terdengar lebih modern?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena drum elektrik jauh lebih murah daripada kostum tari"
              },
              {
                "id": "r2",
                "text": "B. Karena akan menghilangkan suara asli tepukan tubuh yang menjadi keunikan dunia"
              },
              {
                "id": "r3",
                "text": "C. Supaya penari tidak perlu lagi menepuk dada terlalu keras"
              },
              {
                "id": "r1",
                "text": "D. Agar pertunjukan terlihat lebih keren di depan penonton luar negeri"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah Tari Saman boleh dipelajari oleh orang yang bukan berasal dari suku Gayo atau Aceh?",
            "opinions": [
              {
                "id": "op1",
                "text": "Boleh"
              },
              {
                "id": "op2",
                "text": "Kurang Tepat"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar budaya Indonesia semakin dikenal dan dilestarikan oleh banyak orang"
              },
              {
                "id": "r4",
                "text": "B. Karena gerakan Tari Saman adalah milik eksklusif suku Gayo dan tidak boleh diajarkan kepada orang luar"
              },
              {
                "id": "r2",
                "text": "C. Supaya orang lain bisa meniru gerakannya tanpa seizin suku Gayo"
              },
              {
                "id": "r3",
                "text": "D. Agar tarian tersebut bisa diubah-ubah gerakannya sesuka hati"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r4"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan untuk menjaga kelestarian Tari Saman!",
            "draggables": [
              {
                "id": "w6",
                "text": "budaya Indonesia",
                "color": "#e3baf4ff"
              },
              {
                "id": "w3",
                "text": "Tari Saman",
                "color": "#99AAEF"
              },
              {
                "id": "w2",
                "text": "lestarikan",
                "color": "#f6bad3ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w4",
                "text": "sebagai",
                "color": "#a5ec93ff"
              },
              {
                "id": "w5",
                "text": "kebanggaan",
                "color": "#FFC7B1"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  },
  "kalimantan": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/level1 kalimantan.png",
          "text": "Di pedalaman Kalimantan, terdapat rumah adat yang sangat panjang bernama Rumah Betang. Sesuai namanya, rumah ini bisa memiliki panjang hingga 150 meter dan biasanya dihuni oleh 10 hingga 15 keluarga secara bersama-sama. Rumah Betang dibangun tinggi di atas tanah menggunakan kayu ulin yang sangat kuat. Untuk masuk ke dalam rumah, warga harus menaiki sebuah tangga kayu yang unik bernama Hejot. Kehidupan di Rumah Betang menunjukkan betapa eratnya rasa persaudaraan masyarakat Dayak."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama rumah adat dari Kalimantan yang dikenal karena ukurannya yang sangat panjang?",
            "options": [
              "Rumah Joglo",
              "Rumah Honai",
              "Rumah Betang",
              "Rumah Tongkonan"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar \"Hejot\" atau tangga kayu untuk masuk ke Rumah Betang yang benar!",
            "options": [
              {
                "text": "Tangga Besi",
                "emoji": "🪜",
                "image": "/assets/budayana/islands/tangga besi.png"
              },
              {
                "text": "Batang Kayu Bertakik",
                "emoji": "🪵",
                "image": "/assets/budayana/islands/batang kayu bertakik.png"
              },
              {
                "text": "Eskalator",
                "emoji": "🔼",
                "image": "/assets/budayana/islands/eskalator.png"
              },
              {
                "text": "Lift Kayu",
                "emoji": "🛗",
                "image": "/assets/budayana/islands/lift kayu.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Jenis kayu apa yang sangat kuat dan sering digunakan sebagai tiang utama Rumah Betang?",
            "options": [
              "Kayu Ulin",
              "Kayu Pinus",
              "Kayu Sengon",
              "Kayu Karet"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Rumah Betang dibangun sangat tinggi (3-5 meter) di atas tanah?",
            "options": [
              "Agar bisa melihat pemandangan dari ketinggian",
              "Supaya lebih dekat dengan sinar matahari",
              "Melindungi diri dari banjir dan hewan buas",
              "Agar jemuran pakaian lebih cepat kering"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, apa nilai utama yang ditunjukkan dari cara hidup masyarakat di Rumah Betang?",
            "options": [
              "Keinginan untuk menjadi kaya",
              "Rasa persaudaraan dan gotong royong",
              "Persaingan antar keluarga",
              "Kemandirian masing-masing orang"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/level2 kalimantan.png",
          "text": "Mengapa Rumah Betang dibuat sangat panjang dan tinggi? Dahulu, tinggi rumah yang mencapai 3 hingga 5 meter bertujuan untuk melindungi warga dari banjir dan serangan musuh atau hewan buas. Bahkan pada malam hari, tangga Hejot akan ditarik ke atas agar rumah menjadi lebih aman dari gangguan luar. \n\n Di dalam rumah yang panjang ini terdapat pembagian ruangan yang adil. Bagian depan digunakan sebagai ruang bersama untuk rapat dan upacara adat, sementara bagian belakang dibagi menjadi kamar-kamar untuk setiap keluarga. Di sini, semua masalah diselesaikan dengan cara musyawarah, sehingga tercipta suasana yang damai."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan posisi bagian Rumah Betang dari bawah ke atas!",
            "draggables": [
              {
                "id": "d1",
                "text": "Tiang Kayu Ulin",
                "color": "#FFF3B0"
              },
              {
                "id": "d4",
                "text": "Atap Tinggi",
                "color": "#ffd5c0"
              },
              {
                "id": "d2",
                "text": "Lantai Kayu",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Ruang Kamar",
                "color": "#ffb2d8"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Posisi 1"
              },
              {
                "id": "z2",
                "label": "Posisi 2"
              },
              {
                "id": "z3",
                "label": "Posisi 3"
              },
              {
                "id": "z4",
                "label": "Posisi 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika ada masalah di antara dua keluarga di Rumah Betang, di bagian manakah sebaiknya masalah itu diselesaikan?",
            "options": [
              "Di dalam kamar pribadi masing-masing",
              "Di hutan belakang rumah",
              "Di ruang bersama bagian depan (Serambi)",
              "Di bawah tiang rumah"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang akan terjadi jika tangga \"Hejot\" ditarik ke atas pada malam hari sesuai tradisi lama?",
            "options": [
              "Tamu yang datang terlambat bisa masuk dengan lebih mudah",
              "Udara dingin akan lebih mudah masuk",
              "Rumah menjadi lebih aman dari gangguan luar",
              "Rumah akan menjadi lebih ringan"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian rumah dengan fungsinya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Kamar Belakang",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/kamar belakang.png"
              },
              {
                "id": "m1",
                "text": "Ruang Depan",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/ruang depan.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tempat Musyawarah Bersama"
              },
              {
                "id": "z2",
                "label": "Tempat Tinggal Keluarga"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/level3 kalimantan.png",
          "text": "Kini, banyak keluarga yang mulai meninggalkan Rumah Betang dan membangun rumah pribadi yang terpisah-pisah. Hal ini dikarenakan sulitnya merawat bangunan kayu yang sangat luas dan risiko kebakaran yang tinggi. \n\n Namun, jika Rumah Betang ditinggalkan, semangat gotong royong dan kebersamaan antar keluarga dikhawatirkan akan memudar. Apakah kita harus mempertahankan tradisi tinggal bersama di satu rumah panjang, atau cukup menyimpan Rumah Betang sebagai simbol budaya saja? Ini adalah tantangan besar bagi pelestarian budaya Dayak."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu tinggal di Rumah Betang dan melihat salah satu bagian kayu mulai rapuh, tindakan apa yang paling tepat?",
            "opinions": [
              {
                "id": "op1",
                "text": "Lapor Ketua Adat"
              },
              {
                "id": "op2",
                "text": "Perbaiki Sendiri"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar bisa dikerjakan bersama-sama (gotong royong) oleh semua warga"
              },
              {
                "id": "r4",
                "text": "B. Agar kayu yang rusak bisa dijual ke tempat lain"
              },
              {
                "id": "r3",
                "text": "C. Biar orang lain tidak tahu ada kerusakan di rumah"
              },
              {
                "id": "r2",
                "text": "D. Supaya tidak merepotkan orang lain dan cepat selesai"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika Rumah Betang diubah menjadi penginapan turis agar tetap terawat?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar ada biaya untuk perbaikan dan budaya dikenal dunia"
              },
              {
                "id": "r2",
                "text": "B. Karena rumah adat harusnya hanya untuk tempat tinggal warga asli"
              },
              {
                "id": "r3",
                "text": "C. Karena warga asli tidak boleh lagi menjadikannya tempat tinggal jika sudah jadi penginapan"
              },
              {
                "id": "r4",
                "text": "D. Agar biaya listrik dan air di Rumah Betang bisa ditanggung oleh wisatawan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan untuk menjaga kerukunan di rumah panjang!",
            "draggables": [
              {
                "id": "w4",
                "text": "bergotong royong",
                "color": "#a5ec93ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w6",
                "text": "Rumah Betang",
                "color": "#e3baf4ff"
              },
              {
                "id": "w3",
                "text": "dan",
                "color": "#99AAEF"
              },
              {
                "id": "w2",
                "text": "hidup rukun",
                "color": "#f6bad3ff"
              },
              {
                "id": "w5",
                "text": "di",
                "color": "#FFC7B1"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan1 kalimantan.png",
          "text": "Pernahkah kamu mencoba sup ayam yang sangat harum dari Kalimantan Selatan? Namanya adalah Soto Banjar. Bahan utamanya adalah daging ayam yang disuwir-suwir. Ciri khas soto ini adalah aroma rempahnya yang sangat kuat karena menggunakan Kayu Manis dan cengkih. \n\nBerbeda dengan soto lainnya yang menggunakan nasi, Soto Banjar asli disajikan bersama potongan Ketupat dan pelengkap seperti perkedel kentang, soun (bihun), serta telur rebus."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa bahan protein utama yang digunakan dalam masakan Soto Banjar?",
            "options": [
              "Daging Sapi",
              "Daging Ayam",
              "Ikan Haruan",
              "Daging Kambing"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar rempah yang memberikan aroma harum yang khas pada Soto Banjar!",
            "options": [
              {
                "text": "Cabai Merah",
                "emoji": "🌶️",
                "image": "/assets/budayana/islands/cabai merah.png"
              },
              {
                "text": "Batang Kayu Manis",
                "emoji": "🪵",
                "image": "/assets/budayana/islands/batang kayu manis.png"
              },
              {
                "text": "Biji Jagung",
                "emoji": "🌽",
                "image": "/assets/budayana/islands/biji jagung.png"
              },
              {
                "text": "Daun Bayam",
                "emoji": "🥬",
                "image": "/assets/budayana/islands/daun bayam.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa pengganti nasi yang biasanya disajikan dalam satu mangkuk Soto Banjar?",
            "options": [
              "Roti Tawar",
              "Papeda",
              "Ketupat",
              "Singkong Rebus"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa kuah Soto Banjar memiliki rasa yang gurih dan sedikit kental meskipun tanpa santan?",
            "options": [
              "Karena dicampur dengan tepung terigu yang banyak",
              "Karena dicampur dengan sedikit susu cair atau kuning telur",
              "Karena air rebusannya diambil dari air kelapa",
              "Karena dimasak bersama dengan kulit pisang"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, Soto Banjar biasanya disajikan bersama pelengkap berupa...",
            "options": [
              "Kerupuk Udang dan Tempe",
              "Perkedel Kentang dan Soun (Bihun)",
              "Tahu Goreng dan Sambal Kacang",
              "Potongan Nanas dan Timun"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 kalimantan.png",
          "text": "Mengapa kuah Soto Banjar terasa sangat gurih dan harum? Hal ini karena dalam resep tradisionalnya, kuah soto direbus bersama rempah Kayu Manis dan Cengkih agar menghasilkan aroma yang sangat wangi. Selain itu, kuahnya dicampur dengan sedikit susu cair atau kuning telur rebus yang dihaluskan agar terasa kental tanpa santan.\n\nCara menyajikannya pun ada urutannya: pertama, masukkan potongan Ketupat ke dalam mangkuk, lalu beri suwiran daging Ayam di atasnya. Setelah itu, siram dengan kuah panas yang kaya rempah, dan terakhir beri perasan Jeruk Nipis untuk menghilangkan bau amis ayam dan menambah kesegaran rasa. Rempah kayu manis di dalamnya bukan hanya untuk pengharum, tetapi juga membantu menghangatkan tubuh."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan langkah penyajian Soto Banjar di dalam mangkuk!",
            "draggables": [
              {
                "id": "d1",
                "text": "Potongan Ketupat",
                "color": "#FFF3B0"
              },
              {
                "id": "d4",
                "text": "Perasan Jeruk Nipis",
                "color": "#ffd5c0"
              },
              {
                "id": "d2",
                "text": "Suwiran Ayam",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Siraman Kuah Panas",
                "color": "#ffb2d8"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Langkah 1"
              },
              {
                "id": "z2",
                "label": "Langkah 2"
              },
              {
                "id": "z3",
                "label": "Langkah 3"
              },
              {
                "id": "z4",
                "label": "Langkah 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membuat Soto Banjar yang aromanya sangat wangi, rempah apa yang wajib kamu masukkan ke dalam air rebusannya?",
            "options": [
              "Terasi dan Petis",
              "Kunyit dan Kencur",
              "Kayu Manis dan Cengkih",
              "Asam Jawa dan Gula Merah"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa fungsi utama dari perasan jeruk nipis yang ditambahkan ke dalam Soto Banjar?",
            "options": [
              "Agar warna kuah berubah menjadi merah",
              "Menghilangkan bau amis ayam dan menambah kesegaran rasa",
              "Supaya potongan ketupat menjadi lebih keras",
              "Agar kuah soto menjadi lebih kental seperti lem"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bahan Soto Banjar dengan ciri khasnya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Kuah Soto",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/kuah_soto.png"
              },
              {
                "id": "m2",
                "text": "Rempah",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/rempah.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Gurih karena campuran susu/telur"
              },
              {
                "id": "z2",
                "label": "Wangi karena Kayu Manis"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan3 kalimantan.png",
          "text": "Saat ini, Soto Banjar mulai dijual di berbagai daerah dengan modifikasi, seperti mengganti ketupat dengan nasi atau menghilangkan perkedel kentangnya agar lebih murah. Muncul perdebatan: apakah Soto Banjar tanpa ketupat dan kayu manis masih bisa disebut Soto Banjar yang asli? Kita harus mengenal bahan-bahan aslinya agar keunikan rasa kuliner dari Suku Banjar ini tetap terjaga kemurniannya hingga masa depan."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu membuka warung soto, setujukah kamu mengganti ketupat dengan nasi putih biasa agar lebih praktis?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar lebih mudah disukai oleh pelanggan yang terbiasa makan nasi"
              },
              {
                "id": "r3",
                "text": "B. Supaya biaya produksi menjadi jauh lebih mahal"
              },
              {
                "id": "r4",
                "text": "C. Agar porsi makanan terlihat lebih kecil"
              },
              {
                "id": "r2",
                "text": "D. Karena Soto Banjar asli identik dengan ketupat, menggantinya akan merubah ciri khasnya"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Menurutmu, apakah penggunaan susu dalam kuah Soto Banjar adalah inovasi yang baik?",
            "opinions": [
              {
                "id": "op1",
                "text": "Baik"
              },
              {
                "id": "op2",
                "text": "Kurang Baik"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Ya, karena memberikan rasa gurih yang unik tanpa lemak dari santan"
              },
              {
                "id": "r2",
                "text": "B. Tidak, karena rasa susu akan merusak rasa asli kaldu ayam"
              },
              {
                "id": "r3",
                "text": "C. Ya, supaya kuah soto bisa lebih kental seperti sup krim modern"
              },
              {
                "id": "r4",
                "text": "D. Tidak, karena susu sulit didapatkan di pasar tradisional"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk mencicipi kuliner khas Kalimantan!",
            "draggables": [
              {
                "id": "w5",
                "text": "yang",
                "color": "#FFC7B1"
              },
              {
                "id": "w2",
                "text": "cicipi",
                "color": "#f6bad3ff"
              },
              {
                "id": "w4",
                "text": "Soto Banjar",
                "color": "#a5ec93ff"
              },
              {
                "id": "w6",
                "text": "kaya rempah",
                "color": "#e3baf4ff"
              },
              {
                "id": "w3",
                "text": "kelezatan",
                "color": "#99AAEF"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 kalimantan.png",
          "text": "Pernahkah kamu mendengar suara petikan dawai yang sangat merdu dari sebuah kayu yang diukir indah? Alat musik itu bernama Sape, alat musik petik tradisional dari Suku Dayak Kenyah, Kalimantan Timur. Sape dimainkan dengan cara dipetik, mirip dengan gitar namun memiliki bentuk yang lebih lebar dan penuh dengan ukiran khas. \n\nMusik Sape biasanya digunakan untuk mengiringi Tari Enggang. Dalam tarian ini, para penari mengenakan bulu burung Enggang di tangan mereka dan bergerak melambai-lambai, meniru gerakan burung yang sedang terbang di atas hutan Kalimantan."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama alat musik petik tradisional dari Kalimantan yang terbuat dari kayu dan penuh ukiran?",
            "options": [
              "Tifa",
              "Sape",
              "Gamelan",
              "Angklung"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar hewan yang gerakannya ditiru dalam tarian khas suku Dayak ini!",
            "options": [
              {
                "text": "Harimau",
                "emoji": "🐅",
                "image": "/assets/budayana/islands/harimau 2.png"
              },
              {
                "text": "Burung Enggang",
                "emoji": "🦤",
                "image": "/assets/budayana/islands/burung enggang.png"
              },
              {
                "text": "Gajah",
                "emoji": "🐘",
                "image": "/assets/budayana/islands/gajah.png"
              },
              {
                "text": "Kuda",
                "emoji": "🐎",
                "image": "/assets/budayana/islands/kuda.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Bagaimana cara memainkan alat musik Sape agar menghasilkan nada yang merdu?",
            "options": [
              "Dipukul dengan kayu",
              "Ditiup lubangnya",
              "Dipetik dawainya",
              "Digesek senarnya"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa penari Tari Enggang menggerakkan tangannya melambai naik dan turun?",
            "options": [
              "Agar penonton tidak mendekat ke arah penari",
              "Meniru gerakan kepakan sayap burung yang sedang terbang",
              "Untuk mengusir nyamuk yang ada di panggung",
              "Karena tangan mereka merasa pegal"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, burung Enggang bagi masyarakat Dayak merupakan simbol dari...",
            "options": [
              "Kekayaan dan Uang",
              "Keberanian dan Kesetiaan",
              "Kecepatan dan Kekuatan",
              "Kemandirian dan Kesendirian"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian2 kalimantan.png",
          "text": "Persiapan tari ini dimulai dengan menyetel dawai Sape, memakai kostum, mengikat bulu burung Enggang di tangan, baru kemudian menari. Bagi masyarakat Dayak, burung Enggang adalah simbol keberanian dan kesetiaan. Gerakan tangan yang naik turun melambangkan hubungan manusia dengan langit dan bumi, sementara musik Sape berfungsi sebagai penghantar perasaan. \n\n Dahulu, Sape digunakan mengiringi ritual penyembuhan (Balian) untuk berkomunikasi dengan roh leluhur. Keunikan tari ini ada pada koordinasinya; jika Sape dimainkan dengan tempo pelan dan sedih, penari akan bergerak melambai sangat halus dan ringan seolah sedang melayang di udara."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan persiapan sebelum pementasan Tari Enggang!",
            "draggables": [
              {
                "id": "d1",
                "text": "Setel Dawai Sape",
                "color": "#FFF3B0"
              },
              {
                "id": "d2",
                "text": "Pakai Kostum Adat Lengkap",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Ikat Bulu Enggang di Kedua Tangan",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Mulai Menari",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika suara Sape dimainkan dengan tempo yang sangat pelan dan sedih, gerakan apa yang paling cocok dilakukan oleh penari Enggang?",
            "options": [
              "Melompat-lompat dengan sangat cepat",
              "Bergerak melambai dengan sangat halus dan pelan",
              "Berhenti menari dan duduk di lantai",
              "Berteriak mengikuti irama musik"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa penggunaan bulu burung Enggang asli sekarang mulai diganti dengan bulu buatan (sintetis)?",
            "options": [
              "Karena bulu asli tidak bisa dicuci jika kotor",
              "Agar warna kostum menjadi lebih mengkilap",
              "Untuk melindungi burung Enggang agar tidak punah di hutan",
              "Karena bulu buatan jauh lebih ringan daripada bulu asli"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan elemen seni dengan maknanya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Gerakan Naik Turun",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/gerakan naik turun.png"
              },
              {
                "id": "m1",
                "text": "Suara Sape",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/suara sape.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Penghantar perasaan dan ketenangan"
              },
              {
                "id": "z2",
                "label": "Hubungan manusia dengan langit dan bumi"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian3 kalimantan.png",
          "text": "Saat ini, kelestarian alam menjadi perhatian utama masyarakat Dayak. Penggunaan bulu burung Enggang asli kini mulai dilarang dan diganti dengan bulu buatan (sintetis) untuk melindungi burung tersebut agar tidak punah di hutan. Selain itu, muncul tantangan baru dengan adanya Sape elektrik yang suaranya lebih keras untuk panggung besar.\n\nHal ini memicu diskusi: apakah penggunaan bulu buatan dan Sape elektrik mengurangi nilai budaya kita? Beberapa orang tua khawatir suara elektrik akan menghilangkan kesakralan dan kelembutan suara kayu aslinya. Kita harus kreatif melestarikan seni ini, seperti mempertimbangkan apakah Sape boleh dimainkan dengan musik modern agar lebih dikenal anak muda, tanpa merusak makna aslinya."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika alat musik Sape dimainkan dengan aliran musik modern seperti Rock atau DJ?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar musik Sape lebih dikenal oleh anak muda di seluruh dunia"
              },
              {
                "id": "r2",
                "text": "B. Karena akan menghilangkan ketenangan dan makna asli dari suara Sape"
              },
              {
                "id": "r3",
                "text": "C. Supaya orang tidak lagi menganggap Sape sebagai alat musik kuno"
              },
              {
                "id": "r4",
                "text": "D. Karena dengan musik modern, Sape tidak perlu diukir indah lagi"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Jika kamu seorang penari, apakah kamu tetap merasa bangga menari Enggang menggunakan bulu buatan daripada bulu asli?",
            "opinions": [
              {
                "id": "op1",
                "text": "Tetap Bangga"
              },
              {
                "id": "op2",
                "text": "Kurang Bangga"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Karena melestarikan budaya tidak harus menyakiti hewan di alam"
              },
              {
                "id": "r2",
                "text": "B. Karena keindahan tarian hanya bisa terlihat jika menggunakan bahan yang asli"
              },
              {
                "id": "r3",
                "text": "C. Supaya biaya membuat kostum menjadi lebih murah"
              },
              {
                "id": "r4",
                "text": "D. Agar turis tidak protes saat melihat pertunjukan kita"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan untuk melestarikan seni budaya Kalimantan!",
            "draggables": [
              {
                "id": "w3",
                "text": "alunan Sape",
                "color": "#99AAEF"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w6",
                "text": "warisan Dayak",
                "color": "#e3baf4ff"
              },
              {
                "id": "w5",
                "text": "Tari Enggang",
                "color": "#FFC7B1"
              },
              {
                "id": "w4",
                "text": "dan",
                "color": "#a5ec93ff"
              },
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  },
  "sulawesi": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah1 sulawesi.png",
          "text": "Di Sulawesi Selatan, terdapat rumah adat yang sangat megah bernama Rumah Tongkonan. Rumah ini memiliki atap yang melengkung indah menyerupai bentuk perahu atau tanduk kerbau. Tongkonan dibangun sebagai rumah panggung dari kayu yang kuat. \n\n Hal yang paling unik adalah bagian depan rumah yang dihiasi dengan deretan Tanduk Kerbau. Semakin banyak tanduk kerbau yang dipasang, menunjukkan semakin tinggi kedudukan atau status sosial keluarga yang tinggal di sana."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama rumah adat dari Sulawesi Selatan yang atapnya menyerupai bentuk perahu?",
            "options": [
              "Rumah Gadang",
              "Rumah Honai",
              "Rumah Joglo",
              "Rumah Tongkonan"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar hiasan yang selalu ada di bagian depan Rumah Tongkonan!",
            "options": [
              {
                "text": "Ukiran Bunga",
                "emoji": "🌸",
                "image": "/assets/budayana/islands/ukiran bunga.png"
              },
              {
                "text": "Anyaman Bambu",
                "emoji": "🎋",
                "image": "/assets/budayana/islands/anyaman bambu.png"
              },
              {
                "text": "Deretan Tanduk Kerbau",
                "emoji": "🐂",
                "image": "/assets/budayana/islands/deretan tanduk kerbau.png"
              },
              {
                "text": "Patung Burung",
                "emoji": "🐦",
                "image": "/assets/budayana/islands/patung burung.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Ke arah manakah Rumah Tongkonan selalu dibangun menghadap?",
            "options": [
              "Timur",
              "Selatan",
              "Utara",
              "Barat"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang ditunjukkan oleh banyaknya jumlah tanduk kerbau di depan sebuah Rumah Tongkonan?",
            "options": [
              "Usia bangunan rumah tersebut",
              "Luasnya lahan sawah yang dimiliki",
              "Jumlah anggota keluarga yang tinggal",
              "Status sosial atau kedudukan keluarga"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa kegunaan utama dari kolong rumah (bagian bawah) pada Rumah Tongkonan?",
            "options": [
              "Tempat untuk tidur anggota keluarga",
              "Tempat menyambut tamu resmi",
              "Tempat untuk memasak makanan",
              "Tempat ternak atau alat pertanian"
            ],
            "correctIndex": 3,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah2 sulawesi.png",
          "text": "Rumah Tongkonan selalu dibangun menghadap ke arah Utara. Bagi masyarakat Toraja, arah Utara melambangkan asal-usul leluhur dan kehidupan. Di dinding rumah, terdapat ukiran khas bernama Passura' yang memiliki empat warna utama: merah, hitam, kuning, dan putih. Setiap warna memiliki arti tersendiri: merah melambangkan kehidupan, hitam melambangkan kematian, kuning melambangkan berkah dari Tuhan, dan putih melambangkan kemurnian. Ukiran ini tidak hanya hiasan, tapi menceritakan tentang hubungan manusia dengan Tuhan, sesama, dan alam semesta. Selain itu, kolong rumah yang tinggi biasanya digunakan sebagai tempat untuk memelihara hewan ternak atau menyimpan alat pertanian."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan posisi bagian Rumah Tongkonan dari paling bawah hingga paling atas!",
            "draggables": [
              {
                "id": "d1",
                "text": "Kolong Rumah",
                "color": "#FFF3B0"
              },
              {
                "id": "d3",
                "text": "Dinding Ukiran",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Badan Kayu",
                "color": "#dbe0fd"
              },
              {
                "id": "d4",
                "text": "Atap Perahu",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Posisi 1"
              },
              {
                "id": "z2",
                "label": "Posisi 2"
              },
              {
                "id": "z3",
                "label": "Posisi 3"
              },
              {
                "id": "z4",
                "label": "Posisi 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin memberikan warna pada ukiran Passura', warna apa yang tidak termasuk dalam 4 warna utama tradisi Toraja?",
            "options": [
              "Hitam",
              "Kuning",
              "Biru",
              "Merah"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa ukiran di dinding Tongkonan dianggap sangat penting bagi masyarakatnya?",
            "options": [
              "Karena menceritakan hubungan manusia, alam, dan Tuhan",
              "Karena ukiran tersebut berfungsi sebagai pengganti jendela",
              "Supaya rumah terlihat lebih berwarna-warni",
              "Agar dinding kayu tidak mudah dimakan rayap"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan elemen rumah dengan simbolnya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Tanduk Kerbau",
                "image": "/assets/budayana/islands/tanduk kerbau.png",
                "color": "#FFF3B0"
              },
              {
                "id": "m2",
                "text": "Arah Utara",
                "image": "/assets/budayana/islands/arah utara.png",
                "color": "#D4DCFF"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Simbol Kemakmuran/Status"
              },
              {
                "id": "z2",
                "label": "Simbol Kehidupan/Leluhur"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah3 sulawesi.png",
          "text": "Membangun dan merawat Rumah Tongkonan membutuhkan biaya yang sangat besar dan waktu yang lama karena ukirannya harus dibuat dengan tangan. Saat ini, banyak generasi muda Toraja yang merantau ke kota dan membangun rumah modern yang lebih sederhana. \n\n Muncul sebuah pemikiran: apakah Rumah Tongkonan harus tetap dibangun dengan banyak tanduk kerbau asli yang mahal, atau boleh diganti dengan hiasan lain yang lebih terjangkau? Kita harus mencari cara agar tradisi Tongkonan tetap terjaga di tengah dunia yang terus berubah."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika biaya membeli tanduk kerbau asli sangat mahal, setujukah kamu jika tanduk tersebut diganti dengan tiruan dari kayu?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r3",
                "text": "A. Agar nenek moyang kita tidak merasa tersinggung dengan perubahan ini"
              },
              {
                "id": "r2",
                "text": "B. Keaslian nilai budaya akan hilang jika diganti barang tiruan"
              },
              {
                "id": "r4",
                "text": "C. Karena tanduk kerbau asli sudah tidak dijual di mana pun lagi"
              },
              {
                "id": "r1",
                "text": "D. Agar tradisi tetap terlihat meski dengan biaya lebih murah"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah Rumah Tongkonan tetap dipertahankan sebagai tempat tinggal, atau cukup dijadikan museum saja?",
            "opinions": [
              {
                "id": "op1",
                "text": "Tempat Tinggal"
              },
              {
                "id": "op2",
                "text": "Museum Saja"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar budaya tetap hidup dan dirasakan oleh keluarga setiap hari"
              },
              {
                "id": "r4",
                "text": "B. Karena tinggal di rumah panggung sudah tidak zaman lagi"
              },
              {
                "id": "r3",
                "text": "C. Agar anak muda tidak perlu repot merawat rumah yang besar"
              },
              {
                "id": "r2",
                "text": "D. Supaya bangunan lebih terawat dan terlindungi dari kerusakan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk mempelajari makna di balik ukiran Toraja!",
            "draggables": [
              {
                "id": "w5",
                "text": "Rumah Tongkonan",
                "color": "#FFC7B1"
              },
              {
                "id": "w6",
                "text": "Sulawesi",
                "color": "#e3baf4ff"
              },
              {
                "id": "w3",
                "text": "makna suci",
                "color": "#99AAEF"
              },
              {
                "id": "w4",
                "text": "ukiran",
                "color": "#a5ec93ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w2",
                "text": "pahami",
                "color": "#f6bad3ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makan1 sulawesi.png",
          "text": "Pernahkah kamu mendengar tentang sup daging yang sangat gurih dari Sulawesi Selatan? Namanya adalah Coto Makassar. Makanan ini berbahan dasar daging sapi dan jeroan (bagian dalam sapi seperti hati dan limpa) yang direbus dalam waktu lama. Kuah Coto Makassar terlihat kental dan berwarna kecokelatan karena dicampur dengan Kacang Tanah yang telah disangrai dan dihaluskan. Berbeda dengan sup lainnya, Coto Makassar tidak dimakan bersama nasi, melainkan bersama Ketupat yang dibungkus daun pandan atau daun kelapa."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa bahan utama yang digunakan dalam masakan Coto Makassar?",
            "options": [
              "Ikan Laut",
              "Daging Sapi",
              "Daging Ayam",
              "Daging Kambing"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar bahan tambahan yang membuat kuah Coto Makassar menjadi kental dan gurih!",
            "options": [
              {
                "text": "Kacang Tanah Halus",
                "emoji": "🥜",
                "image": "/assets/budayana/islands/kacang tanah halus.png"
              },
              {
                "text": "Potongan Roti",
                "emoji": "🍞",
                "image": "/assets/budayana/islands/potongan roti.png"
              },
              {
                "text": "Tepung Terigu",
                "emoji": "🌾",
                "image": "/assets/budayana/islands/tepung terigu.png"
              },
              {
                "text": "Parutan Keju",
                "emoji": "🧀",
                "image": "/assets/budayana/islands/parutan keju.png"
              }
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa nama pengganti nasi yang biasanya disajikan bersama Coto Makassar?",
            "options": [
              "Roti Tawar",
              "Ketupat",
              "Papeda",
              "Singkong Rebus"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, mengapa kuah Coto Makassar berwarna kecokelatan dan kental?",
            "options": [
              "Karena dicampur dengan cokelat bubuk",
              "Karena menggunakan kecap manis yang sangat banyak",
              "Karena campuran kacang tanah sangrai yang dihaluskan",
              "Karena kuahnya dibiarkan hangus saat dimasak"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Ke manakah Coto Makassar biasanya disajikan pada zaman dahulu menurut sejarahnya?",
            "options": [
              "Hanya untuk makanan di rumah sendiri",
              "Disajikan di istana kerajaan untuk tamu kehormatan",
              "Untuk dijual di pasar-pasar malam",
              "Untuk bekal para pelaut saat pergi jauh"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makan2 sulawesi.png",
          "text": "Mengapa kuah Coto Makassar memiliki rasa yang sangat kaya dan wangi? Rahasianya ada pada campuran rempah yang disebut Rampah Patang Pulo atau 'Empat Puluh Rempah'. Artinya, kuahnya menggunakan sekitar 40 jenis rempah-rempah asli Indonesia seperti serai, lengkuas, jahe, dan ketumbar. Banyaknya rempah ini bukan hanya untuk rasa, tetapi juga berfungsi sebagai obat tradisional untuk kesehatan tubuh. Dahulu, Coto Makassar adalah makanan istimewa yang disajikan di istana kerajaan untuk menjamu tamu-tamu kehormatan."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan proses pembuatan Coto Makassar yang benar!",
            "draggables": [
              {
                "id": "d4",
                "text": "Sajikan dengan Ketupat",
                "color": "#ffd5c0"
              },
              {
                "id": "d1",
                "text": "Rebus Daging",
                "color": "#FFF3B0"
              },
              {
                "id": "d3",
                "text": "Masukkan Kacang Tanah",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Haluskan 40 Rempah",
                "color": "#dbe0fd"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membuat Coto Makassar yang wangi dan sehat sesuai tradisi, bumbu manakah yang wajib ada dalam campuran \"Rampah Patang Pulo'\"?",
            "options": [
              "Serai, Lengkuas, dan Jahe",
              "Saus Tomat dan Sambal Botol",
              "Cuka dan Air Kelapa",
              "Gula Pasir dan Garam saja"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa manfaat dari penggunaan 40 jenis rempah dalam kuah Coto menurut teks?",
            "options": [
              "Supaya kuah Coto tidak mudah tumpah",
              "Agar daging sapi menjadi berwarna merah",
              "Agar ketupat menjadi lebih cepat matang",
              "Memberikan rasa kaya sekaligus sebagai obat bagi tubuh"
            ],
            "correctIndex": 3,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan elemen Coto dengan tujuannya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Ketupat Daun Pandan",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/ketupat.png"
              },
              {
                "id": "m1",
                "text": "Rampah Patang Pulo",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/rempah ampah.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Memberikan Aroma dan Kesehatan"
              },
              {
                "id": "z2",
                "label": "Teman Makan Pengganti Nasi"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makan3 sulawesi.png",
          "text": "Saat ini, Coto Makassar sudah banyak dijual di luar Sulawesi, bahkan hingga ke luar negeri. Namun, karena bahan rempahnya yang mencapai 40 jenis, banyak penjual yang mulai mengurangi jumlah bumbu agar lebih praktis dan murah. \n\n Tantangannya adalah: apakah Coto Makassar yang bumbunya tidak lengkap tetap bisa disebut Coto asli? Jika kita terus membiarkan resep asli ini hilang, maka kekayaan rasa rempah asli Sulawesi mungkin akan terlupakan oleh generasi masa depan."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu membuka restoran, setujukah kamu mengurangi jumlah rempah Coto agar harga jualnya lebih murah?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Karena akan merusak keaslian rasa dan nilai sejarah 40 bumbu"
              },
              {
                "id": "r4",
                "text": "B. Karena pelanggan tidak akan tahu jika bumbunya dikurangi"
              },
              {
                "id": "r1",
                "text": "C. Agar lebih banyak orang yang mampu membeli Coto Makassar"
              },
              {
                "id": "r3",
                "text": "D. Supaya proses memasak menjadi lebih cepat dan efisien"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Menurutmu, apakah Coto Makassar sebaiknya tetap dimakan dengan ketupat atau boleh diganti dengan nasi biasa?",
            "opinions": [
              {
                "id": "op1",
                "text": "Tetap Ketupat"
              },
              {
                "id": "op2",
                "text": "Boleh Nasi"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Menjaga cara makan tradisional yang sudah ada sejak zaman kerajaan"
              },
              {
                "id": "r2",
                "text": "B. Nasi lebih mudah didapat dan lebih mengenyangkan bagi banyak orang"
              },
              {
                "id": "r4",
                "text": "C. Agar Coto Makassar bisa dimakan lebih cepat saat istirahat sekolah"
              },
              {
                "id": "r3",
                "text": "D. Agar tampilan Coto terlihat lebih modern dan berbeda"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk menjaga keaslian resep nusantara!",
            "draggables": [
              {
                "id": "w5",
                "text": "sebagai",
                "color": "#FFC7B1"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w3",
                "text": "resep asli",
                "color": "#99AAEF"
              },
              {
                "id": "w6",
                "text": "warisan Sulawesi",
                "color": "#e3baf4ff"
              },
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              },
              {
                "id": "w4",
                "text": "Coto Makassar",
                "color": "#a5ec93ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 sulawesi.png",
          "text": "Pernahkah kamu melihat tarian di mana para penarinya membawa kipas dan bergerak dengan sangat lambat? Itu adalah Tari Kipas Pakarena dari Gowa, Sulawesi Selatan. Penarinya adalah perempuan yang mengenakan pakaian adat bernama Baju Bodo. \n\n Keunikan tarian ini adalah gerakannya yang sangat lembut meski musik pengiringnya terdengar sangat keras dan cepat. Penari tidak boleh membuka mata terlalu lebar dan tidak boleh mengangkat kaki terlalu tinggi, karena tarian ini melambangkan kesantunan dan kelembutan perempuan."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa benda utama yang dibawa oleh penari dalam Tari Kipas Pakarena?",
            "options": [
              "Piring",
              "Kipas",
              "Selendang",
              "Payung"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar alat musik pukul yang menjadi pengatur irama utama dalam tarian Sulawesi ini!",
            "options": [
              {
                "text": "Gitar",
                "emoji": "🎸",
                "image": "/assets/budayana/islands/gitar.png"
              },
              {
                "text": "Pianika",
                "emoji": "🎹",
                "image": "/assets/budayana/islands/pianika.png"
              },
              {
                "text": "Ganrang (Gendang)",
                "emoji": "🥁",
                "image": "/assets/budayana/islands/ganrang.png"
              },
              {
                "text": "Biola",
                "emoji": "🎻",
                "image": "/assets/budayana/islands/biola.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa nama pakaian adat yang dikenakan oleh penari perempuan dalam Tari Kipas Pakarena?",
            "options": [
              "Baju Kurung",
              "Kebaya",
              "Ulos",
              "Baju Bodo"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa gerakan kaki para penari Pakarena tidak boleh diangkat terlalu tinggi?",
            "options": [
              "Supaya kipas yang dibawa tidak terjatuh",
              "Karena lantai pertunjukan sangat licin",
              "Melambangkan kesantunan dan kelembutan perempuan",
              "Agar penari tidak merasa cepat lelah"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, gerakan berputar searah jarum jam dalam tarian ini melambangkan...",
            "options": [
              "Perputaran roda kendaraan",
              "Siklus atau perjalanan hidup manusia",
              "Waktu yang berjalan sangat cepat",
              "Arah mata angin yang berbeda-beda"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 sulawesi.png",
          "text": "Mengapa musik pengiring Tari Kipas Pakarena sangat bersemangat sementara penarinya bergerak sangat lambat? Alat musik utamanya adalah Ganrang (gendang) dan Puik-puik (alat musik tiup khas Sulawesi Selatan). Irama gendang yang cepat melambangkan ketegasan dan semangat kaum laki-laki, sedangkan gerakan penari yang lembut melambangkan sifat perempuan yang sabar dan patuh. Setiap gerakan tari, seperti gerakan berputar searah jarum jam, melambangkan siklus hidup manusia yang selalu berputar. Tarian ini mengajarkan kita tentang keseimbangan dalam hidup: bahwa kekuatan dan kelembutan, ketegasan dan kesabaran, harus berjalan bersama secara harmonis."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan jalannya pertunjukan Tari Kipas Pakarena!",
            "draggables": [
              {
                "id": "d1",
                "text": "Duduk Bersimpuh (Awal)",
                "color": "#FFF3B0"
              },
              {
                "id": "d3",
                "text": "Berputar Searah Jarum Jam",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Mengayunkan Kipas Perlahan",
                "color": "#dbe0fd"
              },
              {
                "id": "d4",
                "text": "Duduk Kembali (Akhir)",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika pemain Gendang (Ganrang) memukul dengan irama yang sangat cepat dan keras, apa yang harus dilakukan oleh penari Pakarena?",
            "options": [
              "Berhenti menari dan menunggu musik pelan",
              "Tetap menari dengan gerakan lembut dan lambat",
              "Melemparkan kipas ke arah penonton",
              "Menari dengan gerakan yang sangat cepat juga"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa pesan yang ingin disampaikan dari perbedaan musik yang keras dan tarian yang lembut?",
            "options": [
              "Supaya suara seruling Puin-puin tidak terdengar sumbang",
              "Melambangkan keseimbangan antara ketegasan laki-laki dan kelembutan perempuan",
              "Bahwa pemain musik dan penari tidak bekerja sama",
              "Agar penonton tidak merasa mengantuk saat melihat tarian lambat"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian pertunjukan dengan maknanya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Gerakan Tari Lambat",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/tari lambat.png"
              },
              {
                "id": "m1",
                "text": "Irama Gendang Cepat",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/irama gendang.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Simbol Ketegasan Laki-laki"
              },
              {
                "id": "z2",
                "label": "Simbol Kesabaran Perempuan"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 sulawesi.png",
          "text": "Saat ini, Tari Kipas Pakarena sering ditampilkan untuk menyambut turis. Namun, karena gerakannya yang sangat lambat, beberapa orang merasa tarian ini membosankan dan ingin mempercepat gerakannya agar terlihat lebih modern. \n\n Muncul sebuah diskusi: apakah kita boleh mengubah kecepatan gerakan Tari Pakarena agar lebih menarik, atau harus tetap lambat sesuai filosofi aslinya? Sebagai penjaga budaya, kita harus memahami bahwa keindahan tarian ini justru terletak pada kesabaran dan kelembutannya."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika gerakan Tari Pakarena dibuat menjadi cepat (enerjik) agar lebih disukai anak muda zaman sekarang?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r3",
                "text": "A. Supaya penari bisa membakar lebih banyak kalori saat berolahraga tari"
              },
              {
                "id": "r2",
                "text": "B. Karena akan menghilangkan filosofi kelembutan dan kesantunan yang menjadi jiwa tarian ini"
              },
              {
                "id": "r4",
                "text": "C. Karena kipas akan lebih awet jika digerakkan dengan cepat"
              },
              {
                "id": "r1",
                "text": "D. Agar tarian tradisional Sulawesi terlihat lebih seru dan tidak membosankan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah alat musik tiup \"Puin-puin\" diganti dengan rekaman musik dari handphone saat pertunjukan di sekolah?",
            "opinions": [
              {
                "id": "op1",
                "text": "Boleh Menggunakan Rekaman"
              },
              {
                "id": "op2",
                "text": "Harus Alat Musik Asli"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena handphone memiliki pilihan musik yang lebih banyak"
              },
              {
                "id": "r1",
                "text": "B. Agar lebih praktis dan tidak perlu mencari pemain musik profesional"
              },
              {
                "id": "r3",
                "text": "C. Supaya suara musik bisa diatur volumenya menjadi sangat keras"
              },
              {
                "id": "r2",
                "text": "D. Menjaga keaslian suara alat musik tradisional dan menghargai para seniman musik daerah"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk menjaga keanggunan budaya Sulawesi!",
            "draggables": [
              {
                "id": "w3",
                "text": "kelembutan",
                "color": "#99AAEF"
              },
              {
                "id": "w5",
                "text": "sebagai",
                "color": "#FFC7B1"
              },
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w4",
                "text": "Tari Pakarena",
                "color": "#a5ec93ff"
              },
              {
                "id": "w6",
                "text": "kebanggaan Sulawesi",
                "color": "#e3baf4ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  },
  "maluku": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah1 maluku.png",
          "text": "Di Kepulauan Maluku, terdapat rumah adat yang sangat penting bernama Rumah Baileo. Rumah ini bukanlah rumah tinggal biasa, melainkan tempat pertemuan warga dan upacara adat. Baileo berbentuk panggung dan memiliki ukuran yang cukup besar. \n\n Hal yang paling mencolok adalah Rumah Baileo seringkali dibuat tanpa dinding. Hal ini dilakukan agar roh para leluhur bebas keluar masuk dan masyarakat bisa melihat kegiatan di dalam rumah dengan jelas."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama rumah adat dari Kepulauan Maluku yang digunakan sebagai tempat musyawarah warga?",
            "options": [
              "Rumah Gadang",
              "Rumah Baileo",
              "Rumah Joglo",
              "Rumah Betang"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang paling menunjukkan ciri khas Rumah Baileo!",
            "options": [
              {
                "text": "Rumah di Atas Pohon",
                "emoji": "🌳",
                "image": "/assets/budayana/islands/rumah di atas pohon.png"
              },
              {
                "text": "Rumah Panggung Tanpa Dinding",
                "emoji": "🏛️",
                "image": "/assets/budayana/islands/rumah panggung tanpa dinding.png"
              },
              {
                "text": "Rumah Bulat",
                "emoji": "🛖",
                "image": "/assets/budayana/islands/rumah bulat.png"
              },
              {
                "text": "Rumah Tertutup Rapat",
                "emoji": "🏠",
                "image": "/assets/budayana/islands/rumah tertutup rapat.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Rumah Baileo secara tradisional dibangun tanpa menggunakan dinding?",
            "options": [
              "Agar warga tidak perlu membuat pintu dan jendela",
              "Supaya biaya pembangunan menjadi sangat murah",
              "Karena kekurangan bahan kayu untuk dinding",
              "Agar roh leluhur bebas keluar masuk dan menjaga keterbukaan"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, apa kegunaan utama dari Rumah Baileo bagi masyarakat Maluku?",
            "options": [
              "Tempat untuk menyimpan hasil tangkapan ikan",
              "Tempat pertemuan adat dan musyawarah warga",
              "Tempat untuk mengungsi saat terjadi banjir",
              "Tempat tinggal keluarga besar sehari-hari"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang ingin ditunjukkan dari desain Baileo yang terbuka bagi masyarakat di sekitarnya?",
            "options": [
              "Bahwa masyarakat Maluku tidak suka privasi",
              "Bangunan tersebut belum selesai dikerjakan",
              "Masyarakat Maluku suka pamer kekayaan",
              "Transparansi dan kebersamaan antar warga desa"
            ],
            "correctIndex": 3,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah2 maluku.png",
          "text": "Struktur Rumah Baileo memiliki aturan yang sangat kuat terkait adat. Tiang-tiang rumah ini berjumlah sembilan di bagian depan dan belakang, serta lima tiang di sisi kiri dan kanan, yang bersama-sama melambangkan persatuan seluruh kelompok desa di Maluku, yang disebut Siwa Lima. Di dalam Baileo, terdapat banyak ukiran bermakna, seperti ukiran dua ekor ayam yang saling berhadapan dan diapit oleh dua ekor anjing di sebelah kiri dan kanannya. Ukiran ini melambangkan kemakmuran dan kedamaian yang dijaga oleh roh nenek moyang. Karena tidak berdinding, angin laut yang sejuk bebas masuk ke dalam ruangan, menciptakan suasana yang tenang untuk bermusyawarah."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan bagian Rumah Baileo dari bagian pondasi hingga atap!",
            "draggables": [
              {
                "id": "d1",
                "text": "Tiang Kayu",
                "color": "#FFF3B0"
              },
              {
                "id": "d2",
                "text": "Lantai Panggung",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Panel Ukiran Dinding",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Atap Rumbia",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Posisi 1"
              },
              {
                "id": "z2",
                "label": "Posisi 2"
              },
              {
                "id": "z3",
                "label": "Posisi 3"
              },
              {
                "id": "z4",
                "label": "Posisi 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin mengadakan rapat warga di Baileo, kapan waktu yang paling tepat agar tidak terganggu panas matahari?",
            "options": [
              "Sore hari saat angin laut mulai masuk ke ruang terbuka",
              "Saat turun hujan deras tanpa angin",
              "Siang hari saat matahari tepat di atas atap",
              "Tengah malam saat tidak ada orang lain"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa makna dari ukiran dua ekor ayam yang saling berhadapan dan diapit anjing pada Rumah Baileo?",
            "options": [
              "Melambangkan kemakmuran dan kedamaian warga",
              "Sebagai penanda waktu pagi hari telah tiba",
              "Menunjukkan bahwa warga desa suka bertarung",
              "Larangan untuk memelihara ayam di desa"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian rumah dengan jumlah tiangnya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Tanpa Dinding",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/tanpa dinding.png"
              },
              {
                "id": "m1",
                "text": "Sembilan Tiang",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/sembilan tiang.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Simbol Persatuan Kelompok Desa"
              },
              {
                "id": "z2",
                "label": "Simbol Keterbukaan Masyarakat"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah3 maluku.png",
          "text": "Saat ini, tantangan menjaga Rumah Baileo adalah penggunaan bahan atap rumbia yang mudah rusak oleh cuaca laut yang keras. Beberapa desa mulai menggunakan bahan seng agar lebih awet. Namun, ada kekhawatiran bahwa penggunaan bahan modern akan menghilangkan 'jiwa' dan kesakralan Baileo. \n\n Selain itu, karena Baileo tidak berdinding, barang-barang adat di dalamnya bisa saja dicuri atau rusak. Apakah kita harus memberi dinding dan pintu pada Baileo agar lebih aman, atau membiarkannya terbuka demi menjaga nilai tradisi? Sebagai generasi muda, kita harus mencari jalan tengahnya."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika ada barang sejarah penting di dalam Baileo, setujukah kamu jika bagian belakang Baileo diberi dinding kayu agar lebih aman?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Keamanan barang sejarah lebih penting daripada bentuk bangunan"
              },
              {
                "id": "r2",
                "text": "B. Menambahkan dinding akan merusak nilai asli keterbukaan Baileo"
              },
              {
                "id": "r4",
                "text": "C. Supaya warga tidak bisa lagi mengintip ke dalam"
              },
              {
                "id": "r3",
                "text": "D. Agar ruangan menjadi lebih gelap dan tenang"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah penggunaan atap seng pada Baileo modern lebih baik daripada atap daun rumbia?",
            "opinions": [
              {
                "id": "op1",
                "text": "Lebih Baik"
              },
              {
                "id": "op2",
                "text": "Kurang Baik"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Atap rumbia menjaga suhu tetap dingin dan lebih bernilai seni"
              },
              {
                "id": "r4",
                "text": "B. Karena atap rumbia sudah tidak bisa ditemukan di hutan Maluku lagi"
              },
              {
                "id": "r1",
                "text": "C. Atap seng tidak mudah bocor dan lebih tahan lama di daerah pantai"
              },
              {
                "id": "r3",
                "text": "D. Supaya bunyi hujan di atap seng membuat suasana musyawarah lebih hidup"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan untuk menjaga kerukunan di tanah Maluku!",
            "draggables": [
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              },
              {
                "id": "w7",
                "text": "Rumah Baileo",
                "color": "#FFF3B0"
              },
              {
                "id": "w4",
                "text": "dan",
                "color": "#a5ec93ff"
              },
              {
                "id": "w6",
                "text": "di",
                "color": "#e3baf4ff"
              },
              {
                "id": "w5",
                "text": "kerukunan",
                "color": "#FFC7B1"
              },
              {
                "id": "w3",
                "text": "persatuan",
                "color": "#99AAEF"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              },
              {
                "id": "z7"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6",
              "w7"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan1 maluku.png",
          "text": "Pernahkah kamu membayangkan rasa sup ikan yang segar sekaligus hangat? Di Kepulauan Banda, Maluku, terdapat makanan khas bernama Ikan Kuah Pala. Bahan utamanya adalah ikan laut segar yang dimasak dengan kuah kuning. Keunikan makanan ini terletak pada penggunaan Buah Pala sebagai bumbu utamanya. Rasa sup ini sangat segar dengan sedikit rasa asam dan aroma rempah yang harum. Dahulu, makanan istimewa ini sering disajikan untuk menjamu tamu-tamu penting dan para pejabat yang datang ke Kepulauan Banda sejak ratusan tahun lalu."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa bahan rempah utama yang menjadi ciri khas dari sup ikan asal Kepulauan Banda, Maluku ini?",
            "options": [
              "Kayu Manis",
              "Daun Pandan",
              "Buah Pala",
              "Ketumbar"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar Ikan Kuah Pala yang biasanya memiliki warna kuah yang segar!",
            "options": [
              {
                "text": "Kuah Putih Susu",
                "emoji": "🥛",
                "image": "/assets/budayana/islands/kuah putih susu.png"
              },
              {
                "text": "Kuah Kuning Bening",
                "emoji": "🥘",
                "image": "/assets/budayana/islands/kuah kuning bening.png"
              },
              {
                "text": "Kuah Merah Cabai",
                "emoji": "🍲",
                "image": "/assets/budayana/islands/kuah merah cabai.png"
              },
              {
                "text": "Kuah Hitam Pekat",
                "emoji": "🥣",
                "image": "/assets/budayana/islands/kuah hitam pekat.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Di daerah manakah masakan Ikan Kuah Pala ini pertama kali menjadi sangat terkenal?",
            "options": [
              "Kepulauan Banda",
              "Medan",
              "Surabaya",
              "Jakarta"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa buah pala digunakan dalam masakan ikan laut menurut teks?",
            "options": [
              "Untuk memberikan aroma harum dan menghilangkan bau amis",
              "Supaya ikan menjadi lebih keras saat dimakan",
              "Agar warna ikan berubah menjadi ungu",
              "Agar air kuah berubah menjadi sangat manis"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, kepada siapakah Ikan Kuah Pala sering disajikan pada zaman dahulu?",
            "options": [
              "Sebagai makanan untuk hewan ternak",
              "Untuk bekal para petani di hutan",
              "Hanya untuk makanan di rumah sendiri",
              "Menjamu tamu-tamu penting yang berkunjung"
            ],
            "correctIndex": 3,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 maluku.png",
          "text": "Mengapa buah pala digunakan dalam masakan ikan ini? Ternyata, selain memberikan aroma harum, buah pala juga berfungsi untuk menghilangkan bau amis pada ikan laut. Kepulauan Banda sangat terkenal sebagai penghasil pala terbaik di dunia sejak ratusan tahun lalu. Dalam satu mangkuk Ikan Kuah Pala, biasanya ditambahkan juga rempah lain seperti serai, merica, dan daun jeruk untuk menambah aroma sedap. Masakan ini tidak hanya mengenyangkan, tetapi juga bermanfaat untuk menghangatkan tubuh dan melancarkan pencernaan."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan proses pembuatan Ikan Kuah Pala yang benar!",
            "draggables": [
              {
                "id": "d2",
                "text": "Haluskan Rempah & Pala",
                "color": "#dbe0fd"
              },
              {
                "id": "d4",
                "text": "Masukkan Ikan hingga Matang",
                "color": "#ffd5c0"
              },
              {
                "id": "d1",
                "text": "Bersihkan Ikan Segar",
                "color": "#FFF3B0"
              },
              {
                "id": "d3",
                "text": "Rebus Air dan Bumbu",
                "color": "#ffb2d8"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membuat Ikan Kuah Pala yang rasanya asli dan hangat, bagian manakah dari tanaman pala yang paling tepat digunakan?",
            "options": [
              "Daunnya yang sudah kering",
              "Daging buah atau biji palanya",
              "Kulit luar buah pala yang masih keras",
              "Kulit batangnya"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa manfaat kesehatan yang didapatkan jika kita memakan Ikan Kuah Pala yang kaya rempah?",
            "options": [
              "Menghangatkan tubuh dan melancarkan pencernaan",
              "Membantu rambut tumbuh lebih cepat dalam satu hari",
              "Membuat gigi menjadi lebih tajam",
              "Membuat kita menjadi mengantuk sepanjang hari"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian masakan dengan fungsinya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Buah Pala",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/buah_pala.png"
              },
              {
                "id": "m2",
                "text": "Ikan Laut Segar",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/ikan_laut.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Menghilangkan Bau Amis"
              },
              {
                "id": "z2",
                "label": "Sumber Protein Utama"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan3 maluku.png",
          "text": "Saat ini, Ikan Kuah Pala menjadi daya tarik wisata kuliner di Maluku. Namun, pohon pala membutuhkan waktu lama untuk tumbuh dan berbuah. Jika pohon-pohon pala di Maluku berkurang karena lahan hutan diubah menjadi pemukiman, maka bumbu asli masakan ini akan sulit didapatkan. \n\n Muncul sebuah tantangan: apakah kita harus mulai menanam pohon pala di halaman rumah masing-masing, atau mengganti bumbu pala dengan bahan kimia buatan agar masakan ini tetap bisa dijual murah? Kita harus menjaga kelestarian rempah asli kita agar masakan legendaris ini tidak hilang."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika buah pala asli semakin sulit ditemukan, setujukah kamu jika rasa pala diganti dengan penyedap rasa buatan (esens) saja?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Karena akan menghilangkan manfaat kesehatan dan keaslian rasa rempahnya"
              },
              {
                "id": "r3",
                "text": "B. Supaya masakan tersebut bisa tahan hingga bertahun-tahun"
              },
              {
                "id": "r1",
                "text": "C. Agar harga masakan tetap murah dan mudah diproduksi banyak"
              },
              {
                "id": "r4",
                "text": "D. Karena anak-anak tidak tahu perbedaan rasa asli dan buatan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah setiap sekolah di Maluku memiliki taman pohon pala sebagai tempat belajar siswa?",
            "opinions": [
              {
                "id": "op1",
                "text": "Harus"
              },
              {
                "id": "op2",
                "text": "Tidak Perlu"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena pohon pala sangat cocok dijadikan tempat berteduh saat olahraga"
              },
              {
                "id": "r1",
                "text": "B. Agar siswa mengenal rempah asli daerahnya dan menjaga kelestariannya"
              },
              {
                "id": "r2",
                "text": "C. Karena sekolah tidak memiliki lahan dan waktu yang cukup untuk merawat pohon pala yang butuh bertahun-tahun tumbuh"
              },
              {
                "id": "r3",
                "text": "D. Supaya siswa bisa langsung memasak Ikan Kuah Pala di kantin sekolah setiap hari"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk menjaga kekayaan rempah Maluku!",
            "draggables": [
              {
                "id": "w5",
                "text": "Ikan Kuah Pala",
                "color": "#FFC7B1"
              },
              {
                "id": "w6",
                "text": "tetap ada",
                "color": "#e3baf4ff"
              },
              {
                "id": "w4",
                "text": "agar",
                "color": "#a5ec93ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w3",
                "text": "rempah pala",
                "color": "#99AAEF"
              },
              {
                "id": "w2",
                "text": "lestarikan",
                "color": "#f6bad3ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 maluku.png",
          "text": "Pernahkah kamu melihat tarian di mana para penarinya melambai-lambaikan sapu tangan? Itulah Tari Lenso dari Maluku. Kata 'Lenso' berasal dari bahasa Portugis yang berarti sapu tangan — sebuah pengaruh dari sejarah panjang perdagangan rempah di Maluku. Tarian ini dilakukan secara bersama-sama, biasanya oleh para penari perempuan untuk menyambut tamu atau merayakan pesta rakyat. \n\n Irama musik yang mengiringinya sangat ceria dan bersemangat, dihasilkan dari perpaduan alat musik pukul seperti Tifa dan rangkaian gong kecil yang disebut Totobuang."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa benda utama yang digunakan oleh penari dalam Tari Lenso?",
            "options": [
              "Sapu Tangan",
              "Piring",
              "Kipas",
              "Payung"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar alat musik Maluku yang berupa rangkaian gong kecil dalam sebuah rak kayu!",
            "options": [
              {
                "text": "Totobuang",
                "emoji": "🔔",
                "image": "/assets/budayana/islands/totobuang.png"
              },
              {
                "text": "Suling",
                "emoji": "🎋",
                "image": "/assets/budayana/islands/suling.png"
              },
              {
                "text": "Biola",
                "emoji": "🎻",
                "image": "/assets/budayana/islands/biola.png"
              },
              {
                "text": "Gitar",
                "emoji": "🎸",
                "image": "/assets/budayana/islands/gitar.png"
              }
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa arti dari kata \"Lenso\" dalam bahasa masyarakat Maluku?",
            "options": [
              "Sapu Tangan",
              "Musik Merdu",
              "Selamat Datang",
              "Tari Persahabatan"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Tari Lenso biasanya dilakukan secara bersama-sama oleh banyak orang?",
            "options": [
              "Karena gerakannya sangat sulit jika dilakukan sendiri",
              "Karena kostumnya harus dipakai beramai-ramai",
              "Agar panggung pertunjukan tidak terlihat kosong",
              "Melambangkan persahabatan dan keterbukaan masyarakat"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Perpaduan suara kayu dari Tifa dan suara logam dari Totobuang melambangkan...",
            "options": [
              "Alat musik yang harganya sangat mahal",
              "Persatuan dan kedamaian antar masyarakat Maluku",
              "Bunyi yang sangat berisik dan mengganggu",
              "Perbedaan yang membuat perkelahian"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian2 maluku.png",
          "text": "Tari Lenso bukan sekadar tarian biasa, tetapi merupakan simbol persahabatan dan keterbukaan masyarakat Maluku kepada siapa saja yang datang. Gerakan kakinya yang melompat kecil dan ayunan sapu tangannya mengikuti irama Tifa Totobuang. \n\n Tifa yang terbuat dari kayu memberikan ketukan yang kuat, sedangkan Totobuang yang terbuat dari logam menghasilkan nada-nada yang indah dan merdu. Keharmonisan antara suara kayu (Tifa) dan logam (Totobuang) melambangkan persatuan berbagai kelompok masyarakat di Maluku yang hidup berdampingan dengan damai."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan jalannya gerakan dalam Tari Lenso!",
            "draggables": [
              {
                "id": "d4",
                "text": "Melangkah Mundur (Penutup)",
                "color": "#ffd5c0"
              },
              {
                "id": "d1",
                "text": "Berdiri Berjejer",
                "color": "#FFF3B0"
              },
              {
                "id": "d3",
                "text": "Melompat Kecil",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Mengayun Sapu Tangan",
                "color": "#dbe0fd"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika irama musik Tifa Totobuang menjadi semakin cepat, apa yang harus dilakukan oleh para penari Lenso?",
            "options": [
              "Mengayunkan sapu tangan dan melompat lebih lincah",
              "Mengganti gerakan menjadi tarian lambat",
              "Membuang sapu tangan ke lantai",
              "Berhenti menari dan duduk"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa fungsi utama dari musik Totobuang dalam pertunjukan Tari Lenso?",
            "options": [
              "Untuk menakuti musuh yang datang ke desa",
              "Agar penari tidak perlu membawa sapu tangan",
              "Sebagai hiasan panggung agar terlihat indah",
              "Memberikan nada-nada lagu yang indah untuk mengiringi tarian"
            ],
            "correctIndex": 3,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan alat musik dengan bahannya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Tifa",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/tifa.png"
              },
              {
                "id": "m2",
                "text": "Totobuang",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/totobuang 2.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Terbuat dari Kayu dan Kulit Hewan"
              },
              {
                "id": "z2",
                "label": "Terbuat dari Logam Kuningan/Perunggu"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian3 maluku.png",
          "text": "Saat ini, Tari Lenso sering dipadukan dengan alat musik modern seperti trompet dan gitar (musik Orkes). Namun, beberapa tokoh adat khawatir jika musik Tifa Totobuang yang asli ditinggalkan, maka ciri khas suara tradisional Maluku akan hilang. Selain itu, sapu tangan yang dahulu dijahit tangan kini banyak diganti dengan tisu atau kain pabrik biasa. \n\n Apakah menurutmu penggunaan musik modern dan bahan kain praktis mengurangi nilai ketulusan dalam menyambut tamu? Kita harus menjaga agar keceriaan Tari Lenso tetap memiliki akar budaya yang kuat."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika Tari Lenso diiringi musik DJ agar lebih disukai oleh wisatawan mancanegara?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Karena akan menghilangkan keaslian suara Tifa Totobuang yang bersejarah"
              },
              {
                "id": "r4",
                "text": "B. Karena musik DJ lebih mudah didapatkan daripada pemain Tifa"
              },
              {
                "id": "r1",
                "text": "C. Agar budaya Maluku terlihat lebih modern dan mengikuti zaman"
              },
              {
                "id": "r3",
                "text": "D. Supaya penari bisa bergerak lebih bebas tanpa aturan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah menurutmu sapu tangan dalam Tari Lenso boleh diganti dengan selendang yang panjang?",
            "opinions": [
              {
                "id": "op1",
                "text": "Boleh"
              },
              {
                "id": "op2",
                "text": "Kurang Tepat"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Agar tarian Lenso terlihat mirip dengan tarian dari daerah lain"
              },
              {
                "id": "r3",
                "text": "B. Supaya penari tidak kesulitan memegang sapu tangan yang kecil"
              },
              {
                "id": "r2",
                "text": "C. Karena nama tariannya adalah 'Lenso' (Sapu Tangan), sehingga ciri khasnya harus dijaga"
              },
              {
                "id": "r1",
                "text": "D. Karena dalam beberapa pertunjukan Tari Lenso, selendang sudah digunakan sebagai variasi yang diterima secara adat"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk menjaga keceriaan budaya Maluku!",
            "draggables": [
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              },
              {
                "id": "w3",
                "text": "persahabatan",
                "color": "#99AAEF"
              },
              {
                "id": "w4",
                "text": "melalui",
                "color": "#a5ec93ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w5",
                "text": "Tari Lenso",
                "color": "#FFC7B1"
              },
              {
                "id": "w6",
                "text": "Maluku",
                "color": "#e3baf4ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  },
  "papua": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah1 papua.png",
          "text": "Di pegunungan tengah Papua yang dingin, suku Dani, Lani, dan Yali memiliki rumah adat unik bernama Rumah Honai. Rumah ini berbentuk bulat dengan atap yang sangat rendah dan menutupi hampir seluruh bangunan. Atap Honai dibuat dari tumpukan Jerami atau Alang-alang yang sangat tebal. \n\n Rumah ini sengaja dibuat tanpa jendela dan hanya memiliki satu pintu kecil. Desain ini bertujuan untuk menahan suhu dingin dan kabut di pegunungan agar bagian dalam rumah tetap hangat."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama rumah adat dari Papua yang berbentuk bulat dan memiliki atap rendah?",
            "options": [
              "Rumah Honai",
              "Rumah Joglo",
              "Rumah Tongkonan",
              "Rumah Gadang"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang menunjukkan bentuk atap Rumah Honai yang benar!",
            "options": [
              {
                "text": "Atap Bulat Seperti Jamur",
                "emoji": "🍄",
                "image": "/assets/budayana/islands/atap bulat seperti jamur.png"
              },
              {
                "text": "Atap Runcing",
                "emoji": "⛰️",
                "image": "/assets/budayana/islands/atap runcing.png"
              },
              {
                "text": "Atap Datar",
                "emoji": "➖",
                "image": "/assets/budayana/islands/atap datar.png"
              },
              {
                "text": "Atap Limas",
                "emoji": "🔼",
                "image": "/assets/budayana/islands/atap limas.png"
              }
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Bahan alami apa yang digunakan untuk membuat atap Rumah Honai yang tebal?",
            "options": [
              "Jerami atau Alang-alang",
              "Tanah Liat",
              "Kulit Kayu",
              "Daun Pisang"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Rumah Honai dibuat tanpa jendela dan hanya memiliki satu pintu kecil?",
            "options": [
              "Agar penghuni rumah tidak bisa dilihat orang luar",
              "Supaya rumah terlihat lebih gelap",
              "Karena jendela sulit dibuat di dalam hutan",
              "Untuk menahan udara dingin masuk ke dalam rumah"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Di manakah biasanya masyarakat Papua membangun Rumah Honai sesuai fungsinya?",
            "options": [
              "Di pinggir pantai yang terik",
              "Di daerah pegunungan yang dingin",
              "Di atas pohon yang tinggi",
              "Di tengah rawa-rawa"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah2 papua.png",
          "text": "Struktur Rumah Honai yang bulat ternyata memiliki rahasia hebat. Bentuk lingkaran ini membuat angin kencang di pegunungan hanya melewati sisi rumah tanpa merobohkannya. Di bagian tengah lantai rumah, biasanya terdapat sebuah tungku api untuk membuat api unggun. Api ini berfungsi sebagai penghangat tubuh sekaligus penerangan di malam hari. \n\n Api ini berfungsi sebagai penghangat dan penerangan. Karena atap jeraminya sangat tebal dan rapat, asap dari api unggun tidak langsung keluar, sehingga suhu panas tetap terjaga di dalam rumah untuk waktu yang lama."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan bagian Rumah Honai dari bagian paling luar hingga ke bagian tengah dalam rumah!",
            "draggables": [
              {
                "id": "d3",
                "text": "Lantai Rumah",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Dinding Kayu Melingkar",
                "color": "#dbe0fd"
              },
              {
                "id": "d1",
                "text": "Atap Jerami",
                "color": "#FFF3B0"
              },
              {
                "id": "d4",
                "text": "Tungku Api",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membuat api unggun di dalam Honai, di manakah posisi yang paling aman agar tidak membakar dinding?",
            "options": [
              "Di bawah atap jerami yang rendah",
              "Menempel pada dinding kayu",
              "Di pojok pintu masuk",
              "Di tengah lantai dalam lingkaran khusus"
            ],
            "correctIndex": 3,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa bentuk Rumah Honai dibuat bulat (lingkaran) dan bukan kotak?",
            "options": [
              "Karena bahan kayu hanya bisa ditekuk secara bulat",
              "Supaya terlihat lebih indah dipandang dari jauh",
              "Agar angin kencang pegunungan tidak merobohkan bangunan",
              "Agar lebih mudah dibangun oleh banyak orang"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian Rumah Honai dengan fungsinya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Atap Jerami Tebal",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/atap jerami.png"
              },
              {
                "id": "m2",
                "text": "Tungku Api di Tengah",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/dinding tanpa jendela.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Menjaga panas tetap di dalam rumah"
              },
              {
                "id": "z2",
                "label": "Menghangatkan tubuh dan menerangi rumah"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah3 papua.png",
          "text": "Saat ini, beberapa masyarakat Papua mulai membangun rumah dari bahan semen dan atap seng. Namun, rumah modern ini sering kali terasa sangat dingin di malam hari karena tidak bisa menahan suhu seperti Rumah Honai asli. Tantangannya adalah, jerami untuk atap Honai kini semakin sulit dicari dan mudah terbakar jika terkena api. \n\n Apakah kita harus tetap menggunakan jerami demi kehangatan, atau beralih ke bahan modern yang lebih aman namun dingin? Kita perlu memikirkan cara agar kearifan lokal Honai tetap bertahan di masa depan."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu adalah seorang arsitek di Papua, apakah kamu setuju jika atap jerami diganti dengan seng yang lebih tahan api?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena seng lebih mudah dibersihkan daripada jerami"
              },
              {
                "id": "r2",
                "text": "B. Karena seng akan membuat rumah terasa sangat dingin di malam hari"
              },
              {
                "id": "r3",
                "text": "C. Supaya rumah terlihat lebih modern seperti di kota"
              },
              {
                "id": "r1",
                "text": "D. Agar rumah lebih aman dari bahaya kebakaran"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah Rumah Honai modern mulai memiliki jendela kecil untuk sirkulasi udara?",
            "opinions": [
              {
                "id": "op1",
                "text": "Harus Ada"
              },
              {
                "id": "op2",
                "text": "Tetap Tanpa Jendela"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Menjaga tradisi asli agar suhu di dalam tetap sangat hangat"
              },
              {
                "id": "r3",
                "text": "B. Supaya cahaya matahari bisa masuk ke dalam ruangan"
              },
              {
                "id": "r4",
                "text": "C. Agar penghuni bisa melihat pemandangan di luar rumah"
              },
              {
                "id": "r1",
                "text": "D. Agar asap dari api unggun bisa keluar dan lebih sehat"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk menghargai keunikan arsitektur Papua!",
            "draggables": [
              {
                "id": "w3",
                "text": "keunikan",
                "color": "#99AAEF"
              },
              {
                "id": "w6",
                "text": "tanah Papua",
                "color": "#e3baf4ff"
              },
              {
                "id": "w4",
                "text": "Rumah Honai",
                "color": "#a5ec93ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w5",
                "text": "warisan",
                "color": "#FFC7B1"
              },
              {
                "id": "w2",
                "text": "banggakan",
                "color": "#f6bad3ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan1 papua.png",
          "text": "Di Indonesia bagian timur, khususnya Papua dan Maluku, terdapat makanan pokok yang sangat unik bernama Papeda. Papeda terbuat dari Sagu, yaitu tepung yang diambil dari batang pohon sagu. Bentuk Papeda menyerupai bubur yang kental, berwarna putih bening, dan memiliki tekstur yang kenyal serta lengket seperti lem. Papeda biasanya disajikan di dalam wadah kayu atau gerabah dan dimakan bersama Ikan Kuah Kuning yang segar agar rasanya menjadi lebih nikmat."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa bahan utama yang digunakan untuk membuat Papeda dari Papua?",
            "options": [
              "Tepung Beras",
              "Tepung Sagu",
              "Tepung Jagung",
              "Tepung Terigu"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang paling tepat menunjukkan tekstur Papeda yang sudah matang!",
            "options": [
              {
                "text": "Roti Keras",
                "emoji": "🥖",
                "image": "/assets/budayana/islands/roti keras.png"
              },
              {
                "text": "Mi Kuning",
                "emoji": "🍜",
                "image": "/assets/budayana/islands/mi kuning.png"
              },
              {
                "text": "Bubur Putih Bening dan Lengket",
                "emoji": "🥣",
                "image": "/assets/budayana/islands/bubur putih bening dan lengket.png"
              },
              {
                "text": "Nasi Butiran",
                "emoji": "🍚",
                "image": "/assets/budayana/islands/nasi butiran.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Lauk apa yang biasanya menjadi pendamping utama saat memakan Papeda?",
            "options": [
              "Sayur Lodeh",
              "Rendang Daging",
              "Ikan Kuah Kuning",
              "Ayam Goreng"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Papeda memiliki tekstur yang lengket dan sangat kental?",
            "options": [
              "Hasil dari tepung sagu yang disiram air mendidih",
              "Karena tepung sagu dicampur dengan susu",
              "Karena dimasak terlalu lama di atas api",
              "Karena dicampur dengan lem makanan"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Dari manakah tepung sagu diperoleh oleh masyarakat Papua?",
            "options": [
              "Dari biji padi di sawah",
              "Dari buah hutan yang jatuh",
              "Dari bagian dalam batang pohon sagu",
              "Dari akar pohon kelapa"
            ],
            "correctIndex": 2,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 papua.png",
          "text": "Pohon sagu sangat berarti bagi masyarakat Papua karena merupakan sumber kehidupan. Satu pohon sagu besar bisa menghasilkan ratusan kilogram tepung yang bisa memberi makan banyak orang. Proses pembuatan Papeda membutuhkan ketelitian; tepung sagu harus disiram dengan air yang benar-benar mendidih sambil diaduk cepat agar matang merata dan menjadi bening. Karena teksturnya yang sangat lengket, Papeda tidak bisa diambil dengan sendok biasa. Masyarakat Papua menggunakan sepasang sumpit kayu khusus bernama Gata-gata untuk menggulung dan mengambil Papeda. Selain enak, Papeda kaya akan serat dan rendah lemak, sehingga sangat baik untuk kesehatan tubuh."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan proses pembuatan Papeda yang benar!",
            "draggables": [
              {
                "id": "d1",
                "text": "Tebang Pohon Sagu",
                "color": "#FFF3B0"
              },
              {
                "id": "d2",
                "text": "Parut Batang Sagu",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Peras dan Ambil Tepung Sagu",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Siram Tepung dengan Air Mendidih",
                "color": "#ffd5c0"
              },
              {
                "id": "d5",
                "text": "Aduk Hingga Bening",
                "color": "#bca89eff"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              },
              {
                "id": "z5",
                "label": "Tahap 5"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4",
              "d5"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin mengambil Papeda dari wadah tanpa berantakan, alat tradisional apa yang sebaiknya kamu gunakan?",
            "options": [
              "Centong Nasi Besar",
              "Sendok dan Garpu Besi",
              "Gata-gata (Sepasang Sumpit Kayu)",
              "Pisau Dapur"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang akan terjadi jika tepung sagu disiram dengan air yang tidak mendidih (hanya hangat)?",
            "options": [
              "Papeda akan berubah menjadi batu yang keras",
              "Tepung sagu tidak akan mengental dan tetap cair",
              "Papeda akan menjadi sangat manis",
              "Papeda akan berubah warna menjadi merah"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian tanaman sagu dengan manfaatnya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Batang Pohon Sagu",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/batang pohon.png"
              },
              {
                "id": "m2",
                "text": "Daun Sagu",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/daun sagu.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Sumber Tepung Sagu"
              },
              {
                "id": "z2",
                "label": "Atap Rumah Tradisional"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan3 papua.png",
          "text": "Saat ini, banyak anak muda di kota-kota besar di Papua yang mulai lebih sering makan nasi daripada Papeda karena nasi dianggap lebih mudah didapat. Padahal, hutan sagu di Papua adalah salah satu yang terluas di dunia. Muncul sebuah kekhawatiran: jika masyarakat Papua berhenti makan Papeda, maka hutan-hutan sagu mungkin tidak akan dijaga lagi dan bisa rusak. Apakah kita harus tetap menjadikan Papeda sebagai makanan utama yang dikenalkan di sekolah-sekolah, atau membiarkan nasi menggantikan peran sagu sepenuhnya?"
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu adalah kepala sekolah di Papua, setujukah kamu jika kantin sekolah diwajibkan menjual Papeda seminggu sekali?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Karena anak-anak lebih suka makan nasi dan makanan instan"
              },
              {
                "id": "r3",
                "text": "B. Supaya sekolah terlihat lebih tradisional dibandingkan sekolah lain"
              },
              {
                "id": "r1",
                "text": "C. Agar anak-anak tetap mengenal dan mencintai makanan asli daerahnya"
              },
              {
                "id": "r4",
                "text": "D. Agar persediaan nasi di kantin tidak cepat habis"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah menurutmu membuat \"Papeda Instan\" (langsung seduh) adalah cara yang baik untuk melestarikan sagu?",
            "opinions": [
              {
                "id": "op1",
                "text": "Ide Bagus"
              },
              {
                "id": "op2",
                "text": "Kurang Bagus"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Ya, agar masyarakat di luar Papua bisa menikmati Papeda dengan praktis"
              },
              {
                "id": "r3",
                "text": "B. Ya, supaya kita tidak perlu lagi menjaga pohon sagu di hutan"
              },
              {
                "id": "r4",
                "text": "C. Tidak, karena harga Papeda instan pasti akan sangat mahal"
              },
              {
                "id": "r2",
                "text": "D. Tidak, karena proses tradisional mengaduk Papeda adalah bagian dari keunikan budaya"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk bangga memakan sagu!",
            "draggables": [
              {
                "id": "w6",
                "text": "tetap terjaga",
                "color": "#e3baf4ff"
              },
              {
                "id": "w4",
                "text": "agar",
                "color": "#a5ec93ff"
              },
              {
                "id": "w3",
                "text": "Papeda",
                "color": "#99AAEF"
              },
              {
                "id": "w5",
                "text": "hutan sagu",
                "color": "#FFC7B1"
              },
              {
                "id": "w2",
                "text": "lestarikan",
                "color": "#f6bad3ff"
              },
              {
                "id": "w1",
                "text": "Ayo kita",
                "color": "#f5f199ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 papua.png",
          "text": "Pernahkah kamu melihat alat musik yang berbentuk tabung panjang dari kayu dan dihiasi ukiran indah? Tifa adalah alat musik pukul khas Indonesia bagian timur, terutama Papua dan Maluku. Bentuk Tifa Papua memiliki pegangan di sisinya yang menjadi ciri khasnya. \n\n Bagian ujungnya ditutup dengan kulit hewan, biasanya kulit biawak (soa-soa) atau kulit rusa, untuk menghasilkan suara yang nyaring. Tifa selalu digunakan untuk mengiringi tarian tradisional, seperti Tari Sajojo, di mana semua orang menari bersama dengan penuh kegembiraan."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama alat musik tradisional khas Papua yang berbentuk tabung panjang dan dimainkan dengan cara dipukul?",
            "options": [
              "Gamelan",
              "Sasando",
              "Angklung",
              "Tifa"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar permukaan Tifa yang digunakan untuk menghasilkan suara!",
            "options": [
              {
                "text": "Kulit Hewan yang Kencang",
                "emoji": "🥁",
                "image": "/assets/budayana/islands/kulit sapi.png"
              },
              {
                "text": "Senar Gitar",
                "emoji": "🎸",
                "image": "/assets/budayana/islands/senar gitar.png"
              },
              {
                "text": "Lubang Tiup",
                "emoji": "🎋",
                "image": "/assets/budayana/islands/lubang tiup.png"
              },
              {
                "text": "Permukaan Kayu",
                "emoji": "🪵",
                "image": "/assets/budayana/islands/permukaan kayu.png"
              }
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Jenis kulit hewan apa yang secara tradisional sering digunakan untuk menutup ujung Tifa?",
            "options": [
              "Ikan atau Ayam",
              "Sapi atau Kambing",
              "Biawak (Soa-soa) atau Rusa",
              "Kelinci atau Kucing"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa tarian tradisional Papua, seperti Sajojo, biasanya dilakukan oleh banyak orang secara bersama-sama?",
            "options": [
              "Melambangkan kebersamaan dan kegembiraan masyarakat",
              "Karena panggungnya terlalu luas jika menari sendiri",
              "Karena kostum tarian sangat berat sehingga butuh bantuan orang lain",
              "Agar tarian terlihat sangat membingungkan penonton"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, apa yang dilakukan pemain Tifa agar suara Tifa menjadi lebih nyaring sebelum dimainkan?",
            "options": [
              "Mengecat Tifa dengan warna-warni",
              "Mengisi bagian dalam Tifa dengan pasir",
              "Memanaskan bagian kulitnya di dekat api",
              "Merendam Tifa di dalam air sungai"
            ],
            "correctIndex": 2,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian2 papua.png",
          "text": "Bagi masyarakat Papua, Tifa bukan sekadar alat musik, tetapi merupakan simbol identitas. Kayu yang digunakan untuk membuat Tifa biasanya diambil dari pohon Lenggua yang kuat dan tebal. Ukiran-ukiran pada badan Tifa bukan sekadar hiasan, melainkan menggambarkan cerita kehidupan, ungkapan syukur, atau menjadi simbol marga (suku) pemiliknya. Sebelum dimainkan, kulit Tifa terlebih dahulu dipanaskan dekat api agar mengencang dan suaranya lebih nyaring. Dalam tarian Papua, irama Tifa menjadi pemandu langkah kaki. Gerakan tarian yang melompat dan dinamis melambangkan semangat, keberanian, dan rasa syukur kepada alam yang memberikan kehidupan."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan proses pembuatan Tifa sederhana!",
            "draggables": [
              {
                "id": "d4",
                "text": "Ikat dengan Rotan",
                "color": "#ffd5c0"
              },
              {
                "id": "d2",
                "text": "Ukir Sisi Kayu",
                "color": "#dbe0fd"
              },
              {
                "id": "d1",
                "text": "Lubangi Batang Kayu",
                "color": "#FFF3B0"
              },
              {
                "id": "d3",
                "text": "Pasang Kulit Hewan",
                "color": "#ffb2d8"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu adalah seorang pemain Tifa, apa yang harus kamu lakukan agar irama musikmu sesuai dengan langkah kaki penari?",
            "options": [
              "Berhenti memukul saat penari mulai melompat",
              "Memperhatikan kecepatan gerak penari dan memukul sesuai tempo",
              "Memukul Tifa dengan mata tertutup",
              "Memukul Tifa sekeras mungkin tanpa berhenti"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa fungsi utama dari ukiran-ukiran yang ada pada badan kayu Tifa?",
            "options": [
              "Agar Tifa tidak licin saat dipegang",
              "Supaya suara yang dihasilkan menjadi lebih pelan",
              "Sebagai hiasan yang memiliki makna cerita atau simbol suku",
              "Sebagai tempat untuk menyimpan makanan kecil"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian musik dengan maknanya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Gerakan Melompat",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/gerakan lompat.png"
              },
              {
                "id": "m1",
                "text": "Suara Tifa",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/suara tifa.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Pemandu semangat dan langkah tari"
              },
              {
                "id": "z2",
                "label": "Simbol keberanian dan rasa syukur"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian3 papua.png",
          "text": "Saat ini, Tifa banyak dibuat sebagai cenderamata untuk turis dalam ukuran yang lebih kecil. Selain itu, karena perburuan rusa dan biawak semakin dibatasi untuk menjaga alam, kulit hewan asli untuk Tifa mulai sulit didapatkan. Beberapa pengrajin mulai mencoba menggantinya dengan bahan modern seperti plastik atau karet. Muncul sebuah pertanyaan: apakah Tifa dengan kulit buatan tetap memiliki nilai budaya yang sama dengan Tifa kulit asli? Kita harus kreatif dalam melestarikan budaya, namun tetap menjaga kelestarian hewan di hutan Papua."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika kulit biawak atau rusa pada Tifa diganti dengan bahan modern seperti plastik agar hewan di hutan Papua tetap lestari?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r3",
                "text": "A. Supaya harga Tifa menjadi jauh lebih mahal bagi turis"
              },
              {
                "id": "r1",
                "text": "B. Agar alam dan hewan di Papua tetap terjaga kelestariannya"
              },
              {
                "id": "r2",
                "text": "C. Karena suara dari plastik tidak akan senyaring dan seindah kulit asli"
              },
              {
                "id": "r4",
                "text": "D. Karena plastik jauh lebih sulit dibersihkan daripada kulit hewan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah tarian Papua diajarkan di seluruh sekolah di Indonesia, bukan hanya di Papua saja?",
            "opinions": [
              {
                "id": "op1",
                "text": "Harus Diajarkan"
              },
              {
                "id": "op2",
                "text": "Di Papua Saja"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar seluruh anak Indonesia mengenal dan bangga pada kekayaan budaya Papua"
              },
              {
                "id": "r3",
                "text": "B. Supaya semua siswa bisa menjadi pemain Tifa profesional"
              },
              {
                "id": "r4",
                "text": "C. Karena gerakan tarian Papua terlalu sulit untuk dipelajari orang luar"
              },
              {
                "id": "r2",
                "text": "D. Karena tarian Papua hanya boleh ditarikan di tanah Papua saja"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk bangga dengan seni budaya Papua!",
            "draggables": [
              {
                "id": "w6",
                "text": "dari Papua",
                "color": "#e3baf4ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w5",
                "text": "tarian indah",
                "color": "#FFC7B1"
              },
              {
                "id": "w2",
                "text": "banggakan",
                "color": "#f6bad3ff"
              },
              {
                "id": "w3",
                "text": "irama Tifa",
                "color": "#99AAEF"
              },
              {
                "id": "w4",
                "text": "dan",
                "color": "#a5ec93ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  },
  "bali": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah1 bali.png",
          "text": "Pernahkah kamu melihat gerbang tinggi yang terbelah dua di Bali? Itu disebut Gapura Candi Bentar. Gapura ini adalah pintu masuk utama menuju halaman rumah adat Bali. Uniknya, gapura ini tidak memiliki atap dan bagian kanan-kirinya dibuat sangat mirip atau simetris. Setelah melewati gapura, biasanya ada dinding pembatas bernama Aling-aling yang berfungsi melindungi rumah dari pandangan langsung orang luar. Rumah adat Bali terdiri dari beberapa bangunan terpisah yang dikelilingi oleh tembok pelindung yang disebut Panyengker. Setiap bangunan memiliki fungsi berbeda, seperti tempat sembahyang, tempat tidur, dan dapur."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama gerbang khas Bali yang bentuknya terbelah dua dan menjadi pintu masuk utama?",
            "options": [
              "Rumah Baileo",
              "Rumah Joglo",
              "Gapura Candi Bentar",
              "Rumah Gadang"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang menunjukkan ciri khas Candi Bentar yang benar!",
            "options": [
              {
                "text": "Gerbang Bertutup",
                "emoji": "🚪",
                "image": "/assets/budayana/islands/gerbang bertutup.png"
              },
              {
                "text": "Pintu Kayu Kecil",
                "emoji": "🚪",
                "image": "/assets/budayana/islands/pintu kayu kecil.png"
              },
              {
                "text": "Dua Tiang Kembar Terbelah Tanpa Atap",
                "emoji": "⛩️",
                "image": "/assets/budayana/islands/dua tiang kembar terbelah tanpa atap.png"
              },
              {
                "text": "Lubang Gua",
                "emoji": "🕳️",
                "image": "/assets/budayana/islands/lubang gua.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa nama tembok keliling yang berfungsi sebagai pelindung rumah adat Bali?",
            "options": [
              "Panyengker",
              "Pura (tempat ibadah)",
              "Pendopo (balai di Jawa)",
              "Aling-aling (dinding penghalang setelah gapura)"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Gapura Candi Bentar dibuat dengan sisi kanan dan kiri yang sangat mirip (simetris)?",
            "options": [
              "Supaya pengerjaannya lebih cepat selesai",
              "Agar terlihat lebih mewah bagi tamu",
              "Karena bahan batunya memang harus dibagi dua",
              "Melambangkan keseimbangan dalam kehidupan"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, rumah adat Bali terdiri dari...",
            "options": [
              "Rumah yang digantung di atas pohon besar",
              "Satu gedung besar untuk semua orang",
              "Kamar-kamar yang disusun secara memanjang",
              "Beberapa bangunan terpisah dengan fungsi berbeda"
            ],
            "correctIndex": 3,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah2 bali.png",
          "text": "Penyusunan rumah adat Bali tidak dilakukan sembarangan, melainkan menggunakan aturan bernama Asta Kosala Kosali. Aturan ini berlandaskan pada konsep Tri Hita Karana, yaitu tiga penyebab keharmonisan: hubungan manusia dengan Tuhan (Parahyangan), dengan sesama manusia (Pawongan), dan dengan alam (Palemahan). Asta Kosala Kosali menggunakan ukuran tubuh pemilik rumah sebagai pedoman membangun, seperti Hasta (sejengkal dari pergelangan sampai ujung jari tengah) dan Depa (rentangan kedua tangan). Hal ini bertujuan agar rumah terasa nyaman dan selaras dengan penghuninya. Selain itu, dinding rumah Bali penuh dengan ukiran batu padas yang menceritakan tentang hewan, tumbuhan, dan dewa-dewi sebagai ungkapan rasa syukur kepada alam dan Tuhan."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan posisi tamu dari luar hingga masuk ke halaman rumah Bali!",
            "draggables": [
              {
                "id": "d4",
                "text": "Halaman Rumah",
                "color": "#ffd5c0"
              },
              {
                "id": "d2",
                "text": "Gapura Candi Bentar",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Aling-aling (Dinding Penghalang)",
                "color": "#ffb2d8"
              },
              {
                "id": "d1",
                "text": "Jalan Raya",
                "color": "#FFF3B0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Langkah 1"
              },
              {
                "id": "z2",
                "label": "Langkah 2"
              },
              {
                "id": "z3",
                "label": "Langkah 3"
              },
              {
                "id": "z4",
                "label": "Langkah 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin mengukur luas kamar menggunakan aturan Asta Kosala Kosali, alat apa yang harus kamu gunakan?",
            "options": [
              "Penggaris plastik 30 cm",
              "Meteran gulung milik tukang",
              "Tali jemuran yang panjang",
              "Jengkal tangan atau langkah kaki pemilik rumah"
            ],
            "correctIndex": 3,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa ukiran pada dinding rumah Bali sering menggambarkan tumbuh-tumbuhan dan hewan?",
            "options": [
              "Menunjukkan rasa syukur dan cinta terhadap alam semesta",
              "Agar dinding rumah tidak terlihat polos dan membosankan",
              "Sebagai tanda bahwa pemilik rumah senang berkebun",
              "Karena seniman Bali tidak suka menggambar manusia"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian rumah dengan tujuannya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Asta Kosala Kosali",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/asta kosala.png"
              },
              {
                "id": "m2",
                "text": "Panyengker (Tembok)",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/tembok panyengker.png"
              },
              {
                "id": "m3",
                "text": "Aling-aling",
                "color": "#ffb2d8",
                "image": "/assets/budayana/islands/aling aling.png"
              },
              {
                "id": "m4",
                "text": "Gapura Candi Bentar",
                "color": "#ffd5c0",
                "image": "/assets/budayana/islands/candi bentar.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Menciptakan keseimbangan dan kenyamanan penghuni"
              },
              {
                "id": "z2",
                "label": "Memberikan rasa aman dan batas rumah"
              },
              {
                "id": "z3",
                "label": "Menghalangi pandangan langsung & melindungi rumah"
              },
              {
                "id": "z4",
                "label": "Pintu masuk yang melambangkan keseimbangan"
              }
            ],
            "correctOrder": [
              "m1",
              "m2",
              "m3",
              "m4"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah3 bali.png",
          "text": "Saat ini, Pulau Bali menjadi tujuan wisata dunia. Banyak orang membangun hotel dan vila dengan meniru gaya Gapura Candi Bentar agar terlihat menarik. Namun, terkadang pembangunan ini mengabaikan aturan Asta Kosala Kosali karena lahan yang terbatas di daerah wisata. Muncul sebuah diskusi: apakah kita harus tetap mengikuti aturan ukuran tubuh pemilik rumah dalam membangun, atau boleh menggunakan ukuran meteran modern agar pembangunan lebih cepat? Sebagai penjaga budaya, kita harus memastikan keindahan Bali tidak hanya menjadi hiasan luar saja, tetapi juga tetap memiliki makna filosofis yang dalam."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika sebuah hotel besar membangun Candi Bentar raksasa hanya untuk hiasan foto tanpa mengikuti aturan adat, bagaimana pendapatmu?",
            "opinions": [
              {
                "id": "op1",
                "text": "Boleh Saja"
              },
              {
                "id": "op2",
                "text": "Kurang Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar budaya Bali semakin dikenal banyak orang lewat foto di internet"
              },
              {
                "id": "r2",
                "text": "B. Karena bangunan adat harus memiliki makna filosofi, bukan cuma hiasan"
              },
              {
                "id": "r4",
                "text": "C. Karena turis memang menyukai bangunan yang terlihat tradisional"
              },
              {
                "id": "r3",
                "text": "D. Supaya hotel tersebut terlihat lebih mahal dan mewah"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah anak muda Bali tetap belajar cara mengukir batu padas, padahal sekarang sudah ada mesin cetak otomatis?",
            "opinions": [
              {
                "id": "op1",
                "text": "Harus Belajar"
              },
              {
                "id": "op2",
                "text": "Gunakan Mesin Saja"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Agar semua dinding rumah di Bali memiliki motif yang sama persis"
              },
              {
                "id": "r2",
                "text": "B. Karena menggunakan mesin jauh lebih cepat dan hasilnya sangat rapi"
              },
              {
                "id": "r1",
                "text": "C. Agar sentuhan seni asli dan keunikan tangan manusia tidak hilang"
              },
              {
                "id": "r3",
                "text": "D. Supaya anak muda bisa menjual ukiran dengan harga yang murah"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan untuk menjaga keindahan budaya Bali!",
            "draggables": [
              {
                "id": "w6",
                "text": "budaya Bali",
                "color": "#e3baf4ff"
              },
              {
                "id": "w5",
                "text": "keindahan",
                "color": "#FFC7B1"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              },
              {
                "id": "w4",
                "text": "dan",
                "color": "#a5ec93ff"
              },
              {
                "id": "w3",
                "text": "keselarasan",
                "color": "#99AAEF"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan1 bali.png",
          "text": "Pernahkah kamu mencicipi masakan ayam yang bumbunya sangat kaya dan pedas dari Bali? Namanya adalah Ayam Betutu. Sebenarnya, selain ayam, masyarakat Bali juga sering menggunakan daging bebek (Bebek Betutu). Makanan ini terbuat dari ayam atau bebek utuh yang bagian perutnya diisi dengan bumbu rempah super lengkap yang disebut Base Genep. Daging kemudian dibungkus daun pisang dan pelepah pinang agar bumbunya tidak bocor saat dimasak. Rasanya gurih, pedas, dan aromanya sangat harum."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama masakan khas Bali yang berupa ayam utuh dengan isi bumbu rempah di dalamnya?",
            "options": [
              "Nasi Jinggo",
              "Sate Lilit",
              "Lawar Bali",
              "Ayam Betutu"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar cara memasak Betutu tradisional yang benar sesuai teks!",
            "options": [
              {
                "text": "Dikukus dalam panci",
                "emoji": "🍲",
                "image": "/assets/budayana/islands/direbus dalam air.png"
              },
              {
                "text": "Digoreng kering",
                "emoji": "🍳",
                "image": "/assets/budayana/islands/digoreng dalam minyak.png"
              },
              {
                "text": "Ditimbun dalam bara sekam padi",
                "emoji": "🔥",
                "image": "/assets/budayana/islands/ditimbun sekam.png"
              },
              {
                "text": "Dibakar sate",
                "emoji": "🍢",
                "image": "/assets/budayana/islands/dibakar langsung di api.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Selain ayam, daging hewan apa yang juga sering dimasak menjadi hidangan Betutu di Bali?",
            "options": [
              "Bebek",
              "Kambing",
              "Sapi",
              "Ikan Laut"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa daging Ayam Betutu bisa terasa sangat lembut hingga ke tulang?",
            "options": [
              "Karena ayam tersebut diberi makan buah-buahan",
              "Karena daging ayamnya dipukul-pukul sebelum dimasak",
              "Karena dimasak dalam waktu yang sangat lama (semalam suntuk)",
              "Karena ayamnya direndam dalam air es selama tiga hari"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, apa pelengkap yang biasanya disajikan bersama Ayam Betutu?",
            "options": [
              "Mayones dan Saus Tomat",
              "Selai Nanas dan Mentega",
              "Sambal Matah dan Kacang Goreng",
              "Keju dan Roti"
            ],
            "correctIndex": 2,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 bali.png",
          "text": "Tahukah kamu rahasia kelezatan Betutu? Rahasianya ada pada bumbu Base Genep yang terdiri dari 15 jenis rempah, dan teknik memasak kuno yang disebut 'Menyantok' atau menimbun. Cara memasak Betutu tradisional sangat unik dan memakan waktu 8 sampai 12 jam. Daging yang sudah dibungkus rapat ditanam (ditimbun) di dalam lubang tanah, lalu di atasnya ditutupi bara api dari sekam padi (kulit padi). Panas bara sekam yang stabil membuat daging matang perlahan, sangat lembut, dan bumbunya meresap sampai ke tulang. Pada zaman dahulu, Betutu adalah hidangan sakral yang hanya disajikan untuk raja-raja atau saat upacara keagamaan (Odalan)."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan cara memasak Ayam Betutu tradisional!",
            "draggables": [
              {
                "id": "d3",
                "text": "Bungkus Daun Pisang",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Tanam dalam Bara Sekam",
                "color": "#ffd5c0"
              },
              {
                "id": "d1",
                "text": "Bersihkan Ayam",
                "color": "#FFF3B0"
              },
              {
                "id": "d2",
                "text": "Masukkan Bumbu ke Perut",
                "color": "#dbe0fd"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin memasak Ayam Betutu dengan aroma asap yang harum sesuai tradisi, bahan apa yang harus kamu gunakan sebagai sumber panasnya?",
            "options": [
              "Bara Sekam Padi (Kulit Padi)",
              "Kompor Gas",
              "Kompor Listrik",
              "Oven Microwave"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa keuntungan menggunakan teknik \"tanam dalam tanah\" dengan bara sekam saat memasak Ayam Betutu?",
            "options": [
              "Supaya bumbu rempah di dalam perut ayam bisa berubah menjadi emas",
              "Agar ayam terlindungi dari debu dan kotoran",
              "Agar ayam tidak bisa ditemukan oleh orang lain saat dimasak",
              "Memberikan suhu panas yang stabil agar daging empuk dan beraroma khas"
            ],
            "correctIndex": 3,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan elemen masakan dengan fungsinya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Base Genep (Rempah)",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/base genep.png"
              },
              {
                "id": "m2",
                "text": "Daun Pisang/Pinang",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/daun pisang.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Memberikan rasa dan aroma yang kuat"
              },
              {
                "id": "z2",
                "label": "Pembungkus agar ayam tidak terkena api langsung"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan3 bali.png",
          "text": "Saat ini, Betutu menjadi kuliner yang dicari banyak wisatawan. Namun, karena proses tradisional menimbun sekam padi memakan waktu semalaman dan butuh tempat luas, banyak restoran modern memilih memasak Betutu menggunakan panci presto (tekanan tinggi) atau oven gas agar matang dalam 1-2 jam saja. Padahal, aroma asap sekam padi yang khas hilang jika dimasak dengan alat modern. Menurutmu, apakah restoran boleh menggunakan panci presto agar pembeli tidak menunggu lama, atau harus tetap mempertahankan tradisi sekam padi untuk menjaga rasa aslinya? Ini adalah pilihan penting dalam melestarikan warisan kuliner leluhur."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu memiliki restoran, setujukah kamu menggunakan panci presto agar Ayam Betutu matang hanya dalam 30 menit?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Karena teknik presto akan menghilangkan aroma asap asli dan tekstur khas Betutu"
              },
              {
                "id": "r1",
                "text": "B. Agar pelanggan tidak menunggu terlalu lama dan pelayanan lebih cepat"
              },
              {
                "id": "r3",
                "text": "C. Supaya daging ayam menjadi hancur dan mudah dimakan"
              },
              {
                "id": "r4",
                "text": "D. Karena panci presto jauh lebih murah daripada membeli sekam padi"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah resep \"Base Genep\" Bali disederhanakan agar anak muda lebih mudah memasaknya?",
            "opinions": [
              {
                "id": "op1",
                "text": "Sederhanakan"
              },
              {
                "id": "op2",
                "text": "Tetap Lengkap"
              }
            ],
            "reasons": [
              {
                "id": "r3",
                "text": "A. Karena bumbu yang terlalu banyak bisa membuat perut menjadi sakit"
              },
              {
                "id": "r1",
                "text": "B. Agar lebih banyak anak muda yang mau belajar memasak masakan tradisional"
              },
              {
                "id": "r2",
                "text": "C. Menjaga kekayaan rasa dan keaslian bumbu warisan leluhur Bali"
              },
              {
                "id": "r4",
                "text": "D. Supaya biaya membeli rempah-rempah menjadi lebih hemat"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk melestarikan kuliner tradisional Bali!",
            "draggables": [
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              },
              {
                "id": "w6",
                "text": "kebanggaan Bali",
                "color": "#e3baf4ff"
              },
              {
                "id": "w4",
                "text": "Ayam Betutu",
                "color": "#a5ec93ff"
              },
              {
                "id": "w3",
                "text": "keaslian",
                "color": "#99AAEF"
              },
              {
                "id": "w5",
                "text": "sebagai",
                "color": "#FFC7B1"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 bali.png",
          "text": "Pernahkah kamu melihat tarian Bali yang tidak menggunakan alat musik sama sekali? Itulah Tari Kecak. Pertunjukan ini sangat megah dan biasanya dimainkan oleh puluhan penari laki-laki yang duduk melingkar. Mereka menyerukan bunyi 'cak-cak-cak' sambil mengangkat tangan dengan kompak. Suara seruan penari itulah yang menjadi musik pengiring tarian ini. Di tengah lingkaran penari, dimainkan kisah drama Ramayana, terutama adegan penyelamatan putri Sinta oleh pangeran Rama."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa bunyi khas yang diteriakkan oleh para penari dalam pertunjukan Tari Kecak?",
            "options": [
              "\"Tak-tung-tak\"",
              "\"Dor-dor-dor\"",
              "\"Cak-cak-cak\"",
              "\"Ning-nong-ning\""
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang menunjukkan formasi penari Kecak yang benar!",
            "options": [
              {
                "text": "Berdiri satu-satu",
                "emoji": "🕴️",
                "image": "/assets/budayana/islands/berdiri satu-satu.png"
              },
              {
                "text": "Duduk melingkar",
                "emoji": "⭕",
                "image": "/assets/budayana/islands/duduk melingkar.png"
              },
              {
                "text": "Berpegangan tangan",
                "emoji": "🤝",
                "image": "/assets/budayana/islands/berpegangan tangan.png"
              },
              {
                "text": "Barisan memanjang",
                "emoji": "➖",
                "image": "/assets/budayana/islands/barisan memanjang.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang menjadi \"alat musik\" utama dalam mengiringi pertunjukan Tari Kecak?",
            "options": [
              "Petikan Sape",
              "Gamelan Perunggu",
              "Suara mulut para penarinya",
              "Seruling Bambu"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Tari Kecak secara tradisional menggunakan api unggun sebagai penerangan utama?",
            "options": [
              "Menciptakan suasana magis dan melambangkan perjuangan melawan kegelapan",
              "Untuk digunakan memasak setelah tarian selesai",
              "Agar penonton merasa hangat saat menonton",
              "Karena harga lampu listrik sangat mahal di Bali"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang dilambangkan oleh formasi penari laki-laki yang duduk melingkar dalam Tari Kecak?",
            "options": [
              "Pasukan tentara kera",
              "Dinding benteng istana",
              "Kobaran api yang menyala",
              "Danau yang tenang"
            ],
            "correctIndex": 0,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian2 bali.png",
          "text": "Tari Kecak yang kita kenal sekarang dikembangkan pada tahun 1930-an oleh penari Bali Wayan Limbak dan pelukis Jerman Walter Spies. Gerakan dan seruan Kecak sebenarnya diambil dari ritual kuno 'Sanghyang', yaitu tarian sakral penolak bala. Dalam pertunjukan Kecak, formasi penari laki-laki yang duduk melingkar melambangkan pasukan tentara kera (Wanara) pimpinan Hanoman yang membantu Rama mengalahkan raja raksasa Rahwana. Tarian ini mengajarkan kita tentang pentingnya kekompakan, kesetiaan, dan bahwa kebaikan akan selalu mengalahkan kejahatan."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan jalannya pertunjukan Tari Kecak!",
            "draggables": [
              {
                "id": "d2",
                "text": "Seruan 'Cak' Dimulai",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Muncul Tokoh Utama (Rama/Shinta)",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Atraksi Api di Akhir",
                "color": "#ffd5c0"
              },
              {
                "id": "d1",
                "text": "Penari Masuk Lingkaran",
                "color": "#FFF3B0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu adalah pemimpin suara dalam Tari Kecak, apa yang harus kamu lakukan agar suara 70 orang tetap kompak?",
            "options": [
              "Berteriak paling kencang sendirian",
              "Memberikan kode ketukan atau tempo yang jelas agar semua mengikuti",
              "Menggunakan peluit wasit agar terdengar nyaring",
              "Menyuruh semua penari menutup telinga mereka"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang akan terjadi jika para penari Kecak tidak mengeluarkan suara secara bersamaan (tidak kompak)?",
            "options": [
              "Penonton akan ikut berteriak",
              "Pakaian penari akan berubah warna",
              "Api unggun di tengah akan langsung padam",
              "Irama musik dan tempo gerakan penari akan menjadi kacau"
            ],
            "correctIndex": 3,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan elemen Kecak dengan maknanya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Bunyi 'Cak-cak-cak'",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/suara manusia.png"
              },
              {
                "id": "m2",
                "text": "Formasi Melingkar",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/lingkaran penari.png"
              },
              {
                "id": "m3",
                "text": "Ritual Sanghyang",
                "color": "#ffb2d8",
                "image": "/assets/budayana/islands/sanghyang.png"
              },
              {
                "id": "m4",
                "text": "Kisah Ramayana",
                "color": "#ffd5c0",
                "image": "/assets/budayana/islands/ramayana.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Musik pengiring vokal (Acapella)"
              },
              {
                "id": "z2",
                "label": "Pasukan kera (Wanara) pembela Rama"
              },
              {
                "id": "z3",
                "label": "Akar tradisi sakral penolak bala"
              },
              {
                "id": "z4",
                "label": "Cerita utama drama penyelamatan Sinta"
              }
            ],
            "correctOrder": [
              "m1",
              "m2",
              "m3",
              "m4"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian3 bali.png",
          "text": "Tari Kecak kini menjadi daya tarik wisata utama yang ditonton ribuan orang setiap hari di teater terbuka Uluwatu saat matahari terbenam. Pertunjukan ini memberikan penghasilan besar bagi warga desa adat. Namun, karena dimainkan sebagai hiburan komersial, nilai sakral dari ritual aslinya mulai memudar. Menurutmu, apakah Tari Kecak boleh terus dipentaskan setiap hari sebagai hiburan wisata, atau harus dibatasi agar tetap sakral dan dihormati? Kita harus mencari cara agar seni tradisional bisa memberi manfaat ekonomi tanpa kehilangan jiwa spiritualnya."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika Tari Kecak ditambahkan iringan musik drum agar suaranya lebih keras di panggung besar?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena drum bisa membantu memanggil lebih banyak turis untuk datang"
              },
              {
                "id": "r3",
                "text": "B. Supaya penari tidak perlu lelah berteriak 'cak-cak-cak' sepanjang waktu"
              },
              {
                "id": "r1",
                "text": "C. Agar pertunjukan terasa lebih modern dan semangat seperti konser musik"
              },
              {
                "id": "r2",
                "text": "D. Karena keunikan Kecak justru terletak pada suara manusia tanpa alat musik apa pun"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah menurutmu pementasan Kecak di siang hari (terik matahari) tetap sebagus pementasan di waktu senja?",
            "opinions": [
              {
                "id": "op1",
                "text": "Tetap Bagus"
              },
              {
                "id": "op2",
                "text": "Lebih Bagus Senja"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Waktu senja memberikan suasana magis dan mendukung filosofi cahaya api"
              },
              {
                "id": "r1",
                "text": "B. Siang hari membuat gerakan penari terlihat lebih jelas oleh penonton"
              },
              {
                "id": "r4",
                "text": "C. Waktu senja sangat berbahaya karena banyak nyamuk di area terbuka"
              },
              {
                "id": "r3",
                "text": "D. Siang hari membuat penari lebih semangat karena cuaca panas"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk melestarikan keunikan Tari Kecak!",
            "draggables": [
              {
                "id": "w4",
                "text": "Tari Kecak",
                "color": "#a5ec93ff"
              },
              {
                "id": "w5",
                "text": "sebagai",
                "color": "#FFC7B1"
              },
              {
                "id": "w3",
                "text": "kemurnian",
                "color": "#99AAEF"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w6",
                "text": "kebanggaan Bali",
                "color": "#e3baf4ff"
              },
              {
                "id": "w2",
                "text": "jaga",
                "color": "#f6bad3ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  },
  "nusa-tenggara": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah1 nusa .png",
          "text": "Di Kampung Adat Wae Rebo, Kabupaten Manggarai Barat, Pulau Flores, NTT, suku Manggarai membangun rumah adat unik bernama Mbaru Niang. Rumah ini berbentuk kerucut tinggi dan menjulang ke atas seperti gunung. Atapnya dibuat dari daun lontar yang disusun tebal hingga hampir menyentuh tanah, agar kuat menahan hujan dan angin pegunungan. Ijuk digunakan untuk membungkus tiang pondasi di dalam tanah agar tidak cepat lapuk. \n\n Rumah Mbaru Niang memiliki lima tingkat di dalamnya. Setiap tingkat memiliki kegunaan yang berbeda, mulai dari tempat tinggal hingga tempat menyimpan cadangan makanan."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama rumah adat dari Flores, Nusa Tenggara Timur yang berbentuk kerucut tinggi?",
            "options": [
              "Rumah Mbaru Niang",
              "Rumah Baileo",
              "Rumah Joglo",
              "Rumah Gadang"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang paling menunjukkan bentuk Rumah Mbaru Niang!",
            "options": [
              {
                "text": "Rumah Bulat Rendah",
                "emoji": "🍄",
                "image": "/assets/budayana/islands/rumah bulat.png"
              },
              {
                "text": "Rumah Atap Datar",
                "emoji": "➖",
                "image": "/assets/budayana/islands/rumah atap datar.png"
              },
              {
                "text": "Rumah Panggung Panjang",
                "emoji": "📏",
                "image": "/assets/budayana/islands/rumah panggung panjang.png"
              },
              {
                "text": "Rumah Tinggi Berbentuk Kerucut",
                "emoji": "📐",
                "image": "/assets/budayana/islands/atap kerucutt.png"
              }
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berapa jumlah tingkat yang ada di dalam sebuah Rumah Mbaru Niang?",
            "options": [
              "5 Tingkat",
              "3 Tingkat",
              "2 Tingkat",
              "7 Tingkat"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa atap Mbaru Niang dibuat sangat miring dan menjulang tinggi seperti gunung?",
            "options": [
              "Agar penghuni rumah bisa melihat laut dari atas",
              "Agar terlihat lebih indah dari kejauhan",
              "Supaya bisa menampung banyak orang di dalamnya",
              "Agar air hujan dan angin kencang tidak merusak rumah"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa kegunaan utama dari tingkat paling bawah (tingkat pertama) pada Mbaru Niang?",
            "options": [
              "Tempat menyimpan barang-barang kuno",
              "Tempat tinggal dan berkumpulnya keluarga",
              "Tempat untuk menjemur hasil panen",
              "Tempat menyimpan benih jagung"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah2 nusa.png",
          "text": "Struktur Mbaru Niang yang tinggi bukan tanpa alasan. Karena berada di pegunungan yang sering tertutup kabut, bentuk kerucut membantu air hujan langsung mengalir ke bawah tanpa merusak atap. Setiap tingkat di rumah ini memiliki nama dan fungsi: tingkat pertama disebut Lutur sebagai tempat tinggal dan berkumpul keluarga; tingkat kedua disebut Lobo untuk menyimpan bahan makanan dan barang sehari-hari; tingkat ketiga disebut Lentar untuk menyimpan benih tanaman seperti padi, jagung, dan kacang-kacangan; tingkat keempat disebut Lempa Rae untuk cadangan makanan saat kemarau atau gagal panen; dan tingkat paling atas disebut Hekang Kode sebagai tempat persembahan untuk leluhur. Hal ini menunjukkan betapa masyarakat Manggarai sangat memikirkan persiapan untuk masa depan."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan kegunaan tingkat Mbaru Niang dari yang paling bawah ke paling atas!",
            "draggables": [
              {
                "id": "d2",
                "text": "Simpan Barang",
                "color": "#dbe0fd"
              },
              {
                "id": "d1",
                "text": "Tempat Tinggal",
                "color": "#FFF3B0"
              },
              {
                "id": "d4",
                "text": "Stok Makanan",
                "color": "#ffd5c0"
              },
              {
                "id": "d3",
                "text": "Benih Padi",
                "color": "#ffb2d8"
              },
              {
                "id": "d5",
                "text": "Tempat Leluhur",
                "color": "#A5FFD2"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tingkat 1"
              },
              {
                "id": "z2",
                "label": "Tingkat 2"
              },
              {
                "id": "z3",
                "label": "Tingkat 3"
              },
              {
                "id": "z4",
                "label": "Tingkat 4"
              },
              {
                "id": "z5",
                "label": "Tingkat 5"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4",
              "d5"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika terjadi musim kemarau yang panjang, di tingkat manakah warga Waerebo mengambil cadangan makanan mereka?",
            "options": [
              "Tingkat kedua (Lobo)",
              "Tingkat keempat (Lempa Rae)",
              "Tingkat paling atas (Hekang Kode)",
              "Tingkat pertama (Lutur)"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa masyarakat Mbaru Niang menyimpan benih tanaman di tingkat yang cukup tinggi (tingkat ketiga)?",
            "options": [
              "Agar benih tetap kering dan aman dari gangguan tikus atau banjir",
              "Supaya benih lebih dekat dengan sinar matahari di atap",
              "Karena tradisi melarang benih ditaruh di lantai bawah",
              "Agar benih tidak bisa diambil oleh anak-anak"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bagian rumah dengan bahannya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Atap Kerucut",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/atap kerucutt.png"
              },
              {
                "id": "m2",
                "text": "Lantai Rumah",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/lantai rumah.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Daun Lontar"
              },
              {
                "id": "z2",
                "label": "Papan Kayu (Kayu Ajang)"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah3 nusa.png",
          "text": "Rumah Mbaru Niang sempat hampir punah karena proses pembuatannya sangat sulit dan lokasinya di atas gunung. Namun, berkat bantuan warga dan para arsitek, rumah ini kembali dibangun dan mendapatkan penghargaan UNESCO Asia-Pacific Awards for Cultural Heritage Conservation pada tahun 2012. Sekarang, banyak turis yang ingin menginap di Wae Rebo. Muncul sebuah pertanyaan: apakah kita boleh mengubah bagian dalam Mbaru Niang menjadi hotel modern agar tamu lebih nyaman, atau harus tetap sederhana sesuai tradisi asli? Kita harus bangga memiliki warisan budaya yang diakui dunia dan terus menjaganya."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika turis yang datang ke Waerebo semakin banyak, setujukah kamu jika dibangun tangga besi di luar Mbaru Niang agar tamu lebih mudah naik ke tingkat atas?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Agar rumah terlihat lebih modern dan canggih bagi wisatawan asing"
              },
              {
                "id": "r2",
                "text": "B. Karena tangga besi akan merusak bentuk asli dan keaslian bahan kayu Mbaru Niang"
              },
              {
                "id": "r3",
                "text": "C. Supaya warga desa tidak perlu capek memanjat tangga kayu lagi"
              },
              {
                "id": "r1",
                "text": "D. Agar lebih banyak orang tua bisa berkunjung dan melihat keindahan rumah"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah Mbaru Niang boleh dibangun ulang menggunakan kayu campuran semen atau besi agar lebih kuat dan tidak perlu diganti tiap 15-20 tahun?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar Mbaru Niang lebih tahan lama dan tidak perlu sering diperbaiki"
              },
              {
                "id": "r2",
                "text": "B. Karena akan menghilangkan keaslian sebagai warisan UNESCO"
              },
              {
                "id": "r3",
                "text": "C. Supaya biaya pemeliharaan lebih murah"
              },
              {
                "id": "r4",
                "text": "D. Karena warga kota lebih suka melihat rumah tradisional"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan untuk menjaga kelestarian Rumah Mbaru Niang!",
            "draggables": [
              {
                "id": "w2",
                "text": "rawat",
                "color": "#f6bad3ff"
              },
              {
                "id": "w3",
                "text": "warisan dunia",
                "color": "#99AAEF"
              },
              {
                "id": "w5",
                "text": "di",
                "color": "#FFC7B1"
              },
              {
                "id": "w6",
                "text": "tanah Flores",
                "color": "#e3baf4ff"
              },
              {
                "id": "w4",
                "text": "Mbaru Niang",
                "color": "#a5ec93ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan1 nusa.png",
          "text": "Pernahkah kamu mencoba daging asap dari Nusa Tenggara Timur? Namanya adalah Se'i. Kata 'Se'i' berasal dari bahasa Rote yang artinya 'daging yang disayat tipis memanjang dan diasapi'. \n\n Se'i biasanya terbuat dari daging sapi atau daging babi yang dibumbui dengan garam dan rempah. Keunikan Se'i adalah cara memasaknya yang menggunakan asap, bukan dibakar langsung di atas api. Daging Se'i memiliki aroma yang sangat harum dan warna kemerahan yang menggugah selera."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa arti nama \"Se'i\" dalam bahasa daerah di Timor, Nusa Tenggara Timur?",
            "options": [
              "Daging yang dibungkus daun",
              "Daging yang digoreng kering",
              "Daging yang direbus",
              "Daging yang diiris tipis memanjang"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar teknik memasak Se'i yang benar sesuai teks!",
            "options": [
              {
                "text": "Digoreng dalam minyak panas",
                "emoji": "🍳",
                "image": "/assets/budayana/islands/digoreng dalam minyak.png"
              },
              {
                "text": "Diasapi di atas bara kayu (panas tidak langsung)",
                "emoji": "💨",
                "image": "/assets/budayana/islands/diletakkan di atas asap kayu.png"
              },
              {
                "text": "Direbus dalam air panas",
                "emoji": "🥣",
                "image": "/assets/budayana/islands/direbus dalam air.png"
              },
              {
                "text": "Dibakar langsung di atas api",
                "emoji": "🔥",
                "image": "/assets/budayana/islands/dibakar langsung di api.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa nama kayu khusus yang digunakan untuk memberikan aroma harum pada Se'i?",
            "options": [
              "Kayu Pinus",
              "Kayu Mangga",
              "Kayu Kelapa",
              "Kayu Kosambi"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa daging Se'i dimasak dengan teknik pengasapan dalam waktu yang lama?",
            "options": [
              "Sebagai cara tradisional untuk mengawetkan daging",
              "Agar daging berubah menjadi sangat pahit",
              "Supaya daging menjadi hangus dan berwarna hitam",
              "Karena masyarakat Timor tidak memiliki kompor gas"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Sayuran apa yang biasanya menjadi pendamping khas saat memakan Se'i?",
            "options": [
              "Tumis Bunga Pepaya",
              "Wortel Rebus",
              "Sayur Lodeh",
              "Sayur Bayam Benar"
            ],
            "correctIndex": 0,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 nusa.png",
          "text": "Apa yang membuat Se'i berbeda dengan daging asap lainnya? Rahasianya adalah penggunaan Kayu Kosambi (atau Kesambi, Schleichera oleosa) sebagai sumber asapnya. Daging diletakkan di atas bara kayu kosambi dengan jarak sekitar 50 sampai 100 sentimeter, agar tidak terkena api langsung. Saat proses pengasapan berlangsung, bagian atas daging ditutup dengan daun kosambi agar panas asap tetap terjaga di sekitar daging dan aromanya meresap sempurna. Teknik pengasapan ini sebenarnya adalah cara tradisional masyarakat Pulau Timor (terutama suku Molo di Timor Tengah Selatan) untuk mengawetkan daging agar bisa disimpan dalam waktu lama. Se'i biasanya disajikan dengan tumis bunga pepaya yang sedikit pahit dan sambal lu'at yang rasanya asam segar."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan proses pembuatan Se'i tradisional!",
            "draggables": [
              {
                "id": "d1",
                "text": "Iris Daging Tipis Memanjang",
                "color": "#FFF3B0"
              },
              {
                "id": "d2",
                "text": "Beri Bumbu Garam",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Letakkan di Atas Bara Kayu Kosambi",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Tutup Daging dengan Daun Kosambi",
                "color": "#ffd5c0"
              },
              {
                "id": "d5",
                "text": "Asapi 2-3 Jam Sambil Dibalik",
                "color": "#bca89eff"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              },
              {
                "id": "z5",
                "label": "Tahap 5"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4",
              "d5"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membuat Se'i yang aromanya sangat asli, apa yang harus kamu lakukan pada daging saat sedang diasapi?",
            "options": [
              "Membiarkannya terbuka di udara bebas",
              "Menyiramnya dengan air es",
              "Menutupinya dengan daun kosambi yang segar",
              "Menaburinya dengan tepung terigu"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa daging Se'i tidak boleh terkena api langsung saat proses pengasapan?",
            "options": [
              "Supaya daging matang perlahan oleh asap dan tidak gosong",
              "Agar asap tidak keluar dari tempat panggangan",
              "Karena api langsung bisa merusak rasa garam",
              "Agar daging tidak menjadi terlalu manis"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan elemen Se'i dengan fungsinya!",
            "draggables": [
              {
                "id": "m2",
                "text": "Sambal Lu'at",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/sambel luat.png"
              },
              {
                "id": "m1",
                "text": "Kayu Kosambi",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/kayu kosambi.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Memberikan aroma asap yang unik"
              },
              {
                "id": "z2",
                "label": "Memberikan rasa asam segar penyeimbang daging"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan3 nusa.png",
          "text": "Saat ini, Se'i menjadi makanan yang sangat populer di kota-kota besar. Namun, karena permintaan yang tinggi, banyak penjual mulai menggunakan asap cair buatan atau kayu sembarangan agar prosesnya lebih cepat dan murah. Padahal, aroma asli Se'i hanya bisa dihasilkan dari kayu kosambi asli yang tumbuh di alam NTT. Apalagi, pohon kosambi di Pulau Timor mulai berkurang karena banyak ditebang untuk kebutuhan pengasapan. Muncul sebuah tantangan: apakah kita harus terus menebang pohon kosambi untuk memasak Se'i, atau mulai menanamnya kembali secara teratur? Kita harus menjaga keseimbangan alam agar kuliner lezat ini tetap bisa dinikmati selamanya."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kayu kosambi semakin langka, setujukah kamu jika penjual menggunakan \"asap cair\" buatan agar tetap bisa memproduksi Se'i?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena bahan kimia jauh lebih sehat daripada asap kayu asli"
              },
              {
                "id": "r2",
                "text": "B. Karena asap cair tidak akan bisa menyamai aroma dan kualitas kayu asli"
              },
              {
                "id": "r3",
                "text": "C. Supaya penjual tidak perlu repot mencari kayu ke hutan"
              },
              {
                "id": "r1",
                "text": "D. Agar harga Se'i tetap murah dan mudah dibeli oleh semua orang"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah pemerintah mewajibkan setiap pengusaha Se'i untuk menanam kembali pohon kosambi?",
            "opinions": [
              {
                "id": "op1",
                "text": "Harus Wajib"
              },
              {
                "id": "op2",
                "text": "Tidak Perlu"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Untuk menjaga kelestarian alam dan memastikan bumbu asli Se'i tetap ada"
              },
              {
                "id": "r4",
                "text": "B. Agar lingkungan restoran menjadi lebih sejuk dan hijau"
              },
              {
                "id": "r3",
                "text": "C. Supaya pengusaha memiliki banyak tabungan kayu di masa depan"
              },
              {
                "id": "r2",
                "text": "D. Karena menanam pohon adalah tugas petani, bukan pengusaha makanan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk menghargai kuliner dari Nusa Tenggara!",
            "draggables": [
              {
                "id": "w3",
                "text": "kelezatan",
                "color": "#99AAEF"
              },
              {
                "id": "w6",
                "text": "kebanggaan nusantara",
                "color": "#e3baf4ff"
              },
              {
                "id": "w5",
                "text": "sebagai",
                "color": "#FFC7B1"
              },
              {
                "id": "w2",
                "text": "cintai",
                "color": "#f6bad3ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w4",
                "text": "Se'i Timor",
                "color": "#a5ec93ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 nusa.png",
          "text": "Pernahkah kamu melihat alat musik yang terbuat dari daun lontar dan memiliki banyak senar? Alat musik itu bernama Sasando dari Pulau Rote, Nusa Tenggara Timur. Sasando dimainkan dengan cara dipetik menggunakan kedua tangan. Wadah melengkung dari daun lontar kering bernama 'Haik' berfungsi sebagai ruang resonansi (gema suara) agar petikan senar terdengar lebih merdu. Selain Sasando, NTT juga terkenal dengan Tari Caci dari Flores. Nama 'Caci' berasal dari kata 'Ca' (satu) dan 'Ci' (uji) yang berarti 'uji satu lawan satu'. Tarian ini dilakukan oleh dua kelompok laki-laki yang saling menguji keberanian menggunakan cambuk (pecut) dan perisai."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama alat musik tradisional dari Pulau Rote yang terbuat dari daun lontar?",
            "options": [
              "Angklung",
              "Tifa",
              "Gamelan",
              "Sasando"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar bahan alam yang digunakan sebagai wadah resonansi (pemantul suara) Sasando!",
            "options": [
              {
                "text": "Bambu Kuning",
                "emoji": "🎋",
                "image": "/assets/budayana/islands/bambu kuning.png"
              },
              {
                "text": "Tempurung Kelapa",
                "emoji": "🥥",
                "image": "/assets/budayana/islands/tempurung kelapa.png"
              },
              {
                "text": "Daun Lontar Kering",
                "emoji": "🍂",
                "image": "/assets/budayana/islands/daun lontar kering.png"
              },
              {
                "text": "Kulit Sapi",
                "emoji": "🐂",
                "image": "/assets/budayana/islands/kulit hewan.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Bagaimana cara memainkan alat musik Sasando agar menghasilkan alunan musik yang indah?",
            "options": [
              "Dipetik dengan kedua tangan",
              "Digesek seperti biola",
              "Ditiup dengan kuat",
              "Dipukul dengan pemukul kayu"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa penari Caci menggunakan perisai dari kulit kerbau saat melakukan tarian?",
            "options": [
              "Karena perisai tersebut sangat ringan untuk dibawa lari",
              "Untuk melindungi diri dari cambukan lawan",
              "Sebagai tempat untuk menaruh makanan",
              "Agar terlihat lebih gagah di depan penonton"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, apa fungsi utama dari Tari Caci bagi masyarakat di Flores?",
            "options": [
              "Pertunjukan komedi untuk menghibur anak-anak",
              "Upacara syukur hasil panen dan simbol kedewasaan",
              "Lomba lari cepat antar desa",
              "Untuk mencari siapa yang paling hebat berkelahi"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian2 nusa.png",
          "text": "Mengapa daun lontar sangat penting bagi alat musik Sasando? Daun lontar bukan hanya hiasan, tetapi merupakan ruang gema (resonansi) alami. Tanpa daun lontar, suara petikan senar tidak akan terdengar nyaring. Sasando memiliki dua jenis utama: Sasando Engkel dengan 28 senar untuk lagu sederhana, dan Sasando Dobel (Double) dengan 56 senar untuk memainkan lagu dengan nada yang lebih banyak dan kompleks. Dalam Tari Caci, setiap gerakan sepasang penari (satu menyerang, satu bertahan) diiringi oleh irama bunyi Gong dan Gendang. Tarian ini bukan untuk saling menyakiti, melainkan sebuah upacara syukur atas hasil panen yang disebut Hang Woja, juga simbol kedewasaan dan sportivitas bagi laki-laki Manggarai di Flores."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan proses pembuatan Sasando secara sederhana!",
            "draggables": [
              {
                "id": "d1",
                "text": "Bersihkan Daun Lontar",
                "color": "#FFF3B0"
              },
              {
                "id": "d2",
                "text": "Jemur Daun Hingga Kering",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Anyam Menjadi Wadah Haik",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Pasang Bambu dengan Senar",
                "color": "#ffd5c0"
              },
              {
                "id": "d5",
                "text": "Pasang Wadah Haik Mengelilingi Bambu",
                "color": "#bca89eff"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Tahap 1"
              },
              {
                "id": "z2",
                "label": "Tahap 2"
              },
              {
                "id": "z3",
                "label": "Tahap 3"
              },
              {
                "id": "z4",
                "label": "Tahap 4"
              },
              {
                "id": "z5",
                "label": "Tahap 5"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4",
              "d5"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin memainkan lagu dengan nada yang sangat banyak menggunakan Sasando, Sasando jenis apa yang harus kamu pilih?",
            "options": [
              "Sasando dengan 2 senar saja",
              "Sasando dengan banyak senar (Sasando Dobel)",
              "Sasando yang dibuat dari plastik",
              "Sasando tanpa senar sama sekali"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa yang akan terjadi pada suara Sasando jika daun lontarnya robek atau dilepas?",
            "options": [
              "Suaranya menjadi kecil dan tidak merdu lagi",
              "Suaranya akan berubah menjadi suara gitar",
              "Senar Sasando akan putus secara otomatis",
              "Suaranya akan terdengar sangat keras"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan elemen seni dengan simbolnya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Daun Lontar",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/daun lontar.png"
              },
              {
                "id": "m2",
                "text": "Cambuk dan Perisai",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/cambuk perisai.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Ruang gema alami suara Sasando"
              },
              {
                "id": "z2",
                "label": "Simbol sportivitas dan keberanian"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian3 nusa.png",
          "text": "Saat ini, Sasando telah berkembang menjadi Sasando elektrik yang bisa dihubungkan ke pengeras suara besar. Hal ini memudahkan Sasando dimainkan di panggung konser dunia. Namun, pohon lontar (Borassus flabellifer) di NTT yang dijuluki 'pohon kehidupan' mulai berkurang karena banyak ditebang. Jika pohon lontar hilang, kita tidak bisa lagi membuat Sasando tradisional yang asli. Apakah menurutmu Sasando elektrik sudah cukup untuk melestarikan budaya, atau kita harus tetap mewajibkan penanaman pohon lontar agar Sasando asli tidak punah? Kita harus menjaga keseimbangan antara kemajuan zaman dan kelestarian alam."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika wadah daun lontar pada Sasando diganti dengan plastik agar lebih awet dan mudah dibersihkan?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar Sasando lebih tahan lama dan tidak mudah rusak jika terkena air"
              },
              {
                "id": "r4",
                "text": "B. Karena plastik memiliki warna-warni yang lebih menarik daripada daun kering"
              },
              {
                "id": "r3",
                "text": "C. Supaya harga Sasando menjadi lebih murah bagi masyarakat"
              },
              {
                "id": "r2",
                "text": "D. Karena plastik tidak dapat menghasilkan getaran suara seindah daun lontar asli"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah Tari Caci tetap menggunakan cambuk asli meskipun berisiko melukai penari?",
            "opinions": [
              {
                "id": "op1",
                "text": "Tetap Cambuk Asli"
              },
              {
                "id": "op2",
                "text": "Ganti Cambuk Kain"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Menjaga nilai sejarah, makna sportivitas, dan keberanian asli dari tarian tersebut"
              },
              {
                "id": "r2",
                "text": "B. Agar penari lebih aman dan tidak terluka, terutama untuk pertunjukan wisata"
              },
              {
                "id": "r3",
                "text": "C. Supaya tarian bisa diikuti oleh anak-anak kecil di sekolah"
              },
              {
                "id": "r4",
                "text": "D. Karena cambuk kain jauh lebih murah daripada cambuk kulit asli"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk bangga pada seni musik Nusa Tenggara!",
            "draggables": [
              {
                "id": "w2",
                "text": "banggakan",
                "color": "#f6bad3ff"
              },
              {
                "id": "w3",
                "text": "petikan Sasando",
                "color": "#99AAEF"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w4",
                "text": "sebagai",
                "color": "#a5ec93ff"
              },
              {
                "id": "w6",
                "text": "dari NTT",
                "color": "#e3baf4ff"
              },
              {
                "id": "w5",
                "text": "suara indah",
                "color": "#FFC7B1"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  },
  "jawa": {
    "rumah": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah1 jawa.png",
          "text": "Pernahkah kamu melihat rumah adat Jawa yang atapnya sangat tinggi di bagian tengah? Itu adalah Rumah Joglo. Kata 'Joglo' berasal dari kata 'Tajug Loro' yang berarti dua gunung. Bentuk atapnya yang menjulang meniru bentuk gunung sebagai simbol keagungan. Rumah Joglo ditopang oleh empat tiang kayu utama di bagian tengah yang disebut Soko Guru. Bagian depan rumah ini biasanya berupa pendopo terbuka yang luas untuk menyambut tamu, menunjukkan sifat ramah dan terbuka masyarakat Jawa."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama rumah adat dari Pulau Jawa yang memiliki ciri khas empat tiang utama di tengahnya?",
            "options": [
              "Rumah Gadang",
              "Rumah Joglo",
              "Rumah Kebaya",
              "Rumah Baduy"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar yang menunjukkan bentuk atap \"Tajug\" (Joglo) yang benar!",
            "options": [
              {
                "text": "Atap Trapesium Menjulang",
                "emoji": "🏠",
                "image": "/assets/budayana/islands/atap trapesium menjulang.png"
              },
              {
                "text": "Atap Datar",
                "emoji": "➖",
                "image": "/assets/budayana/islands/atap datar.png"
              },
              {
                "text": "Atap Kerucut",
                "emoji": "📐",
                "image": "/assets/budayana/islands/atap kerucut.png"
              },
              {
                "text": "Atap Tanduk",
                "emoji": "🐂",
                "image": "/assets/budayana/islands/atap tanduk.png"
              }
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa sebutan untuk empat tiang utama yang sangat kokoh pada Rumah Joglo?",
            "options": [
              "Soko Guru",
              "Gonjong",
              "Pendopo",
              "Tumpang Sari"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa fungsi utama dari bagian \"Pendopo\" pada Rumah Joglo?",
            "options": [
              "Sebagai tempat menyimpan hasil panen",
              "Sebagai tempat tidur tamu yang datang",
              "Sebagai tempat terbuka untuk pertemuan warga",
              "Sebagai tempat untuk memasak makanan"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa arti kata 'Tajug Loro' yang menjadi asal mula nama Rumah Joglo?",
            "options": [
              "Dua Tiang",
              "Dua Gunung",
              "Dua Pintu",
              "Dua Jendela"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah2 jawa.png",
          "text": "Rumah Joglo memiliki susunan tata ruang yang sangat teratur dari luar ke dalam. Bagian depan adalah Pendopo yang terbuka untuk umum. Di belakangnya ada Pringgitan, yaitu ruang perantara yang sering digunakan untuk menggelar pertunjukan wayang kulit. Bagian paling dalam adalah Omah Dalem (ruang keluarga) yang tertutup rapat dan sakral. Di dalam Omah Dalem terdapat tiga kamar (senthong). Senthong tengah, yang disebut Krobongan, adalah bilik paling suci yang dilengkapi ranjang dan tirai, bukan untuk ditiduri melainkan sebagai tempat menyimpan pusaka dan pemujaan kepada Dewi Sri (dewi kesuburan)."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan bagian Rumah Joglo dari yang paling depan ke paling belakang!",
            "draggables": [
              {
                "id": "d1",
                "text": "Halaman",
                "color": "#FFF3B0"
              },
              {
                "id": "d2",
                "text": "Pendopo",
                "color": "#dbe0fd"
              },
              {
                "id": "d3",
                "text": "Pringgitan",
                "color": "#ffb2d8"
              },
              {
                "id": "d4",
                "text": "Omah Dalem",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Bagian 1"
              },
              {
                "id": "z2",
                "label": "Bagian 2"
              },
              {
                "id": "z3",
                "label": "Bagian 3"
              },
              {
                "id": "z4",
                "label": "Bagian 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membangun Rumah Joglo yang sangat kokoh dan tahan lama, jenis kayu apa yang paling tepat dipilih sesuai tradisi?",
            "options": [
              "Kayu Sengon yang ringan",
              "Kayu Jati tua yang kuat",
              "Batang pohon kelapa",
              "Papan kayu lapis (triplek)"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa susunan kayu \"Tumpang Sari\" pada atap Joglo dibuat bertingkat-tingkat?",
            "options": [
              "Agar atap tidak mudah bocor saat hujan",
              "Agar burung tidak bisa bersarang di atap",
              "Untuk memberikan kekuatan struktur dan keindahan",
              "Supaya cahaya matahari tidak masuk ke dalam"
            ],
            "correctIndex": 2,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan ruangan Rumah Joglo dengan fungsinya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Pendopo",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/pendopo.png"
              },
              {
                "id": "m2",
                "text": "Pringgitan",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/pringgitan.png"
              },
              {
                "id": "m3",
                "text": "Omah Dalem",
                "color": "#ffb2d8",
                "image": "/assets/budayana/islands/omah dalem.png"
              },
              {
                "id": "m4",
                "text": "Krobongan",
                "color": "#ffd5c0",
                "image": "/assets/budayana/islands/krobongan.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Ruang publik terbuka untuk menerima tamu"
              },
              {
                "id": "z2",
                "label": "Ruang perantara tempat pertunjukan wayang"
              },
              {
                "id": "z3",
                "label": "Bagian dalam privasi keluarga yang sakral"
              },
              {
                "id": "z4",
                "label": "Bilik suci untuk pusaka & Dewi Sri"
              }
            ],
            "correctOrder": [
              "m1",
              "m2",
              "m3",
              "m4"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/rumah3 jawa.png",
          "text": "Membangun rumah Joglo asli membutuhkan kayu jati tua yang sangat besar dan berkualitas tinggi untuk dijadikan Soko Guru. Kini, kayu jati raksasa semakin langka dan harganya sangat mahal, sehingga hanya sedikit orang yang mampu membangun Joglo tradisional. Banyak arsitek mulai mengganti tiang kayu jati dengan pilar beton atau besi agar lebih murah dan tahan rayap. Menurutmu, apakah rumah Joglo bertiang beton masih bisa disebut sebagai pelestarian budaya, atau kita harus menanam kembali hutan jati agar generasi depan bisa melihat Joglo yang sesungguhnya? Ini adalah tantangan nyata dalam menjaga warisan arsitektur Nusantara."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika kamu tinggal di lahan sempit namun ingin memiliki nuansa Joglo, apakah kamu setuju jika ukuran Pendopo dibuat sangat kecil?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena yang penting adalah bentuk atapnya untuk menjaga identitas"
              },
              {
                "id": "r1",
                "text": "B. Pendopo harus luas agar fungsi kebersamaan tidak hilang"
              },
              {
                "id": "r2",
                "text": "C. Supaya biaya pembangunan menjadi lebih murah"
              },
              {
                "id": "r3",
                "text": "D. Agar bagian dalam rumah menjadi lebih luas"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r4"
              },
              {
                "opinionId": "op2",
                "reasonId": "r1"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah penggunaan keramik modern untuk lantai Rumah Joglo saat ini lebih baik daripada lantai tanah/semen biasa?",
            "opinions": [
              {
                "id": "op1",
                "text": "Lebih Baik"
              },
              {
                "id": "op2",
                "text": "Kurang Baik"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Agar rumah lebih bersih, mudah dirawat, dan terlihat modern"
              },
              {
                "id": "r4",
                "text": "B. Lantai semen/tanah menjaga kesan alami dan tradisional"
              },
              {
                "id": "r2",
                "text": "C. Supaya rumah terlihat seperti rumah di kota besar"
              },
              {
                "id": "r3",
                "text": "D. Keramik sangat sulit pecah jika terkena tiang kayu"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r4"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah pesan untuk mengajak orang lain bangga dengan Rumah Joglo!",
            "draggables": [
              {
                "id": "w3",
                "text": "Rumah Joglo",
                "color": "#99AAEF"
              },
              {
                "id": "w6",
                "text": "budaya Jawa",
                "color": "#e3baf4ff"
              },
              {
                "id": "w4",
                "text": "sebagai",
                "color": "#a5ec93ff"
              },
              {
                "id": "w2",
                "text": "lestarikan",
                "color": "#f6bad3ff"
              },
              {
                "id": "w5",
                "text": "kebanggaan",
                "color": "#FFC7B1"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "makanan": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 jawa.png",
          "text": "Pernahkah kamu mencicipi makanan manis berwarna cokelat dari Yogyakarta? Namanya adalah Gudeg. Bahan utama Gudeg adalah Nangka Muda yang dipotong kecil-kecil. Nangka ini dimasak bersama santan, gula jawa, dan daun jati agar warnanya menjadi cokelat gelap yang cantik. \n\n Gudeg biasanya disajikan dengan nasi, telur pindang, dan ayam. Rasa utama dari Gudeg adalah manis dan gurih, yang sangat disukai oleh masyarakat di Pulau Jawa."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa bahan utama yang digunakan untuk membuat masakan Gudeg?",
            "options": [
              "Daging Ikan",
              "Buah Pisang Muda",
              "Buah Nangka Muda",
              "Buah Pepaya"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar bahan alami yang memberikan rasa manis dan warna cokelat pada Gudeg!",
            "options": [
              {
                "text": "Merica Bubuk",
                "emoji": "🧂",
                "image": "/assets/budayana/islands/merica bubuk.png"
              },
              {
                "text": "Madu Lebah",
                "emoji": "🍯",
                "image": "/assets/budayana/islands/madu lebah.png"
              },
              {
                "text": "Gula Jawa/Merah",
                "emoji": "🤎",
                "image": "/assets/budayana/islands/gula merah.png"
              },
              {
                "text": "Garam Dapur",
                "emoji": "🧂",
                "image": "/assets/budayana/islands/garam dapur.png"
              }
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Kota manakah yang sangat terkenal dengan sebutan \"Kota Gudeg\" di Pulau Jawa?",
            "options": [
              "Surabaya",
              "Yogyakarta",
              "Bandung",
              "Jakarta"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa daun jati sering dimasukkan saat memasak Gudeg?",
            "options": [
              "Agar rasa Gudeg menjadi sangat pedas",
              "Sebagai pewarna alami agar Gudeg berwarna cokelat",
              "Sebagai pengganti nasi saat makan",
              "Agar nangka muda tidak cepat hancur"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, rasa utama yang akan kamu rasakan saat memakan Gudeg adalah...",
            "options": [
              "Pahit dan Sepat",
              "Asin sekali",
              "Manis dan Gurih",
              "Asam dan Pedas"
            ],
            "correctIndex": 2,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan2 jawa.png",
          "text": "Mengapa memasak Gudeg membutuhkan waktu yang sangat lama, bahkan bisa seharian? Ternyata, api yang digunakan harus kecil agar bumbu santan dan gula jawa meresap sempurna ke dalam serat nangka muda. Proses ini melambangkan kesabaran dan ketelitian masyarakat Jawa dalam mengerjakan sesuatu. \n\n Selain itu, daun jati yang dimasukkan saat memasak bukan untuk dimakan, melainkan berfungsi sebagai pewarna alami agar Gudeg terlihat cokelat kemerahan tanpa bahan kimia."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan proses memasak Gudeg yang benar!",
            "draggables": [
              {
                "id": "d3",
                "text": "Masak Api Kecil Seharian",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Campur Santan & Bumbu",
                "color": "#dbe0fd"
              },
              {
                "id": "d1",
                "text": "Potong Nangka Muda",
                "color": "#FFF3B0"
              },
              {
                "id": "d4",
                "text": "Gudeg Cokelat Matang",
                "color": "#ffd5c0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Langkah 1"
              },
              {
                "id": "z2",
                "label": "Langkah 2"
              },
              {
                "id": "z3",
                "label": "Langkah 3"
              },
              {
                "id": "z4",
                "label": "Langkah 4"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika kamu ingin membuat Gudeg dengan cara tradisional, wadah apa yang paling tepat digunakan untuk memasaknya agar rasanya lebih sedap?",
            "options": [
              "Ember Bambu",
              "Kendil (Kuali Tanah Liat)",
              "Kaleng Besi",
              "Panci Plastik"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa memasak Gudeg harus menggunakan api yang kecil dalam waktu yang lama?",
            "options": [
              "Karena nangka muda sangat takut dengan api besar",
              "Agar kayu bakar tidak cepat habis",
              "Supaya warna Gudeg tetap putih bersih",
              "Agar bumbu meresap sempurna ke dalam serat nangka"
            ],
            "correctIndex": 3,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan bahan Gudeg dengan fungsinya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Santan Kelapa",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/santan kelapa.png"
              },
              {
                "id": "m2",
                "text": "Gula Jawa",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/gula merah.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Memberikan Rasa Gurih"
              },
              {
                "id": "z2",
                "label": "Memberikan Rasa Manis dan Warna"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/makanan3 jawa.png",
          "text": "Saat ini, Gudeg tidak hanya dijual di kendil (panci tanah liat), tetapi juga sudah ada yang dikemas dalam kaleng agar bisa dibawa sebagai oleh-oleh ke luar negeri. Namun, ada yang merasa bahwa Gudeg kalengan rasanya berbeda dengan Gudeg segar yang baru matang. \n\n nMuncul sebuah diskusi: apakah kita harus tetap mempertahankan cara menjual Gudeg secara tradisional di warung lesehan, atau fokus pada penjualan Gudeg kemasan modern agar lebih terkenal? Kita harus menjaga agar cita rasa asli Gudeg tetap dicintai oleh generasi mendatang."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika resep Gudeg diubah menjadi sangat pedas agar disukai anak muda zaman sekarang?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Agar Gudeg bisa bersaing dengan makanan luar negeri yang pedas"
              },
              {
                "id": "r3",
                "text": "B. Supaya orang tidak lagi menganggap Gudeg sebagai makanan manis"
              },
              {
                "id": "r2",
                "text": "C. Karena rasa asli Gudeg adalah manis, mengubahnya akan menghilangkan ciri khasnya"
              },
              {
                "id": "r1",
                "text": "D. Agar Gudeg lebih modern dan mengikuti selera pasar saat ini"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Apakah menjual Gudeg dalam kemasan kaleng adalah ide yang bagus untuk melestarikan budaya?",
            "opinions": [
              {
                "id": "op1",
                "text": "Bagus"
              },
              {
                "id": "op2",
                "text": "Kurang Bagus"
              }
            ],
            "reasons": [
              {
                "id": "r1",
                "text": "A. Ya, karena dengan begitu Gudeg bisa dinikmati oleh orang di seluruh dunia"
              },
              {
                "id": "r2",
                "text": "B. Tidak, karena suasana makan Gudeg yang asli adalah di warung lesehan"
              },
              {
                "id": "r3",
                "text": "C. Ya, agar kita tidak perlu lagi belajar cara memasak Gudeg sendiri"
              },
              {
                "id": "r4",
                "text": "D. Tidak, karena kaleng besi bisa merusak rasa nangka muda"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk menjaga warisan kuliner Jawa!",
            "draggables": [
              {
                "id": "w2",
                "text": "lestarikan",
                "color": "#f6bad3ff"
              },
              {
                "id": "w3",
                "text": "Gudeg",
                "color": "#99AAEF"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w5",
                "text": "makanan khas",
                "color": "#FFC7B1"
              },
              {
                "id": "w6",
                "text": "kebanggaan Jawa",
                "color": "#e3baf4ff"
              },
              {
                "id": "w4",
                "text": "sebagai",
                "color": "#a5ec93ff"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    },
    "pakaian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/pakaian1 jawa.png",
          "text": "Pernahkah kamu melihat pengantin pria Jawa Tengah yang penampilannya sangat gagah dan rapi? Pakaian adat resminya disebut Jawi Jangkep. Pakaian ini sangat sarat makna filosofis. Atasannya berupa jas tertutup yang disebut Beskap. Uniknya, kancing Beskap diletakkan di sisi kiri dan kanan, bukan lurus di tengah. Sebagai pelengkap, pria memakai penutup kepala dari kain batik yang disebut Blangkon, serta menyelipkan Keris (senjata pusaka) di sabuk bagian belakang. Pakaian ini membuat pemakainya terlihat berwibawa dan sopan."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama pakaian adat resmi untuk pria dari daerah Jawa Tengah?",
            "options": [
              "Baju Bodo",
              "Jawi Jangkep",
              "Ulee Balang",
              "Pakaian Pangsi"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Apa makna dari letak kancing Beskap yang menyamping ke kiri dan kanan?",
            "options": [
              "Melambangkan kekayaan",
              "Melambangkan tindakan yang cermat dan berhati-hati",
              "Melambangkan kecepatan berlari",
              "Melambangkan kekuatan fisik"
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar penutup kepala khas pria Jawa yang memiliki mondolan di bagian belakangnya!",
            "options": [
              {
                "text": "Topi Koboi",
                "emoji": "🤠",
                "image": "/assets/budayana/islands/topi koboi.png"
              },
              {
                "text": "Blangkon",
                "emoji": "👳",
                "image": "/assets/budayana/islands/blangkon.png"
              },
              {
                "text": "Peci Hitam",
                "emoji": "🧢",
                "image": "/assets/budayana/islands/peci hitam.png"
              },
              {
                "text": "Udeng Bali",
                "emoji": "🧣",
                "image": "/assets/budayana/islands/udeng bali.png"
              }
            ],
            "correctIndex": 1,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Senjata tradisional apakah yang biasanya diselipkan di bagian belakang sabuk pada pakaian Jawi Jangkep?",
            "options": [
              "Golok",
              "Rencong",
              "Keris",
              "Mandau"
            ],
            "correctIndex": 2,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa kancing pada Beskap tidak dipasang lurus di tengah seperti kemeja biasa?",
            "options": [
              "Karena penjahit kehabisan bahan kain di tengah",
              "Mengajarkan pemakainya agar selalu berhati-hati dan tidak tergesa-gesa dalam mengambil keputusan",
              "Agar mudah dilepas saat cuaca sedang panas",
              "Supaya terlihat sama dengan seragam tentara Belanda"
            ],
            "correctIndex": 1,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/pakaian2 jawa.png",
          "text": "Setiap bagian dari Jawi Jangkep mengandung ajaran hidup leluhur Jawa. Kancing Beskap yang letaknya menyamping melambangkan bahwa segala tindakan harus diperhitungkan dengan cermat dan berhati-hati. Blangkon memiliki tonjolan (mondolan) di bagian belakang yang melambangkan kemampuan mengendalikan emosi dan menutupi aib atau rahasia. Sementara itu, Keris yang diselipkan di bagian punggung melambangkan keberanian dan tanggung jawab sebagai pelindung keluarga, sekaligus berfungsi sebagai penolak bala secara spiritual. Pemakai Jawi Jangkep diharapkan menjadi manusia yang bijaksana."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Pasangkan kelengkapan Jawi Jangkep dengan maknanya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Beskap (Kancing Menyamping)",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/beskap.png"
              },
              {
                "id": "m2",
                "text": "Blangkon (Mondolan)",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/blangkon.png"
              },
              {
                "id": "m3",
                "text": "Keris di Punggung",
                "color": "#ffb2d8",
                "image": "/assets/budayana/islands/keris.png"
              },
              {
                "id": "m4",
                "text": "Kain Jarik (Wiru)",
                "color": "#ffd5c0",
                "image": "/assets/budayana/islands/kain jarik.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Simbol kehati-hatian dalam bertindak"
              },
              {
                "id": "z2",
                "label": "Pengendalian emosi & penyimpan rahasia"
              },
              {
                "id": "z3",
                "label": "Tanggung jawab, keberanian & tolak bala"
              },
              {
                "id": "z4",
                "label": "Kesabaran dan keanggunan dalam melangkah"
              }
            ],
            "correctOrder": [
              "m1",
              "m2",
              "m3",
              "m4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Apa arti dari tonjolan (mondolan) di bagian belakang Blangkon gaya Yogyakarta?",
            "options": [
              "Tempat untuk menyimpan uang koin",
              "Simbol kemampuan menahan emosi dan menyimpan rahasia dengan rapat",
              "Bantalan agar kepala tidak sakit saat bersandar",
              "Hiasan semata agar terlihat lebih tinggi"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa Keris pusaka diselipkan di bagian punggung (belakang), bukan di depan perut?",
            "options": [
              "Menandakan kerendahan hati dan pertahanan terakhir tanpa pamer",
              "Agar tidak mengganggu saat sedang makan di meja",
              "Karena keris terlalu berat jika ditaruh di depan",
              "Supaya musuh tidak bisa melihat senjata yang dibawa"
            ],
            "correctIndex": 0,
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/pakaian3 jawa.png",
          "text": "Memakai Jawi Jangkep yang lengkap dan benar membutuhkan waktu lama, karena kain jarik (bawahan batik) harus dililitkan dengan ketat sehingga langkah kaki menjadi kecil dan pelan. Di era modern yang serba cepat, banyak anak muda merasa pakaian ini tidak praktis. Desainer kini membuat Beskap dan Blangkon instan (beresleting) agar mudah dipakai seperti pakaian biasa. Menurutmu, apakah modifikasi instan ini bagus agar anak muda mau memakai pakaian adat, atau justru menghilangkan nilai kesabaran dan keanggunan dari tradisi aslinya? Ini adalah pertanyaan penting dalam evolusi busana tradisional."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Jika seorang desainer membuat Beskap dan Blangkon instan beresleting agar praktis dipakai anak muda, bagaimana pendapatmu?",
            "opinions": [
              {
                "id": "op1",
                "text": "Sangat Bagus"
              },
              {
                "id": "op2",
                "text": "Kurang Tepat"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Karena bisa menghilangkan filosofi kesabaran dan proses dari tradisi aslinya"
              },
              {
                "id": "r1",
                "text": "B. Agar pakaian adat lebih disukai, mudah dipakai, dan tetap lestari di era modern"
              },
              {
                "id": "r2",
                "text": "C. Supaya harga pakaian adat menjadi sangat mahal"
              },
              {
                "id": "r3",
                "text": "D. Agar bahan kain yang digunakan lebih sedikit"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r4"
              }
            ],
            "xp": 30
          }
        ]
      }
    },
    "tarian": {
      "1": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian1 jawa.png",
          "text": "Pernahkah kamu mendengar suara dentuman alat musik dari perunggu atau besi di pertunjukan wayang? Alat musik itu disebut Gamelan. Gamelan terdiri dari berbagai instrumen seperti Gong, Kenong, Saron, dan Bonang. \n\n Cara memainkannya adalah dengan cara dipukul menggunakan pemukul khusus. Gamelan biasanya digunakan untuk mengiringi tarian tradisional Jawa, seperti Tari Serimpi atau Tari Wayang. Gerakan tari Jawa dikenal sangat halus dan mengikuti tempo suara gamelan yang tenang."
        },
        "questions": [
          {
            "type": "multiple_choice",
            "text": "Apa nama seperangkat alat musik tradisional dari Jawa yang dimainkan dengan cara dipukul?",
            "options": [
              "Sasando",
              "Angklung",
              "Kolintang",
              "Gamelan"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "picture_selection",
            "text": "Pilih gambar alat musik Gamelan yang berfungsi sebagai penutup nada atau gong besar!",
            "options": [
              {
                "text": "Gitar",
                "emoji": "🎸",
                "image": "/assets/budayana/islands/gitar.png"
              },
              {
                "text": "Suling",
                "emoji": "🎋",
                "image": "/assets/budayana/islands/suling.png"
              },
              {
                "text": "Biola",
                "emoji": "🎻",
                "image": "/assets/budayana/islands/biola.png"
              },
              {
                "text": "Gong Gantung",
                "emoji": "🔔",
                "image": "/assets/budayana/islands/gong gantung.png"
              }
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Bahan logam apa yang biasanya digunakan untuk membuat alat musik gamelan berkualitas tinggi?",
            "options": [
              "Perunggu atau Besi",
              "Aluminium dan Seng",
              "Plastik dan Karet",
              "Emas dan Perak"
            ],
            "correctIndex": 0,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa gerakan penari Jawa terlihat sangat halus dan lambat pada saat tertentu?",
            "options": [
              "Karena penari sedang merasa mengantuk",
              "Agar pertunjukan tari berlangsung sangat lama",
              "Karena kostum penari sangat berat untuk dibawa lari",
              "Mengikuti tempo musik gamelan yang tenang dan lembut"
            ],
            "correctIndex": 3,
            "xp": 20
          },
          {
            "type": "multiple_choice",
            "text": "Berdasarkan teks, apa yang menjadi ciri khas dari kelompok musik Gamelan?",
            "options": [
              "Hanya terdiri dari satu alat musik saja",
              "Pemainnya harus berteriak kencang saat bermain",
              "Musiknya selalu dimainkan dengan sangat cepat dan keras",
              "Terdiri dari berbagai instrumen yang dimainkan bersama secara selaras"
            ],
            "correctIndex": 3,
            "xp": 20
          }
        ]
      },
      "2": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian2 jawa.png",
          "text": "Musik Gamelan dan tarian Jawa melambangkan keselarasan hidup. Di dalam kelompok gamelan, tidak ada satu alat musik yang menonjol sendiri; semua instrumen harus berbunyi bersamaan agar tercipta nada yang indah. \n\n Pemimpin irama dalam gamelan adalah Kendang. Kendang bertugas mengatur cepat atau lambatnya gerakan penari. Jika kendang dipukul cepat, maka penari akan bergerak lincah, dan jika pelan, penari akan bergerak dengan sangat halus dan anggun."
        },
        "questions": [
          {
            "type": "drag_drop",
            "text": "Urutkan alat musik gamelan dari yang ukurannya terkecil hingga terbesar!",
            "draggables": [
              {
                "id": "d4",
                "text": "Gong",
                "color": "#ffd5c0"
              },
              {
                "id": "d3",
                "text": "Kenong",
                "color": "#ffb2d8"
              },
              {
                "id": "d2",
                "text": "Bonang",
                "color": "#dbe0fd"
              },
              {
                "id": "d1",
                "text": "Saron",
                "color": "#FFF3B0"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Terkecil"
              },
              {
                "id": "z2",
                "label": "Sedang"
              },
              {
                "id": "z3",
                "label": "Besar"
              },
              {
                "id": "z4",
                "label": "Terbesar"
              }
            ],
            "correctOrder": [
              "d1",
              "d2",
              "d3",
              "d4"
            ],
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Jika penari ingin mempercepat gerakannya, alat musik gamelan mana yang harus memberikan kode melalui suaranya?",
            "options": [
              "Gong",
              "Kendang",
              "Gambang",
              "Suling"
            ],
            "correctIndex": 1,
            "xp": 25
          },
          {
            "type": "multiple_choice",
            "text": "Mengapa kerja sama tim sangat penting dalam memainkan Gamelan menurut teks?",
            "options": [
              "Agar tercipta nada yang indah dan selaras tanpa ada yang saling mendahului",
              "Karena alat musik gamelan sangat berat jika dimainkan sendiri",
              "Agar pemain musik tidak merasa bosan",
              "Supaya penonton memberikan uang yang banyak"
            ],
            "correctIndex": 0,
            "xp": 25
          },
          {
            "type": "drag_drop",
            "text": "Pasangkan alat musik dengan perannya!",
            "draggables": [
              {
                "id": "m1",
                "text": "Kendang",
                "color": "#FFF3B0",
                "image": "/assets/budayana/islands/kendang.png"
              },
              {
                "id": "m2",
                "text": "Gong",
                "color": "#D4DCFF",
                "image": "/assets/budayana/islands/gong gantung.png"
              }
            ],
            "dropZones": [
              {
                "id": "z1",
                "label": "Mengatur tempo dan irama"
              },
              {
                "id": "z2",
                "label": "Menandai akhir dari sebuah rangkaian nada"
              }
            ],
            "correctOrder": [
              "m1",
              "m2"
            ],
            "xp": 25
          }
        ]
      },
      "3": {
        "literacy": {
          "image": "/assets/budayana/islands/tarian3 jawa.png",
          "text": "Saat ini, pembuatan alat musik gamelan asli dari perunggu membutuhkan biaya yang sangat mahal dan tenaga ahli yang sedikit. Banyak sekolah mulai menggunakan gamelan digital atau rekaman kaset untuk latihan menari. Namun, para seniman berpendapat bahwa getaran suara gamelan asli memberikan perasaan yang berbeda bagi penari. \n\n Apakah menurutmu latihan menari dengan rekaman kaset sudah cukup, atau setiap sekolah tetap harus memiliki set gamelan asli? Kita harus memikirkan cara agar seni musik ini tetap dipelajari dengan cara yang benar."
        },
        "questions": [
          {
            "type": "opinion_reason",
            "text": "Setujukah kamu jika alat musik gamelan diganti dengan piano atau keyboard agar lebih praktis?",
            "opinions": [
              {
                "id": "op1",
                "text": "Setuju"
              },
              {
                "id": "op2",
                "text": "Tidak Setuju"
              }
            ],
            "reasons": [
              {
                "id": "r2",
                "text": "A. Karena piano tidak bisa menghasilkan suara dan getaran khas dari logam perunggu gamelan"
              },
              {
                "id": "r4",
                "text": "B. Karena piano lebih mudah dipelajari daripada memainkan bonang"
              },
              {
                "id": "r3",
                "text": "C. Supaya pemain musik tidak perlu lagi membawa banyak alat yang berat"
              },
              {
                "id": "r1",
                "text": "D. Agar musik tradisional Jawa terdengar lebih seperti musik modern/pop"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "opinion_reason",
            "text": "Haruskah setiap siswa di sekolah belajar menari Jawa meskipun mereka merasa gerakannya terlalu lambat?",
            "opinions": [
              {
                "id": "op1",
                "text": "Harus Belajar"
              },
              {
                "id": "op2",
                "text": "Tidak Perlu"
              }
            ],
            "reasons": [
              {
                "id": "r4",
                "text": "A. Agar jam pelajaran seni di sekolah menjadi lebih lama"
              },
              {
                "id": "r2",
                "text": "B. Karena tarian modern jauh lebih seru dan membuat tubuh lebih berkeringat"
              },
              {
                "id": "r1",
                "text": "C. Untuk melatih kesabaran, kehalusan budi, dan melestarikan budaya asli"
              },
              {
                "id": "r3",
                "text": "D. Supaya semua siswa bisa menjadi penari profesional di masa depan"
              }
            ],
            "correctPairs": [
              {
                "opinionId": "op1",
                "reasonId": "r1"
              },
              {
                "opinionId": "op2",
                "reasonId": "r2"
              }
            ],
            "xp": 30
          },
          {
            "type": "drag_drop_sentence",
            "text": "Susunlah ajakan untuk mencintai seni gamelan!",
            "draggables": [
              {
                "id": "w5",
                "text": "harmoni",
                "color": "#FFC7B1"
              },
              {
                "id": "w2",
                "text": "lestarikan",
                "color": "#f6bad3ff"
              },
              {
                "id": "w1",
                "text": "Mari kita",
                "color": "#f5f199ff"
              },
              {
                "id": "w4",
                "text": "sebagai",
                "color": "#a5ec93ff"
              },
              {
                "id": "w6",
                "text": "budaya Jawa",
                "color": "#e3baf4ff"
              },
              {
                "id": "w3",
                "text": "suara gamelan",
                "color": "#99AAEF"
              }
            ],
            "dropZones": [
              {
                "id": "z1"
              },
              {
                "id": "z2"
              },
              {
                "id": "z3"
              },
              {
                "id": "z4"
              },
              {
                "id": "z5"
              },
              {
                "id": "z6"
              }
            ],
            "correctOrder": [
              "w1",
              "w2",
              "w3",
              "w4",
              "w5",
              "w6"
            ],
            "xp": 40
          }
        ]
      }
    }
  }
};