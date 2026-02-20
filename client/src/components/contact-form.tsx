import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useCreateContact } from "@/hooks/use-contacts";
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
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const { mutate, isPending } = useCreateContact();
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl shadow-primary/5 max-w-xl mx-auto border border-border/50">
      <div className="text-center mb-10">
        <h3 className="font-serif text-3xl md:text-4xl text-primary mb-4">Start Your Journey</h3>
        <p className="text-muted-foreground">
          Tell us about your dream New England experience, and we'll craft the perfect itinerary for you.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Jane Doe" 
                    className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12 bg-secondary/20" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary font-medium">Email</FormLabel>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="jane@example.com" 
                    className="rounded-none border-primary/20 focus-visible:ring-primary/20 h-12 bg-secondary/20" 
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
                <FormLabel className="text-primary font-medium">How can we help?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="I'm planning a trip to..." 
                    className="rounded-none border-primary/20 focus-visible:ring-primary/20 min-h-[120px] bg-secondary/20 resize-none" 
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
          >
            {isPending ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> SENDING...</>
            ) : (
              <><Send className="mr-2 h-4 w-4" /> SEND INQUIRY</>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
