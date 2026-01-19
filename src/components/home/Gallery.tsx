import ScrollElement from "@/components/ui/scroll-animation";

const images = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094794329-cd1096a7a750?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=600&auto=format&fit=crop",
];

const Gallery = () => {
    return (
        <section className="section-padding bg-background">
            <div className="container-yl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
                    <p className="text-muted-foreground">Une sélection de projets menés à bien par nos partenaires.</p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <ScrollElement
                            key={index}
                            viewport={{ once: true, amount: 0.2 }}
                            className="break-inside-avoid"
                            delay={index * 0.1}
                        >
                            <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={src}
                                    alt={`Projet réalisation ${index + 1}`}
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>
                        </ScrollElement>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
