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
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Waves,
  ShoppingBag,
  Sun,
} from "lucide-react";

import heroImg from "@assets/alyssa-ruggieri-thWUxkPLEHk-unsplash_1772407843673.jpg";
import nantucketCardImg from "@assets/691e7461c0c5f59e3fd18c8e_mv-vacation-oTLwZ4WgQPs-unsplash-1_1771606515396.jpg";

const highlights = [
  {
    icon: <Landmark className="w-7 h-7 text-accent" />,
    title: "Whaling Heritage & History",
    description:
      "Nantucket was once the whaling capital of the world. The Nantucket Whaling Museum chronicles this remarkable era through extraordinary artifacts, a massive sperm whale skeleton, and immersive exhibits that bring 19th-century island life vividly to life.",
  },
  {
    icon: <Waves className="w-7 h-7 text-accent" />,
    title: "Miles of Pristine Beaches",
    description:
      "From the surf-pounded south shore at Surfside to the calm harbor waters of Children's Beach, Nantucket's 80+ miles of coastline offer a beach for every mood. Cisco Beach is beloved by surfers; Siasconset's bluffs offer dramatic Atlantic panoramas.",
  },
  {
    icon: <Sailboat className="w-7 h-7 text-accent" />,
    title: "Classic Harbor & Sailing",
    description:
      "Nantucket's harbor is one of New England's most picturesque — a working waterfront of weathered docks, bobbing sailboats, and ferries arriving from the mainland. Charter a classic wooden vessel or join a sunset sail around the island's storied coastline.",
  },
  {
    icon: <Utensils className="w-7 h-7 text-accent" />,
    title: "Exceptional Dining",
    description:
      "From casual harborside clam shacks to white-tablecloth restaurants helmed by James Beard Award nominees, Nantucket's food scene is world-class. Local bay scallops — harvested each fall — are considered among the finest shellfish in America.",
  },
  {
    icon: <ShoppingBag className="w-7 h-7 text-accent" />,
    title: "Cobblestone Streets & Shopping",
    description:
      "Nantucket Town's historic cobblestone Main Street is lined with independent boutiques, galleries, and antique shops. Browse handcrafted lightship baskets — a centuries-old island tradition — or discover art at one of the island's many fine galleries.",
  },
  {
    icon: <Sun className="w-7 h-7 text-accent" />,
    title: "Iconic Grey Shingles & Architecture",
    description:
      "Nantucket's architectural character is unlike anywhere else in America — grey-shingled homes draped in roses, widow's walks perched atop captains' houses, and historic churches that anchor the island's compact, perfectly preserved town center.",
  },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival & Harbor Discovery",
    activities: [
      "Arrive by ferry from Hyannis or Harwich Port — the boat ride itself sets the mood",
      "Check into a classic inn or boutique hotel in Nantucket Town",
      "Stroll the cobblestone streets of Main Street and explore the waterfront",
      "Fresh bay scallop dinner at a harborside restaurant as the sun sets over the docks",
    ],
  },
  {
    day: 2,
    title: "Beaches & Whaling History",
    activities: [
      "Morning visit to the Nantucket Whaling Museum — one of the finest maritime museums in America",
      "Explore the Old Mill (1746) and the historic 'Sconset village with its rose-covered cottages",
      "Afternoon at Surfside or Cisco Beach for swimming and relaxing",
      "Sunset cocktails at a rooftop bar overlooking the harbor and Brant Point Lighthouse",
    ],
  },
  {
    day: 3,
    title: "Sailing, Cycling & Local Flavor",
    activities: [
      "Morning sailing excursion around the island or into Nantucket Sound",
      "Rent bikes and cycle the scenic Polpis Road path through cranberry bogs and heathlands",
      "Farm stand lunch and a visit to a local cranberry farm",
      "Explore independent boutiques and lightship basket galleries in town",
    ],
  },
  {
    day: 4,
    title: "Hidden Beaches & Farewell",
    activities: [
      "Early morning walk on Great Point — a remote spit of sand with a lighthouse and seal colony",
      "Final brunch at a beloved local café with views of the harbor",
      "Last-minute shopping for lightship baskets, saltwater taffy, and locally made preserves",
      "Afternoon ferry back to the mainland, full of memories",
    ],
  },
];

const practicalInfo = [
  {
    icon: <Calendar className="w-5 h-5 text-accent" />,
    label: "Best Time to Visit",
    value:
      "Late June through September for peak summer weather. Late September and October bring fewer crowds, cooler days, and Nantucket's beloved scallop season.",
  },
  {
    icon: <Clock className="w-5 h-5 text-accent" />,
    label: "Ideal Duration",
    value:
      "4 to 6 days is ideal — enough time to explore the beaches, town, and surrounding moors without rushing, while soaking in the island's unhurried pace.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    label: "Getting There",
    value:
      "Nantucket is accessible by ferry from Hyannis (2.25 hrs) or Harwich Port, or by a short flight from Boston, New York, or regional Cape Cod airports. No cars needed — the island is best explored on foot and by bike.",
  },
];

export default function Nantucket() {
  useEffect(() => {
    document.title = "Nantucket, Massachusetts — Blue Lobster Travel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      <header className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Nantucket harbor and coastline"
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
              Nantucket
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
              Thirty miles out to sea, where cobblestone streets meet endless coastline 
              and the spirit of the golden age of sail still drifts through the salt air.
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
              About Nantucket
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              An Island Frozen Beautifully in Time
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Nantucket captures the magic of coastal New England with its pastel sunsets, 
                shingled cottages, and miles of untouched shoreline. The island feels both 
                peaceful and full of possibility — where morning walks lead to hidden beaches 
                and afternoons unfold beneath sweeping seaside skies.
              </p>
              <p>
                Whether you're wandering through historic whaling-era streets or savoring fresh 
                lobster rolls overlooking the harbor, Nantucket offers a quiet kind of luxury. 
                Its unhurried pace, extraordinary natural beauty, and rich maritime heritage 
                make it unlike anywhere else in New England.
              </p>
              <p>
                From the wildflower-covered moors of the interior to the dramatic bluffs of 
                Siasconset, every corner of this 48-square-mile island holds something worth 
                discovering — and returning to again and again.
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
              src={nantucketCardImg}
              alt="Nantucket sailing and harbor"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 hidden md:block">
              <p className="font-serif text-2xl">Est. 1641</p>
              <p className="text-white/70 text-sm mt-1">Former whaling capital of the world</p>
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
              Nantucket Highlights
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
            A Perfect Nantucket Itinerary
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our recommended 4-day plan to experience the best of Nantucket. Every detail 
            can be customized to your pace and preferences.
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
              Ready to Discover Nantucket?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us craft a personalized Nantucket experience for you. From harbor sails 
              to hidden beaches, every moment is tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?itinerary=Nantucket+Island+Escape">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 rounded-none h-14 px-10 uppercase tracking-widest text-sm font-semibold"
                  data-testid="button-book-nantucket"
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
