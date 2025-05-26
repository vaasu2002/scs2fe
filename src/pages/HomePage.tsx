'use client';
import { motion } from 'framer-motion';
import React from 'react';
import {
    HeroSection, FeaturesSection, HowItWorksSection, 
    PricingSection, TestimonialsSection, FaqSection, 
    CtaSection, Footer 
} from '@/components/sections/HomeSection';
import {Navbar} from '@/components/Navbar';


export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      
      {/* Main content sections */}
      <main>
        <HeroSection />
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        <section id="pricing">
          <PricingSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="faq">
          <FaqSection />
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
}
