
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
      icon: <ServerCrash className="h-5 w-5 text-lansar-light" />,
      question: "A IA funciona com o meu CRM atual?",
      answer: "Sim! Nossos agentes integram com CRMs como HubSpot, Pipedrive, RD Station e outros via API."
    },
    {
      icon: <Cpu className="h-5 w-5 text-lansar-light" />,
      question: "Os agentes realmente conversam como humanos?",
      answer: "Sim. Usamos IA generativa com linguagem natural, adaptada ao seu público e tom de voz. Ninguém percebe que é automatizado."
    },
    {
      icon: <Clock className="h-5 w-5 text-lansar-light" />,
      question: "Quanto tempo leva para implementar?",
      answer: "Em média, entre 3 a 7 dias para configuração inicial e ativação dos agentes."
    },
    {
      icon: <Settings className="h-5 w-5 text-lansar-light" />,
      question: "Posso personalizar as mensagens?",
      answer: "Claro. Você pode editar fluxos, mensagens, abordagens e até a identidade verbal da IA."
    },
    {
      icon: <Search className="h-5 w-5 text-lansar-light" />,
      question: "Como acompanho os resultados?",
      answer: "Você terá acesso a dashboards com métricas de performance de cada agente."
    },
    {
      icon: <CreditCard className="h-5 w-5 text-lansar-light" />,
      question: "Qual o investimento?",
      answer: "Nossos planos são flexíveis e baseados no volume de operação. O Diagnóstico é gratuito e sem compromisso."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Tech background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
            Perguntas <span className="gradient-text">frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-blue-500/20 mb-4"
              >
                <AccordionTrigger className="text-left py-5 px-4 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-md rounded-t-lg border border-blue-500/20 text-white hover:text-lansar-light">
                  <div className="flex items-center">
                    <div className="p-2 bg-lansar/20 rounded-full mr-3 border border-lansar/30">
                      {faq.icon}
                    </div>
                    <span className="text-lg font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-blue-100 p-6 bg-black/40 backdrop-blur-md rounded-b-lg border-x border-b border-blue-500/10 shadow-inner">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-1/4 left-10 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Circuit lines */}
      <div className="absolute top-0 right-1/4 w-px h-20 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/3 w-px h-32 bg-gradient-to-t from-transparent via-lansar/30 to-transparent"></div>
    </section>
  );
};

export default FAQSection;
