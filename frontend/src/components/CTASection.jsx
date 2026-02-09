import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = ({ 
  title, 
  subtitle, 
  buttonText = "Get Free Estimate",
  buttonLink = "/contact",
  backgroundStyle = "primary"
}) => {
  const bgClass = backgroundStyle === "primary" 
    ? "bg-[#004534]" 
    : "bg-[#EDEDFE]";
  
  const textClass = backgroundStyle === "primary"
    ? "text-white"
    : "text-[#004534]";

  return (
    <section className={`${bgClass} py-20`}>
      <div className="container text-center px-6">
        <h2 className={`${textClass} font-bold mb-6`}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
          {title}
        </h2>
        {subtitle && (
          <p className={`${backgroundStyle === "primary" ? "text-white opacity-90" : "text-[#0C6951]"} text-xl mb-8 max-w-2xl mx-auto`}>
            {subtitle}
          </p>
        )}
        <Link to={buttonLink} className="btn-primary text-lg px-8 inline-flex items-center gap-2">
          {buttonText}
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
