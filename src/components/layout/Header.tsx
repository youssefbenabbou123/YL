import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Building2, ChevronRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? "pt-4" : "pt-6"}`}>
        <div className="container-yl px-4">
          <div className={`mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-2 pl-5 pr-2 py-2 border ${scrolled || isMenuOpen
                ? "bg-white/90 backdrop-blur-lg shadow-lg border-white/20 w-full max-w-5xl"
                : "bg-white/80 backdrop-blur-md shadow-md border-white/10 w-[95%] max-w-6xl"
              }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group mr-6 flex-shrink-0">
              <div className="bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors flex-shrink-0">
                <Building2 className="w-4 h-4 text-primary" />
              </div>
              <span className="text-lg font-bold text-gray-900 tracking-tight whitespace-nowrap">
                YL Solutions
              </span>
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
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              {/* Search Bar */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full min-w-[250px]">
                      <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <Input
                        type="text"
                        placeholder="Que recherchez-vous ?"
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-0 px-0 bg-transparent text-sm"
                        autoFocus
                        onBlur={(e) => {
                          // Fermer seulement si on clique en dehors
                          if (!e.currentTarget.value) {
                            setTimeout(() => setIsSearchOpen(false), 200);
                          }
                        }}
                      />
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Fermer la recherche"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!isSearchOpen && (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-50 hover:bg-white text-gray-600 hover:text-primary transition-colors border border-transparent hover:border-gray-200 flex-shrink-0"
                  aria-label="Rechercher"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
              
              <a
                href="tel:+33627104458"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-primary transition-colors bg-gray-50 hover:bg-white rounded-full border border-transparent hover:border-gray-200 transition-all whitespace-nowrap flex-shrink-0"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="hidden xl:inline">Nous appeler</span>
              </a>
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
                    className="overflow-hidden flex-1"
                  >
                    <div className="flex items-center gap-2 px-3 py-2 bg-background border border-border rounded-full">
                      <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      <Input
                        type="text"
                        placeholder="Rechercher..."
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-0 px-0 bg-transparent text-sm flex-1"
                        autoFocus
                        onBlur={(e) => {
                          if (!e.currentTarget.value) {
                            setTimeout(() => setIsSearchOpen(false), 200);
                          }
                        }}
                      />
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Fermer la recherche"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {!isSearchOpen && (
                <>
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="p-2.5 bg-gray-100 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="Rechercher"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                  <a
                    href="tel:+33627104458"
                    className="p-2.5 bg-gray-100 rounded-full text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
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