import React from 'react';

import { motion } from 'framer-motion';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">CityPedal</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#login" className="btn btn-secondary">Login</a>
        </div>
      </nav>

      <header className="hero" username="meet neapli">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Ride the City, <span className="text-accent">Your Way</span></h1>
          <p>Discover the freedom of urban exploration with CityPedal's bike-sharing service.</p>
          <a href="#get-started" className="btn btn-primary">Start Riding</a>
        </motion.div>
      </header>

      <section id="about" className="about">
        <h2>Pedal into the Future of Urban Mobility</h2>
        <div className="feature-grid">
          {[
            { icon: '🚲', title: 'Smart Bikes', description: 'GPS-enabled bikes for easy tracking and unlocking' },
            { icon: '🌿', title: 'Eco-Friendly', description: 'Zero-emission transportation for a greener city' },
            { icon: '💨', title: 'Quick & Easy', description: 'Grab a bike and go in seconds with our app' },
            { icon: '🏙️', title: 'City-Wide Network', description: 'Find bikes at convenient locations all over the city' }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <h2>How CityPedal Works</h2>
        <div className="steps">
          {[
            { number: '01', title: 'Locate', description: 'Find a nearby bike using our app' },
            { number: '02', title: 'Unlock', description: 'Scan the QR code to unlock the bike' },
            { number: '03', title: 'Ride', description: 'Enjoy your ride around the city' },
            { number: '04', title: 'Return', description: 'Park the bike at any designated spot' }
          ].map((step, index) => (
            <motion.div 
              key={index} 
              className="step-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="pricing">
        <h2>Simple Pricing, Unlimited Rides</h2>
        <div className="pricing-cards">
          {[
            { title: 'Daily Pass', price: '$9.99', features: ['Unlimited 30-minute rides', 'Access to all city zones', '24-hour validity'] },
            { title: 'Monthly Pass', price: '$29.99', features: ['Unlimited 45-minute rides', 'Access to all city zones', 'Priority customer support'] },
            { title: 'Annual Pass', price: '$199.99', features: ['Unlimited 60-minute rides', 'Access to all city zones', 'Exclusive member events'] }
          ].map((plan, index) => (
            <motion.div 
              key={index} 
              className="pricing-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{plan.title}</h3>
              <div className="price">{plan.price}</div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#select-plan" className="btn btn-secondary">Choose Plan</a>
            </motion.div>
          ))}
        </div>
      </section>
   
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>CityPedal</h3>
            <p>Revolutionizing urban mobility, one ride at a time.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@citypedal.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">TW</a>
              <a href="#" className="social-icon">IG</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CityPedal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;