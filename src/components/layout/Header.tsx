import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Search, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

interface SearchResult {
  id: string;
  title: string;
  href: string;
  type: "page" | "service";
  category?: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/particuliers", label: "Particuliers" },
    { href: "/professionnels", label: "Professionnels" },
    { href: "/realisations", label: "Nos réalisations" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  // Search data
  const searchData: SearchResult[] = [
    // Pages
    { id: "page-home", title: "Accueil", href: "/", type: "page" },
    { id: "page-particuliers", title: "Particuliers", href: "/particuliers", type: "page" },
    { id: "page-professionnels", title: "Professionnels", href: "/professionnels", type: "page" },
    { id: "page-realisations", title: "Nos réalisations", href: "/realisations", type: "page" },
    { id: "page-about", title: "À propos", href: "/a-propos", type: "page" },
    { id: "page-contact", title: "Contact", href: "/contact", type: "page" },
    // Services - Gros œuvre (tous sur la page d'accueil)
    { id: "service-vrd", title: "VRD (voirie et réseaux divers)", href: "/", type: "service", category: "Gros œuvre" },
    { id: "service-maconnerie", title: "Maçonnerie / béton armé", href: "/", type: "service", category: "Gros œuvre" },
    { id: "service-couverture", title: "Couverture (tuiles, ardoises, bac acier…)", href: "/", type: "service", category: "Gros œuvre" },
    { id: "service-etancheite", title: "Étanchéité toiture terrasse", href: "/", type: "service", category: "Gros œuvre" },
    { id: "service-facade", title: "Façade / ravalement", href: "/", type: "service", category: "Gros œuvre" },
    { id: "service-ite", title: "Isolation par l'extérieur (ITE)", href: "/", type: "service", category: "Gros œuvre" },
    // Services - Second œuvre
    { id: "service-cloisons", title: "Cloisons / doublages / plafonds", href: "/", type: "service", category: "Second œuvre" },
    { id: "service-menuiserie", title: "Menuiserie intérieure/ extérieure", href: "/", type: "service", category: "Second œuvre" },
    { id: "service-serrurerie", title: "Serrurerie / métallerie", href: "/", type: "service", category: "Second œuvre" },
    { id: "service-revetements", title: "Revêtements sols et murs", href: "/", type: "service", category: "Second œuvre" },
    { id: "service-peinture", title: "Peinture / Enduits", href: "/", type: "service", category: "Second œuvre" },
    // Services - Lots techniques
    { id: "service-electricite", title: "Électricité", href: "/", type: "service", category: "Lots techniques" },
    { id: "service-plomberie", title: "Plomberie / sanitaire", href: "/", type: "service", category: "Lots techniques" },
    { id: "service-chauffage", title: "Chauffage", href: "/", type: "service", category: "Lots techniques" },
    { id: "service-clim", title: "Clim / ventilation", href: "/", type: "service", category: "Lots techniques" },
    { id: "service-gaz", title: "Gaz", href: "/", type: "service", category: "Lots techniques" },
    // Services - Finitions
    { id: "service-cuisine", title: "Cuisine (pose + raccordements)", href: "/", type: "service", category: "Finitions" },
    { id: "service-salle-bain", title: "Salle de bain (pose équipements)", href: "/", type: "service", category: "Finitions" },
    { id: "service-agencements", title: "Agencements / mobilier sur mesure", href: "/", type: "service", category: "Finitions" },
    { id: "service-miroiterie", title: "Miroiterie / vitrerie", href: "/", type: "service", category: "Finitions" },
    { id: "service-stores", title: "Stores / volets / rideaux métalliques", href: "/", type: "service", category: "Finitions" },
    { id: "service-nettoyage", title: "Nettoyage de fin de chantier", href: "/", type: "service", category: "Finitions" },
    // Services - Extérieurs
    { id: "service-paysager", title: "Aménagement paysager", href: "/", type: "service", category: "Extérieurs" },
    { id: "service-clotures", title: "Clôtures / portails", href: "/", type: "service", category: "Extérieurs" },
    { id: "service-pavage", title: "Pavage / enrobé", href: "/", type: "service", category: "Extérieurs" },
    { id: "service-terrasse", title: "Terrasse bois / terrasse béton", href: "/", type: "service", category: "Extérieurs" },
    { id: "service-piscine", title: "Piscine / SPA", href: "/", type: "service", category: "Extérieurs" },
    { id: "service-eclairage", title: "Éclairage extérieur", href: "/", type: "service", category: "Extérieurs" },
    // Services - Spécifiques
    { id: "service-desamiantage", title: "Désamiantage", href: "/", type: "service", category: "Spécifiques" },
    { id: "service-deplombage", title: "Déplombage", href: "/", type: "service", category: "Spécifiques" },
    { id: "service-demolition", title: "Démolition / curage", href: "/", type: "service", category: "Spécifiques" },
    { id: "service-ascenseur", title: "Ascenseur / monte-charge", href: "/", type: "service", category: "Spécifiques" },
    { id: "service-photovoltaique", title: "Photovoltaïque (panneaux solaires)", href: "/", type: "service", category: "Spécifiques" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Search function
  const performSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase().trim();
    const results = searchData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(lowerQuery);
      const categoryMatch = item.category?.toLowerCase().includes(lowerQuery);
      return titleMatch || categoryMatch;
    });

    // Sort: pages first, then services
    const sortedResults = results.sort((a, b) => {
      if (a.type === "page" && b.type === "service") return -1;
      if (a.type === "service" && b.type === "page") return 1;
      return a.title.localeCompare(b.title);
    });

    setSearchResults(sortedResults.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    performSearch(value);
  };

  // Handle search result selection
  const handleResultClick = (result: SearchResult) => {
    // Close search first
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    
    // Check if href contains an anchor
    const [path, anchor] = result.href.split('#');
    
    // Navigate to the page
    navigate(path);
    
    // If it's a service and we're going to home page, scroll to services section
    if (result.type === "service" && path === "/") {
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = servicesSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 300); // Wait for page to load
    }
    // If there's an anchor, scroll to it after navigation
    else if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          const headerOffset = 100; // Account for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          // Highlight the element briefly
          element.style.transition = "background-color 0.3s";
          element.style.backgroundColor = "rgba(59, 130, 246, 0.2)";
          setTimeout(() => {
            element.style.backgroundColor = "";
          }, 2000);
        }
      }, 300); // Wait for page to load
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => 
        prev < searchResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === "Enter" && searchResults.length > 0) {
      e.preventDefault();
      handleResultClick(searchResults[selectedIndex]);
    }
  };

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current && searchResults.length > 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [selectedIndex, searchResults.length]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isSearchOpen) return;
      
      const target = event.target as HTMLElement;
      const searchContainer = target.closest('[data-search-container]');
      const searchResults = target.closest('[data-search-results]');
      const searchButton = target.closest('[data-search-button]');
      
      // Don't close if clicking inside search container or results
      if (searchContainer || searchResults || searchButton) {
        return;
      }
      
      // Close if clicking outside
      setIsSearchOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    };

    if (isSearchOpen) {
      // Use a slight delay to avoid conflicts with button clicks
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 100);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isSearchOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "pt-4" : "pt-6"}`}>
        <div className="container-yl px-4">
          <div className={`mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-2 pl-5 pr-2 py-2 border ${scrolled || isMenuOpen
                ? "bg-white/90 backdrop-blur-lg shadow-lg border-white/20 w-full max-w-7xl"
                : "bg-white/80 backdrop-blur-md shadow-md border-white/10 w-[95%] max-w-7xl"
              }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center group mr-6 flex-shrink-0">
              <img 
                src="/LOGO YL SOLUTIONS.png" 
                alt="YL Solutions" 
                style={{
                  height: "32px",
                  width: "auto",
                  objectFit: "contain",
                }}
                className="md:hidden transition-opacity group-hover:opacity-80"
              />
              <img 
                src="/LOGO YL SOLUTIONS.png" 
                alt="YL Solutions" 
                style={{
                  height: "40px",
                  width: "auto",
                  objectFit: "contain",
                }}
                className="hidden md:block transition-opacity group-hover:opacity-80"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50 relative flex-shrink">
              {navLinks.map((link) => (
                <Link key={link.href} to={link.href}>
                  <div
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${isActive(link.href)
                        ? "text-white z-10"
                        : "text-gray-600 hover:text-primary hover:bg-white"
                      }`}
                  >
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full bg-primary z-[-1]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0 relative">
              {/* Search Bar - Slides down */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 z-50 w-[400px]"
                    data-search-container
                  >
                    <div className="bg-background border border-border rounded-2xl shadow-xl overflow-hidden">
                      <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                        <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <Input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Que recherchez-vous ?"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          onKeyDown={handleKeyDown}
                          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-0 px-0 bg-transparent text-sm flex-1"
                          autoFocus
                        />
                        {searchQuery && (
                          <button
                            onClick={() => {
                              setSearchQuery("");
                              setSearchResults([]);
                            }}
                            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Effacer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      {/* Search Results */}
                      {searchResults.length > 0 && (
                        <div 
                          ref={resultsRef}
                          data-search-results
                          className="max-h-[400px] overflow-y-auto"
                        >
                          {searchResults.map((result, index) => (
                            <button
                              key={result.id}
                              type="button"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleResultClick(result);
                              }}
                              className={`w-full text-left px-4 py-3 hover:bg-primary/5 transition-colors flex items-center justify-between group ${
                                index === selectedIndex ? "bg-primary/10" : ""
                              } ${index > 0 ? "border-t border-border/50" : ""}`}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                                    result.type === "page" 
                                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" 
                                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                  }`}>
                                    {result.type === "page" ? "Page" : "Service"}
                                  </span>
                                  {result.category && (
                                    <span className="text-xs text-muted-foreground truncate">
                                      {result.category}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                  {result.title}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                            </button>
                          ))}
                        </div>
                      )}
                      {searchQuery && searchResults.length === 0 && (
                        <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                          Aucun résultat trouvé pour "{searchQuery}"
                        </div>
                      )}
                      {!searchQuery && (
                        <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                          Tapez pour rechercher des pages ou services...
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button
                data-search-button
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (!isSearchOpen) {
                    setTimeout(() => searchInputRef.current?.focus(), 100);
                  } else {
                    setSearchQuery("");
                    setSearchResults([]);
                  }
                }}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 hover:bg-white text-gray-600 hover:text-primary transition-colors border border-transparent hover:border-gray-200 flex-shrink-0"
                aria-label="Rechercher"
              >
                <Search className="w-4 h-4" />
              </button>
              
              <Link to="/contact">
                <Button className="rounded-full px-5 text-sm bg-gradient-to-r from-primary to-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 border-0 h-10">
                  Demander un devis
                  <ChevronRight className="w-3.5 h-3.5 ml-1 opacity-70" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Search Bar Mobile */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden flex-1 relative"
                    data-search-container
                  >
                    <div className="bg-background border border-border rounded-full shadow-lg">
                      <div className="flex items-center gap-2 px-3 py-2">
                        <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                        <Input
                          ref={searchInputRef}
                          type="text"
                          placeholder="Rechercher..."
                          value={searchQuery}
                          onChange={handleSearchChange}
                          onKeyDown={handleKeyDown}
                          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-0 px-0 bg-transparent text-sm flex-1"
                          autoFocus
                        />
                        {searchQuery ? (
                          <button
                            onClick={() => {
                              setSearchQuery("");
                              setSearchResults([]);
                            }}
                            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Effacer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                              setSearchResults([]);
                            }}
                            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="Fermer la recherche"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      {/* Mobile Search Results */}
                      {searchResults.length > 0 && (
                        <div 
                          ref={resultsRef}
                          data-search-results
                          className="max-h-[300px] overflow-y-auto border-t border-border"
                        >
                          {searchResults.map((result, index) => (
                            <button
                              key={result.id}
                              type="button"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                handleResultClick(result);
                              }}
                              className={`w-full text-left px-4 py-3 hover:bg-primary/5 transition-colors flex items-center justify-between group ${
                                index === selectedIndex ? "bg-primary/10" : ""
                              } ${index > 0 ? "border-t border-border/50" : ""}`}
                            >
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                                    result.type === "page" 
                                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" 
                                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                  }`}>
                                    {result.type === "page" ? "Page" : "Service"}
                                  </span>
                                  {result.category && (
                                    <span className="text-xs text-muted-foreground truncate">
                                      {result.category}
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                  {result.title}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                            </button>
                          ))}
                        </div>
                      )}
                      {searchQuery && searchResults.length === 0 && (
                        <div className="px-4 py-4 text-center text-xs text-muted-foreground border-t border-border">
                          Aucun résultat
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!isSearchOpen && (
                <>
                  <button
                    data-search-button
                    onClick={() => {
                      setIsSearchOpen(true);
                      setTimeout(() => searchInputRef.current?.focus(), 100);
                    }}
                    className="p-2.5 bg-gray-100 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Rechercher"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2.5 rounded-full hover:bg-gray-100 text-gray-800 transition-colors"
                  >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-24 z-40 bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center justify-between p-4 rounded-2xl ${isActive(link.href)
                        ? "bg-primary/5 text-primary font-semibold"
                        : "hover:bg-gray-50 text-gray-600"
                      }`}
                  >
                    <span className="text-lg">{link.label}</span>
                    {isActive(link.href) && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </motion.div>
                </Link>
              ))}

              <div className="w-full h-px bg-gray-100 my-4" />

              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full h-14 rounded-2xl text-lg font-medium shadow-lg shadow-primary/20">
                  Demander un devis
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close menu when clicking outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

    </>
  );
};

export default Header;