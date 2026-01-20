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
import { sendContactEmail } from "@/lib/resend";

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
  const [activeFaqTab, setActiveFaqTab] = useState<"particuliers" | "entreprises" | "prestataires">("particuliers");

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
      
      // Send email via Resend
      const result = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        type: formData.type,
        message: formData.message,
        attachments: attachments.length > 0 ? attachments : undefined,
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to send email');
      }
      
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
      } else {
        console.error('Error submitting form:', error);
        toast.error(error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi du message.");
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
            className="w-full h-full object-cover object-[center_30%]"
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
              Pour toute demande d'information ou de mise en relation, notre équipe reste à votre écoute et vous répond dans les meilleurs délais.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 tracking-tight text-center">
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
                        <p className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wider text-primary/70">Horaires</p>
                        <p className="text-foreground text-sm leading-relaxed font-medium group-hover:text-primary transition-colors break-words">
                          Du lundi au vendredi<br />
                          9h00 - 18h00
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
                <div className="mb-12 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                    Formulaire de contact
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    Notre équipe est à votre disposition pour toute demande d'information ou de mise en relation.
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
                        <span className="font-semibold">Un particulier</span>
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
                        <span className="font-semibold">Un professionnel</span>
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
                        placeholder=""
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
                        placeholder=""
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
                        placeholder=""
                      className={`h-14 text-base rounded-xl border-2 ${errors.phone ? "border-destructive focus:border-destructive" : "border-border/60 focus:border-primary focus:ring-2 focus:ring-primary/20"} transition-all duration-300 bg-background/50`}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm mt-2 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message" className="text-foreground mb-3 block text-sm font-semibold">
                      Décrivez votre projet ou votre demande <span className="text-primary font-bold">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=""
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

                  <div className="pt-6 flex justify-center">
                    <Button
                      type="submit"
                      variant="cta"
                      size="xl"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto h-16 px-10 text-base font-semibold rounded-full bg-gradient-to-r from-primary via-primary to-primary/90 hover:from-primary/95 hover:via-primary/95 hover:to-primary shadow-2xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-500 border-0 relative overflow-hidden group"
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
            <p className="text-muted-foreground text-lg mb-8">
              Retrouvez les réponses aux questions les plus courantes
            </p>
            
            {/* Segmented Control */}
            <div className="inline-flex items-center justify-center rounded-full bg-muted p-1 gap-1">
              <button
                onClick={() => setActiveFaqTab("particuliers")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFaqTab === "particuliers"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Particuliers
              </button>
              <button
                onClick={() => setActiveFaqTab("entreprises")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFaqTab === "entreprises"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Entreprises
              </button>
              <button
                onClick={() => setActiveFaqTab("prestataires")}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFaqTab === "prestataires"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Prestataires
              </button>
            </div>
          </motion.div>

          <div className="space-y-12">
            {/* Particuliers — Demande de mise en relation pour des travaux */}
            {activeFaqTab === "particuliers" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-6 text-center">
                Demande de mise en relation pour des travaux
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="particulier-1" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment effectuer une demande de travaux ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    La demande s'effectue directement via notre formulaire en ligne. Après réception, nous vous contactons afin de valider les informations transmises et de qualifier précisément votre besoin.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-2" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    La demande est-elle gratuite ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Oui, le dépôt de demande est entièrement gratuit et ne vous engage à rien.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-3" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Quels types de travaux pouvez-vous traiter ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    YL Solutions intervient sur l'ensemble des travaux tous corps d'état, qu'il s'agisse de rénovation intérieure ou extérieure, de travaux techniques ou d'aménagement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-4" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment les professionnels sont-ils sélectionnés ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Nous collaborons avec des entreprises partenaires identifiées pour leur spécialité, leur sérieux et leur fiabilité. Selon les situations, les documents administratifs et assurances professionnelles peuvent être vérifiés.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-5" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Sous quel délai suis-je recontacté(e) ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Nous revenons vers vous dans les meilleurs délais après la réception de votre demande afin d'assurer une prise en charge rapide.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-6" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Suis-je engagé(e) après le dépôt de ma demande ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Non. Le dépôt d'une demande n'entraîne aucun engagement et vous restez entièrement libre d'accepter ou non les propositions qui vous sont faites.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-7" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment est établi le devis ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Le devis est réalisé directement par le professionnel après analyse de votre projet. Selon la nature des travaux, une visite sur site peut être nécessaire afin d'affiner le chiffrage.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-8" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment s'effectue le paiement des travaux ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Le règlement s'effectue directement auprès du prestataire, conformément aux modalités définies dans le devis, telles que l'acompte, les situations intermédiaires ou le solde final.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="particulier-9" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Que faire en cas de difficulté pendant le chantier ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    En cas de besoin, vous pouvez nous contacter. Nous intervenons alors en tant qu'intermédiaire afin de faciliter les échanges et contribuer à la résolution de la situation.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
            )}

            {/* Entreprises — Confier des chantiers */}
            {activeFaqTab === "entreprises" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-6 text-center">
                Confier des chantiers
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="entreprise-1" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Quel est le rôle de YL Solutions ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    YL Solutions intervient comme apporteur d'affaires et facilite la mise en relation entre donneurs d'ordre et entreprises qualifiées afin de sécuriser la recherche de prestataires.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entreprise-2" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Quels types de chantiers pouvez-vous traiter ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Nous intervenons sur tous types de chantiers et tous corps d'état, sur l'ensemble du territoire national, sous réserve de la disponibilité de notre réseau de partenaires.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entreprise-3" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Quel est le coût de votre service ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Le service est entièrement gratuit pour les donneurs d'ordre. Notre rémunération provient exclusivement des entreprises partenaires sous forme de commission d'apport d'affaires, sans aucun surcoût.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entreprise-4" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Pouvez-vous répondre à des demandes urgentes ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Oui, selon la localisation du chantier et la disponibilité des entreprises partenaires.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entreprise-5" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Qui assure le suivi du chantier ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Le mode de suivi est défini au cas par cas. Selon votre organisation interne, le pilotage peut être assuré directement par vos équipes ou faire l'objet d'un suivi partagé.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entreprise-6" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment fonctionne la facturation ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    La facturation peut être établie soit directement entre le prestataire et le client final, soit selon votre organisation interne. Nous adaptons notre fonctionnement à vos contraintes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entreprise-7" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment les prestataires sont-ils sélectionnés ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Les entreprises partenaires sont sélectionnées en fonction de leur spécialité, de leur réactivité et de la qualité de leurs interventions. Il s'agit majoritairement de partenaires avec lesquels nous avons déjà collaboré.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="entreprise-8" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Pouvez-vous gérer plusieurs chantiers simultanément ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Oui, notre organisation nous permet d'accompagner des volumes réguliers et de répondre à des besoins multi-chantiers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
            )}

            {/* Prestataires — Recevoir des opportunités de chantiers */}
            {activeFaqTab === "prestataires" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-sm font-medium text-muted-foreground mb-6 text-center">
                Recevoir des opportunités de chantiers
              </h3>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="prestataire-1" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment devenir partenaire YL Solutions ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Vous pouvez déposer votre candidature via le formulaire dédié. Chaque profil est étudié selon l'activité exercée, la zone d'intervention et les capacités opérationnelles.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prestataire-2" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    L'inscription est-elle payante ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Non, l'inscription est gratuite et sans engagement.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prestataire-3" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Quels types de chantiers puis-je recevoir ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Les opportunités proposées sont exclusivement ciblées en fonction de votre spécialité, de votre secteur géographique et de vos disponibilités.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prestataire-4" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment suis-je sélectionné(e) pour un chantier ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    La sélection s'effectue selon l'adéquation entre votre activité, la nature du chantier, la localisation et les contraintes opérationnelles du projet.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prestataire-5" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Suis-je libre d'accepter ou de refuser une opportunité ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Chaque proposition de chantier est transmise à titre indicatif et vous restez libre de l'accepter ou de la refuser sans aucune obligation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prestataire-6" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    YL Solutions intervient-elle dans la réalisation des travaux ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    Nous n'intervenons à aucun moment dans l'exécution des travaux. La relation contractuelle, la réalisation du chantier et la facturation relèvent exclusivement de l'entreprise partenaire.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="prestataire-7" className="border-2 border-border/60 rounded-xl px-6 bg-gradient-to-br from-background to-background/50 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                  <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]]:text-primary transition-colors">
                    Comment fonctionne la rémunération de YL Solutions ?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    YL Solutions intervient en tant qu'apporteur d'affaires et est rémunérée par une commission convenue avec l'entreprise partenaire, uniquement en cas de mise en relation aboutie.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;