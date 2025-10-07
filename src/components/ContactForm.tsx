import { Button } from "@/components/ui/button";
import { Rocket, MessageCircle, Sparkles } from "lucide-react";

const ContactForm = () => {

  return (
    <section id="contact-form" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-secondary border border-primary/20 mb-4">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Pare de Perder Tempo. Comece a Escalar.</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            Agende sua{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Avaliação Gratuita
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você busca um Ecossistema de IA que realmente funciona para o seu nicho, o primeiro passo é nos conhecer. 
            Descubra o mapa da automação perfeita para o seu negócio.
          </p>
        </div>

        <div className="bg-card rounded-2xl p-12 md:p-16 shadow-card border border-border text-center space-y-8">
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold max-w-2xl">
              Pronto para transformar sua operação em uma máquina de lucro?
            </h3>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Fale diretamente com nossos especialistas via WhatsApp e agende sua consultoria gratuita agora mesmo!
            </p>

            <Button 
              size="xl" 
              variant="gradient" 
              className="group text-lg px-12 py-8 h-auto"
              asChild
            >
              <a 
                href="https://wa.me/551231974778?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consultoria%20gratuita!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Agendar uma consultoria gratuita!
              </a>
            </Button>

            <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Resposta Rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Sem Compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span>100% Gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
