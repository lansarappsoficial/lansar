
import React from "react";
import { Check, Calendar, Search, MessageSquare, Users, FileText, TrendingUp, Link, Cpu, Layers } from "lucide-react";

const AgentCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  benefits: string[];
}> = ({ icon, title, problem, solution, benefits }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-xl shadow-lg hover:shadow-xl border border-lansar/30 backdrop-blur-md transition-all duration-300 transform hover:translate-y-[-3px]">
      <div className="bg-lansar/20 text-lansar-light p-4 rounded-lg inline-flex items-center justify-center mb-4 shadow-inner shadow-lansar/10 border border-lansar/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-lansar-light">{title}</h3>
      <div className="mb-4 p-3 bg-black/30 rounded-lg border-l-2 border-red-500/50">
        <p className="text-sm font-medium text-gray-400 mb-1">Problema:</p>
        <p className="text-blue-100">{problem}</p>
      </div>
      <div className="mb-5 p-3 bg-black/30 rounded-lg border-l-2 border-lansar/50">
        <p className="text-sm font-medium text-gray-400 mb-1">Solução:</p>
        <p className="text-blue-100">{solution}</p>
      </div>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <div className="mt-1 mr-3 bg-lansar/20 p-1 rounded-full">
              <Check className="h-3 w-3 text-lansar-light" />
            </div>
            <span className="text-blue-200/80">{benefit}</span>
          </li>
        ))}
      </ul>
      
      {/* Tech decoration */}
      <div className="absolute -z-10 bottom-2 right-2 w-20 h-1 bg-lansar/20 rounded-full"></div>
      <div className="absolute -z-10 top-2 left-10 w-1 h-10 bg-blue-500/20 rounded-full"></div>
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
    <section id="agents" className="section-padding bg-gradient-to-br from-gray-900 via-blue-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2MjY2ZjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMC0zMGMwLTIuMi0xLjgtNC00LTRzLTQgMS44LTQgNCAxLjggNCA0IDQgNC0xLjggNC00em0wIDYwYzAtMi4yLTEuOC00LTQtNHMtNCAxLjgtNCA0IDEuOCA0IDQgNCA0LTEuOCA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-lansar-light to-blue-400">
            Conheça seus novos agentes de vendas — <span className="gradient-text">movidos por IA</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {agents.map((agent, index) => (
              <div 
                key={index} 
                className="animate-fade-up relative"
                style={{ animationDelay: `${(index % 4) * 0.1}s` }}
              >
                <AgentCard {...agent} />
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-blue-900/20 backdrop-blur-md rounded-xl border border-blue-500/20 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
              <span className="mr-3 p-2 bg-blue-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                <Cpu className="h-5 w-5 text-blue-400" />
              </span> 
              Objeção: "Mas os leads vão perceber que é um robô?"
            </h3>
            <p className="text-blue-100">
              <strong className="text-lansar-light">Não.</strong> A IA simula linguagem natural, com tom humano, adaptável ao seu público.
            </p>
          </div>
        </div>
      </div>
      
      {/* Tech decoration elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-lansar/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl"></div>
      
      {/* Circuit lines */}
      <div className="absolute top-0 right-1/3 w-px h-20 bg-gradient-to-b from-transparent via-lansar/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-px h-32 bg-gradient-to-t from-transparent via-blue-500/30 to-transparent"></div>
    </section>
  );
};

export default AgentsSection;
