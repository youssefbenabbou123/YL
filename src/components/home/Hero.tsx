import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
    return (
        <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-background">
            {/* Background Image for Mobile */}
            <div className="absolute inset-0 lg:hidden z-0">
                <img
                    src={heroImage}
                    alt="Excellence en construction"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/70 to-black/75" />
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none hidden lg:block" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none hidden lg:block" />

            <div className="container-yl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Content */}
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 lg:bg-primary/5 backdrop-blur-sm rounded-full text-primary-foreground lg:text-primary text-xs md:text-sm font-semibold tracking-wide mb-6 md:mb-8 border border-primary-foreground/20 lg:border-primary/10">
                                <span className="relative flex h-2 w-2 flex-shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground lg:bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground lg:bg-primary"></span>
                                </span>
                                <span className="whitespace-nowrap">Apporteur d'affaires – Travaux tous corps d'état</span>
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground lg:text-black leading-[1.1] mb-4 md:mb-6 tracking-tight"
                        >
                            La mise en relation <br className="hidden sm:block" />
                            <span className="text-primary-foreground lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-primary lg:via-primary/80 lg:to-primary/60">
                                qui fait la différence
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-base md:text-lg lg:text-xl text-primary-foreground/90 lg:text-muted-foreground mb-8 md:mb-10 max-w-lg leading-relaxed font-light"
                        >
                            YL Solutions met en relation vos projets de travaux avec des professionnels qualifiés.
                            Un accompagnement simple, rapide et fiable.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-12"
                        >
                            <Link to="/particuliers">
                                <Button className="w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 bg-primary text-white rounded-full">
                                    Je suis un particulier
                                </Button>
                            </Link>
                            <Link to="/professionnels">
                                <Button 
                                    variant="outline" 
                                    className="w-full sm:w-auto h-14 px-8 text-base border-2 bg-white/90 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none hover:bg-white lg:hover:bg-secondary/50 rounded-full group hover:-translate-y-1 transition-all duration-300 text-foreground lg:text-black border-foreground/20 lg:border-border"
                                >
                                    Je suis un professionnel
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 font-medium text-primary-foreground/90 lg:text-muted-foreground text-xs sm:text-sm"
                        >
                            <div className="flex items-center whitespace-nowrap gap-1.5">
                                <CheckCircle2 className="text-primary-foreground lg:text-primary w-4 h-4 flex-shrink-0" />
                                <span>Service 100 % gratuit</span>
                            </div>
                            <div className="flex items-center whitespace-nowrap gap-1.5">
                                <CheckCircle2 className="text-primary-foreground lg:text-primary w-4 h-4 flex-shrink-0" />
                                <span>Professionnels vérifiés</span>
                            </div>
                            <div className="flex items-center whitespace-nowrap gap-1.5">
                                <CheckCircle2 className="text-primary-foreground lg:text-primary w-4 h-4 flex-shrink-0" />
                                <span>Accompagnement personnalisé</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-gray-100/50">
                            {/* Image Container with aspect ratio */}
                            <div className="aspect-[4/5] relative">
                                <img
                                    src={heroImage}
                                    alt="Excellence en construction"
                                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                            </div>
                        </div>

                        {/* Decorative BG shapes behind image */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
