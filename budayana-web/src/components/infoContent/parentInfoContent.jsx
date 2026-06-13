export const PARENT_INFO = {
  peningkatanCerita: {
    tooltipText: "Rata-rata perkembangan pemahaman siswa setelah membaca materi.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Peningkatan Cerita",
    modalContent: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>Nilai ini membandingkan hasil sebelum dan sesudah membaca menggunakan metode N-Gain. Semakin tinggi nilainya berarti semakin besar peningkatan pemahaman.</p>
        <div style={{ backgroundColor: '#FDE8C0', padding: '10px', borderRadius: '8px', border: '1px solid #C8935A' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>Panduan Membaca Hasil:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟢</span> &gt;70% → Perkembangan sangat baik</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟡</span> 40–70% → Perkembangan cukup</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>🔴</span> &lt;40% → Masih perlu pendampingan</div>
        </div>
      </div>
    ),
    exampleBox: "Nilai awal = 60, Nilai akhir = 80. Formula: ((80−60)/(100−60)) × 100 = 50%."
  },
  penyelesaianPulau: {
    tooltipText: "Persentase penyelesaian Cerita dan Kuis pada tiap pulau.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Eksplorasi Pulau",
    modalContent: "Satu pulau dianggap selesai jika siswa menyelesaikan Cerita DAN Kuis.",
    exampleBox: "Menyelesaikan cerita (50%) + Menyelesaikan Kuis (50%) = 100% per pulau."
  },
  totalXp: {
    tooltipText: "Total poin yang dikumpulkan siswa selama bermain.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Total XP",
    modalContent: "XP merupakan akumulasi seluruh aktivitas belajar siswa dan tersimpan otomatis pada sistem. Semakin tinggi XP berarti semakin aktif eksplorasi dan penyelesaian aktivitas."
  },
  literasiBudaya: {
    tooltipText: "Grafik jaring laba-laba yang membandingkan kemampuan literasi kuis siswa per level kesulitan melawan rata-rata kelas.",
    modalTitle: "Bagaimana cara membaca grafik ini?",
    modalMetricName: "Kemampuan Kognitif Awal",
    modalContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ margin: 0 }}>Sistem tidak sekadar menggabungkan nilai menjadi satu rata-rata akhir, melainkan membaginya ke dalam 3 tingkat literasi:</div>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li><b>Level 1 (Ingatan):</b> Kemampuan mengingat fakta dasar budaya.</li>
          <li><b>Level 2 (Analisis):</b> Kemampuan memahami dan menganalisis elemen cerita.</li>
          <li><b>Level 3 (Pendapat):</b> Kemampuan memberikan opini dan evaluasi.</li>
        </ul>
        <div style={{ margin: 0 }}>Titik sudut pada grafik menunjukkan rata-rata nilai kuis murni siswa pada level tersebut, disandingkan langsung dengan "Target" atau rata-rata seluruh teman sekelasnya.</div>
      </div>
    ),
    exampleBox: "Jika garis radar siswa pada sudut 'Analisis (L2)' berada lebih luar dibanding garis abu-abu kelas, berarti kemampuan analisis siswa ini di atas rata-rata!"
  },
  analisisWaktu: {
    tooltipText: "Total waktu belajar seluruh siswa dalam 7 hari terakhir.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Analisis Waktu",
    modalContent: "Grafik menghitung total durasi belajar siswa lalu mengelompokkannya per hari.",
    exampleBox: "Senin: 10 menit, Selasa: 5 menit."
  },
  ceritaTerpopuler: {
    tooltipText: "Cerita rakyat yang paling sering diselesaikan berulang kali oleh siswa.",
    modalTitle: "Bagaimana grafik ini terbentuk?",
    modalMetricName: "Cerita Rakyat Terpopuler",
    modalContent: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>Grafik menghitung berapa kali siswa menyelesaikan setiap judul cerita hingga tuntas — bukan dibandingkan dengan siswa lain.</p>
        <p style={{ margin: 0 }}>Semakin tinggi batang grafik, semakin sering cerita itu dibaca ulang oleh siswa ini.</p>
      </div>
    ),
    exampleBox: (
      <div>
        <div style={{ marginBottom: '4px' }}>Sangkuriang diselesaikan 3 kali → batang = 3</div>
        <div>Malin Kundang diselesaikan 1 kali → batang = 1</div>
      </div>
    ),
    noteText: "Ini adalah rekam jejak individual siswa, bukan popularitas antar kelas."
  },
  minatBudaya: {
    tooltipText: "Frekuensi eksplorasi topik kuis kultur siswa dibandingkan rata-rata kelas.",
    modalTitle: "Bagaimana grafik ini terbentuk?",
    modalMetricName: "Minat Budaya Terbesar",
    modalContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p style={{ margin: 0 }}>Grafik ini menunjukkan topik budaya yang paling sering dieksplorasi melalui Kuis Kultur, bukan berdasarkan nilai atau skor.</p>
        <p style={{ margin: 0 }}>Sistem menghitung berapa kali siswa menyelesaikan aktivitas pada setiap topik, lalu membandingkannya dengan rata-rata seluruh siswa di kelas.</p>
        <p style={{ margin: 0 }}>
          🟠 <b>Batang oranye</b> = jumlah percobaan topik yang dimainkan oleh siswa ini.<br/>
          🟤 <b>Batang coklat</b> = rata-rata jumlah percobaan seluruh siswa di kelas.
        </p>
        <p style={{ margin: 0 }}>Semakin tinggi batang berarti semakin sering topik tersebut dipilih dan dieksplorasi.</p>
      </div>
    ),
    exampleBox: (
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Rumah Adat</div>
        <div style={{ marginBottom: '2px' }}>Siswa ini → 3 kali</div>
        <div style={{ marginBottom: '4px' }}>Rata-rata kelas → 1,4 kali</div>
        <div style={{ fontSize: '0.9rem', fontStyle: 'italic', marginTop: '6px', color: '#7B4F2E' }}>
          Artinya siswa ini mengeksplorasi Rumah Adat lebih sering dibanding rata-rata teman sekelas.
        </div>
      </div>
    ),
    noteText: "Catatan: Grafik ini menggambarkan ketertarikan dan eksplorasi, bukan kemampuan atau nilai belajar siswa."
  },
  statistikCerita: {
    tooltipText: "Info perhitungan metrik Cerita Rakyat.",
    modalTitle: "Statistik Cerita Rakyat",
    modalMetricName: "Penjelasan Metrik",
    modalContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>Sesi Cerita Selesai</div>
          <div style={{ fontSize: '0.9rem' }}>Angka ini menghitung setiap kali kamu menamatkan satu sesi baca cerita. Jika membaca cerita yang sama berulang kali sampai selesai, masing-masing pengulangan tetap dihitung.</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>XP Cerita Rakyat</div>
          <div style={{ fontSize: '0.9rem' }}>Total XP yang diperoleh dari menyelesaikan aktivitas Cerita Rakyat. XP didapat setelah cerita selesai, dan beberapa aktivitas interaktif di dalamnya juga dapat ikut menyumbang XP.</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>Rata-rata Pre-Test</div>
          <div style={{ fontSize: '0.9rem' }}>Rata-rata nilai kuis sebelum membaca dari cerita yang sudah diselesaikan. Kalau mengulang cerita, nilainya juga ikut dijumlahkan ke rata-rata.</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>Rata-rata Post-Test</div>
          <div style={{ fontSize: '0.9rem' }}>Rata-rata nilai kuis setelah membaca dari cerita yang sudah diselesaikan. Mengulang cerita akan memberimu kesempatan memperbaiki rata-rata.</div>
        </div>
      </div>
    )
  },
  statistikQuiz: {
    tooltipText: "Info perhitungan metrik Quiz Budaya.",
    modalTitle: "Statistik Quiz Budaya",
    modalMetricName: "Penjelasan Metrik",
    modalContent: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>Eksplorasi Budaya</div>
          <div style={{ fontSize: '0.9rem' }}>Persentase pulau yang sudah kamu jelajahi melalui Kuis Budaya. Menunjukkan persentase pulau yang kuisnya sudah berhasil diselesaikan minimal satu kali.</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>XP Quiz Budaya</div>
          <div style={{ fontSize: '0.9rem' }}>Setiap kali kamu berhasil menamatkan sebuah kuis, kamu akan mendapatkan XP khusus. Mengulang kuis yang sama juga memberi XP tambahan.</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>Peringkat Petualang</div>
          <div style={{ fontSize: '0.9rem' }}>Gelar ditentukan dari progres level dan total aktivitas belajar. Semakin tinggi level kuis yang dicapai atau semakin aktif mengumpulkan XP, gelarmu dapat meningkat.</div>
        </div>
        <div>
          <div style={{ fontWeight: 'bold', color: '#955c2e', marginBottom: '4px' }}>Rata-rata Nilai Quiz</div>
          <div style={{ fontSize: '0.9rem' }}>Nilai rata-rata persentase dari seluruh percobaan Kuis Budaya. Semua percobaan kuis dihitung dengan bobot yang sama.</div>
        </div>
      </div>
    )
  }
};
