
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Cpu, Layers } from "lucide-react";

const DiagnosisSection: React.FC = () => {
  const benefits = [
    "Mapeamento do seu processo de vendas atual",
    "Identificação de tarefas que podem ser automatizadas",
    "Análise de gaps no funil e sugestões práticas de melhoria",
    "Recomendação personalizada de agentes de IA",
    "Estimativa de impacto em tempo e conversão"
  ];

  return (
    <section id="diagnosis" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
            Entenda como funciona o <span className="gradient-text">Diagnóstico Gratuito</span>
          </h2>

          <div className="mt-10 p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-md rounded-2xl shadow-2xl border border-lansar/30 relative">
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-lansar to-blue-500 filter blur-xl opacity-20"></div>
            
            <p className="text-xl font-medium mb-8 text-center text-lansar-light">
              Antes de automatizar, a gente entende seu processo comercial a fundo
            </p>
            <p className="text-blue-100 mb-8">
              Nosso Diagnóstico Gratuito não é só uma call. É uma análise completa da sua operação 
              comercial atual, feita por especialistas, para identificar gargalos, oportunidades e 
              como a IA pode ajudar.
            </p>

            <div className="flex items-center mb-6">
              <Cpu className="h-6 w-6 text-lansar mr-3" />
              <h3 className="text-lg font-semibold text-white">O que você ganha com o diagnóstico:</h3>
            </div>
            
            <ul className="space-y-4 mb-8 bg-black/30 p-6 rounded-xl border border-blue-500/10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="p-1 bg-lansar/20 rounded-full mr-3 border border-lansar/30">
                    <Check className="h-4 w-4 text-lansar-light" />
                  </div>
                  <span className="text-blue-100">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-5 rounded-xl mb-8 border border-blue-500/20">
              <p className="text-center font-medium flex items-center justify-center text-lg text-white">
                <span className="mr-3 p-2 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <Layers className="h-5 w-5 text-blue-400" />
                </span>
                Você sai com clareza sobre como vender mais — com ou sem IA.
              </p>
            </div>

            <div className="text-center">
              <Button className="cta-button text-lg hover:shadow-xl hover:shadow-lansar/20 transform hover:translate-y-[-2px] transition-all duration-300">
                <span className="mr-2">👉</span> Solicitar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech decoration */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Circuit lines */}
      <div className="absolute top-0 left-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 right-1/3 w-px h-32 bg-gradient-to-t from-transparent via-lansar/30 to-transparent"></div>
    </section>
  );
};

export default DiagnosisSection;
