import TextAnimation from "@/components/ui/scroll-text";
import Squares from "@/components/Squares";

const Manifesto = () => {
    return (
        <section className="py-24 md:py-32 bg-background overflow-hidden relative">
            <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <Squares
                    speed={0.5}
                    squareSize={40}
                    direction="diagonal"
                    borderColor="#707aff"
                    hoverFillColor="#ffffff"
                />
            </div>
            <div className="container-yl relative z-10">

                {/* Section 1: Introduction */}
                <div className="min-h-[40vh] flex flex-col justify-center items-center text-center mb-20">
                    <TextAnimation
                        text="L'excellence commence ici"
                        variants={{
                            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
                            visible: {
                                filter: 'blur(0px)',
                                opacity: 1,
                                y: 0,
                                transition: { ease: 'linear', duration: 0.8 },
                            },
                        }}
                        classname="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-foreground mb-4 leading-tight tracking-tight"
                    />
                    <TextAnimation
                        as="p"
                        text="Nous redéfinissons les standards de la mise en relation travaux."
                        classname="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl"
                    />
                </div>

                {/* Section 2: Team Up */}
                <div className="min-h-[30vh] flex items-center text-left mb-20">
                    <TextAnimation
                        as="h3"
                        letterAnime={true}
                        text="Votre vision, nos experts."
                        classname="text-4xl md:text-6xl font-bold text-primary max-w-4xl leading-tight"
                        variants={{
                            hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
                            visible: {
                                filter: 'blur(0px)',
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.08,
                                },
                            },
                        }}
                    />
                </div>

                {/* Section 3: Right Aligned */}
                <div className="min-h-[30vh] flex justify-center items-center text-right mb-20">
                    <TextAnimation
                        text="Du concept à la réalité"
                        direction="right"
                        classname="text-4xl md:text-6xl font-bold text-foreground ml-auto max-w-4xl"
                    />
                </div>

                {/* Section 4: Final Statement */}
                <div className="min-h-[30vh] flex justify-center items-center text-center">
                    <TextAnimation
                        text="Rêvez grand, construisez durable."
                        direction="down"
                        lineAnime={true}
                        classname="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 max-w-5xl mx-auto leading-tight"
                    />
                </div>

            </div>
        </section>
    );
};

export default Manifesto;
