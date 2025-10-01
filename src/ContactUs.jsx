import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        reason: '',
        message: ''
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
            name: '',
            phone: '',
            email: '',
            reason: '',
            message: ''
        });
    };

    return (
        <div className="contact-page">
            <header className="contact-header">
                <div className="contact-nav">
                    <div className="logo">
                        <div className="logo-icon"></div>
                        <span>IdealRealtyWA</span>
                    </div>
                    <nav className="nav">
                        <Link to="/">Home</Link>
                        <a href="#about">About Us</a>
                        <a href="#testimonial">Testimonial</a>
                        <a href="#contact" className="active">Contact US</a>
                        <div className="social-icons">
                            <a href="#" className="social-icon instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="#" className="social-icon facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </nav>

                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <a href="#about" onClick={toggleMenu}>About Us</a>
                    <a href="#testimonial" onClick={toggleMenu}>Testimonial</a>
                    <a href="#contact" className="active" onClick={toggleMenu}>Contact US</a>
                    <div className="social-icons">
                        <a href="#" className="social-icon instagram">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="social-icon facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>

            <section className="hero-contact">
                <div className="hero-overlay"></div>
                <h1 className="contact-hero-title">CONTACT US</h1>
            </section>

            <section className="contact-main-section">
                <div className="contact-badge">Contact Us</div>
                <h2 className="connect-title">Let's Connect</h2>

                <div className="contact-content">
                    <div className="contact-form-container">
                        <form onSubmit={handleSubmit} className="contact-form-card">
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Email Id</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Id"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Reason</label>
                                <input
                                    type="text"
                                    name="reason"
                                    placeholder="Reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>short Message</label>
                                <textarea
                                    name="message"
                                    placeholder="short Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Submit</button>
                        </form>
                    </div>

                    <div className="contact-image">
                        <div className="person-placeholder"></div>
                    </div>
                </div>
            </section>

            <section className="contact-info-section">
                <h2>Get in touch</h2>
                <p className="contact-info-subtitle">
                    Your goals matter to us. Reach out and experience real estate with honesty, care, and dedication.
                </p>

                <div className="contact-info-grid">
                    <div className="info-card">
                        <div className="info-icon location-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Location</h3>
                            <p>T81, 45 Burrendah Boulevard, Willetton WA 6155</p>
                            <p>Southland Boulevard Shopping Center</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon email-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Email Me</h3>
                            <p>ali@idealrealtywa.com.au</p>
                        </div>
                    </div>

                    <div className="info-card">
                        <div className="info-icon phone-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                        </div>
                        <div className="info-content">
                            <h3>Call Me</h3>
                            <p>0450613210</p>
                        </div>
                    </div>
                </div>

                <div className="follow-section">
                    <h3>Follow Me</h3>
                    <div className="follow-icons">
                        <a href="#" className="follow-icon instagram-follow">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" className="follow-icon facebook-follow">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <div className="basemap">
                <img src="/Basemap image.png" alt="Map" />
            </div>
            <section className="contact-section">
                <div className="contact-container">
                    <h2>Let's Get In Touch</h2>
                    <p>We're here to answer your questions and help you find your next property.</p>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <input 
                            type="email" 
                            placeholder="Your email id" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="email-input"
                        />
                        <button type="submit" className="notify-btn">Notify Me</button>
                    </form>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <div className="footer-logo-icon"></div>
                            <span>IdealRealtyWA</span>
                        </div>
                        <p className="footer-tagline">Together, We Can,</p>
                    </div>
                    <div className="footer-right">
                        <div className="footer-column">
                            <h3>Quick View</h3>
                            <Link to="/">Home</Link>
                            <a href="#about">About Us</a>
                            <a href="#contact">Contact Us</a>
                        </div>
                        <div className="footer-column">
                            <h3>Contact Us</h3>
                            <a href="tel:0450613210">📞 0450613210</a>
                            <a href="#">📍 Waterloo</a>
                            <a href="mailto:ali@idealrealtywa.com.au">✉️ ali@idealrealtywa.com.au</a>
                            <a href="https://www.idealrealtywa.com.au">🌐 www.idealrealtywa.com.au</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}