import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import * as Icons from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Our Mission',
      description: 'To provide exceptional landscaping services that enhance the beauty and value of every property we serve, while building lasting relationships with our customers.'
    },
    {
      icon: 'Award',
      title: 'Quality Commitment',
      description: 'We are committed to delivering the highest quality workmanship using professional equipment and techniques that ensure lasting results.'
    },
    {
      icon: 'Shield',
      title: 'Licensed & Insured',
      description: 'Fully licensed and comprehensively insured, we protect both our team and your property. Work with confidence knowing you\'re covered.'
    },
    {
      icon: 'Heart',
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen to your needs, communicate clearly, and go the extra mile to exceed your expectations.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="About KP Landscaping"
        subtitle="Professional landscaping services built on experience, reliability, and commitment to excellence"
        backgroundImage="https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96"
        height="min-h-[400px]"
      />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#004534] font-bold mb-6 text-center"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              Your Trusted Landscaping Partner
            </h2>
            
            <div className="space-y-6 text-[#0C6951] text-lg leading-relaxed">
              <p>
                At KP Landscaping, we believe that a well-maintained landscape is more than just beautiful — it's an investment in your property's value and your quality of life. For years, we've been helping residential and commercial property owners create and maintain outdoor spaces they can be proud of.
              </p>
              
              <p>
                Our team of skilled professionals brings extensive experience in all aspects of landscaping, from routine lawn maintenance to complete landscape installations. We use commercial-grade equipment and proven techniques to ensure every job is done right the first time.
              </p>
              
              <p>
                What sets us apart is our commitment to reliability and customer service. We show up on time, communicate clearly, and treat every property as if it were our own. When you choose KP Landscaping, you're choosing a partner who cares about your satisfaction as much as you do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-[#FAFAFF]">
        <div className="container px-6">
          <div className="text-center mb-16">
            <h2 className="text-[#004534] font-bold mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              What We Stand For
            </h2>
            <p className="text-[#0C6951] text-xl max-w-3xl mx-auto">
              Our values guide everything we do, from how we treat customers to the quality of work we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = Icons[value.icon] || Icons.CheckCircle;
              return (
                <div key={index} className="network-card">
                  <div className="w-16 h-16 bg-[#D3FF62] rounded-full flex items-center justify-center mb-6">
                    <IconComponent size={32} className="text-[#004534]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#004534] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-[#0C6951] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Long-term Commitment */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Icons.Sprout size={64} className="text-[#D3FF62] mx-auto mb-6" />
            <h2 className="text-[#004534] font-bold mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: '1.2' }}>
              Committed to Long-Term Lawn Health
            </h2>
            <p className="text-[#0C6951] text-lg leading-relaxed mb-8">
              We don't just make your lawn look good today — we focus on building and maintaining healthy turf that thrives season after season. Through proper mowing techniques, appropriate fertilization, effective weed control, and expert advice, we help you achieve a lawn that's not only beautiful but resilient and sustainable.
            </p>
            <p className="text-[#0C6951] text-lg leading-relaxed">
              Our approach is rooted in understanding your lawn's unique needs and providing services that promote strong root development, disease resistance, and year-round vitality. When you partner with KP Landscaping, you're investing in the long-term health and beauty of your outdoor space.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Work Together"
        subtitle="Ready to experience the KP Landscaping difference? Contact us today for a free estimate."
      />

      <Footer />
    </div>
  );
};

export default About;
