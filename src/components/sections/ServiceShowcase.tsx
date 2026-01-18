import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ServiceShowcaseProps {
  leftImagePlaceholder: string;
  rightImagePlaceholder: string;
  title: string;
  description: string;
  features: string[];
}

const ServiceShowcase = ({
  leftImagePlaceholder,
  rightImagePlaceholder,
  title,
  description,
  features,
}: ServiceShowcaseProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibility, setVisibility] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is in view
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;
      
      // Start fading in when section enters viewport from bottom
      // Full visibility when section is centered
      // Start fading out when section leaves viewport from top
      
      if (sectionBottom < 0 || sectionTop > windowHeight) {
        // Completely out of view
        setVisibility(0);
      } else if (sectionTop >= 0 && sectionBottom <= windowHeight) {
        // Fully in view
        setVisibility(1);
      } else if (sectionTop < 0) {
        // Scrolling out from top
        const visiblePortion = sectionBottom / sectionHeight;
        setVisibility(Math.max(0, Math.min(1, visiblePortion)));
      } else {
        // Scrolling in from bottom
        const visiblePortion = (windowHeight - sectionTop) / sectionHeight;
        setVisibility(Math.max(0, Math.min(1, visiblePortion)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-muted/30 overflow-hidden"
      style={{
        opacity: visibility,
        transform: `translateY(${(1 - visibility) * 30}px) scale(${0.95 + visibility * 0.05})`,
        transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
      }}
    >
      {/* Navigation Path - Vertical lines on left and right with arrows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left vertical line - in the middle between edge and left photo */}
        <div className="absolute left-[8%] md:left-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/15 to-primary/20" />
        
        {/* Right vertical line - in the middle between right photo and edge */}
        <div className="absolute right-[8%] md:right-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/15 to-primary/20" />
        
        {/* Arrow on left line - before/above the photos area */}
        <div className="absolute left-[8%] md:left-[12%] top-[15%] -translate-x-1/2">
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
            <ArrowDown className="text-primary/60" size={16} />
          </div>
        </div>
        
        {/* Arrow on right line - after/below the photos area */}
        <div className="absolute right-[8%] md:right-[12%] bottom-[15%] translate-x-1/2">
          <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm">
            <ArrowDown className="text-primary/60" size={16} />
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
    </section>
  );
};

export default ServiceShowcase;
