import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  Mountain,
  Landmark,
  Waves,
  Heart,
  Baby,
  PartyPopper,
  Zap,
  Scale,
  Leaf,
  Sun,
  Sailboat,
  Building2,
  TreePine,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

interface QuizOption {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  location: string;
}

interface Itinerary {
  title: string;
  tagline: string;
  duration: string;
  highlights: string[];
  days: ItineraryDay[];
}

const questions: QuizQuestion[] = [
  {
    id: "interest",
    question: "What excites you most about travel?",
    subtitle: "Choose what speaks to your soul",
    options: [
      { id: "food", label: "Culinary Experiences", icon: <Utensils className="w-6 h-6" />, description: "Local flavors, fresh seafood, farm-to-table dining" },
      { id: "adventure", label: "Outdoor Adventure", icon: <Mountain className="w-6 h-6" />, description: "Hiking, sailing, kayaking & exploring nature" },
      { id: "culture", label: "History & Culture", icon: <Landmark className="w-6 h-6" />, description: "Historic sites, museums, architecture & art" },
      { id: "relax", label: "Rest & Relaxation", icon: <Waves className="w-6 h-6" />, description: "Beaches, spas, scenic drives & peaceful retreats" },
    ],
  },
  {
    id: "companions",
    question: "Who's joining you on this journey?",
    subtitle: "We'll tailor the experience to your group",
    options: [
      { id: "solo", label: "Just Me", icon: <Star className="w-6 h-6" />, description: "A personal voyage of discovery" },
      { id: "partner", label: "With My Partner", icon: <Heart className="w-6 h-6" />, description: "A romantic escape for two" },
      { id: "family", label: "Family Trip", icon: <Baby className="w-6 h-6" />, description: "Fun and memories for all ages" },
      { id: "friends", label: "Friends Getaway", icon: <PartyPopper className="w-6 h-6" />, description: "Good times with great company" },
    ],
  },
  {
    id: "pace",
    question: "What's your ideal travel pace?",
    subtitle: "How do you like to experience a destination?",
    options: [
      { id: "packed", label: "Action-Packed", icon: <Zap className="w-6 h-6" />, description: "See and do as much as possible" },
      { id: "balanced", label: "Balanced Mix", icon: <Scale className="w-6 h-6" />, description: "A blend of activity and downtime" },
      { id: "slow", label: "Slow & Savored", icon: <Leaf className="w-6 h-6" />, description: "Linger longer, fewer destinations" },
    ],
  },
  {
    id: "setting",
    question: "Which setting calls to you?",
    subtitle: "Where do you feel most alive?",
    options: [
      { id: "coastal", label: "Coastal & Maritime", icon: <Sailboat className="w-6 h-6" />, description: "Lighthouses, harbors, ocean breezes" },
      { id: "urban", label: "Vibrant Cities", icon: <Building2 className="w-6 h-6" />, description: "Bustling streets, nightlife, shopping" },
      { id: "countryside", label: "Rural & Rustic", icon: <TreePine className="w-6 h-6" />, description: "Rolling hills, farmland, covered bridges" },
      { id: "mixed", label: "A Bit of Everything", icon: <Sun className="w-6 h-6" />, description: "Variety is the spice of travel" },
    ],
  },
];

