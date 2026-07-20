import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, title, description, message, buttonText }) => {
  return (
    <div className="card" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '40px 30px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div className="card-icon">
          <Icon />
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-text mb-4">{description}</p>
        
        {/* We use a sleek hover overlay or just display the button elegantly */}
        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
          <Link to="/QuoteForm">
            <button className="btn-outline" style={{ padding: '8px 24px', fontSize: '0.9rem' }}>
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
