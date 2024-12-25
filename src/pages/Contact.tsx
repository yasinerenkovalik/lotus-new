import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/905526858141', '_blank'); // WhatsApp numaranızı buraya ekleyin
  };

  return (
    <div className="contact-page">
      <h1>İletişim</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <h3>Adres</h3>
            <p>Lotus Organizasyon</p>
            <p>İstiklal Caddesi No: 49</p>
            <p>Kocaeli / Darıca</p>
          </div>

          <div className="info-card">
            <FaPhone className="icon" />
            <h3>Telefon</h3>
            <p>+90 (552) 685 81 41</p>
            <p>+90 (216) 555 55 55</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>E-posta</h3>
            <p>info@lotusorganizasyon.com</p>
          </div>

          <button className="whatsapp-button" onClick={handleWhatsApp}>
            <FaWhatsapp className="whatsapp-icon" />
            WhatsApp'tan Mesaj Gönder
          </button>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lotus Organizasyon Konum"
          ></iframe>
        </div>

        <div className="business-hours">
          <h3>Çalışma Saatleri</h3>
          <div className="hours-grid">
            <div>
              <p>Pazartesi - Cuma</p>
              <p>09:00 - 18:00</p>
            </div>
            <div>
              <p>Cumartesi</p>
              <p>10:00 - 16:00</p>
            </div>
            <div>
              <p>Pazar</p>
              <p>Kapalı</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 