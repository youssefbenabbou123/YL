import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { 
  Mail, 
  Phone, 
  Send,
  User,
  Building2,
  MessageSquare
} from "lucide-react";
import { z } from "zod";
import heroImage from "@/assets/hero-contact.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Le nom doit contenir au moins 2 caractères").max(100),
  email: z.string().trim().email("Adresse email invalide").max(255),
  phone: z.string().trim().min(10, "Numéro de téléphone invalide").max(20).optional().or(z.literal("")),
  type: z.enum(["particulier", "professionnel"]),
  message: z.string().trim().min(10, "Le message doit contenir au moins 10 caractères").max(2000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    type: "particulier",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleTypeChange = (type: "particulier" | "professionnel") => {
    setFormData((prev) => ({ ...prev, type }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Message envoyé avec succès ! Nous vous recontacterons rapidement.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "particulier",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast.error("Veuillez corriger les erreurs dans le formulaire.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Contact YL Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
        </div>

        {/* Content */}
        <div className="container-yl relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Une question, un projet ? N'hésitez pas à nous contacter. 
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-yl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="card-elevated p-6 md:p-8 h-full">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Nos coordonnées
                </h2>
                
                <div className="space-y-6">
                  <a 
                    href="mailto:youcef.lebkiri.pro@gmail.com" 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <p className="text-muted-foreground text-sm">
                        youcef.lebkiri.pro@gmail.com
                      </p>
                    </div>
                  </a>

                  <a 
                    href="tel:+33600000000" 
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Téléphone</p>
                      <p className="text-muted-foreground text-sm">
                        06 00 00 00 00
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-semibold text-foreground mb-3">
                    Horaires de disponibilité
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Du lundi au vendredi<br />
                    9h00 - 18h00
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="card-elevated p-6 md:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Envoyez-nous un message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Type Selection */}
                  <div>
                    <Label className="text-foreground mb-3 block">Vous êtes</Label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleTypeChange("particulier")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                          formData.type === "particulier"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        <User className="w-5 h-5" />
                        <span className="font-medium">Particulier</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTypeChange("professionnel")}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                          formData.type === "professionnel"
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border text-muted-foreground hover:border-primary/50"
                        }`}
                      >
                        <Building2 className="w-5 h-5" />
                        <span className="font-medium">Professionnel</span>
                      </button>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground mb-2 block">
                        Nom complet *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground mb-2 block">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-foreground mb-2 block">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 00 00 00 00"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground mb-2 block">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Décrivez votre projet ou votre demande *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins, vos attentes..."
                      rows={6}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;