'use client';

import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent)]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Ready to Give Your Pet the Best Care?
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed">
              Our team is ready to welcome you and your furry friend. Schedule your visit today or give us a call for any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-3 group">
                <Calendar size={24} />
                Book Appointment
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-10 py-5 rounded-full text-lg font-bold border border-white/10 transition-all flex items-center justify-center gap-3">
                <Phone size={24} className="text-primary" />
                Call +971 00 000 0000
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" /> Open Today until 10:00 PM
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" /> Emergency Services Available
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" /> Free Parking for Clients
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
