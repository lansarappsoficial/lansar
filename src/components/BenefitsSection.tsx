
import React from "react";

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in">
            Você já imaginou ter um time de vendas que trabalha 24/7, sem esquecer um follow-up, 
            sem perder um lead e sem pedir aumento? Com a Lansar Apps, isso é realidade.
          </p>
          <p className="text-lg md:text-xl text-gray-700 animate-fade-in" style={{animationDelay: "0.2s"}}>
            Nossa IA cuida de todo o seu processo comercial — da prospecção à recompra — 
            para que você e seu time foquem no que realmente importa: fechar negócios.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
