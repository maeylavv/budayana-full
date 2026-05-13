import React, { useState } from "react";
import "./CookieBlockedPopup.css";

export default function CookieBlockedPopup({ isOpen, onClose, onRetry }) {
  const [showGuide, setShowGuide] = useState(false);
  const [activeTab, setActiveTab] = useState("safari");

  if (!isOpen) return null;

  return (
    <div className='cookie-popup-overlay'>
      <div className='cookie-popup-card'>
        {/* Header dengan Maskot Lucu */}
        <div className='cookie-popup-header'>
          <img
            className='cookie-mascot'
            src='/assets/budayana/islands/Monyet.png'
            alt='Monyet Budayana'
          />
          <h2>Yah, Sesi Kamu Terhalang! 🙈</h2>
        </div>

        {/* Konten Utama */}
        <div className='cookie-popup-body'>
          <p className='cookie-main-text'>
            Login kamu sebenarnya <strong>BERHASIL</strong>, tapi browser kamu
            memblokir <em>Cross-Site Cookies</em> sehingga kami tidak bisa
            menyimpan tiket masukmu.
          </p>
          <p className='cookie-sub-text'>
            Yuk, izinkan cookie sebentar agar kamu bisa mulai bermain dan
            menjelajah pulau-pulau seru di Budayana! 🏝️✨
          </p>

          {/* Tombol Aksi */}
          <div className='cookie-popup-actions'>
            <button className='cookie-btn-primary' onClick={onRetry}>
              🔄 Coba Lagi
            </button>
            <button
              className='cookie-btn-secondary'
              onClick={() => setShowGuide(!showGuide)}
            >
              {showGuide
                ? "Tutup Cara Mengaktifkan 📖"
                : "Cara Mengaktifkan Cookies 💡"}
            </button>
          </div>

          {/* Panduan Akordeon / Tabs */}
          {showGuide && (
            <div className='cookie-guide-container'>
              <div className='cookie-guide-tabs'>
                <button
                  className={`cookie-tab-btn ${
                    activeTab === "safari" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("safari")}
                >
                  🧭 Safari
                </button>
                <button
                  className={`cookie-tab-btn ${
                    activeTab === "chrome" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("chrome")}
                >
                  🌐 Chrome
                </button>
                <button
                  className={`cookie-tab-btn ${
                    activeTab === "brave" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("brave")}
                >
                  🦁 Brave
                </button>
              </div>

              <div className='cookie-guide-content'>
                {activeTab === "safari" && (
                  <ol>
                    <li>
                      Buka <strong>Settings</strong> (Pengaturan) di perangkatmu
                      lalu pilih <strong>Safari</strong>.
                    </li>
                    <li>
                      Gulir ke bagian <strong>Privacy & Security</strong>.
                    </li>
                    <li>
                      Matikan opsi{" "}
                      <strong className='highlight-setting'>
                        "Prevent Cross-Site Tracking"
                      </strong>{" "}
                      (Cegah Pelacakan Lintas Situs).
                    </li>
                    <li>Kembali ke halaman ini dan klik tombol Coba Lagi.</li>
                  </ol>
                )}

                {activeTab === "chrome" && (
                  <ol>
                    <li>
                      Buka <strong>Settings</strong> (Pengaturan) Chrome &gt;{" "}
                      <strong>Privacy and security</strong>
                    </li>
                    <li>
                      Pilih menu <strong>Third-party cookies</strong>.
                    </li>
                    <li>
                      Pilih opsi{" "}
                      <strong className='highlight-setting'>
                        "Allow third-party cookies"
                      </strong>{" "}
                      agar sistem login lintas situs Vercel dapat bekerja.
                    </li>
                    <li>Muat ulang halaman Budayana.</li>
                  </ol>
                )}

                {activeTab === "brave" && (
                  <ol>
                    <li>
                      Klik ikon <strong>Singa (Brave Shields)</strong> di ujung
                      kanan kolom alamat web (URL bar).
                    </li>
                    <li>
                      Klik <strong>Advanced Controls</strong> jika menu
                      tersembunyi.
                    </li>
                    <li>
                      Ubah opsi <em>Cross-site cookies blocked</em> menjadi{" "}
                      <strong className='highlight-setting'>
                        "All cookies allowed"
                      </strong>{" "}
                      atau <strong>"Cross-site cookies allowed"</strong>.
                    </li>
                    <li>Halaman akan otomatis memuat ulang.</li>
                  </ol>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Tombol Tutup Bawah */}
        <button className='cookie-close-link' onClick={onClose}>
          Tutup & Kembali ke Login
        </button>
      </div>
    </div>
  );
}
