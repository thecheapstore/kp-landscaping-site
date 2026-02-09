import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/mock';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our landscaping services"
        backgroundImage="https://images.unsplash.com/photo-1770234848941-8bd67b57d700"
        height="min-h-[400px]"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-[#004534] font-bold mb-6 text-2xl">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const index = `${categoryIndex}-${questionIndex}`;
                    const isOpen = openIndex === index;
                    
                    return (
                      <div
                        key={questionIndex}
                        className="bg-[#FAFAFF] rounded-[24px] overflow-hidden shadow-sm"
                      >
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#EDEDFE] transition-colors"
                        >
                          <span className="font-semibold text-[#004534] text-lg pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={24}
                            className={`text-[#004534] flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="px-6 pb-5">
                            <p className="text-[#0C6951] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center bg-[#EDEDFE] rounded-[32px] p-12">
            <h2 className="text-[#004534] font-bold mb-4 text-3xl">
              Still Have Questions?
            </h2>
            <p className="text-[#0C6951] text-lg mb-6">
              We're here to help! Contact us directly and we'll be happy to answer any questions you have.
            </p>
            <a href="/contact" className="btn-primary text-lg px-8">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
