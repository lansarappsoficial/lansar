
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Uma <span className="text-lansar">Nova Era</span> para seu Processo Comercial
          </h2>
          
          <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              <span className="font-semibold text-lansar">Você já imaginou ter um time de vendas que trabalha 24/7</span>, sem esquecer um follow-up, 
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
            <Card key={index} className="border-gray-100 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <div className="bg-lansar/10 text-lansar p-3 rounded-lg inline-flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
