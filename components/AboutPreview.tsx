'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Heart, Shield, Award } from 'lucide-react';
import { motion } from 'motion/react';

const AboutPreview = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/9]">
              <Image
                src="https://wvetclinic.com/wp-content/uploads/2023/02/aboutus.jpg"
                alt="Our Clinic"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 right-1/2 translate-x-1/2 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
              <div className="grid grid-cols-2 gap-12">
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-primary">15+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Years Exp</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-display font-bold text-primary">10k+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Pets Helped</p>
                </div>
              </div>
            </div>

            {/* Floating Icon */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-2xl shadow-primary/40 animate-bounce-slow">
              <Heart size={32} fill="currentColor" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mt-8"
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Values</span>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-slate-900 leading-tight">Why Choose Welfare Veterinary Clinic?</h2>
            <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
              We are more than just a clinic; we are a community of pet lovers dedicated to providing the highest quality medical care. Our team combines expertise with empathy to ensure your pet&apos;s well-being.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { icon: <Heart size={20} />, title: "Compassionate care", desc: "We treat every pet as our own." },
                { icon: <Award size={20} />, title: "Certified veterinarians", desc: "Expertise you can rely on." },
                { icon: <Shield size={20} />, title: "Modern facility", desc: "Advanced medical technology." },
                { icon: <CheckCircle2 size={20} />, title: "Fair pricing", desc: "Transparent and affordable." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="#"
                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-xl shadow-primary/20"
              >
                Learn More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contact"
                className="bg-slate-50 hover:bg-slate-100 text-slate-900 px-10 py-4 rounded-full font-bold transition-all border border-slate-200"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
