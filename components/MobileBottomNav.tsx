'use client';

import React from 'react';
import { Phone, Calendar, MapPin, MessageCircle } from 'lucide-react';

const MobileBottomNav = () => {
  return (
    <div className="lg:hidden fixed bottom-6 left-4 right-4 z-[40]">
      <div className="bg-slate-900/90 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-white/10 flex items-center justify-between gap-2">
        <a
          href="tel:+9710000000"
          className="flex-1 bg-primary text-white h-14 rounded-xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/20"
        >
          <Phone size={20} />
          Call Now
        </a>
        <div className="flex gap-2">
          <button className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
            <Calendar size={20} />
          </button>
          <button className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
            <MapPin size={20} />
          </button>
          <button className="w-14 h-14 bg-emerald-500 text-white rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
            <MessageCircle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomNav;
