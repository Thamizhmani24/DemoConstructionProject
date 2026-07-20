import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 1,
    name: "Standard Package",
    features: [
      "Design & Drawing", "Core Construction Materials", "Flooring & Wall Tiling",
      "Painting", "Electricals", "Plumbing", "Doors", "Windows",
      "Kitchen & Bathroom Fixtures", "Fabrication Works", "Warranty Period",
      "Site Audit & Reporting", "Elevation Budget", "Extra Charges", "Govt Sanction Assistance"
    ],
  },
  {
    id: 2,
    name: "Premium Package",
    features: [
      "Design & Drawing", "Core Construction Materials", "Flooring & Wall Tiling",
      "Painting", "Electricals", "Plumbing", "Doors", "Windows",
      "Kitchen & Bathroom Fixtures", "Fabrication Works", "Warranty Period",
      "Site Audit & Reporting", "Elevation Budget", "Extra Charges", "Govt Sanction Assistance"
    ],
  },
  {
    id: 3,
    name: "Luxury Package",
    features: [
      "Design & Drawing", "Core Construction Materials", "Flooring & Wall Tiling",
      "Painting", "Electricals", "Plumbing", "Doors", "Windows",
      "Kitchen & Bathroom Fixtures", "Fabrication Works", "Warranty Period",
      "Site Audit & Reporting", "Elevation Budget", "Extra Charges", "Govt Sanction Assistance"
    ],
  },
];

export default function ConstructionPackages() {
  return (
    <section className="section-padding bg-light" id="packages">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">
            Full-Service <span className="text-primary">Construction Packages</span>
          </h2>
          <p className="section-subtitle">
            Get a True Feel of Our Craftsmanship at the Experience Centre – We Use Only Trusted, Top-Grade Materials!
          </p>
        </div>

        <div className="grid-3 animate-fade-up">
          {packages.map((pkg) => (
            <div key={pkg.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 className="card-title text-center" style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>
                {pkg.name}
              </h3>
              
              <div style={{ textAlign: 'center', margin: '20px 0 30px' }}>
                <Link to="/QuoteForm">
                  <button className="btn-primary" style={{ width: '100%' }}>
                    Get a Quote
                  </button>
                </Link>
              </div>

              <ul style={{ listStyle: 'none', flex: 1 }}>
                {pkg.features.map((feature, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                    <CheckCircle style={{ color: 'var(--primary)', width: '20px', height: '20px', flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
