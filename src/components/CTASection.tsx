
import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CTASection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const calendlyLoadedRef = useRef(false); // previne múltiplos carregamentos

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

  useEffect(() => {
    if (!calendlyLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      calendlyLoadedRef.current = true;
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="section-padding bg-gradient-to-br from-lansar/5 to-lansar-light/5"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`section-title transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            TRANSFORME SUA <span className="gradient-text">OPERAÇÃO COMERCIAL</span> HOJE
          </h2>
          <p
            className={`text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Descubra como a inteligência artificial pode revolucionar seu processo de vendas.
            Solicite agora seu Diagnóstico Gratuito e receba um plano personalizado para escalar seus resultados.
          </p>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                className={`cta-button text-lg hover:scale-105 transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
              >
                <span className="mr-2">👉</span> QUERO AUMENTAR MINHAS VENDAS{" "}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Agende seu Diagnóstico Gratuito</SheetTitle>
                <SheetDescription>
                  Escolha o melhor horário para conversarmos sobre como podemos impulsionar suas vendas.
                </SheetDescription>
              </SheetHeader>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/lansarapps/30min"
                style={{ minWidth: "320px", height: "700px" }}
              ></div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
