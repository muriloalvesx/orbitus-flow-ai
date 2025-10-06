import { Bot, Users, RefreshCw, BarChart3, Database, ShoppingCart } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Agentes de Aquisição e Vendas (SDR/BDR)",
      description: "Prospecção inteligente, qualificação de leads e gestão completa do funil de vendas com IA.",
      color: "text-primary",
    },
    {
      icon: Users,
      title: "Agentes de Atendimento Humanizado",
      description: "Confirmação de agendamentos, suporte ao cliente 24/7 e agendamento inteligente personalizado.",
      color: "text-secondary",
    },
    {
      icon: RefreshCw,
      title: "Agentes de Pós-Atendimento e Fidelização",
      description: "Reativação de clientes, pesquisas de satisfação, recomendações e promoções personalizadas.",
      color: "text-primary",
    },
    {
      icon: BarChart3,
      title: "Agentes de Gestão e Dados",
      description: "Dashboards inteligentes, scraping de dados, gestão de leads e CRM automatizado.",
      color: "text-secondary",
    },
    {
      icon: Database,
      title: "Gestão Financeira Automatizada",
      description: "Controle financeiro completo com relatórios automáticos e previsões baseadas em IA.",
      color: "text-primary",
    },
    {
      icon: ShoppingCart,
      title: "Gestão de Estoque e E-commerce",
      description: "Automação completa de estoque, precificação dinâmica e otimização de vendas online.",
      color: "text-secondary",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Agentes de IA e Automações:{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              A Solução Sob Medida
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossos Ecossistemas são compostos por Agentes Inteligentes que trabalham em conjunto para 
            cobrir toda a jornada do cliente e a gestão interna. Os principais Agentes que podemos 
            construir para você incluem:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
            >
              <div className="flex flex-col space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-secondary flex items-center justify-center group-hover:shadow-glow transition-all duration-300 ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
