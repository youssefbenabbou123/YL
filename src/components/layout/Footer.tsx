import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-yl section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              YL Solutions
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Votre partenaire de confiance pour la mise en relation avec des professionnels qualifiés du bâtiment.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/particuliers" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Particuliers
                </Link>
              </li>
              <li>
                <Link to="/professionnels" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Professionnels
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Nos services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Rénovation intérieure</li>
              <li>Rénovation extérieure</li>
              <li>Travaux tous corps d'état</li>
              <li>Dépannage</li>
              <li>Aménagement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:youcef.lebkiri.pro@gmail.com" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>youcef.lebkiri.pro@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+33600000000" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>06 00 00 00 00</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>France</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} YL Solutions. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/contact" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;