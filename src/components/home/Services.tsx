import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Wrench,
  Sparkles,
  TreePine,
  Shield
} from "lucide-react";

const services = [
  {
    icon: Building2,
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
    icon: Home,
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
    icon: Wrench,
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
    icon: Sparkles,
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
    icon: TreePine,
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
    icon: Shield,
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
    <section id="services" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container-yl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >


          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Tous les corps de métier, un seul point d'entrée
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            YL Solutions identifie et sélectionne les professionnels compétents pour chaque domaine d'intervention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden text-center"
            >
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-2 text-foreground w-full">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center leading-relaxed">
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;