
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
import { Facebook, Instagram, Linkedin, Twitter, Share } from 'lucide-react';

const BriefingForm = () => {
  const { toast } = useToast();
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
    termsAccepted: false,
    logo: '',
    photos: [] as string[]
  });
  
  // For file uploads
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [photosFiles, setPhotosFiles] = useState<FileList | null>(null);
  const [photoFileError, setPhotoFileError] = useState('');
  const [logoFileError, setLogoFileError] = useState('');
  
  // Load form data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('briefingFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error("Error parsing saved form data:", error);
      }
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
  
  const validateFileSize = (file: File, maxSizeKB: number = 500): boolean => {
    const fileSizeKB = file.size / 1024;
    return fileSizeKB <= maxSizeKB;
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, files } = e.target;
    
    if (id === 'logo' && files && files.length > 0) {
      const file = files[0];
      if (!validateFileSize(file)) {
        setLogoFileError('O arquivo deve ter no máximo 500KB');
        setLogoFile(null);
        e.target.value = '';
      } else {
        setLogoFileError('');
        setLogoFile(file);
      }
    } else if (id === 'photos' && files && files.length > 0) {
      // Check if user selected more than 2 files
      if (files.length > 2) {
        setPhotoFileError('Selecione no máximo 2 fotos');
        setPhotosFiles(null);
        e.target.value = '';
        return;
      }
      
      // Check file sizes
      let oversizedFiles = false;
      for (let i = 0; i < files.length; i++) {
        if (!validateFileSize(files[i])) {
          oversizedFiles = true;
          break;
        }
      }
      
      if (oversizedFiles) {
        setPhotoFileError('Cada arquivo deve ter no máximo 500KB');
        setPhotosFiles(null);
        e.target.value = '';
      } else {
        setPhotoFileError('');
        setPhotosFiles(files);
      }
    }
  };

  // Convert a file to base64
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };
  
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      toast({
        title: "Termo de aceite obrigatório",
        description: "Por favor, aceite os termos para continuar.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Create a data object to send
      const dataToSend = { ...formData };
      
      // Convert logo to base64 if exists
      if (logoFile) {
        try {
          const logoBase64 = await fileToBase64(logoFile);
          dataToSend.logo = logoBase64;
        } catch (error) {
          console.error("Error converting logo to base64:", error);
        }
      }
      
      // Convert photos to base64 if exists
      if (photosFiles) {
        const photosBase64: string[] = [];
        for (let i = 0; i < photosFiles.length; i++) {
          try {
            const photoBase64 = await fileToBase64(photosFiles[i]);
            photosBase64.push(photoBase64);
          } catch (error) {
            console.error(`Error converting photo ${i} to base64:`, error);
          }
        }
        if (photosBase64.length > 0) {
          dataToSend.photos = photosBase64;
        }
      }
      
      // Send the data to the webhook
      const response = await fetch('https://hook.us1.make.com/fyrsrjek2fwshgqk56xyf49540hga4w1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      
      if (response.ok) {
        // Clear localStorage and update state to show success message
        localStorage.removeItem('briefingFormData');
        setFormSubmitted(true);
      } else {
        toast({
          title: "Erro ao enviar formulário",
          description: "Houve um problema ao enviar o formulário. Por favor, tente novamente.",
          variant: "destructive"
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Houve um problema ao enviar o formulário. Por favor, tente novamente.",
        variant: "destructive"
      });
    }
  };
  
  // Share the page on various social media platforms
  const shareUrl = window.location.href;
  const shareTitle = "eufacoseu.site | Seu site pronto em até 2 dias";
  
  const handleShare = (platform: string) => {
    let shareLink = '';
    
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} ${shareUrl}`)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: shareTitle,
            url: shareUrl
          }).catch(err => console.error('Error sharing:', err));
          return;
        }
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'noopener,noreferrer');
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
        
        <form 
          id="briefingForm"
          onSubmit={handleFormSubmit}
          className="bg-white shadow-md rounded-lg p-6 md:p-8"
        >
          <div className="space-y-6">
            {/* Campo: Nome da Empresa/Pessoa */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nome da Empresa/Pessoa *
              </label>
              <input
                id="name"
                name="name"
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
                name="description"
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
                name="colors"
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
                name="testimonials"
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
                name="services"
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
                name="socialMedia"
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
                name="faq"
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
                name="benefits"
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
                name="address"
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
                name="whatsapp"
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
                name="email"
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
                name="cnpj"
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
                name="logo"
                type="file"
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                onChange={handleFileChange}
              />
              {logoFileError && <p className="text-red-500 text-sm mt-1">{logoFileError}</p>}
              <p className="text-gray-500 text-xs mt-1">Tamanho máximo: 500KB</p>
            </div>
            
            {/* Campo: Upload de outras fotos */}
            <div>
              <label htmlFor="photos" className="block text-sm font-medium mb-1">
                Upload de outras fotos (máximo 2)
              </label>
              <input
                id="photos"
                name="photos"
                type="file"
                multiple
                accept="image/*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-eufaco-blue focus:border-eufaco-blue"
                onChange={handleFileChange}
              />
              {photoFileError && <p className="text-red-500 text-sm mt-1">{photoFileError}</p>}
              <p className="text-gray-500 text-xs mt-1">Tamanho máximo por foto: 500KB</p>
              <p className="text-gray-500 text-sm mt-2 italic">Obs.: Se quiser subir mais fotos, coloque nas observações que deseja isso, que nossa equipe entrará em contato para solicitar</p>
            </div>
            
            {/* Campo: Demais observações */}
            <div>
              <label htmlFor="observations" className="block text-sm font-medium mb-1">
                Demais observações
              </label>
              <textarea
                id="observations"
                name="observations"
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
                className="w-full btn-primary text-lg py-4"
              >
                Enviar briefing
              </button>
              
              {/* Mensagem após o formulário */}
              <p className="text-center text-gray-600 mt-6">
                Após o envio do formulário, você receberá as próximas instruções e o acompanhamento diretamente pelo WhatsApp.
              </p>
            </div>
          </div>
        </form>
        
        {/* Social Share Buttons */}
        <div className="my-12 text-center">
          <p className="text-gray-700 mb-4">Compartilhe nossa página com alguém!</p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => handleShare('facebook')} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Compartilhar no Facebook"
            >
              <Facebook className="text-[#1877F2]" />
            </button>
            <button 
              onClick={() => handleShare('twitter')} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Compartilhar no Twitter"
            >
              <Twitter className="text-[#1DA1F2]" />
            </button>
            <button 
              onClick={() => handleShare('linkedin')} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Compartilhar no LinkedIn"
            >
              <Linkedin className="text-[#0A66C2]" />
            </button>
            <button 
              onClick={() => handleShare('default')} 
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Compartilhar em outras redes"
            >
              <Share className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefingForm;
