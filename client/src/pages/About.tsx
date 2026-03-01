import { motion } from "framer-motion";
import { Link } from "wouter";
import { Anchor, Instagram, Anchor as LobsterIcon, Users, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import missionImg from "@assets/691d3e3ccae95133d2764eac_andrew-castillo-jkK8B9brrS4-unsplash-_1771606515396.jpg";
import card1Img from "@assets/19878_1771606815891.jpg";
import card2Img from "@assets/kumar-mehul-CM3eDvnOExA-unsplash_1772407897470.jpg";
import card3Img from "@assets/alyssa-ruggieri-thWUxkPLEHk-unsplash_1772407843673.jpg";
import card4Img from "@assets/691e753cf7ca4404923582e6_jimmy-woo-SUMtPksZXBE-unsplash_50_1771606515397.jpg";

const values = [
  {
    icon: Anchor,
    title: "Connection",
    description: "We believe in the power of travel to foster meaningful connections.",
  },
  {
    icon: Users,
    title: "Authenticity",
    description: "We honor the real spirit of New England, its people, history, and culture.",
  },
  {
    icon: Compass,
    title: "Curiosity",
    description: "Our expertise is built on years of living, working, and discovering the true heart of New England.",
  },
];

const itineraryCards = [
  {
    title: "A Seafood Lover's New England",
    img: card1Img,
    tag: "Newport",
    href: "/newport",
  },
  {
    title: "Boston Weekend Getaway",
    img: card2Img,
    tag: "Boston",
    href: "/boston",
  },
  {
    title: "Old-World Romance in Newport",
    img: card3Img,
    tag: "Nantucket",
    href: "/nantucket",
  },
  {
    title: "A Family Adventure in Maine",
    img: card4Img,
    tag: "Maine",
    href: "/maine",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: "#406b8c" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-44 pb-16 text-center px-4">
        <motion.div {...fadeUp}>
          <h1 className="text-5xl md:text-6xl font-serif text-white uppercase tracking-wide mb-4">
            Who We Are
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic text-white/80">
            Travel That Tells A Story
          </p>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-2xl font-serif text-[#e4c5af] mb-6">Our Mission</h2>
            <p className="text-white/90 leading-relaxed mb-5 text-sm">
              Blue Lobster Travel creates thoughtfully curated journeys that reveal the true spirit of New England. From secluded beaches and historic coastal towns to private mansion tours, boutique accommodations, and rural retreats, each experience is crafted with discernment and a spirit of discovery.
            </p>
            <p className="text-white/90 leading-relaxed mb-5 text-sm">
              Our work is guided by insider expertise, long-standing relationships, and a profound love for the region. We create moments that feel deeply personal: a sunset sail along the Nantucket coast, a private tasting at a Vermont cider house, a quietly magnificent tour of Boston's historic neighborhoods, or a day on a working lobster boat off Maine's rugged shoreline.
            </p>
            <p className="text-white/90 leading-relaxed text-sm">
              Whether designing a romantic escape, a family adventure, or a multi-destination journey, we deliver seamless, tailored experiences of exceptional depth and character. To us, luxury is the art of storytelling — of connection, place, and travel that feels unmistakably your own.
            </p>
          </div>
          <div className="relative">
            <img
              src={missionImg}
              alt="New England travel experience"
              className="w-full h-80 object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#e4c5af] flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-[#e4c5af]" />
                </div>
              </div>
              <h3 className="font-serif text-[#e4c5af] text-xl mb-3">{v.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 pb-24 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-2xl font-serif text-white mb-8">Our Journey to Blue Lobster</h2>
          <p className="text-white/85 leading-relaxed mb-5 text-sm">
            After a decade designing luxury journeys across the globe, we realized that the same level of exclusivity, storytelling, and insider access we offered internationally could be brought to our own backyard. New England, with its world-class charm, rich history, and breathtaking landscapes, offers endless possibilities for discovery, and we saw an opportunity to showcase it in a way that truly resonates with the luxury traveler.
          </p>
          <p className="text-white/85 leading-relaxed text-sm">
            At Blue Lobster Travel, we curate experiences that go beyond the ordinary.
          </p>
        </motion.div>
      </section>

      {/* Itinerary Inspiration */}
      <section className="pb-24 px-4 md:px-8 text-center">
        <motion.div {...fadeUp}>
          <h2 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-widest mb-3">
            Itinerary Inspiration
          </h2>
          <p className="text-white/80 text-lg italic mb-8">
            See our <em className="font-semibold not-italic">amazing</em> travels.
          </p>
          <Link href="/destination-builder">
            <Button
              data-testid="button-about-discover-more"
              className="bg-[#e4c5af] text-[#406b8c] hover:bg-[#e4c5af]/90 rounded-none px-8 h-10 uppercase tracking-widest text-xs font-bold mb-12"
            >
              Discover More
            </Button>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {itineraryCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={card.href}>
                  <div
                    data-testid={`card-itinerary-${i}`}
                    className="relative h-72 overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex flex-col justify-between p-3">
                      <span className="text-white text-xs uppercase tracking-widest font-semibold bg-black/30 self-start px-2 py-1">
                        {card.tag}
                      </span>
                      <div>
                        <p className="text-white font-serif text-sm leading-snug mb-3">
                          {card.title}
                        </p>
                        <span className="text-white text-xs uppercase tracking-widest border border-white px-3 py-1 inline-block hover:bg-white hover:text-[#406b8c] transition-colors">
                          Discover
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 px-4 md:px-8 py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          {/* Logo */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <Anchor className="w-8 h-8 text-white" />
              <div>
                <p className="font-serif text-white font-bold tracking-widest text-sm uppercase">Blue Lobster</p>
                <p className="text-white/60 text-xs italic">Travel Company</p>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-4">Follow Us</h4>
            <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-white/50 text-xs">Copyright © 2026 Blue Lobster Travel Company</p>
        </div>
      </footer>
    </div>
  );
}
