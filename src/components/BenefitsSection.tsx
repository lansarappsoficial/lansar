
import React from "react";
import { Bot, Clock, Target, Zap, Server, Layers } from "lucide-react";
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
    <section className="py-20 bg-gradient-to-br from-gray-900/95 via-blue-900/20 to-gray-900/95 text-white relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
            Uma <span className="gradient-text">Nova Era</span> para seu Processo Comercial
          </h2>
          
          <div className="mt-8 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-lansar/20 shadow-xl">
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              <span className="font-semibold text-lansar-light">Você já imaginou ter um time de vendas que trabalha 24/7</span>, sem esquecer um follow-up, 
              sem perder um lead e sem pedir aumento? Com a Lansar Apps, isso é realidade.
            </p>
            <p className="text-lg md:text-xl text-blue-100">
              Nossa IA cuida de todo o seu processo comercial — da prospecção à recompra — 
              para que você e seu time foquem no que realmente importa: <span className="font-semibold text-lansar">fechar negócios</span>.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-lansar/20 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md hover:shadow-lansar/20 hover:shadow-lg transition-all duration-300 animate-fade-up transform hover:-translate-y-1" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
              <CardContent className="pt-6">
                <div className="bg-lansar/20 text-lansar p-3 rounded-lg inline-flex items-center justify-center mb-4 shadow-inner shadow-lansar/10">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-blue-200/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Circuit lines */}
      <div className="absolute top-0 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-lansar/30 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lansar/20 to-transparent"></div>
    </section>
  );
};

export default BenefitsSection;
