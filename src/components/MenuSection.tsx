import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Croissant, Sandwich } from "lucide-react";
import menuCoffee from "@/assets/menu-coffee.jpg";
import menuPastry from "@/assets/menu-pastry.jpg";
import menuSandwich from "@/assets/menu-sandwich.jpg";

type Category = "coffee" | "pastries" | "sandwiches";

const categories: { key: Category; label: string; icon: typeof Coffee }[] = [
  { key: "coffee", label: "Coffee", icon: Coffee },
  { key: "pastries", label: "Pastries", icon: Croissant },
  { key: "sandwiches", label: "Sandwiches", icon: Sandwich },
];

const items: Record<Category, { name: string; desc: string; price: string; img: string }[]> = {
  coffee: [
    { name: "House Espresso", desc: "Rich double shot with caramel notes", price: "$3.50", img: menuCoffee },
    { name: "Oat Milk Latte", desc: "Silky oat milk with our signature blend", price: "$5.00", img: menuCoffee },
    { name: "Cold Brew", desc: "Slow-steeped 18 hours, smooth & bold", price: "$4.50", img: menuCoffee },
    { name: "Matcha Latte", desc: "Ceremonial-grade matcha with steamed milk", price: "$5.50", img: menuCoffee },
  ],
  pastries: [
    { name: "Butter Croissant", desc: "Flaky, golden, baked fresh daily", price: "$3.75", img: menuPastry },
    { name: "Blueberry Muffin", desc: "Loaded with wild blueberries", price: "$3.50", img: menuPastry },
    { name: "Cinnamon Roll", desc: "Swirled with brown sugar & cream cheese glaze", price: "$4.25", img: menuPastry },
    { name: "Almond Tart", desc: "Frangipane filling with toasted almonds", price: "$4.50", img: menuPastry },
  ],
  sandwiches: [
    { name: "Avocado & Egg", desc: "Smashed avo, poached egg, sourdough", price: "$8.50", img: menuSandwich },
    { name: "Turkey Club", desc: "Roasted turkey, bacon, lettuce & aioli", price: "$9.00", img: menuSandwich },
    { name: "Caprese Panini", desc: "Fresh mozzarella, tomato, basil pesto", price: "$8.00", img: menuSandwich },
    { name: "Grilled Veggie Wrap", desc: "Seasonal veggies with hummus", price: "$7.50", img: menuSandwich },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("coffee");

  return (
    <section id="menu" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl font-bold text-primary mb-4">Our Menu</h2>
          <p className="font-body text-foreground/70 max-w-md mx-auto">
            Handcrafted drinks and fresh, wholesome bites prepared with love every single day.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-medium transition-colors duration-200 ${
                active === cat.key
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-foreground/70 hover:bg-card/80"
              }`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items[active].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex gap-4 bg-background rounded-lg p-4 shadow-sm"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-20 h-20 rounded-md object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <h3 className="font-display text-lg font-semibold text-primary">{item.name}</h3>
                  <span className="font-body font-bold text-accent text-sm ml-2">{item.price}</span>
                </div>
                <p className="font-body text-foreground/60 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
