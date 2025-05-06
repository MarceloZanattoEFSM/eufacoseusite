
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-4">
            Seu site pronto em até <span className="text-eufaco-blue">2 dias</span>.
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-6">
            Bonito, barato e sem enrolação.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            A gente faz tudo pra você. Domínio, e-mail, hospedagem inclusos.<br />
            Você só paga se gostar do resultado.
          </p>
          <a href="#briefing" className="btn-primary text-lg py-4 px-10">
            Quero meu site agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
