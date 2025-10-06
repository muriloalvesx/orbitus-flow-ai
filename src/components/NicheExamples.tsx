import { Heart, Scale, Store } from "lucide-react";

const NicheExamples = () => {
  const niches = [
    {
      icon: Heart,
      title: "Clínicas e Saúde",
      example: "Otimize sua recepção com nosso Agente de Confirmação e Agendamento Humanizado. Use nosso Agente de Reativação para trazer de volta pacientes antigos e o Agente de Gamificação para engajar e fidelizar.",
      stats: ["40% menos faltas", "Reativação automatizada", "Engajamento 24/7"],
      gradient: "from-primary/10 to-secondary/10",
    },
    {
      icon: Scale,
      title: "Escritórios de Advocacia",
      example: "Vá além do atendimento. Nosso Ecossistema integra CRM e Suporte em um só lugar. Tenha IAs que criam Petições e Contratos, e Agentes de Suporte que informam o cliente sobre o andamento do processo.",
      stats: ["Petições automáticas", "CRM integrado", "Clientes sempre informados"],
      gradient: "from-secondary/10 to-primary/10",
    },
    {
      icon: Store,
      title: "Lojas e E-commerces",
      example: "Domine a gestão completa. Agente Financeiro, Gestão de Estoque e Pós-Venda e Fidelização integrados (incluindo Agente de Comunidade e Gamificação) para transformar clientes em promotores da sua marca.",
      stats: ["Gestão financeira completa", "Estoque otimizado", "Clientes fidelizados"],
      gradient: "from-primary/10 to-accent/10",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Exemplos de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ecossistemas por Nicho
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Veja como nossos Agentes de IA se adaptam perfeitamente a diferentes tipos de negócio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {niches.map((niche, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${niche.gradient} opacity-50 group-hover:opacity-70 transition-opacity`} />
              
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <niche.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold">{niche.title}</h3>

                {/* Example */}
                <p className="text-muted-foreground leading-relaxed">
                  {niche.example}
                </p>

                {/* Stats */}
                <div className="pt-4 space-y-2">
                  {niche.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NicheExamples;
