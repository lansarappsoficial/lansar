
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-lansar">Teste Apps</span>
            </div>
            <p className="text-gray-600 mb-8 max-w-md border-l-2 border-lansar/50 pl-4">
              Automatizando processos comerciais com IA para que você se concentre em fechar negócios.
            </p>
            
            <div className="h-px w-32 bg-lansar/50 mb-4"></div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-lansar">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#problems" className="text-gray-600 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Problemas</a></li>
              <li><a href="#agents" className="text-gray-600 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Agentes IA</a></li>
              <li><a href="#diagnosis" className="text-gray-600 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Diagnóstico</a></li>
              <li><a href="#why-us" className="text-gray-600 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Por que nós</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> FAQ</a></li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold mb-4 text-lansar">Contato</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-600 flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> contato@testeapps.com</li>
              <li className="text-gray-600 flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> +55 (11) 9999-9999</li>
            </ul>
            <div>
              <Button className="bg-lansar hover:bg-lansar-dark text-white font-medium py-3 px-4 rounded-lg inline-flex items-center transition-all duration-300 w-full">
                Solicitar Diagnóstico <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            © {year} Teste Apps. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
