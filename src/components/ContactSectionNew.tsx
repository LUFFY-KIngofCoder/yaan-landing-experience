import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const ContactSectionNew = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer
      ref={ref}
      id="contact"
      className="bg-primary text-primary-foreground py-16 px-4 md:px-8"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  Plot no. 16, Street no. 2,
                  <br />
                  Goverdhan Patti Badha Sector-86,
                  <br />
                  Gurgaon, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+917827273057" className="hover:underline">
                  +91 7827273057
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:support@yaan.care" className="hover:underline">
                  support@yaan.care
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/home-care" className="hover:underline transition-all">
                  Home Care Services
                </a>
              </li>
              <li>
                <a href="/transport" className="hover:underline transition-all">
                  Transport Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline transition-all">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:underline transition-all">
                  Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="hover:underline transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="hover:underline transition-all">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <p className="mb-6 opacity-90">
              Stay connected with YAAN on social media
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-primary-foreground/20 text-center"
        >
          <p className="text-sm opacity-90">
            © {new Date().getFullYear()} YAAN. All rights reserved. | Providing
            quality care and transport services with compassion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactSectionNew;

