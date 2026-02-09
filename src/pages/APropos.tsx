import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import heroImage from "@/assets/apropos.png";
import founderImage from "@/assets/YOUCEF LEBKIRI.jpeg";

const values = [
  {
    title: "Sélection rigoureuse",
    description: "Nous collaborons uniquement avec des professionnels identifiés, qualifiés et assurés.",
  },
  {
    title: "Clarté",
    description: "Des échanges simples, des informations transparentes et une vision claire à chaque étape du projet.",
  },
  {
    title: "Fiabilité du réseau",
    description: "Un réseau construit dans la durée, fondé sur la qualité des interventions et le sérieux des partenaires.",
  },
  {
    title: "Accompagnement",
    description: "Un suivi structuré pour orienter chaque projet vers les interlocuteurs les plus adaptés.",
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
        <div className="container-yl max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative p-8 md:p-10 lg:p-12 bg-white rounded-3xl shadow-2xl shadow-black/20">
              {/* Guillemets décoratifs */}
              <div className="absolute top-4 left-4 text-7xl md:text-8xl text-muted-foreground/30 font-serif leading-none select-none">
                &ldquo;
              </div>
              <div className="absolute right-4 text-7xl md:text-8xl text-muted-foreground/30 font-serif leading-none select-none" style={{ bottom: '-1.5rem' }}>
                &rdquo;
              </div>
              
              <div className="relative z-10 text-center">
                {/* Titre centré */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  Le mot du fondateur
                </h2>

                {/* Texte centré */}
                <div className="space-y-6 mb-10 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
                  <p>
                    L'entreprise est née d'une volonté simple : structurer les échanges entre clients et intervenants afin de faciliter la réalisation des travaux.
                  </p>
                  
                  <p>
                    Nous collaborons avec un réseau de professionnels sélectionnés pour leur sérieux, leurs compétences et leurs assurances.
                  </p>
                  
                  <p>
                    Notre rôle est d'orienter chaque projet vers les interlocuteurs les plus adaptés et d'assurer un cadre clair tout au long du processus.
                  </p>
                  
                  <p>
                    YL Solutions s'engage à proposer un accompagnement fiable, transparent et efficace, au service de projets menés dans de bonnes conditions.
                  </p>
                  
                  <p className="font-medium text-foreground italic">
                    "Notre objectif est simple : faciliter vos démarches, sécuriser votre projet et vous permettre d'avancer avec clarté et sérénité."
                  </p>
                </div>

                {/* Photo du fondateur */}
                <div className="flex flex-col items-center mb-0">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg mb-4">
                    <img
                      src={founderImage}
                      alt="Youcef LEBKIRI"
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                  
                  {/* Nom et titre */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-foreground font-bold text-xl md:text-2xl mb-1">
                      Youcef LEBKIRI
                    </p>
                    <p className="text-primary text-base md:text-lg mb-3">
                      Fondateur de YL Solutions
                    </p>
                    <a
                      href="https://www.linkedin.com/in/youcef-lebkiri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0077b5] hover:bg-[#005885] text-white rounded-full text-sm font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
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
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                {/* Card Container */}
                <div className="relative h-full bg-white rounded-2xl p-1 overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-xl">
                  
                  {/* Animated Gradient Border Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  
                  {/* Inner Content Container */}
                  <div className="relative h-full bg-white rounded-xl p-8 md:p-10 flex flex-col justify-center border border-border/50 group-hover:border-transparent transition-colors duration-300">
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70 transition-all duration-300">
                      {value.title}
                    </h3>

                    {/* Animated Divider */}
                    <div className="w-12 h-1 bg-gradient-to-r from-primary/20 to-transparent mb-6 rounded-full group-hover:w-20 group-hover:from-primary group-hover:to-primary/50 transition-all duration-500 ease-out" />

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Corner Glow */}
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500" />
                  </div>
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
