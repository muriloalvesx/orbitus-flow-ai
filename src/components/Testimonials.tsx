import { Sparkles, TrendingUp, Clock, Users, Briefcase } from "lucide-react";

const Testimonials = () => {
  const cases = [
    {
      icon: Sparkles,
      iconColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      category: "Clínica de Estética",
      title: "Transformação Digital Completa",
      metrics: [
        { icon: TrendingUp, value: "+60%", label: "Novos agendamentos" },
        { icon: Clock, value: "-5h", label: "Manual/semana" },
      ],
      description: "Landing page otimizada + CRM + automação de WhatsApp. Sistema integrado que conectou marketing, vendas e atendimento.",
    },
    {
      icon: TrendingUp,
      iconColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
      category: "Santiago Piscinas",
      title: "Automação de Vendas B2C",
      metrics: [
        { icon: Clock, value: "-8h", label: "Manual/semana" },
        { icon: Users, value: "+45%", label: "Taxa de conversão" },
      ],
      description: "Site profissional + automação de orçamentos via n8n. Integração perfeita entre formulário web e CRM.",
    },
    {
      icon: Briefcase,
      iconColor: "bg-gradient-to-br from-purple-500 to-indigo-600",
      category: "Prestador de Serviços B2B",
      title: "Software Customizado",
      metrics: [
        { icon: TrendingUp, value: "+120%", label: "Produtividade" },
        { icon: Clock, value: "-15h", label: "Manual/semana" },
      ],
      description: "Sistema sob medida para gestão de projetos e equipes. Dashboard em tempo real com métricas estratégicas.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            O Que Nossos Clientes{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dizem
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Resultados reais de empresas que transformaram suas operações com a Orbitus Corp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${caseStudy.iconColor} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Category */}
                  <p className="text-primary font-medium">{caseStudy.category}</p>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground">
                    {caseStudy.title}
                  </h3>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudy.metrics.map((metric, metricIndex) => {
                      const MetricIcon = metric.icon;
                      return (
                        <div key={metricIndex} className="space-y-2">
                          <MetricIcon className="w-5 h-5 text-primary" />
                          <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                          <p className="text-sm text-muted-foreground">{metric.label}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
                    {caseStudy.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
