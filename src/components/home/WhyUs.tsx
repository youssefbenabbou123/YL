import { motion } from "framer-motion";
import { Shield, Clock, Users, Award } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Professionnels vérifiés",
    description: "Nous sélectionnons rigoureusement les artisans et entreprises de notre réseau pour garantir leur qualité et leur fiabilité.",
  },
  {
    icon: Clock,
    title: "Gain de temps",
    description: "Plus besoin de chercher et comparer. Nous identifions pour vous les professionnels les plus adaptés à votre projet.",
  },
  {
    icon: Users,
    title: "Accompagnement dédié",
    description: "Un interlocuteur unique vous accompagne tout au long de votre projet, de la demande initiale à la mise en relation.",
  },
  {
    icon: Award,
    title: "Service gratuit",
    description: "Notre service de mise en relation est entièrement gratuit pour les particuliers. Aucun frais caché.",
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
            Notre mission : simplifier votre recherche de professionnels tout en garantissant qualité et fiabilité.
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
              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;