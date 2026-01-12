import Layout from "@/components/layout/Layout";
import { Heart, Quote } from "lucide-react";

const WhyVevi = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-slide-up">
            Why We Chose Orthodontics
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            This isn't just a business decision. It's personal.
          </p>
        </div>
      </section>

      {/* Personal Story */}
      <section className="section-padding bg-background">
        <div className="container-tight">
          <div className="max-w-3xl mx-auto">
            {/* Story Content */}
            <div className="bg-card rounded-3xl p-8 md:p-12 card-elevated border border-border mb-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="text-primary" size={24} />
                </div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  A Personal Story
                </span>
              </div>

              <div className="space-y-6 text-lg text-foreground leading-relaxed">
                <p>
                  For over three years, I watched my father struggle with severe dental problems. What started as manageable discomfort became a daily battle that affected everything — his ability to eat, his confidence in social situations, his quality of life.
                </p>
                <p>
                  Eventually, he had to have a tooth removed and replaced with an implant. It was a difficult journey, but what made the difference was a small group of dedicated orthodontists and dental specialists who truly cared about his wellbeing.
                </p>
                <p>
                  These weren't corporate practitioners rushing through appointments. They were skilled professionals who took the time to understand his situation, explain every option, and provide care that went beyond the clinical.
                </p>
                <p className="font-medium text-primary">
                  That experience changed how I saw orthodontists. Not as "just dentists," but as specialists who genuinely transform lives.
                </p>
              </div>
            </div>

            {/* Video */}
            <div className="rounded-2xl overflow-hidden mb-12 border border-border">
              <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/ipZ_die5N7Q"
                  title="Why I Started Vevi"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Mission Statement */}
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                To help independent orthodontists — the ones who still take the time to truly care for their patients — reach more people who need their expertise. Because every practice like yours deserves to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What We Believe
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-primary">01</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Specialization Matters
              </h3>
              <p className="text-muted-foreground">
                The best results come from focused expertise, not generalist approaches.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-primary">02</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Technology Should Serve People
              </h3>
              <p className="text-muted-foreground">
                AI and automation should enhance human connection, not replace it.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-serif font-bold text-primary">03</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Independent Practices Deserve Support
              </h3>
              <p className="text-muted-foreground">
                Small clinics provide care that corporate chains often can't match.
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default WhyVevi;
