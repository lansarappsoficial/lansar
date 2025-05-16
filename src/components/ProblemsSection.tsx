
import React from "react";
import { Check, ServerCrash, Clock, AlertTriangle } from "lucide-react";

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: <Clock className="h-5 w-5 text-red-400" />,
      text: "Perda de tempo com agendamentos manuais"
    },
    {
      icon: <ServerCrash className="h-5 w-5 text-red-400" />,
      text: "Leads frios por falta de follow-up"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
      text: "SDRs sobrecarregados com tarefas repetitivas"
    },
    {
      icon: <Clock className="h-5 w-5 text-red-400" />,
      text: "Falta de ritmo na prospecção ativa"
    },
    {
      icon: <ServerCrash className="h-5 w-5 text-red-400" />,
      text: "Oportunidades escapando por não gerar proposta a tempo"
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-yellow-400" />,
      text: "Clientes indo embora e não voltando"
    }
  ];

  return (
    <section id="problems" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-gray-800">
            O que está travando suas <span className="text-lansar font-bold">vendas</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-start hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 bg-red-100 p-2 rounded-full mr-4">
                  {problem.icon}
                </div>
                <p className="text-gray-700 font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg md:text-xl font-medium text-lansar bg-lansar/5 py-4 px-6 rounded-xl inline-block">
              Você está perdendo tempo, dinheiro e oportunidades — e tudo isso pode ser resolvido com IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
