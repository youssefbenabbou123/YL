import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary">
      <div className="container-yl pt-8 md:pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/LOGO YL SOLUTIONS.png" 
                alt="YL Solutions" 
                style={{
                  height: "50px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
            <p className="text-primary/80 text-sm leading-relaxed">
              Votre partenaire de confiance pour la mise en relation avec des professionnels qualifiés du bâtiment.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:translate-x-20">
            <h4 className="font-semibold text-primary mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary/80 hover:text-primary transition-colors text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/particuliers" className="text-primary/80 hover:text-primary transition-colors text-sm">
                  Particuliers
                </Link>
              </li>
              <li>
                <Link to="/professionnels" className="text-primary/80 hover:text-primary transition-colors text-sm">
                  Professionnels
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary/80 hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Nos services</h4>
            <ul className="space-y-3 text-sm text-primary/80">
              <li>Gros œuvre</li>
              <li>Second œuvre</li>
              <li>Lots techniques</li>
              <li>Finitions & équipements</li>
              <li>Extérieurs</li>
              <li>Spécifiques - sécurité - réglementaire</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:youcef.lebkiri.pro@gmail.com" 
                  className="flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>youcef.lebkiri.pro@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+33627104458" 
                  className="flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>06 27 10 44 58</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary/80 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>France</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-primary/80 text-sm">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Lundi - Vendredi : 9h00 - 18h00</span>
                </div>
              </li>
              <li>
                <a 
                  href="#" 
                  className="flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-sm"
                >
                  <Star className="w-4 h-4 flex-shrink-0" />
                  <span>Laissez-nous un avis</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary/60 text-sm">
              © {currentYear} YL Solutions. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
              <Link to="/mentions-legales" className="text-primary/60 hover:text-primary text-sm transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-primary/60 hover:text-primary text-sm transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/politique-cookies" className="text-primary/60 hover:text-primary text-sm transition-colors">
                Politique cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;