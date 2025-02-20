
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingBag } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <a href="/" className="text-xl font-semibold text-primary">
              Scrapyard
            </a>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <a href="/browse" className="text-sm font-medium hover:text-primary transition-colors">
              Browse
            </a>
            <a href="/sell" className="text-sm font-medium hover:text-primary transition-colors">
              Sell
            </a>
            <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
