import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Home, 
  Building, 
  Wrench, 
  PaintBucket,
  ClipboardCheck,
  Clock,
  Shield,
  Euro
} from "lucide-react";
import heroImage from "@/assets/hero-particuliers.jpg";

const benefits = [
  {
    icon: Euro,
    title: "Service 100% gratuit",
    description: "Aucun frais pour les particuliers. Notre rémunération provient des professionnels.",
  },
  {
    icon: Clock,
    title: "Réponse rapide",
    description: "Nous vous recontactons sous 24 à 48h pour analyser votre demande.",
  },
  {
    icon: Shield,
    title: "Professionnels qualifiés",
    description: "Artisans et entreprises rigoureusement sélectionnés pour leur expertise.",
  },
  {
    icon: ClipboardCheck,
    title: "Suivi personnalisé",
    description: "Un accompagnement dédié jusqu'à la réalisation de vos travaux.",
  },
];

const services = [
  { icon: Home, label: "Rénovation intérieure" },
  { icon: Building, label: "Rénovation extérieure" },
  { icon: Wrench, label: "Dépannage urgent" },
  { icon: PaintBucket, label: "Aménagement" },
];

const Particuliers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Rénovation intérieure"
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
              Pour les particuliers
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Trouvez le bon professionnel pour vos travaux
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Vous avez un projet de rénovation, d'aménagement ou de dépannage ? 
              YL Solutions vous met en relation avec des professionnels qualifiés, 
              adaptés à vos besoins et à votre budget.
            </p>
            <Link to="/contact">
              <Button variant="ctaOutline" size="xl" className="group rounded-full">
                Décrire mon projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Help */}
      <section className="section-padding bg-background">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-8 md:mt-12">
              Ce que nous faisons pour vous
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Notre rôle est simple : identifier vos besoins et vous connecter avec les bons professionnels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated card-hover p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Work */}
      <section className="section-padding bg-primary">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 mt-8 md:mt-12">
              Quels types de travaux ?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Nous couvrons l'ensemble des besoins en travaux du bâtiment.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-foreground/10"
              >
                <service.icon className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
                <span className="text-primary-foreground font-medium text-sm">
                  {service.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="section-padding bg-background">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-elevated p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-8 md:mt-12">
                  Important à savoir
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong className="text-foreground">YL Solutions est un apporteur d'affaires</strong>, 
                  pas une entreprise de travaux. Nous ne réalisons pas les travaux nous-mêmes : 
                  notre rôle est de vous mettre en relation avec des professionnels qualifiés 
                  qui correspondent à vos besoins.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cette approche vous garantit de trouver l'artisan le plus adapté à votre projet, 
                  sans avoir à chercher par vous-même parmi des centaines de prestataires.
                </p>
              </div>
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
              Prêt à lancer votre projet ?
            </h2>
            <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
              Décrivez-nous votre projet et recevez une mise en relation avec des professionnels adaptés.
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

export default Particuliers;