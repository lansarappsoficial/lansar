
import React from "react";
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
  return (
    <section className="section-padding bg-gradient-to-br from-lansar/5 to-lansar-light/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title animate-fade-in">
            TRANSFORME SUA <span className="gradient-text">OPERAÇÃO COMERCIAL</span> HOJE
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Descubra como a inteligência artificial pode revolucionar seu processo de vendas. Solicite agora seu Diagnóstico Gratuito e receba um plano personalizado para escalar seus resultados.
          </p>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button className="cta-button text-lg hover:scale-105 transition-transform animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <span className="mr-2">👉</span> QUERO AUMENTAR MINHAS VENDAS <ArrowRight className="ml-2 h-5 w-5" />
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
    </section>
  );
};

export default CTASection;
