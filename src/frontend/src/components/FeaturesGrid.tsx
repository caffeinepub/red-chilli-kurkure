import { Flame, Heart, Sparkles, Star, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Intense Heat",
    description: "Triple-tested red chilli blend for maximum spice impact",
    color: "primary",
  },
  {
    icon: Zap,
    title: "Instant Crunch",
    description: "Perfectly twisted texture that snaps with every bite",
    color: "secondary",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Crafted with premium ingredients and authentic spices",
    color: "accent",
  },
  {
    icon: Users,
    title: "Share the Heat",
    description: "Perfect for sharing with friends and family",
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Bold Flavor",
    description: "Unforgettable taste that keeps you coming back",
    color: "secondary",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Made with the finest ingredients for superior taste",
    color: "accent",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="relative py-24 px-4 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-6xl">
            Why You'll <span className="gradient-text">Love It</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every pack is loaded with flavor, crunch, and that signature spicy
            kick
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClass =
              feature.color === "primary"
                ? "text-primary bg-primary/10 border-primary/20"
                : feature.color === "secondary"
                  ? "text-secondary bg-secondary/10 border-secondary/20"
                  : "text-accent-foreground bg-accent/10 border-accent/20";

            return (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-glow-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border-2 ${colorClass} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="font-display text-xl text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
            <Flame className="w-12 h-12 text-primary animate-pulse-glow" />
            <h3 className="font-display text-3xl gradient-text">
              Ready to Feel the Heat?
            </h3>
            <p className="text-muted-foreground max-w-md">
              Grab a pack of Red Chilli Kurkure and experience the perfect blend
              of spice and crunch!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
