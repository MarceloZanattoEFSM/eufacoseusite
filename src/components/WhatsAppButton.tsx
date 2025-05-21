
import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  const [isPulsing, setIsPulsing] = useState(false);
  const [formStarted, setFormStarted] = useState(false);

  // Check if user has interacted with the form
  useEffect(() => {
    const formFields = document.querySelectorAll('#briefing input, #briefing textarea');
    const handleFormInteraction = () => {
      setFormStarted(true);
      // Stop pulsing immediately when the form is interacted with
      setIsPulsing(false);
    };

    formFields.forEach(field => {
      field.addEventListener('focus', handleFormInteraction);
    });

    return () => {
      formFields.forEach(field => {
        field.removeEventListener('focus', handleFormInteraction);
      });
    };
  }, []);

  // Start pulsing after 2 minutes if form not started
  useEffect(() => {
    if (!formStarted) {
      const timer = setTimeout(() => {
        setIsPulsing(true);
      }, 120000); // 2 minutes
      
      return () => clearTimeout(timer);
    }
  }, [formStarted]);

  return (
    <a
      href="https://wa.me/5511999907739?text=Ol%C3%A1%2C%20eu%20vim%20do%20Eu%20Fa%C3%A7o%20Seu%20Site!%20E%20gostaria%20de%20falar%20com%20algu%C3%A9m."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full z-50 shadow-lg hover:bg-green-600 transition-all duration-300",
        isPulsing && "animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
      )}
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;
