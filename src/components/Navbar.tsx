import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <NavLink to="/"  className="logo" end>
        Lotus Organizasyon
      </NavLink>
      
      {isMobile && (
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      )}

      <div className={`nav-links ${isMobile ? (isMobileMenuOpen ? 'active' : '') : 'desktop'}`}>
        <NavLink to="/" end>Ana Sayfa</NavLink>
        <NavLink to="/gallery">Galeri</NavLink>
        <NavLink to="/organizations">Organizasyonlar</NavLink>
        <NavLink to="/contact">İletişim</NavLink>
      </div>
    </nav>
  );
}

export default Navbar; 