import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    price: 89.99,
    description: "Classic brown leather jacket in excellent condition",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Antique Coffee Table",
    price: 149.99,
    description: "Beautiful wooden coffee table from the 1950s",
    image: "https://images.unsplash.com/photo-1565791380690-ca4faec73f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Retro Record Player",
    price: 199.99,
    description: "Fully functional vintage record player with built-in speakers",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Classic Camera",
    price: 299.99,
    description: "Vintage film camera in perfect working condition",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 5,
    name: "Vintage Watch",
    price: 399.99,
    description: "Elegant vintage timepiece in working condition",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 6,
    name: "Antique Bookshelf",
    price: 249.99,
    description: "Beautiful wooden bookshelf from the 1940s",
    image: "https://images.unsplash.com/photo-1588279102567-aa591ac65044?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  }
];

const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    review: "Found amazing vintage pieces on Scrapyard! The community is so supportive.",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Thompson",
    review: "Great platform for sustainable shopping. Love the variety of items available.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    review: "Scrapyard made selling my pre-loved items so easy. Highly recommended!",
    rating: 5
  },
  {
    id: 4,
    name: "David Wilson",
    review: "The best marketplace for second-hand treasures. Amazing community!",
    rating: 5
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAddToCart = async (product: typeof DUMMY_PRODUCTS[0]) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to add items to your cart",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    try {
      const { data: existingItems } = await supabase
        .from('cart_items')
        .select()
        .eq('user_id', user.id)
        .eq('product_id', product.id)
        .single();

      if (existingItems) {
        const { error: updateError } = await supabase
          .from('cart_items')
          .update({ quantity: existingItems.quantity + 1 })
          .eq('id', existingItems.id);

        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase
          .from('cart_items')
          .insert({
            user_id: user.id,
            product_id: product.id,
            product_name: product.name,
            product_price: product.price,
            product_image: product.image,
            quantity: 1
          });

        if (insertError) throw insertError;
      }

      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart`,
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main>
        <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Scrapyard
            </h1>
            <p className="mb-8 mx-auto max-w-2xl text-xl text-muted-foreground">
              Discover unique pre-loved treasures in our sustainable marketplace
            </p>
            {user && (
              <div className="flex justify-center gap-4 mb-8">
                <Button
                  onClick={() => navigate("/browse")}
                  className="bg-primary hover:bg-primary/90"
                  size="lg"
                >
                  Browse Items
                </Button>
                <Button
                  onClick={() => navigate("/sell")}
                  className="bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  Sell Your Items
                </Button>
              </div>
            )}
            <div className="max-w-md mx-auto relative">
              <Input
                type="search"
                placeholder="Search for items..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DUMMY_PRODUCTS.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-accent font-semibold">${product.price}</p>
                      <Button 
                        onClick={() => handleAddToCart(product)}
                        className="bg-accent hover:bg-accent/90 text-white"
                        size="sm"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white/50 overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="flex animate-[slide_25s_linear_infinite]">
            <div className="flex gap-8 min-w-full">
              {[...CUSTOMER_REVIEWS, ...CUSTOMER_REVIEWS].map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="min-w-[300px] bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-muted-foreground mb-4">{review.review}</p>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-accent">{"★".repeat(review.rating)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">About Scrapyard</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Shopping</h3>
                <p className="text-muted-foreground">
                  Every purchase helps reduce waste and gives pre-loved items a second life.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Community First</h3>
                <p className="text-muted-foreground">
                  Join a community of conscious consumers and sellers who value sustainability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
                <p className="text-muted-foreground">
                  All items are verified and reviewed to ensure the best quality for our users.
                </p>
              </div>
            </div>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Scrapyard is more than just a marketplace - it's a movement towards sustainable consumption. 
              We believe in giving every item a second chance while building a community that cares about 
              our planet's future.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
