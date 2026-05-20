import prisma from "./index"
import { StoryType, SlideType } from "./prisma/generated/client"

const storyData = {
  jawa: {
    title: "Cerita Roro Jonggrang",
    subtitle: "Cerita Rakyat Jawa",
    coverImage: "/assets/budayana/islands/cover book jawa.png",
    backgroundImage: "/assets/budayana/islands/wood cover.png",
    pages: [
      { type: "cover" },
      {
        content: `Di sebuah kerajaan yang megah bernama Prambanan, hiduplah seorang putri cantik bernama Roro Jonggrang. Ia sangat baik hati, sopan, dan disayangi oleh seluruh rakyatnya.

Namun suatu hari, ketenangan itu terusik. Negeri tetangga, Kerajaan Pengging, datang menyerang Prambanan.`,
      },
      {
        content: `Pasukan itu dipimpin oleh seorang kesatria gagah bernama Bandung Bondowoso. Ia sangat kuat, sakti, dan tidak pernah kalah dalam pertempuran. 

Dalam waktu singkat, ia berhasil menguasai kerajaan. `,
      },
      {
        content: `Setelah menang, Bandung Bondowoso melihat kecantikan Roro Jonggrang. 

Ia langsung jatuh hati dan ingin menikahinya. "Roro Jonggrang, jadilah permaisuriku," pintanya.`,
      },
      {
        content: `Setelah berpikir keras, ia menemukan sebuah ide. "Baik... aku bersedia. Tapi ada satu syarat," jawabnya.

Bandung Bondowoso tersenyum percaya diri. "Katakan. Apa syaratmu?"`,
      },
      {
        content: `"Bandung Bondowoso tersenyum percaya diri. "Katakan. Apa syaratmu?"

"Bangunlah seribu candi untukku dalam waktu satu malam," kata Roro Jonggrang. Ia berharap syarat mustahil ini akan gagal.

Bandung Bondowoso tertawa. "Hanya itu? Tentu aku bisa!" "`,
      },
      {
        content: `Malam pun tiba. Bandung Bondowoso menggunakan kesaktiannya dan memanggil pasukan jin. 

"Hai para jin, bantulah aku membangun seribu candi malam ini!" teriaknya."`,
      },
      {
        content: `Dalam sekejap, ribuan jin datang dan mulai bekerja cepat menyusun batu-batu. Suara dentingan batu terdengar riuh di seluruh Prambanan.

Melihat hal itu, Roro Jonggrang menjadi panik karena candi-candi hampir selesai. Ia segera mengumpulkan para dayang dan wanita desa. "`,
      },
      {
        content: `"Kita harus menghentikan ini! Ayo tumbuk padi dan nyalakan api besar. Buat suasana seperti fajar!" serunya.

Para wanita mulai memukul lesung dengan keras. Api unggun dinyalakan hingga langit tampak terang benderang. Mendengar riuhnya suasana, ayam jantan pun ikut berkokok.`,
      },  
      {
        content: `Mendengar suara ayam, para jin panik. "Pagi sudah tiba! Kita harus pergi!" Mereka langsung menghilang dan meninggalkan pekerjaan yang belum selesai. Candi yang terbangun baru berjumlah 999.

Bandung Bondowoso sangat kecewa dan marah saat tahu dirinya telah tertipu. "Roro Jonggrang! Kau menipuku!" teriaknya geram.`,
      },  
      {
        type: "ending",
        content: `Karena terlanjur murka, Bandung Bondowoso mengarahkan kesaktiannya kepada sang putri. "Kalau begitu, jadilah kau pelengkap candi yang ke-1000!"

Dalam sekejap, tubuh Roro Jonggrang berubah menjadi patung batu yang sangat indah. Patung itulah yang kini melengkapi Candi Prambanan.`,
      },
    ],
  },

  papua: {
    title: "Cerita Biwar Penakluk Naga",
    subtitle: "Legenda Rakyat Papua",
    coverImage: "/assets/budayana/islands/cover book papua.png",
    backgroundImage: "/assets/budayana/islands/wood cover.png",
    pages: [
      { type: "cover" },
      {
        content: `Di tanah Papua yang subur, ada sebuah desa di tepi sungai besar. Penduduknya hidup dengan damai, berburu dan menangkap ikan untuk makan. 

Di desa inilah hiduplah seorang pemuda bernama Biwar. Ia terkenal sebagai sosok yang sangat pemberani serta selalu menjaga keluarganya.`,
      },
      {
        content: `Namun, kehidupan warga desa sering terganggu. Ada seekor naga raksasa jahat yang tinggal di dalam gua besar dekat sungai.

Naga itu sering merusak ladang dan memakan hewan ternak. Suatu hari, kepala suku mengumpulkan seluruh warga di tengah kampung.`,
      },
      {
        content: `"Kita tidak bisa hidup tenang. Naga itu harus dihentikan!" serunya sedih. "Tapi, siapa yang berani melawannya?"

Semua orang diam dan saling pandang. Tidak ada yang berani maju. 

`,
      },
      {
        content: `Namun, tiba-tiba Biwar berdiri dengan gagah.

"Aku akan menghadapi naga itu, Kepala Suku," katanya.

Ibunya langsung terkejut. "Biwar, itu berbahaya sekali!"

Biwar tersenyum menenangkan ibunya. "Ibu, jangan khawatir. Aku ingin desa kita aman."`,
      },
      {
        content: `Pagi-pagi sekali, Biwar bersiap. Ia membawa tombak, busur, dan anak panah. Ia berjalan melewati hutan lebat dan menyeberangi sungai yang deras.

Saat mendekati gua, terdengar suara geraman yang sangat mengerikan. "Grrrrrr… Siapa yang berani datang ke sini?" suara itu bergema dari dalam gua.`,
      },
      {
        content: `Biwar tidak takut. "Aku Biwar! Aku datang untuk menghentikan kejahatanmu!" teriaknya.

Tiba-tiba, naga raksasa keluar dari gua. Sisiknya keras, matanya menyala merah, dan napasnya sangat panas. 

Naga itu tertawa meremehkan. "Anak kecil sepertimu ingin menantangku? Kau tidak akan menang!"`,
      },
      {
        content: `Naga itu langsung menyerang dengan cepat. Biwar melompat ke samping, menghindari tebasan ekor naga yang membuat tanah bergetar.

Biwar segera mengambil busurnya. Ia membidik tepat ke arah mata naga. "Ini untuk desaku!" serunya.`,
      },
      {
        content: `Wusss! Anak panah itu mengenai sasaran. Naga itu berteriak kesakitan. 

"Aaarrrggghhh!" Naga itu mengamuk dan menyemburkan api. 

Biwar dengan gesit langsung bersembunyi di balik batu besar.`,
      },
      {
        content: `Saat naga mulai lelah dan lengah, Biwar maju mendekat. 

Ia menusuk jantung naga menggunakan tombaknya dengan sekuat tenaga. 

Naga raksasa itu akhirnya jatuh ke tanah dan tidak bergerak lagi.`,
      },
      {
        type: "ending",
        content: `Biwar berhasil. Ia kembali ke kampung dengan langkah bangga. 

Seluruh warga langsung menyambutnya dengan sorak-sorai gembira. "Biwar! Pahlawan kita!"`,
      },
    ],

    
  },

  maluku: {
    title: "Cerita Legenda Telaga Biru",
    subtitle: "Legenda Rakyat Maluku",
    coverImage: "/assets/budayana/islands/cover book maluku.png",
    backgroundImage: "/assets/budayana/islands/wood cover.png",
    pages: [
      { type: "cover" },
      {
        content: `Di Desa Mamuya, Halmahera Utara, hiduplah masyarakat yang sangat rukun dan damai. Namun suatu hari, sebuah keajaiban terjadi. 

Air jernih tiba-tiba memancar keluar dari sela-sela batu bekas lahar panas.`,
      },
      {
        content: `Air itu mengalir deras tanpa henti, hingga perlahan membentuk sebuah telaga luas berwarna biru jernih yang sangat indah.

“Tok! Tok! Tok!” Suara kentungan dipukul bertalu-talu untuk memanggil seluruh warga. 

Mereka segera berkumpul di lapangan desa dengan bingung.`,
      },
      {
        content: `Tetua adat berdiri di depan warga lalu bertanya, “Apakah semua anggota keluarga kalian sudah hadir di sini?”

Warga saling pandang, lalu dua keluarga maju dengan wajah sedih.`,
      },
      {
        content: `“Anak perempuan kami, Majojaru, sudah dua hari menghilang dan belum pulang,” ucap keluarga pertama.

“Anak laki-laki kami, Magohiduuru, juga belum kembali sejak merantau ke negeri seberang,” ucap keluarga kedua.`,
      },
      {
        content: `Tetua adat kemudian mengajak seluruh warga untuk berdoa. Setelah selesai, ia menatap telaga baru itu. 

“Telaga ini bukanlah air biasa. Ini berasal dari air mata seorang gadis yang sedang patah hati,” kata Tetua adat dengan suara pelan.`,
      },
      {
        content: `Sebenarnya, dahulu kala Majojaru dan Magohiduuru adalah sepasang kekasih yang saling mencintai. Mereka berjanji untuk selalu bersama.

Suatu hari, Magohiduuru berpamitan dengan membawa tekad besar. “Aku akan pergi merantau ke negeri seberang untuk bekerja, agar kelak aku bisa menikahimu,” ujarnya.

Majojaru mengangguk sambil menahan sedih. “Aku akan setia menunggumu pulang di sini.”`,
      },
      {
        content: `Bulan demi bulan berlalu, namun Magohiduuru tidak kunjung kembali. Rasa rindu membuat Majojaru gelisah.

Akhirnya, ia memutuskan pergi ke pelabuhan setiap kali ada kapal yang bersandar.`,
      },
      {
        content: `Suatu sore, sebuah kapal besar merapat. Majojaru segera berlari mendekat dan bertanya kepada salah seorang awak kapal. 

“Permisi, apakah kau tahu kabar tentang Magohiduuru?” tanyanya penuh harap.

Awak kapal itu tertunduk lesu dan menjawab dengan berat hati, “Kapal yang ditumpangi Magohiduuru karam dihantam badai besar di tengah laut. Tidak ada satu pun penumpang yang selamat.”`,
      },
      {
        content: `Mendengar kabar buruk itu, petir rasanya menyambar hati Majojaru. Dunianya runtuh seketika.

Dengan air mata yang mulai berlinang, Majojaru berlari kencang meninggalkan pelabuhan. Ia bersembunyi di bawah pohon beringin yang sepi dan menangis sejadi-jadinya tanpa henti. 

Ia menangis siang dan malam, selama dua hari dua malam berturut-turut.`,
      },
      {
        type: "ending",
        content: `Lama-kelamaan, air mata kesedihan Majojaru menggenang begitu banyak. 

Air mata itu menenggelamkan bebatuan lahar dan berubah menjadi sebuah telaga yang sangat jernih dan berwarna biru pekat.

Hingga kini, masyarakat setempat menyebut tempat indah itu sebagai Telaga Biru. Sebuah telaga yang tercipta dari air mata kesetiaan seorang gadis yang menunggu kekasihnya.`,
      },
    ], 
  },

  kalimantan: {
    title: "Cerita Pesut Mahakam",
    subtitle: "Legenda Rakyat Kalimantan",
    coverImage: "/assets/budayana/islands/cover book kalimantan.png",
    backgroundImage: "/assets/budayana/islands/wood cover.png",
    pages: [
      { type: "cover" },
      {
        content: `Di tepi Sungai Mahakam yang luas, hiduplah sebuah keluarga kecil yang bahagia. Namun kesedihan datang saat sang ibu meninggal dunia karena sakit.

Sejak saat itu, sang ayah menjadi sering melamun. Ia tidak lagi bersemangat bekerja maupun mengurus rumah. Kehidupan mereka pun perlahan menjadi semakin sulit.`,
      },
      {
        content: `Suatu hari, sang ayah pergi ke pesta desa. Di sana, ia bertemu dengan seorang penari cantik. 

Ayah pun jatuh hati lalu memutuskan untuk menikahinya.

Awalnya, suasana rumah kembali ceria. Sang ayah kembali bersemangat bekerja di ladang. Namun sayang, kebahagiaan itu tidak bertahan lama.`,
      },
      {
        content: `Setiap kali sang ayah pergi bekerja, Ibu Tiri berubah menjadi sangat kejam. Kedua anak itu dipaksa bekerja keras dari pagi hingga malam tanpa diberi makan. 

Tidak hanya itu, Ibu Tiri juga sering memfitnah mereka di depan sang ayah. 

"Anak-anakmu malas sekali, mereka tidak mau membantuku!" adu Ibu Tiri.`,
      },
      {
        content: `Suatu hari, Ibu Tiri menyuruh kedua anak itu pergi ke hutan. 

"Cari kayu bakar yang banyak! Jangan pulang sebelum kayu itu penuh!" perintahnya dengan ketus.

Saat anak-anak pergi ke hutan, Ibu Tiri menghasut sang ayah untuk pindah. Mereka diam-diam mengemas semua barang dan pergi meninggalkan rumah.`,
      },
      {
        content: `Sore harinya, kedua anak itu pulang dengan lelah. Mereka terkejut melihat rumah yang sudah sepi dan kosong melompong. 

"Ayah! Ibu! Kalian di mana?" teriak mereka. Namun, tidak ada jawaban.

Sang kakak menggandeng tangan adiknya. "Kita harus mencari Ayah," ajaknya tegar.`,
      },
      {
        content: `Mereka berjalan berhari-hari menembus hutan, menahan lapar dan haus. 

Hingga akhirnya, mereka menemukan sebuah gubuk kecil di tepi Sungai Mahakam.”`,
      },
      {
        content: `Saat masuk ke dalam dapur, mereka melihat sebuah kuali berisi bubur panas yang sedang dimasak.

Karena sudah sangat kelaparan, mereka langsung memakan bubur panas itu dengan lahap.

Tiba-tiba, hal aneh terjadi. Tubuh mereka terasa sangat panas bagaikan terbakar.`,
      },
      {
        content: `Dalam keadaan panik dan kesakitan, mereka berlari keluar gubuk lalu melompat ke dalam dinginnya air Sungai Mahakam.

Tidak lama kemudian, sang ayah dan ibu tiri kembali ke gubuk tersebut. 

Ayah terkejut melihat keranjang kayu bakar milik anaknya tergeletak di lantai dapur. Ia segera berlari ke tepi sungai dengan perasaan cemas.`,
      },
      {
        content: `Di permukaan air, ayah melihat dua makhluk aneh menyerupai ikan berwajah manusia sedang berenang dengan bebas. 

"Anak-anakku…?" bisik Ayah lemas.`,
      },
      {
        type: "ending",
        content: `Sang ayah menangis penyesalan, namun semuanya sudah terlambat. 

Sejak saat itu, penduduk setempat menyebut makhluk tersebut sebagai Pesut Mahakam, jelmaan dari dua anak yang malang.`,
      },
    ], 
  },
}

