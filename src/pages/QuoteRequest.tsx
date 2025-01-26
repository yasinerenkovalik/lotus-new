import { useState } from 'react';
import '../styles/QuoteRequest.css';

function QuoteRequest() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    location: '',
    details: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form verilerini WhatsApp'a yönlendir
    const message = `Yeni Teklif Talebi:\n
Ad Soyad: ${formData.name}\n
Telefon: ${formData.phone}\n
E-posta: ${formData.email}\n
Organizasyon Türü: ${formData.eventType}\n
Misafir Sayısı: ${formData.guestCount}\n
Tarih: ${formData.eventDate}\n
Lokasyon: ${formData.location}\n
Detaylar: ${formData.details}\n
Bütçe: ${formData.budget}`;

    const whatsappUrl = `https://wa.me/905526858141?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="quote-container">
      <h1>Teklif Alın</h1>
      <p className="quote-intro">Hayalinizdeki organizasyon için hemen teklif alın</p>
      
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Ad Soyad</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Telefon</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>E-posta</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Organizasyon Türü</label>
            <select
              value={formData.eventType}
              onChange={(e) => setFormData({...formData, eventType: e.target.value})}
              required
            >
              <option value="">Seçiniz</option>
              <option value="düğün">Düğün</option>
              <option value="nişan">Nişan</option>
              <option value="kına">Kına</option>
              <option value="sünnet">Sünnet</option>
              <option value="doğum günü">Doğum Günü</option>
              <option value="özel">Özel Etkinlik</option>
            </select>
          </div>

          <div className="form-group">
            <label>Misafir Sayısı</label>
            <input
              type="number"
              value={formData.guestCount}
              onChange={(e) => setFormData({...formData, guestCount: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Tarih</label>
            <input
              type="date"
              value={formData.eventDate}
              onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
              required
            />
          </div>

          <div className="form-group">
            <label>Lokasyon Tercihi</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder="Şehir/İlçe"
              required
            />
          </div>

          <div className="form-group">
            <label>Bütçe Aralığı</label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              required
            >
              <option value="">Seçiniz</option>
              <option value="20000-30000">20.000₺ - 30.000₺</option>
              <option value="30000-40000">30.000₺ - 40.000₺</option>
              <option value="40000-50000">40.000₺ - 50.000₺</option>
              <option value="50000+">50.000₺ ve üzeri</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>Eklemek İstedikleriniz</label>
          <textarea
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
            placeholder="Özel istekleriniz ve detaylar..."
            rows={4}
          />
        </div>

        <button type="submit" className="submit-button">
          Teklif Al <i className="fab fa-whatsapp"></i>
        </button>
      </form>
    </div>
  );
}

export default QuoteRequest; 