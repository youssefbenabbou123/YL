import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Calendar,
  Target,
  BadgeCheck
} from "lucide-react";
import heroImage from "@/assets/hero-professionnels.jpg";

const benefits = [
  {
    icon: Users,
    title: "Clients qualifiés",
    description: "Recevez des demandes de clients ayant un réel projet de travaux, pas de simples curieux.",
  },
  {
    icon: TrendingUp,
    title: "Développez votre activité",
    description: "Concentrez-vous sur votre métier, nous nous occupons de vous trouver de nouveaux clients.",
  },
  {
    icon: Calendar,
    title: "Flexibilité",
    description: "Choisissez les projets qui vous intéressent selon votre planning et vos compétences.",
  },
  {
    icon: Target,
    title: "Ciblage précis",
    description: "Nous vous proposons uniquement des projets correspondant à votre zone géographique et spécialités.",
  },
];

const howItWorks = [
  {
    number: "01",
    title: "Rejoignez notre réseau",
    description: "Contactez-nous pour présenter votre entreprise, vos compétences et votre zone d'intervention.",
  },
  {
    number: "02",
    title: "Validation de votre profil",
    description: "Nous vérifions vos références et qualifications pour garantir la qualité de notre réseau.",
  },
  {
    number: "03",
    title: "Réception de demandes",
    description: "Recevez des demandes de clients qualifiés correspondant à vos critères.",
  },
  {
    number: "04",
    title: "Concrétisez vos projets",
    description: "Prenez contact avec les clients et développez votre chiffre d'affaires.",
  },
];

const Professionnels = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Partenariat professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        {/* Content */}
        <div className="container-yl relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium mt-8 md:mt-12 mb-3">
              Pour les professionnels
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Développez votre clientèle avec YL Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Vous êtes artisan, entreprise du bâtiment ou professionnel des travaux ? 
              Rejoignez notre réseau et recevez des demandes de clients qualifiés 
              dans votre zone d'intervention.
            </p>
            <Link to="/contact">
              <Button variant="ctaOutline" size="xl" className="group rounded-full">
                Rejoindre le réseau
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Pourquoi travailler avec nous ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un partenariat gagnant-gagnant pour développer votre activité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated card-hover p-6 md:p-8"
              >
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Comment ça fonctionne ?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un processus simple pour intégrer notre réseau de professionnels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6"
              >
                <span className="text-4xl font-bold text-primary/20 mb-4 block">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="section-padding bg-background">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Nos critères de sélection
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Pour garantir la qualité de notre réseau et la satisfaction de nos clients, 
                nous sélectionnons rigoureusement nos partenaires professionnels.
              </p>
              <ul className="space-y-4">
                {[
                  "Entreprise ou artisan régulièrement déclaré",
                  "Assurance décennale et RC professionnelle à jour",
                  "Expérience significative dans votre domaine",
                  "Références vérifiables",
                  "Engagement qualité et respect des délais",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <BadgeCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Un partenariat de confiance
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                Notre objectif : créer des relations durables avec des professionnels 
                de qualité. Nous vous accompagnons dans le développement de votre activité 
                en vous apportant des clients qualifiés.
              </p>
              <Link to="/contact">
                <Button variant="ctaOutline" size="lg" className="group rounded-full">
                  Devenir partenaire
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-sky-50 via-blue-100 to-blue-300">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Prêt à développer votre clientèle ?
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour rejoindre notre réseau de professionnels et recevoir 
              des demandes de clients qualifiés.
            </p>
            <Link to="/contact">
              <Button 
                variant="cta"
                size="xl" 
                className="group rounded-full"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Professionnels;