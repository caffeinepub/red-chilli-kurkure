import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import AboutStrip from "./components/AboutStrip";
import CollectionSection from "./components/CollectionSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import NewsletterSection from "./components/NewsletterSection";
import { useActor } from "./hooks/useActor";

function App() {
  const { actor } = useActor();

  useEffect(() => {
    if (actor) {
      actor.initialize().catch(console.error);
    }
  }, [actor]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <CollectionSection />
        <AboutStrip />
        <NewsletterSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
