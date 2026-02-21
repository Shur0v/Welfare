'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Ahmed",
      role: "Senior Veterinarian",
      specialty: "Surgery & Internal Medicine",
      image: "https://images.pexels.com/photos/6234609/pexels-photo-6234609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. Michael Chen",
      role: "Veterinary Surgeon",
      specialty: "Orthopedics & Soft Tissue",
      image: "https://images.pexels.com/photos/6234611/pexels-photo-6234611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. Elena Rodriguez",
      role: "Diagnostic Specialist",
      specialty: "Ultrasound & Radiology",
      image: "https://images.pexels.com/photos/6234616/pexels-photo-6234616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. James Wilson",
      role: "Wellness Expert",
      specialty: "Preventive Care & Nutrition",
      image: "https://images.pexels.com/photos/6234622/pexels-photo-6234622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-24 bg-medical-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Experts</span>
            <h2 className="text-4xl font-bold text-slate-900">Meet Our Dedicated Team</h2>
            <p className="text-slate-600 mt-4">
              Our team of highly qualified veterinarians and support staff are passionate about animal welfare and dedicated to providing the best care.
            </p>
          </div>
          <button className="bg-white border border-slate-200 px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm group">
            View All Profiles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Instagram size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-primary transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{member.name}</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">{member.role}</p>
              <p className="text-slate-500 text-sm mt-3">{member.specialty}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
