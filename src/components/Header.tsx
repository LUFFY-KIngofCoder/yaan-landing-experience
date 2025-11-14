import { Link } from "react-router-dom";

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="text-3xl font-bold text-primary tracking-wide hover:opacity-80 transition-opacity"
        >
          YAAN
        </Link>

        {/* Empty space for future nav items */}
        <div className="flex items-center gap-6">
          {/* Future navigation items will go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
