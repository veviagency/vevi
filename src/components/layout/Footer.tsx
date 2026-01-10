import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-3xl font-serif font-bold">Vevi</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              The growth partner for independent orthodontic clinics. We combine AI automation with specialized marketing to help you attract and convert more patients.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/why-vevi" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Why Vevi
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@vevi.co"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  hello@vevi.co
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <Phone size={16} />
                  (555) 123-4567
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Vevi. All rights reserved. Built for orthodontists, by people who care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
