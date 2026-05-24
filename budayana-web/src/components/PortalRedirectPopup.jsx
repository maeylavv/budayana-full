import { useNavigate } from "react-router-dom";
import "./PortalRedirectPopup.css";

export default function PortalRedirectPopup({ open, currentPortal, onClose }) {
  const navigate = useNavigate();

  if (!open) return null;

  const handleRedirect = (path) => {
    onClose();
    navigate(path);
  };

  // Render buttons based on currentPortal to match images 2, 3, and 4
  const renderButtons = () => {
    if (currentPortal === "student") {
      // Image 2: Saya Guru! (Teal) and Saya Orang Tua! (Purple)
      return (
        <>
          <button 
            className="portal-btn-redirect btn-teacher" 
            onClick={() => handleRedirect("/monitoring-login-guru")}
          >
            Saya guru!
          </button>
          <button 
            className="portal-btn-redirect btn-parent" 
            onClick={() => handleRedirect("/monitoring-login-ortu")}
          >
            Saya orang tua!
          </button>
        </>
      );
    }
    if (currentPortal === "teacher") {
      // Image 3: Saya Pelajar/Murid! (Coral) and Saya Orang Tua! (Purple)
      return (
        <>
          <button 
            className="portal-btn-redirect btn-student" 
            onClick={() => handleRedirect("/login")}
          >
            Saya pelajar/murid!
          </button>
          <button 
            className="portal-btn-redirect btn-parent" 
            onClick={() => handleRedirect("/monitoring-login-ortu")}
          >
            Saya orang tua!
          </button>
        </>
      );
    }
    if (currentPortal === "parent") {
      // Image 4: Saya Pelajar/Murid! (Coral) and Saya Guru! (Teal)
      return (
        <>
          <button 
            className="portal-btn-redirect btn-student" 
            onClick={() => handleRedirect("/login")}
          >
            Saya pelajar/murid!
          </button>
          <button 
            className="portal-btn-redirect btn-teacher" 
            onClick={() => handleRedirect("/monitoring-login-guru")}
          >
            Saya guru!
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <div className="portal-overlay" onClick={onClose}>
      <div className="portal-card" onClick={(e) => e.stopPropagation()}>
        <div className="portal-illustration-wrapper">
          <img 
            src="/assets/budayana/islands/bocah.png" 
            alt="Budayana Explorer" 
            className="portal-illustration"
          />
        </div>
        
        <h3 className="portal-title">
          Sepertinya Anda berada di portal login yang salah, silakan menuju ke portal Anda yang sebenarnya.
        </h3>
        
        <div className="portal-actions">
          {renderButtons()}
        </div>
      </div>
    </div>
  );
}
