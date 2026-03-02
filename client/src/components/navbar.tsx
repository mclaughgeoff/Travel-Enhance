import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/8_1772409457438.png";

const destinations = [
  { name: "Newport", href: "/newport" },
  { name: "Vermont", href: "/vermont" },
  { name: "Nantucket", href: "/nantucket" },
  { name: "Maine", href: "/maine" },
  { name: "Boston", href: "/boston" },
  { name: "Destination Quiz", href: "/destination-builder" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestDropdownOpen, setIsDestDropdownOpen] = useState(false);
  const [isMobileDestOpen, setIsMobileDestOpen] = useState(false);
  const [location] = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDestDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = cn(
    "text-sm font-medium transition-colors hover:text-accent tracking-wide uppercase",
    isScrolled ? "text-primary" : "text-white/90"
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Pre-nav banner */}
      <Link
        href="/destination-builder"
        data-testid="banner-itinerary-assessment"
        className="bg-[#406b8c] text-white text-center text-xs tracking-widest uppercase font-semibold py-2.5 px-4 hover:bg-[#406b8c]/90 transition-colors"
      >
        Take our itinerary assessment now
      </Link>

      {/* Main nav */}
      <nav
        className={cn(
          "transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-border/40"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 z-50">
            <img
              src={logoImg}
              alt="Blue Lobster"
              className="h-12 w-12 object-cover object-top flex-shrink-0"
            />
            <span className={cn("font-serif text-xl font-bold tracking-tight transition-colors", isScrolled ? "text-primary" : "text-white")}>
              BLUE LOBSTER
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button data-testid="nav-home" onClick={() => scrollToSection("/")} className={linkClass}>
              Home
            </button>
            <Link data-testid="nav-about" href="/about" className={cn(linkClass, location === "/about" && "text-accent")}>
              About Us
            </Link>
            {/* Destinations Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsDestDropdownOpen(true)}
              onMouseLeave={() => setIsDestDropdownOpen(false)}
            >
              <button
                data-testid="nav-destinations"
                className={cn(linkClass, "flex items-center gap-1")}
              >
                Destinations
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isDestDropdownOpen && "rotate-180")} />
              </button>

              {isDestDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-44 pt-3">
                  <div className="bg-background border border-border shadow-lg">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.name}
                        href={dest.href}
                        data-testid={`nav-dest-${dest.name.toLowerCase()}`}
                        onClick={() => setIsDestDropdownOpen(false)}
                        className="block px-5 py-3 text-sm font-medium text-primary hover:text-accent hover:bg-muted tracking-wide uppercase transition-colors"
                      >
                        {dest.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button
              data-testid="nav-contact"
              onClick={() => scrollToSection("contact")}
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

          {/* Mobile Toggle */}
          <button
            data-testid="nav-mobile-toggle"
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
          <button
            data-testid="mobile-nav-home"
            onClick={() => { scrollToSection("/"); setIsMobileMenuOpen(false); }}
            className="text-2xl font-serif text-primary hover:text-accent transition-colors"
          >
            Home
          </button>
          <Link
            data-testid="mobile-nav-about"
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif text-primary hover:text-accent transition-colors"
          >
            About Us
          </Link>
          {/* Mobile Destinations */}
          <div className="flex flex-col items-center gap-4">
            <button
              data-testid="mobile-nav-destinations"
              onClick={() => setIsMobileDestOpen((o) => !o)}
              className="flex items-center gap-2 text-2xl font-serif text-primary hover:text-accent transition-colors"
            >
              Destinations
              <ChevronDown className={cn("w-5 h-5 transition-transform duration-200", isMobileDestOpen && "rotate-180")} />
            </button>
            {isMobileDestOpen && (
              <div className="flex flex-col items-center gap-3">
                {destinations.map((dest) => (
                  <Link
                    key={dest.name}
                    href={dest.href}
                    data-testid={`mobile-nav-dest-${dest.name.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif text-primary/70 hover:text-accent transition-colors"
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Button
            data-testid="mobile-nav-contact"
            onClick={() => { scrollToSection("contact"); setIsMobileMenuOpen(false); }}
            size="lg"
            className="mt-4 rounded-none px-8"
          >
            CONTACT US
          </Button>
        </div>
      </nav>
    </div>
  );
}
