
document.addEventListener('DOMContentLoaded', function() {
  // Configuração inicial
  setupNavbar();
  setupFAQs();
  setupCurrentYear();
  setupBenefits();
  setupSteps();
  setupTestimonials();
  setupWhatsAppButton();
  setupForm();
});

// Configuração da navbar
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });
}

// Configuração das FAQs
function setupFAQs() {
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
  
  const faqContainer = document.getElementById('faq-container');
  
  faqs.forEach(faq => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    
    faqItem.innerHTML = `
      <button class="faq-question">
        <h3>${faq.question}</h3>
        <span class="faq-toggle">▼</span>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    `;
    
    faqContainer.appendChild(faqItem);
    
    const question = faqItem.querySelector('.faq-question');
    const answer = faqItem.querySelector('.faq-answer');
    const toggle = faqItem.querySelector('.faq-toggle');
    
    question.addEventListener('click', function() {
      answer.classList.toggle('open');
      toggle.style.transform = answer.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0)';
    });
  });
}

// Configuração do ano atual no footer
function setupCurrentYear() {
  const yearElement = document.getElementById('current-year');
  yearElement.textContent = new Date().getFullYear();
}

// Configuração dos benefícios
function setupBenefits() {
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
      text: "Só R$99,00 por mês com tudo incluso"
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
  
  const benefitsList = document.getElementById('benefits-list');
  
  benefits.forEach(benefit => {
    const benefitItem = document.createElement('div');
    benefitItem.className = 'benefit-item';
    
    benefitItem.innerHTML = `
      <span class="benefit-icon">${benefit.icon}</span>
      <p class="benefit-text">${benefit.text}</p>
    `;
    
    benefitsList.appendChild(benefitItem);
  });
}

// Configuração dos passos
function setupSteps() {
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
      text: "Gostou? Aí sim você paga os R$99,00"
    },
    {
      number: 5,
      text: "Não gostou? Não paga nada. Simples assim."
    }
  ];
  
  const stepsContainer = document.getElementById('steps-container');
  
  steps.forEach(step => {
    const stepItem = document.createElement('div');
    stepItem.className = 'step-item';
    
    stepItem.innerHTML = `
      <div class="step-number">${step.number}</div>
      <p class="step-text">${step.text}</p>
    `;
    
    stepsContainer.appendChild(stepItem);
  });
}

// Configuração dos testemunhos
function setupTestimonials() {
  const testimonials = [
    {
      quote: "Um site simples e direto, exatamente como eu precisava. E ainda saiu rápido!",
      author: "Lucas S."
    },
    {
      quote: "Eu não entendo nada de tecnologia. Só preenchi o briefing e pronto. Em dois dias estava com meu site no ar!",
      author: "Ana M."
    },
    {
      quote: "R$99,00 por mês? Vale cada centavo. Meu negócio ficou mais profissional da noite pro dia.",
      author: "Rafael C."
    }
  ];
  
  const testimonialsContainer = document.getElementById('testimonials-container');
  
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'testimonial-card';
    
    testimonialCard.innerHTML = `
      <div class="star-rating">
        ${Array(5).fill('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>').join('')}
      </div>
      <p class="testimonial-quote">"${testimonial.quote}"</p>
      <p class="testimonial-author">— ${testimonial.author}</p>
    `;
    
    testimonialsContainer.appendChild(testimonialCard);
  });
}

// Configuração do botão do WhatsApp
function setupWhatsAppButton() {
  const whatsappButton = document.getElementById('whatsapp-button');
  let formStarted = false;
  
  // Verificar se o usuário interagiu com o formulário
  const formFields = document.querySelectorAll('#briefing-form input, #briefing-form textarea, #briefing-form select');
  
  formFields.forEach(field => {
    field.addEventListener('focus', function() {
      formStarted = true;
    });
  });
  
  // Iniciar pulsando após 2 minutos se não interagiu com o formulário
  setTimeout(() => {
    if (!formStarted) {
      whatsappButton.classList.add('pulse-animation');
    }
  }, 120000); // 2 minutos
}

// Configuração do formulário
function setupForm() {
  const form = document.getElementById('briefing-form');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica para processar o formulário
    // Por exemplo, enviar os dados para um serviço de e-mail
    
    alert('Obrigado! Recebemos seu briefing e entraremos em contato em breve.');
    form.reset();
  });
}
