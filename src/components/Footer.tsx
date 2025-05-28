import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`bg-gray-900 text-white py-16 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className={`transform transition-transform duration-700 ${isVisible ? 'translate-x-0' : '-translate-x-10'}`}>
              <div className="flex flex-col items-start">
                <img 
                  alt="Lansar Apps" 
                  src="/lovable-uploads/c98d9550-4f29-4c96-ae4c-f2114af17894.png" 
                  className="h-[80px] max-w-[200px] w-full object-contain -ml-8 md:-ml-16" 
                />
                <p className={`text-gray-300 mt-2 max-w-md transform transition-transform duration-700 delay-100 ${isVisible ? 'translate-x-0' : '-translate-x-10'}`}>
                  Automatizando processos comerciais com IA para que você se concentre em fechar negócios.
                </p>
              </div>
            </div>
          </div>

          <div className={`transform transition-transform duration-700 delay-200 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#problems" className="text-gray-300 hover:text-white transition-colors">Problemas</a></li>
              <li><a href="#agents" className="text-gray-300 hover:text-white transition-colors">Agentes IA</a></li>
              <li><a href="#diagnosis" className="text-gray-300 hover:text-white transition-colors">Diagnóstico</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Por que nós</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className={`transform transition-transform duration-700 delay-300 ${isVisible ? 'translate-y-0' : 'translate-y-10'}`}>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">+55 48 988731733</li>
            </ul>
            <div className="mt-6">
              <a
                href="https://calendly.com/lansarapps/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="cta-button">
                  Solicitar Diagnóstico
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-12 pt-6 border-t border-gray-800 text-center transform transition-opacity duration-700 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400">
            {year} Lansar Apps. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
