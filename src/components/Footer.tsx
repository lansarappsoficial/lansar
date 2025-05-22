
import React from "react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <img alt="Lansar Apps" src="/lovable-uploads/c98d9550-4f29-4c96-ae4c-f2114af17894.png" className="h-[80px] w-[200px] object-contain ml-0" />
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
              <li className="text-gray-300">+55 48 988731733</li>
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
    </footer>;
};
export default Footer;
