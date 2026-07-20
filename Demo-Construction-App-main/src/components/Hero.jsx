import React from 'react';
import backgroundImage from '../assets/BG.png';

const Hero = () => {
    return (
        <div className="hero-wrapper">
            <img 
                src={backgroundImage} 
                alt="Construction Site Background" 
                className="hero-bg" 
            />
            <div className="hero-overlay"></div>
            
            <div className="hero-content animate-fade-up">
                <h1 className="hero-title">
                    Build Right. <span>Live Smart.</span>
                </h1>
                <p className="hero-subtitle">
                    The Pros Behind Chennai’s Best Homes. Experience premium construction with unmatched quality and transparency.
                </p>

                <div className="hero-actions">
                    <button className="btn-primary">
                        TALK TO OUR ARCHITECTS
                    </button>
                    <button className="btn-outline" style={{ color: 'var(--surface)', borderColor: 'var(--surface)' }}>
                        OUR PACKAGES
                    </button>
                </div>
            </div>

            <div className="hero-banner glass animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <p>Looking To Construct A Home? Find Out What It Costs.</p>
                <button className="hero-banner-btn">
                    Get a Free Estimation Now
                </button>
            </div>
        </div>
    );
};

export default Hero;