async function main() {
  console.log("Start seeding static stories...")

  for (const [islandKey, data] of Object.entries(storyData)) {
    // Find island by name (case-insensitive)
    const island = await prisma.island.findFirst({
      where: { islandName: { equals: islandKey, mode: "insensitive" } },
    })

    if (!island) {
      console.log(`Island not found: ${islandKey}, skipping...`)
      continue
    }

    console.log(`Processing static story for island: ${island.islandName}`)

    // Find or create STATIC story for this island
    let story = await prisma.story.findFirst({
      where: {
        islandId: island.id,
        storyType: StoryType.STATIC,
      },
    })

    if (!story) {
      story = await prisma.story.create({
        data: {
          islandId: island.id,
          title: data.title,
          subtitle: data.subtitle,
          coverImage: data.coverImage,
          backgroundImage: data.backgroundImage,
          storyType: StoryType.STATIC,
          order: 2, // Static stories are usually the 2nd stage
        },
      })
      console.log(`  Created new STATIC story: ${data.title}`)
    } else {
      await prisma.story.update({
        where: { id: story.id },
        data: {
          title: data.title,
          subtitle: data.subtitle,
          coverImage: data.coverImage,
          backgroundImage: data.backgroundImage,
        },
      })
      console.log(`  Updated existing STATIC story: ${data.title}`)
    }

    // Delete existing static slides
    await prisma.staticSlide.deleteMany({
      where: { storyId: story.id },
    })
    console.log(`  Deleted existing static slides`)

    // Create new static slides from pages
    for (let i = 0; i < data.pages.length; i++) {
      const page = data.pages[i]
      let slideType = SlideType.CONTENT

      if (page.type === "cover") slideType = SlideType.COVER
      else if (page.type === "ending") slideType = SlideType.ENDING

      await prisma.staticSlide.create({
        data: {
          storyId: story.id,
          slideNumber: i + 1,
          slideType: slideType,
          contentText: page.content || null,
        },
      })
    }
    console.log(`  Created ${data.pages.length} static slides`)
  }

  console.log("Seeding static stories finished.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
