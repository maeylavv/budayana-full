export const GURU_INFO = {
  rataRataKenaikan: {
    tooltipText: "Menunjukkan seberapa besar pemahaman siswa meningkat setelah belajar. Semakin tinggi persentasenya, semakin besar perkembangan kelas.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Rata-rata Kenaikan",
    modalContent: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>Sistem menggunakan metode N-Gain untuk melihat perkembangan belajar berdasarkan ruang peningkatan yang masih tersedia.</p>
        <div style={{ backgroundColor: '#FDE8C0', padding: '10px', borderRadius: '8px', border: '1px solid #C8935A' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>Panduan Membaca Hasil:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟢</span> &gt;70% → Perkembangan sangat baik</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟡</span> 40–70% → Perkembangan cukup</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>🔴</span> &lt;40% → Masih perlu pendampingan</div>
        </div>
      </div>
    ),
    exampleBox: "Nilai awal = 60, Nilai akhir = 80. Formula: ((80−60)/(100−60)) × 100 = 50%. Keterangan: angka pada dashboard merupakan rata-rata seluruh siswa.",
    noteText: "Persentase ini bukan kenaikan nilai langsung."
  },
  siswaAktif: {
    tooltipText: "Jumlah siswa yang mengerjakan minimal 1 cerita atau kuis dalam 7 hari terakhir.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Siswa Aktif vs Tidak",
    modalContent: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>Siswa dianggap aktif jika mengakses Cerita atau Kuis, memiliki waktu bermain, atau memperoleh XP. Login tanpa aktivitas tidak dihitung.</p>
        <div style={{ backgroundColor: '#FDE8C0', padding: '10px', borderRadius: '8px', border: '1px solid #C8935A' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>Panduan Membaca Hasil:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟢</span> &gt;80% siswa aktif</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟡</span> 50–80% siswa aktif</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>🔴</span> &lt;50% siswa aktif</div>
        </div>
      </div>
    ),
    exampleBox: "30 siswa → 13 aktif, 17 tidak aktif."
  },
  rataRataLevel: {
    tooltipText: "Rata-rata performa siswa pada tingkat Ingatan, Analisis, dan Pendapat.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Rata-rata Kelas per Level",
    modalContent: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}>Level 1 = Ingatan, Level 2 = Analisis, Level 3 = Pendapat. Sistem mengambil seluruh skor kuis yang selesai lalu menghitung rata-ratanya per level.</p>
        <div style={{ backgroundColor: '#FDE8C0', padding: '10px', borderRadius: '8px', border: '1px solid #C8935A' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>Panduan Membaca Hasil Literasi:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟢</span> ≥75% → Penguasaan materi kuat</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟡</span> 50–74% → Penguasaan sedang</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>🔴</span> &lt;50% → Masih perlu bimbingan</div>
        </div>
      </div>
    ),
    exampleBox: "80% dan 60% → rata-rata 70%."
  },
  penyelesaianPulau: {
    tooltipText: "Persentase penyelesaian Cerita dan Kuis pada tiap pulau.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Tingkat Penyelesaian Pulau",
    modalContent: "Satu pulau dianggap selesai jika siswa menyelesaikan Cerita DAN Kuis.",
    exampleBox: "10 siswa, 10 selesai cerita, 5 selesai kuis → (10+5)/(10×2) = 75%."
  },
  analisisWaktu: {
    tooltipText: "Total waktu belajar seluruh siswa dalam 7 hari terakhir.",
    modalTitle: "Bagaimana nilai ini dihitung?",
    modalMetricName: "Analisis Waktu",
    modalContent: "Grafik menghitung total durasi belajar seluruh siswa lalu mengelompokkannya per hari.",
    exampleBox: "Senin — Anak A: 10 menit, Anak B: 5 menit → Total: 15 menit."
  },
  tabelSiswa: {
    tooltipText: "Keterangan perhitungan metrik Total XP, Peningkatan Cerita, dan Literasi Budaya pada tabel.",
    modalTitle: "Bagaimana metrik ini dihitung?",
    modalMetricName: "Tabel Siswa",
    modalContent: (
      <div>
        <p style={{ margin: '0 0 12px 0' }}><strong>Total XP:</strong> Akumulasi seluruh aktivitas belajar siswa dan tersimpan otomatis pada sistem.</p>
        <p style={{ margin: '0 0 12px 0' }}><strong>Peningkatan Cerita:</strong> Rata-rata perkembangan pemahaman siswa (Post-test vs Pre-test) menggunakan metode N-Gain.</p>
        <p style={{ margin: '0 0 16px 0' }}><strong>Literasi Budaya:</strong> Rata-rata dari seluruh skor Kuis Kultur yang telah diselesaikan.</p>
        
        <div style={{ backgroundColor: '#FDE8C0', padding: '10px', borderRadius: '8px', border: '1px solid #C8935A' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Panduan Membaca Peningkatan & Literasi:</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟢</span> &gt;70% (Cerita) / ≥75% (Kuis) → Sangat baik</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}><span>🟡</span> 40–70% (Cerita) / 50–74% (Kuis) → Cukup</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span>🔴</span> &lt;40% (Cerita) / &lt;50% (Kuis) → Perlu bimbingan</div>
        </div>
      </div>
    )
  }
};
