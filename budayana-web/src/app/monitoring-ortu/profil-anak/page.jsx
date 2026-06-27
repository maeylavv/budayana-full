import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { monitoringApi } from "../../../lib/api";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

const getAnimalAvatar = (seed) => {
  const animals = ["Buaya.png", "Badak.png", "Harimau.png", "Monyet.png"];
  if (!seed) return `/assets/budayana/islands/${animals[0]}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % animals.length;
  return `/assets/budayana/islands/${animals[index]}`;
};

export default function MonitoringOrtuProfilAnak() {
  const [searchQuery, setSearchQuery] = useState("");
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  
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

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const getSortedChildren = (childrenList) => {
    if (!sortConfig.key) return childrenList;
    
    return [...childrenList].sort((a, b) => {
      let aValue = a[sortConfig.key] || "";
      let bValue = b[sortConfig.key] || "";
      
      // Handle fallback for username
      if (sortConfig.key === 'displayUsername') {
        aValue = a.displayUsername || a.username || "";
        bValue = b.displayUsername || b.username || "";
      }

      if (typeof aValue === 'string') aValue = aValue.toLowerCase();
      if (typeof bValue === 'string') bValue = bValue.toLowerCase();
      
      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  };

  const renderSortIcon = (columnKey) => {
    const isActive = sortConfig.key === columnKey;
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0px', marginLeft: '6px', transform: 'translateY(1px)' }}>
        <ChevronUp 
          size={12} 
          strokeWidth={3} 
          style={{ 
            color: isActive && sortConfig.direction === 'asc' ? 'rgb(255, 224, 130)' : 'rgba(255, 255, 255, 0.4)', 
            transition: 'color 0.2s', 
            marginBottom: '-5px' 
          }} 
        />
        <ChevronDown 
          size={12} 
          strokeWidth={3} 
          style={{ 
            color: isActive && sortConfig.direction === 'desc' ? 'rgb(255, 224, 130)' : 'rgba(255, 255, 255, 0.4)', 
            transition: 'color 0.2s' 
          }} 
        />
      </div>
    );
  };

  const searchedChildren = children.filter(child => 
    child.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredChildren = getSortedChildren(searchedChildren);

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-6 md:p-10 box-border overflow-x-hidden">
        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 className="results-section-title" style={{ fontSize: '2rem', margin: 0, color: '#955C2E', fontWeight: 'bold' }}>Daftar Profil Anak</h2>
              <div style={{ position: 'relative', width: '300px' }}>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama anak..." 
                  style={{ width: '100%', padding: '10px 16px', borderRadius: '999px', border: '2px solid #955C2E', outline: 'none', fontFamily: "'Fredoka One', sans-serif", color: '#5C3A1E', fontSize: '1.1rem' }}
                />
                <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#955C2E' }} size={20} />
              </div>
            </div>
            
            {loading ? (
               <div style={{ padding: '40px', textAlign: 'center', color: '#955C2E', backgroundColor: '#ffffff', border: '3px solid #955C2E', borderRadius: '20px', fontWeight: 'bold' }}>Memuat data anak...</div>
            ) : filteredChildren.length === 0 ? (
               <div style={{ padding: '40px', textAlign: 'center', color: '#955C2E', backgroundColor: '#ffffff', border: '3px solid #955C2E', borderRadius: '20px', fontWeight: 'bold' }}>Tidak ada profil anak ditemukan.</div>
            ) : (
              <>
                {/* Desktop Grid Table View */}
                <div className="hidden md:block">
                  <div className="history-table-container" style={{ height: 'auto', minHeight: '500px', overflowX: 'auto', position: 'relative' }}>
                    <div className="history-header" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr', backgroundColor: '#955C2E', color: 'white', padding: '16px 24px', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10, borderTopLeftRadius: '17px', borderTopRightRadius: '17px', minWidth: '800px' }}>
                      <div 
                        className="student-name-cell" 
                        style={{ paddingLeft: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', userSelect: 'none', color: sortConfig.key === 'name' ? 'rgb(255, 224, 130)' : 'white' }}
                        onClick={() => handleSort('name')}
                      >
                        Nama {renderSortIcon('name')}
                      </div>
                      <div 
                        style={{ textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', userSelect: 'none', color: sortConfig.key === 'displayUsername' ? 'rgb(255, 224, 130)' : 'white' }}
                        onClick={() => handleSort('displayUsername')}
                      >
                        Username {renderSortIcon('displayUsername')}
                      </div>
                      <div style={{ textAlign: 'center' }}>Kelas</div>
                      <div style={{ textAlign: 'center' }}>Label Kelas</div>
                      <div style={{ textAlign: 'center' }}>Aksi</div>
                    </div>
                    <div className="history-body" style={{ overflowY: 'visible' }}>
                      {filteredChildren.map((child) => (
                        <div key={child.id} className="history-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr', padding: '16px 24px', borderBottom: '2px solid #955C2E', alignItems: 'center', backgroundColor: '#FEF6DF', minWidth: '800px' }}>
                          <div className="student-name-cell" style={{ fontWeight: '800', color: '#333', paddingLeft: '24px' }}>{child.name}</div>
                          <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{child.displayUsername || child.username || "-"}</div>
                          <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{child.grade}</div>
                          <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{child.classLabel || "-"}</div>
                          <div style={{ display: 'flex', justifyContent: 'center' }}>
                              <Link to={`/monitoring-ortu/profil-anak/${child.id}`} className="no-wrap-btn" style={{ backgroundColor: '#f3a64c', color: 'white', padding: '10px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                                  Lihat Profil <Search size={18} />
                              </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Card Layout View */}
                <div className="block md:hidden">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {filteredChildren.map((child) => (
                      <div 
                        key={child.id} 
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '3px solid #955C2E',
                          borderRadius: '20px',
                          padding: '20px',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div 
                            style={{ 
                              width: '44px', 
                              height: '44px', 
                              borderRadius: '50%', 
                              backgroundColor: '#ffe6b7', 
                              border: '2.5px solid #f3a64c', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              overflow: 'hidden',
                              flexShrink: 0
                            }}
                          >
                            <img 
                              src={getAnimalAvatar(child.id || child.name)} 
                              alt="Avatar" 
                              style={{ width: '80%', height: '80%', objectFit: 'contain' }} 
                            />
                          </div>
                          <div style={{ minWidth: 0, flex: 1 }}>
                            <h4 style={{ margin: 0, color: '#955C2E', fontSize: '1.25rem', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{child.name}</h4>
                            <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold' }}>@{child.displayUsername || child.username || "-"}</span>
                          </div>
                        </div>

                        <hr style={{ border: 'none', borderTop: '2px solid #E8D9C0', margin: '4px 0' }} />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '1rem' }}>
                          <div>
                            <span style={{ color: '#955C2E', display: 'block', fontSize: '0.85rem', fontWeight: 'bold' }}>Kelas</span>
                            <span style={{ fontWeight: '800', color: '#333' }}>{child.grade}</span>
                          </div>
                          <div>
                            <span style={{ color: '#955C2E', display: 'block', fontSize: '0.85rem', fontWeight: 'bold' }}>Label Kelas</span>
                            <span style={{ fontWeight: '800', color: '#333' }}>Kelas {child.classLabel || "-"}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                          <Link 
                            to={`/monitoring-ortu/profil-anak/${child.id}`} 
                            style={{ 
                              flex: 1,
                              backgroundColor: '#f3a64c', 
                              color: 'white', 
                              padding: '10px 8px', 
                              borderRadius: '12px', 
                              textDecoration: 'none', 
                              fontWeight: '800', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              gap: '6px', 
                              fontSize: '0.9rem', 
                              border: 'none', 
                              cursor: 'pointer',
                              whiteSpace: 'nowrap'
                            }}
                          >
                            Lihat Profil <Search size={16} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
        </section>
      </main>
    </div>
  );
}
