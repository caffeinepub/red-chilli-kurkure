export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`;

  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div>
          <div className="font-display text-lg font-bold tracking-widest uppercase mb-1">
            <span className="gold-text">LUXE</span>
            <span className="text-foreground"> JACKET</span>
          </div>
          <p className="text-xs text-muted-foreground tracking-wider">
            Crafted for the discerning few.
          </p>
        </div>

        {/* Links */}
        <nav className="flex gap-8">
          {["Collection", "About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Attribution */}
        <p className="text-xs text-muted-foreground/50 text-center md:text-right">
          © {year}. Built with ♥ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-muted-foreground transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
