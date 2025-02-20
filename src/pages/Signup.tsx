
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UserPlus } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="container mx-auto flex items-center justify-center px-4 pt-24 pb-12">
        <Card className="w-full max-w-md p-6">
          <div className="mb-8 text-center">
            <UserPlus className="mx-auto mb-4 h-12 w-12 text-accent" />
            <h1 className="text-2xl font-bold">Create Account</h1>
            <p className="text-sm text-muted-foreground">
              Join our sustainable marketplace
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <Input type="text" placeholder="Full Name" />
            </div>
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input type="password" placeholder="Password" />
            </div>
            <div>
              <Input type="password" placeholder="Confirm Password" />
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90">
              Sign Up
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm">
            <a href="/login" className="text-accent hover:underline">
              Already have an account? Sign in
            </a>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Signup;
