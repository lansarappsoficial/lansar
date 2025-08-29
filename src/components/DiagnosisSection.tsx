import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DiagnosisSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const benefits = [
    "Mapeamento personalizado do seu funil de vendas",
    "Identificação precisa das tarefas automatizáveis",
    "Análise de lacunas e sugestões práticas de melhoria",
    "Recomendação estratégica dos agentes ideais para sua operação",
    "Estimativa concreta do potencial de tempo e conversão ganhos"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="diagnosis"
      className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white relative"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAtMzBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCA2MGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className={`bg-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-lansar/20 hover:border-lansar/40 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              DIAGNÓSTICO COMERCIAL GRATUITO
            </h2>
            <p className="text-white/90 mb-6">
              Antes de recomendar qualquer solução, realizamos uma análise detalhada do seu processo comercial atual. Nossos especialistas identificam gargalos, oportunidades e definem quais agentes de IA trarão maior impacto para o seu negócio.
            </p>
            <p className="font-semibold mb-4 text-white">Você recebe:</p>
            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className={`flex items-start transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                  <span>✅ {benefit}</span>
                </li>
              ))}
            </ul>
            <div className={`p-4 bg-white/10 rounded-lg border border-lansar/20 mb-6 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="flex items-center">
                <span className="text-xl mr-2">💡</span>
                <span>Você sai com uma visão clara de como vender mais — com ou sem IA.</span>
              </p>
            </div>

            {/* Calendly Link - Nova aba */}
            <div className="w-full flex flex-col items-center">
              <a
                href="https://calendly.com/alexandrelansar/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button
                  className={`cta-button w-full text-base sm:text-lg hover:scale-105 transition-all duration-700 delay-600 transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                >
                  SOLICITAR DIAGNÓSTICO GRATUITO <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <p className={`text-xs text-white/60 mt-2 transition-all duration-700 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                Ao clicar, você será direcionado para escolher uma data e horário para reunião
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-lansar/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default DiagnosisSection;
