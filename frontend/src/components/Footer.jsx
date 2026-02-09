import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { contactInfo, serviceAreas } from '../data/mock';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'All Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
  ];

  const mainServices = [
    { name: 'Lawn Mowing', path: '/services/lawn-mowing' },
    { name: 'Landscaping Installation', path: '/services/landscaping-installation' },
    { name: 'Mulching', path: '/services/mulching' },
    { name: 'Fertilization & Seeding', path: '/services/fertilization' },
    { name: 'Tree & Shrub Trimming', path: '/services/tree-trimming' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-heading">KP Landscaping</h3>
            <p className="footer-text">
              Professional lawn care and landscaping services for residential and commercial
              properties. Licensed, insured, and committed to excellence.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-links">
              {mainServices.map((service) => (
                <li key={service.path}>
                  <Link to={service.path} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="footer-contact-item">
                  <Phone size={18} />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="footer-contact-item">
                  <Mail size={18} />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={18} />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
            <p className="footer-hours">{contactInfo.hours}</p>
          </div>
        </div>

        {/* Service Areas */}
        <div className="service-areas-footer">
          <h4 className="text-[#004534] font-semibold mb-3">Service Areas:</h4>
          <div className="flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <span key={area} className="service-area-tag">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} KP Landscaping. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">
              Privacy Policy
            </Link>
            <span className="text-[#807979]">•</span>
            <Link to="/terms" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
