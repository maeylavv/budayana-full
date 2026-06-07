import { t } from "elysia"
import prisma from "./index"
import {
  StoryType,
  SlideType,
  StageType,
  QuestionType,
} from "./prisma/generated/client"

const XP_PER_QUESTION = 16

interface QuestionOption {
  text: string
  isCorrect: boolean
}

interface QuestionData {
  slideNumber: number
  questionType: QuestionType
  questionText: string
  options?: QuestionOption[]
  metadata?: {
    items: Array<{ id: string; label: string }>
    correctOrder: string[]
  }
  isBonus?: boolean
}

interface InteractiveStoryData {
  title: string
  storyImageMap: Record<number, string>
  questions: QuestionData[]
}

const interactiveStoryData: Record<string, InteractiveStoryData> = {
  sulawesi: {
    title: "Cerita Nenek Pakande",
    storyImageMap: {
      1: "/assets/budayana/islands/sulawesi 1.png",
      3: "/assets/budayana/islands/sulawesi 2.png",
      5: "/assets/budayana/islands/sulawesi 3.png",
      7: "/assets/budayana/islands/sulawesi 4.png",
      9: "/assets/budayana/islands/sulawesi 5.png",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang sedang dilakukan oleh anak-anak tersebut?",
        options: [
          { text: "Berlari-lari", isCorrect: true },
          { text: "Bermain layangan", isCorrect: false },
          { text: "Bermain kelereng", isCorrect: false },
          { text: "Memancing", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText:
          "Apakah anak-anak itu langsung pulang saat waktu sore tiba?",
        options: [
          { text: "Iya", isCorrect: false },
          { text: "Tidak", isCorrect: true },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang dibawa oleh nenek pakande?",
        options: [
          { text: "Panci", isCorrect: false },
          { text: "Jaring", isCorrect: false },
          { text: "Karung", isCorrect: true },
          { text: "Perangkap", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Dimana warga desa mencari anak-anak yang hilang?",
        options: [
          { text: "Kota", isCorrect: false },
          { text: "Hutan", isCorrect: true },
          { text: "Gunung", isCorrect: false },
          { text: "Sawah", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText:
          "Urutkan kejadian apa saja yang terjadi pada cerita nenek Pakande!",
        metadata: {
          items: [
            { id: "search", label: "Warga desa mencari anak-anak yang hilang" },
            { id: "play", label: "Anak-anak bermain sambil menertawakan nasihat ibu" },
            { id: "home", label: "Orang tua melarang anak keluar malam karena Nenek Pakande mengintai" },
            { id: "appear", label: "Nenek Pakande muncul dan menculik anak-anak" },
            { id: "sunset", label: "Sore mulai datang dan anak-anak masih bermain" },
          ],
          correctOrder: ["play", "sunset", "appear", "search", "home"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText:
          "Menurutmu, mengapa Nenek Pakande menculik anak-anak yang bermain pada waktu sore hari?",
        isBonus: true,
      },
    ],
  },

  bali: {
    title: "Cerita Bawang dan Kesuna",
    storyImageMap: {
      1: "/assets/budayana/islands/bali 1.png",
      3: "/assets/budayana/islands/bali 2.png",
      5: "/assets/budayana/islands/bali 3.png",
      7: "/assets/budayana/islands/bali 4.png",
      9: "/assets/budayana/islands/bali 5.png",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Kemana kedua orang tua Kesuna dan Bawang pergi??",
        options: [
          { text: "Gunung", isCorrect: false },
          { text: "Sawah", isCorrect: true },
          { text: "Pasar", isCorrect: false },
          { text: "Pesisir Pantai", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText:
          "Apakah ayah percaya cerita Bawang dan mengusir Kesuna dari rumah?",
        options: [
          { text: "Iya", isCorrect: true },
          { text: "Tidak", isCorrect: false },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang terjadi saat burung mematuk tubuh Kesuna?",
        options: [
          { text: "Muncul perhiasan emas dari bekas patukan", isCorrect: true },
          { text: "Kesuna merasa kesakitan", isCorrect: false },
          { text: "Burung itu terbang membawa Kesuna", isCorrect: false },
          { text: "Kesuna berubah menjadi burung", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang terjadi saat burung mematuk tubuh Bawang?",
        options: [
          { text: "Bawang berubah menjadi burung", isCorrect: false },
          { text: "Bawang mendapat lebih banyak emas", isCorrect: false },
          { text: "Bawang dilukai oleh burung", isCorrect: true },
          { text: "Bawang bisa terbang", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Bawang dan Kesuna!",
        metadata: {
          items: [
            { id: "gold", label: "Kesuna mendapat perhiasan emas dari burung ajaib" },
            { id: "lie", label: "Bawang memfitnah Kesuna hingga diusir ke hutan" },
            { id: "hurt", label: "Bawang terluka akibat patukan burung ajaib" },
            { id: "work", label: "Kesuna patuh untuk membersihkan rumah dan Bawang bermalas-malasan" },
            { id: "sad", label: "Bawang pulang dengan menyesal dan Kesuna hidup tenang dengan Nenek" },
          ],
          correctOrder: ["work", "lie", "gold", "hurt", "sad"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText:
          "Menurutmu, mengapa Bawang tidak mendapatkan emas seperti Kesuna?",
        isBonus: true,
      },
    ],
  },

  sumatra: {
    title: "Cerita Malin Kundang",
    storyImageMap: {
      1: "/assets/budayana/islands/sumatra 1.png",
      3: "/assets/budayana/islands/sumatra 2.png",
      5: "/assets/budayana/islands/sumatra 3.png",
      7: "/assets/budayana/islands/sumatra 4.png",
      9: "/assets/budayana/islands/sumatra 5.png",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang sedang malin lakukan?",
        options: [
          { text: "Membantu Ibunya", isCorrect: true },
          { text: "Berlari di pantai", isCorrect: false },
          { text: "Memancing", isCorrect: false },
          { text: "Tiduran", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah ibu mengizinkan Malin pergi berlayar?",
        options: [
          { text: "Iya", isCorrect: true },
          { text: "Tidak", isCorrect: false },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Siapa yang menghampiri malin di pelabuhan?",
        options: [
          { text: "Ayahnya", isCorrect: false },
          { text: "Temannya", isCorrect: false },
          { text: "Ibunya", isCorrect: true },
          { text: "Tetangganya", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Kenapa ibu malin menangis?",
        options: [
          { text: "Kaki sang ibu terinjak", isCorrect: false },
          { text: "Malin tidak menganggap ibunya", isCorrect: true },
          { text: "Malin memeluk sang ibu", isCorrect: false },
          { text: "Ibu tersandung ikan di pasar", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText:
          "Urutkan kejadian apa saja yang terjadi pada cerita malin kundang!",
        metadata: {
          items: [
            { id: "stone", label: "Malin dikutuk menjadi batu" },
            { id: "live", label: "Malin tinggal bersama ibunya" },
            { id: "ship", label: "Malin menjadi saudagar kaya" },
            { id: "miss", label: "Malin pergi merantau" },
            { id: "deny", label: "Malin mengingkari ibunya" },
          ],
          correctOrder: ["live", "miss", "ship", "deny", "stone"],
        },
      },
    ],
  },

  "nusa tenggara": {
    title: "Cerita Watu Maladong",
    storyImageMap: {
      1: "/assets/budayana/islands/nusa tenggara 1.png",
      3: "/assets/budayana/islands/nusa tenggara 2.png",
      5: "/assets/budayana/islands/nusa tenggara 3.png",
      7: "/assets/budayana/islands/nusa tenggara 4.png",
      9: "/assets/budayana/islands/nusa tenggara 5.png",
    },
    questions: [
      {
        slideNumber: 2,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang ditemukan petani di kebunnya pada pagi hari?",
        options: [
          { text: "Kebunnya rusak karena babi hutan", isCorrect: true },
          { text: "Kebunnya penuh dengan bunga", isCorrect: false },
          { text: "Ada orang asing di kebunnya", isCorrect: false },
          { text: "Tanamannya tumbuh subur", isCorrect: false },
        ],
      },
      {
        slideNumber: 4,
        questionType: QuestionType.TRUE_FALSE,
        questionText: "Apakah siluman penyu membawa petani ke pasar ikan?",
        options: [
          { text: "Iya", isCorrect: false },
          { text: "Tidak", isCorrect: true },
        ],
      },
      {
        slideNumber: 6,
        questionType: QuestionType.MCQ,
        questionText: "Apa yang diberikan nenek tua kepada petani?",
        options: [
          { text: "Ramuan dan pesan untuk meminta tombak serta Watu Maladong", isCorrect: true },
          { text: "Makanan dan minuman", isCorrect: false },
          { text: "Pakaian dan senjata baru", isCorrect: false },
          { text: "Peta menuju desa kepala desa", isCorrect: false },
        ],
      },
      {
        slideNumber: 8,
        questionType: QuestionType.MCQ,
        questionText: "Bagaimana petani mengalahkan kepala desa?",
        options: [
          { text: "Dengan mengangkat tombak hingga petir menyambar", isCorrect: true },
          { text: "Dengan meminum ramuan nenek", isCorrect: false },
          { text: "Dengan memanggil siluman penyu", isCorrect: false },
          { text: "Dengan melempar batu sakti", isCorrect: false },
        ],
      },
      {
        slideNumber: 10,
        questionType: QuestionType.DRAG_DROP,
        questionText: "Urutkan kejadian apa saja yang terjadi pada cerita Watu Maladong!",
        metadata: {
          items: [
            { id: "water", label: "Watu Maladong mengeluarkan air dari dalam tanah" },
            { id: "turtle", label: "Penyu mengantar petani ke pulau seberang" },
            { id: "farm", label: "Babi hutan merusak kebun petani" },
            { id: "fight", label: "Petani mengalahkan kepala desa" },
            { id: "grandma", label: "Nenek memberi ramuan kepada petani" },
          ],
          correctOrder: ["farm", "turtle", "grandma", "fight", "water"],
        },
      },
      {
        slideNumber: 11,
        questionType: QuestionType.ESSAY,
        questionText: "Menurutmu, mengapa petani menyembunyikan Watu Maladong?",
        isBonus: true,
      },
    ],
  },
}

async function main() {
  console.log("Start seeding interactive stories...")

  for (const [islandKey, data] of Object.entries(interactiveStoryData)) {
    // Find island by name (case-insensitive)
    const island = await prisma.island.findFirst({
      where: { islandName: { equals: islandKey, mode: "insensitive" } },
    })

    if (!island) {
      console.log(`Island not found: ${islandKey}, skipping...`)
      continue
    }

    console.log(`Processing interactive story for island: ${island.islandName}`)

    // Find or create INTERACTIVE story for this island
    let story = await prisma.story.findFirst({
      where: {
        islandId: island.id,
        storyType: StoryType.INTERACTIVE,
        NOT: {
          title: { in: ["Pre-Test", "Post-Test"] },
        },
      },
    })

    if (!story) {
      story = await prisma.story.create({
        data: {
          islandId: island.id,
          title: data.title,
          storyType: StoryType.INTERACTIVE,
          order: 1,
        },
      })
      console.log(`  Created new INTERACTIVE story: ${data.title}`)
    } else {
      await prisma.story.update({
        where: { id: story.id },
        data: { title: data.title },
      })
      console.log(`  Updated existing INTERACTIVE story: ${data.title}`)
    }

    // Clean up existing interactive slides and questions
    await prisma.interactiveSlide.deleteMany({
      where: { storyId: story.id },
    })
    console.log(`  Deleted existing interactive slides`)

    await prisma.question.deleteMany({
      where: { storyId: story.id, stageType: StageType.INTERACTIVE },
    })
    console.log(`  Deleted existing interactive questions`)

    // Create questions and map slideNumber to questionId
    const questionIdMap: Record<number, string> = {}

    for (const q of data.questions) {
      const questionData: {
        storyId: string
        stageType: StageType
        questionType: QuestionType
        questionText: string
        xpValue: number
        metadata?: object
      } = {
        storyId: story.id,
        stageType: StageType.INTERACTIVE,
        questionType: q.questionType,
        questionText: q.questionText,
        xpValue: XP_PER_QUESTION,
      }

      // Add metadata for DRAG_DROP questions
      if (q.questionType === QuestionType.DRAG_DROP && q.metadata) {
        questionData.metadata = q.metadata
      }

      // Create question with answer options if applicable
      if (q.options && q.options.length > 0) {
        const question = await prisma.question.create({
          data: {
            ...questionData,
            answerOptions: {
              create: q.options.map((opt) => ({
                optionText: opt.text,
                isCorrect: opt.isCorrect,
              })),
            },
          },
        })
        questionIdMap[q.slideNumber] = question.id
      } else {
        // ESSAY or DRAG_DROP without options
        const question = await prisma.question.create({
          data: questionData,
        })
        questionIdMap[q.slideNumber] = question.id
      }
    }
    console.log(`  Created ${data.questions.length} questions`)

    // Create interactive slides
    const slides: Array<{
      slideNumber: number
      slideType: SlideType
      imageUrl?: string | null
      questionId?: string | null
    }> = []

    // Slides 1-10: alternating IMAGE and GAME
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 1) {
        // Odd: IMAGE slide with storyImageMap
        slides.push({
          slideNumber: i,
          slideType: SlideType.IMAGE,
          imageUrl: data.storyImageMap[i] || null,
        })
      } else {
        // Even: GAME slide linked to question
        slides.push({
          slideNumber: i,
          slideType: SlideType.GAME,
          questionId: questionIdMap[i] || null,
        })
      }
    }

    // Slide 11: ESSAY bonus (if exists)
    if (questionIdMap[11]) {
      slides.push({
        slideNumber: 11,
        slideType: SlideType.ESSAY,
        questionId: questionIdMap[11],
      })
    }

    // Final slide: ENDING
    slides.push({
      slideNumber: questionIdMap[11] ? 12 : 11,
      slideType: SlideType.ENDING,
    })

    // Insert all slides
    for (const slide of slides) {
      await prisma.interactiveSlide.create({
        data: {
          storyId: story.id,
          slideNumber: slide.slideNumber,
          slideType: slide.slideType,
          imageUrl: slide.imageUrl || null,
          questionId: slide.questionId || null,
        },
      })
    }
    console.log(`  Created ${slides.length} interactive slides`)
  }

  console.log("Seeding interactive stories finished.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
