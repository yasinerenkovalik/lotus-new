import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";

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
      <Helmet>
      <title>Lotus Organizasyon - Hayallerinizdeki Organizasyonlar İçin</title>
      <meta
        name="description"
        content="Lotus Organizasyon, düğün, nişan, doğum günü ve özel gün organizasyonlarınızda profesyonel çözümler sunar. Detaylara verdiğimiz önem ile unutulmaz anılar biriktirin."
      />
      <meta
        name="keywords"
        content="organizasyon, düğün, nişan, doğum günü, özel gün, süsleme, Lotus Organizasyon, profesyonel organizasyon hizmetleri"
      />
      <meta name="author" content="Lotus Organizasyon" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Lotus Organizasyon - Hayallerinizdeki Organizasyonlar İçin" />
      <meta
        property="og:description"
        content="Düğün, nişan, doğum günü ve özel günler için eşsiz organizasyon hizmetleri sunuyoruz. Lotus Organizasyon ile hayallerinizi gerçeğe dönüştürün."
      />
      <meta property="og:image" content="https://lotusorganizasyon.com/images/featured.jpg" />
      <meta property="og:url" content="https://lotusorganizasyon.com" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Lotus Organizasyon - Hayallerinizdeki Organizasyonlar İçin" />
      <meta
        name="twitter:description"
        content="Lotus Organizasyon, profesyonel düğün, nişan ve özel gün hizmetleriyle unutulmaz anılar yaratır."
      />
      <meta name="twitter:image" content="https://lotusorganizasyon.com/images/featured.jpg" />
    </Helmet>
      
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
