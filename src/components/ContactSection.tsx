import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>123 Care Street, Suite 100<br />San Francisco, CA 94102</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>(555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>hello@yaan.care</p>
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

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <p className="mb-6">Stay connected with YAAN on social media</p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20"
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} YAAN. All rights reserved. | Providing quality care and transport services with compassion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
