import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service, compact = false }) => {
  const IconComponent = Icons[service.icon] || Icons.CheckCircle;

  if (compact) {
    return (
      <Link 
        to={`/services/${service.id}`}
        className="network-card text-left"
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-[#D3FF62] rounded-full flex items-center justify-center">
            <IconComponent size={24} className="text-[#004534]" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-[#004534] mb-2">
              {service.name}
            </h3>
            <p className="text-[#0C6951] line-clamp-2">
              {service.shortDesc}
            </p>
          </div>
        </div>
        <button className="text-[#004534] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          Learn More
          <Icons.ArrowRight size={18} />
        </button>
      </Link>
    );
  }

  return (
    <Link 
      to={`/services/${service.id}`}
      className="network-card text-left"
    >
      {service.image && (
        <div className="mb-6 -mx-8 -mt-8 rounded-t-[32px] overflow-hidden h-48">
          <img 
            src={service.image} 
            alt={service.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-shrink-0 w-14 h-14 bg-[#D3FF62] rounded-full flex items-center justify-center">
          <IconComponent size={28} className="text-[#004534]" />
        </div>
        <h3 className="text-2xl font-semibold text-[#004534]">
          {service.name}
        </h3>
      </div>
      <p className="text-[#0C6951] mb-6 leading-relaxed">
        {service.shortDesc}
      </p>
      <button className="btn-primary w-full">
        Learn More
      </button>
    </Link>
  );
};

export default ServiceCard;
