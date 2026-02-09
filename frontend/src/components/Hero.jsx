import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Hero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  showCTA = true,
  height = 'min-h-[600px]'
}) => {
  return (
    <section 
      className={`relative ${height} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#004534] opacity-70"></div>
      
      {/* Content */}
      <div className="container relative z-10 text-center px-6">
        <h1 className="text-white font-bold mb-6" 
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: '1.1',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
             style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
            {subtitle}
          </p>
        )}
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="btn-primary text-lg px-8">
              Get Free Estimate
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <a href={`tel:${contactInfo.phone}`} className="btn-secondary text-lg px-8 bg-white">
              <Phone className="inline mr-2" size={20} />
              Call Now
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
