
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const DiagnosisSection: React.FC = () => {
  const benefits = [
    "Mapeamento personalizado do seu funil de vendas",
    "Identificação precisa das tarefas automatizáveis",
    "Análise de lacunas e sugestões práticas de melhoria",
    "Recomendação estratégica dos agentes ideais para sua operação",
    "Estimativa concreta do potencial de tempo e conversão ganhos"
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-lansar/5 to-blue-500/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-lansar/10 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                alt="Diagnóstico Comercial" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold mb-4">
                CLIENTES E PROJETOS
              </h2>
              <p className="text-gray-700 mb-4">
                Já ajudamos empresas de diversos setores a faturarem milhões com nossas soluções de tecnologia e inteligência artificial.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-center text-gray-500">
                  [Espaço para logos de clientes]
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-lansar/10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-4">
                DIAGNÓSTICO COMERCIAL GRATUITO
              </h2>
              <p className="text-gray-700 mb-6">
                Antes de recomendar qualquer solução, realizamos uma análise detalhada do seu processo comercial atual. Nossos especialistas identificam gargalos, oportunidades e definem quais agentes de IA trarão maior impacto para o seu negócio.
              </p>
              <p className="font-semibold mb-4">Você recebe:</p>
              <ul className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start animate-fade-up" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                    <Check className="text-lansar h-5 w-5 mr-2 mt-0.5" />
                    <span>✅ {benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-lansar/5 rounded-lg border border-lansar/10 mb-6 animate-fade-up" style={{ animationDelay: "0.8s" }}>
                <p className="flex items-center">
                  <span className="text-xl mr-2">💡</span>
                  <span>Você sai com uma visão clara de como vender mais — com ou sem IA.</span>
                </p>
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button className="cta-button w-full text-lg hover:scale-105 transition-transform animate-fade-up" style={{ animationDelay: "0.9s" }}>
                    SOLICITAR DIAGNÓSTICO GRATUITO <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Agende seu Diagnóstico Gratuito</SheetTitle>
                    <SheetDescription>
                      Escolha o melhor horário para conversarmos sobre como podemos impulsionar suas vendas.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="calendly-inline-widget" data-url="https://calendly.com/lansarapps/30min" style={{minWidth:"320px", height:"700px"}}></div>
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
