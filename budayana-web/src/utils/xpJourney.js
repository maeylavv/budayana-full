export function getJourneyContent(totalXP) {
  const xp = totalXP || 0;
  const progress = Math.min((xp / 7200) * 100, 100);

  if (xp >= 7200) {
    return {
      emoji: '🏆',
      title: 'Penjelajah Budaya Nusantara',
      subtitle: 'Kamu sudah menyelesaikan seluruh perjalanan budaya!',
      tips: [
        '✨ Latihan lagi',
        '🏝️ Jelajahi pulau favorit',
        '📚 Perkuat ingatanmu'
      ],
      progress
    };
  }

  if (xp >= 6500) {
    return {
      emoji: '👑',
      title: 'Penjelajah Hebat',
      subtitle: 'Kamu hampir menyelesaikan perjalanan budaya!',
      tips: [
        '✨ XP hampir penuh',
        '🏝️ Tinggal sedikit lagi',
        '📚 Kamu luar biasa'
      ],
      progress
    };
  }

  if (xp >= 4500) {
    return {
      emoji: '🏅',
      title: 'Ahli Budaya',
      subtitle: 'Sedikit lagi menuju akhir perjalanan!',
      tips: [
        '✨ Main lagi',
        '🏝️ Pulau terakhir menunggu',
        '📚 Kamu hampir selesai'
      ],
      progress
    };
  }

  if (xp >= 2500) {
    return {
      emoji: '🎒',
      title: 'Petualang Nusantara',
      subtitle: 'Keren! Kamu sudah menjelajah banyak budaya.',
      tips: [
        '✨ Kumpulkan XP',
        '🏝️ Jelajah lagi',
        '📚 Lengkapi topik'
      ],
      progress
    };
  }

  if (xp >= 1000) {
    return {
      emoji: '🧭',
      title: 'Penjelajah Muda',
      subtitle: 'Perjalananmu mulai berkembang!',
      tips: [
        '✨ Coba pulau baru',
        '🏝️ Cari XP',
        '📚 Main kuis'
      ],
      progress
    };
  }

  return {
    emoji: '🌱',
    title: 'Penjelajah Pemula',
    subtitle: 'Petualangan budaya dimulai!',
    tips: [
      '✨ Main kuis',
      '🏝️ Jelajah pulau',
      '📚 Kumpulkan XP'
    ],
    progress
  };
}
