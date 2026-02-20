import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contacts";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { motion } from "framer-motion";
import { Loader2, Send, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { useSearch } from "wouter";

export default function BookTrip() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const itineraryName = params.get("itinerary") || "";

  const { mutate, isPending, isSuccess } = useCreateContact();

  const bookingSchema = insertContactSchema.extend({
    name: insertContactSchema.shape.name.min(2, "Please enter your name"),
    email: insertContactSchema.shape.email.email("Please enter a valid email"),
    message: insertContactSchema.shape.message.min(10, "Tell us a bit more about your trip"),
  });

  const form = useForm<InsertContact>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: itineraryName
        ? `I'm interested in the "${itineraryName}" itinerary. `
        : "",
      itinerary: itineraryName || "",
    },
  });

  useEffect(() => {
    document.title = "Book Your Trip - Blue Lobster Travel Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Get in touch with a Blue Lobster Travel agent to book your perfect New England trip.");
    }
  }, []);

  const onSubmit = (data: InsertContact) => {
    mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      <div className="relative pt-24 pb-16 bg-primary text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505245208761-ba872912fac0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
              Book Your Trip
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
              Let's Plan Your Adventure
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {itineraryName
                ? `You've selected "${itineraryName}" — fill out the form below and a travel agent will reach out to finalize your trip.`
                : "Fill out the form below and one of our expert travel agents will get in touch to craft your ideal New England experience."}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSuccess ? (
              <div className="bg-white p-8 md:p-12 shadow-2xl shadow-primary/5 border border-border/50 text-center" data-testid="booking-success">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h2 className="font-serif text-3xl text-primary mb-4">Thank You!</h2>
                <p className="text-muted-foreground text-lg mb-2">
                  Your booking request has been received.
                </p>
                <p className="text-muted-foreground">
                  One of our travel agents will be in touch within 24 hours to discuss your trip details.
                </p>
                {itineraryName && (
                  <div className="mt-6 p-4 bg-secondary/30 border border-border/50">
                    <p className="text-sm text-muted-foreground">Selected Itinerary</p>
                    <p className="font-serif text-xl text-primary mt-1" data-testid="text-confirmed-itinerary">{itineraryName}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white p-8 md:p-12 shadow-2xl shadow-primary/5 border border-border/50">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-primary mb-2">Contact Your Travel Agent</h2>
                  <p className="text-muted-foreground">
                    Share your details and preferences, and we'll take care of the rest.
                  </p>
                </div>

                {itineraryName && (
                  <div className="mb-8 p-4 bg-accent/5 border border-accent/20 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Selected Itinerary</p>
                      <p className="font-serif text-lg text-primary" data-testid="text-selected-itinerary">{itineraryName}</p>
                    </div>
                  </div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="booking-form">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane Doe"
                                className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12 bg-secondary/20"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-primary font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="(555) 123-4567"
                                className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12 bg-secondary/20"
                                data-testid="input-phone"
                                {...field}
                                value={field.value || ""}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="jane@example.com"
                              className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12 bg-secondary/20"
                              data-testid="input-email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-primary font-medium">Tell Us About Your Dream Trip</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="I'd love to explore the coast of Maine in early fall..."
                              className="rounded-none border-primary/20 focus-visible:ring-primary/20 min-h-[140px] bg-secondary/20 resize-none"
                              data-testid="input-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full h-14 rounded-none text-base uppercase tracking-widest font-semibold bg-primary hover:bg-primary/90 text-white"
                      data-testid="button-submit-booking"
                    >
                      {isPending ? (
                        <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> SENDING...</>
                      ) : (
                        <><Send className="mr-2 h-4 w-4" /> SEND BOOKING REQUEST</>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-8 sticky top-32">
              <div>
                <h3 className="font-serif text-2xl text-primary mb-4">Why Blue Lobster?</h3>
                <ul className="space-y-4">
                  {[
                    "Curated experiences by New England locals",
                    "Exclusive access to hidden coastal gems",
                    "Personalized itineraries tailored to you",
                    "24/7 concierge support during your trip",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border/50 pt-8">
                <h3 className="font-serif text-2xl text-primary mb-4">Get In Touch</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent" />
                    <span>(617) 555-0199</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>bookings@bluelobstertravel.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span>Newport, Rhode Island</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <footer className="bg-primary text-white/60 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Blue Lobster Travel Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
