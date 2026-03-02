import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/navbar";
import { Section } from "@/components/ui/section";
import logoImg from "@assets/8_1772409457438.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  
  MapPin,
  Clock,
  Calendar,
  Sailboat,
  Landmark,
  Utensils,
  Camera,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  TreePine,
  Fish,
  Binoculars,
} from "lucide-react";

import heroImg from "@assets/katherine-chase-0DtoVEDaJbs-unsplash_1772407874514.jpg";
import maineCardImg from "@assets/691e753cf7ca4404923582e6_jimmy-woo-SUMtPksZXBE-unsplash_50_1771606515397.jpg";

const highlights = [
  {
    icon: <Landmark className="w-7 h-7 text-accent" />,
    title: "Acadia National Park",
    description:
      "One of America's most beloved national parks, Acadia sits on the rugged coast of Mount Desert Island. Hike Cadillac Mountain for the first sunrise in the continental US, cycle the 45-mile carriage road network, or kayak among granite islands draped in spruce and fog.",
  },
  {
    icon: <Fish className="w-7 h-7 text-accent" />,
    title: "The Finest Lobster in the World",
    description:
      "Maine harvests over 100 million pounds of lobster each year — more than anywhere else on earth. Pull up to a dockside shack, crack open a freshly steamed whole lobster with butter, and eat it at a picnic table with the Atlantic stretching out before you. There is no finer meal.",
  },
  {
    icon: <Binoculars className="w-7 h-7 text-accent" />,
    title: "Lighthouses & Working Harbors",
    description:
      "Maine's 3,500-mile coastline is dotted with 65 historic lighthouses, from the stately Portland Head Light to the remote Pemaquid Point. The working fishing harbors of Rockland, Camden, and Stonington offer an authentic glimpse into a way of life unchanged for generations.",
  },
  {
    icon: <TreePine className="w-7 h-7 text-accent" />,
    title: "Boundless Wilderness",
    description:
      "Beyond the coast lies one of the wildest places in the eastern United States. Maine's North Woods stretch for millions of acres — a mosaic of lakes, rivers, and boreal forest. Baxter State Park protects Mount Katahdin, the northern terminus of the Appalachian Trail.",
  },
  {
    icon: <Utensils className="w-7 h-7 text-accent" />,
    title: "A Thriving Food Scene",
    description:
      "Portland, Maine has been named one of America's best food cities multiple times. James Beard Award-winning restaurants, craft breweries, a legendary public market, and a farm-to-table culture rooted in exceptional local ingredients — blueberries, oysters, fiddleheads, and more.",
  },
  {
    icon: <Sailboat className="w-7 h-7 text-accent" />,
    title: "Windjammer Sailing",
    description:
      "A Maine tradition like no other — spend a night or a week sailing the Penobscot Bay aboard a classic wooden windjammer schooner. Watch seals sunbathe on ledges, spot bald eagles overhead, and anchor in a quiet cove as the stars emerge above the treeline.",
  },
];

const itinerary = [
  {
    day: 1,
    title: "Portland & the Old Port",
    activities: [
      "Arrive in Portland and explore the cobblestone streets of the Old Port district",
      "Visit the Portland Museum of Art and the historic Victoria Mansion",
      "Tour Portland Head Light — Maine's oldest lighthouse, commissioned by George Washington",
      "Dinner at one of Portland's acclaimed farm-to-table restaurants along Fore Street",
    ],
  },
  {
    day: 2,
    title: "Acadia National Park",
    activities: [
      "Drive the scenic Park Loop Road on Mount Desert Island",
      "Hike the Beehive Trail or the moderate Gorham Mountain for sweeping Atlantic views",
      "Cycle the historic carriage roads through woodland, meadow, and along Eagle Lake",
      "Watch the sunset over Frenchman Bay from the summit of Cadillac Mountain",
    ],
  },
  {
    day: 3,
    title: "Coastal Villages & Lobster",
    activities: [
      "Morning kayak tour through the sea caves and islands of Acadia's coastline",
      "Drive up the Blue Hill Peninsula — stopping in Stonington and the island village of Deer Isle",
      "Authentic dockside lobster lunch at a working fishing pier",
      "Visit the Farnsworth Art Museum in Rockland, home of the largest Wyeth collection in the world",
    ],
  },
  {
    day: 4,
    title: "Camden & Farewell",
    activities: [
      "Morning hike on Mount Battie in Camden Hills State Park for panoramic Penobscot Bay views",
      "Explore Camden's charming harbor, boutique shops, and waterfront cafés",
      "Optional windjammer schooner excursion on the bay",
      "Final Maine lobster roll before departing — a fitting farewell",
    ],
  },
];

const practicalInfo = [
  {
    icon: <Calendar className="w-5 h-5 text-accent" />,
    label: "Best Time to Visit",
    value:
      "July and August offer the warmest weather and full amenities. September is spectacular — foliage begins, lobster is at its peak, and crowds thin out considerably. Acadia in early October is unforgettable.",
  },
  {
    icon: <Clock className="w-5 h-5 text-accent" />,
    label: "Ideal Duration",
    value:
      "5 to 7 days to do Maine justice — enough time for Portland, Acadia, the midcoast villages, and a day or two of slow coastal wandering without feeling rushed.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    label: "Getting There",
    value:
      "Portland International Jetport (PWM) is the main hub with direct flights from major East Coast cities. Boston is 2 hours by car; Acadia is another 3.5 hours north. Bar Harbor has a small regional airport (BHB) with summer service.",
  },
];

export default function Maine() {
  useEffect(() => {
    document.title = "Maine — Blue Lobster Travel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      <header className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Maine rugged coastline"
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
              Maine
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
              Where rugged coastline meets quiet, soul-stirring beauty. Rocky shores, 
              towering pines, and lighthouses perched above the wild Atlantic.
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
              About Maine
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Wild, Wonderful, and Wonderfully Unpolished
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Maine is where rugged coastline meets quiet, soul-stirring beauty. With its rocky shores, 
                towering pines, and lighthouses perched above the Atlantic, the state feels wild and 
                wonderfully unpolished. From the salty breeze of seaside villages to the peaceful 
                stillness of inland lakes, Maine invites you to experience nature in its purest form.
              </p>
              <p>
                Whether you're exploring Acadia's granite peaks, wandering through charming harbor towns, 
                or savoring freshly caught lobster by the water, Maine delivers a perfect blend of 
                adventure and serenity. It's a place that feels both timeless and deeply alive.
              </p>
              <p>
                From Portland's thriving food scene to the remote grandeur of the North Woods, 
                Maine rewards those who venture beyond the ordinary — offering the kind of 
                authentic, unhurried beauty that stays with you long after you've left.
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
              src={maineCardImg}
              alt="Maine harbor and coastline"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 hidden md:block">
              <p className="font-serif text-2xl">3,500 Miles</p>
              <p className="text-white/70 text-sm mt-1">Of breathtaking coastline</p>
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
              Maine Highlights
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
            A Perfect Maine Itinerary
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our recommended 4-day plan to experience the best of Maine's coast and wilderness. 
            Every detail can be tailored to your pace and season.
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
              Ready to Discover Maine?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us craft a personalized Maine experience for you. From Acadia hikes 
              to lobster-by-the-dock evenings, every moment is tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?itinerary=Maine+Coastal+Adventure">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 rounded-none h-14 px-10 uppercase tracking-widest text-sm font-semibold"
                  data-testid="button-book-maine"
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
                <img src={logoImg} alt="Blue Lobster" className="h-16 w-16 object-cover object-top brightness-0 invert flex-shrink-0" />
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
