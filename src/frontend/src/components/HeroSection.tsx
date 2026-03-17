import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-jacket.dim_1200x700.jpg"
          alt="Luxury jacket hero"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary/80 font-sans font-medium">
            Premium Collection 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-6xl md:text-8xl font-bold leading-[0.95] mb-6 max-w-2xl"
        >
          Wear the <span className="italic-serif gold-text">Extraordinary</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed mb-10 font-sans"
        >
          Each jacket is a testament to uncompromising craftsmanship. Curated
          for those who define their own elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center gap-4"
        >
          <a
            href="#collection"
            data-ocid="hero.primary_button"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm tracking-widest uppercase font-medium hover:opacity-90 transition-opacity shadow-gold group"
          >
            Shop Collection
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
          <a
            href="#about"
            className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Our Story
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-20 flex gap-10 border-t border-border/40 pt-8"
        >
          {[
            { value: "12+", label: "Signature Styles" },
            { value: "40+", label: "Premium Materials" },
            { value: "100%", label: "Handcrafted" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-2xl font-bold gold-text">
                {stat.value}
              </div>
              <div className="text-xs tracking-widest uppercase text-muted-foreground mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
