'use client';

import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, ExternalLink } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="contact" className="py-24 bg-medical-bg">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 p-12 lg:p-16 flex flex-col">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Visit Our Clinic</h2>
            
            <div className="space-y-8 flex-1">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Address</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    123 Medical District, Al Reem Island<br />
                    Abu Dhabi, United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-500 text-sm">+971 00 000 0000</p>
                  <p className="text-slate-500 text-sm">+971 00 000 0001</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Working Hours</h4>
                  <p className="text-slate-500 text-sm">Mon - Sun: 9:00 AM - 10:00 PM</p>
                  <p className="text-primary text-xs font-bold mt-1 uppercase tracking-widest">Open 7 Days a Week</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-500 text-sm">info@welfarevet.ae</p>
                  <p className="text-slate-500 text-sm">appointments@welfarevet.ae</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100">
              <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                <Navigation size={18} /> Get Directions <ExternalLink size={14} />
              </button>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-2/3 h-[500px] lg:h-auto bg-slate-100 relative">
            {/* Placeholder for Google Map */}
            <div className="absolute inset-0 bg-[url('https://www.localvet.com.au/Vet2Pet/Images/reception%20square.jpg')] bg-cover bg-center grayscale opacity-50" />
            <div className="absolute inset-0 bg-primary/5" />
            
            {/* Map Marker Placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-primary/20 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div className="pr-4">
                    <p className="font-bold text-slate-900 text-sm">Welfare Veterinary Clinic</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Al Reem Island</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
