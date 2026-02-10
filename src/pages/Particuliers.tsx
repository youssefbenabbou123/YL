import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserCheck,
  Users,
  CalendarCheck,
  HardHat,
  KeyRound,
  ShieldCheck,
  Clock,
  Wallet,
  Eye,
  Send,
} from "lucide-react";
import heroImage from "@/assets/hero-particuliers.jpg";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Vous décrivez votre besoin",
    icon: Send,
  },
  {
    number: "02",
    title: "Nous structurons le projet",
    icon: UserCheck,
  },
  {
    number: "03",
    title: "Nous planifions les interventions",
    icon: CalendarCheck,
  },
  {
    number: "04",
    title: "Nous suivons le chantier",
    icon: HardHat,
  },
  {
    number: "05",
    title: "Vous récupérez votre bien terminé",
    icon: KeyRound,
  },
];

const engagements = [
  { icon: UserCheck, label: "Un interlocuteur unique" },
  { icon: ShieldCheck, label: "Des partenaires qualifiés" },
  { icon: Clock, label: "Des délais encadrés" },
  { icon: Wallet, label: "Un budget maîtrisé" },
  { icon: Eye, label: "Un suivi transparent" },
];

const Particuliers = () => {
  return (
    <Layout>
      {/* ═══════════════════════════════════════════════
          SECTION 1 — Hero
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            src={heroImage}
            alt="Rénovation intérieure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
          {/* Decorative blobs — hidden on mobile for performance */}
          <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="hidden md:block absolute bottom-10 left-20 w-56 h-56 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>

        <div className="container-yl relative z-10 py-20 md:py-28 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Pour les particuliers
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              Trouvez les bons intervenants pour vos travaux,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">sans avoir à les chercher</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 w-full h-3 md:h-4 bg-cyan-400/30 -z-0 origin-left rounded"
                />
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 1b — Texte d'introduction
      ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container-yl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              Réaliser des travaux demande du temps, des décisions et une coordination précise.
            </p>
            <p className="text-base text-muted-foreground/90 mb-4 leading-relaxed">
              <strong className="text-foreground">YL Solutions vous accompagne</strong> et prend en charge l'organisation complète de votre projet, jusqu'à sa finalisation.
            </p>
            <p className="text-base text-muted-foreground/80 mb-10 leading-relaxed">
              Vous échangez avec un seul interlocuteur qui suit votre chantier à chaque étape.
            </p>

            <Link to="/contact">
              <Button
                variant="cta"
                size="xl"
                className="group rounded-full text-base px-8 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — Notre rôle
      ═══════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        {/* Decorative */}
        <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/3" />

        <div className="container-yl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — big typographic statement */}
            <ScrollReveal direction="left" width="100%" delay={0}>
              <div>
                <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
                  Notre rôle
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-tight">
                  Un tiers de confiance{" "}
                  <span className="text-primary">entre vous</span> et les professionnels
                </h2>
              </div>
            </ScrollReveal>

            {/* Right — text cards */}
            <ScrollReveal direction="right" width="100%" delay={0.2}>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-4 border-primary/30">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nous ne réalisons pas directement les travaux.{" "}
                    <strong className="text-foreground">
                      Nous vous aidons à construire un projet clair
                    </strong>{" "}
                    et à vous entourer des bons intervenants.
                  </p>
                </div>
                <div className="relative pl-6 border-l-4 border-cyan-400/50">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    YL Solutions intervient comme{" "}
                    <strong className="text-foreground">
                      tiers de confiance
                    </strong>{" "}
                    entre vous et les professionnels du chantier.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — Concrètement (Timeline)
      ═══════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Decorative */}
        <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

        <div className="container-yl relative z-10">
          <ScrollReveal direction="up" width="100%">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
                Concrètement
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comment ça se passe ?
              </h2>
            </div>
          </ScrollReveal>

          {/* Timeline — Desktop: horizontal, Mobile: vertical */}
          {/* Desktop horizontal */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-[3.25rem] left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />

              <div className="grid grid-cols-5 gap-4">
                {steps.map((step, index) => (
                  <ScrollReveal
                    key={step.number}
                    direction="up"
                    delay={index * 0.12}
                    width="100%"
                  >
                    <div className="flex flex-col items-center text-center group">
                      {/* Circle with icon */}
                      <div className="relative z-10 w-[6.5rem] h-[6.5rem] rounded-full bg-white border-2 border-primary/20 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 flex items-center justify-center transition-all duration-500 mb-5">
                        <step.icon className="w-7 h-7 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                        {/* Number badge */}
                        <span className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                          {step.number}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-foreground leading-snug px-2">
                        {step.title}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-0">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.number}
                direction="left"
                delay={index * 0.1}
                width="100%"
              >
                <div className="flex items-start gap-5 relative">
                  {/* Vertical line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[1.6rem] top-14 bottom-0 w-0.5 bg-primary/15" />
                  )}
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 w-[3.2rem] h-[3.2rem] rounded-full bg-white border-2 border-primary/20 flex items-center justify-center shadow-sm">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-bold text-primary mb-1 block">
                      Étape {step.number}
                    </span>
                    <p className="text-base font-semibold text-foreground">
                      {step.title}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4 — Nos engagements
      ═══════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        {/* Decorative */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 blur-3xl" />
        <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-2xl" />

        <div className="container-yl relative z-10">
          <ScrollReveal direction="up" width="100%">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-cyan-300 tracking-widest uppercase mb-4 block">
                Ce qui nous définit
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Nos engagements
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {engagements.map((eng, index) => (
              <ScrollReveal
                key={eng.label}
                direction="up"
                delay={index * 0.1}
                width="100%"
              >
                <div className="group relative bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-sm border border-white/10 hover:border-white/25 rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                      <eng.icon className="w-6 h-6 text-cyan-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-sm font-semibold text-primary-foreground/90 group-hover:text-white transition-colors leading-snug">
                      {eng.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5 — CTA : Parlons de votre projet
      ═══════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-r from-sky-50 via-blue-100 to-blue-300">
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(14,37,68,0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-yl relative z-10">
          <ScrollReveal direction="up" width="100%">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Parlons de{" "}
                <span className="text-slate-800">votre projet</span>
              </h2>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto">
                Nous étudions chaque demande avec attention. Présentez-nous votre
                besoin pour une première analyse.
              </p>

              <Link to="/contact">
                <Button
                  variant="cta"
                  size="xl"
                  className="group rounded-full text-base px-10 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                >
                  Demander une étude personnalisée
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Particuliers;
