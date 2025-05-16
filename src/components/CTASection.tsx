
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-lansar/5 to-lansar-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">
            Quer entender como aplicar IA no seu <span className="gradient-text">processo comercial</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Solicite agora seu Diagnóstico Gratuito e receba um plano personalizado com oportunidades 
            reais de automação.
          </p>
          <Button className="cta-button text-lg">
            <span className="mr-2">👉</span> Solicitar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
