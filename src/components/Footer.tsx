
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAtMzBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCA2MGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lansar to-blue-400">Teste Apps</span>
            </div>
            <p className="text-gray-300 mb-8 max-w-md border-l-2 border-lansar/50 pl-4">
              Automatizando processos comerciais com IA para que você se concentre em fechar negócios.
            </p>
            
            {/* Tech decoration */}
            <div className="h-px w-32 bg-gradient-to-r from-lansar/50 to-transparent mb-4"></div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md p-6 rounded-xl border border-blue-500/20">
            <h3 className="text-lg font-semibold mb-4 text-lansar-light">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#problems" className="text-gray-300 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Problemas</a></li>
              <li><a href="#agents" className="text-gray-300 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Agentes IA</a></li>
              <li><a href="#diagnosis" className="text-gray-300 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Diagnóstico</a></li>
              <li><a href="#why-us" className="text-gray-300 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> Por que nós</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-lansar transition-colors flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> FAQ</a></li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-md p-6 rounded-xl border border-blue-500/20">
            <h3 className="text-lg font-semibold mb-4 text-lansar-light">Contato</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-gray-300 flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> contato@testeapps.com</li>
              <li className="text-gray-300 flex items-center"><span className="h-px w-3 bg-lansar/50 mr-2"></span> +55 (11) 9999-9999</li>
            </ul>
            <div>
              <Button className="cta-button w-full hover:shadow-lg hover:shadow-lansar/20 transform hover:translate-y-[-2px] transition-all duration-300">
                Solicitar Diagnóstico <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {year} Teste Apps. Todos os direitos reservados.
          </p>
          
          {/* Circuit board lines */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lansar/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </footer>
  );
};

export default Footer;
