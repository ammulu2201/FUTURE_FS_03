import { Coffee } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Coffee size={20} className="text-accent" />
            <span className="font-display text-xl font-bold text-primary-foreground">Ember & Oak</span>
          </div>
          <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
            Artisan coffee & fresh-baked goods in the heart of Brooklyn.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-3">Hours</h4>
          <div className="font-body text-sm text-primary-foreground/70 space-y-1">
            <p>Mon – Fri: 7:00 AM – 8:00 PM</p>
            <p>Sat – Sun: 8:00 AM – 9:00 PM</p>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 text-center">
        <p className="font-body text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Ember & Oak. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
