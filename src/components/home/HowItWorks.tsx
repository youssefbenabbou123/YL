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

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-yl max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="text-5xl font-bold text-primary/20 leading-none">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
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