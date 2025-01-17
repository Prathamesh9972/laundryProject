import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel1 from './images/carousel-1.jpg';
import Carousel2 from './images/carousel-2.jpg';
import Header from './Header';
import Footer from './Footer';
import './HomePage.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    
    // Add scroll listener for golden light effect
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    { icon: "cloud-sun", title: "Dry Cleaning", description: "Professional dry cleaning for all your delicate garments" },
    { icon: "soap", title: "Wash & Laundry", description: "Full-service laundry with premium detergents" },
    { icon: "burn", title: "Curtain Laundry", description: "Specialized cleaning for all types of curtains" },
    { icon: "tshirt", title: "Suits Cleaning", description: "Expert care for your formal wear" }
  ];

  const features = [
    { icon: "certificate", title: "10+ Years of Experience", description: "We have a decade of experience in providing top-notch laundry services." },
    { icon: "users", title: "Expert Staff", description: "Our staff are highly trained and experienced professionals." },
    { icon: "clock", title: "24/7 Service", description: "Round-the-clock service for your convenience." }
  ];

  const workingProcess = [
    { number: 1, title: "Place Your Order", description: "Easy online booking system" },
    { number: 2, title: "Free Pick Up", description: "Door-to-door collection service" },
    { number: 3, title: "Dry Cleaning", description: "Professional cleaning process" },
    { number: 4, title: "Free Delivery", description: "Timely delivery to your doorstep" }
  ];

  const testimonials = [
    { name: "John Doe", role: "Regular Customer", text: "Best laundry service I've ever used!" },
    { name: "Jane Smith", role: "Business Owner", text: "Their attention to detail is remarkable." },
    { name: "Mike Johnson", role: "Hotel Manager", text: "Reliable and professional service." }
  ];

  return (
    <div className="main-container">
      <div className={`golden-light ${isVisible ? 'visible' : ''}`} />
      <Header />
      
      {/* Enhanced Carousel Section */}
      <section className="carousel-container">
        <AnimatePresence mode="wait">
          {[Carousel1, Carousel2].map((img, idx) => (
            currentSlide === idx && (
              <motion.div
                key={idx}
                className="carousel-slide"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
              >
                <img src={img} alt={`Slide ${idx + 1}`} className="carousel-image" />
                <div className="carousel-overlay">
                  <motion.div
                    className="carousel-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.h4
                      className="carousel-subtitle"
                      whileHover={{ scale: 1.05 }}
                    >
                      Laundry & Dry Cleaning
                    </motion.h4>
                    <motion.h1
                      className="carousel-title"
                      whileHover={{ scale: 1.02 }}
                    >
                      {idx === 0 ? "Best For Laundry Services" : "Highly Professional Staff"}
                    </motion.h1>
                    <motion.a
                      href={idx === 0 ? "/about" : "/services"}
                      className="button"
                      whileHover={{ scale: 1.05, backgroundColor: "#1d4ed8" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </section>

      {/* Enhanced Services Section */}
      <section className="services-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -10,
                rotateY: 10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.i
                className={`fas fa-${service.icon} service-icon`}
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="card-overlay" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          {[
            { number: "5000+", label: "Happy Customers" },
            { number: "15+", label: "Years Experience" },
            { number: "100%", label: "Satisfaction" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <motion.span
                className="stat-number"
                whileHover={{ scale: 1.1, color: "#ffd700" }}
              >
                {stat.number}
              </motion.span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="features-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>
        <div className="features-container">
          <motion.div
            className="feature-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              At [Your Laundry Service], we are dedicated to providing top-notch laundry services
              with a focus on convenience, quality, and customer satisfaction.
            </p>
            <p>
              Whether you need regular laundry, dry cleaning, or specialized care for delicate
              garments, we've got you covered.
            </p>
          </motion.div>
          <div className="feature-cards">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="feature-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.i
                  className={`fas fa-${feature.icon} feature-icon`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                />
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="testimonials-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="quote-icon">
                <i className="fas fa-quote-right" />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="process-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          How We Work
        </motion.h2>
        <div className="process-container">
          {workingProcess.map((step, idx) => (
            <motion.div
              key={idx}
              className="process-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div
                className="step-number"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {step.number}
              </motion.div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Experience Our Service?</h2>
          <p>Book your first order today and get 20% off!</p>
          <motion.a
            href="/book"
            className="cta-button"
            whileHover={{ scale: 1.05, backgroundColor: "#ffd700" }}
            whileTap={{ scale: 0.95 }}
          >
            Book Now
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;