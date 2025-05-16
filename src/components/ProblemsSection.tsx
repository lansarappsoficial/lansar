
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
    <section id="problems" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
            O que está travando suas <span className="gradient-text">vendas</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 rounded-xl backdrop-blur-md shadow-lg border border-blue-500/10 flex items-start transform hover:translate-y-[-2px] hover:shadow-blue-500/5 transition-all duration-300"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex-shrink-0 bg-red-500/10 p-2 rounded-full mr-4 border border-red-500/20">
                  {problem.icon}
                </div>
                <p className="text-blue-100 font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg md:text-xl font-medium text-lansar bg-black/30 backdrop-blur-sm py-4 px-6 rounded-xl inline-block border border-lansar/20 shadow-lg shadow-lansar/5">
              Você está perdendo tempo, dinheiro e oportunidades — e tudo isso pode ser resolvido com IA.
            </p>
          </div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-red-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute top-20 right-40 w-40 h-40 bg-blue-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default ProblemsSection;
