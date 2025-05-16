
import React from "react";
import { Bot, Clock, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Disponível 24/7",
      description: "Nunca mais perca uma oportunidade, mesmo fora do horário comercial."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Sem follow-ups esquecidos",
      description: "Acompanhamento automático e consistente de todos os leads."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Automação inteligente",
      description: "Da prospecção à recompra, tudo gerenciado pela nossa IA."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fechamento eficiente",
      description: "Seu time focado apenas no que realmente importa: fechar negócios."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAtMzBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCA2MGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">
            Uma <span className="gradient-text">Nova Era</span> para seu Processo Comercial
          </h2>
          
          <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-lansar/10 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              <span className="font-semibold">Você já imaginou ter um time de vendas que trabalha 24/7</span>, sem esquecer um follow-up, 
              sem perder um lead e sem pedir aumento? Com a Lansar Apps, isso é realidade.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Nossa IA cuida de todo o seu processo comercial — da prospecção à recompra — 
              para que você e seu time foquem no que realmente importa: <span className="font-semibold text-lansar">fechar negócios</span>.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-lansar/10 bg-white/70 backdrop-blur-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <CardContent className="pt-6">
                <div className="bg-lansar/10 text-lansar p-3 rounded-lg inline-flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-lansar/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default BenefitsSection;
