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
      <div className="container-yl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Les étapes de votre mise en relation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et structuré pour vous accompagner à chaque étape de votre projet de travaux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}

              <div className="text-center">
                <div className="relative inline-flex">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-primary text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;