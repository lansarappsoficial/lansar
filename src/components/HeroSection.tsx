
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Venda mais com <span className="gradient-text">menos esforço</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            A IA que automatiza sua operação comercial de ponta a ponta
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.4s"}}>
            Você já imaginou ter um time de vendas que trabalha 24/7, sem esquecer um follow-up, 
            sem perder um lead e sem pedir aumento? Com a Lansar Apps, isso é realidade.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-10 animate-fade-in" style={{animationDelay: "0.6s"}}>
            Nossa IA cuida de todo o seu processo comercial — da prospecção à recompra — 
            para que você e seu time foquem no que realmente importa: fechar negócios.
          </p>
          <Button className="cta-button text-lg animate-fade-in" style={{animationDelay: "0.8s"}}>
            <span className="mr-2">👉</span> Solicite seu Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="mt-20 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-600/5 to-blue-600/5 p-6 md:p-10 rounded-2xl border border-blue-100/50 shadow-lg">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-inner p-6 md:p-10">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
              alt="Plataforma Lansar AI" 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
