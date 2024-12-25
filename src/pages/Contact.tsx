import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/905526858141', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/lotusorganizasyon_', '_blank');
  };

  // Google Maps Embed URL
  const locationUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.248707236021!2d29.370675398777706!3d40.79506202030919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadf712c25e571%3A0x2df43c5267816cd4!2sLotus%20Organizasyon!5e0!3m2!1str!2str!4v1735135532697!5m2!1str!2str";

  // QR Code URL for Location
  const locationQrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent('https://maps.app.goo.gl/hcvFCTNsQWyfGZzXA')}`;


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
            <img 
              src={locationQrUrl} 
              alt="Konum QR Kodu" 
              className="location-qr"
              title="QR kodu okutarak konuma gidin"
            />
          </div>

          <div className="info-card">
            <FaPhone className="icon" />
            <h3>Telefon</h3>
            <p>+90 (552) 685 81 41</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="icon" />
            <h3>E-posta</h3>
            <p>info@lotusorganizasyon.com</p>
          </div>

          <div className="social-buttons">
            <button className="whatsapp-button" onClick={handleWhatsApp}>
              <FaWhatsapp className="whatsapp-icon" />
              WhatsApp'tan Mesaj Gönder
            </button>

            <button className="instagram-button" onClick={handleInstagram}>
              <FaInstagram className="instagram-icon" />
              Instagram'da Takip Et
            </button>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src={locationUrl}
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
