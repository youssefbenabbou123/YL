import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const PolitiqueConfidentialite = () => {
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
              Politique de confidentialité
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
                  Le site utilise des données personnelles pour améliorer l'expérience utilisateur et assurer le bon fonctionnement des services.
                </p>
                <p>
                  Lors de votre première visite, une information vous permet de comprendre comment vos données sont collectées et utilisées.
                </p>
                <p>
                  Vous pouvez également gérer vos données personnelles via les paramètres de votre compte ou en nous contactant directement.
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
                Données collectées
              </h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Nom et prénom</li>
                <li>• Adresse email</li>
                <li>• Numéro de téléphone</li>
                <li>• Informations de contact</li>
                <li>• Données de navigation</li>
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
                  Les données personnelles sont conservées jusqu'à 36 mois maximum après leur collecte, sauf obligation légale contraire.
                </p>
                <p>
                  Vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolitiqueConfidentialite;
