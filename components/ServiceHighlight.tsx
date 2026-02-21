'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const ServiceHighlight = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://parklandvet.net/wp-content/uploads/2017/06/pet-surgery-dog-cat-spruce-grove.jpg"
                  alt="Advanced Pet Surgery"
                  width={800}
                  height={1000}
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">99.9% Success Rate</p>
                    <p className="text-slate-500 text-sm">In routine surgeries</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Specialized Care</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Advanced Pet Surgery & Diagnostics</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our surgical suite is equipped with the latest technology to ensure the safest possible procedures for your pets. From routine spaying to complex orthopedic surgeries, our team is prepared.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Minimally invasive surgical techniques",
                "Advanced anesthesia monitoring systems",
                "Comprehensive pre-surgical blood screening",
                "Dedicated post-operative recovery care",
                "Specialized orthopedic & soft tissue surgery"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                Book a Consultation <ArrowRight size={18} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/10">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlight;
