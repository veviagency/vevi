import { ArrowRight, Users, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-wide section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-8 animate-fade-in">
            <Award size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Exclusively for US Orthodontic Clinics
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Your Growth Partner for{" "}
            <span className="text-gradient">Independent Orthodontic Practices</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We combine AI-powered patient engagement with specialized marketing to help orthodontists with fewer than 5 locations grow their practice — without the corporate overhead.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Your Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/what-we-do">See How It Works</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Users size={20} className="text-primary" />
              <span className="text-sm font-medium">Built for Small Practices</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Zap size={20} className="text-primary" />
              <span className="text-sm font-medium">AI-Powered Automation</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Award size={20} className="text-primary" />
              <span className="text-sm font-medium">Orthodontist-Specialized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