function generateItinerary(answers: Record<string, string>): Itinerary {
  const { interest, companions, pace, setting } = answers;

  if (interest === "food" && setting === "coastal") {
    return {
      title: "The New England Seafood Trail",
      tagline: "A culinary voyage along the coast, from lobster shacks to Michelin-starred kitchens",
      duration: "5 Days / 4 Nights",
      highlights: ["Private oyster farm tour", "Lobster bake on the beach", "Wine tasting in Newport"],
      days: [
        { day: 1, title: "Portland, Maine — Foodie Capital", location: "Portland, ME", activities: ["Arrive and explore the Old Port district", "Lunch at a waterfront lobster pound", "Evening food walking tour through Portland's award-winning restaurant scene"] },
        { day: 2, title: "Kennebunkport — Coastal Flavors", location: "Kennebunkport, ME", activities: ["Morning visit to a working lobster boat", "Private oyster farm experience", "Farm-to-table dinner at a seaside inn"] },
        { day: 3, title: "Cape Cod — Ocean Harvest", location: "Cape Cod, MA", activities: ["Drive down the scenic coast to Cape Cod", "Clam chowder tasting at multiple local spots", "Sunset cocktails overlooking Chatham Harbor"] },
        { day: 4, title: "Newport — Fine Dining & Wine", location: "Newport, RI", activities: ["Morning Cliff Walk with coffee stop", "Vineyard tour and wine tasting", "Elegant seafood dinner at a mansion-turned-restaurant"] },
        { day: 5, title: "Providence — Sweet Farewell", location: "Providence, RI", activities: ["Brunch at a Federal Hill Italian gem", "Visit to a local chocolate maker", "Depart with a cooler of New England treats"] },
      ],
    };
  }

  if (interest === "adventure") {
    return {
      title: "Wild New England Explorer",
      tagline: "From mountain peaks to ocean depths — an adventure through America's oldest wilderness",
      duration: "6 Days / 5 Nights",
      highlights: ["Acadia National Park sunrise hike", "Whale watching expedition", "Sea kayaking along the coast"],
      days: [
        { day: 1, title: "Acadia National Park — Summit & Sea", location: "Bar Harbor, ME", activities: ["Early morning Cadillac Mountain sunrise hike", "Explore Jordan Pond and the carriage roads by bike", "Evening seafood dinner in Bar Harbor village"] },
        { day: 2, title: "Acadia — Ocean Adventures", location: "Bar Harbor, ME", activities: ["Morning sea kayaking along the rugged coast", "Afternoon whale watching expedition", "Explore Thunder Hole and Sand Beach at low tide"] },
        { day: 3, title: "White Mountains — Alpine Thrills", location: "White Mountains, NH", activities: ["Drive through scenic New Hampshire countryside", "Hike the Franconia Ridge Trail or take the Cannon Mountain aerial tramway", "Evening at a rustic mountain lodge"] },
        { day: 4, title: "Vermont — River & Trail", location: "Stowe, VT", activities: ["Morning river tubing or fly fishing", "Afternoon mountain biking on Stowe trails", "Visit a local brewery for post-adventure drinks"] },
        { day: 5, title: "Rhode Island — Coastal Thrills", location: "Newport, RI", activities: ["Morning sailing lesson in Narragansett Bay", "Cliff Walk coastal hike", "Sunset paddleboard session"] },
        { day: 6, title: "Cape Cod — Final Paddle", location: "Cape Cod, MA", activities: ["Morning surf lesson or beach walk", "Explore the Cape Cod Rail Trail by bike", "Farewell clam bake on the beach"] },
      ],
    };
  }

  if (interest === "culture") {
    return {
      title: "New England Heritage Journey",
      tagline: "Walk through centuries of American history, from the Mayflower to the Gilded Age",
      duration: "5 Days / 4 Nights",
      highlights: ["Private Gilded Age mansion tour", "Freedom Trail walking tour", "Mystic Seaport living museum"],
      days: [
        { day: 1, title: "Boston — Revolutionary Roots", location: "Boston, MA", activities: ["Walk the Freedom Trail through 16 historic sites", "Visit the Museum of Fine Arts or Isabella Stewart Gardner Museum", "Evening dinner in the historic North End"] },
        { day: 2, title: "Salem & Concord — Literary Legends", location: "Salem & Concord, MA", activities: ["Morning in Salem: Peabody Essex Museum and maritime history", "Afternoon in Concord: Walden Pond and authors' homes", "Browse independent bookshops and artisan galleries"] },
        { day: 3, title: "Newport — Gilded Age Grandeur", location: "Newport, RI", activities: ["Private guided tour of The Breakers and Marble House", "Walk the Cliff Walk with its ocean vistas", "Evening jazz at a waterfront venue"] },
        { day: 4, title: "Mystic — Maritime Heritage", location: "Mystic, CT", activities: ["Full day at Mystic Seaport Museum — America's leading maritime museum", "Board a historic tall ship", "Fresh seafood at Mystic's legendary pizza restaurant"] },
        { day: 5, title: "Plymouth — Where It Began", location: "Plymouth, MA", activities: ["Visit Plymouth Rock and the Mayflower II", "Plimoth Patuxet living history museum", "Depart inspired by centuries of stories"] },
      ],
    };
  }

  if (interest === "relax" && (companions === "partner" || companions === "solo")) {
    return {
      title: "Coastal Serenity Retreat",
      tagline: "Slow down, breathe deep, and let the rhythm of the Atlantic restore your spirit",
      duration: "4 Days / 3 Nights",
      highlights: ["Oceanfront spa day", "Private sunset sail", "Beachside yoga sessions"],
      days: [
        { day: 1, title: "Nantucket — Island Tranquility", location: "Nantucket, MA", activities: ["Ferry ride to the island with champagne", "Check into a boutique inn with ocean views", "Sunset beach walk and candlelit dinner"] },
        { day: 2, title: "Nantucket — Slow Morning, Gentle Afternoon", location: "Nantucket, MA", activities: ["Morning beachside yoga session", "Leisurely bike ride through cobblestone streets", "Full spa treatment at a luxury wellness retreat"] },
        { day: 3, title: "Cape Cod — Coastal Calm", location: "Cape Cod, MA", activities: ["Private sailing excursion along the coastline", "Picnic lunch at a secluded beach", "Evening wine tasting at a local vineyard"] },
        { day: 4, title: "Providence — Gentle Farewell", location: "Providence, RI", activities: ["Late morning brunch at a waterfront café", "Stroll through Waterplace Park", "Depart feeling refreshed and renewed"] },
      ],
    };
  }

  if (companions === "family") {
    return {
      title: "New England Family Adventure",
      tagline: "Create lifelong memories with experiences the whole family will treasure",
      duration: "5 Days / 4 Nights",
      highlights: ["Whale watching with marine biologists", "Beach bonfire & s'mores", "Working farm visit"],
      days: [
        { day: 1, title: "Boston — City Discovery", location: "Boston, MA", activities: ["Boston Duck Tour through the city and harbor", "New England Aquarium — touch tanks and penguin exhibits", "Dinner at Faneuil Hall Marketplace"] },
        { day: 2, title: "Cape Cod — Beach & Wildlife", location: "Cape Cod, MA", activities: ["Morning at Nauset Beach with boogie boarding", "Whale watching cruise from Provincetown", "Evening mini golf and ice cream in Chatham"] },
        { day: 3, title: "Mystic — Marine Wonders", location: "Mystic, CT", activities: ["Mystic Aquarium — beluga whales and sea lions", "Explore a historic sailing ship", "Mystic Pizza dinner (yes, from the movie!)"] },
        { day: 4, title: "Vermont — Farm & Nature", location: "Stowe, VT", activities: ["Visit a working maple syrup farm", "Easy family hike to a swimming hole", "Ben & Jerry's factory tour (with free samples!)"] },
        { day: 5, title: "Maine — Lobster & Lighthouse", location: "Portland, ME", activities: ["Portland Head Lighthouse and fort exploration", "Catch-your-own-lobster experience", "Beach bonfire with s'mores before heading home"] },
      ],
    };
  }

  if (setting === "urban" || (interest === "food" && setting === "urban")) {
    return {
      title: "New England City Hopper",
      tagline: "Experience the energy, culture, and cuisine of New England's most vibrant cities",
      duration: "5 Days / 4 Nights",
      highlights: ["Rooftop cocktails in Boston", "Providence art scene", "Portland food tour"],
      days: [
        { day: 1, title: "Boston — Urban Exploration", location: "Boston, MA", activities: ["Explore Back Bay and Newbury Street boutiques", "Visit the ICA or Isabella Stewart Gardner Museum", "Rooftop drinks with harbor views"] },
        { day: 2, title: "Boston — Neighborhoods & Nightlife", location: "Boston, MA", activities: ["Morning at the Boston Public Market", "Afternoon in Cambridge: Harvard Yard and indie bookshops", "Evening in Somerville's live music scene"] },
        { day: 3, title: "Providence — Creative Capital", location: "Providence, RI", activities: ["RISD Museum of Art", "Federal Hill Italian food tour", "WaterFire art installation (seasonal)"] },
        { day: 4, title: "Newport — Elegance & Edge", location: "Newport, RI", activities: ["Thames Street shopping and galleries", "Cliff Walk with mansion views", "Craft cocktails at a waterfront lounge"] },
        { day: 5, title: "Portland — Food City Finale", location: "Portland, ME", activities: ["Old Port food walking tour", "Visit local breweries and distilleries", "Farewell dinner at a James Beard Award nominee"] },
      ],
    };
  }

  return {
    title: "Classic New England Discovery",
    tagline: "The perfect introduction to everything that makes New England extraordinary",
    duration: "5 Days / 4 Nights",
    highlights: ["Scenic coastal drives", "Authentic local experiences", "Mix of culture, nature & cuisine"],
    days: [
      { day: 1, title: "Boston — Gateway to New England", location: "Boston, MA", activities: ["Walk the Freedom Trail through historic landmarks", "Lunch in the North End — Boston's Little Italy", "Evening harbor cruise at sunset"] },
      { day: 2, title: "Cape Cod — Seaside Charm", location: "Cape Cod, MA", activities: ["Scenic drive along Route 6A through quaint villages", "Beach time at one of Cape Cod's best stretches", "Fresh seafood dinner overlooking the harbor"] },
      { day: 3, title: "Newport — Gilded Elegance", location: "Newport, RI", activities: ["Tour a magnificent Gilded Age mansion", "Walk the scenic Cliff Walk", "Dinner at a waterfront restaurant"] },
      { day: 4, title: "Vermont — Mountain & Meadow", location: "Stowe, VT", activities: ["Scenic drive through the Green Mountains", "Visit a local farm and cheese maker", "Afternoon hike to a stunning overlook"] },
      { day: 5, title: "Portland — Farewell Feast", location: "Portland, ME", activities: ["Explore the Old Port's cobblestone streets", "Visit Portland Head Light — the iconic lighthouse", "Farewell lobster dinner at a classic waterfront spot"] },
    ],
  };
}

