import { useState } from 'react';
import { Link } from 'react-router-dom';
import { organizations, categories } from '../data/organizationData';
import ImageModal from '../components/ImageModal';
import '../styles/Organizations.css';

function Organizations() {
  const [selectedCategory, setSelectedCategory] = useState('tümü');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredOrganizations = selectedCategory === 'tümü'
    ? organizations
    : organizations.filter(org => org.category === selectedCategory);

  return (
    <div className="organizations-container">
      <h2>Organizasyonlarımız</h2>
      
      <div className="filter-container">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="organizations-grid">
        {filteredOrganizations.map(item => (
          <div key={item.id} className="organization-card">
            <div 
              className="card-image"
              onClick={(e) => {
                e.preventDefault();
                setSelectedImage(item.imageUrl);
              }}
            >
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <Link to={`/organizations/${item.id}`} className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
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

export default Organizations; 