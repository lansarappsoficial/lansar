
import React from "react";
import { Check, Cpu, Layers, Server } from "lucide-react";

const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      icon: <Cpu className="h-5 w-5 text-lansar" />,
      text: "Agentes de IA configuráveis de acordo com o seu processo"
    },
    {
      icon: <Layers className="h-5 w-5 text-lansar" />,
      text: "Integração com os principais CRMs e ferramentas comerciais"
    },
    {
      icon: <Server className="h-5 w-5 text-lansar" />,
      text: "Linguagem natural e adaptação ao seu tom de voz"
    },
    {
      icon: <Cpu className="h-5 w-5 text-lansar" />,
      text: "Suporte estratégico para ativação rápida"
    },
    {
      icon: <Server className="h-5 w-5 text-lansar" />,
      text: "Escalabilidade sem custo fixo extra"
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-gray-800">
            Por que escolher a <span className="text-lansar font-bold">Lansar Apps</span>?
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-100 flex items-center hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 bg-lansar/10 p-3 rounded-lg mr-4">
                  {reason.icon}
                </div>
                <p className="text-gray-700 font-medium">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
