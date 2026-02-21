'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Activity, Shield, Microscope, Scissors, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const ServicesSection = () => {
  const preventiveCare = [
    { title: "Kitten’s First Vet Visit", desc: "Comprehensive health check and vaccination plan for your new feline friend.", icon: <Heart size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/1.jpg" },
    { title: "Pet Dentistry", desc: "Professional cleaning and oral surgery to keep your pet's smile healthy.", icon: <Activity size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/2.webp" },
    { title: "Flea-And-Tick Control", desc: "Effective prevention and treatment plans tailored to your pet's lifestyle.", icon: <Shield size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/3.webp" },
    { title: "Pet Heartworm Test", desc: "Quick and accurate screening for heartworm disease and other parasites.", icon: <Microscope size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/4.webp" },
    { title: "Pet Microchip", desc: "Permanent identification to ensure your pet can always find their way home.", icon: <Zap size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/5.webp" },
    { title: "Pet Vaccination", desc: "Essential immunizations to protect against common and serious diseases.", icon: <Shield size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/6.webp" },
  ];

  const animalHospital = [
    { title: "Pet Emergency", desc: "Critical care and stabilization for urgent medical situations.", icon: <Zap size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/1b.webp" },
    { title: "Animal Clinic Visits", desc: "Routine check-ups and diagnostic consultations for all life stages.", icon: <Activity size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/2-1.webp" },
    { title: "Pet Ultrasound", desc: "Advanced non-invasive imaging for accurate internal diagnostics.", icon: <Microscope size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/3-2.webp" },
    { title: "Pet Surgery", desc: "Expert soft tissue and orthopedic surgical procedures.", icon: <Scissors size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/4-2.webp" },
    { title: "Pet Pain-Relief", desc: "Compassionate management of acute and chronic pain conditions.", icon: <Heart size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/5-1.webp" },
    { title: "Spay and Neuter", desc: "Safe and routine procedures to prevent unwanted litters and health issues.", icon: <Scissors size={20} />, image: "https://wvetclinic.com/wp-content/uploads/2023/12/6-1.webp" },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Our Veterinary Services</h2>
          <p className="text-lg text-slate-600">
            From routine wellness exams to advanced surgical procedures, we provide a full spectrum of care for your beloved companions.
          </p>
        </div>

        {/* Preventive Care */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Shield size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Preventive Care</h3>
              <p className="text-slate-500 text-sm">Proactive health management for a long, happy life.</p>
            </div>
            <div className="flex-1 h-px bg-slate-100 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preventiveCare.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* Animal Hospital */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Activity size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Animal Hospital</h3>
              <p className="text-slate-500 text-sm">Advanced medical treatments and surgical expertise.</p>
            </div>
            <div className="flex-1 h-px bg-slate-100 ml-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animalHospital.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any, index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col"
  >
    <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl text-primary shadow-sm">
        {service.icon}
      </div>
    </div>
    <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors">{service.title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
      {service.desc}
    </p>
    <Link href="#" className="flex items-center gap-2 text-sm font-bold text-primary group/link">
      Learn More
      <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
    </Link>
  </motion.div>
);

export default ServicesSection;
