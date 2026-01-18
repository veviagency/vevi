import { ArrowDown, ArrowRight } from "lucide-react";

interface ServiceShowcaseProps {
  leftImagePlaceholder: string;
  rightImagePlaceholder: string;
  title: string;
  description: string;
  features: string[];
  variant?: "default" | "alternate";
}

const ServiceShowcase = ({
  leftImagePlaceholder,
  rightImagePlaceholder,
  title,
  description,
  features,
  variant = "default",
}: ServiceShowcaseProps) => {
  return (
    <section className="relative py-20 bg-muted/30 overflow-hidden">
      {/* Navigation Path SVG - Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main path: starts from top-left, goes down, turns right, goes to right side, turns down */}
          <path
            d="M 60 0 L 60 200 L 1140 200 L 1140 400"
            stroke="hsl(var(--primary) / 0.15)"
            strokeWidth="3"
            strokeDasharray="8 4"
            fill="none"
          />
          
          {/* Arrow 1 - on the vertical part (first segment) */}
          <g transform="translate(60, 100)">
            <circle cx="0" cy="0" r="16" fill="hsl(var(--primary) / 0.1)" />
            <ArrowDown className="text-primary/40" style={{ transform: 'translate(-8px, -8px)' }} size={16} />
          </g>
          
          {/* Arrow 2 - on the vertical part (third segment) */}
          <g transform="translate(1140, 300)">
            <circle cx="0" cy="0" r="16" fill="hsl(var(--primary) / 0.1)" />
            <ArrowDown className="text-primary/40" style={{ transform: 'translate(-8px, -8px)' }} size={16} />
          </g>
        </svg>
        
        {/* Arrow indicators using absolute positioning */}
        <div className="absolute left-[5%] top-[25%] -translate-x-1/2 -translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <ArrowDown className="text-primary/50" size={16} />
          </div>
        </div>
        
        <div className="absolute right-[5%] bottom-[25%] translate-x-1/2 translate-y-1/2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <ArrowDown className="text-primary/50" size={16} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 border border-border shadow-lg">
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{leftImagePlaceholder}</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
          </div>

          {/* Middle Explanation */}
          <div className="text-center px-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              {title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {description}
            </p>
            <ul className="space-y-2 text-left max-w-xs mx-auto">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-bl from-primary/5 to-primary/10 border border-border shadow-lg">
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{rightImagePlaceholder}</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-2 -left-2 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Decorative horizontal line with arrow in center */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden md:block">
        <div className="container-wide">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-primary/10" />
            <div className="mx-4 w-10 h-10 rounded-full border-2 border-primary/20 flex items-center justify-center bg-background">
              <ArrowRight className="text-primary/50" size={18} />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/10 via-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
