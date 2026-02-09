import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Gros œuvre (structure)",
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
    title: "Second œuvre (aménagement intérieur)",
    items: [
      "Cloisons / doublages / plafonds",
      "Menuiserie intérieure/ extérieure",
      "Serrurerie / métallerie",
      "Revêtements sols et murs",
      "Peinture / Enduits"
    ],
  },
  {
    title: "Lots techniques (MEP)",
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
    title: "Spécifiques / sécurité / réglementaire",
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
  return (
    <section id="services" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-yl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="px-4 md:px-16"
        >
          <Carousel
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
                        <div className="mb-6 w-full">
                          <h3 className="text-lg md:text-xl font-extrabold text-white mb-2 pb-3 border-b-2 border-primary-foreground/20 inline-block px-4">
                            {service.title}
                          </h3>
                        </div>

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
        </motion.div>
      </div>
    </section>
  );
};

export default Services;