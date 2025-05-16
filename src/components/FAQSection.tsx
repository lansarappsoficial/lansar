
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "🧩 A IA funciona com o meu CRM atual?",
      answer: "Sim! Nossos agentes integram com CRMs como HubSpot, Pipedrive, RD Station e outros via API."
    },
    {
      question: "🧠 Os agentes realmente conversam como humanos?",
      answer: "Sim. Usamos IA generativa com linguagem natural, adaptada ao seu público e tom de voz. Ninguém percebe que é automatizado."
    },
    {
      question: "⚙️ Quanto tempo leva para implementar?",
      answer: "Em média, entre 3 a 7 dias para configuração inicial e ativação dos agentes."
    },
    {
      question: "💬 Posso personalizar as mensagens?",
      answer: "Claro. Você pode editar fluxos, mensagens, abordagens e até a identidade verbal da IA."
    },
    {
      question: "📊 Como acompanho os resultados?",
      answer: "Você terá acesso a dashboards com métricas de performance de cada agente."
    },
    {
      question: "💰 Qual o investimento?",
      answer: "Nossos planos são flexíveis e baseados no volume de operação. O Diagnóstico é gratuito e sem compromisso."
    }
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-left py-5">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
