
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-gray-900 via-blue-900/60 to-gray-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI5MmUiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 bg-lansar/20 px-6 py-2 rounded-full border border-lansar/40 backdrop-blur-sm shadow-lg shadow-blue-500/20">
            <span className="text-lansar-light flex items-center text-sm md:text-base font-medium">
              <Zap className="h-5 w-5 mr-2 animate-pulse" /> Potencialize suas vendas com IA
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-lansar-light via-white to-blue-400 drop-shadow-lg">
            Venda mais com <span className="gradient-text text-lansar">menos esforço</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-10 animate-fade-in" style={{animationDelay: "0.2s"}}>
            A IA que automatiza sua operação comercial <span className="text-lansar-light font-semibold">de ponta a ponta</span>
          </h2>
          
          <Button className="cta-button text-lg animate-fade-in hover:translate-y-[-2px] transition-all duration-300 shadow-xl shadow-lansar/20" style={{animationDelay: "0.8s"}}>
            <span className="mr-2">👉</span> Solicite seu Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-16 max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 md:p-10 rounded-2xl border border-blue-500/30 shadow-2xl backdrop-blur-md">
          <div className="bg-black/50 backdrop-blur-md rounded-xl shadow-inner p-6 md:p-10 border border-blue-500/20">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
              alt="Plataforma Lansar AI" 
              className="w-full h-auto rounded-lg shadow-2xl border border-blue-300/30 hover:shadow-blue-300/20 transition-all duration-500"
            />
            
            {/* Tech decoration */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-gradient-to-r from-lansar to-blue-500 filter blur-xl opacity-50"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-lansar filter blur-xl opacity-40"></div>
          </div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-lansar/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      
      {/* Circuit board lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-1/2 right-0 w-px h-40 bg-gradient-to-b from-transparent via-lansar/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-blue-300/30 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
