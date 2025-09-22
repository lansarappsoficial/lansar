
import React, { useEffect, useState, useRef } from "react";
import { Check } from "lucide-react";

const WhyUsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    "Personalização completa para seu modelo de negócio e setor",
    "Integração com suas ferramentas atuais",
    "Suporte estratégico para ativação ágil e resultados imediatos",
    "Soluções escaláveis que crescem junto com sua operação"
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
      id="why-us"
      className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white relative"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6bTAtMzBjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCA2MGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`section-title text-white mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            POR QUE <span className="text-lansar-light">ESCOLHER</span> A LANSAR?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-lansar/20 hover:border-lansar/40 transition-all duration-700 delay-${index * 150} transform ${isVisible ? 'opacity-100 translate-y-0 hover:scale-105' : 'opacity-0 translate-y-20'}`}
              >
                <div className="flex items-start">
                  <Check className="text-lansar-light h-6 w-6 mr-3 shrink-0 mt-0.5" />
                  <p className="text-lg">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-lansar/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default WhyUsSection;
