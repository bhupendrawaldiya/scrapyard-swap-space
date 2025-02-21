
import { Button } from "@/components/ui/button";
import { ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold text-primary">
            Scrapyard
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </Link>
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="default" className="bg-accent hover:bg-accent/90">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
