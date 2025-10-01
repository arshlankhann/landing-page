import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function RealtyLandingPage() {
  const [email, setEmail] = useState('');

  const propertyImages = [
    { id: 1, src: '/1.png', alt: 'Modern brick house with driveway' },
    { id: 2, src: '/2.png', alt: 'Luxury house with pool' },
    { id: 3, src: '/3.png', alt: 'Single story brick home' },
    { id: 4, src: '/4.png', alt: 'Contemporary suburban house' },
    { id: 5, src: '/5.png', alt: 'Floor plan' },
    { id: 6, src: '/6.png', alt: 'Red brick house' },
    { id: 7, src: '/7.png', alt: 'Modern apartment building' },
    { id: 8, src: '/8.png', alt: 'Modern two-story house' },
    { id: 9, src: '/9.png', alt: 'Apartment complex' },
    { id: 10, src: '/10.png', alt: 'Suburban house with sunset' },
    { id: 11, src: '/11.png', alt: 'Property for sale sign' },
    { id: 12, src: '/12.png', alt: 'Contemporary modern house' }
  ];

  const developmentProjects = [
    { id: 1, src: '/Rectangle 17.png', alt: 'Construction foundation project' },
    { id: 2, src: '/Rectangle 18.png', alt: 'Construction worker at site' },
    { id: 3, src: '/Rectangle 19.png', alt: 'Development site foundation' },
    { id: 4, src: '/Rectangle 20.png', alt: 'Building under construction' },
    { id: 5, src: '/Rectangle 21.png', alt: 'Interior construction with worker' },
    { id: 6, src: '/Rectangle 22.png', alt: 'Interior construction with worker' }
  ];

  const achievements = [
    { id: 1, name: 'REIWA.COM Awards', year: '2024' },
    { id: 2, name: 'REIWA.COM Awards', year: '2023' },
    { id: 3, name: 'REIWA.COM Awards', year: '2022' },
    { id: 4, name: 'REIWA.COM Awards', year: '2021' },
    { id: 5, name: 'REIWA.COM Awards', year: '2020' },
    { id: 6, name: 'REIWA.COM Number 1', year: '2019' },
    { id: 7, name: 'REIWA.COM Awards', year: '2018' }
  ];

  const handleNotifyMe = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll contact you at: ${email}`);
    setEmail('');
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <div className="logo-icon"></div>
          <span>IdealRealtyWA</span>
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#testimonial">Testimonial</a>
          <Link to="/contact">Contact US</Link>
          <div className="social-icons">
            <a href="#" className="social-icon instagram">
              <img src="/instagram.png" alt="Instagram" />
            </a>
            <a href="#" className="social-icon facebook">
              <img src="/facebook.png" alt="Facebook" />
            </a>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Mohsin Ali<br/>Khan</h1>
  
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Introducing Mohsin Ali Khan</h2>
        
        <p>
          With a reputation built on trust, dedication, and results, Mohsin Ali Khan is an emerging leader in Perth's real estate 
          market. Backed by a strong background in sales, customer service, and property knowledge, Mohsin has developed a 
          client first philosophy that places honesty, integrity, and genuine care at the heart of every transaction.
        </p>

        <p>
          Whether assisting with established properties, first home purchase, a family upgrade or downsize, an investment 
          property, or development opportunities, Mohsin is recognised for his ability to listen, understand, and deliver tailored 
          solutions that align with each client's goals.
        </p>

        <p>
          In addition to his expertise in real estate sales, Mohsin possesses a valuable understanding of the building and 
          construction sector. This insight allows him to provide clients with informed guidance on:
        </p>

        <ul>
          <li>Property potential and improvements.</li>
          <li>Marketability of new builds and renovations.</li>
          <li>Assessing quality construction and long-term value.</li>
          <li>Working with developers, builders, and investors to maximise returns.</li>
        </ul>

        <p>
          His ability to combine market knowledge with a practical appreciation of construction makes him a trusted advisor 
          for both homeowners and property investors seeking to make confident, well-informed decisions.
        </p>

        <p>
          Mohsin brings a modern, people-focused approach to real estate leveraging innovative marketing strategies, strong 
          negotiation skills, and clear communication to create campaigns that connect with buyers and achieve premium 
          results. His approachable nature, transparency, and attention to detail ensure that the sales process remains as 
          smooth and stress free as possible for every client.
        </p>

        <p>
          When you appoint Mohsin, you gain more than a sales consultant you gain a dedicated partner who goes the extra 
          mile from the very first conversation through to final settlement. He prides himself on building long term 
          relationships founded on service excellence, open communication, and trust.
        </p>

        <p>
          Above all, Mohsin treats every client's property with the same care as his own, working tirelessly to secure the right 
          outcome. For those seeking clear guidance, tailored marketing, strong industry knowledge, and a trusted advocate 
          by their side, Mohsin Ali Khan is the professional you can count on in Perth's competitive property market.
        </p>
      </section>

      <section className="properties-section">
        <div className="properties-grid">
          {propertyImages.map((property) => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.src} alt={property.alt} />
                <span className="property-number">{property.id}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="view-more-btn">View more →</button>
      </section>

      <section className="achievements-section">
        <h2>Our Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-badge">
              <div className="badge-icon">
                <div className="badge-star">★</div>
              </div>
              <div className="badge-text">
                <span className="badge-name">REIWA.COM</span>
                <span className="badge-year">{achievement.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="development-section">
        <h2>Current Development Projects</h2>
        <div className="development-grid">
          {developmentProjects.map((project) => (
            <div key={project.id} className="development-card">
              <div className="development-image">
                <img src={project.src} alt={project.alt} />
                <span className="development-number">{project.id}</span>
              </div>
            </div>
          ))}
          {/* <div className="development-card view-more-card">
            <div className="view-more-content">
              <span>View more &gt;&gt;</span>
            </div>
          </div> */}
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <h2>Let's Get In Touch</h2>
          <p>We're here to answer your questions and help you find your next property.</p>
          <form onSubmit={handleNotifyMe} className="contact-form">
            <input 
              type="email" 
              placeholder="Your email id" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <Link to="/contact">Contact Us</Link>
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