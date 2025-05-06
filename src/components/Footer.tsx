
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-600">
        © {currentYear} – eufacoseu.site | Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
