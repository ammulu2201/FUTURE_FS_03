import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-cafe.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Ember & Oak café interior with warm lighting and latte art"
      className="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />
    <div className="absolute inset-0 bg-primary/60" />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 text-center px-4 max-w-2xl"
    >
      <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
        Ember & Oak
      </h1>
      <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8">
        Artisan coffee & fresh-baked goods in the heart of the neighborhood
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="hero" size="lg" asChild>
          <a href="#menu">View Our Menu</a>
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-body"
          asChild
        >
          <a href="#contact">Visit Us</a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
