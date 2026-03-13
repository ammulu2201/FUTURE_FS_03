import { motion } from "framer-motion";
import aboutImg from "@/assets/about-cafe.jpg";
import { Heart, Leaf, Coffee } from "lucide-react";

const values = [
  { icon: Coffee, title: "Craft Coffee", desc: "Single-origin beans roasted locally every week." },
  { icon: Leaf, title: "Sustainably Sourced", desc: "Ethically traded ingredients from trusted farms." },
  { icon: Heart, title: "Community First", desc: "A warm space for neighbors to connect and create." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-display text-4xl font-bold text-primary mb-6">Our Story</h2>
          <p className="font-body text-foreground/80 leading-relaxed mb-4">
            Founded in 2018, Ember & Oak was born from a simple dream — to create a neighborhood
            café where every cup tells a story. What started as a tiny corner shop has blossomed
            into a beloved gathering place for coffee lovers, remote workers, and families alike.
          </p>
          <p className="font-body text-foreground/80 leading-relaxed">
            We source our beans directly from small-batch roasters, bake our pastries fresh each
            morning, and treat every guest like family. Because to us, great coffee is about more
            than the brew — it's about the moments it creates.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <img
            src={aboutImg}
            alt="Barista preparing artisan coffee at Ember & Oak"
            className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Values */}
      <div className="grid sm:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            className="bg-card rounded-lg p-8 text-center"
          >
            <v.icon className="mx-auto mb-4 text-accent" size={36} />
            <h3 className="font-display text-xl font-semibold text-primary mb-2">{v.title}</h3>
            <p className="font-body text-foreground/70 text-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
