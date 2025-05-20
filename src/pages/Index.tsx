
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ProblemsSection from '@/components/ProblemsSection';
import AgentsSection from '@/components/AgentsSection';
import DiagnosisSection from '@/components/DiagnosisSection';
import BeneficiariesSection from '@/components/BeneficiariesSection';
import ClientsSection from '@/components/ClientsSection';
import WhyUsSection from '@/components/WhyUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Função para aplicar animações de entrada com base na visibilidade
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    // Seleciona todas as seções para aplicar o efeito de visualização
    document.querySelectorAll('section').forEach((section) => {
      if (!section.classList.contains('animate-fade-in')) {
        section.style.opacity = '0';
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

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
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
