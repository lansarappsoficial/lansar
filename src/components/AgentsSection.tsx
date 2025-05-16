
import React from "react";
import { Check, Calendar, Search, MessageSquare, Users, FileText, TrendingUp, Link } from "lucide-react";

const AgentCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
}> = ({ icon, title, problem, solution, benefits }) => {
  return (
    <div className="agent-card">
      <div className="agent-icon">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-sm font-medium text-gray-500 mb-2">Problema:</p>
      <p className="text-gray-700 mb-4">{problem}</p>
      <p className="text-sm font-medium text-gray-500 mb-2">Solução:</p>
      <p className="text-gray-700 mb-5">{solution}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="checkmark h-5 w-5 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AgentsSection: React.FC = () => {
  const agents = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "🧠 Agente de Agendamento Automático",
      problem: "Seu time perde horas trocando e-mails para agendar reuniões.",
      solution: "Nosso agente entra em contato com o lead, identifica disponibilidade e agenda no calendário do vendedor — tudo sozinho.",
      benefits: [
        "Reduz o tempo de agendamento em até 90%",
        "Sincroniza com Google Calendar e outros CRMs",
        "Ativo 24/7 para não perder nenhuma janela"
      ]
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "🔎 Agente de Pré-Qualificação de Leads",
      problem: "Muitos leads que chegam não estão prontos para comprar.",
      solution: "A IA conversa com o lead, identifica perfil, dor, urgência e fit com o produto — antes de passar para o time de vendas.",
      benefits: [
        "Time de vendas foca só em leads quentes",
        "Personalização com base no seu ICP",
        "Integração com seu CRM para pontuação automática"
      ]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "📬 Agente de Follow-Up Inteligente",
      problem: "Seu time esquece de fazer o follow-up ou faz tarde demais.",
      solution: "A IA acompanha cada lead com mensagens naturais e personalizadas no momento certo.",
      benefits: [
        "Aumenta drasticamente a taxa de resposta",
        "Personaliza com base em interações anteriores",
        "Nunca perde o timing"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "🎯 Agente de Prospecção Ativa",
      problem: "SDRs não conseguem manter o ritmo de abordagem.",
      solution: "O agente de prospecção realiza contato proativo com listas de leads, nutrindo e direcionando para o próximo passo.",
      benefits: [
        "Multicanal (e-mail, WhatsApp, LinkedIn, etc.)",
        "Roteiros otimizados com IA generativa",
        "Operação em escala, sem perder a personalização"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "📄 Gerador de Orçamento em PDF",
      problem: "Vendedor perde tempo criando proposta personalizada.",
      solution: "A IA gera orçamentos em PDF automaticamente, com base nas interações com o lead e no seu modelo de precificação.",
      benefits: [
        "Rápido, bonito e padronizado",
        "Economia de tempo e aumento de conversão",
        "Pode incluir links de assinatura ou pagamento"
      ]
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "🔁 Agente de Recuperação de Vendas Perdidas",
      problem: "Leads que não fecharam são esquecidos.",
      solution: "A IA retoma contato com leads antigos, entende o motivo da perda e oferece uma nova oportunidade.",
      benefits: [
        "Reativa oportunidades perdidas",
        "Aborda no momento certo, com a mensagem ideal",
        "Aumenta o ROI de campanhas anteriores"
      ]
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "🛍️ Agente de Recompra Inteligente",
      problem: "Você vende uma vez e não mantém o cliente.",
      solution: "O agente identifica janelas de recompra e reengaja o cliente com ofertas relevantes.",
      benefits: [
        "Aumenta LTV sem custo de aquisição",
        "Ideal para negócios com produtos/serviços recorrentes",
        "Abordagem 100% personalizada e automatizada"
      ]
    }
  ];

  return (
    <section id="agents" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-16">
            Conheça seus novos agentes de vendas — <span className="gradient-text">movidos por IA</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <div 
                key={index} 
                className="animate-fade-up"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <AgentCard {...agent} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">💡</span> 
              Objeção: "Mas os leads vão perceber que é um robô?"
            </h3>
            <p className="text-gray-700">
              <strong>Não.</strong> A IA simula linguagem natural, com tom humano, adaptável ao seu público.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
