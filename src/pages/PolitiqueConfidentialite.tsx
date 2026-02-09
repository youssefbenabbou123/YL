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
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Introduction
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  La présente politique de confidentialité a pour but d'informer les utilisateurs du site sur la manière dont sont collectées, utilisées et protégées leurs données personnelles.
                </p>
                <p>
                  YL Solutions s'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la législation française en vigueur.
                </p>
              </div>
            </motion.div>

            {/* Responsable du traitement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Responsable du traitement
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Le responsable du traitement des données est :</p>
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">YL Solutions</p>
                  <p>1 allée Danton, 91270 Vigneux-sur-Seine</p>
                  <p>
                    Email : <a href="mailto:youcef.lebkiri.pro@gmail.com" className="text-primary hover:underline">youcef.lebkiri.pro@gmail.com</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Données collectées */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Données collectées
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Les données personnelles pouvant être collectées sur le site sont :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Nom</li>
                  <li>Prénom</li>
                  <li>Adresse mail</li>
                  <li>Téléphone</li>
                  <li>Autres informations saisies dans le champ "message" du formulaire de contact</li>
                </ul>
                <p>
                  Ces données sont fournies volontairement par l'utilisateur lors de l'envoi d'un message via le formulaire de contact. Le site peut également collecter automatiquement des données de navigation (adresses IP, données de localisation, type de navigateur, etc.) par le biais de cookies, à des fins statistiques et d'amélioration de l'expérience utilisateur.
                </p>
              </div>
            </motion.div>

            {/* Finalités du traitement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Finalités du traitement
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Les données sont collectées pour les finalités suivantes :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Répondre aux demandes envoyées via le formulaire de contact</li>
                  <li>Assurer la gestion et le bon fonctionnement du site</li>
                  <li>Analyser l'audience du site et améliorer les services proposés</li>
                </ul>
              </div>
            </motion.div>

            {/* Destinataires des données */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Destinataires des données
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Les données collectées sont destinées uniquement à YL Solutions et ne sont jamais cédées, louées ou vendues à des tiers.
                </p>
              </div>
            </motion.div>

            {/* Durée de conservation */}
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
                <p>Les données personnelles sont conservées :</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Pour les demandes de contact : pendant 12 mois à compter du dernier échange</li>
                  <li>Pour les cookies : jusqu'à 13 mois maximum après dépôt</li>
                </ul>
              </div>
            </motion.div>

            {/* Droits des utilisateurs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#021633]/10 rounded-2xl p-8 md:p-10 border border-border/30"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">
                Droits des utilisateurs
              </h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Droit d'accès</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit d'opposition</li>
                  <li>Droit à la portabilité des données</li>
                </ul>
                <p>
                  Vous pouvez exercer ces droits en envoyant un e-mail à : <a href="mailto:youcef.lebkiri.pro@gmail.com" className="text-primary hover:underline">youcef.lebkiri.pro@gmail.com</a>
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
