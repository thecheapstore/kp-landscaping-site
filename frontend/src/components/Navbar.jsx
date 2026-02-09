import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/#gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="network-header">
      <div className="nav-wrapper">
        <Link to="/" className="network-logo">
  <img src="/logo.png" alt="KP Landscaping Logo" className="logo-img" />
</Link>

        {/* Desktop Navigation */}
        <nav className="network-nav hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`network-nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-white">
            <Phone size={18} />
            <span className="font-semibold">{contactInfo.phone}</span>
          </a>
          <Link to="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden">
          <nav className="flex flex-col space-y-4 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 text-[#004534] font-semibold"
            >
              <Phone size={18} />
              {contactInfo.phone}
            </a>
            <Link
              to="/contact"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Free Estimate
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
