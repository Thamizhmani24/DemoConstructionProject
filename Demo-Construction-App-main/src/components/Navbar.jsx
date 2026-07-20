import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="ABC Construction" style={{ height: '40px' }} />
                </Link>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    <li><a href="#our-work">OUR WORK</a></li>
                    <li><a href="#packages">PACKAGES ▾</a></li>
                    <li><a href="#about-us">ABOUT US</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li><a href="#construction-guide">CONSTRUCTION GUIDE</a></li>
                </ul>

                {/* Actions */}
                <div className="nav-actions">
                    <Link to="/QuoteForm" className="hidden md:block">
                        <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '1rem' }}>
                            GET QUOTE
                        </button>
                    </Link>
                    <button 
                        onClick={() => setToggleMenu(!toggleMenu)} 
                        className="md:hidden" 
                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        {toggleMenu ? (
                            <XMarkIcon style={{ height: '28px', color: scrolled ? 'var(--secondary)' : 'var(--surface)' }} />
                        ) : (
                            <Bars3Icon style={{ height: '28px', color: scrolled ? 'var(--secondary)' : 'var(--surface)' }} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {toggleMenu && (
                <div style={{
                    position: 'absolute', top: '100%', left: 0, width: '100%',
                    background: 'var(--surface)', padding: '20px', boxShadow: 'var(--shadow-md)', zIndex: 99
                }} className="md:hidden">
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '15px', listStyle: 'none' }}>
                        <li><a href="#our-work" style={{ color: 'var(--secondary)', fontWeight: 600 }}>OUR WORK</a></li>
                        <li><a href="#packages" style={{ color: 'var(--secondary)', fontWeight: 600 }}>PACKAGES ▾</a></li>
                        <li><a href="#about-us" style={{ color: 'var(--secondary)', fontWeight: 600 }}>ABOUT US</a></li>
                        <li><a href="#contact" style={{ color: 'var(--secondary)', fontWeight: 600 }}>CONTACT</a></li>
                        <li><a href="#construction-guide" style={{ color: 'var(--secondary)', fontWeight: 600 }}>CONSTRUCTION GUIDE</a></li>
                        <li style={{ marginTop: '10px' }}>
                            <Link to="/QuoteForm" style={{ display: 'block' }}>
                                <button className="btn-primary" style={{ width: '100%' }}>
                                    GET QUOTE
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;