export default function DestinationBuilder() {
  const [, navigate] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const totalSteps = questions.length;
  const progress = showResults ? 100 : ((currentStep) / totalSteps) * 100;

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;
    const newAnswers = { ...answers, [questions[currentStep].id]: selectedOption };
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedOption(answers[questions[currentStep - 1].id] || null);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setSelectedOption(null);
  };

  const itinerary = showResults ? generateItinerary(answers) : null;

  useEffect(() => {
    document.title = "Destination Builder - Blue Lobster Travel Company";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Build your dream New England trip with our interactive quiz. Get personalized itinerary recommendations based on your travel style.");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-background text-foreground">
      <Navbar />

      <div className="relative pt-24 pb-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
              Destination Builder
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">
              {showResults ? "Your Perfect Itinerary" : "Build Your Dream Trip"}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {showResults
                ? "Based on your preferences, here's a curated New England experience just for you."
                : "Answer a few quick questions and we'll craft a personalized New England adventure."}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full -mt-4">
        <div className="h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        {!showResults && (
          <p className="text-muted-foreground text-sm mt-2 text-center">
            Question {currentStep + 1} of {totalSteps}
          </p>
        )}
      </div>

      <div className="flex-1 max-w-4xl mx-auto px-4 md:px-8 w-full py-12">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-2 text-center">
                {questions[currentStep].question}
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                {questions[currentStep].subtitle}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {questions[currentStep].options.map((option) => (
                  <button
                    key={option.id}
                    data-testid={`quiz-option-${option.id}`}
                    onClick={() => handleSelect(option.id)}
                    className={`group relative text-left p-6 border-2 rounded-md transition-all duration-200 ${
                      selectedOption === option.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-md transition-colors ${
                        selectedOption === option.id
                          ? "bg-accent text-white"
                          : "bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent"
                      }`}>
                        {option.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{option.label}</h3>
                        <p className="text-sm text-muted-foreground">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center mt-10">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="rounded-none gap-2"
                  data-testid="button-quiz-back"
                >
                  <ArrowLeft className="w-4 h-4" /> Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedOption}
                  className="rounded-none gap-2 bg-accent text-white"
                  data-testid="button-quiz-next"
                >
                  {currentStep === totalSteps - 1 ? "See My Itinerary" : "Next"} <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ) : itinerary ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-3">{itinerary.title}</h2>
                <p className="text-muted-foreground text-lg italic">{itinerary.tagline}</p>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-accent" /> {itinerary.duration}
                  </span>
                  {itinerary.highlights.map((h, i) => (
                    <span key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-accent" /> {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {itinerary.days.map((day, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="border border-border rounded-md p-6 hover:border-accent/40 transition-colors"
                    data-testid={`itinerary-day-${day.day}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-white font-bold text-sm shrink-0">
                        {day.day}
                      </span>
                      <div>
                        <h3 className="text-xl font-serif text-primary">{day.title}</h3>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" /> {day.location}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2 ml-14">
                      {day.activities.map((activity, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 text-center space-y-4">
                <p className="text-muted-foreground">
                  Love this itinerary? Let us bring it to life for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="rounded-none bg-accent text-white gap-2 h-14 px-8 uppercase tracking-widest text-sm font-semibold"
                    onClick={() => {
                      const name = itinerary?.title || "";
                      navigate(`/book?itinerary=${encodeURIComponent(name)}`);
                    }}
                    data-testid="button-book-itinerary"
                  >
                    Book This Trip <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none gap-2 h-14 px-8"
                    onClick={handleRestart}
                    data-testid="button-retake-quiz"
                  >
                    <RotateCcw className="w-4 h-4" /> Start Over
                  </Button>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
