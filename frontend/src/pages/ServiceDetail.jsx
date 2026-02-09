import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import * as Icons from 'lucide-react';
import { services } from '../data/mock';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-[#004534] mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const IconComponent = Icons[service.icon] || Icons.CheckCircle;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title={service.name}
        subtitle={service.shortDesc}
        backgroundImage={service.image}
        height="min-h-[400px]"
        showCTA={false}
      />

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-20 h-20 bg-[#D3FF62] rounded-full flex items-center justify-center flex-shrink-0">
                <IconComponent size={40} className="text-[#004534]" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#004534]">Service Overview</h2>
              </div>
            </div>
            
            <p className="text-[#0C6951] text-lg leading-relaxed">
              {service.fullDesc}
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-[#FAFAFF]">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#004534] font-bold mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.included.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icons.CheckCircle size={24} className="text-[#D3FF62] flex-shrink-0 mt-1" />
                  <span className="text-[#0C6951] text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#004534] font-bold mb-8"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-[#FAFAFF] rounded-[24px] p-6">
                  <div className="flex items-center gap-3">
                    <Icons.Sparkles size={24} className="text-[#D3FF62]" />
                    <span className="text-[#0C6951] text-lg font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-[#FAFAFF]">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#004534] font-bold mb-12 text-center"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
              Our Process
            </h2>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D3FF62] rounded-full flex items-center justify-center font-bold text-[#004534] text-xl">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white rounded-[24px] p-6">
                    <p className="text-[#0C6951] text-lg">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-[#004534] font-bold mb-12 text-center"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="bg-[#FAFAFF] rounded-[24px] p-8">
                    <h3 className="text-xl font-semibold text-[#004534] mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-[#0C6951] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us */}
      <section className="py-20 bg-[#EDEDFE]">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-[#004534] font-bold mb-6"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.2' }}>
              Why Choose KP Landscaping
            </h2>
            <p className="text-[#0C6951] text-lg leading-relaxed mb-8">
              When you choose KP Landscaping for your {service.name.toLowerCase()}, you're choosing a team that's committed to quality, reliability, and your complete satisfaction. We're licensed, insured, and ready to exceed your expectations.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8">
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* GHL Form Placeholder */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[#004534] font-bold mb-4"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
                Request a Free Estimate
              </h2>
              <p className="text-[#0C6951] text-xl">
                Interested in {service.name.toLowerCase()}? Get a free, no-obligation estimate today.
              </p>
            </div>

            <div className="bg-[#FAFAFF] rounded-[32px] p-8 md:p-12">
              <div className="border-2 border-dashed border-[#CACAFC] rounded-lg p-12 text-center">
                <Icons.FileText size={48} className="text-[#CACAFC] mx-auto mb-4" />
                <p className="text-[#004534] font-semibold text-lg mb-2">
                  GoHighLevel Form Integration Area
                </p>
                <p className="text-[#807979]">
                  This section is designed for your GoHighLevel form embed code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for Professional ${service.name}?`}
        subtitle="Contact us today to schedule your service or get a free estimate."
      />

      <Footer />
    </div>
  );
};

export default ServiceDetail;
