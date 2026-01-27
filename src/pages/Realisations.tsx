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

const Realisations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Nos réalisations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        {/* Content */}
        <div className="container-yl relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mt-8 md:mt-12 mb-3">
              Nos réalisations
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Découvrez nos projets réalisés
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Explorez nos réalisations et découvrez la qualité de notre travail 
              à travers les projets que nous avons menés à bien avec nos partenaires.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-background overflow-hidden pb-8">
        <div className="container-yl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
        <div className="relative w-full overflow-hidden py-8">
          <div className="flex animate-scroll-slow whitespace-nowrap">
            {/* Multiple sets for seamless infinite scroll */}
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {partners.map((partner, index) => (
                  <div
                    key={`set-${setIndex}-${index}`}
                    className="flex-shrink-0 px-8 md:px-12"
                  >
                    <div className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                      {partner}
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Realisations;
