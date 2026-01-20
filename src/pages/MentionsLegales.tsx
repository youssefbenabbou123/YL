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
                  Le site utilise des informations légales pour garantir la transparence et la conformité avec la réglementation en vigueur.
                </p>
                <p>
                  Les informations présentes sur ce site sont fournies à titre indicatif et peuvent être modifiées à tout moment sans préavis.
                </p>
                <p>
                  Vous pouvez consulter les mentions légales complètes via les paramètres de votre navigateur ou en nous contactant directement.
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
                Informations légales
              </h2>
              <ul className="space-y-2 text-muted-foreground leading-relaxed">
                <li>• Raison sociale : YL Solutions</li>
                <li>• Forme juridique : [À compléter]</li>
                <li>• Capital social : [À compléter]</li>
                <li>• Siège social : [À compléter]</li>
                <li>• SIRET : [À compléter]</li>
                <li>• RCS : [À compléter]</li>
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
                Responsabilité
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  YL Solutions s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site.
                </p>
                <p>
                  Toutefois, YL Solutions ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  Les informations sont conservées et mises à jour selon les obligations légales en vigueur.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MentionsLegales;
