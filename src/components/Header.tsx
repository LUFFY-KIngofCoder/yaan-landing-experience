import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";
import PartnerRegistrationModal from "./PartnerRegistrationModal";
import ServicesModal from "./ServicesModal";
import { userDB, partnerDB, User, Partner } from "@/lib/database";

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isPartnerRegOpen, setIsPartnerRegOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentPartner, setCurrentPartner] = useState<Partner | null>(null);

  // Load user/partner state on mount
  useEffect(() => {
    setCurrentUser(userDB.getCurrent());
    setCurrentPartner(partnerDB.getCurrent());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact") || document.querySelector("footer");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Scroll to bottom if no contact section found
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background border-b border-border shadow-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="https://yann1.odoo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="/images/logo/logo.svg"
              alt="YANN Logo"
              className="h-12 w-auto"
              style={{ maxHeight: "48px" }}
            />
          </a>

          {/* Navigation Items */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setIsServicesOpen(true)}
              className="text-foreground hover:text-primary"
            >
              Services
            </Button>
            <Button
              variant="ghost"
              onClick={scrollToContact}
              className="text-foreground hover:text-primary"
            >
              Contact Us
            </Button>
            {currentUser || currentPartner ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {currentUser?.name || currentPartner?.name}
                </span>
                <Button
                  variant="outline"
                  onClick={() => {
                    userDB.logout();
                    partnerDB.logout();
                    setCurrentUser(null);
                    setCurrentPartner(null);
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={() => setIsLoginOpen(true)}
                  className="border-primary text-primary hover:bg-primary/10"
                >
                  Login
                </Button>
                <Button
                  onClick={() => setIsPartnerRegOpen(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Partner Registration
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
        onSuccess={(user) => {
          setCurrentUser(user);
          setIsLoginOpen(false);
        }}
      />
      <PartnerRegistrationModal 
        isOpen={isPartnerRegOpen} 
        onClose={() => setIsPartnerRegOpen(false)}
        onSuccess={(partner) => {
          setCurrentPartner(partner);
          setIsPartnerRegOpen(false);
        }}
      />
      <ServicesModal 
        isOpen={isServicesOpen} 
        onClose={() => setIsServicesOpen(false)}
      />
    </>
  );
};

export default Header;
