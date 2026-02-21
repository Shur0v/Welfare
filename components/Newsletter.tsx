'use client';

import React from 'react';
import Image from 'next/image';
import { Send, Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-24 bg-medical-bg">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-primary/20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://thumbs.dreamstime.com/b/cats-dogs-peeking-over-white-edge-web-promotional-banner-pet-shop-vet-clinic-background-cute-pets-325674604.jpg"
              alt="Pets"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto lg:mx-0">
                <Mail size={32} />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Subscribe for Pet Care Updates</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Join our community of pet parents. Get the latest health tips, clinic news, and exclusive offers delivered straight to your inbox.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              <form className="bg-white p-2 rounded-2xl shadow-xl flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 text-slate-900 focus:outline-none font-medium"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                >
                  Subscribe <Send size={18} />
                </button>
              </form>
              <p className="text-white/60 text-xs text-center lg:text-left mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
