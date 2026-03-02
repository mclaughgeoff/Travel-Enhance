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
  Mountain,
  Landmark,
  Utensils,
  Camera,
  Star,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Leaf,
  Beer,
  Snowflake,
} from "lucide-react";

import heroImg from "@assets/691e7eb6171db9217d72b20d_corwin-thiessen-fOJuNc3clEg-unsplash_1772407293780.jpg";
import vermontCardImg from "@assets/691d3c6f7a18a554a9125ab7_mitili-mitili-bRWGwN9X-ZU-unsplash_1771606515397.jpg";

const highlights = [
  {
    icon: <Mountain className="w-7 h-7 text-accent" />,
    title: "The Green Mountains",
    description:
      "Vermont's spine of rolling peaks offers some of New England's finest hiking, with trails winding through dense hardwood forest, past alpine meadows, and along ridgelines with sweeping valley views. The Long Trail — America's oldest long-distance hiking path — stretches the full length of the state.",
  },
  {
    icon: <Leaf className="w-7 h-7 text-accent" />,
    title: "Legendary Fall Foliage",
    description:
      "Each autumn, Vermont transforms into a tapestry of crimson, amber, and gold. Winding country roads lined with maples, covered bridges framed in color, and hillside farms bathed in warm light make Vermont the undisputed capital of fall foliage in America.",
  },
  {
    icon: <Landmark className="w-7 h-7 text-accent" />,
    title: "Covered Bridges & Charming Villages",
    description:
      "Vermont is home to more than 100 historic covered bridges, each a piece of living architecture tucked into quiet stream crossings and rural landscapes. Villages like Woodstock, Stowe, and Manchester exude a timeless New England character found nowhere else.",
  },
  {
    icon: <Utensils className="w-7 h-7 text-accent" />,
    title: "Farm-to-Table Food Culture",
    description:
      "Vermont's food scene is deeply rooted in its working farmland. World-class cheddar from Cabot and Grafton, maple syrup straight from the sugar bush, artisan cheesemakers, and farm-to-table restaurants that let local ingredients speak for themselves.",
  },
  {
    icon: <Snowflake className="w-7 h-7 text-accent" />,
    title: "Stowe & World-Class Skiing",
    description:
      "Stowe Resort — set against the dramatic face of Mount Mansfield, Vermont's highest peak — is one of the premier ski destinations in the eastern United States. From groomed cruisers to challenging glades, it offers an experience that rivals any mountain in New England.",
  },
  {
    icon: <Beer className="w-7 h-7 text-accent" />,
    title: "Craft Breweries & Artisan Spirits",
    description:
      "Vermont punches far above its weight in craft beer, with legendary names like The Alchemist (home of Heady Topper), Hill Farmstead, and Lawson's Finest Liquids drawing pilgrims from across the country. Local cideries and distilleries round out one of the richest artisan drink cultures in America.",
  },
];

const itinerary = [
  {
    day: 1,
    title: "Arrival & Village Welcome",
    activities: [
      "Arrive in Stowe or Woodstock and check into a classic Vermont inn or mountain lodge",
      "Stroll the village green, browse local art galleries and farm shops",
      "Farm-to-table dinner featuring Vermont cheddar, local produce, and maple-glazed meats",
    ],
  },
  {
    day: 2,
    title: "Mountains & Covered Bridges",
    activities: [
      "Morning hike on the Long Trail or up Mount Mansfield for panoramic Green Mountain views",
      "Visit one of Vermont's iconic covered bridges — Quechee or Taftsville are favorites",
      "Stop at a local sugarhouse for a maple syrup tasting and tour",
      "Evening at a farmhouse brewery — try a fresh pour of Hill Farmstead or Lawson's Finest",
    ],
  },
  {
    day: 3,
    title: "Foliage Roads & Farm Stops",
    activities: [
      "Scenic drive along Route 100 — Vermont's most celebrated back road — through peak foliage",
      "Visit Shelburne Farms on the shores of Lake Champlain for cheese tastings and farm tours",
      "Explore Shelburne Museum's remarkable collection of American folk art and architecture",
      "Wine and cheese evening at a lakeside inn as the mountains glow at dusk",
    ],
  },
  {
    day: 4,
    title: "Village Markets & Farewell",
    activities: [
      "Morning at a local farmers' market — stock up on maple syrup, aged cheddar, and apple cider",
      "Visit the VMFA (Vermont Museum of Fine Arts) or a local pottery and craft studio",
      "Final lunch at a Woodstock or Burlington café with views of the surrounding hills",
      "Depart with a cooler full of Vermont's finest provisions",
    ],
  },
];

const practicalInfo = [
  {
    icon: <Calendar className="w-5 h-5 text-accent" />,
    label: "Best Time to Visit",
    value:
      "Mid-September through mid-October for fall foliage. December through March for skiing. Summer (June–August) offers ideal hiking and festival weather.",
  },
  {
    icon: <Clock className="w-5 h-5 text-accent" />,
    label: "Ideal Duration",
    value:
      "4 to 6 days to explore multiple regions — the Northeast Kingdom, Stowe, Lake Champlain, and the Connecticut River Valley each deserve time.",
  },
  {
    icon: <MapPin className="w-5 h-5 text-accent" />,
    label: "Getting There",
    value:
      "Burlington International Airport (BTV) is the state's main hub. Boston is 3.5 hours by car; New York City is 4.5 hours. Amtrak's Vermonter runs from New York to Essex Junction daily.",
  },
];

export default function Vermont() {
  useEffect(() => {
    document.title = "Vermont — Blue Lobster Travel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      <header className="relative h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Vermont countryside in autumn"
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
              Vermont
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
              New England's quiet masterpiece. Rolling green mountains, winding country roads, 
              and vibrant villages nestled among endless forests.
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
              About Vermont
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Where Nature Feels Close and Time Slows Down
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Vermont is New England's quiet masterpiece — rolling green mountains, winding country 
                roads, and vibrant villages nestled among endless forests. Each season paints the 
                landscape with its own kind of magic, from summer's soft lakeside breezes to autumn's 
                iconic tapestry of gold and crimson.
              </p>
              <p>
                It's a place where nature feels close, the air is crisp, and time slows just enough 
                to savor it all. Whether you're exploring charming small towns, hiking along mountain 
                ridgelines, or discovering local farms and craftmakers, Vermont offers a perfect balance 
                of adventure and serenity.
              </p>
              <p>
                With its covered bridges, artisanal food, and sweeping valley views, Vermont is a 
                destination that feels both grounded and unforgettable — a place you return to again 
                and again, in every season.
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
              src={vermontCardImg}
              alt="Vermont fall foliage and countryside"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 hidden md:block">
              <p className="font-serif text-2xl">Est. 1791</p>
              <p className="text-white/70 text-sm mt-1">The 14th state in the Union</p>
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
              Vermont Highlights
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
            A Perfect Vermont Itinerary
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our recommended 4-day plan to experience the best of Vermont. Every detail can be 
            customized to your season, pace, and passions.
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
              Ready to Discover Vermont?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Let us craft a personalized Vermont experience for you. From foliage drives 
              to mountain hikes, every moment is tailored to your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?itinerary=Vermont+Mountain+Escape">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 rounded-none h-14 px-10 uppercase tracking-widest text-sm font-semibold"
                  data-testid="button-book-vermont"
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
                <li><Link href="/vermont" className="hover:text-accent transition-colors">Vermont</Link></li>
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
                <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
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
