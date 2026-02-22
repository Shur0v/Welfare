'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const BlogSection = () => {
  const posts = [
    {
      title: "How to Prepare Your Pet for Surgery",
      excerpt: "Everything you need to know about pre-operative care and what to expect on the day of the procedure.",
      author: "Dr. Sarah Ahmed",
      date: "Oct 12, 2023",
      image: "https://unityanimalhospital.com/wp-content/uploads/2015/02/pet_surgery.jpg"
    },
    {
      title: "The Importance of Regular Dental Checks",
      excerpt: "Oral health is a window to your pet's overall well-being. Learn why dental hygiene matters.",
      author: "Dr. James Wilson",
      date: "Oct 05, 2023",
      image: "https://www.lincolnshireanimalhospital.com/blog/wp-content/uploads/2020/01/Canva-Red-Cat-and-toothbrush-2000x1333.jpg"
    },
    {
      title: "Understanding Pet Vaccinations",
      excerpt: "A guide to essential immunizations and why they are critical for protecting your pet from diseases.",
      author: "Dr. Elena Rodriguez",
      date: "Sep 28, 2023",
      image: "https://humanesocietyofcharlotte.org/wp-content/uploads/2017/05/extra-image-cat-getting-vaccine-e1498162267197.jpg"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <BookOpen size={14} /> Pet Care Resources
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Pet Care Tips & Advice</h2>
            <p className="text-slate-600 mt-4">
              Stay informed with the latest insights from our veterinary experts. We share tips to help your pets live their best lives.
            </p>
          </div>
          <Link href="#" className="text-primary font-bold flex items-center gap-2 hover:underline group">
            View All Articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest">
                  Pet Health
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href="#" className="mt-auto flex items-center gap-2 text-sm font-bold text-slate-900 group/link">
                  Read More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform text-primary" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
