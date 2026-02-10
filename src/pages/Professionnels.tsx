import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardList,
  CalendarRange,
  Ruler,
  Building2,
} from "lucide-react";
import heroImage from "@/assets/hero-professionnels.jpg";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const preRelationItems = [
  { icon: ClipboardList, label: "La nature des travaux" },
  { icon: Ruler, label: "Le périmètre d'intervention" },
  { icon: Building2, label: "Les contraintes du bien" },
  { icon: CalendarRange, label: "La période souhaitée" },
];

const Professionnels = () => {
  return (
    <Layout>
      {/* ═══════════════════════════════════════════════
          SECTION 1 — Hero: Cadre d'intervention
      ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            src={heroImage}
            alt="Partenariat professionnel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/60" />
          {/* Decorative shapes */}
          <div className="absolute top-32 right-20 w-80 h-80 border border-white/5 rounded-full" />
          <div className="absolute top-40 right-28 w-64 h-64 border border-white/5 rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        </div>

        <div className="container-yl relative z-10 py-20 md:py-28 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6">
              Pour les professionnels
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight">
              Cadre d'intervention{" "}
              <span className="relative inline-block">
                <span className="relative z-10">des professionnels</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 w-full h-3 md:h-4 bg-cyan-400/25 -z-0 origin-left rounded"
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
              YL Solutions intervient comme <strong className="text-foreground">intermédiaire entre le client et les entreprises</strong> réalisant les travaux.
            </p>
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              Nous préparons le projet avec le particulier avant toute prise de contact afin de clarifier la demande. Les professionnels sont sollicités uniquement lorsque le chantier correspond à leur domaine d'intervention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2 — Avant la mise en relation
      ═══════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-background overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-1/2 -translate-x-1/3" />

        <div className="container-yl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Title */}
            <ScrollReveal direction="left" width="100%">
              <div>
                <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
                  En amont
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                  Avant la{" "}
                  <span className="text-primary">mise en relation</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nous échangeons avec le client afin de définir précisément les contours du projet :
                </p>
              </div>
            </ScrollReveal>

            {/* Right — Cards grid */}
            <ScrollReveal direction="right" width="100%" delay={0.15}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {preRelationItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative bg-slate-50 hover:bg-white border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {/* Gradient top line on hover */}
                    <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all duration-500 rounded-full" />

                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center mb-4 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="font-semibold text-foreground text-sm leading-snug">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3 — Collaboration
      ═══════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 blur-3xl" />

        <div className="container-yl relative z-10">
          <ScrollReveal direction="up" width="100%">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-cyan-300 tracking-widest uppercase mb-4 block">
                Mode de fonctionnement
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Collaboration
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-white mb-3">Validation par le professionnel</h3>
              <p className="text-primary-foreground/75 leading-relaxed">
                Chaque entreprise reste <strong className="text-white">libre d'accepter ou non</strong> un chantier. Aucune obligation, aucune pression.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/[0.07] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-white mb-3">Suivi continu</h3>
              <p className="text-primary-foreground/75 leading-relaxed">
                <strong className="text-white">YL Solutions reste l'interlocuteur de suivi</strong> tout au long du projet. Un cadre clair pour toutes les parties.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3b — Un fonctionnement pensé pour les pros
      ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/2 pointer-events-none" />

        <div className="container-yl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Un fonctionnement pensé{" "}
              <span className="text-primary">pour les professionnels</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
            {[
              "Des projets correspondant à votre champ d'intervention",
              "Une demande clarifiée en amont",
              "Un interlocuteur unique pour les échanges",
              "Aucune démarche commerciale à effectuer",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25, x: i % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-start gap-4 bg-slate-50 hover:bg-white border border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-medium text-foreground leading-snug">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4 — CTA : Être contacté
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
                Être{" "}
                <span className="text-slate-800">contacté</span>
              </h2>

              <p className="text-lg text-slate-600 mb-4 leading-relaxed max-w-xl mx-auto">
                Présentez votre activité ainsi que votre secteur d'intervention.
              </p>
              <p className="text-base text-slate-600/80 mb-10 leading-relaxed max-w-xl mx-auto">
                Nous vous recontacterons lorsqu'un projet correspond à votre domaine.
              </p>

              <Link to="/contact">
                <Button
                  variant="cta"
                  size="xl"
                  className="group rounded-full text-base px-10 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                >
                  Nous contacter
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

export default Professionnels;
