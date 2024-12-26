import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { organizationDetails } from '../data/organizationData';
import ImageModal from './ImageModal';
import '../styles/OrganizationDetail.css';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

function GalleryItem({ item, onImageClick }: { 
  item: MediaItem, 
  onImageClick: (url: string) => void 
}) {
  if (item.type === 'image') {
    return (
      <img 
        src={item.url} 
        alt="Galeri görüntüsü"
        onClick={() => onImageClick(item.url)}
        className="gallery-image"
      />
    );
  }

  return (
    <div 
      className="video-thumbnail"
      onClick={() => onImageClick(item.url)}
    >
      <video 
        src={item.url} 
        className="gallery-video"
        preload="metadata"
        poster={item.url + '#t=0.1'}
        muted
      />
      <div className="play-button">
        <i className="fas fa-play"></i>
      </div>
    </div>
  );
}

function OrganizationDetail() {
  const { id } = useParams();
  const organizationId = Number(id);
  const details = organizationDetails[organizationId];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleWhatsApp = () => {
    window.open('https://wa.me/905526858141', '_blank');
  };


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
        <section className="detail-features">
          <h2>Hizmetlerimiz</h2>
          <ul>
            {details.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

  <section className="detail-info">
    <h2>Ekstra Hizmetlerimiz</h2>
    <div className="info-grid">
      <div className="info-item">
        {details.ekstra}
      </div>
      <div className="info-item">
        {details.duration}
      </div>
      <div className="info-item">
      {details.location}
      </div>
    </div>
  </section>



     

        <section className="detail-gallery">
          <h2>Galeri</h2>
          <div className="gallery-grid">
            {details.gallery.map((item, index) => (
              <GalleryItem 
                key={index}
                item={item}
                onImageClick={setSelectedImage}
              />
            ))}
          </div>
        </section>

        <section className="detail-pricing">
          <h2>Fiyatlandırma</h2>
          <p>{details.pricing}</p>
          <button className="contact-button"  onClick={handleWhatsApp}>İletişime Geçin  </button>

           

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