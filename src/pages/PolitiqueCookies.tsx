import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const PolitiqueCookies = () => {
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
              Politique cookies
            </h1>
          </motion.div>

          {/* Content Cards */}
          <div className="space-y-6">
            {/* Card 1 - Cookies */}
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
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le site utilise des cookies pour :
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• Mesurer l'audience</li>
                  <li>• Améliorer l'expérience utilisateur</li>
                </ul>
                <p>
                  Lors de votre première visite, un bandeau de gestion du consentement vous permet d'accepter ou de refuser tout ou partie des cookies. Vous pouvez également gérer les cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Durée de conservation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Durée de conservation
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Les cookies sont conservés jusqu'à 13 mois maximum après leur dépôt.
                </p>
              </div>
            </motion.div>

            {/* Card 4 - Sécurité */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Sécurité
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  YL Solutions met en œuvre toutes les mesures techniques et organisationnelles nécessaires pour garantir la sécurité et la confidentialité des données personnelles.
                </p>
              </div>
            </motion.div>

            {/* Card 5 - Modifications */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Modifications
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  La présente politique de confidentialité peut être modifiée à tout moment afin de garantir sa conformité avec la législation en vigueur. Nous vous conseillons de consulter régulièrement cette page.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueCookies;
