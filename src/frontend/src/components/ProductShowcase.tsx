import { Award, Sparkles, Zap } from "lucide-react";

export default function ProductShowcase() {
  return (
    <section className="relative py-24 px-4">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-display text-5xl md:text-6xl">
            The <span className="gradient-text">Ultimate</span> Spicy Snack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Twisted, crunchy, and packed with authentic red chilli flavor that
            keeps you coming back for more
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Feature 1 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Authentic Flavor
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Made with real red chilli peppers for an authentic, bold taste
                that tingles your taste buds
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Perfect Crunch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Twisted to perfection for that satisfying crunch in every single
                bite
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl text-foreground">
                Crowd Favorite
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                India's most loved spicy snack, perfect for parties, movie
                nights, or anytime cravings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
