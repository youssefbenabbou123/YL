import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const MentionsLegales = () => {
  return (
    <Layout>
      <section className="section-padding bg-secondary/30 min-h-screen">
        <div className="container-yl max-w-4xl">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mentions légales
            </h1>
          </motion.div>

          {/* Content Cards */}
          <div className="space-y-6">
            {/* Éditeur du site */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Éditeur du site
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Le présent site est édité par :</p>
                <div className="ml-4 space-y-1">
                  <p className="font-semibold text-foreground">YL Solutions</p>
                  <p>Adresse : 1 allée Danton, 91270 Vigneux-sur-Seine</p>
                  <p>
                    Email : <a href="mailto:youcef.lebkiri.pro@gmail.com" className="text-primary hover:underline">youcef.lebkiri.pro@gmail.com</a>
                  </p>
                  <p>Le directeur de publication du site est Youcef LEBKIRI.</p>
                </div>
              </div>
            </motion.div>

            {/* Hébergement du site */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Hébergement du site
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Le site est hébergé par :</p>
                <div className="ml-4 space-y-1">
                  <p className="font-semibold text-foreground">IONOS SARL</p>
                  <p>Adresse : 7 place de la Gare, 57200 Sarreguemines, France</p>
                  <p>
                    Site web : <a href="https://www.ionos.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.ionos.fr</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Propriété intellectuelle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Propriété intellectuelle
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  L'ensemble du contenu du site (textes, images, photos, vidéos, éléments graphiques, logos, structure générale...) est protégé par la législation en vigueur sur la propriété intellectuelle.
                </p>
                <p>
                  Toute reproduction, modification ou diffusion, totale ou partielle, sans accord préalable écrit de l'éditeur est interdite.
                </p>
              </div>
            </motion.div>

            {/* Données personnelles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Données personnelles
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Des données personnelles peuvent être collectées via le formulaire de contact et par l'utilisation de cookies.
                </p>
                <p>Le responsable du traitement est :</p>
                <div className="ml-4 space-y-1">
                  <p>Youcef LEBKIRI — <a href="mailto:youcef.lebkiri.pro@gmail.com" className="text-primary hover:underline">youcef.lebkiri.pro@gmail.com</a></p>
                </div>
                <p>
                  Le traitement des données est conforme au RGPD et à la législation française.
                </p>
                <p>
                  Pour plus de détails, consultez la <Link to="/politique-confidentialite" className="text-primary hover:underline">Politique de confidentialité</Link> du site.
                </p>
                <p>Les utilisateurs disposent des droits suivants : accès, rectification, suppression, opposition, portabilité, limitation du traitement.</p>
                <p>
                  Pour exercer vos droits : <a href="mailto:youcef.lebkiri.pro@gmail.com" className="text-primary hover:underline">youcef.lebkiri.pro@gmail.com</a>
                </p>
              </div>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Cookies
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Le site utilise des cookies pour mesurer l'audience et améliorer l'expérience utilisateur.
                </p>
                <p>
                  Un bandeau de consentement permet de gérer l'utilisation des cookies.
                </p>
                <p>
                  Pour plus d'informations, consultez la <Link to="/politique-cookies" className="text-primary hover:underline">politique cookies</Link>.
                </p>
              </div>
            </motion.div>

            {/* Responsabilité */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Responsabilité
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>L'éditeur ne saurait être tenu responsable :</p>
                <ul className="space-y-2 ml-4">
                  <li>• d'interruptions temporaires du site,</li>
                  <li>• de dysfonctionnements indépendants de sa volonté,</li>
                  <li>• de tout dommage indirect lié à l'utilisation du site.</li>
                </ul>
              </div>
            </motion.div>

            {/* Liens externes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Liens externes
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Le site peut contenir des liens vers des sites tiers.
                </p>
                <p>
                  YL Solutions décline toute responsabilité concernant leur contenu ou leur politique de confidentialité.
                </p>
              </div>
            </motion.div>

            {/* Modification des mentions légales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Modification des mentions légales
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Les présentes mentions légales peuvent être modifiées à tout moment pour rester conformes à la réglementation.
                </p>
              </div>
            </motion.div>

            {/* Droit applicable */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Droit applicable
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Les présentes mentions légales sont régies par le droit français.
                </p>
                <p>
                  En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </div>
            </motion.div>

            {/* Crédits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Crédits
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Site web conçu et développé par Melissa BONNET – Auto-entrepreneure
                </p>
                <div className="ml-4 space-y-1">
                  <p>SIRET : 934 160 318 00010</p>
                  <p>
                    Site : <a href="https://melissabonnet.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://melissabonnet.fr</a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
