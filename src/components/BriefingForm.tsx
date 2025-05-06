
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const BriefingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio do formulário
    setTimeout(() => {
      toast({
        title: "Briefing enviado com sucesso!",
        description: "Logo entraremos em contato com você.",
      });
      setIsSubmitting(false);
      
      // Limpar os campos do formulário (opcional)
      const form = e.target as HTMLFormElement;
      form.reset();
      
      // Scroll para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <section id="briefing" className="section">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-2">Pronto pra ter seu site?</h2>
          <p className="text-xl text-gray-600">Preencha o briefing abaixo e a gente começa hoje mesmo.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <div className="space-y-6">
            {/* Campo: Nome da Empresa/Pessoa */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome da Empresa/Pessoa *
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                required
              />
            </div>
            
            {/* Campo: Breve descrição */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Breve descrição do que se trata *
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                required
              />
            </div>
            
            {/* Campo: Depoimentos */}
            <div>
              <label htmlFor="testimonials" className="block text-sm font-medium mb-1">
                Depoimentos (opcional)
              </label>
              <textarea
                id="testimonials"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
              />
            </div>
            
            {/* Campo: Serviços/Produtos */}
            <div>
              <label htmlFor="services" className="block text-sm font-medium mb-1">
                Serviços/Produtos *
              </label>
              <textarea
                id="services"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                required
              />
            </div>
            
            {/* Campo: Perguntas Frequentes */}
            <div>
              <label htmlFor="faq" className="block text-sm font-medium mb-1">
                Perguntas Frequentes
              </label>
              <textarea
                id="faq"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
              />
            </div>
            
            {/* Campo: Benefícios */}
            <div>
              <label htmlFor="benefits" className="block text-sm font-medium mb-1">
                Benefícios
              </label>
              <textarea
                id="benefits"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
              />
            </div>
            
            {/* Campo: Número WhatsApp */}
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium mb-1">
                Número WhatsApp *
              </label>
              <input
                id="whatsapp"
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                required
              />
            </div>
            
            {/* Campo: E-mail */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                E-mail de contato *
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                required
              />
            </div>
            
            {/* Campo: CNPJ */}
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium mb-1">
                CNPJ (opcional)
              </label>
              <input
                id="cnpj"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
              />
            </div>
            
            {/* Campo: Upload de logotipo */}
            <div>
              <label htmlFor="logo" className="block text-sm font-medium mb-1">
                Upload do logotipo
              </label>
              <input
                id="logo"
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
              />
            </div>
            
            {/* Campo: Upload de outras fotos */}
            <div>
              <label htmlFor="photos" className="block text-sm font-medium mb-1">
                Upload de outras fotos
              </label>
              <input
                id="photos"
                type="file"
                multiple
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
              />
            </div>
            
            {/* Campo: Demais observações */}
            <div>
              <label htmlFor="observations" className="block text-sm font-medium mb-1">
                Demais observações
              </label>
              <textarea
                id="observations"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
              />
            </div>
            
            {/* Botão de envio */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-4"
              >
                {isSubmitting ? "Enviando..." : "Enviar briefing"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BriefingForm;
