import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

const CTA = ({
  title = "Ready to Grow Your Practice?",
  description = "Book a free 30-minute consultation to discuss how we can help your orthodontic clinic attract and convert more patients.",
  primaryButtonText = "Book Your Free Consultation",
  primaryButtonLink = "/contact",
}: CTAProps) => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-tight text-center">
        <Calendar className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
          {description}
        </p>
        <Button
          variant="accent"
          size="xl"
          className="bg-accent text-foreground hover:bg-accent/90"
          asChild
        >
          <a href="https://app.lemcal.com/@vevi-agency/30-minutes-demo" target="_blank" rel="noopener noreferrer">
            {primaryButtonText}
            <ArrowRight size={20} />
          </a>
        </Button>
        <p className="text-primary-foreground/60 text-sm mt-6">
          No pressure. No obligations. Just a conversation.
        </p>
      </div>
    </section>
  );
};

export default CTA;
