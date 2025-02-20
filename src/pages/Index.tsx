
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    price: 120,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=500",
    seller: "John Doe",
    condition: "Like New"
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 85,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&q=80&w=500",
    seller: "Jane Smith",
    condition: "Good"
  },
  {
    id: 3,
    title: "Retro Camera",
    price: 150,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=500",
    seller: "Mike Wilson",
    condition: "Excellent"
  },
  {
    id: 4,
    title: "Classic Watch",
    price: 200,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=500",
    seller: "Sarah Johnson",
    condition: "Like New"
  },
  {
    id: 5,
    title: "Vintage Record Player",
    price: 175,
    image: "https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?auto=format&fit=crop&q=80&w=500",
    seller: "Alex Brown",
    condition: "Good"
  },
  {
    id: 6,
    title: "Antique Writing Desk",
    price: 300,
    image: "https://images.unsplash.com/photo-1518553552028-b0548c1c74a5?auto=format&fit=crop&q=80&w=500",
    seller: "Emily Clark",
    condition: "Excellent"
  },
  {
    id: 7,
    title: "Polaroid Camera",
    price: 95,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=500",
    seller: "David Wilson",
    condition: "Like New"
  },
  {
    id: 8,
    title: "Vintage Bicycle",
    price: 250,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=500",
    seller: "Lisa Anderson",
    condition: "Good"
  }
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = FEATURED_PRODUCTS.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.seller.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Find Amazing Second-hand Treasures
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Buy and sell pre-loved items in a community that values sustainability and great deals.
          </p>
          
          <div className="mt-8 max-w-xl mx-auto relative">
            <Input
              type="text"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Items</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="py-16 bg-primary/5 rounded-2xl">
          <div className="max-w-4xl mx-auto text-center">
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
