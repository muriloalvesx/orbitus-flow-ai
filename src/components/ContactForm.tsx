import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CheckCircle2, Rocket, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    niche: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Solicitação enviada com sucesso!",
      description: "Entraremos em contato em breve para agendar sua avaliação gratuita.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      niche: "",
      message: "",
    });
  };

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

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Seu nome"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="seu@email.com"
                  className="bg-background"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="(00) 00000-0000"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Empresa *</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                  placeholder="Nome da sua empresa"
                  className="bg-background"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="niche">Nicho de Mercado *</Label>
              <Select value={formData.niche} onValueChange={(value) => setFormData({ ...formData, niche: value })}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Selecione seu nicho" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="clinica">Clínica / Saúde</SelectItem>
                  <SelectItem value="advocacia">Escritório de Advocacia</SelectItem>
                  <SelectItem value="ecommerce">E-commerce / Loja</SelectItem>
                  <SelectItem value="trafego">Gestor de Tráfego</SelectItem>
                  <SelectItem value="servicos">Serviços Profissionais</SelectItem>
                  <SelectItem value="outro">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Conte-nos sobre seus desafios</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Descreva brevemente os principais desafios da sua operação..."
                rows={5}
                className="bg-background resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" size="xl" variant="hero" className="flex-1 group">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Agendar Avaliação
              </Button>
              
              <Button 
                type="button" 
                size="xl" 
                variant="gradient" 
                className="flex-1 group"
                asChild
              >
                <a 
                  href="https://wa.me/551231974778?text=Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consultoria%20gratuita!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Direto
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Ao enviar este formulário, você concorda em ser contatado pela Orbitus Corp.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
