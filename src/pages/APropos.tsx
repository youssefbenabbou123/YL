import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { 
  Heart,
  Target,
  Users,
  Shield,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque mise en relation, en sélectionnant uniquement les professionnels les plus qualifiés et fiables.",
  },
  {
    icon: Heart,
    title: "Confiance",
    description: "La confiance est au cœur de notre approche. Nous construisons des relations durables basées sur la transparence et l'intégrité.",
  },
  {
    icon: Users,
    title: "Proximité",
    description: "Un accompagnement personnalisé et humain pour chaque projet, avec un interlocuteur dédié à votre écoute.",
  },
  {
    icon: Shield,
    title: "Fiabilité",
    description: "Nous garantissons la qualité de notre réseau en vérifiant rigoureusement chaque professionnel partenaire.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "Nous adaptons nos services aux évolutions du secteur pour vous offrir toujours la meilleure expérience.",
  },
  {
    icon: CheckCircle2,
    title: "Engagement",
    description: "Nous nous engageons à vous accompagner jusqu'à la réussite de votre projet, avec un suivi continu et réactif.",
  },
];

const APropos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-yl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">YL Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Découvrez notre histoire, nos valeurs et notre engagement pour vous accompagner dans vos projets de travaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Le mot du fondateur */}
      <section className="section-padding bg-background">
        <div className="container-yl max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 lg:p-16 bg-gradient-to-br from-background via-background to-secondary/30 border-2 border-border/60 rounded-3xl shadow-xl shadow-black/5 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Le mot du fondateur
                  </h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Bienvenue chez YL Solutions.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Fort de mon expérience dans le secteur du bâtiment et des travaux, j'ai créé YL Solutions avec une vision simple : faciliter la mise en relation entre les porteurs de projets et les professionnels qualifiés.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Nous savons combien il peut être difficile de trouver le bon professionnel pour réaliser ses travaux. Entre les recherches interminables, les doutes sur la fiabilité des intervenants et la complexité de gérer plusieurs corps de métier, beaucoup de projets restent en suspens ou se concrétisent dans des conditions non optimales.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    C'est pourquoi YL Solutions s'engage à être votre partenaire de confiance. Nous sélectionnons rigoureusement chaque professionnel de notre réseau, vérifions leurs compétences et leurs assurances, et vous accompagnons tout au long de votre projet.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Notre mission : vous faire gagner du temps, vous rassurer et vous permettre de concrétiser vos projets de travaux en toute sérénité.
                  </p>
                </div>

                <div className="mt-10 pt-8 border-t border-border/60">
                  <p className="text-foreground font-semibold text-lg mb-1">
                    Youcef Lebkiri
                  </p>
                  <p className="text-muted-foreground">
                    Fondateur de YL Solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-yl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Nos valeurs
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Les principes qui guident notre action et notre engagement au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default APropos;
