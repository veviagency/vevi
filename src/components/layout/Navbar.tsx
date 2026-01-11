import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDark from "@/assets/logo-dark.png";
const navLinks = [{
  href: "/",
  label: "Home"
}, {
  href: "/why-vevi",
  label: "Why Vevi"
}, {
  href: "/what-we-do",
  label: "What We Do"
}, {
  href: "/contact",
  label: "Contact"
}];

interface NavbarProps {
  hideNavLinks?: boolean;
}

const Navbar = ({ hideNavLinks = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center -my-2">
            <img alt="Vevi Agency" src="/lovable-uploads/7163ca81-5ccf-4b12-8bf3-c99481453e9c.png" className="h-40 md:h-40 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          {!hideNavLinks && (
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => <Link key={link.href} to={link.href} className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  {link.label}
                </Link>)}
            </div>
          )}

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" asChild>
              <Link to="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          {!hideNavLinks && (
            <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Mobile CTA when nav links hidden */}
          {hideNavLinks && (
            <div className="md:hidden">
              <Button variant="hero" size="sm" asChild>
                <Link to="/contact">Book a Call</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {!hideNavLinks && isOpen && <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => <Link key={link.href} to={link.href} className={`text-base font-medium px-2 py-2 transition-colors ${location.pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>)}
              <Button variant="hero" className="mt-4" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Book a Call
                </Link>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;