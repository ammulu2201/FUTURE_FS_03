import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [
  { src: g1, alt: "Customers enjoying coffee at Ember & Oak" },
  { src: g2, alt: "Pour-over coffee preparation" },
  { src: g3, alt: "Dessert display case" },
  { src: g4, alt: "Outdoor terrace seating" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl font-bold text-primary text-center mb-12"
      >
        Our Space
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="overflow-hidden rounded-lg"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
