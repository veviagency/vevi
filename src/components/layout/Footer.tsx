import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook, Youtube } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logoWhite} alt="Vevi Agency" className="h-40 md:h-40 w-auto" />
            </Link>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              The growth partner for independent orthodontic clinics. We combine AI automation with specialized marketing to help you attract and convert more patients.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:kursat@veviagency.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Mail size={16} />
                  kursat@veviagency.com
                </a>
              </li>
              <li>
                <a href="tel:+905010626030" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Phone size={16} />
                  +90 501 062 60 30
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
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
    </footer>;
};
export default Footer;