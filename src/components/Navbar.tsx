import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold via-gold-light to-gold flex items-center justify-center shadow-gold-sm group-hover:shadow-gold transition-shadow duration-300">
              <span className="text-primary-foreground font-display font-bold text-xl">F</span>
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              Fen<span className="text-gold">Tax</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gold font-medium"
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className="text-muted-foreground hover:text-gold transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Button variant="gold" size="lg" className="hidden md:inline-flex">
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
