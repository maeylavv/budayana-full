import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { authClient } from "../lib/auth-client";
import { User, Users, BarChart3, LogOut, Menu, X } from "lucide-react";

export default function MonitoringSidebar({ role }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const isGuru = role === "guru";

  const getMenuClass = (path, exact = false) => {
    const isActive = exact ? pathname === path : pathname?.startsWith(path);
    return `flex items-center justify-center gap-2 px-6 py-2.5 mx-4 my-2 font-fredoka-one font-bold text-lg rounded-full transition-colors ${
      isActive
        ? "text-[#f3a64c] bg-[#FEEBCC] border-2 border-[#f3a64c]"
        : "text-[#955C2E] hover:bg-[#F2E5D3] border-2 border-transparent"
    }`;
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("ba_token");
    localStorage.removeItem("ba_user_id");

    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            window.location.href = "/";
          },
          onError: (err) => {
            console.error("Logout error:", err);
            window.location.href = "/";
          }
        }
      });
    } catch (err) {
      console.error("Logout catch error:", err);
      window.location.href = "/";
    }
  };

  const getPageTitle = () => {
    if (pathname?.includes("/profil-anak")) return "Profil Anak";
    if (pathname?.includes("/profil")) return "Profil";
    if (pathname?.includes("/hasil")) return "Hasil";
    return "Monitoring";
  };

  return (
    <>
      <style>{`
        /* Global stats-grid responsiveness */
        .stats-grid, 
        div[style*="grid-template-columns: repeat(4, 1fr)"], 
        div[style*="grid-template-columns:repeat(4,1fr)"],
        div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
          display: grid !important;
          grid-template-columns: repeat(4, 1fr) !important;
          gap: 20px !important;
        }

        /* Unified Responsive Chart Heights Safeguards */
        .chart-wrapper-responsive {
          position: relative;
          width: 100%;
          height: 300px;
          min-height: 300px;
        }

        .chart-wrapper-200 {
          position: relative;
          width: 100%;
          height: 200px;
        }
        .chart-wrapper-250 {
          position: relative;
          width: 100%;
          height: 250px;
        }
        .chart-wrapper-300 {
          position: relative;
          width: 100%;
          height: 300px;
        }
        .chart-wrapper-350 {
          position: relative;
          width: 100%;
          height: 350px;
        }

        /* Prevent action button wrapping in tables */
        .history-row button,
        .history-row a,
        .history-row span,
        .table-container button,
        .table-container a,
        .no-wrap-btn {
          white-space: nowrap !important;
          word-break: keep-all !important;
        }

        /* Custom themed scrollbars for scroll indicators */
        .history-table-container::-webkit-scrollbar,
        .table-container::-webkit-scrollbar {
          height: 10px !important;
          background-color: #FEF6DF !important;
        }
        .history-table-container::-webkit-scrollbar-thumb,
        .table-container::-webkit-scrollbar-thumb {
          background-color: #f3a64c !important;
          border-radius: 999px !important;
          border: 2px solid #FEF6DF !important;
        }
        .history-table-container::-webkit-scrollbar-track,
        .table-container::-webkit-scrollbar-track {
          background-color: #FEF6DF !important;
          border-radius: 999px !important;
        }

        /* Mobile Dropdown Scroll & Landscape Usability */
        .mobile-menu-dropdown {
          max-height: 80vh !important;
          overflow-y: auto !important;
          -webkit-overflow-scrolling: touch;
        }

        @media (max-width: 1024px) {
          .chart-wrapper-responsive {
            height: 260px !important;
            min-height: 260px !important;
          }
          .stats-grid, 
          div[style*="grid-template-columns: repeat(4, 1fr)"], 
          div[style*="grid-template-columns:repeat(4,1fr)"],
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }

        @media (max-width: 768px) {
          .chart-wrapper-responsive {
            height: 220px !important;
            min-height: 220px !important;
          }

          /* Table Action Button Touch Target Guard */
          .history-row a,
          .history-row button,
          .table-container a,
          .table-container button,
          .no-wrap-btn {
            min-height: 44px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
          }

          /* Adjust layout space for fixed topbar */
          main {
            padding: 80px 12px 24px !important;
          }

          /* Force non-table grids to stack vertically on mobile */
          div[style*="grid-template-columns"]:not(.history-header):not(.history-row),
          div[style*="gridTemplateColumns"]:not(.history-header):not(.history-row),
          section[style*="grid-template-columns"],
          section[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          /* Override stats-grid containing 4 elements to wrap into 2 columns on tablet */
          .stats-grid, 
          div[style*="grid-template-columns: repeat(4, 1fr)"], 
          div[style*="grid-template-columns:repeat(4,1fr)"],
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }

          /* Profile header adjustment on mobile */
          .profile-top {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 16px !important;
            margin-left: 0 !important;
            margin-top: 10px !important;
          }

          .profile-top-text {
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
          }

          .profile-top-text div[style*="display: flex"] {
            justify-content: center !important;
            flex-wrap: wrap !important;
            gap: 10px !important;
          }

          /* Adjust back button wrapper on mobile child detail pages */
          div[style*="position: relative"][style*="display: flex"] {
            flex-direction: column !important;
            align-items: center !important;
            position: relative !important;
            width: 100% !important;
          }

          div[style*="position: relative"][style*="display: flex"] button[style*="position: absolute"] {
            position: relative !important;
            margin-bottom: 12px !important;
          }

          /* Enable scroll for tables on mobile so they don't break/squeeze */
          .history-table-container,
          .table-container {
            overflow-x: auto !important;
            width: 100% !important;
            border-radius: 12px !important;
            border-bottom: 4px solid #f3a64c !important;
            -webkit-overflow-scrolling: touch;
          }

          .history-header,
          .history-row {
            min-width: 680px !important;
          }

          /* Responsive visual charts width safety */
          .recharts-responsive-container {
            width: 100% !important;
            max-width: 100% !important;
          }

          /* Force chart container boxes to be full width and not overflow */
          div[style*="border: 2px solid #955C2E"],
          div[style*="border: 3px solid #955C2E"],
          div[style*="border:2px solid #955C2E"],
          div[style*="border:3px solid #955C2E"] {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            padding: 14px !important;
            border-radius: 16px !important;
          }

          /* Compact form inputs on mobile */
          .profile-form input,
          .form_profile input {
            padding: 14px 16px !important;
            font-size: 1.1rem !important;
            border-radius: 12px !important;
          }

          /* Stacking button list on mobile */
          div[style*="justify-content: flex-end"],
          div[style*="justifyContent: 'flex-end'"] {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            width: 100% !important;
          }
          div[style*="justify-content: flex-end"] button,
          div[style*="justifyContent: 'flex-end'"] button {
            width: 100% !important;
            text-align: center !important;
          }

          /* Responsive Filter & Search Layout - Stack vertically on mobile */
          div[style*="display: flex"][style*="gap: 12px"][style*="alignItems: center"][style*="flexWrap: wrap"],
          div[style*="display:flex"][style*="gap:12px"][style*="align-items:center"][style*="flex-wrap:wrap"],
          div[style*="display: flex"][style*="gap: 12px"][style*="align-items: center"][style*="flex-wrap: wrap"] {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            gap: 10px !important;
          }
          
          div[style*="display: flex"][style*="gap: 12px"] select,
          div[style*="display: flex"][style*="gap: 12px"] div[style*="position: relative"],
          div[style*="display: flex"][style*="gap: 12px"] input {
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          /* Stack page headers and search filters on mobile */
          div[style*="display: flex"][style*="justify-content: space-between"],
          div[style*="display: flex"][style*="justifyContent: 'space-between'"],
          div[style*="display:flex"][style*="justify-content:space-between"],
          .flex.flex-col.md\\:flex-row.md\\:justify-between.md\\:items-center {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
            margin-bottom: 20px !important;
          }

          div[style*="position: relative"][style*="width: 300px"],
          div[style*="position: relative"][style*="width: 250px"] {
            width: 100% !important;
            max-width: 100% !important;
          }

          /* Mobile dropdown menu link enhancements */
          .mobile-menu-link {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }

          /* Responsive charts grid overrides */
          .charts-grid-3,
          .charts-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          /* Typography responsive scaling */
          h1, .profile-name {
            font-size: 1.8rem !important;
            word-break: break-word !important;
            white-space: normal !important;
            max-width: 100% !important;
          }
          h2 {
            font-size: 1.35rem !important;
            word-break: break-word !important;
            white-space: normal !important;
            max-width: 100% !important;
          }
          h3 {
            font-size: 1.1rem !important;
            word-break: break-word !important;
            white-space: normal !important;
            max-width: 100% !important;
          }

          /* stat cards padding scale */
          .stat-card {
            padding: 12px 8px !important;
            border-radius: 16px !important;
          }
          .stat-value {
            font-size: 1.25rem !important;
          }
          .stat-label {
            font-size: 0.8rem !important;
          }
        }

        @media (max-width: 480px) {
          .stats-grid, 
          div[style*="grid-template-columns: repeat(4, 1fr)"], 
          div[style*="grid-template-columns:repeat(4,1fr)"],
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .charts-grid-3 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .charts-grid-2 {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        /* EXPLICIT LANDSCAPE MOBILE OVERRIDES */
        @media (max-height: 480px) and (orientation: landscape) {
          .chart-wrapper-responsive {
            height: 180px !important;
            min-height: 140px !important;
          }
          .mobile-menu-dropdown {
            max-height: 70vh !important;
          }
          .chart-wrapper-200 {
            height: 130px !important;
          }
          .chart-wrapper-250 {
            height: 160px !important;
          }
          .chart-wrapper-300 {
            height: 180px !important;
          }
          .chart-wrapper-350 {
            height: 200px !important;
          }

          /* Allow grid columns in landscape due to extra horizontal space */
          .stats-grid, 
          div[style*="grid-template-columns: repeat(4, 1fr)"], 
          div[style*="grid-template-columns:repeat(4,1fr)"],
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 10px !important;
          }

          .charts-grid-3 {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 12px !important;
          }

          .charts-grid-2 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }

          /* Compact styling for landscape mode to prevent heavy vertical scrolling */
          main {
            padding: 70px 16px 20px !important;
          }
        }
      `}</style>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-[#FEF6DF] h-screen shrink-0 border-r border-[#E8D9C0]">
        <div className="p-6 mt-4 text-center">
          <img 
            src="/assets/budayana/islands/Budayana Monitoring.png" 
            alt="Budayana Monitoring" 
            className="mx-auto mb-2 w-full max-w-[220px]" 
          />
          {isGuru ? (
            <img 
              src="/assets/budayana/islands/Dashboard Guru.png" 
              alt="Dashboard Guru" 
              className="mx-auto w-[80%] max-w-[180px]" 
            />
          ) : (
            <img 
              src="/assets/budayana/islands/Dashboard Wali.png" 
              alt="Dashboard Wali" 
              className="mx-auto w-[80%] max-w-[180px]" 
            />
          )}
        </div>

        <nav className="grow py-6 flex flex-col gap-1 mt-4">
          {isGuru ? (
            <>
              <Link to="/monitoring-guru/profil" className={getMenuClass("/monitoring-guru/profil", true)}>
                <span>Profil</span>
              </Link>
              <Link to="/monitoring-guru/profil-anak" className={getMenuClass("/monitoring-guru/profil-anak", false)}>
                <span>Profil Anak</span>
              </Link>
              <Link to="/monitoring-guru/hasil" className={getMenuClass("/monitoring-guru/hasil")}>
                <span>Hasil</span>
              </Link>
            </>
          ) : (
            <>
              <Link to="/monitoring-ortu/profil" className={getMenuClass("/monitoring-ortu/profil", true)}>
                <span>Profil</span>
              </Link>
              <Link to="/monitoring-ortu/profil-anak" className={getMenuClass("/monitoring-ortu/profil-anak", false)}>
                <span>Profil Anak</span>
              </Link>
              <Link to="/monitoring-ortu/hasil" className={getMenuClass("/monitoring-ortu/hasil")}>
                <span>Hasil</span>
              </Link>
            </>
          )}
          
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 px-6 py-2.5 mx-4 mt-6 font-fredoka-one font-bold text-lg text-[#c53030] hover:bg-[#fed7d7] rounded-full transition-colors border-none bg-transparent cursor-pointer w-[calc(100%-2rem)]"
          >
            <span>Keluar</span>
          </button>
        </nav>
      </div>

      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#FEF6DF] border-b border-[#E8D9C0] z-[9999] flex justify-between items-center px-4 shadow-sm">
        <div className="flex items-center gap-2 shrink-0">
          <img 
            src="/assets/budayana/islands/Budayana Monitoring.png" 
            alt="Budayana Monitoring" 
            className="h-8 object-contain" 
          />
        </div>
        
        {/* Dynamic Mobile Page Title */}
        <div className="text-[#955C2E] font-fredoka-one font-bold text-lg px-2 truncate max-w-[50%]">
          {getPageTitle()}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center p-2 rounded-xl bg-[#FEEBCC] border-2 border-[#f3a64c] text-[#955C2E] cursor-pointer shrink-0"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Light Overlay (Backdrop) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-[#7B4F2E]/20 backdrop-blur-sm z-[9997]"
        />
      )}

      {/* Mobile Slide-Down Dropdown Menu */}
      <div 
        className={`md:hidden fixed left-0 right-0 bg-[#FEF6DF] border-b-4 border-[#955C2E] z-[9998] shadow-lg rounded-b-3xl transition-all duration-300 ease-in-out mobile-menu-dropdown ${
          isOpen ? "top-16 opacity-100 translate-y-0" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{
          boxShadow: "0 12px 28px -5px rgba(123, 79, 46, 0.2)",
        }}
      >
        <div className="p-5 flex flex-col gap-1">
          {isGuru ? (
            <>
              <Link 
                to="/monitoring-guru/profil" 
                className={`${getMenuClass("/monitoring-guru/profil", true)} mobile-menu-link`} 
                onClick={() => setIsOpen(false)}
              >
                <span>Profil</span>
              </Link>
              <Link 
                to="/monitoring-guru/profil-anak" 
                className={`${getMenuClass("/monitoring-guru/profil-anak", false)} mobile-menu-link`} 
                onClick={() => setIsOpen(false)}
              >
                <span>Profil Anak</span>
              </Link>
              <Link 
                to="/monitoring-guru/hasil" 
                className={`${getMenuClass("/monitoring-guru/hasil")} mobile-menu-link`} 
                onClick={() => setIsOpen(false)}
              >
                <span>Hasil</span>
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/monitoring-ortu/profil" 
                className={`${getMenuClass("/monitoring-ortu/profil", true)} mobile-menu-link`} 
                onClick={() => setIsOpen(false)}
              >
                <span>Profil</span>
              </Link>
              <Link 
                to="/monitoring-ortu/profil-anak" 
                className={`${getMenuClass("/monitoring-ortu/profil-anak", false)} mobile-menu-link`} 
                onClick={() => setIsOpen(false)}
              >
                <span>Profil Anak</span>
              </Link>
              <Link 
                to="/monitoring-ortu/hasil" 
                className={`${getMenuClass("/monitoring-ortu/hasil")} mobile-menu-link`} 
                onClick={() => setIsOpen(false)}
              >
                <span>Hasil</span>
              </Link>
            </>
          )}
          
          <div className="h-[2px] bg-[#E8D9C0] mx-4 my-2" />

          <button 
            onClick={(e) => {
              setIsOpen(false);
              handleLogout(e);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3.5 mx-4 my-1 font-fredoka-one font-bold text-lg text-[#c53030] hover:bg-[#fed7d7] rounded-full transition-colors border-2 border-transparent bg-transparent cursor-pointer"
          >
            <span>Keluar</span>
          </button>
        </div>
      </div>
    </>
  );
}
