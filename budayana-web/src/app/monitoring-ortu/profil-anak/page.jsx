import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { monitoringApi } from "../../../lib/api";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

export default function MonitoringOrtuProfilAnak() {
  const [searchQuery, setSearchQuery] = useState("");
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const data = await monitoringApi.listStudents();
        setChildren(data);
      } catch (err) {
        console.error("Gagal mengambil daftar anak:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchChildren();
  }, []);

  const filteredChildren = children.filter(child => 
    child.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 className="results-section-title" style={{ fontSize: '2rem', margin: 0, color: '#955C2E', fontWeight: 'bold' }}>Daftar Profil Anak</h2>
              <div style={{ position: 'relative', width: '300px' }}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari..." 
                  style={{ width: '100%', padding: '10px 16px', borderRadius: '999px', border: '2px solid #955C2E', outline: 'none', fontFamily: "'Fredoka One', sans-serif", color: '#5C3A1E', fontSize: '1.1rem' }}
                />
                <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#955C2E' }} size={20} />
              </div>
            </div>
            
            <div className="history-table-container" style={{ height: 'auto', minHeight: '500px' }}>
              <div className="history-header" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', backgroundColor: '#955C2E', color: 'white', padding: '16px 24px', alignItems: 'center' }}>
                <div style={{ paddingLeft: '24px' }}>Nama</div>
                <div style={{ textAlign: 'center' }}>Username</div>
                <div style={{ textAlign: 'center' }}>Kelas</div>
                <div style={{ textAlign: 'center' }}>Label Kelas</div>
                <div style={{ textAlign: 'center' }}>Aksi</div>
              </div>
              <div className="history-body" style={{ overflowY: 'auto' }}>
                {loading ? (
                   <div style={{ padding: '40px', textAlign: 'center', color: '#955C2E' }}>Memuat data anak...</div>
                ) : filteredChildren.length === 0 ? (
                   <div style={{ padding: '40px', textAlign: 'center', color: '#955C2E' }}>Tidak ada profil anak ditemukan.</div>
                ) : (
                  filteredChildren.map((child) => (
                    <div key={child.id} className="history-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '16px 24px', borderBottom: '2px solid #955C2E', alignItems: 'center', backgroundColor: '#FEF6DF' }}>
                      <div style={{ fontWeight: '800', color: '#333' }}>{child.name}</div>
                      <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{child.displayUsername || child.username || "-"}</div>
                      <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{child.grade}</div>
                      <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{child.classLabel || "-"}</div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <Link to={`/monitoring-ortu/profil-anak/${child.id}`} style={{ backgroundColor: '#f3a64c', color: 'white', padding: '10px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', border: 'none', cursor: 'pointer' }}>
                              Lihat Profil <Search size={18} />
                          </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
