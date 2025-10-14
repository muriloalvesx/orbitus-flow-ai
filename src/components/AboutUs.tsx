import { Target, Zap, Shield } from "lucide-react";
import aiEcosystemImage from "@/assets/ai-ecosystem-success.jpg";
const AboutUs = () => {
  const values = [{
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada solução é projetada para gerar crescimento mensurável e lucro real."
  }, {
    icon: Zap,
    title: "Velocidade de Implementação",
    description: "Do diagnóstico à operação completa em tempo recorde."
  }, {
    icon: Shield,
    title: "Personalização Garantida",
    description: "Nenhuma solução genérica. Cada ecossistema é único para seu negócio."
  }];
  return <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Quem Somos Nós
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50 overflow-hidden">
          {/* Image section */}
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <img src={aiEcosystemImage} alt="Ecossistema de IA para Lucro e Sucesso" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
            Somos a <span className="text-primary font-semibold">Orbitus</span>. 
            Não entregamos softwares genéricos. Somos especialistas em{" "}
            <span className="text-primary font-semibold">Engenharia de Automação e Inteligência Artificial</span>, 
            dedicados a construir Ecossistemas de IA personalizados. Nossa missão é mapear e otimizar cada ponto 
            de contato e processo da sua empresa, implementando Agentes de IA que garantem crescimento, eficiência e, 
            o mais importante, personalização humanizada.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => <div key={index} className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl bg-gradient-secondary border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutUs;