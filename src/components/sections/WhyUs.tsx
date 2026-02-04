import { CheckCircle, Building2, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface WhyUsProps {
  variant?: "default" | "light";
}
const WhyUs = ({
  variant = "default"
}: WhyUsProps) => {
  return <section className={`section-padding ${variant === "light" ? "bg-background" : "bg-secondary"}`}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Why We Only Work With Independent Orthodontists
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Just as a brain surgeon specializes rather than performing general surgery, we've chosen to focus exclusively on one thing:
              <br />
              <span className="font-bold">Helping independent orthodontic clinics grow.</span>
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Fewer Than 5 Locations</h4>
                  <p className="text-muted-foreground text-sm">
                    We understand the unique challenges of running a local practice without corporate resources.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Not DSOs or Corporate Chains</h4>
                  <p className="text-muted-foreground text-sm">
                    Our strategies are designed for orthodontists who own and operate their own clinics.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">US-Based Practices Only</h4>
                  <p className="text-muted-foreground text-sm">
                    Deep understanding of the US orthodontic market and patient expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center lg:justify-start">
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/what-we-do">
                  How We Do It
                  <ArrowRight size={20} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-card rounded-3xl p-8 md:p-12 pb-16 md:pb-20 card-elevated border border-border">
              <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8">
                "We don't try to be everything to everyone. We chose to become experts in one thing — helping orthodontists like you grow your practice with the same care you give your patients."
              </blockquote>
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-primary/20">
                  <img src="/lovable-uploads/founder-photo.png" alt="Kursat Per" className="w-full h-full object-cover" onError={e => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = '<span class="text-muted-foreground text-sm">Photo</span>';
                }} />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg md:text-xl">Kursat Per</p>
                  <p className="text-muted-foreground text-sm">Founder, VeVi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyUs;