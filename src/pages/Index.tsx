
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProblemsSection from '@/components/ProblemsSection';
import AgentsSection from '@/components/AgentsSection';
import DiagnosisSection from '@/components/DiagnosisSection';
import BeneficiariesSection from '@/components/BeneficiariesSection';
import ClientsSection from '@/components/ClientsSection';
import WhyUsSection from '@/components/WhyUsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ProblemsSection />
      <AgentsSection />
      <BeneficiariesSection />
      <DiagnosisSection />
      <ClientsSection />
      <WhyUsSection />
      <CTASection />
      <FAQSection />
      <Footer />
      
    </div>
  );
};

export default Index;
