'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, X, Instagram, Maximize2, Volume2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const InstagramReels = () => {
  const [selectedReel, setSelectedReel] = useState<any>(null);

  const reels = [
    { id: 1, title: "A Day in the Life", desc: "Follow our vet team as they care for our patients.", thumb: "https://www.hurstanimalclinic.com/services/_images/urgent-care.jpg" },
    { id: 2, title: "Puppy's First Visit", desc: "Meet little Max on his first wellness check.", thumb: "https://cdn.shopify.com/s/files/1/0268/4737/9528/files/MGO_9346-HDR.jpg?v=1583238694" },
    { id: 3, title: "Dental Health Tips", desc: "How to keep your pet's teeth sparkling clean.", thumb: "https://www.globe.co.th/wp-content/uploads/2024/05/happypethospitalbangkokstaff.jpg" },
    { id: 4, title: "Surgery Success", desc: "A heartwarming recovery story of a brave cat.", thumb: "https://miraculous-family-8f5ae765c9.media.strapiapp.com/nh_2_ce9d7a2541.jpg" },
    { id: 5, title: "New Equipment Tour", desc: "Checking out our latest diagnostic tools.", thumb: "https://happytailsanimalhospital.com/wp-content/uploads/2024/07/Long-picture-of-Treatment-area-1536x1025.jpg" },
    { id: 6, title: "Pet Nutrition 101", desc: "What should you be feeding your furry friend?", thumb: "https://petconnection.ae/wp-content/uploads/2022/12/ZOH_1695-1024x681.jpg" },
  ];

  return (
    <section className="py-24 bg-medical-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
              <Instagram size={16} /> Social Media
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Inside Our Clinic</h2>
            <p className="text-slate-600 mt-4">
              Follow us on Instagram for daily updates, pet care tips, and behind-the-scenes looks at our clinic.
            </p>
          </div>
          <button className="bg-white border border-slate-200 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            Follow @WelfareVet <Instagram size={18} className="text-primary" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              whileHover={{ y: -8 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => setSelectedReel(reel)}
            >
              <Image
                src={reel.thumb}
                alt={reel.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-300 border border-white/30">
                  <Play fill="white" size={20} />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-bold text-sm leading-tight line-clamp-2">{reel.title}</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Reel</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reel Modal */}
      <AnimatePresence>
        {selectedReel && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
              onClick={() => setSelectedReel(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[80vh]"
            >
              {/* Video Area */}
              <div className="md:w-[45%] bg-black relative flex items-center justify-center">
                <Image
                  src={selectedReel.thumb}
                  alt={selectedReel.title}
                  fill
                  className="object-cover opacity-50 blur-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                   <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40">
                     <Play fill="white" size={32} />
                   </div>
                </div>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white z-20">
                  <div className="flex items-center gap-4">
                    <button className="hover:text-primary transition-colors"><Volume2 size={20} /></button>
                    <div className="h-1 w-32 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-primary" />
                    </div>
                  </div>
                  <button className="hover:text-primary transition-colors"><Maximize2 size={20} /></button>
                </div>
              </div>

              {/* Info Area */}
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">W</div>
                    <div>
                      <p className="font-bold text-slate-900">Welfare Veterinary Clinic</p>
                      <p className="text-xs text-slate-500">Abu Dhabi, UAE</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedReel(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={24} className="text-slate-400" />
                  </button>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedReel.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {selectedReel.desc}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-400">
                      <MessageCircle size={18} /> 24 Comments
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <p className="text-sm text-slate-700 italic">&quot;Thank you for taking such good care of Max! He&apos;s doing great now.&quot;</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-wider">— Sarah J.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100 mt-auto">
                  <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-dark transition-all">
                    <Instagram size={20} /> View on Instagram
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InstagramReels;
