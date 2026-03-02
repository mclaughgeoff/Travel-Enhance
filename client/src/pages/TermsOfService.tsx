import { motion } from "framer-motion";
import { Link } from "wouter";
import { Instagram } from "lucide-react";
import { Navbar } from "@/components/navbar";
import lobsterImg from "@assets/4_1772409867670.png";

const sections = [
  {
    number: "1.",
    title: "Company Information",
    content: (
      <ul className="space-y-1 text-white/80 text-sm leading-relaxed">
        <li><span className="text-white/50">Legal Name:</span> Blue Lobster Travel Company, LLC</li>
        <li><span className="text-white/50">Jurisdiction:</span> Commonwealth of Massachusetts, USA</li>
        <li><span className="text-white/50">Business Type:</span> Destination Management Company & Travel Planning Services</li>
        <li><span className="text-white/50">Contact:</span> info@bluelobstertravelco.com</li>
      </ul>
    ),
  },
  {
    number: "2.",
    title: "Scope of Services",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Blue Lobster provides bespoke travel planning, itinerary design, destination management, and related coordination services for both individual clients (B2C) and professional partners (B2B), including travel advisors, tour operators, and corporate clients. We do not own, operate, or control airlines, hotels, transportation companies, guides, or other travel suppliers. All such services are provided by independent third-party suppliers.
      </p>
    ),
  },
  {
    number: "3.",
    title: "Role as Agent and DMC",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Blue Lobster acts solely as an agent and planner. We are not responsible for the acts, omissions, errors, negligence, warranties, or representations of any third-party suppliers. If you book services on behalf of other travelers, you represent that you have authority to accept these Terms on their behalf and that all travelers agree to be bound by them.
      </p>
    ),
  },
  {
    number: "4.",
    title: "Booking, Payments, and Fees",
    content: (
      <div className="space-y-4 text-white/80 text-sm leading-relaxed">
        <div>
          <p className="text-white font-semibold mb-1">4.1 Authority to Collect Payments</p>
          <p>Blue Lobster is authorized to collect payments directly from clients, travel advisors, tour operators, and corporate entities for planning fees and third-party travel services.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">4.2 Planning and Consulting Fees</p>
          <p>Planning, design, consulting, and management fees are earned upon commencement of work and are non-refundable, unless expressly stated otherwise in writing.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">4.3 Client Funds and Supplier Payments</p>
          <p>Client funds may be temporarily held for the purpose of remitting payment to third-party suppliers. Blue Lobster does not act as a fiduciary, escrow agent, or trustee of client funds unless required by applicable law.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">4.4 Booking Confirmation and Contract Formation</p>
          <p>A binding contract is formed when Blue Lobster receives a required deposit or full payment, whether paid directly by the client or by a third party on the client's behalf.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">4.5 Pricing, Taxes, and Currency</p>
          <p>All prices are quoted in U.S. Dollars unless otherwise stated and are subject to change due to availability, supplier pricing, taxes, fees, surcharges, or circumstances beyond our control.</p>
        </div>
      </div>
    ),
  },
  {
    number: "5.",
    title: "Changes, Cancellations, and Refunds",
    content: (
      <div className="space-y-4 text-white/80 text-sm leading-relaxed">
        <div>
          <p className="text-white font-semibold mb-1">5.1 Client-Initiated Changes</p>
          <p>Changes requested after booking confirmation may result in additional planning fees, supplier change fees, or price increases. All such costs are the responsibility of the client.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">5.2 Cancellations</p>
          <p>Cancellation terms vary by supplier and itinerary and will be provided in your proposal, invoice, or booking confirmation. Unless expressly stated otherwise: Planning and consulting fees are non-refundable. Supplier cancellation penalties may equal up to 100% of the booking cost.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">5.3 Supplier-Initiated Changes</p>
          <p>If a supplier makes a material change to a confirmed service, Blue Lobster will use reasonable efforts to offer a suitable alternative. Acceptance of an alternative constitutes full satisfaction of our obligations. Any refunds are limited to amounts actually recovered from the supplier.</p>
        </div>
        <div>
          <p className="text-white font-semibold mb-1">5.4 Force Majeure</p>
          <p>Blue Lobster is not liable for delays, changes, or cancellations caused by events beyond our reasonable control, including but not limited to natural disasters, severe weather, acts of God, pandemics, government actions, labor disputes, transportation disruptions, utility failures, or acts of terrorist or other unlawful parties.</p>
        </div>
      </div>
    ),
  },
  {
    number: "6.",
    title: "Travel Insurance",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        We strongly recommend that all clients obtain comprehensive travel insurance covering trip cancellation, interruption, medical expenses, evacuation, and supplier default. Failure to obtain insurance is at the client's own risk.
      </p>
    ),
  },
  {
    number: "7.",
    title: "Client Responsibilities",
    content: (
      <div className="text-white/80 text-sm leading-relaxed space-y-3">
        <p>Clients are responsible for:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Providing accurate personal, travel, and payment information.</li>
          <li>Reviewing itineraries, invoices, and confirmations for accuracy.</li>
          <li>Ensuring valid passports, visas, entry permits, and required documentation.</li>
          <li>Complying with applicable health, safety, vaccination, and entry requirements.</li>
          <li>Disclosing medical conditions, allergies, dietary requirements, mobility limitations, or special needs.</li>
        </ul>
        <p>Blue Lobster does not guarantee that special requests will be accommodated by suppliers and assumes no liability for a supplier's failure to do so.</p>
      </div>
    ),
  },
  {
    number: "8.",
    title: "Assumption of Risk",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Travel involves inherent risks. By booking services, you voluntarily assume all risks associated with travel, including injury, illness, property damage, delays, or death.
      </p>
    ),
  },
  {
    number: "9.",
    title: "Limitation of Liability",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        To the fullest extent permitted by Massachusetts law, Blue Lobster's total liability shall not exceed the fees paid directly to Blue Lobster for services rendered. Blue Lobster shall not be liable for any indirect, incidental, consequential, or punitive damages.
      </p>
    ),
  },
  {
    number: "10.",
    title: "Indemnification",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        You agree to indemnify and hold harmless Blue Lobster Travel Company, LLC, its owners, employees, and agents from any claims, damages, losses, or expenses arising out of your breach of these Terms or your use of our services.
      </p>
    ),
  },
  {
    number: "11.",
    title: "Intellectual Property",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        All website content, itineraries, designs, branding, and materials are the intellectual property of Blue Lobster and may not be used or reproduced without prior written consent.
      </p>
    ),
  },
  {
    number: "12.",
    title: "Privacy Policy",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Your use of this website is subject to our Privacy Policy, which describes how we collect, use, and protect personal information.
      </p>
    ),
  },
  {
    number: "13.",
    title: "Website Use",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        You agree not to misuse the website, attempt unauthorized access, or copy or scrape website content. We reserve the right to restrict or terminate access at our discretion.
      </p>
    ),
  },
  {
    number: "14.",
    title: "Governing Law and Venue",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        These Terms are governed by the laws of the Commonwealth of Massachusetts, without regard to conflict-of-law principles. Any legal action shall be brought exclusively in the state or federal courts located in Massachusetts.
      </p>
    ),
  },
  {
    number: "15.",
    title: "Arbitration",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        At Blue Lobster's discretion, disputes may be resolved through binding arbitration in Massachusetts, except where prohibited by law.
      </p>
    ),
  },
  {
    number: "16.",
    title: "Severability",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        If any provision of these Terms is held unenforceable, the remaining provisions shall remain in full force and effect.
      </p>
    ),
  },
  {
    number: "17.",
    title: "Updates to These Terms",
    content: (
      <p className="text-white/80 text-sm leading-relaxed">
        Blue Lobster reserves the right to update these Terms at any time. Continued use of the website or services constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    number: "18.",
    title: "Contact Information",
    content: (
      <div className="text-white/80 text-sm leading-relaxed space-y-1">
        <p>For questions regarding these Terms:</p>
        <p className="text-white">Blue Lobster Travel Company, LLC</p>
        <p>Email: info@bluelobstertravelco.com</p>
      </div>
    ),
  },
];

export default function TermsOfService() {
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
          Terms and Conditions
        </motion.h1>
        <motion.p
          className="text-white/60 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Blue Lobster Travel Company, LLC &mdash; Commonwealth of Massachusetts
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
