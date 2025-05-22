
import React, { useEffect, useState, useRef } from "react";
import { Clock, Search, Phone, MessageSquare, RefreshCw, FileText, RotateCcw, Repeat } from "lucide-react";

const AgentsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const agents = [
    {
      icon: <Clock className="h-6 w-6" />,
      emoji: "⏱️",
      title: "Agendamento Automático",
      description: "Elimine trocas excessivas de e-mails. A ferramenta contata o lead, identifica disponibilidade e agenda diretamente no calendário do vendedor, com sincronização completa para Google Calendar e CRMs."
    }, 
    {
      icon: <Phone className="h-6 w-6" />,
      emoji: "📞",
      title: "Pré-Qualificação com Ligação",
      description: "Realiza chamadas automáticas para qualificar prospects antes do contato com o vendedor, garantindo foco apenas em oportunidades quentes."
    }, 
    {
      icon: <Search className="h-6 w-6" />,
      emoji: "🔍",
      title: "Pesquisa e Prospecção Inteligente",
      description: "Localiza leads qualificados na internet e alimenta seu funil comercial continuamente, liberando tempo valioso dos SDRs."
    }, 
    {
      icon: <MessageSquare className="h-6 w-6" />,
      emoji: "📱",
      title: "Vendas e Atendimento pelo WhatsApp",
      description: "Conduz abordagens, esclarece dúvidas e fecha vendas diretamente pelo canal preferido dos clientes, com linguagem natural e personalizada."
    }, 
    {
      icon: <RefreshCw className="h-6 w-6" />,
      emoji: "🔄",
      title: "Follow-Up Inteligente",
      description: "Envia mensagens personalizadas no momento ideal para cada lead, aumentando drasticamente a taxa de resposta."
    }, 
    {
      icon: <FileText className="h-6 w-6" />,
      emoji: "📄",
      title: "Gerador Automático de Propostas",
      description: "Elabora orçamentos profissionais instantaneamente com base nos dados da negociação, incluindo opções de assinatura digital."
    }, 
    {
      icon: <RotateCcw className="h-6 w-6" />,
      emoji: "🔙",
      title: "Recuperação de Vendas",
      description: "Retoma contato estratégico com leads não convertidos, identifica objeções e apresenta novas propostas para aumentar o ROI."
    }, 
    {
      icon: <Repeat className="h-6 w-6" />,
      emoji: "🔁",
      title: "Recompra Inteligente",
      description: "Identifica o momento perfeito para reengajar clientes antigos com ofertas personalizadas, expandindo o lifetime value."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
      id="agents"
      className="section-padding bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">
            Algumas das <span className="gradient-text">soluções</span> que podem transformar seu processo comercial
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <div 
              key={index} 
              className={`agent-card transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-y-0 hover:scale-105' : 'opacity-0 translate-y-20'}`}
            >
              <div className="agent-icon">
                {agent.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {agent.title}
              </h3>
              <p className="text-gray-600">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
