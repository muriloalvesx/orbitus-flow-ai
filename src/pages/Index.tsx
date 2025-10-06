import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ServicesSection from "@/components/ServicesSection";
import NicheExamples from "@/components/NicheExamples";
import Differentials from "@/components/Differentials";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <ServicesSection />
      <NicheExamples />
      <Differentials />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
