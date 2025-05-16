
import React from "react";
import { Check } from "lucide-react";

const WhyUsSection: React.FC = () => {
  const reasons = [
    "Agentes de IA configuráveis de acordo com o seu processo",
    "Integração com os principais CRMs e ferramentas comerciais",
    "Linguagem natural e adaptação ao seu tom de voz",
    "Suporte estratégico para ativação rápida",
    "Escalabilidade sem custo fixo extra"
  ];

  return (
    <section id="why-us" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">
            Por que escolher a <span className="gradient-text">Lansar Apps</span>?
          </h2>

          <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {reasons.map((reason, index) => (
                <div 
                  key={index}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="flex-shrink-0 bg-lansar/10 p-2 rounded-full mr-4">
                    <Check className="h-5 w-5 text-lansar" />
                  </div>
                  <p className="text-gray-700 font-medium">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
