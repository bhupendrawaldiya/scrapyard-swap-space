
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Settings, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, profile } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-secondary/30">
        <Navbar />
        <main className="container mx-auto px-4 pt-24">
          <p>Please login to view your profile.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Email</label>
                <p className="font-medium">{user.email}</p>
              </div>
              {profile?.username && (
                <div>
                  <label className="text-sm text-muted-foreground">Username</label>
                  <p className="font-medium">{profile.username}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Link to="/orders">
              <Button variant="outline" className="w-full">
                <ShoppingBag className="mr-2 h-4 w-4" />
                My Orders
              </Button>
            </Link>
            <Link to="/settings">
              <Button variant="outline" className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
