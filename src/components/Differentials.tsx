import { Sparkles, CheckCircle2 } from "lucide-react";
import automationImage from "@/assets/automation-success.jpg";

const Differentials = () => {
  const differentials = [
    "Avaliação profunda das necessidades específicas da sua operação",
    "Mapeamento completo dos fluxos de trabalho existentes",
    "Design personalizado de cada Agente de IA",
    "Integração perfeita com seus sistemas atuais",
    "Implementação gradual sem interrupção das operações",
    "Treinamento completo da equipe",
    "Suporte contínuo e otimizações baseadas em dados reais",
    "Escalabilidade garantida conforme seu negócio cresce",
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-secondary border border-primary/20 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">O Diferencial Orbitus</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Esqueça Soluções{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                "Prontas para Usar"
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sua Operação é Única
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {differentials.slice(0, 4).map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {differentials.slice(4).map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-1">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-card">
            {/* Image section */}
            <div className="relative w-full h-64 overflow-hidden">
              <img 
                src={automationImage} 
                alt="Automation Success" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-card" />
            </div>

            <p className="text-lg text-center leading-relaxed p-8">
              Não trabalhamos com pacotes fechados. Acreditamos que a verdadeira eficiência vem da{" "}
              <span className="text-primary font-semibold">personalização total</span>. 
              O escopo final dos seus Agentes de IA (como o CRM, criador de contratos ou Agente BDR) 
              será desenhado e implementado somente após uma{" "}
              <span className="text-primary font-semibold">avaliação completa e profunda</span> das 
              necessidades específicas e dos fluxos de trabalho da sua operação. Você terá exatamente a IA que precisa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
