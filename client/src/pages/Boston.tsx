import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/ui/section";
import lobsterImg from "@assets/4_1772409867670.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  
  MapPin,
  Clock,
  Calendar,
  Landmark,
  Utensils,
  Camera,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  BookOpen,
  Music,
  Ship,
} from "lucide-react";

import heroImg from "@assets/kumar-mehul-CM3eDvnOExA-unsplash_1772407897470.jpg";
import bostonCardImg from "@assets/691e7461c0c5f59e3fd18c8e_mv-vacation-oTLwZ4WgQPs-unsplash-1_1771606515396.jpg";

const highlights = [
  {
    icon: <Landmark className="w-7 h-7 text-accent" />,
    title: "The Freedom Trail",
    description:
      "Follow the 2.5-mile red-brick path connecting 16 historically significant sites — from Boston Common to the USS Constitution. Paul Revere's House, the Old North Church, Faneuil Hall, and the Bunker Hill Monument all lie along this remarkable open-air museum of American history.",
  },
  {
    icon: <BookOpen className="w-7 h-7 text-accent" />,
    title: "World-Class Museums & Universities",
    description:
      "Home to Harvard, MIT, and over 50 colleges, Boston is one of the great intellectual cities of the world. The Museum of Fine Arts houses one of the finest art collections in the country, while the Isabella Stewart Gardner Museum is a singular, atmospheric treasure.",
  },
  {
    icon: <Utensils className="w-7 h-7 text-accent" />,
    title: "A Legendary Food Scene",
    description:
      "Boston's culinary landscape spans clam chowder served in bread bowls at Faneuil Hall to acclaimed tasting menus in the South End. The North End — America's oldest Italian neighborhood — is home to legendary pastry shops, trattorias, and bakeries that have fed Bostonians for generations.",
  },
  {
    icon: <Ship className="w-7 h-7 text-accent" />,
    title: "The Harbor & Waterfront",
    description:
      "Boston's revitalized waterfront stretches along the inner harbor with harborwalk paths, ferry connections to the Harbor Islands, whale watching cruises, and waterfront dining. The Boston Harbor Islands State Park offers remarkable hiking, swimming, and camping just minutes from downtown.",
  },
  {
    icon: <Music className="w-7 h-7 text-accent" />,
    title: "Vibrant Neighborhoods",
    description:
      "Each Boston neighborhood has its own distinct character. Beacon Hill's gas-lit streets and Federal architecture; Back Bay's elegant brownstones and Newbury Street boutiques; the South End's gallery scene and acclaimed restaurants; and Cambridge's eclectic Harvard Square energy.",
  },
  {
    icon: <Camera className="w-7 h-7 text-accent" />,
    title: "Sports & Culture",
    description:
      "Fenway Park — the oldest ballpark in Major League Baseball — is a pilgrimage site for sports lovers worldwide. The Boston Celtics, Bruins, and Patriots all call Greater Boston home. The city's cultural calendar is equally rich, with the Boston Symphony Orchestra and Boston Ballet among the finest in the nation.",
  },
];

const itinerary = [
  {
    day: 1,
    title: "Historic Boston & the Waterfront",
    activities: [
      "Begin at Boston Common — America's oldest public park — and the adjacent Public Garden",
      "Walk the Freedom Trail from the State House through Faneuil Hall and Quincy Market",
      "Explore the North End: espresso at a sidewalk café and cannoli from Mike's Pastry",
      "Evening stroll along the Harborwalk with dinner at a waterfront seafood restaurant",
    ],
  },
  {
    day: 2,
    title: "Museums, Beacon Hill & Back Bay",
    activities: [
      "Morning at the Museum of Fine Arts or the Isabella Stewart Gardner Museum",
      "Wander the cobblestone streets of Beacon Hill and Acorn Street — one of America's most photographed lanes",
      "Lunch and shopping along Newbury Street in the Back Bay",
      "Visit Copley Square: Trinity Church, the Boston Public Library, and the finish line of the Boston Marathon",
    ],
  },
  {
    day: 3,
    title: "Cambridge & Harvard Square",
    activities: [
      "Cross the Charles River to Cambridge and explore Harvard Yard and the Harvard Museum of Natural History",
      "Lunch and browsing in Harvard Square's independent bookshops, record stores, and cafés",
      "Visit the MIT campus and the spectacular Stata Center",
      "Return to Boston for dinner in the South End — one of New England's most exciting dining neighborhoods",
    ],
  },
  {
    day: 4,
    title: "Harbor Islands & Fenway",
    activities: [
      "Morning ferry to the Boston Harbor Islands — swim, hike, and explore the Civil War-era Fort Warren on Georges Island",
      "Afternoon tour of Fenway Park — the beloved home of the Red Sox since 1912",
      "Explore the Fenway / Kenmore neighborhood and the lively Lansdowne Street",
      "Farewell dinner at one of Boston's acclaimed tasting menu restaurants",
    ],
  },
];

