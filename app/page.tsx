'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EmergencyBanner from '@/components/EmergencyBanner';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceHighlight from '@/components/ServiceHighlight';
import InstagramReels from '@/components/InstagramReels';
import PricingSection from '@/components/PricingSection';
import ReviewsSection from '@/components/ReviewsSection';
import AboutPreview from '@/components/AboutPreview';
import TeamSection from '@/components/TeamSection';
import BlogSection from '@/components/BlogSection';
import Newsletter from '@/components/Newsletter';
import FinalCTA from '@/components/FinalCTA';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <EmergencyBanner />
      <TrustSection />
      <ServicesSection />
      <ServiceHighlight />
      <InstagramReels />
      <PricingSection />
      <ReviewsSection />
      <AboutPreview />
      <TeamSection />
      <BlogSection />
      <Newsletter />
      <FinalCTA />
      <MapSection />
      <Footer />
      <MobileBottomNav />
    </main>
  );
}
