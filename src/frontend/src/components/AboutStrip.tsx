import { Clock, Gem, Truck } from "lucide-react";
import { motion } from "motion/react";

const VALUES = [
  {
    icon: Gem,
    title: "Premium Materials",
    desc: "Only the finest leathers, wools, and technical fabrics sourced from European ateliers.",
  },
  {
    icon: Clock,
    title: "Timeless Design",
    desc: "Each silhouette is engineered to transcend seasons — investment pieces built to last a lifetime.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Complimentary worldwide delivery on all orders, with discreet luxury packaging included.",
  },
];

export default function AboutStrip() {
  return (
    <section
      id="about"
      className="border-t border-b border-border/40 py-20 bg-card/50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-start gap-4 md:px-8 md:border-r md:border-border/40 last:border-r-0"
            >
              <v.icon size={20} className="text-primary" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
