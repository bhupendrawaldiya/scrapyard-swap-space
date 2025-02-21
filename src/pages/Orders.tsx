
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary/30">
        <Navbar />
        <main className="container mx-auto px-4 pt-24">
          <p>Please login to view your orders.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">My Orders</h1>
          </div>
          
          {/* Placeholder for future order history implementation */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-muted-foreground text-center py-8">
              No orders found. Start shopping to create your first order!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orders;
