import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import DestinationBuilder from "@/pages/DestinationBuilder";
import BookTrip from "@/pages/BookTrip";
import Newport from "@/pages/Newport";
import Vermont from "@/pages/Vermont";
import Nantucket from "@/pages/Nantucket";
import Maine from "@/pages/Maine";
import Boston from "@/pages/Boston";
import About from "@/pages/About";
import FAQ from "@/pages/FAQ";
import TermsOfService from "@/pages/TermsOfService";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/destination-builder" component={DestinationBuilder} />
      <Route path="/book" component={BookTrip} />
      <Route path="/newport" component={Newport} />
      <Route path="/vermont" component={Vermont} />
      <Route path="/nantucket" component={Nantucket} />
      <Route path="/maine" component={Maine} />
      <Route path="/boston" component={Boston} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms" component={TermsOfService} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
