
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main>
        {/* Hero Section with Login/Signup */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to Scrapyard
            </h1>
            <p className="mb-8 mx-auto max-w-2xl text-xl text-muted-foreground">
              Join our sustainable marketplace where pre-loved items find new homes
              and stories continue.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => navigate("/signup")}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => navigate("/login")}
                variant="outline"
                className="px-8 py-6 text-lg rounded-full border-2 hover:bg-primary/5"
              >
                Sign In
              </Button>
            </div>
          </div>
        </section>

        {/* Animated Reviews Section */}
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

        {/* About Section */}
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
