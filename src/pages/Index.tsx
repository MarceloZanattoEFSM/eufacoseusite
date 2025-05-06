
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import AudienceSection from '@/components/AudienceSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BriefingForm from '@/components/BriefingForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Atualizar título da página
    document.title = "eufacoseu.site | Seu site pronto em até 2 dias";
  }, []);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <BenefitsSection />
        <AudienceSection />
        <HowItWorksSection />
        <FAQSection />
        <TestimonialsSection />
        <BriefingForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
