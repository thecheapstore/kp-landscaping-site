import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import * as Icons from 'lucide-react';
import { contactInfo, serviceAreas } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a placeholder - connect to your backend or GHL form)');
    console.log('Form data:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team for a free estimate or to discuss your landscaping needs"
        backgroundImage="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9"
        height="min-h-[400px]"
        showCTA={false}
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-[#004534] font-bold mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D3FF62] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icons.Phone size={24} className="text-[#004534]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004534] mb-1">Phone</h3>
                    <a href={`tel:${contactInfo.phone}`} className="text-[#0C6951] text-lg hover:text-[#004534]">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D3FF62] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icons.Mail size={24} className="text-[#004534]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004534] mb-1">Email</h3>
                    <a href={`mailto:${contactInfo.email}`} className="text-[#0C6951] text-lg hover:text-[#004534]">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D3FF62] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icons.MapPin size={24} className="text-[#004534]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004534] mb-1">Address</h3>
                    <p className="text-[#0C6951] text-lg">
                      {contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#D3FF62] rounded-full flex items-center justify-center flex-shrink-0">
                    <Icons.Clock size={24} className="text-[#004534]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004534] mb-1">Hours</h3>
                    <p className="text-[#0C6951] text-lg">
                      {contactInfo.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-xl font-semibold text-[#004534] mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {serviceAreas.map((area) => (
                    <span 
                      key={area}
                      className="bg-[#EDEDFE] text-[#004534] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Placeholder */}
            <div>
              <div className="bg-[#FAFAFF] rounded-[32px] p-8 shadow-lg">
                <h2 className="text-[#004534] font-bold mb-2 text-2xl">
                  Request a Free Estimate
                </h2>
                <p className="text-[#0C6951] mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#004534] font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#CACAFC] focus:border-[#004534] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#004534] font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#CACAFC] focus:border-[#004534] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#004534] font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#CACAFC] focus:border-[#004534] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[#004534] font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#CACAFC] focus:border-[#004534] focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="lawn-mowing">Lawn Mowing & Maintenance</option>
                      <option value="landscaping">Landscaping Installation</option>
                      <option value="mulching">Mulching</option>
                      <option value="fertilization">Fertilization & Seeding</option>
                      <option value="weed-control">Weed Control</option>
                      <option value="aeration">Lawn Aeration</option>
                      <option value="cleanup">Seasonal Cleanup</option>
                      <option value="tree-trimming">Tree & Shrub Trimming</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#004534] font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg border border-[#CACAFC] focus:border-[#004534] focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg">
                    Submit Request
                  </button>

                  <p className="text-[#807979] text-sm text-center mt-4">
                    * This is a placeholder form. Connect to your backend or replace with GoHighLevel form.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-[#FAFAFF]">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[#004534] font-bold mb-8 text-center"
                style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', lineHeight: '1.2' }}>
              Our Location
            </h2>
            
            <div className="bg-white rounded-[32px] overflow-hidden shadow-lg" style={{ height: '400px' }}>
              <div className="w-full h-full flex items-center justify-center bg-[#EDEDFE]">
                <div className="text-center">
                  <Icons.MapPin size={64} className="text-[#CACAFC] mx-auto mb-4" />
                  <p className="text-[#004534] font-semibold text-lg">
                    Map Integration Placeholder
                  </p>
                  <p className="text-[#807979]">
                    Add your Google Maps embed code here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
