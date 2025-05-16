
import React from "react";
import { Check, Cpu, Layers, Server } from "lucide-react";

const WhyUsSection: React.FC = () => {
  const reasons = [
    {
      icon: <Cpu className="h-5 w-5 text-lansar-light" />,
      text: "Agentes de IA configuráveis de acordo com o seu processo"
    },
    {
      icon: <Layers className="h-5 w-5 text-lansar-light" />,
      text: "Integração com os principais CRMs e ferramentas comerciais"
    },
    {
      icon: <Server className="h-5 w-5 text-lansar-light" />,
      text: "Linguagem natural e adaptação ao seu tom de voz"
    },
    {
      icon: <Cpu className="h-5 w-5 text-lansar-light" />,
      text: "Suporte estratégico para ativação rápida"
    },
    {
      icon: <Server className="h-5 w-5 text-lansar-light" />,
      text: "Escalabilidade sem custo fixo extra"
    }
  ];

  return (
    <section id="why-us" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
            Por que escolher a <span className="gradient-text">Lansar Apps</span>?
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-4">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-5 rounded-xl shadow-lg backdrop-blur-md border border-blue-500/20 flex items-center transform hover:translate-x-1 transition-all duration-300"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex-shrink-0 bg-lansar/20 p-3 rounded-lg mr-4 border border-lansar/30 shadow-inner">
                  {reason.icon}
                </div>
                <p className="text-blue-100 font-medium">{reason.text}</p>
              </div>
            ))}
          </div>
          
          {/* Circuit board decoration */}
          <div className="absolute -z-10 left-0 top-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-lansar/20 to-transparent"></div>
          <div className="absolute -z-10 right-0 top-1/4 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Circuit lines */}
      <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/3 w-px h-32 bg-gradient-to-t from-transparent via-lansar/30 to-transparent"></div>
    </section>
  );
};

export default WhyUsSection;
