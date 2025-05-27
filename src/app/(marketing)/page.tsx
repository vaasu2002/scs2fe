'use client';
import React from 'react';
import {
  HeroSection, FeaturesSection, HowItWorksSection, 
  PricingSection, TestimonialsSection, FaqSection, 
  CtaSection 
} from '@/components/marketing/hero';
import {Navbar} from '@/components/marketing/navbar/Navbar'


export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar/>
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
    </div>
  );
}