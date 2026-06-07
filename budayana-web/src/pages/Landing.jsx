import { useState, useEffect } from "react";
import "./Landing.css";
import { useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import MusicToggleButton from "../components/MusicToggleButton.jsx";

export default function Landing() {
    const navigate = useNavigate();
    const [activeFeature, setActiveFeature] = useState("cerita-rakyat");

    // Dropdown states for mobile
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const close = (e) => {
            if (!e.target.closest('.login-dropdown-wrapper')) setIsLoginOpen(false);
            if (!e.target.closest('.register-dropdown-wrapper')) setIsRegisterOpen(false);
            if (!e.target.closest('.explore-dropdown-wrapper')) setIsExploreOpen(false);
        };
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="page_landing">
            <div className="lnd-navbar-container">
                <MusicToggleButton />
                <div className="lnd-navbar">
                    <img src="/assets/budayana/islands/Budayana text.png" alt="Budayana" className="lnd-logo" onClick={() => window.scrollTo(0, 0)} />
                    
                    {/* Desktop Navigation */}
                    <div className="lnd-desktop-nav">
                        <nav className="lnd-links">
                            <button onClick={() => scrollToSection("about")}>Tentang Kami</button>
                            <button onClick={() => scrollToSection("features")}>Fitur Utama</button>
                            <button onClick={() => scrollToSection("contact")}>Kontak</button>
                        </nav>
                        <div className="relative inline-block group login-dropdown-wrapper">
                            <button
                                className="lnd-masuk-btn"
                                onClick={(e) => {
                                    if (window.innerWidth <= 900) {
                                        e.stopPropagation();
                                        setIsLoginOpen(v => !v);
                                    }
                                }}
                            >
                                Masuk
                            </button>
                            <div className={`absolute right-0 mt-2 w-56 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 transition-all duration-300 z-50 ${isLoginOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                                <button onClick={() => navigate('/login')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Siswa</button>
                                <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Guru</button>
                                <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-left px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Orang Tua</button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button 
                        className="lnd-mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[99999] bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
                    <div 
                        className="absolute top-0 right-0 h-full w-64 bg-[#fdf5e6] shadow-2xl p-6 flex flex-col gap-6 transform transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4 border-b-2 border-[#955C2E] pb-4">
                            <h2 className="font-fredoka-one text-[#955C2E] text-2xl font-bold">Menu</h2>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#955C2E]">
                                <X size={32} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-4 font-fredoka-one text-[#955C2E] text-lg font-semibold">
                            <button className="text-left py-2 border-b border-[#e8d9c0]" onClick={() => { setIsMobileMenuOpen(false); scrollToSection("about"); }}>Tentang Kami</button>
                            <button className="text-left py-2 border-b border-[#e8d9c0]" onClick={() => { setIsMobileMenuOpen(false); scrollToSection("features"); }}>Fitur Utama</button>
                            <button className="text-left py-2 border-b border-[#e8d9c0]" onClick={() => { setIsMobileMenuOpen(false); scrollToSection("contact"); }}>Kontak</button>
                        </nav>
                        <div className="flex flex-col gap-3 mt-auto mb-4">
                            <h3 className="font-fredoka-one text-[#955C2E] text-xl font-bold mb-2">Masuk</h3>
                            <button onClick={() => navigate('/login')} className="bg-white border-2 border-[#955C2E] text-[#955C2E] font-fredoka-one py-2 rounded-full hover:bg-[#955C2E] hover:text-white transition-colors font-bold">Siswa</button>
                            <button onClick={() => navigate('/monitoring-login-guru')} className="bg-white border-2 border-[#955C2E] text-[#955C2E] font-fredoka-one py-2 rounded-full hover:bg-[#955C2E] hover:text-white transition-colors font-bold">Guru</button>
                            <button onClick={() => navigate('/monitoring-login-ortu')} className="bg-white border-2 border-[#955C2E] text-[#955C2E] font-fredoka-one py-2 rounded-full hover:bg-[#955C2E] hover:text-white transition-colors font-bold">Orang Tua</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="lnd-hero">
                <img src="/assets/budayana/islands/Landing Group.png" alt="Mascot Group" className="lnd-hero-mascots" />
                <div className="lnd-hero-text">
                    <img src="/assets/budayana/islands/Game Name.png" alt="Banner" className="lnd-banner" />
                    <h2 className="lnd-hero-sub">Platform Literasi<br />Budaya untuk Siswa</h2>
                    <div className="relative inline-block group register-dropdown-wrapper">
                        <button
                            className="lnd-daftar-btn"
                            onClick={(e) => {
                                if (window.innerWidth <= 900) {
                                    e.stopPropagation();
                                    setIsRegisterOpen(v => !v);
                                }
                            }}
                        >
                            Daftar Akun
                        </button>
                        <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 transition-all duration-300 z-50 ${isRegisterOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                            <button onClick={() => navigate('/sign-up')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Daftar Siswa</button>
                            <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Daftar Guru</button>
                            <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Daftar Orang Tua</button>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/assets/budayana/islands/rumput pendek.png" alt="Ground Wave" className="lnd-ground-wave" />

            <div id="about" className="lnd-about">
                <h1 className="lnd-title-brown">Tentang Kami</h1>
                <div className="lnd-about-content">
                    <div className="lnd-about-img-circle">
                        <img src="/assets/budayana/islands/Harimau.png" alt="Harimau" />
                    </div>
                    <div className="lnd-about-text-content">
                        <p>Budayana adalah platform pembelajaran digital yang dirancang untuk membantu siswa mengenal dan memahami budaya Indonesia melalui pendekatan literasi berbasis cerita.</p>
                        <p>Kami menggabungkan teknologi dan nilai budaya untuk menciptakan pengalaman belajar yang ramah anak, mudah digunakan, dan relevan dengan kebutuhan pendidikan saat ini.</p>
                    </div>
                </div>
            </div>

            <div className="lnd-interaktif">
                <h1 className="lnd-title-white">Kuis Budaya Interaktif</h1>
                <p className="lnd-subtitle-white">Jelajahi kekayaan budaya Indonesia dari 8 pulau<br />dengan cara yang menyenangkan!</p>
                <div className="lnd-grid-islands">
                    <IslandCard img="Sumatra.png" name="Sumatra" navigate={navigate} />
                    <IslandCard img="Jawa.png" name="Jawa" navigate={navigate} />
                    <IslandCard img="Kalimantan.png" name="Kalimantan" navigate={navigate} />
                    <IslandCard img="Sulawesi.png" name="Sulawesi" navigate={navigate} />
                    <IslandCard img="Papua.png" name="Papua" navigate={navigate} />
                    <IslandCard img="Bali.png" name="Bali" navigate={navigate} />
                    <IslandCard img="Maluku.png" name="Maluku" navigate={navigate} />
                    <IslandCard img="Nusa Tenggara.png" name="Nusa Tenggara" navigate={navigate} />
                </div>
                <div className="relative inline-block group explore-dropdown-wrapper">
                    <button
                        className="lnd-btn-jelajah"
                        onClick={(e) => {
                            if (window.innerWidth <= 900) {
                                e.stopPropagation();
                                setIsExploreOpen(v => !v);
                            }
                        }}
                    >
                        Mulai Jelajah Sekarang! 🚀
                    </button>
                    <div className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 bg-white border border-[#E8D9C0] rounded-xl shadow-lg py-2 transition-all duration-300 z-50 ${isExploreOpen ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`}>
                        <button onClick={() => navigate('/login')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Siswa</button>
                        <button onClick={() => navigate('/monitoring-login-guru')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Guru</button>
                        <button onClick={() => navigate('/monitoring-login-ortu')} className="w-full text-center px-4 py-2 hover:bg-[#FDF5E6] font-fredoka-one text-[#955C2E] font-semibold transition-colors">Masuk sebagai Orang Tua</button>
                    </div>
                </div>
            </div>

            <div id="features" className="lnd-features">
                <h1 className="lnd-title-brown">Fitur Utama</h1>
                <p className="lnd-subtitle-brown">Jelajahi kekayaan budaya Indonesia dari 8 pulau<br />dengan cara yang menyenangkan!</p>

                <div className="lnd-feature-toggle-container">
                    <button
                        className={`lnd-feature-toggle-btn ${activeFeature === 'cerita-rakyat' ? 'active' : ''}`}
                        onClick={() => setActiveFeature('cerita-rakyat')}
                    >
                        Cerita Rakyat
                    </button>
                    <button
                        className={`lnd-feature-toggle-btn ${activeFeature === 'quiz-kultur' ? 'active' : ''}`}
                        onClick={() => setActiveFeature('quiz-kultur')}
                    >
                        Quiz Kultur
                    </button>
                </div>

                <div className="lnd-features-content lnd-features-roadmap-wrapper">
                    {activeFeature === 'cerita-rakyat' ? (
                        <img src="/assets/budayana/islands/Alur Cerita Rakyat.png" alt="Alur Cerita Rakyat" className="lnd-roadmap-img" />
                    ) : (
                        <img src="/assets/budayana/islands/Alur Quiz Kultur.png" alt="Alur Quiz Kultur" className="lnd-roadmap-img" />
                    )}

                    <img src="/assets/budayana/islands/Badak.png" alt="Badak" className="lnd-badak-float" style={{ right: '-200px', bottom: '-50px', zIndex: 4 }} />
                </div>
            </div>

            <div className="lnd-wave-footer">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C69.67,36.57,143.27,65.89,217.39,78.23Z" fill="#5c4333"></path>
                </svg>
            </div>

            <div id="contact" className="lnd-kontak">
                <h1 className="lnd-title-white">Kontak Kami</h1>
                <p className="lnd-kontak-sub">Punya pertanyaan, saran, atau ingin berkolaborasi?<br />Jangan ragu untuk mengirimkan pesan kepada kami.</p>
                <div className="lnd-contact-info">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=budayana3ra@gmail.com&su=Halo%20Tim%20Budayana&body=Halo,%20saya%20ingin%20bertanya%20tentang%20Budayana."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lnd-contact-row"
                    >
                        <img src="/assets/budayana/islands/email.png" alt="email" />
                        <span>budayana3ra@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

function IslandCard({ img, name, navigate }) {
    return (
        <div className="lnd-island-card" onClick={() => navigate('/login')}>
            <img src={`/assets/budayana/islands/${img}`} alt={name} />
            <span>{name}</span>
        </div>
    );
}

function FlowCircle({ img, text }) {
    return (
        <div style={{
            width: '180px', height: '120px',
            borderRadius: '50%', backgroundColor: 'white',
            border: '3px solid #7B4F2E',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            zIndex: 2, margin: '20px 0'
        }}>
            <img src={`/assets/budayana/islands/${img}`} alt={text} style={{ width: '45px', height: '45px', objectFit: 'contain', marginBottom: '8px' }} />
            <span style={{ color: '#955C2E', fontWeight: '800', fontSize: '1.1rem' }}>{text}</span>
        </div>
    );
}