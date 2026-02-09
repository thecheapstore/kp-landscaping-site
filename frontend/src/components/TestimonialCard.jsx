import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="network-card">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={20} fill="#D3FF62" color="#D3FF62" />
        ))}
      </div>
      <p className="text-[#0C6951] mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>
      <div className="mt-auto pt-4 border-t border-[#CACAFC]">
        <p className="font-semibold text-[#004534]">{testimonial.name}</p>
        <p className="text-[#807979] text-sm">{testimonial.location}</p>
        <p className="text-[#807979] text-xs mt-1">{testimonial.date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
