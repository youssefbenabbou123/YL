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
import heroImage from "@/assets/apropos.png";
import founderImage from "@/assets/YOUCEF LEBKIRI.jpeg";

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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="À propos de YL Solutions"
            className="w-full h-full object-cover object-[center_65%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        {/* Content */}
        <div className="container-yl relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
              À propos de <span className="text-primary-foreground">YL Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Découvrez notre histoire, nos valeurs et notre engagement pour vous accompagner dans vos projets de travaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Le mot du fondateur */}
      <section className="section-padding bg-background">
        <div className="container-yl max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 lg:p-16 bg-white rounded-3xl shadow-2xl shadow-black/20 overflow-hidden">
              {/* Guillemets décoratifs */}
              <div className="absolute top-4 left-4 text-7xl md:text-9xl text-muted-foreground/30 font-serif leading-none select-none">
                &ldquo;
              </div>
              <div className="absolute bottom-4 right-4 text-7xl md:text-9xl text-muted-foreground/30 font-serif leading-none select-none">
                &rdquo;
              </div>
              
              <div className="relative z-10 text-center">
                {/* Titre centré */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Le mot du fondateur
                </h2>

                {/* Texte centré */}
                <div className="space-y-6 mb-10">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Bienvenue chez YL Solutions.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Fort de mon expérience dans le secteur du bâtiment et des travaux, j'ai créé YL Solutions avec une vision simple : faciliter la mise en relation entre les porteurs de projets et les professionnels qualifiés.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Nous savons combien il peut être difficile de trouver le bon professionnel pour réaliser ses travaux. Entre les recherches interminables, les doutes sur la fiabilité des intervenants et la complexité de gérer plusieurs corps de métier, beaucoup de projets restent en suspens ou se concrétisent dans des conditions non optimales.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    C'est pourquoi YL Solutions s'engage à être votre partenaire de confiance. Nous sélectionnons rigoureusement chaque professionnel de notre réseau, vérifions leurs compétences et leurs assurances, et vous accompagnons tout au long de votre projet.
                  </p>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Notre mission : vous faire gagner du temps, vous rassurer et vous permettre de concrétiser vos projets de travaux en toute sérénité.
                  </p>
                </div>

                {/* Photo du fondateur */}
                <div className="flex flex-col items-center mb-6">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
                    <img
                      src={founderImage}
                      alt="Youcef LEBKIRI"
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                  
                  {/* Nom et titre */}
                  <p className="text-foreground font-bold text-xl md:text-2xl mb-1">
                    Youcef LEBKIRI
                  </p>
                  <p className="text-primary text-base md:text-lg">
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
                className="group relative bg-background rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 overflow-hidden max-w-sm mx-auto"
              >
                <div className="relative z-10 text-center flex flex-col items-center">
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
