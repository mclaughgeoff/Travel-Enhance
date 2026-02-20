import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Destinations", href: "/#destinations" },
    { name: "Destination Builder", href: "/destination-builder" },
    { name: "FAQ", href: "/#faq" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace('/#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-border/40" 
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 z-50">
          <Anchor className={cn(
            "w-6 h-6 transition-colors", 
            isScrolled ? "text-primary" : "text-white"
          )} />
          <span className={cn(
            "font-serif text-xl font-bold tracking-tight transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}>
            BLUE LOBSTER
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent tracking-wide uppercase",
                  isScrolled ? "text-primary" : "text-white/90"
                )}
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent tracking-wide uppercase",
                  isScrolled ? "text-primary" : "text-white/90",
                  location === link.href && "text-accent"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          
          <Button 
            onClick={() => scrollToSection('/#contact')}
            className={cn(
              "font-semibold tracking-wide uppercase text-xs px-6 py-5 rounded-none transition-all duration-300",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "bg-white text-primary hover:bg-white/90"
            )}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {navLinks.map((link) => (
          link.href.startsWith("/#") ? (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-serif text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </button>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-serif text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          )
        ))}
        <Button 
          onClick={() => scrollToSection('/#contact')}
          size="lg"
          className="mt-4 rounded-none px-8"
        >
          CONTACT US
        </Button>
      </div>
    </nav>
  );
}
