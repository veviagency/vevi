import Layout from "@/components/layout/Layout";
import WhyUs from "@/components/sections/WhyUs";
import { MessageSquare, Phone, Target, CheckCircle, Shield, Zap, Users, BarChart } from "lucide-react";

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-secondary">
        <div className="container-tight text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 animate-slide-up">
            What We Do
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            A complete system designed specifically for orthodontic clinics — from first website visit to booked consultation.
          </p>
        </div>
      </section>

      {/* OrthoBot Section */}
      <section className="section-padding bg-background" id="orthobot">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <MessageSquare className="text-primary" size={18} />
                <span className="text-sm font-medium text-primary">AI Chatbot</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                OrthoBot V1
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                An orthodontist-specific AI chatbot that doesn't rely on scripted Q&A. It chats naturally, like a real person from your community — answering patient questions, building rapport, and organically collecting contact information.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Natural Conversations</h4>
                    <p className="text-sm text-muted-foreground">
                      No robotic scripts. Conversations feel human and personalized to your clinic.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Smart Lead Capture</h4>
                    <p className="text-sm text-muted-foreground">
                      Collects name and phone number organically during conversation — no forms needed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Instant Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Lead info and conversation summary sent to your Google Sheet and email instantly.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">5-Layer Security System</h4>
                    <p className="text-sm text-muted-foreground">
                      Built-in protection against abuse, spam, and misuse to keep your clinic safe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-3xl p-8 md:p-10 border border-border">
              <div className="space-y-4">
                <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Visitor</p>
                  <p className="text-foreground">Hi! I'm interested in Invisalign for my teenager. What's the process like?</p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 ml-8">
                  <p className="text-sm text-primary mb-1">OrthoBot</p>
                  <p className="text-foreground">Great question! Teen Invisalign is one of our most popular treatments. The process typically starts with a free consultation where Dr. Smith evaluates your teen's smile and creates a custom treatment plan. Most teens love that the aligners are nearly invisible. Would you like me to share more about what to expect?</p>
                </div>
                <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
                  <p className="text-sm text-muted-foreground mb-1">Visitor</p>
                  <p className="text-foreground">Yes please! And how long does treatment usually take?</p>
                </div>
                <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 ml-8">
                  <p className="text-sm text-primary mb-1">OrthoBot</p>
                  <p className="text-foreground">Most teen cases take 12-18 months, but it varies based on complexity. Dr. Smith can give you a specific timeline during the consultation. By the way, I'd love to have our team reach out with some helpful info — could I grab your name?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OrthoCall Section */}
      <section className="section-padding bg-secondary" id="orthocall">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card rounded-3xl p-8 md:p-10 border border-border card-elevated">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Phone className="text-primary-foreground" size={28} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">OrthoCall</p>
                    <p className="text-sm text-muted-foreground">Calling new lead...</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Zap className="text-primary" size={18} />
                    <span className="text-sm text-foreground">Lead submitted form 2 minutes ago</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Phone className="text-primary" size={18} />
                    <span className="text-sm text-foreground">Automatic call initiated</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                    <Users className="text-primary" size={18} />
                    <span className="text-sm text-foreground">Natural voice conversation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <CheckCircle className="text-primary" size={18} />
                    <span className="text-sm font-medium text-primary">Consultation booked for Tuesday 2pm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Phone className="text-primary" size={18} />
                <span className="text-sm font-medium text-primary">AI Calling</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                OrthoCall
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Your AI-powered front desk. When a lead submits their information, OrthoCall automatically calls them using natural voice technology, has a real conversation, and books their first consultation.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Automatic Lead Follow-up</h4>
                    <p className="text-sm text-muted-foreground">
                      Calls leads within minutes of form submission — when interest is highest.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Human-Like Conversations</h4>
                    <p className="text-sm text-muted-foreground">
                      Powered by Google Speech technology for natural, fluid dialogue.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Smart Scheduling</h4>
                    <p className="text-sm text-muted-foreground">
                      Books appointments based on your clinic's actual availability.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-foreground">Complete Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Booking confirmation and call summary sent to your team via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="section-padding bg-background" id="marketing">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Target className="text-primary" size={18} />
                <span className="text-sm font-medium text-primary">Specialized Marketing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Marketing Built for Orthodontists
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Not generic dental marketing. Everything we create is designed specifically for orthodontic practices — the messaging, the visuals, the targeting, and the landing pages.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Meta Advertising</h4>
                  <p className="text-sm text-muted-foreground">
                    Facebook & Instagram campaigns that reach patients actively considering orthodontic treatment.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Google Ads</h4>
                  <p className="text-sm text-muted-foreground">
                    Capture high-intent searches from people looking for orthodontists in your area.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Landing Pages</h4>
                  <p className="text-sm text-muted-foreground">
                    High-converting pages designed for orthodontic patient psychology.
                  </p>
                </div>
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Orthodontic Copy</h4>
                  <p className="text-sm text-muted-foreground">
                    Messaging that speaks to patient concerns about braces, Invisalign, and treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary rounded-3xl p-8 md:p-10 border border-border">
              <div className="text-center mb-8">
                <BarChart className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  Complete Patient Journey
                </h3>
                <p className="text-sm text-muted-foreground">
                  From ad click to booked consultation
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    1
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-3 border border-border">
                    <p className="text-sm font-medium text-foreground">Patient sees targeted ad</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    2
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-3 border border-border">
                    <p className="text-sm font-medium text-foreground">Clicks to custom landing page</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    3
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-3 border border-border">
                    <p className="text-sm font-medium text-foreground">OrthoBot engages & captures info</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    4
                  </div>
                  <div className="flex-1 bg-card rounded-lg p-3 border border-border">
                    <p className="text-sm font-medium text-foreground">OrthoCall books consultation</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm">
                    ✓
                  </div>
                  <div className="flex-1 bg-accent/10 rounded-lg p-3 border border-accent/30">
                    <p className="text-sm font-medium text-foreground">New patient in your chair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <WhyUs />

    </Layout>
  );
};

export default WhatWeDo;
