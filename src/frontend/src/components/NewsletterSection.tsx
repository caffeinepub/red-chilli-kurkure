import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're on the list. Expect something extraordinary.");
    setEmail("");
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-primary/70"
        >
          Stay Informed
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4"
        >
          Join the Inner Circle
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground leading-relaxed mb-10"
        >
          Be the first to know about new arrivals, exclusive limited editions,
          and private events curated for our members.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border border-border/60"
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-ocid="newsletter.input"
            className="flex-1 bg-transparent border-0 border-r border-border/60 placeholder:text-muted-foreground/50 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none h-12 px-5"
            required
          />
          <button
            type="submit"
            data-ocid="newsletter.submit_button"
            className="bg-primary text-primary-foreground text-xs tracking-widest uppercase px-8 h-12 hover:opacity-90 transition-opacity whitespace-nowrap font-medium"
          >
            Subscribe
          </button>
        </motion.form>

        <p className="mt-4 text-xs text-muted-foreground/50">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
