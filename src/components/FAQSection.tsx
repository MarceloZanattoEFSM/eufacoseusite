
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span className={cn("transform transition-transform", isOpen ? "rotate-180" : "")}>
          ▼
        </span>
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300", 
          isOpen ? "max-h-40 pt-4" : "max-h-0"
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "Preciso pagar agora?",
      answer: "Não. Você só paga se gostar do site que entregarmos."
    },
    {
      question: "O que está incluso?",
      answer: "Domínio, e-mail profissional, hospedagem e design do site."
    },
    {
      question: "Posso pedir mudanças?",
      answer: "Sim. Você tem até 7 dias após a entrega pra sugerir ajustes. Após esse tempo, será cobrado R$50,00 por mudança."
    },
    {
      question: "E se eu quiser cancelar depois?",
      answer: "Só parar de pagar. Sem multa ou contrato. Mas é importante ressaltar que o site ficará fora e não entregamos nenhum código fonte."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container-narrow">
        <h2 className="heading-lg text-center mb-10">
          Dúvidas comuns
        </h2>
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
