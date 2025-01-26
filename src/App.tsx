import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Contact from './pages/Contact';
import Gallery from './components/Gallery';
import Organizations from './pages/Organizations';
import OrganizationDetail from './components/OrganizationDetail';
import QuoteRequest from './pages/QuoteRequest';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Menüyü kapatma fonksiyonu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"></link>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>Lotus Organizasyon</h1>
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" end onClick={closeMobileMenu}>Ana Sayfa</NavLink>
            <NavLink to="/gallery" onClick={closeMobileMenu}>Galeri</NavLink>
            <NavLink to="/organizations" onClick={closeMobileMenu}>Organizasyonlar</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu}>İletişim</NavLink>
          </div>
        </nav>
      </header>
      {children}
    </>
  );
}

function HomePage() {
  const handleWhatsAppClick = () => {
    // WhatsApp mesaj metni
    const message = "Merhaba, organizasyon hakkında bilgi almak istiyorum.";
    // URL encode edilmiş mesaj
    const encodedMessage = encodeURIComponent(message);
    // WhatsApp linki
    window.open(`https://wa.me/905526858141?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <h1>Unutulmaz Anlar İçin Mükemmel Organizasyonlar</h1>
          <p>Düğün, nişan, kurumsal etkinlikler ve daha fazlası...</p>
          <button 
            className="cta-button"
            onClick={handleWhatsAppClick}
          >
            Hemen Teklif Alın
          </button>
        </div>
      </div>

      <section className="services" id="hizmetler">
        <h2>Hizmetlerimiz</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Düğün Organizasyonu</h3>
            <p>Hayalinizdeki düğün için profesyonel çözümler</p>
          </div>
          <div className="service-card">
            <h3>Kurumsal Etkinlikler</h3>
            <p>Şirketiniz için özel organizasyonlar</p>
          </div>
          <div className="service-card">
            <h3>Özel Kutlamalar</h3>
            <p>Doğum günü, nişan ve diğer özel günler</p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2>Neden Biz?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <i className="fas fa-heart"></i>
            <h3>Profesyonel Ekip</h3>
            <p>Deneyimli ve uzman kadromuzla kusursuz organizasyonlar</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-star"></i>
            <h3>Özel Tasarımlar</h3>
            <p>Size özel konsept ve dekorasyon seçenekleri</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-gem"></i>
            <h3>Premium Hizmet</h3>
            <p>En ince ayrıntısına kadar düşünülmüş organizasyonlar</p>
          </div>
          <div className="feature-item">
            <i className="fas fa-clock"></i>
            <h3>7/24 Destek</h3>
            <p>Organizasyon sürecinde sürekli iletişim ve destek</p>
          </div>
        </div>
      </section>

   

      <section className="stats">
        <h2>Rakamlarla Biz</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Başarılı Organizasyon</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Mutlu Müşteri</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Uzman Personel</p>
          </div>
          <div className="stat-item">
            <h3>10+</h3>
            <p>Yıllık Deneyim</p>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  const [theme, setTheme] = useState(() => {
    // Sistem temasını kontrol et
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // Sistem tema değişikliğini dinle
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    document.documentElement.setAttribute('data-theme', theme);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className="app">
        <Layout>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/organizations/:id" element={<OrganizationDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/teklif-al" element={<QuoteRequest />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
