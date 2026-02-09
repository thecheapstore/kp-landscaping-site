import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/mock';

const Services = () => {
  const categories = {
    'Lawn Care': services.filter(s => ['lawn-mowing', 'fertilization', 'weed-control', 'aeration'].includes(s.id)),
    'Landscaping': services.filter(s => ['landscaping-installation', 'mulching', 'tree-trimming', 'stump-grinding'].includes(s.id)),
    'Maintenance': services.filter(s => ['seasonal-cleanup', 'yard-leveling', 'property-maintenance'].includes(s.id))
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Our Services"
        subtitle="Comprehensive landscaping solutions for residential and commercial properties"
        backgroundImage="https://images.unsplash.com/photo-1758414335609-fe94a3b089c0"
        height="min-h-[400px]"
      />

      {/* Services by Category */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          {Object.entries(categories).map(([category, categoryServices], idx) => (
            <div key={category} className={idx > 0 ? 'mt-20' : ''}>
              <h2 className="text-[#004534] font-bold mb-12 text-center"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
                {category}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-[#FAFAFF]">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#004534] font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              Why Choose KP Landscaping Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div className="bg-white rounded-[32px] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#004534] mb-3">Professional Equipment</h3>
                <p className="text-[#0C6951]">
                  We use commercial-grade equipment maintained to the highest standards, ensuring efficient and quality results on every job.
                </p>
              </div>
              <div className="bg-white rounded-[32px] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#004534] mb-3">Experienced Team</h3>
                <p className="text-[#0C6951]">
                  Our skilled professionals bring years of landscaping expertise and are trained in the latest techniques and best practices.
                </p>
              </div>
              <div className="bg-white rounded-[32px] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#004534] mb-3">Customized Solutions</h3>
                <p className="text-[#0C6951]">
                  Every property is unique. We tailor our services to your specific needs, budget, and goals.
                </p>
              </div>
              <div className="bg-white rounded-[32px] p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#004534] mb-3">Reliable Service</h3>
                <p className="text-[#0C6951]">
                  Count on us to show up on schedule and complete work as promised. We value your time and trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Outdoor Space?"
        subtitle="Contact us today for a free, no-obligation estimate for any of our services."
      />

      <Footer />
    </div>
  );
};

export default Services;
