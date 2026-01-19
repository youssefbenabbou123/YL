import { motion } from "framer-motion";
import {
  Home,
  Building,
  Wrench,
  Hammer,
  PaintBucket,
  HardHat
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Rénovation intérieure",
    description: "Cuisine, salle de bain, peinture, sol, électricité, plomberie...",
  },
  {
    icon: Building,
    title: "Rénovation extérieure",
    description: "Façade, toiture, terrasse, jardin, clôture, portail...",
  },
  {
    icon: Hammer,
    title: "Construction",
    description: "Extension, surélévation, maison individuelle, bâtiment...",
  },
  {
    icon: Wrench,
    title: "Dépannage",
    description: "Plomberie, électricité, serrurerie, chauffage, urgences...",
  },
  {
    icon: PaintBucket,
    title: "Aménagement",
    description: "Décoration, agencement, mobilier sur mesure, rangements...",
  },
  {
    icon: HardHat,
    title: "Tous corps d'état",
    description: "Coordination et gestion de projets complets de A à Z.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-yl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Nos domaines d'intervention
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Types de travaux concernés
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quel que soit votre projet, nous vous mettons en relation avec les professionnels
            les plus adaptés à vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated card-hover p-6 md:p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;