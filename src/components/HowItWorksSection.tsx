
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      text: "Você preenche o briefing abaixo"
    },
    {
      number: 2,
      text: "Nossa equipe cria seu site completo"
    },
    {
      number: 3,
      text: "Te enviamos em até 2 dias úteis"
    },
    {
      number: 4,
      text: "Gostou? Aí sim você paga os R$99"
    },
    {
      number: 5,
      text: "Não gostou? Não paga nada. Simples assim."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-eufaco-gray">
      <div className="container-narrow text-center">
        <h2 className="heading-lg mb-12">
          Veja como é simples:
        </h2>
        <div className="space-y-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-eufaco-blue text-white flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-6 mx-auto md:mx-0">
                {step.number}
              </div>
              <p className="text-lg text-center md:text-left">{step.text}</p>
            </div>
          ))}
        </div>
        <a href="#briefing" className="btn-primary text-lg">
          Quero meu site agora
        </a>
      </div>
    </section>
  );
};

export default HowItWorksSection;
