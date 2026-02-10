import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import React from "react";
import heroImage from "@/assets/hero-construction.jpg";

const partners = [
  "65FC",
  "AM energies",
  "Ruler",
  "ETCE",
  "MGBAT",
  "IRG bâtiment"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Realisations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            src={heroImage}
            alt="Nos réalisations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        {/* Content */}
        <div className="container-yl relative z-10 py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.span
              variants={itemUp}
              className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mt-8 md:mt-12 mb-3"
            >
              Nos réalisations
            </motion.span>
            <motion.h1
              variants={itemUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
            >
              Découvrez nos projets
            </motion.h1>
            <motion.p
              variants={itemUp}
              className="text-lg text-primary-foreground/80 mb-8 leading-relaxed"
            >
              Une sélection de projets réalisés en collaboration avec nos partenaires.
              <br className="md:hidden" />Des interventions encadrées, structurées et menées dans le respect des engagements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-background overflow-hidden pb-8">
        <div className="container-yl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos partenaires
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nous travaillons avec des entreprises de confiance
            </p>
          </motion.div>
        </div>

        {/* Infinite Scrolling Partners - Full Width */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full overflow-hidden py-8"
        >
          <div className="flex animate-scroll-slow whitespace-nowrap">
            {/* Multiple sets for seamless infinite scroll */}
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {partners.map((partner, index) => (
                  <div
                    key={`set-${setIndex}-${index}`}
                    className="flex-shrink-0 px-8 md:px-12"
                  >
                    <div className="text-2xl md:text-3xl font-semibold text-muted-foreground hover:text-primary transition-colors duration-300">
                      {partner}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </section>

    </Layout>
  );
};

export default Realisations;
