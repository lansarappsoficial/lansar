
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const DiagnosisSection: React.FC = () => {
  const benefits = [
    "Mapeamento do seu processo de vendas atual",
    "Identificação de tarefas que podem ser automatizadas",
    "Análise de gaps no funil e sugestões práticas de melhoria",
    "Recomendação personalizada de agentes de IA",
    "Estimativa de impacto em tempo e conversão"
  ];

  return (
    <section id="diagnosis" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">
            Entenda como funciona o <span className="gradient-text">Diagnóstico Gratuito</span>
          </h2>

          <div className="mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
            <p className="text-xl font-medium mb-8 text-center">
              Antes de automatizar, a gente entende seu processo comercial a fundo
            </p>
            <p className="text-gray-700 mb-8">
              Nosso Diagnóstico Gratuito não é só uma call. É uma análise completa da sua operação 
              comercial atual, feita por especialistas, para identificar gargalos, oportunidades e 
              como a IA pode ajudar.
            </p>

            <h3 className="text-lg font-semibold mb-5">O que você ganha com o diagnóstico:</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="checkmark h-5 w-5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-blue-50 p-5 rounded-xl mb-8">
              <p className="text-center font-medium flex items-center justify-center text-lg">
                <span className="mr-2">💡</span>
                Você sai com clareza sobre como vender mais — com ou sem IA.
              </p>
            </div>

            <div className="text-center">
              <Button className="cta-button text-lg">
                <span className="mr-2">👉</span> Solicitar Diagnóstico Gratuito <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
