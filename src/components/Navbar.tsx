import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={cn("fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 transition-all duration-300", scrolled ? "bg-white shadow-md" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img alt="eufacoseu.site" className="h-10 md:h-12" src="/lovable-uploads/ec9bc120-0c62-45b1-9a28-b6d89069959d.png" />
        </a>
        <a href="#briefing" className="btn-primary text-sm md:text-base">
          Quero meu site agora
        </a>
      </div>
    </header>;
};
export default Navbar;