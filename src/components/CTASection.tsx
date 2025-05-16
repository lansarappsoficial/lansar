
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      {/* Hexagonal grid decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwTDIwIDEwTDAgMjBWMFoiIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-2xl border border-lansar/30 shadow-2xl">
            <div className="flex justify-center mb-6">
              <Cpu className="h-12 w-12 text-lansar animate-pulse" />
            </div>
            
            <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
              Quer entender como aplicar IA no seu <span className="gradient-text">processo comercial</span>?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Solicite agora seu Diagnóstico Gratuito e receba um plano personalizado com oportunidades 
              reais de automação.
            </p>
            <div className="text-center">
              <Button className="cta-button text-lg hover:shadow-xl hover:shadow-lansar/20 transform hover:translate-y-[-2px] transition-all duration-300">
                <span className="mr-2">👉</span> Solicitar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Circuit lines */}
      <div className="absolute top-0 right-1/3 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-transparent via-lansar/30 to-transparent"></div>
    </section>
  );
};

export default CTASection;
