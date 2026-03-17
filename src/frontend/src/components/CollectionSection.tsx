import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "motion/react";
import { useState } from "react";
import { Badge, Category } from "../backend.d";
import type { Product } from "../backend.d";
import { useGetAllProducts } from "../hooks/useQueries";

const IMAGE_MAP: Record<number, string> = {
  1: "/assets/generated/jacket-1.dim_600x700.jpg",
  2: "/assets/generated/jacket-2.dim_600x700.jpg",
  3: "/assets/generated/jacket-3.dim_600x700.jpg",
  4: "/assets/generated/jacket-4.dim_600x700.jpg",
  5: "/assets/generated/jacket-5.dim_600x700.jpg",
  6: "/assets/generated/jacket-6.dim_600x700.jpg",
};

const BADGE_STYLES: Record<string, string> = {
  [Badge.new_]:
    "bg-emerald-900/60 text-emerald-300 border border-emerald-700/50",
  [Badge.bestseller]:
    "bg-amber-900/60 text-amber-300 border border-amber-700/50",
  [Badge.limitedEdition]:
    "bg-violet-900/60 text-violet-300 border border-violet-700/50",
  [Badge.sale]: "bg-red-900/60 text-red-300 border border-red-700/50",
};

const BADGE_LABELS: Record<string, string> = {
  [Badge.new_]: "New",
  [Badge.bestseller]: "Bestseller",
  [Badge.limitedEdition]: "Limited Edition",
  [Badge.sale]: "Sale",
};

const FILTERS = [
  { label: "All", value: null },
  { label: "Men", value: Category.men },
  { label: "Women", value: Category.women },
  { label: "Unisex", value: Category.unisex },
];

const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6"];

function formatPrice(cents: bigint): string {
  return `$${(Number(cents) / 100).toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const imgSrc = IMAGE_MAP[Number(product.imageIndex)] ?? IMAGE_MAP[1];

  return (
    <motion.div
      data-ocid={`product.item.${index}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index - 1) * 0.07 }}
      className="group flex flex-col bg-card border border-border/50 overflow-hidden"
    >
      <div className="relative overflow-hidden aspect-[3/4] bg-secondary">
        <img
          src={imgSrc}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-[10px] font-medium tracking-widest uppercase px-2 py-1 ${BADGE_STYLES[product.badge] ?? ""}`}
          >
            {BADGE_LABELS[product.badge] ?? product.badge}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-semibold leading-tight">
            {product.name}
          </h3>
          <span className="font-sans text-sm font-medium text-primary whitespace-nowrap">
            {formatPrice(product.priceCents)}
          </span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>
        <button
          type="button"
          data-ocid={`product.button.${index}`}
          className="mt-auto w-full border border-border/60 hover:border-primary/60 hover:bg-primary/5 text-foreground text-xs tracking-widest uppercase py-3 transition-all duration-200"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}

export default function CollectionSection() {
  const [activeFilter, setActiveFilter] = useState<Category | null>(null);
  const { data: products, isLoading } = useGetAllProducts();

  const filtered = products
    ? activeFilter
      ? products.filter((p) => p.category === activeFilter)
      : products
    : [];

  return (
    <section id="collection" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] uppercase text-primary/70"
        >
          Curated Pieces
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mt-2"
        >
          The Collection
        </motion.h2>
      </div>

      <div className="flex gap-1 mb-10 border-b border-border/40">
        {FILTERS.map((f) => (
          <button
            type="button"
            key={f.label}
            data-ocid="filter.tab"
            onClick={() => setActiveFilter(f.value)}
            className={`px-5 py-3 text-xs tracking-widest uppercase transition-all duration-200 ${
              activeFilter === f.value
                ? "text-foreground border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div
          data-ocid="product.loading_state"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {SKELETON_KEYS.map((k) => (
            <div key={k} className="flex flex-col gap-3">
              <Skeleton className="aspect-[3/4] w-full bg-secondary" />
              <Skeleton className="h-4 w-3/4 bg-secondary" />
              <Skeleton className="h-3 w-full bg-secondary" />
            </div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div
          data-ocid="product.empty_state"
          className="py-24 text-center text-muted-foreground"
        >
          <p className="text-sm tracking-widest uppercase">
            No jackets found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <ProductCard
              key={String(product.id)}
              product={product}
              index={i + 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}
