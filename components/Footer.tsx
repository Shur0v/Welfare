'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-dark to-primary" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-48 h-12 brightness-0 invert">
                <Image
                  src="https://wvetclinic.com/wp-content/uploads/2023/02/cropped-Welfare-Veterinary-Horizontal-logo-01-scaled-1-2048x1501.png"
                  alt="Welfare Veterinary Clinic Logo"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Compassionate veterinary care you can trust. We provide a full range of medical services for your beloved pets in Abu Dhabi.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all text-slate-400 hover:text-white">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Pricing Plans', 'Pet Care Blog', 'Contact Us'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-primary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8">Our Services</h4>
            <ul className="space-y-4">
              {['Preventive Care', 'Animal Hospital', 'Pet Surgery', 'Dental Care', 'Emergency Care', 'Diagnostics'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-primary transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} className="text-primary shrink-0" />
                <span className="text-slate-400 text-sm">123 Medical District, Al Reem Island, Abu Dhabi, UAE</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-primary shrink-0" />
                <span className="text-slate-400 text-sm">+971 00 000 0000</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-primary shrink-0" />
                <span className="text-slate-400 text-sm">info@welfarevet.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Welfare Veterinary Clinic. All rights reserved.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-1"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
