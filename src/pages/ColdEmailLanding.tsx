import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Heart, Gift, Quote, Shield, Users, Target } from "lucide-react";
import Layout from "@/components/layout/Layout";
const ColdEmailLanding = () => {
  return <Layout hideNavLinks hideFooter>
      {/* Hero Section */}
      <section className="section-padding bg-secondary">
        <div className="container-tight text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-8">
            <Shield size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              For US Orthodontists Only
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6 animate-slide-up">
            Helping Independent Orthodontic Clinics Grow with{" "}
            <span className="text-gradient">AI & Ads</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{
          animationDelay: "0.1s"
        }}>
            We only work with orthodontists with fewer than 5 locations.
          </p>

          <Button variant="hero" size="xl" className="animate-slide-up" style={{
          animationDelay: "0.2s"
        }} asChild>
            <a href="https://app.lemcal.com/@vevi-agency/30-minutes-demo" target="_blank" rel="noopener noreferrer">
              Book Your Free 30-Minute Call
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Why We Only Work With Independent Orthodontic Clinics ? 
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The same reason you'd choose a brain surgeon over a general practitioner for neurosurgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 card-elevated border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Laser Focus
              </h3>
              <p className="text-muted-foreground">
                We don't do general dental marketing. Every strategy, every tool, every piece of copy is designed specifically for orthodontic practices.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 card-elevated border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Independent Practices
              </h3>
              <p className="text-muted-foreground">
                We understand the unique challenges of running a clinic without corporate resources — and we've built solutions specifically for you.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 card-elevated border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                Deep Expertise
              </h3>
              <p className="text-muted-foreground">
                When you only serve one type of client, you understand their world intimately. We know orthodontics like you know smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="text-primary" size={24} />
              </div>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                Why We Work Only With Orthodontists
              </span>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border card-elevated">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <Quote className="text-primary/20 mb-6" size={48} />
                  <div className="space-y-4 text-lg text-foreground leading-relaxed">
                    <p>
                      My father struggled with dental issues for years. <br />
                      It affected everything: how he ate, his confidence, and his quality of life.
                    </p>
                    <p>
                      When he finally met a dedicated orthodontic team, I watched his life change. <br />
                      He didn't just feel better, <br /> 
                      He got his joy back...
                    </p>
                    <p className="font-medium text-primary">
                      That's why we work only with orthodontists like you— <br />
                      Helping you reach and convert the patients who need your expertise.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-muted border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                    <img 
                      src="/lovable-uploads/founder-photo.png" 
                      alt="Kursat Per"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-muted-foreground text-sm">Photo</span>';
                      }}
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-bold text-foreground">Kursat Per</p>
                    <p className="text-sm text-muted-foreground">Founder, VeVi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Offer Section */}
      <section className="section-padding bg-background">
        <div className="container-tight text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
            <Gift className="text-accent" size={18} />
            <span className="text-sm font-semibold text-accent">​Our Promise </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            30 Minutes. Zero Pressure. Plus a Gift.
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            This isn't a sales call. It's a conversation to understand your practice, your goals, and your challenges.
          </p>

          <div className="max-w-2xl mx-auto bg-card rounded-3xl p-8 md:p-10 border border-border card-elevated">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground text-lg">No Pitching</h4>
                  <p className="text-muted-foreground">
                    We won't try to sell you anything on this call. Period.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground text-lg">No Selling</h4>
                  <p className="text-muted-foreground">
                    Just a genuine conversation about your practice and how you want to grow.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                <div className="text-left">
                  <h4 className="font-semibold text-foreground text-lg">30 Minutes Max</h4>
                  <p className="text-muted-foreground">
                    We respect your time. This is a focused conversation, not a marathon.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6 mt-6">
                <div className="flex items-start gap-4">
                  <Gift className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div className="text-left">
                    <h4 className="font-semibold text-foreground text-lg">
                      Plus: A Custom Landing Page (≈$750 Value)
                    </h4>
                    <p className="text-muted-foreground">
                      After our call, we'll design and gift you a custom landing page for your practice — whether we work together or not.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button variant="hero" size="xl" asChild>
              <a href="https://app.lemcal.com/@vevi-agency/30-minutes-demo" target="_blank" rel="noopener noreferrer">
                Book Your Free 30-Minute Call
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo placeholder - aligned with footer logo */}
            <div className="flex flex-col items-center gap-3 flex-shrink-0">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-card border-4 border-primary/20 flex items-center justify-center overflow-hidden card-elevated">
                <img alt="In his office, with Dr. Murat Kaptac" className="w-full h-full object-cover" onError={e => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<span class="text-primary font-semibold text-6xl">MK</span>';
              }} src="/lovable-uploads/69a88413-4232-4b17-b2c5-f0927dbec0ae.jpg" />
              </div>
              <p className="text-sm text-muted-foreground text-center italic">
                In his office, with Dr. Murat Kaptac.
              </p>
            </div>

            {/* Testimonial card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border card-elevated flex-1">
              <Quote className="text-primary/20 mb-6" size={40} />
              <blockquote className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-8 text-justify">
                Because of how competitive our market is, I've worked with many agencies and freelancers over the years. It's easy to tell the average providers from the ones who consistently go the extra mile. With VeVi, I saw that firsthand: attention to detail, constant learning (even from competitors), and a genuine client-first mindset. It was a pleasure working together.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-lg">MK</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dr. Murat Kaptac</p>
                  <p className="text-sm text-muted-foreground">Founder - MK Aligners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container-tight text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Have a Conversation?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-8">
            30 minutes. No pressure. No pitch. Just a real conversation about your practice — plus a custom landing page as our gift to you.
          </p>
          <Button variant="accent" size="xl" className="bg-accent text-foreground hover:bg-accent/90" asChild>
            <a href="https://app.lemcal.com/@vevi-agency/30-minutes-demo" target="_blank" rel="noopener noreferrer">
              Book Your Free 30-Minute Call
              <ArrowRight size={20} />
            </a>
          </Button>
          <p className="text-primary-foreground/60 text-sm mt-6">
            We only work with US orthodontists with fewer than 5 locations.
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-wide text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vevi. Built for independent orthodontists.
          </p>
        </div>
      </footer>
    </Layout>;
};
export default ColdEmailLanding;
