import { motion } from "framer-motion";
import { Link } from "wouter";
import { Instagram } from "lucide-react";
import { Navbar } from "@/components/navbar";
import lobsterImg from "@assets/4_1772409867670.png";

const sections = [
  {
    number: "1.",
    title: "Information We Collect",
    content: (
      <div className="text-white/80 text-sm leading-relaxed space-y-2">
        <p>We may collect the following information:</p>
        <ul className="space-y-1 pl-2">
          <li><span className="text-white">Personal Information:</span> Name, email address, phone number, billing information, and travel preferences.</li>
          <li><span className="text-white">Payment Information:</span> Credit card or other payment data processed via secure third-party processors.</li>
          <li><span className="text-white">Usage Information:</span> Information about how you use our website, including IP address, browser type, pages visited, and time spent.</li>
          <li><span className="text-white">Third-Party Information:</span> Data provided by travel advisors, tour operators, or other partners when they book services on your behalf.</li>
        </ul>
      </div>
    ),
  },
  {
    number: "2.",
    title: "How We Use Your Information",
    content: (
      <div className="text-white/80 text-sm leading-relaxed space-y-2">
        <p>We use your information to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Provide and manage your travel services, itineraries, and bookings.</li>
          <li>Communicate with you regarding your inquiries, bookings, or updates.</li>
          <li>Process payments securely and manage invoicing.</li>
          <li>Improve our website, services, and customer experience.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>
      </div>
    ),
  },
  {
    number: "3.",
    title: "Sharing and Disclosure",
    content: (
      <div className="text-white/80 text-sm leading-relaxed space-y-2">
        <p>We do not sell or rent your personal information. We may share your information with:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Travel suppliers (hotels, transportation providers, guides, attractions) to fulfill bookings.</li>
          <li>Travel advisors or tour operators for B2B arrangements.</li>
          <li>Service providers who assist us with website hosting, payment processing, or marketing.</li>
          <li>Legal authorities if required by law or to protect our legal rights.</li>
        </ul>
      </div>
    ),
  },
  {
    number: "4.",
    title: "Data Security",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        We implement reasonable administrative, technical, and physical safeguards to protect your personal information. Payment information is processed securely through trusted third-party payment processors. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    number: "5.",
    title: "Your Choices",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        You may update, correct, or delete your personal information by contacting us at info@bluelobstertravelco.com. You may opt out of marketing emails or communications at any time.
      </p>
    ),
  },
  {
    number: "6.",
    title: "Cookies and Tracking",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        We may use cookies, analytics, and other tracking technologies to enhance user experience and improve our website. You may adjust your browser settings to refuse cookies, though some functionality may be affected.
      </p>
    ),
  },
  {
    number: "7.",
    title: "Minors",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from minors.
      </p>
    ),
  },
  {
    number: "8.",
    title: "Third-Party Links",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to read their privacy policies.
      </p>
    ),
  },
  {
    number: "9.",
    title: "Changes to This Privacy Policy",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        We may update this Privacy Policy periodically. Continued use of our website or services constitutes acceptance of any changes.
      </p>
    ),
  },
  {
    number: "10.",
    title: "Contact Us",
    content: (
      <div className="text-white/80 text-sm leading-relaxed space-y-1">
        <p>For questions or requests regarding your personal information or this Privacy Policy, contact:</p>
        <p className="text-white">Blue Lobster Travel Company, LLC</p>
        <p>Email: info@bluelobstertravelco.com</p>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col font-sans" style={{ backgroundColor: "#406b8c" }}>
      <Navbar />

      <section className="pt-44 pb-16 text-center px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-serif tracking-wide"
          style={{ color: "#e4c5af" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          className="text-white/60 text-sm mt-4 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Blue Lobster Travel Company, LLC respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and safeguard information when you visit our website or use our services, in compliance with U.S. and Massachusetts law.
        </motion.p>
      </section>

      <section className="max-w-3xl mx-auto px-4 md:px-8 pb-24 w-full">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            className="mb-10 border-b border-white/10 pb-10 last:border-b-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
          >
            <h2 className="text-xl font-serif text-white mb-3">
              <span style={{ color: "#e4c5af" }}>{section.number}</span> {section.title}
            </h2>
            {section.content}
          </motion.div>
        ))}
      </section>

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
              <li><Link href="/faq" className="text-white/70 hover:text-white text-sm transition-colors">FAQ</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white text-sm transition-colors">Terms and Conditions</Link></li>
              <li><Link href="/#contact" className="text-white/70 hover:text-white text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-4">Follow Us</h4>
            <a href="https://www.instagram.com/bluelobstertravelco/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
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
