import { useState } from 'react';
import { Link } from 'react-router-dom';
import { organizations, categories } from '../data/organizationData';
import '../styles/Organizations.css';

function Organizations() {
  const [selectedCategory, setSelectedCategory] = useState('tümü');

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
          <Link to={`/organizations/${item.id}`} key={item.id} className="organization-card-link">
            <div className="organization-card">
              <div className="card-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Organizations;
