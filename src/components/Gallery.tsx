import { useState } from 'react';
import { galleryData, categories } from '../data/galleryData';
import ImageModal from './ImageModal';
import '../styles/Gallery.css';

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('tümü');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredGallery = selectedCategory === 'tümü'
    ? galleryData
    : galleryData.filter(item => item.category === selectedCategory);

  return (
    <div className="gallery-container">
      <h2>Galeri</h2>

      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredGallery.map(item => (
          <div 
            key={item.id} 
            className="gallery-item"
            onClick={() => setSelectedImage(item.imageUrl)}
          >
            <img src={item.imageUrl} alt={item.title} />
            <div className="gallery-item-overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
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

export default Gallery; 