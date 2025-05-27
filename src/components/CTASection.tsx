import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="cta"
      className="section-padding bg-gradient-to-br from-lansar/5 to-lansar-light/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`section-title transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            TRANSFORME SUA <span className="gradient-text">OPERAÇÃO COMERCIAL</span> HOJE
          </h2>
          <p className={`text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Descubra como a inteligência artificial pode revolucionar seu processo de vendas. Solicite agora seu Diagnóstico Gratuito e receba um plano personalizado para escalar seus resultados.
          </p>

          <div className="w-full flex justify-center">
            <Button
              className={`cta-button text-sm sm:text-base md:text-lg w-full max-w-xs sm:max-w-md hover:scale-105 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              onClick={() => window.open("https://calendly.com/lansarapps/30min", "_blank")}
            >
              QUERO AUMENTAR MINHAS VENDAS <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
