import React from "react";
import image1 from "../assets/RecentWorkImage/RecentWork1.png";
import image2 from "../assets/RecentWorkImage/RecentWork2.png";
import image3 from "../assets/RecentWorkImage/RecentWork3.png";
import image4 from "../assets/RecentWorkImage/RecentWork4.png";
import image5 from "../assets/RecentWorkImage/RecentWork5.png";
import image6 from "../assets/RecentWorkImage/RecentWork6.png";

const RecentWorks = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Our Recent Works</h2>
          <p className="section-subtitle">
            Experience the essence of thoughtful construction in Chennai—our
            work speaks volumes about who we are and what we build.
          </p>
        </div>

        <div className="grid-3">
          {images.map((src, index) => {
            const isTopRounded = index < 3;
            return (
              <div
                key={index}
                style={{
                  height: '300px',
                  borderRadius: isTopRounded ? '150px 150px 10px 10px' : '10px 10px 150px 150px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'var(--transition)',
                  cursor: 'pointer',
                  margin: '0 auto',
                  width: '90%',
                  maxWidth: '300px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentWorks;
