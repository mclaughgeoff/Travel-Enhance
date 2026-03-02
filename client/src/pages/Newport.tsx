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
  Sailboat,
  Landmark,
  Utensils,
  Camera,
  Star,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Compass,
  Wine,
  Music,
} from "lucide-react";

import heroImg from "@assets/19878_1771606815891.jpg";
import newportCardImg from "@assets/691e7461c0c5f59e3fd18c8e_mv-vacation-oTLwZ4WgQPs-unsplash-1_1771606515396.jpg";


const highlights = [
  {
    icon: <Landmark className="w-7 h-7 text-accent" />,
    title: "Gilded Age Mansions",
    description:
      "Tour The Breakers, Marble House, and Rosecliff — palatial summer \"cottages\" built by America's wealthiest families in the late 1800s. These National Historic Landmarks showcase Beaux-Arts architecture at its most extravagant.",
  },
  {
    icon: <Compass className="w-7 h-7 text-accent" />,
    title: "The Cliff Walk",
    description:
      "Follow 3.5 miles of breathtaking coastline trail along Newport's eastern shore. A National Recreation Trail and National Historic District, it pairs crashing Atlantic waves on one side with sweeping mansion grounds on the other.",
  },
  {
    icon: <Sailboat className="w-7 h-7 text-accent" />,
    title: "Sailing Capital of the World",
    description:
      "Newport hosted the America's Cup for over 50 years. Charter a classic yacht on Narragansett Bay, take a sailing lesson, or simply watch the fleet from the harbor — the sailing tradition here runs deep.",
  },
  {
    icon: <Utensils className="w-7 h-7 text-accent" />,
    title: "World-Class Dining",
    description:
      "From dockside raw bars to James Beard-nominated restaurants, Newport's food scene rivals cities ten times its size. Don't miss the fresh littleneck clams, lobster rolls, and locally-sourced seafood at waterfront spots along Thames Street.",
  },
  {
    icon: <Wine className="w-7 h-7 text-accent" />,
    title: "Vineyards & Spirits",
    description:
      "Visit Newport Vineyards for tastings overlooking Aquidneck Island, or sample craft spirits at the region's artisan distilleries. The maritime climate produces surprisingly elegant wines.",
  },
  {
    icon: <Music className="w-7 h-7 text-accent" />,
    title: "Legendary Music & Culture",
    description:
      "Home of the Newport Jazz Festival and Newport Folk Festival — two of the most iconic music events in America. The cultural calendar features gallery nights, film festivals, and historic preservation events year-round.",
  },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival & Harbor Stroll",
    activities: [
      "Check in to a waterfront boutique hotel or historic inn",
      "Explore Bannister's Wharf and Bowen's Wharf — Newport's lively harbor district",
      "Fresh seafood dinner overlooking the marina",
    ],
  },
  {
    day: 2,
    title: "Mansions & Cliff Walk",
    activities: [
      "Morning guided tour of The Breakers — the Vanderbilt family's 70-room Italian Renaissance palazzo",
      "Walk the Cliff Walk's most scenic stretch from Forty Steps to Rough Point",
      "Visit Rough Point, Doris Duke's oceanfront estate filled with fine art and antiques",
      "Evening cocktails at a rooftop bar with sunset views over the bay",
    ],
  },
  {
    day: 3,
    title: "Sailing & Thames Street",
    activities: [
      "Morning sailing excursion on Narragansett Bay aboard a classic 12-metre yacht",
      "Lunch at a farm-to-table restaurant along Thames Street",
      "Browse independent boutiques, galleries, and antique shops",
      "Wine tasting at Newport Vineyards with ocean views",
    ],
  },
  {
    day: 4,
    title: "Beach, Culture & Farewell",
    activities: [
      "Morning at Easton's Beach (First Beach) or the quieter Second Beach in Middletown",
      "Tour the International Tennis Hall of Fame at the historic Newport Casino",
      "Visit the Redwood Library — the oldest lending library in America (1747)",
      "Farewell dinner at a Gilded Age mansion-turned-restaurant",
    ],
  },
];

const practicalInfo = [
  {
    icon: <Calendar className="w-5 h-5 text-accent" />,
    label: "Best Time to Visit",
    value: "May through October, with peak season in July and August. September offers warm weather with fewer crowds.",
  },
  {
    icon: <Clock className="w-5 h-5 text-accent" />,
    label: "Ideal Duration",
    value: "3 to 5 days to experience the mansions, coastline, dining, and culture at a relaxed pace.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    label: "Getting There",
    value: "90 minutes from Boston, 3 hours from New York City. T.F. Green Airport (PVD) in Warwick is the nearest major airport, about 30 minutes away.",
  },
];

export default function Newport() {
  useEffect(() => {
    document.title = "Newport, Rhode Island — Blue Lobster Travel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      <header className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Newport, Rhode Island coastline"
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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight text-shadow-lg" data-testid="text-hero-title">
              Newport
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed text-shadow" data-testid="text-hero-subtitle">
              Where Gilded Age grandeur meets the untamed Atlantic coast. A city of mansions, 
              harbors, and timeless New England charm.
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
              About Newport
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Old-World Romance on the Rhode Island Coast
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Newport blends Gilded Age glamour with the easy charm of a classic New England seaside town. 
                Along its dramatic cliffs and breezy harbor, the city feels both rich in history and effortlessly relaxed.
              </p>
              <p>
                Stroll past grand mansions, explore hidden coves, or wander the bustling wharfs where sailboats 
                drift against golden afternoon light — every corner of Newport offers a sense of timeless coastal beauty.
              </p>
              <p>
                Walk the iconic Cliff Walk, enjoy fresh seafood by the water, or set sail on the open bay as the 
                coastline unfolds around you. Newport invites you to slow down and savor the moment. With its ocean 
                views, lively culture, and refined coastal energy, the city feels both sophisticated and wonderfully laid-back.
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
              src={newportCardImg}
              alt="Newport waterfront"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 hidden md:block">
              <p className="font-serif text-2xl">Est. 1639</p>
              <p className="text-white/70 text-sm mt-1">One of America's oldest cities</p>
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
              Newport Highlights
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
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
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
            A Perfect Newport Itinerary
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our recommended 4-day plan to experience the best of Newport. Every detail can be 
            customized to your preferences.
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
              Ready to Discover Newport?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us craft a personalized Newport experience for you. From mansion tours 
              to sunset sails, every moment is tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?itinerary=Newport+Coastal+Escape">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 rounded-none h-14 px-10 uppercase tracking-widest text-sm font-semibold"
                  data-testid="button-book-newport"
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
                <a href="https://www.instagram.com/bluelobstertravelco/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61587563116957" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 text-white">
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                <li><Link href="/newport" className="hover:text-accent transition-colors">Newport</Link></li>
                <li><Link href="/destination-builder" className="hover:text-accent transition-colors">Destination Builder</Link></li>
                <li><Link href="/book" className="hover:text-accent transition-colors">Book a Trip</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
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
                  info@bluelobstertravelco.com
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
