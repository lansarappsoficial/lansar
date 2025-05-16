import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const HeroSection: React.FC = () => {
  return <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Venda mais com <span className="gradient-text">menos esforço</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 animate-fade-in" style={{
          animationDelay: "0.2s"
        }}>
            A IA que automatiza sua operação comercial de ponta a ponta
          </h2>
          <Button className="cta-button text-lg animate-fade-in" style={{
          animationDelay: "0.8s"
        }}>
            <span className="mr-2">👉</span> Solicite seu Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="mt-20 max-w-6xl mx-auto px-4">
        
      </div>
    </section>;
};
export default HeroSection;