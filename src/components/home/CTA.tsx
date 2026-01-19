import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-yl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-elevated p-8 md:p-12 lg:p-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contactez-nous dès maintenant pour discuter de vos besoins.
            Nous vous trouverons les professionnels adaptés à votre projet.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="cta" size="xl" className="w-full sm:w-auto group">
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/particuliers">
              <Button variant="outline" size="xl" className="w-full sm:w-auto">
                En savoir plus
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;