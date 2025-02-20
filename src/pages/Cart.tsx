
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  seller: string;
  quantity: number;
}

const MOCK_CART_ITEMS: CartItem[] = []; // Empty initial cart

const Cart = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
        
        {MOCK_CART_ITEMS.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12">
            <ShoppingCart className="mb-4 h-12 w-12 text-muted-foreground" />
            <h2 className="mb-2 text-xl font-semibold">Your cart is empty</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Start shopping for sustainable second-hand items!
            </p>
            <Button variant="default" className="bg-accent hover:bg-accent/90">
              Browse Items
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Cart items will be listed here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
