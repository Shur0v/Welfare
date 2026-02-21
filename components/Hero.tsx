'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-[0.7]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-veterinarian-examining-a-dog-4442-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent lg:from-white/80 lg:via-white/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Trusted Veterinary Care in Abu Dhabi
            </span>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
              Compassionate <span className="text-primary">Veterinary Care</span> You Can Trust
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              Emergency care, preventive treatments, diagnostics, and surgery — all under one roof. We treat your pets like family.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
              >
                <Calendar size={20} />
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="tel:+9710000000"
                className="bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-full text-lg font-bold shadow-lg border border-slate-100 flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={20} className="text-primary" />
                Call Now
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <Link href="#services" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wider">
                View Services <ArrowRight size={16} />
              </Link>
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-slate-100">
                    <Image src={`https://picsum.photos/100/100?random=${i+10}`} width={40} height={40} alt="Pet" referrerPolicy="no-referrer" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
                  +2k
                </div>
              </div>
              <span className="text-xs font-medium text-slate-500">Happy Pets Treated</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-white to-transparent z-0" />
    </section>
  );
};

// Helper Link component since I'm using it inside Hero
import Link from 'next/link';

export default Hero;