const practicalInfo = [
  {
    icon: <Calendar className="w-5 h-5 text-accent" />,
    label: "Best Time to Visit",
    value:
      "September and October offer crisp fall weather, foliage, and fewer tourists. Spring (April–June) brings blooming Public Garden tulips and marathon season. Summer is lively but busy.",
  },
  {
    icon: <Clock className="w-5 h-5 text-accent" />,
    label: "Ideal Duration",
    value:
      "3 to 5 days covers the highlights well. Add a day trip to Salem, Concord, or Lexington, or a half-day in Cambridge to round out the experience.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    label: "Getting There",
    value:
      "Logan International Airport (BOS) is served by major airlines worldwide. Amtrak's Acela connects Boston to New York in under 4 hours. The city is entirely walkable and well-served by the MBTA subway system.",
  },
];

export default function Boston() {
  useEffect(() => {
    document.title = "Boston, Massachusetts — Blue Lobster Travel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      <header className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Boston skyline and harbor at dusk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pb-16 md:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block" data-testid="text-hero-label">
              Discover
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight" data-testid="text-hero-title">
              Boston
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
              Where America's story began. A city of revolutionary history, world-class 
              culture, legendary food, and unmistakable New England character.
            </p>
          </motion.div>
        </div>
      </header>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
              About Boston
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Historic Charm Meets Modern Energy
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Boston is a city where historic charm meets modern energy, making it a great 
                destination for couples looking for a cultured getaway or families seeking 
                memorable adventures. Walkable neighborhoods, lively streets, and a dynamic 
                food scene give every visitor something to explore.
              </p>
              <p>
                From cozy cafés and Italian bakeries in the North End to innovative restaurants 
                in the South End, Boston's culinary culture reflects centuries of immigrant 
                tradition alongside cutting-edge creativity. The city's compact scale makes it 
                one of the most walkable major cities in America.
              </p>
              <p>
                With more than 400 years of history woven into its streets, Boston doesn't just 
                tell the story of New England — it tells the story of America. Every neighborhood, 
                every cobblestone lane, and every harbor view carries the weight of that extraordinary legacy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src={bostonCardImg}
              alt="Boston harbor and waterfront"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 hidden md:block">
              <p className="font-serif text-2xl">Est. 1630</p>
              <p className="text-white/70 text-sm mt-1">The cradle of American liberty</p>
            </div>
          </motion.div>
        </div>
      </Section>

      <section className="bg-primary text-white py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
              What Awaits You
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">
              Boston Highlights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="border border-white/15 p-8 hover:border-accent/50 transition-colors duration-300"
                data-testid={`card-highlight-${idx}`}
              >
                <div className="mb-5">{item.icon}</div>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-secondary/30">
        <div className="text-center mb-16">
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
            Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            A Perfect Boston Itinerary
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our recommended 4-day plan to experience the best of Boston. Every detail 
            can be customized to your interests and pace.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto">
          {itinerary.map((day, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex gap-6 md:gap-8"
              data-testid={`card-itinerary-day-${day.day}`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary text-white flex flex-col items-center justify-center">
                <span className="text-xs uppercase tracking-wider text-white/60">Day</span>
                <span className="font-serif text-2xl">{day.day}</span>
              </div>

              <div className="flex-1 border-b border-border pb-8">
                <h3 className="font-serif text-xl text-primary mb-3">{day.title}</h3>
                <ul className="space-y-2">
                  {day.activities.map((activity, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed">
                      <Star className="w-3 h-3 text-accent mt-1.5 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
            Plan Ahead
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Practical Information
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {practicalInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-secondary/50 p-8"
              data-testid={`card-info-${idx}`}
            >
              <div className="flex items-center gap-3 mb-4">
                {info.icon}
                <h3 className="font-serif text-lg text-primary">{info.label}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{info.value}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="bg-primary text-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Ready to Discover Boston?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us craft a personalized Boston experience for you. From Freedom Trail 
              walks to harbor cruises and North End evenings, every moment is tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?itinerary=Boston+City+Escape">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 rounded-none h-14 px-10 uppercase tracking-widest text-sm font-semibold"
                  data-testid="button-book-boston"
                >
                  Book This Trip
                </Button>
              </Link>
              <Link href="/destination-builder">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-10 uppercase tracking-widest text-sm font-semibold bg-transparent"
                  data-testid="button-build-itinerary"
                >
                  Build Your Itinerary
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <img src={lobsterImg} alt="Blue Lobster" className="h-16 w-auto brightness-0 invert flex-shrink-0" />
                <span className="font-serif text-xl font-bold tracking-tight">BLUE LOBSTER</span>
              </Link>
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
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/newport" className="hover:text-accent transition-colors">Newport</Link></li>
                <li><Link href="/vermont" className="hover:text-accent transition-colors">Vermont</Link></li>
                <li><Link href="/nantucket" className="hover:text-accent transition-colors">Nantucket</Link></li>
                <li><Link href="/maine" className="hover:text-accent transition-colors">Maine</Link></li>
                <li><Link href="/boston" className="hover:text-accent transition-colors">Boston</Link></li>
                <li><Link href="/destination-builder" className="hover:text-accent transition-colors">Destination Builder</Link></li>
                <li><Link href="/book" className="hover:text-accent transition-colors">Book a Trip</Link></li>
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
                  <Camera className="w-4 h-4 text-accent" />
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
