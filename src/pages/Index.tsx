
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";

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
];

const Index = () => {
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
        </section>

        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Featured Items</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
