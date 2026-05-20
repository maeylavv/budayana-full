/**
 * Consolidated game data for all islands
 * Each game has story images, question images, and questions (MC, TF, drag-drop)
 */
export const games = {
  sulawesi: {
    title: "CeritaNenek Pakande",
    totalXp: 100,
    xpPerQuestion: 20,
    storyImageMap: {
      1: "/assets/budayana/islands/sulawesi 1.png",
      3: "/assets/budayana/islands/sulawesi 2.png",
      5: "/assets/budayana/islands/sulawesi 3.png",
      7: "/assets/budayana/islands/sulawesi 4.png",
      9: "/assets/budayana/islands/sulawesi 5.png",
    },
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 sulawesi.png",
      4: "/assets/budayana/islands/pertanyaan 4 sulawesi.png",
      6: "/assets/budayana/islands/pertanyaan 6 sulawesi.png",
      8: "/assets/budayana/islands/question 8 sulawesi.png",
      10: "/assets/budayana/islands/pertanyaan 10 sulawesi.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus sulawesi.png",
    },
    questions: [
      {
        id: "q2",
        page: 2,
        type: "mc",
        options: [
          "Berlari-larian",
          "Main layangan",
          "Main kelereng",
          "Memancing",
        ],
        correct: 0,
        incorrectMessage: "Uh oh... jawabannya kurang tepat, ayo coba lagi!",
      },
      {
        id: "q4",
        page: 4,
        type: "tf",
        correct: false,
      },
      {
        id: "q6",
        page: 6,
        type: "mc",
        options: ["Panci", "Jaring", "Karung", "Perangkap"],
        correct: 2,
      },
      {
        id: "q8",
        page: 8,
        type: "mc",
        options: ["Kota", "Hutan", "Gunung", "Sawah"],
        correct: 1,
      },
      {
        id: "q10",
        page: 10,
        type: "drag",
        items: [
          { id: "search", label: "Anak-anak berlari ketakutan" },
          { id: "play", label: "Anak-anak bermain di ladang" },
          { id: "home", label: "Warga mencari anak-anak" },
          { id: "appear", label: "Nenek Pakande muncul" },
          { id: "sunset", label: "Sore hari mulai datang" },
        ],
        correctOrder: ["play", "sunset", "appear", "search", "home"],
      },
    ],
  },

  sumatra: {
    title: "Cerita Malin Kundang",
    totalXp: 100,
    xpPerQuestion: 20,
    storyImageMap: {
      1: "/assets/budayana/islands/sumatra 1.png",
      3: "/assets/budayana/islands/sumatra 2.png",
      5: "/assets/budayana/islands/sumatra 3.png",
      7: "/assets/budayana/islands/sumatra 4.png",
      9: "/assets/budayana/islands/sumatra 5.png",
    },
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 1 malin.png",
      4: "/assets/budayana/islands/pertanyaan 3 malin.png",
      6: "/assets/budayana/islands/pertanyaan 4 malin.png",
      8: "/assets/budayana/islands/pertanyaan 6 malin.png",
      10: "/assets/budayana/islands/pertanyaan 7 malin.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus malin.png",
    },
    questions: [
      {
        id: "q2",
        page: 2,
        type: "mc",
        options: ["Membantu Ibunya", "Menjemur Baju", "Memancing", "Tiduran"],
        correct: 0,
        incorrectMessage: "Uh oh... jawabannya kurang tepat, ayo coba lagi!",
      },
      {
        id: "q4",
        page: 4,
        type: "tf",
        correct: false,
      },
      {
        id: "q6",
        page: 6,
        type: "mc",
        options: ["Bapaknya", "Temannya", "Ibunya", "Tetangganya"],
        correct: 2,
      },
      {
        id: "q8",
        page: 8,
        type: "mc",
        options: [
          "Kaki sang ibu terinjak",
          "Malin tidak menganggap ibu",
          "Malin memeluk sang ibu",
          "Ibu tersandung ikan di pasar",
        ],
        correct: 1,
      },
      {
        id: "q10",
        page: 10,
        type: "drag",
        items: [
          { id: "stone", label: "Malin dikutuk menjadi batu" },
          { id: "leave", label: "Malin tinggal bersama ibunya" },
          { id: "ship", label: "Malin menjadi saudagar kaya" },
          { id: "miss", label: "Malin pergi merantau" },
          { id: "deny", label: "Malin mengingkari ibunya" },
        ],
        correctOrder: ["leave", "miss", "ship", "deny", "stone"],
      },
    ],
  },

  "nusa-tenggara": {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 nusa tenggara.png",
      4: "/assets/budayana/islands/pertanyaan 4 nusa tenggara.png",
      6: "/assets/budayana/islands/pertanyaan 6 nusa tenggara.png",
      8: "/assets/budayana/islands/pertanyaan 8 nusa tenggara.png",
      10: "/assets/budayana/islands/pertanyaan 10 nusa tenggara.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus nusa tenggara.png",
    },
  },

  bali: {
    questionImageMap: {
      2: "/assets/budayana/islands/pertanyaan 2 bali.png",
      4: "/assets/budayana/islands/pertanyaan 4 bali.png",
      6: "/assets/budayana/islands/pertanyaan 6 bali.png",
      8: "/assets/budayana/islands/pertanyaan 8 bali.png",
      10: "/assets/budayana/islands/pertanyaan 10 bali.png",
      bonus: "/assets/budayana/islands/pertanyaan bonus bali.png",
    },
  },
}

/**
 * Get game data by island slug
 * @param {string} islandSlug
 * @returns {object|undefined}
 */
export const getGameByIsland = (islandSlug) => {
  return games[islandSlug]
}

/**
 * Build pages array from game data
 * @param {object} game
 * @returns {array}
 */
export const buildGamePages = (game) => {
  const pages = []
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
      pages.push({ type: "story", pageNumber: i })
    } else {
      const question = game.questions.find((q) => q.page === i)
      pages.push({ type: "question", pageNumber: i, question })
    }
  }
  return pages
}
