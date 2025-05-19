
import React from "react";
import { XCircle } from "lucide-react";

const ProblemsSection: React.FC = () => {
  const problems = [
    "Tempo desperdiçado com agendamentos manuais",
    "Leads esfriando por falta de follow-up consistente",
    "SDRs sobrecarregados com tarefas repetitivas",
    "Prospecção irregular sem ritmo ou método",
    "Propostas atrasadas gerando perda de oportunidades",
    "Clientes antigos esquecidos que poderiam gerar novas compras"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-800 to-gray-900 text-white relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAtMzBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCA2MGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center text-white mb-12 animate-fade-in">
            O QUE ESTÁ <span className="text-lansar-light">TRAVANDO</span> SUAS VENDAS AGORA?
          </h2>
          
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-lansar/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <XCircle className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-gray-200">{problem}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-red-500/20 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-gray-200 text-center">
                Você está perdendo tempo, dinheiro e oportunidades valiosas — problemas que podem ser resolvidos com automação inteligente.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-red-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-lansar/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default ProblemsSection;
