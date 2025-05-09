
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const BriefingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    testimonials: '',
    services: '',
    faq: '',
    benefits: '',
    address: '',
    whatsapp: '',
    email: '',
    cnpj: '',
    observations: '',
    colors: '',
    socialMedia: '',
    theme: 'light',
    termsAccepted: false
  });
  
  // Form refs para os campos de upload
  const logoRef = React.useRef<HTMLInputElement>(null);
  const photosRef = React.useRef<HTMLInputElement>(null);
  
  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('briefingFormData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);
  
  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('briefingFormData', JSON.stringify(formData));
  }, [formData]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, theme: value });
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, termsAccepted: checked });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast({
        title: "Termo de aceite obrigatório",
        description: "Por favor, aceite os termos para continuar.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Criar um FormData para envio de arquivos
      const formDataToSend = new FormData();
      
      // Adicionar todos os campos do formulário ao FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value as string);
      });
      
      // Adicionar arquivos se existirem
      if (logoRef.current?.files && logoRef.current.files[0]) {
        formDataToSend.append('logo', logoRef.current.files[0]);
      }
      
      if (photosRef.current?.files && photosRef.current.files.length > 0) {
        Array.from(photosRef.current.files).forEach((file, index) => {
          formDataToSend.append(`photo_${index}`, file);
        });
      }
      
      // Send data to the webhook
      const response = await fetch('https://hook.us1.make.com/fyrsrjek2fwshgqk56xyf49540hga4w1', {
        method: 'POST',
        body: formDataToSend, // Enviando FormData em vez de JSON
      });
      
      if (response.ok) {
        // Clear localStorage after successful submission
        localStorage.removeItem('briefingFormData');
        
        // Show success toast
        toast({
          title: "Briefing enviado com sucesso!",
          description: "Logo entraremos em contato com você.",
        });
        
        // Show success message
        setFormSubmitted(true);
      } else {
        throw new Error('Falha ao enviar o formulário');
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Houve um problema ao enviar seu briefing. Seus dados foram salvos localmente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formSubmitted) {
    return (
      <section id="briefing" className="section">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-8 text-center">
            <h2 className="heading-lg mb-6">Obrigado pelo seu briefing!</h2>
            <p className="text-xl mb-4">Recebemos suas informações e entraremos em contato em breve através do WhatsApp.</p>
            <p className="text-gray-600">Nossa equipe já começou a trabalhar no seu site.</p>
            <div className="mt-8">
              <a href="#" className="btn-primary text-lg py-3 px-6" onClick={() => window.scrollTo(0, 0)}>
                Voltar ao topo
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="briefing" className="section">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-2">Pronto pra ter seu site?</h2>
          <p className="text-xl text-gray-600">Preencha o briefing abaixo e a gente começa hoje mesmo.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 md:p-8" encType="multipart/form-data">
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            
            {/* Campo: Cores e Identidade visual */}
            <div>
              <label htmlFor="colors" className="block text-sm font-medium mb-1">
                Cores e Identidade visual de preferência (opcional)
              </label>
              <textarea
                id="colors"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                value={formData.colors}
                onChange={handleChange}
              />
            </div>
            
            {/* Campo: Preferência de Tema */}
            <div>
              <label htmlFor="theme" className="block text-sm font-medium mb-1">
                Preferência de tema
              </label>
              <Select
                onValueChange={handleSelectChange}
                defaultValue={formData.theme}
              >
                <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue">
                  <SelectValue placeholder="Selecione um tema" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Tema Claro (Light Theme)</SelectItem>
                  <SelectItem value="dark">Tema Escuro (Dark Theme)</SelectItem>
                </SelectContent>
              </Select>
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
                value={formData.testimonials}
                onChange={handleChange}
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
                value={formData.services}
                onChange={handleChange}
              />
            </div>
            
            {/* Campo: Redes Sociais */}
            <div>
              <label htmlFor="socialMedia" className="block text-sm font-medium mb-1">
                Redes Sociais (opcional)
              </label>
              <textarea
                id="socialMedia"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                value={formData.socialMedia}
                onChange={handleChange}
                placeholder="Instagram: @suaconta, Facebook: /suapagina, etc."
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
                value={formData.faq}
                onChange={handleChange}
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
                value={formData.benefits}
                onChange={handleChange}
              />
            </div>
            
            {/* Campo: Endereço (Novo campo) */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                Endereço (opcional)
              </label>
              <textarea
                id="address"
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                value={formData.address}
                onChange={handleChange}
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
                value={formData.whatsapp}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.cnpj}
                onChange={handleChange}
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
                ref={logoRef}
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
                ref={photosRef}
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
                value={formData.observations}
                onChange={handleChange}
                placeholder="Caso deseje mais páginas além da landing page, inclua esta informação aqui"
              />
            </div>
            
            {/* Termo de Aceite */}
            <div className="flex items-start space-x-3 pt-2">
              <Checkbox 
                id="termsAccepted" 
                checked={formData.termsAccepted}
                onCheckedChange={handleCheckboxChange}
              />
              <label
                htmlFor="termsAccepted"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Concordo com os <Link to="/terms" className="text-eufaco-blue hover:underline" target="_blank">termos de aceite</Link> *
              </label>
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
              
              {/* Mensagem após o formulário */}
              <p className="text-center text-gray-600 mt-6">
                Após o envio do formulário, você receberá as próximas instruções e o acompanhamento diretamente pelo WhatsApp.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BriefingForm;
