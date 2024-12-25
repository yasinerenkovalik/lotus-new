import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { organizationDetails } from '../data/organizationData';
import ImageModal from './ImageModal';
import '../styles/OrganizationDetail.css';

function OrganizationDetail() {
  const { id } = useParams();
  const organizationId = Number(id);
  const details = organizationDetails[organizationId];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!details) {
    return <div className="not-found">Organizasyon bulunamadı</div>;
  }

  return (
    <div className="organization-detail-container">
      <div className="detail-hero">
        <img 
          src={details.imageUrl} 
          alt={details.title} 
          onClick={() => setSelectedImage(details.imageUrl)}
        />
        <h1>{details.title}</h1>
      </div>

      <div className="detail-content">
        <section className="detail-description">
          <h2>Hakkında</h2>
          <p>{details.longDescription}</p>
        </section>

        <section className="detail-info">
          <h2>Organizasyon Bilgileri</h2>
          <div className="info-grid">
            <div className="info-item">
              <span>Kapasite:</span> {details.capacity}
            </div>
            <div className="info-item">
              <span>Süre:</span> {details.duration}
            </div>
            <div className="info-item">
              <span>Konum:</span> {details.location}
            </div>
          </div>
        </section>

        <section className="detail-features">
          <h2>Hizmetlerimiz</h2>
          <ul>
            {details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="detail-gallery">
          <h2>Galeri</h2>
          <div className="gallery-grid">
            {details.gallery.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${details.title} ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className="gallery-image"
              />
            ))}
          </div>
        </section>

        <section className="detail-pricing">
          <h2>Fiyatlandırma</h2>
          <p>{details.pricing}</p>
          <button className="contact-button">İletişime Geçin</button>
        </section>
      </div>

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}

export default OrganizationDetail; 