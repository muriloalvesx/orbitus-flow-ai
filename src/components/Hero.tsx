import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import orbitusLogo from "@/assets/orbitus-logo.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="animate-fade-up">
            <img 
              src={orbitusLogo} 
              alt="Orbitus Corp" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-secondary border border-primary/20" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              O Próximo Nível da Automação
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight" style={{ animationDelay: "0.2s" }}>
            Ecossistemas de IA Customizados que Transformam sua{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Operação em Máquinas de Lucro
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-up text-lg md:text-xl text-muted-foreground max-w-3xl" style={{ animationDelay: "0.3s" }}>
            De clínicas a escritórios de advocacia, criamos Agentes de IA e automações que operam como funcionários de alta performance, 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="xl" 
              variant="hero"
              onClick={scrollToForm}
              className="group"
            >
              Quero Agendar Minha Avaliação Gratuita
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-up flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>Personalização Total</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Implementação Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>Suporte Contínuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
