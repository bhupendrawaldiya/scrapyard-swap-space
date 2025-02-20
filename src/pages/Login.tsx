
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LogIn } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="container mx-auto flex items-center justify-center px-4 pt-24 pb-12">
        <Card className="w-full max-w-md p-6">
          <div className="mb-8 text-center">
            <LogIn className="mx-auto mb-4 h-12 w-12 text-accent" />
            <h1 className="text-2xl font-bold">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>
          
          <form className="space-y-4">
            <div>
              <Input type="email" placeholder="Email" />
            </div>
            <div>
              <Input type="password" placeholder="Password" />
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90">
              Sign In
            </Button>
          </form>
          
          <div className="mt-4 text-center text-sm">
            <a href="/signup" className="text-accent hover:underline">
              Don't have an account? Sign up
            </a>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Login;
