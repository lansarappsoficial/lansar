
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-white text-gray-800 relative overflow-hidden">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 bg-lansar/10 px-6 py-2 rounded-full border border-lansar/20 shadow-sm">
            <span className="text-lansar flex items-center text-sm md:text-base font-medium">
              <Zap className="h-5 w-5 mr-2" /> Potencialize suas vendas com IA
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800">
            Venda mais com <span className="text-lansar">menos esforço</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-10">
            A IA que automatiza sua operação comercial <span className="text-lansar font-semibold">de ponta a ponta</span>
          </h2>
          
          <Button className="bg-lansar hover:bg-lansar-dark text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition-all duration-300 shadow-md text-lg">
            <span className="mr-2">👉</span> Solicite seu Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-16 max-w-7xl mx-auto px-4 relative z-10">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
            alt="Plataforma Lansar AI" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
