import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { userDB, User } from "@/lib/database";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (user: User) => void;
}

const LoginModal = ({ isOpen, onClose, onSuccess }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  const [googleEmail, setGoogleEmail] = useState("");
  const [googleName, setGoogleName] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setName("");
      setError("");
      setShowGooglePopup(false);
      setGoogleEmail("");
      setGoogleName("");
    }
  }, [isOpen]);

  const handleGoogleLogin = () => {
    setError("");
    setShowGooglePopup(true);
  };

  const handleGoogleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!googleEmail || !googleName) {
      setError("Please enter your Google account information");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(googleEmail)) {
      setError("Please enter a valid email address");
      return;
    }

    setGoogleLoading(true);

    // Check if user exists
    let user = userDB.getByEmail(googleEmail);
    if (!user) {
      // Create new user with Google provider
      user = userDB.create({
        email: googleEmail,
        name: googleName,
        picture: `https://ui-avatars.com/api/?name=${encodeURIComponent(googleName)}&background=4285F4&color=fff`,
        provider: 'google',
      });
    } else {
      // Update existing user
      user = userDB.update(user.id, {
        name: googleName,
        picture: user.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(googleName)}&background=4285F4&color=fff`,
        lastLogin: new Date().toISOString(),
      });
    }

    if (user) {
      userDB.setCurrent(user);
      onSuccess(user);
      setGoogleEmail("");
      setGoogleName("");
      setShowGooglePopup(false);
    }
    setGoogleLoading(false);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !name) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    // Check if user exists
    let user = userDB.getByEmail(email);
    if (!user) {
      // Create new user
      user = userDB.create({
        email,
        name,
        provider: 'email',
      });
    } else {
      // Update last login
      user = userDB.update(user.id, { 
        name,
        lastLogin: new Date().toISOString() 
      });
    }

    if (user) {
      userDB.setCurrent(user);
      onSuccess(user);
      setEmail("");
      setName("");
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Welcome to YAAN
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-center text-muted-foreground">
            Sign in to access all features and book services
          </p>

          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
              {error}
            </div>
          )}
          
          <Button
            onClick={handleGoogleLogin}
            disabled={isLoading || googleLoading}
            className="w-full bg-white text-foreground border border-border hover:bg-muted hover:border-primary/20 transition-colors"
            size="lg"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </Button>

          {/* Google Login Popup */}
          {showGooglePopup && (
            <Dialog open={showGooglePopup} onOpenChange={setShowGooglePopup}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-8 h-8" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <DialogTitle className="text-xl font-semibold">
                      Sign in with Google
                    </DialogTitle>
                  </div>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <p className="text-sm text-muted-foreground">
                    Enter your Google account information to continue
                  </p>

                  {error && (
                    <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleGoogleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="google-name">Full Name</Label>
                      <Input
                        id="google-name"
                        type="text"
                        placeholder="Enter your name"
                        value={googleName}
                        onChange={(e) => setGoogleName(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="google-email">Email</Label>
                      <Input
                        id="google-email"
                        type="email"
                        placeholder="your.email@gmail.com"
                        value={googleEmail}
                        onChange={(e) => setGoogleEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setShowGooglePopup(false);
                          setGoogleEmail("");
                          setGoogleName("");
                          setError("");
                        }}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={googleLoading}
                        className="flex-1 bg-[#4285F4] hover:bg-[#357ae8] text-white"
                      >
                        {googleLoading ? "Signing in..." : "Sign In"}
                      </Button>
                    </div>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          )}

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="text-center text-sm text-muted-foreground">
            By continuing, you agree to YAAN's Terms of Service and Privacy Policy
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;

