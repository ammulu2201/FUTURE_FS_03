import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "The best latte I've ever had — and their croissants are absolutely divine. This is my happy place every morning.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "Warm atmosphere, friendly staff, and incredible food. Ember & Oak has become our family's weekend tradition.",
    stars: 5,
  },
  {
    name: "Priya K.",
    text: "I work remotely and this café is my office. Great WiFi, amazing coffee, and they never rush you. Perfection.",
    stars: 5,
  },
  {
    name: "Carlos R.",
    text: "Their avocado toast is next level. Fresh ingredients, generous portions, and the presentation is beautiful.",
    stars: 4,
  },
];

const TestimonialsSection = () => (
  <section id="reviews" className="py-24 bg-secondary/40">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-bold text-primary text-center mb-4"
      >
        What Our Guests Say
      </motion.h2>
      <p className="font-body text-foreground/70 text-center mb-12 max-w-md mx-auto">
        Don't just take our word for it — hear from our wonderful community.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-background rounded-lg p-6 shadow-sm"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: r.stars }).map((_, j) => (
                <Star key={j} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="font-body text-foreground/80 text-sm leading-relaxed mb-4">"{r.text}"</p>
            <p className="font-display font-semibold text-primary text-sm">{r.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
