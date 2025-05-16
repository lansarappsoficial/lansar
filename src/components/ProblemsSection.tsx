
import React from "react";
import { Check } from "lucide-react";

const ProblemsSection: React.FC = () => {
  const problems = [
    "Perda de tempo com agendamentos manuais",
    "Leads frios por falta de follow-up",
    "SDRs sobrecarregados com tarefas repetitivas",
    "Falta de ritmo na prospecção ativa",
    "Oportunidades escapando por não gerar proposta a tempo",
    "Clientes indo embora e não voltando",
  ];

  return (
    <section id="problems" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">
            O que está travando suas <span className="gradient-text">vendas</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex-shrink-0 bg-lansar/10 p-2 rounded-full mr-4">
                  <Check className="h-5 w-5 text-lansar" />
                </div>
                <p className="text-gray-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg md:text-xl font-medium text-gray-800 max-w-3xl mx-auto">
              Você está perdendo tempo, dinheiro e oportunidades — e tudo isso pode ser resolvido com IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
