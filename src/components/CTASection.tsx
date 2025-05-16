
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="flex justify-center mb-6">
              <Cpu className="h-12 w-12 text-lansar" />
            </div>
            
            <h2 className="section-title text-center text-gray-800">
              Quer entender como aplicar IA no seu <span className="text-lansar font-bold">processo comercial</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Solicite agora seu Diagnóstico Gratuito e receba um plano personalizado com oportunidades 
              reais de automação para o seu negócio.
            </p>
            <div className="text-center">
              <Button className="bg-lansar hover:bg-lansar-dark text-white font-medium py-3 px-6 rounded-lg inline-flex items-center transition-all duration-300 shadow-md text-lg">
                <span className="mr-2">👉</span> Solicitar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
