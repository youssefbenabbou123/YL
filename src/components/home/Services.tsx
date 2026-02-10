import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Gros œuvre",
    subtitle: "(structure)",
    items: [
      "VRD (voirie et réseaux divers)",
      "Maçonnerie / béton armé",
      "Couverture (tuiles, ardoises, bac acier…)",
      "Étanchéité toiture terrasse",
      "Façade / ravalement",
      "Isolation par l'extérieur (ITE)"
    ],
  },
  {
    title: "Second œuvre",
    subtitle: "(aménagement intérieur)",
    items: [
      "Cloisons / doublages / plafonds",
      "Menuiserie intérieure/ extérieure",
      "Serrurerie / métallerie",
      "Revêtements sols et murs",
      "Peinture / Enduits"
    ],
  },
  {
    title: "Lots techniques",
    subtitle: "(MEP)",
    items: [
      "Électricité",
      "Plomberie / sanitaire",
      "Chauffage",
      "Clim / ventilation",
      "Gaz"
    ],
  },
  {
    title: "Finitions & équipements",
    subtitle: "",
    items: [
      "Cuisine (pose + raccordements)",
      "Salle de bain (pose équipements)",
      "Agencements / mobilier sur mesure",
      "Miroiterie / vitrerie",
      "Stores / volets / rideaux métalliques",
      "Nettoyage de fin de chantier"
    ],
  },
  {
    title: "Extérieurs",
    subtitle: "",
    items: [
      "Aménagement paysager",
      "Clôtures / portails",
      "Pavage / enrobé",
      "Terrasse bois / terrasse béton",
      "Piscine / SPA",
      "Éclairage extérieur"
    ],
  },
  {
    title: "Spécifiques / sécurité",
    subtitle: "(réglementaire)",
    items: [
      "Désamiantage",
      "Déplombage",
      "Démolition / curage",
      "Ascenseur / monte-charge",
      "Photovoltaïque (panneaux solaires)"
    ],
  },
];

const Services = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section id="services" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Animated floating orbs */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-48 h-48 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container-yl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
            Tous les corps de métier, un seul point d'entrée
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto leading-relaxed">
            YL Solutions identifie et sélectionne les professionnels compétents pour chaque domaine d'intervention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="px-4 md:px-16"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="group h-full relative bg-background/10 backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden text-center border border-primary-foreground/10 flex flex-col">
                      <div className="relative z-10 flex flex-col items-center flex-grow">
                        {/* Fixed height title area so borders align across cards */}
                        <div className="mb-3 w-full h-[5.5rem] flex flex-col items-center justify-center">
                          <h3 className="text-lg md:text-xl font-extrabold text-white leading-tight">
                            {service.title}
                          </h3>
                          <span className={`text-sm md:text-base font-semibold mt-1 ${service.subtitle ? "text-primary-foreground/60" : "text-transparent select-none"}`}>
                            {service.subtitle || "\u00A0"}
                          </span>
                        </div>

                        {/* Separator line — always at the same position */}
                        <div className="w-3/4 h-0.5 bg-primary-foreground/20 mb-5" />

                        <ul className="space-y-3 text-primary-foreground/90 w-full text-base font-medium leading-relaxed flex-grow">
                          {service.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center justify-center">
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20 text-white h-12 w-12 -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20 text-white h-12 w-12 -right-12 lg:-right-16" />
          </Carousel>

          {/* Pagination dots — visible on mobile */}
          <div className="flex md:hidden justify-center items-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Aller au slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
