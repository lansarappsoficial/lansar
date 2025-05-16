
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI5MmUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 bg-lansar bg-opacity-20 px-4 py-1 rounded-full border border-lansar/30">
            <span className="text-lansar-light flex items-center text-sm font-medium">
              <Zap className="h-4 w-4 mr-2" /> Potencialize suas vendas com IA
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-lansar-light via-white to-lansar">
            Venda mais com <span className="gradient-text">menos esforço</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            A IA que automatiza sua operação comercial de ponta a ponta
          </h2>
          
          <Button className="cta-button text-lg animate-fade-in" style={{animationDelay: "0.8s"}}>
            <span className="mr-2">👉</span> Solicite seu Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-16 max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-purple-600/10 to-blue-600/10 p-6 md:p-10 rounded-2xl border border-blue-500/20 shadow-lg backdrop-blur-sm">
          <div className="bg-black/40 backdrop-blur-sm rounded-xl shadow-inner p-6 md:p-10 border border-blue-500/10">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
              alt="Plataforma Lansar AI" 
              className="w-full h-auto rounded-lg shadow-xl border border-blue-300/10"
            />
          </div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
