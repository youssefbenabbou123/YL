import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Star } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f3f5f7] text-primary">
      <div className="container-yl pt-8 md:pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <ScrollReveal width="100%" delay={0.1}>
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
            </ScrollReveal>
          </div>

          {/* Navigation */}
          <div className="lg:translate-x-20">
            <ScrollReveal width="100%" delay={0.2}>
              <h4 className="font-semibold text-primary mb-4">Navigation</h4>
              <ul className="flex flex-col gap-[10px]">
                <li className="h-5 flex items-center">
                  <Link to="/" className="text-primary/80 hover:text-primary transition-colors text-sm">
                    Accueil
                  </Link>
                </li>
                <li className="h-5 flex items-center">
                  <Link to="/particuliers" className="text-primary/80 hover:text-primary transition-colors text-sm">
                    Particuliers
                  </Link>
                </li>
                <li className="h-5 flex items-center">
                  <Link to="/professionnels" className="text-primary/80 hover:text-primary transition-colors text-sm">
                    Professionnels
                  </Link>
                </li>
                <li className="h-5 flex items-center">
                  <Link to="/realisations" className="text-primary/80 hover:text-primary transition-colors text-sm">
                    Nos réalisations
                  </Link>
                </li>
                <li className="h-5 flex items-center">
                  <Link to="/a-propos" className="text-primary/80 hover:text-primary transition-colors text-sm">
                    À propos
                  </Link>
                </li>
                <li className="h-5 flex items-center">
                  <Link to="/contact" className="text-primary/80 hover:text-primary transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Services */}
          <div>
            <ScrollReveal width="100%" delay={0.3}>
              <h4 className="font-semibold text-primary mb-4">Nos services</h4>
              <ul className="flex flex-col gap-[10px] text-sm text-primary/80">
                <li className="h-5 flex items-center">Gros œuvre</li>
                <li className="h-5 flex items-center">Second œuvre</li>
                <li className="h-5 flex items-center">Lots techniques</li>
                <li className="h-5 flex items-center">Finitions & équipements</li>
                <li className="h-5 flex items-center">Extérieurs</li>
                <li className="h-5 flex items-center">Spécifiques - sécurité - réglementaire</li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Contact */}
          <div>
            <ScrollReveal width="100%" delay={0.4}>
              <h4 className="font-semibold text-primary mb-4">Contact</h4>
              <ul className="flex flex-col gap-[10px]">
                <li className="h-5 flex items-center">
                  <a 
                    href="mailto:youcef.lebkiri.pro@gmail.com" 
                    className="flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>youcef.lebkiri.pro@gmail.com</span>
                  </a>
                </li>
                <li className="h-5 flex items-center">
                  <a 
                    href="tel:+33627104458" 
                    className="flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>06.27.10.44.58</span>
                  </a>
                </li>
                <li className="h-5 flex items-center">
                  <div className="flex items-center gap-3 text-primary/80 text-sm">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>France</span>
                  </div>
                </li>
                <li className="h-5 flex items-center">
                  <div className="flex items-center gap-3 text-primary/80 text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>Lundi - Vendredi : 9h00 - 18h00</span>
                  </div>
                </li>
                <li className="h-5 flex items-center">
                  <a 
                    href="https://www.google.com/search?client=safari&hs=7xYU&sca_esv=4035e1ffac7aa00b&hl=fr-fr&sxsrf=ANbL-n4vHGLvcjERGT23tFpkhDcQodc1tA:1769347656182&kgmid=/g/11msryg6kj&q=Youcef+LEBKIRI+-+Apporteur+d%27affaire+BTP&shem=bdslc,ptotple,shrtsdl&shndl=30&source=sh/x/loc/act/m1/3&kgs=66ab16578941bfca&utm_source=bdslc,ptotple,shrtsdl,sh/x/loc/act/m1/3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-primary/80 hover:text-primary transition-colors text-sm"
                  >
                    <Star className="w-4 h-4 flex-shrink-0" />
                    <span>Laissez-nous un avis</span>
                  </a>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-primary text-sm font-medium">
              © {currentYear} YL Solutions. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-end">
              <Link to="/mentions-legales" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors hover:underline underline-offset-4">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors hover:underline underline-offset-4">
                Politique de confidentialité
              </Link>
              <Link to="/politique-cookies" className="text-primary hover:text-primary/80 text-sm font-medium transition-colors hover:underline underline-offset-4">
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