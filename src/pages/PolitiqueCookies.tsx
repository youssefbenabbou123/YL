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
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                YL Solutions
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Le site utilise des cookies pour mesurer l'audience et améliorer l'expérience utilisateur.
                </p>
                <p>
                  Lors de votre première visite, un bandeau de consentement permet d'accepter ou de refuser tout ou partie des cookies.
                </p>
                <p>
                  Vous pouvez également gérer les cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Finalités
              </h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Mesurer l'audience</li>
                <li>• Améliorer l'expérience utilisateur</li>
              </ul>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-border/50"
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
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueCookies;
