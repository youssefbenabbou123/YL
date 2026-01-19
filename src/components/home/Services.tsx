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
    title: "Rénovation de prestige",
    description: "Transformation intégrale de vos espaces de vie. Du sol au plafond, nous sublimons votre intérieur avec des finitions d'exception.",
  },
  {
    icon: Building,
    title: "Architecture extérieure",
    description: "Valorisez votre patrimoine. Façades, toitures et aménagements paysagers pour une esthétique durable et soignée.",
  },
  {
    icon: Hammer,
    title: "Gros œuvre & maçonnerie",
    description: "L'art de bâtir. Extensions, surélévations et constructions neuves réalisées dans les règles de l'art.",
  },
  {
    icon: Wrench,
    title: "Interventions techniques",
    description: "Expertise et réactivité. Plomberie, électricité et chauffage : des solutions fiables pour votre sérénité.",
  },
  {
    icon: PaintBucket,
    title: "Agencement sur mesure",
    description: "Optimisation de l'espace. Mobilier unique et décoration personnalisée pour un intérieur qui vous ressemble.",
  },
  {
    icon: HardHat,
    title: "Pilotage de projet TCE",
    description: "Gestion clé en main. Une coordination rigoureuse de tous les corps de métier pour un chantier maîtrisé de A à Z.",
  },
];

const Services = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-yl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >


          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            L'excellence à tous les niveaux
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Une expertise globale pour répondre aux exigences les plus élevées de vos projets de construction et rénovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 overflow-hidden"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;