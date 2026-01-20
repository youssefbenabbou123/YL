import { motion } from "framer-motion";

const benefits = [
  {
    title: "Professionnels sélectionnés",
    description: "Un réseau construit sur la fiabilité et l'expertise.",
  },
  {
    title: "Gain de temps",
    description: "Une recherche simplifiée, sans perte de temps.",
  },
  {
    title: "Accompagnement dédié",
    description: "Un interlocuteur unique pour un suivi clair.",
  },
  {
    title: "Service gratuit",
    description: "Aucune avance de frais, aucun engagement.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-yl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Pourquoi choisir YL Solutions ?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Une approche professionnelle pour vous orienter vers les bons interlocuteurs, en toute confiance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;