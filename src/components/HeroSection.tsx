import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

declare global {
  interface Window {
    Calendly: any;
  }
}

const HeroSection: React.FC = () => {

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI5MmUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 bg-lansar bg-opacity-20 px-4 py-1 rounded-full border border-lansar/30 animate-fade-in">
            <span className="text-lansar-light flex items-center text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" /> Automação e IA para Empresas
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-lansar-light via-white to-lansar">
            VENDA MAIS COM <span className="gradient-text">MENOS ESFORÇO</span>
          </h1>

          <h2
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Automatizamos sua operação comercial de ponta a ponta com inteligência artificial
          </h2>

          <p
            className="text-lg text-gray-300 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Da prospecção à recompra, simplifique processos e aumente resultados com a Lansar
          </p>

          <div className="w-full flex flex-col items-center">
            <Button
              className="cta-button text-sm sm:text-base md:text-lg w-full sm:w-auto whitespace-nowrap px-6 py-4 animate-fade-in hover:scale-105 transition-transform text-center justify-center"
              style={{ animationDelay: "0.6s" }}
              onClick={() => window.Calendly?.initPopupWidget({url: 'https://calendly.com/alexandrelansar/30min'})}
            >
              <span className="mr-2">👉</span> AGENDE SEU DIAGNÓSTICO GRATUITO <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p 
              className="text-xs text-gray-400 mt-2 animate-fade-in"
              style={{ animationDelay: "0.8s" }}
            >
              Ao clicar, você será direcionado para escolher uma data e horário para reunião
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-6xl mx-auto px-4 relative z-10"></div>

      {/* Tech decoration elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>

    </section>
  );
};

export default HeroSection;
