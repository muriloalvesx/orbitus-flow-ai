import orbitusLogo from "@/assets/orbitus-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={orbitusLogo} 
              alt="Orbitus Corp" 
              className="w-12 h-12 object-contain"
            />
            <div className="text-2xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                ORBITUS CORP
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center max-w-md">
            Ecossistemas de IA e Automação Personalizados para o Crescimento do Seu Negócio
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-primary opacity-20" />

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            <p>© {new Date().getFullYear()} Orbitus Corp. Todos os direitos reservados.</p>
            <p className="mt-2">Transformando operações em máquinas de lucro através da IA.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
