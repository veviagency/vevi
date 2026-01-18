import { ArrowDown } from "lucide-react";

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
    <div className="h-[100vh] relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-muted/30">
        {/* Navigation Path - Using CSS positioning for accuracy */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {/* Left vertical line - through center of left image (at ~16.67% of container) */}
          <div 
            className="absolute w-[3px] bg-primary/15"
            style={{
              left: 'calc(16.67% - 1.5px)',
              top: 0,
              height: '50%',
            }}
          />
          
          {/* Horizontal line - at middle */}
          <div 
            className="absolute h-[3px] bg-primary/15"
            style={{
              left: '16.67%',
              right: '16.67%',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
          
          {/* Right vertical line - through center of right image (at ~83.33% of container) */}
          <div 
            className="absolute w-[3px] bg-primary/15"
            style={{
              left: 'calc(83.33% - 1.5px)',
              top: '50%',
              height: '50%',
            }}
          />
          
          {/* First arrow - between section top and left image top (at ~12.5% height) */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: '16.67%',
              top: '12.5%',
            }}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
              <ArrowDown className="text-primary/50" size={16} />
            </div>
          </div>
          
          {/* Second arrow - between right image bottom and section bottom (at ~87.5% height) */}
          <div 
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: '83.33%',
              top: '87.5%',
            }}
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
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
      </div>
    </div>
  );
};

export default ServiceShowcase;
