import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const QuoteForm = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)', paddingTop: '100px', paddingBottom: '50px' }}>
        <div className="card animate-fade-up" style={{ width: '100%', maxWidth: '700px', margin: '0 20px', padding: '50px 40px' }}>
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '30px', textAlign: 'center', display: 'block' }}>GET A FREE ESTIMATE</h2>

          <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--secondary)' }}>
                Name<span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                style={{ padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--surface)', fontSize: '1rem', outline: 'none', transition: 'var(--transition)' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--secondary)' }}>
                Mobile<span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                style={{ padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--surface)', fontSize: '1rem', outline: 'none', transition: 'var(--transition)' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--secondary)' }}>
                Email<span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="email"
                style={{ padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--surface)', fontSize: '1rem', outline: 'none', transition: 'var(--transition)' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--secondary)' }}>
                Plot Location
              </label>
              <select 
                style={{ padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--surface)', fontSize: '1rem', outline: 'none', transition: 'var(--transition)', appearance: 'none' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              >
                <option>Select location</option>
                <option>Location 1</option>
                <option>Location 2</option>
              </select>
            </div>

            <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--secondary)' }}>
                Construction Requirements
              </label>
              <textarea
                rows="4"
                style={{ padding: '12px 16px', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', background: 'var(--surface)', fontSize: '1rem', outline: 'none', transition: 'var(--transition)', resize: 'vertical' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              ></textarea>
            </div>

            <div style={{ gridColumn: 'span 2', display: 'flex', gap: '16px', marginTop: '10px' }}>
              <button type="reset" className="btn-outline" style={{ flex: 1, padding: '14px' }}>
                RESET
              </button>
              <button type="submit" className="btn-primary" style={{ flex: 2, padding: '14px' }}>
                GET A FREE QUOTE NOW
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuoteForm;
