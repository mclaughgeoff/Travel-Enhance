import { motion } from "framer-motion";
import { Link } from "wouter";
import { Instagram, Anchor } from "lucide-react";
import { Navbar } from "@/components/navbar";
import lobsterImg from "@assets/4_1772409867670.png";

const faqs = [
  {
    question: "How is Blue Lobster different from other travel companies?",
    answer:
      "We specialize exclusively in New England travel experiences, offering authentic, locally-driven adventures curated by experts who live and work in the region. Our deep community connections and years of local knowledge allow us to create truly immersive experiences that showcase the real spirit of New England.",
  },
  {
    question: "Do you offer custom itineraries?",
    answer:
      "Absolutely! We craft personalized itineraries based on your interests, travel style, and desired experiences. Whether you're interested in coastal adventures, autumn foliage tours, culinary experiences, or historical explorations, we'll design a unique journey just for you.",
  },
  {
    question: "What is the best time to visit New England?",
    answer:
      "New England is beautiful year-round! Fall (September–October) offers spectacular foliage, summer provides perfect coastal weather, winter brings charming snow-covered landscapes and cozy experiences, and spring showcases blooming gardens and comfortable temperatures.",
  },
  {
    question: "How do I get started planning my New England adventure?",
    answer:
      "Simply reach out through our contact form or give us a call. We'll start with a consultation to understand your travel dreams, preferences, and requirements, then create a personalized proposal for your authentic New England experience.",
  },
  {
    question: "Do you work with tour operators?",
    answer:
      "Yes! We provide destination management services for global tour operators looking to offer authentic New England experiences. Our partnerships program offers seamless logistics, local expertise, and curated experiences for groups of all sizes.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: "#406b8c" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-44 pb-16 text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-serif tracking-wide"
          style={{ color: "#e4c5af" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          FAQ
        </motion.h1>
      </section>

      {/* Questions */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 pb-24 w-full">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h2 className="text-2xl font-serif text-white mb-3">{faq.question}</h2>
            <p className="text-white/80 leading-relaxed text-sm">{faq.answer}</p>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 px-4 md:px-8 py-12 mt-auto">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 items-start">
          <div className="flex items-center gap-3">
            <img src={lobsterImg} alt="Blue Lobster" className="h-16 w-auto brightness-0 invert flex-shrink-0" />
            <span className="font-serif text-xl font-bold tracking-tight text-white">BLUE LOBSTER</span>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/70 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

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
