
import React from "react";
import { 
  Clock, Search, Phone, MessageSquare, 
  RefreshCw, FileText, RotateCcw, Repeat 
} from "lucide-react";

const AgentsSection: React.FC = () => {
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

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="section-title animate-fade-in">
            Algumas das <span className="gradient-text">soluções</span> que podem transformar seu processo comercial
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <div 
              key={index} 
              className="agent-card hover:scale-105 transition-all duration-300 animate-fade-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="agent-icon">
                {agent.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <span className="mr-2">{agent.emoji}</span> 
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
