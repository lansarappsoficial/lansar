
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
      emoji: "🔄",
      question: "A IA funciona com o meu CRM atual?",
      answer: "Sim! Integramos facilmente com qualquer CRM do mercado."
    },
    {
      emoji: "💬",
      question: "Os agentes realmente conversam como humanos?",
      answer: "Sim! Nossa IA utiliza linguagem natural, personalizada e humanizada, adaptada ao seu público e tom de voz."
    },
    {
      emoji: "⏱️",
      question: "Quanto tempo leva para implementar?",
      answer: "Normalmente entre 7 e 30 dias até os agentes estarem ativos e operando."
    },
    {
      emoji: "⚙️",
      question: "Posso personalizar mensagens e fluxos?",
      answer: "Com certeza! Você tem controle total para editar rotinas, mensagens e o estilo de comunicação da IA."
    },
    {
      emoji: "💰",
      question: "Qual o investimento?",
      answer: "Oferecemos planos flexíveis de acordo com as necessidades do seu negócio. O Diagnóstico é 100% gratuito e sem compromisso."
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center mb-12 animate-fade-in">
            PERGUNTAS <span className="gradient-text">FREQUENTES</span>
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-gray-200 rounded-lg bg-white shadow-sm animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg data-[state=open]:rounded-b-none">
                  <div className="flex items-center">
                    <span className="text-xl mr-2">{faq.emoji}</span>
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
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
