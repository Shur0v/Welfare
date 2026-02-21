'use client';

import React from 'react';
import { ShieldCheck, Stethoscope, Wallet, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const TrustSection = () => {
  const highlights = [
    {
      icon: <Stethoscope className="text-primary" size={32} />,
      title: "Experienced Veterinary Team",
      desc: "Our doctors are certified experts with years of clinical experience."
    },
    {
      icon: <ShieldCheck className="text-primary" size={32} />,
      title: "Modern Diagnostic Equipment",
      desc: "State-of-the-art ultrasound, X-ray, and laboratory facilities."
    },
    {
      icon: <Wallet className="text-primary" size={32} />,
      title: "Affordable Transparent Pricing",
      desc: "No hidden fees. We provide clear estimates before any treatment."
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: "Open 7 Days a Week",
      desc: "We're here for you and your pet every single day of the week."
    }
  ];

  return (
    <section className="py-24 bg-medical-bg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-500 italic leading-relaxed">
            &quot;At Welfare Veterinary Clinic, we believe every pet deserves the highest standard of medical care delivered with a gentle touch. Our mission is to enhance the bond between you and your companion through excellence in veterinary medicine.&quot;
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-slate-200" />
            <span className="text-sm font-bold text-slate-900 uppercase tracking-widest">Our Commitment to Excellence</span>
            <div className="h-px w-12 bg-slate-200" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
