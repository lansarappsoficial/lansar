
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cpu, Search, ServerCrash, Clock, Settings, CreditCard } from "lucide-react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      icon: <ServerCrash className="h-5 w-5 text-lansar" />,
      question: "A IA funciona com o meu CRM atual?",
      answer: "Sim! Nossos agentes integram com CRMs como HubSpot, Pipedrive, RD Station e outros via API."
    },
    {
      icon: <Cpu className="h-5 w-5 text-lansar" />,
      question: "Os agentes realmente conversam como humanos?",
      answer: "Sim. Usamos IA generativa com linguagem natural, adaptada ao seu público e tom de voz. Ninguém percebe que é automatizado."
    },
    {
      icon: <Clock className="h-5 w-5 text-lansar" />,
      question: "Quanto tempo leva para implementar?",
      answer: "Em média, entre 3 a 7 dias para configuração inicial e ativação dos agentes."
    },
    {
      icon: <Settings className="h-5 w-5 text-lansar" />,
      question: "Posso personalizar as mensagens?",
      answer: "Claro. Você pode editar fluxos, mensagens, abordagens e até a identidade verbal da IA."
    },
    {
      icon: <Search className="h-5 w-5 text-lansar" />,
      question: "Como acompanho os resultados?",
      answer: "Você terá acesso a dashboards com métricas de performance de cada agente."
    },
    {
      icon: <CreditCard className="h-5 w-5 text-lansar" />,
      question: "Qual o investimento?",
      answer: "Nossos planos são flexíveis e baseados no volume de operação. O Diagnóstico é gratuito e sem compromisso."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center text-gray-800">
            Perguntas <span className="text-lansar font-bold">frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-gray-200 mb-4"
              >
                <AccordionTrigger className="text-left py-5 px-4 bg-white rounded-t-lg border border-gray-200 text-gray-800 hover:text-lansar">
                  <div className="flex items-center">
                    <div className="p-2 bg-lansar/10 rounded-full mr-3">
                      {faq.icon}
                    </div>
                    <span className="text-lg font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 p-6 bg-gray-50 rounded-b-lg border-x border-b border-gray-200">
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
