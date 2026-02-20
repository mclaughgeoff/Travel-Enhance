import { Navbar } from "@/components/navbar";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Anchor, 
  MapPin, 
  Compass, 
  Utensils, 
  Sailboat,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Compass className="w-8 h-8 text-accent" />,
      title: "Custom Itineraries",
      desc: "Every journey is tailored to your specific tastes, whether you seek relaxation or adventure."
    },
    {
      icon: <Utensils className="w-8 h-8 text-accent" />,
      title: "Unique Experiences",
      desc: "From private oyster tastings to working lobster boat excursions, access the authentic side of New England."
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Regional Expertise",
      desc: "We live here. We know the hidden gems, the best seasons, and the locals who make it special."
    },
    {
      icon: <Sailboat className="w-8 h-8 text-accent" />,
      title: "Partnership Services",
      desc: "Exclusive access to premium accommodations and transport services throughout the region."
    },
  ];

  const destinations = [
    {
      title: "A Seafood Lover's New England",
      image: "https://images.unsplash.com/photo-1599596007793-1678859f515e?q=80&w=1287&auto=format&fit=crop",
      tag: "Culinary"
    },
    {
      title: "Boston Weekend Getaway",
      image: "https://images.unsplash.com/photo-1506199326490-50bd820e588e?q=80&w=2666&auto=format&fit=crop",
      tag: "Urban"
    },
    {
      title: "Old-World Romance in Newport",
      image: "https://images.unsplash.com/photo-1549557404-5e5d30491873?q=80&w=2670&auto=format&fit=crop",
      tag: "Luxury"
    },
    {
      title: "A Family Adventure in Maine",
      image: "https://images.unsplash.com/photo-1534563387816-7d4c82b92135?q=80&w=2671&auto=format&fit=crop",
      tag: "Nature"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background - Scenic New England Coast */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1520935543328-3e4b78913b86?q=80&w=2574&auto=format&fit=crop" 
            alt="New England Coastline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white/90 text-sm md:text-base tracking-[0.2em] uppercase font-medium mb-4 block">
              Discover the Coast
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight text-shadow-lg">
              Welcome To Blue Lobster <br/> Travel Company
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto leading-relaxed text-shadow">
              Experience New England like never before. 
              Curated journeys through maritime history, culinary excellence, and natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 rounded-none h-14 px-8 uppercase tracking-widest text-sm font-semibold"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Exploring
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-8 uppercase tracking-widest text-sm font-semibold backdrop-blur-sm"
                onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Destinations
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-[1px] h-16 bg-white/30 mx-auto" />
        </motion.div>
      </header>

      {/* Who We Are */}
      <section id="about" className="bg-primary text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Crafting immersive, authentic experiences for curious travelers.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8 font-light">
                At Blue Lobster Travel, we believe travel should be more than just sightseeing. 
                It should be about connection—to the land, the sea, and the people who call it home.
                Every journey we design honors the real spirit of New England, moving beyond the 
                guidebooks to reveal the region's true character.
              </p>
              <div className="h-[1px] w-24 bg-accent mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300">
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-serif mb-3">{feature.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destination: Newport */}
      <section className="relative h-[80vh] md:h-[600px] flex items-center overflow-hidden">
        {/* Newport Mansion / Coast Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1569936870717-d5d14470c634?q=80&w=2670&auto=format&fit=crop" 
            alt="Newport Cliff Walk" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Featured Destination</span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Newport, RI</h2>
            <p className="text-white/90 text-lg max-w-md mb-10 leading-relaxed drop-shadow-md">
              Step into the Gilded Age. Experience the breathtaking Cliff Walk, historic mansions, and world-class sailing culture.
            </p>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-10 uppercase tracking-widest font-semibold bg-transparent backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <Section id="destinations" className="bg-secondary/30">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">Our Collections</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">Get Inspired</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[500px] overflow-hidden cursor-pointer"
            >
              <img 
                src={dest.image} 
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-accent text-xs tracking-widest uppercase font-bold mb-2 block">{dest.tag}</span>
                <h3 className="text-2xl font-serif text-white mb-6 leading-tight group-hover:text-accent transition-colors duration-300">
                  {dest.title}
                </h3>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex items-center text-white text-sm font-semibold tracking-wide uppercase">
                  Discover <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1505245208761-ba872912fac0?q=80&w=2670&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Anchor className="w-6 h-6 text-accent" />
                <span className="font-serif text-xl font-bold tracking-tight">BLUE LOBSTER</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Curating exceptional travel experiences along the New England coast. 
                Authentic, luxurious, and unforgettable.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Experiences</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Travel Journal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Get in Touch</h4>
              <div className="space-y-4 text-sm text-white/70">
                <p className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  Newport, Rhode Island
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  hello@bluelobster.travel
                </p>
                <p className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-accent" />
                  Mon - Fri: 9am - 6pm EST
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <p>&copy; {new Date().getFullYear()} Blue Lobster Travel Company. All rights reserved.</p>
            <p>Designed with maritime soul.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
