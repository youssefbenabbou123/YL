import { motion } from "framer-motion";
import { MessageSquare, Search, Handshake, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Qualification du besoin",
    description: "Nous échangeons afin de comprendre précisément votre projet : nature des travaux, contraintes techniques, budget et délais.",
  },
  {
    icon: Search,
    number: "02",
    title: "Analyse et sélection",
    description: "Votre demande est étudiée avec attention afin d'identifier les corps de métier concernés et sélectionner les intervenants les plus adaptés.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Mise en relation",
    description: "Nous vous mettons en relation avec des professionnels qualifiés, sélectionnés selon leur expertise et la nature de votre projet.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Suivi personnalisé",
    description: "Nous restons disponibles pour faciliter les échanges et assurer le bon déroulement de la mise en relation.",
  },
];

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 40,
    x: i % 2 === 0 ? -30 : 30,
    scale: 0.95,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-yl max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={titleVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Les étapes de votre mise en relation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un processus simple et structuré pour vous accompagner à chaque étape de votre projet de travaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="bg-white rounded-3xl p-8 border border-border/60 shadow-sm hover:shadow-xl transition-shadow duration-300 hover:border-primary/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                    className="text-5xl font-bold text-primary/20 leading-none"
                  >
                    {step.number}
                  </motion.div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
