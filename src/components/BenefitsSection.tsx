
import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "✅",
      text: "A gente faz tudo pra você (não precisa se preocupar com nada)"
    },
    {
      icon: "✅",
      text: "Site entregue em até 2 dias úteis"
    },
    {
      icon: "✅",
      text: "Só R$99 por mês com tudo incluso"
    },
    {
      icon: "✅", 
      text: "E o melhor: você só paga se gostar"
    },
    {
      icon: "✅",
      text: "Atendimento rápido e direto pelo WhatsApp"
    }
  ];

  return (
    <section id="benefits" className="section bg-eufaco-gray">
      <div className="container-narrow text-center">
        <h2 className="heading-lg mb-10">
          Por que tanta gente tá escolhendo o <span className="text-eufaco-blue">eufacoseu.site</span>?
        </h2>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center bg-white p-5 rounded-lg shadow-sm text-left">
              <span className="text-3xl mr-4">{benefit.icon}</span>
              <p className="text-lg">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
