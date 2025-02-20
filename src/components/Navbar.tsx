
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <Link to="/" className="text-xl font-semibold text-primary">
              Scrapyard
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <Link to="/browse" className="text-sm font-medium hover:text-primary transition-colors">
              Browse
            </Link>
            <Link to="/sell" className="text-sm font-medium hover:text-primary transition-colors">
              Sell
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="default" className="bg-accent hover:bg-accent/90">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
