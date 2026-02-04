import { MessageSquare, Phone, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: MessageSquare,
    title: "OrthoBot V1",
    description:
      "An intelligent AI chatbot that engages website visitors naturally, answers questions about orthodontic treatment, and collects lead information organically — all while maintaining a professional, personalized conversation.",
    features: [
      "Natural, conversational AI",
      "Collects leads automatically",
      "5-layer security system",
      "Custom to your clinic",
    ],
  },
  {
    icon: Phone,
    title: "OrthoCall",
    description:
      "Your AI-powered front desk that automatically calls new leads, has natural conversations, and books consultations based on your clinic's availability. Never miss another opportunity.",
    features: [
      "Automated lead follow-up",
      "Natural voice conversations",
      "Books appointments directly",
      "Real-time notifications",
    ],
  },
  {
    icon: Target,
    title: "Specialized Marketing",
    description:
      "Meta and Google advertising designed specifically for orthodontic practices. We create high-converting campaigns and landing pages that speak directly to patients seeking orthodontic care.",
    features: [
      "Facebook & Instagram ads",
      "Google Ads management",
      "Custom landing pages",
      "Orthodontic-specific copy",
    ],
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Everything You Need to Grow
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated system handles patient engagement from first click to booked consultation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-8 card-elevated border border-border animate-slide-from-right"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="text-primary" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/what-we-do">
              Learn More About Our Services
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
