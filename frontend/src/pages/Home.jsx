import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import GalleryGrid from '../components/GalleryGrid';
import * as Icons from 'lucide-react';
import { services, testimonials, whyChooseUs, galleryImages, serviceAreas } from '../data/mock';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <Hero
        title="Professional Lawn Care & Landscaping Services"
        subtitle="Reliable, experienced service for residential and commercial properties. Licensed, insured, and committed to excellence."
        backgroundImage="https://images.unsplash.com/photo-1734303023491-db8037a21f09"
      />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#004534] font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              Our Services
            </h2>
            <p className="text-[#0C6951] text-xl max-w-3xl mx-auto">
              From routine maintenance to complete landscape transformations, we provide comprehensive services to keep your property looking its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} compact={true} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/services" className="btn-primary text-lg px-8">
              View All Services
              <Icons.ArrowRight className="inline ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#FAFAFF]">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#004534] font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              Why Choose KP Landscaping
            </h2>
            <p className="text-[#0C6951] text-xl max-w-3xl mx-auto">
              Experience the difference that professionalism, reliability, and expertise make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = Icons[item.icon] || Icons.CheckCircle;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-[#D3FF62] rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent size={36} className="text-[#004534]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#004534] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#0C6951]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#004534] font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              What Our Customers Say
            </h2>
            <p className="text-[#0C6951] text-xl max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 bg-[#FAFAFF]">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#004534] font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              Our Work
            </h2>
            <p className="text-[#0C6951] text-xl max-w-3xl mx-auto">
              Take a look at some of our recent projects and see the quality we deliver.
            </p>
          </div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#004534] font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              Areas We Serve
            </h2>
            <p className="text-[#0C6951] text-xl max-w-3xl mx-auto mb-8">
              Proudly serving communities throughout the region with professional landscaping services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {serviceAreas.map((area) => (
                <span 
                  key={area}
                  className="bg-[#EDEDFE] text-[#004534] px-6 py-3 rounded-full font-semibold text-lg"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Request Section - GHL Form Placeholder */}
      <section className="py-20 bg-[#EDEDFE]">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#004534] font-bold mb-4"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
                Get Your Free Estimate Today
              </h2>
              <p className="text-[#0C6951] text-xl">
                Ready to transform your outdoor space? Fill out the form below or give us a call.
              </p>
            </div>

            {/* GHL Form Container - Placeholder */}
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-lg">
              <div className="border-2 border-dashed border-[#CACAFC] rounded-lg p-12 text-center">
                <Icons.FileText size={48} className="text-[#CACAFC] mx-auto mb-4" />
                <p className="text-[#004534] font-semibold text-lg mb-2">
                  GoHighLevel Form Integration Area
                </p>
                <p className="text-[#807979]">
                  This section is designed for your GoHighLevel form embed code.
                  <br />
                  Replace this placeholder with your actual form code.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-[#0C6951] text-lg mb-4">
                Or contact us directly:
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Get Started?"
        subtitle="Let us help you create and maintain the outdoor space of your dreams. Contact us today for a free estimate!"
        buttonText="Get Free Estimate"
      />

      <Footer />
    </div>
  );
};

export default Home;
