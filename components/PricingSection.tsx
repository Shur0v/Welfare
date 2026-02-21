'use client';

import React from 'react';
import { Check, ArrowRight, Wallet } from 'lucide-react';
import { motion } from 'motion/react';

const PricingSection = () => {
  const packages = [
    {
      name: "Feline/Canine Package",
      price: "250",
      desc: "Comprehensive annual wellness for adult pets.",
      features: [
        "Full Physical Examination",
        "Annual Vaccinations",
        "Internal Parasite Screening",
        "Basic Blood Profile",
        "Nutritional Consultation"
      ],
      popular: false
    },
    {
      name: "Kitten Package",
      price: "250",
      desc: "Everything your new kitten needs to start life right.",
      features: [
        "Initial Health Assessment",
        "Core Vaccination Series",
        "Deworming Treatment",
        "Microchip Implantation",
        "Growth & Diet Monitoring"
      ],
      popular: true
    },
    {
      name: "Puppy Package",
      price: "250",
      desc: "Essential early-life care for your growing puppy.",
      features: [
        "Pediatric Examination",
        "Puppy Vaccination Course",
        "Parasite Prevention",
        "Microchip & Registration",
        "Behavioral Advice"
      ],
      popular: false
    }
  ];

  return (
    <section id="prices" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Wallet size={14} /> Transparent Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Affordable, Transparent Pricing</h2>
          <p className="text-lg text-slate-600">
            Quality veterinary care shouldn&apos;t be a financial burden. We offer competitive, clear pricing for all our services and packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${pkg.popular ? 'border-primary bg-primary/5 shadow-xl scale-105 z-10' : 'border-slate-100 bg-white shadow-sm'} flex flex-col`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-sm">{pkg.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-display font-bold text-slate-900">{pkg.price}</span>
                <span className="text-slate-500 font-bold">AED</span>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                      <Check size={10} />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${pkg.popular ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                Select Package <ArrowRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            View Full Price List <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

import Link from 'next/link';

export default PricingSection;
