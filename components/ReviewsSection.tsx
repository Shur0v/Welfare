'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: "Ahmed Al-Mansoori",
      date: "2 weeks ago",
      rating: 5,
      text: "The best veterinary clinic in Abu Dhabi. The staff is incredibly professional and they truly care about the animals. My cat had a complex surgery here and the recovery was amazing.",
      source: "Google Reviews"
    },
    {
      name: "Jessica Thompson",
      date: "1 month ago",
      rating: 5,
      text: "Transparent pricing and excellent service. I've been to many vets, but Welfare is the only one I trust with my puppy. They explained everything clearly and didn't push unnecessary tests.",
      source: "Google Reviews"
    },
    {
      name: "Fatima Hassan",
      date: "3 days ago",
      rating: 5,
      text: "Emergency service was top-notch. They took us in immediately when our dog got injured. The vet was calm, expert, and very reassuring during a stressful time.",
      source: "Google Reviews"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const next = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
              <Star size={16} fill="currentColor" /> Testimonials
            </div>
            <h2 className="text-4xl font-bold mb-6">What Pet Parents Say About Us</h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <span className="text-2xl font-bold">4.9/5</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8">
              We are proud to have served thousands of happy pets and their families. Our commitment to excellence shows in every review.
            </p>
            <div className="flex items-center gap-4">
              <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft size={24} />
              </button>
              <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="lg:w-2/3 relative">
            <div className="absolute -top-12 -left-12 text-primary/10">
              <Quote size={160} fill="currentColor" />
            </div>
            
            <div className="relative h-[300px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 shadow-2xl w-full"
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xl lg:text-2xl font-medium leading-relaxed mb-8 italic">
                    &quot;{reviews[activeIndex].text}&quot;
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-lg">{reviews[activeIndex].name}</p>
                      <p className="text-slate-500 text-sm">{reviews[activeIndex].date} • {reviews[activeIndex].source}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold">
                      {reviews[activeIndex].name.charAt(0)}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
