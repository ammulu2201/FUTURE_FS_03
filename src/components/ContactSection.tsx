import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-primary text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="font-body text-foreground/80 text-sm">
                  123 Oakwood Avenue, Brooklyn, NY 11201
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="font-body text-foreground/80 text-sm">(718) 555-0142</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="font-body text-foreground/80 text-sm">hello@emberandoak.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <div className="font-body text-foreground/80 text-sm">
                  <p>Mon – Fri: 7:00 AM – 8:00 PM</p>
                  <p>Sat – Sun: 8:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                title="Ember & Oak location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.263!2d-73.9857!3d40.6892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzIxLjEiTiA3M8KwNTknMDguNSJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required className="font-body" />
              <Input type="email" placeholder="Email Address" required className="font-body" />
            </div>
            <Input placeholder="Subject" required className="font-body" />
            <Textarea placeholder="Your Message" rows={5} required className="font-body resize-none" />
            <Button variant="accent" size="lg" type="submit" disabled={sending} className="w-full">
              {sending ? "Sending…" : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
