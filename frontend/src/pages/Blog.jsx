import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero
        title="Landscaping Tips & Insights"
        subtitle="Expert advice, seasonal guides, and landscaping inspiration"
        backgroundImage="https://images.unsplash.com/photo-1759069953255-5c8f9f9912b9"
        height="min-h-[400px]"
        showCTA={false}
      />

      <section className="py-20 bg-white">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="network-card">
                  <div className="mb-6 -mx-8 -mt-8 rounded-t-[32px] overflow-hidden h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <span className="bg-[#D3FF62] text-[#004534] px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#004534] mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#0C6951] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-[#807979] text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </span>
                  </div>
                  
                  <button className="text-[#004534] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={18} />
                  </button>
                </article>
              ))}
            </div>

            {/* Placeholder for more posts */}
            <div className="mt-16 text-center bg-[#FAFAFF] rounded-[32px] p-12">
              <h3 className="text-[#004534] font-bold mb-4 text-2xl">
                More Articles Coming Soon
              </h3>
              <p className="text-[#0C6951] text-lg mb-6">
                We're constantly adding new content to help you maintain a beautiful landscape. Check back soon for more tips and guides!
              </p>
              <Link to="/contact" className="btn-primary">
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
