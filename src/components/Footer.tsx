
import React from "react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/f63297a0-e13d-47d8-bcba-f96660ee0b43.png" 
                alt="Lansar Apps" 
                className="h-[54px] w-[186px] object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Automatizando processos comerciais com IA para que você se concentre em fechar negócios.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#problems" className="text-gray-300 hover:text-white transition-colors">Problemas</a></li>
              <li><a href="#agents" className="text-gray-300 hover:text-white transition-colors">Agentes IA</a></li>
              <li><a href="#diagnosis" className="text-gray-300 hover:text-white transition-colors">Diagnóstico</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-white transition-colors">Por que nós</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">contato@testeapps.com</li>
              <li className="text-gray-300">+55 (11) 9999-9999</li>
            </ul>
            <div className="mt-6">
              <Button className="cta-button">Solicitar Diagnóstico</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            {year} Lansar Apps. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
