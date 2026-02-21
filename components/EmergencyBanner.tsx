'use client';

import React from 'react';
import { AlertCircle, Phone, MapPin, ArrowRight } from 'lucide-react';

const EmergencyBanner = () => {
  return (
    <div className="bg-red-600 text-white py-4 relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="bg-white/20 p-2 rounded-lg animate-pulse">
            <AlertCircle size={24} />
          </div>
          <div>
            <p className="font-bold text-lg leading-tight">Emergency? We’re open daily 9:00 AM – 10:00 PM</p>
            <p className="text-white/80 text-sm">Immediate care for your beloved pets when they need it most.</p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <a
            href="tel:+9710000000"
            className="flex-1 md:flex-none bg-white text-red-600 px-6 py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-50 transition-colors"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="#map"
            className="flex-1 md:flex-none bg-red-700 text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 hover:bg-red-800 transition-colors border border-red-500/30"
          >
            <MapPin size={18} />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
