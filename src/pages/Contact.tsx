import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { 
  Mail, 
  Phone, 
  User,
  Building2,
  MessageSquare,
  Clock,
  Paperclip,
  X,
  Image as ImageIcon
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  const [attachments, setAttachments] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files).filter(file => {
        // Vérifier que c'est une image et que la taille est raisonnable (max 5MB)
        const isImage = file.type.startsWith('image/');
        const isSizeValid = file.size <= 5 * 1024 * 1024; // 5MB
        return isImage && isSizeValid;
      });
      
      if (newFiles.length !== files.length) {
        toast.error("Seules les images sont acceptées (max 5MB par fichier)");
      }
      
      const updatedFiles = [...attachments, ...newFiles].slice(0, 5); // Max 5 fichiers
      setAttachments(updatedFiles);
      
      // Créer les URLs de prévisualisation
      const newUrls = newFiles.map(file => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newUrls].slice(0, 5));
    }
  };

  const removeAttachment = (index: number) => {
    // Révoquer l'URL de prévisualisation
    URL.revokeObjectURL(previewUrls[index]);
    setAttachments((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  // Nettoyer les URLs lors du démontage
  useEffect(() => {
    return () => {
      previewUrls.forEach((url) => {
        URL.revokeObjectURL(url);
      });
    };
  }, [previewUrls]);

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
      setAttachments([]);
      previewUrls.forEach((url) => URL.revokeObjectURL(url));
      setPreviewUrls([]);
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 mt-8 md:mt-12">
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
      <section className="section-padding bg-gradient-to-b from-background via-background to-secondary/30">
        <div className="container-yl max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="relative p-8 md:p-10 h-full bg-background border border-border/60 rounded-2xl shadow-xl shadow-black/5 backdrop-blur-sm overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight">
                    Nos coordonnées
                  </h2>
                  
                  <div className="space-y-6">
                    <a 
                      href="mailto:youcef.lebkiri.pro@gmail.com" 
                      className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 pt-1.5 min-w-0">
                        <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wider text-primary/70">Email</p>
                        <p className="text-foreground text-sm leading-relaxed font-medium group-hover:text-primary transition-colors break-words" style={{ fontSize: '0.823rem' }}>
                          youcef.lebkiri.pro@gmail.com
                        </p>
                      </div>
                    </a>

                    <a 
                      href="tel:+33627104458" 
                      className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 pt-1.5 min-w-0">
                        <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wider text-primary/70">Téléphone</p>
                        <p className="text-foreground text-sm leading-relaxed font-medium group-hover:text-primary transition-colors break-words">
                          06 27 10 44 58
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4 group p-4 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-0.5">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 shadow-sm">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 pt-1.5 min-w-0">
                        <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wider text-primary/70">Horaires de disponibilité</p>
                        <p className="text-foreground text-sm leading-relaxed font-medium group-hover:text-primary transition-colors break-words">
                          Du lundi au vendredi<br />
                          <span className="font-semibold">9h00 - 18h00</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-2"
            >
              <div className="relative p-8 md:p-10 border border-border/60 rounded-2xl shadow-xl shadow-black/5 backdrop-blur-sm bg-background overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                    Envoyez-nous un message
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Type Selection */}
                  <div>
                    <Label className="text-foreground mb-5 block text-sm font-semibold uppercase tracking-wider text-primary/70">
                      Vous êtes
                    </Label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleTypeChange("particulier")}
                        className={`flex-1 flex items-center justify-center gap-3 py-5 px-6 rounded-xl border-2 transition-all duration-300 ${
                          formData.type === "particulier"
                            ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-lg shadow-primary/10 scale-[1.02]"
                            : "border-border/60 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
                        }`}
                      >
                        <User className="w-5 h-5" />
                        <span className="font-semibold">Particulier</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTypeChange("professionnel")}
                        className={`flex-1 flex items-center justify-center gap-3 py-5 px-6 rounded-xl border-2 transition-all duration-300 ${
                          formData.type === "professionnel"
                            ? "border-primary bg-gradient-to-br from-primary/10 to-primary/5 text-primary shadow-lg shadow-primary/10 scale-[1.02]"
                            : "border-border/60 text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:shadow-md"
                        }`}
                      >
                        <Building2 className="w-5 h-5" />
                        <span className="font-semibold">Professionnel</span>
                      </button>
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-foreground mb-3 block text-sm font-semibold">
                        Nom complet <span className="text-primary font-bold">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className={`h-14 text-base rounded-xl border-2 ${errors.name ? "border-destructive focus:border-destructive" : "border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20"} transition-all duration-300 bg-background/50`}
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-2 font-medium">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground mb-3 block text-sm font-semibold">
                        Email <span className="text-primary font-bold">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={`h-14 text-base rounded-xl border-2 ${errors.email ? "border-destructive focus:border-destructive" : "border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20"} transition-all duration-300 bg-background/50`}
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-2 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="phone" className="text-foreground mb-3 block text-sm font-semibold">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="06 27 10 44 58"
                      className={`h-14 text-base rounded-xl border-2 ${errors.phone ? "border-destructive focus:border-destructive" : "border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20"} transition-all duration-300 bg-background/50`}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-2 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground mb-3 block text-sm font-semibold">
                      <MessageSquare className="w-4 h-4 inline mr-2 text-primary" />
                      Décrivez votre projet ou votre demande <span className="text-primary font-bold">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet, vos besoins, vos attentes..."
                      rows={8}
                      className={`text-base resize-none rounded-xl border-2 ${errors.message ? "border-destructive focus:border-destructive" : "border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20"} transition-all duration-300 bg-background/50`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-2 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* File Attachments */}
                  <div>
                    <Label htmlFor="attachments" className="text-foreground mb-3 block text-sm font-semibold">
                      <Paperclip className="w-4 h-4 inline mr-2 text-primary" />
                      Pièces jointes (photos)
                    </Label>
                    <div className="space-y-3">
                      <label
                        htmlFor="attachments"
                        className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-border/60 rounded-xl cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                      >
                        <ImageIcon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                          Cliquez pour ajouter des photos (max 5, 5MB par fichier)
                        </span>
                      </label>
                      <input
                        id="attachments"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      
                      {/* Preview des fichiers */}
                      {attachments.length > 0 && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {attachments.map((file, index) => (
                            <div
                              key={index}
                              className="relative group aspect-square rounded-lg overflow-hidden border-2 border-border/60 bg-background/50"
                            >
                              <img
                                src={previewUrls[index]}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removeAttachment(index)}
                                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-destructive text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive/90"
                                aria-label="Supprimer"
                              >
                                <X className="w-4 h-4" />
                              </button>
                              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 truncate">
                                {file.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      variant="cta"
                      size="xl"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto h-16 px-10 text-base font-semibold rounded-2xl bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary/95 hover:to-primary shadow-2xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-500 border-0 relative overflow-hidden group"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? (
                          "Envoi en cours..."
                        ) : (
                          "Envoyer"
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-yl max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
              FAQ
            </h2>
            <p className="text-muted-foreground text-lg">
              Trouvez rapidement les réponses à vos questions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  Combien coûte le service de mise en relation ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  Le service de mise en relation est <strong className="text-foreground">100% gratuit</strong> pour les particuliers. Notre rémunération provient exclusivement des professionnels avec lesquels nous travaillons. Vous ne payez rien pour être mis en relation avec des artisans qualifiés.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  Combien de temps faut-il pour recevoir une réponse ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  Nous nous engageons à vous recontacter sous <strong className="text-foreground">24 à 48 heures</strong> après réception de votre demande. Notre équipe analyse votre projet et vous propose ensuite des professionnels adaptés à vos besoins et à votre zone géographique.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  Comment sont sélectionnés les professionnels ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  Tous nos partenaires professionnels sont <strong className="text-foreground">rigoureusement sélectionnés</strong> selon plusieurs critères : entreprise régulièrement déclarée, assurance décennale et RC professionnelle à jour, expérience significative dans leur domaine, et références vérifiables. Nous garantissons ainsi la qualité de notre réseau.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  YL Solutions réalise-t-elle les travaux ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  Non, YL Solutions est un <strong className="text-foreground">apporteur d'affaires</strong>, pas une entreprise de travaux. Nous ne réalisons pas les travaux nous-mêmes. Notre rôle est de vous mettre en relation avec des professionnels qualifiés qui correspondent à vos besoins. Vous signez directement avec l'artisan choisi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  Quels types de travaux sont couverts ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  Nous couvrons <strong className="text-foreground">tous les types de travaux du bâtiment</strong> : rénovation intérieure et extérieure, aménagement, dépannage urgent, plomberie, électricité, menuiserie, peinture, carrelage, et bien d'autres. Quel que soit votre projet, nous trouvons le professionnel adapté.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  Suis-je obligé de choisir un professionnel proposé ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  Absolument pas. Vous êtes <strong className="text-foreground">libre de choisir</strong> parmi les professionnels que nous vous proposons, ou de ne pas en choisir du tout. Il n'y a aucun engagement de votre part. Vous pouvez également demander plusieurs devis pour comparer les offres.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                  Comment puis-je devenir partenaire professionnel ?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  Si vous êtes artisan ou entreprise du bâtiment, vous pouvez <strong className="text-foreground">rejoindre notre réseau</strong> en nous contactant via le formulaire en sélectionnant "Professionnel". Nous étudierons votre candidature et vous proposerons des projets correspondant à votre zone d'intervention et vos compétences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;