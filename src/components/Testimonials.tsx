import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Alberto G.",
      role: "Diretor Clínico",
      company: "Clínica São José",
      content: "A Orbitus reduziu em 40% nossas faltas. O Agente de Confirmação é incrivelmente humanizado e a reativação de pacientes está sendo um sucesso. Investimento que se pagou em 3 meses.",
      rating: 5,
    },
    {
      name: "Dra. Renata C.",
      role: "Advogada Sócia",
      company: "Carvalho & Associados",
      content: "O criador de petições e o suporte processual nos deram uma velocidade inédita. Nossos advogados focam no direito, e a IA da Orbitus cuida da gestão.",
      rating: 5,
    },
    {
      name: "Marcos P.",
      role: "CEO",
      company: "TechStore E-commerce",
      content: "A gestão de estoque e o pós-venda automatizado transformaram nossa operação. Nossos clientes estão mais engajados e as vendas aumentaram 60% em 6 meses.",
      rating: 5,
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
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center opacity-50">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
