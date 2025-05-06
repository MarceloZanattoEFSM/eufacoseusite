
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Um site simples e direto, exatamente como eu precisava. E ainda saiu rápido!",
      author: "Lucas S.",
      icon: "🗣️"
    },
    {
      quote: "Eu não entendo nada de tecnologia. Só preenchi o briefing e pronto. Em dois dias estava com meu site no ar!",
      author: "Ana M.",
      icon: "🗣️"
    },
    {
      quote: "R$99 por mês? Vale cada centavo. Meu negócio ficou mais profissional da noite pro dia.",
      author: "Rafael C.",
      icon: "🗣️"
    }
  ];

  return (
    <section id="testimonials" className="section bg-eufaco-gray">
      <div className="max-w-4xl mx-auto">
        <h2 className="heading-lg text-center mb-10">
          Você está em boas mãos.
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col"
            >
              <span className="text-3xl mb-4">{testimonial.icon}</span>
              <p className="text-gray-700 mb-4 flex-grow">"{testimonial.quote}"</p>
              <p className="font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
