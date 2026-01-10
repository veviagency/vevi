import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Instagram, Send, Calendar, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-slide-up">
            Let's Talk
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We respond to every message personally. No chatbots here (ironic, we know).
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="John"
                      className="bg-card"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="Smith"
                      className="bg-card"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@smithorthodontics.com"
                    className="bg-card"
                  />
                </div>

                <div>
                  <label htmlFor="practiceName" className="block text-sm font-medium text-foreground mb-2">
                    Practice Name
                  </label>
                  <Input
                    id="practiceName"
                    name="practiceName"
                    placeholder="Smith Orthodontics"
                    className="bg-card"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your practice and what you're looking for..."
                    rows={5}
                    className="bg-card resize-none"
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Other Ways to Reach Us
              </h2>

              <div className="space-y-8">
                {/* Book a Call Card */}
                <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Book a Free Consultation</h3>
                      <p className="text-primary-foreground/80 text-sm">30 minutes, no obligation</p>
                    </div>
                  </div>
                  <p className="text-primary-foreground/80 mb-4">
                    Skip the back-and-forth. Book a time that works for you and let's discuss how we can help your practice grow.
                  </p>
                  <Button variant="accent" className="w-full bg-accent text-foreground hover:bg-accent/90">
                    Schedule Your Call
                  </Button>
                </div>

                {/* Contact Details */}
                <div className="bg-secondary rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:hello@vevi.co"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Mail size={20} className="text-primary" />
                      hello@vevi.co
                    </a>
                    <a
                      href="tel:+15551234567"
                      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Phone size={20} className="text-primary" />
                      (555) 123-4567
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin size={20} className="text-primary" />
                      United States (Remote)
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-secondary rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={22} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
