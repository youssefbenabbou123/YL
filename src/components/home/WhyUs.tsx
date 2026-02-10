import { motion } from "framer-motion";

const benefits = [
  {
    title: "Professionnels sélectionnés",
    description: "Un réseau construit sur la fiabilité et l'expertise.\nNous vérifions rigoureusement chaque partenaire.",
  },
  {
    title: "Gain de temps",
    description: "Une recherche simplifiée, sans perte de temps.\nNous trouvons pour vous les meilleurs profils.",
  },
  {
    title: "Accompagnement dédié",
    description: "Un interlocuteur unique pour un suivi clair.\nVous n'êtes jamais seul face à votre projet.",
  },
  {
    title: "Service gratuit",
    description: "Aucune avance de frais, aucun engagement.\nNotre service d'intermédiation est totalement transparent.",
  },
];

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 30,
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const WhyUs = () => {
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Dynamic background mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      {/* Decorative orbs — hidden on mobile for performance */}
      <div className="hidden md:block absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-yl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 tracking-tight">
            Pourquoi choisir YL Solutions ?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Une approche professionnelle pour vous orienter vers les bons interlocuteurs, en toute confiance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="relative h-full bg-background/5 rounded-[2rem] p-1 overflow-hidden transition-transform duration-300 md:hover:-translate-y-2 will-change-transform">
                
                {/* Animated Gradient Border Layer - hidden on mobile */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 md:group-hover:opacity-30 transition-opacity duration-500" />
                
                {/* Inner Content Container */}
                <div className="relative h-full bg-background/95 rounded-[1.8rem] p-8 md:p-10 flex flex-col justify-center border border-white/5 md:group-hover:border-transparent transition-colors duration-300">
                  
                  {/* Subtle noise texture overlay */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight transition-all duration-300">
                    {benefit.title}
                  </h3>

                  {/* Animated Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-primary/20 to-transparent mb-6 rounded-full md:group-hover:w-24 md:group-hover:from-primary md:group-hover:to-primary/50 transition-all duration-500 ease-out" />

                  {/* Description */}
                  <p className="text-muted-foreground text-lg leading-relaxed md:group-hover:text-foreground/80 transition-colors duration-300 whitespace-pre-line">
                    {benefit.description}
                  </p>

                  {/* Corner Glow - hidden on mobile */}
                  <div className="hidden md:block absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-0 md:group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
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
