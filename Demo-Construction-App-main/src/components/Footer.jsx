import { FaWhatsapp, FaTwitter, FaFacebookF, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import bgImage from "../assets/FooterImage/footer-bg.png";
import workerImg from "../assets/FooterImage/worker.png";
import logo from "../assets/logo.png";
import thumb1 from "../assets/FooterImage/thumb1.png";
import thumb2 from "../assets/FooterImage/thumb2.png";
import thumb3 from "../assets/FooterImage/thumb3.png";
import thumb4 from "../assets/FooterImage/thumb4.png";
import thumb5 from "../assets/FooterImage/thumb5.png";
import thumb6 from "../assets/FooterImage/thumb6.png";

const Footer = () => {
  const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];

  return (
    <footer className="footer" style={{ backgroundImage: `linear-gradient(rgba(26, 28, 35, 0.95), rgba(26, 28, 35, 0.95)), url(${bgImage})`, backgroundSize: 'cover' }}>
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: About & Contact */}
          <div>
            <div className="footer-logo">ABC <span>Constructions</span></div>
            <p className="footer-text">
              Building Chennai's best homes with quality, transparency, and architectural brilliance.
            </p>
            <div className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>Chennai, Tamil Nadu<br />India - XXXXXX</span>
            </div>
            <div className="footer-contact-item">
              <FaPhoneAlt />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope />
              <span>info@abcconstructions.com</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#our-work">Our Work</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#construction-guide">Construction Guide</a></li>
            </ul>
          </div>

          {/* Column 3: How it works */}
          <div>
            <h3 className="footer-title">How it works</h3>
            <ul className="footer-links">
              <li>1. Raise a Request</li>
              <li>2. Meet our Expert</li>
              <li>3. Book with us</li>
              <li>4. Receive Plans</li>
              <li>5. Track & Transact</li>
              <li>6. Settle In</li>
            </ul>
            <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem', marginTop: '15px' }}>
              INSTALL APP
            </button>
          </div>

          {/* Column 4: Gallery & Worker */}
          <div style={{ position: 'relative' }}>
            <h3 className="footer-title">Gallery</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '20px' }}>
              {thumbs.map((img, i) => (
                <img key={i} src={img} alt={`thumb-${i}`} style={{ width: '100%', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
              ))}
            </div>
            {/* Keeping worker image logic */}
            <img src={workerImg} alt="Worker" style={{ position: 'absolute', bottom: '-40px', right: 0, height: '180px', opacity: 0.8 }} />
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            COPYRIGHT © 2026 ABC CONSTRUCTIONS PRIVATE LIMITED | ALL RIGHTS RESERVED | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms and Conditions</a>
          </p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '1.25rem' }}>
            <a href="#whatsapp"><FaWhatsapp /></a>
            <a href="#twitter"><FaTwitter /></a>
            <a href="#facebook"><FaFacebookF /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
