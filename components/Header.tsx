'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Globe, Instagram, Facebook, Twitter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Prices', href: '#prices' },
    { name: 'Resources', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-slate-200/20 py-3 border-b border-white/20' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-48 h-12 scale-[2] origin-left">
            <Image
              src="https://wvetclinic.com/wp-content/uploads/2023/02/cropped-Welfare-Veterinary-Horizontal-logo-01-scaled-1-2048x1501.png"
              alt="Welfare Veterinary Clinic Logo"
              fill
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
              </Link>
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 w-64 grid grid-cols-1 gap-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-2">Preventive Care</div>
                    <Link href="#" className="px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-all">Vaccinations</Link>
                    <Link href="#" className="px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-all">Pet Dentistry</Link>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-2 mb-1 px-2">Animal Hospital</div>
                    <Link href="#" className="px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-all">Pet Surgery</Link>
                    <Link href="#" className="px-2 py-1.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary rounded-lg transition-all">Emergency Care</Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3 border-r border-slate-200 pr-6">
            <button className="text-slate-400 hover:text-primary transition-colors"><Instagram size={18} /></button>
            <button className="text-slate-400 hover:text-primary transition-colors"><Facebook size={18} /></button>
            <button className="flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-primary transition-colors uppercase tracking-wider">
              <Globe size={14} /> EN
            </button>
          </div>
          <Link
            href="#contact"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/80 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-slate-700 hover:text-primary py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <button className="flex items-center gap-2 text-sm font-bold text-slate-600">
                  <Globe size={16} /> Arabic
                </button>
                <div className="flex items-center gap-4 ml-auto">
                  <Instagram size={20} className="text-slate-400" />
                  <Facebook size={20} className="text-slate-400" />
                </div>
              </div>
              <Link
                href="#contact"
                className="bg-primary text-white text-center py-4 rounded-xl font-bold mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
