
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection: React.FC = () => {
  const benefitPoints = [
    "Trabalham 24 horas por dia, 7 dias por semana",
    "Nunca esquecem um follow-up",
    "Não perdem leads",
    "Mantêm consistência total na abordagem",
    "E nunca pedem aumento de salário?"
  ];

  const segments = [
    "Infoprodutores e lançadores digitais",
    "Prestadores de serviço de todos os portes",
    "Empresas de tecnologia e software",
    "Indústrias e fabricantes",
    "E-commerce e varejo digital",
    "Agências de marketing e consultorias",
    "Atacadistas e distribuidores",
    "E muitos outros segmentos que buscam escalar vendas com automação inteligente"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAtMzBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCA2MGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="section-title">
            IMAGINE UM <span className="gradient-text">TIME DE VENDAS</span> QUE NUNCA PARA
          </h2>
          
          <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-lansar/10 shadow-lg animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              <span className="font-semibold">Já pensou em ter vendedores que:</span>
            </p>
            
            <ul className="text-lg text-gray-700 list-none mb-6 space-y-2">
              {benefitPoints.map((point, index) => (
                <li key={index} className="flex items-center animate-fade-up" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                  <span className="checkmark">✓</span> {point}
                </li>
              ))}
            </ul>
            
            <p className="text-lg md:text-xl text-gray-700 animate-fade-up" style={{ animationDelay: "0.8s" }}>
              Com a Lansar, isso é realidade para infoprodutores, prestadores de serviços, empresas de tecnologia, indústrias e muitos outros negócios. Criamos IA que cuida de todo o processo comercial para que você possa focar no que realmente importa: <span className="font-semibold text-lansar">fechar negócios</span>.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 animate-fade-in" style={{ animationDelay: "1s" }}>
          <h3 className="section-subtitle text-center mb-8">QUEM PODE SE BENEFICIAR</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {segments.map((segment, index) => (
              <Card key={index} className="border-lansar/10 bg-white/70 backdrop-blur-sm hover:shadow-md transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1 + 1.1}s` }}>
                <CardContent className="p-4">
                  <p className="text-gray-700">{segment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-40 h-40 bg-lansar/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-60 h-60 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default BenefitsSection;
