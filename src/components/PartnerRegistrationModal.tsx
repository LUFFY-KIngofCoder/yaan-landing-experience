import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { partnerDB, Partner } from "@/lib/database";
import { CheckCircle2 } from "lucide-react";

interface PartnerRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (partner: Partner) => void;
}

const PartnerRegistrationModal = ({ isOpen, onClose, onSuccess }: PartnerRegistrationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    serviceType: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    experience: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceTypes = [
    "Cab Ride",
    "Cab Rental",
    "E-Rickshaw",
    "Car Hire for Wedding",
    "Lorry",
    "Truck",
    "Traveller",
    "Parcel",
    "Shuttle Service",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.serviceType || 
        !formData.address || !formData.city || !formData.state || !formData.pincode || !formData.experience) {
      setError("Please fill in all required fields");
      return;
    }

    // Check if partner already exists
    const existingPartner = partnerDB.getByEmail(formData.email);
    if (existingPartner) {
      setError("A partner with this email already exists");
      return;
    }

    setIsLoading(true);

    // Create partner registration
    const partner = partnerDB.create({
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      businessName: formData.businessName || undefined,
      serviceType: formData.serviceType,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      experience: formData.experience,
    });

    if (partner) {
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Auto-close after 2 seconds and call onSuccess
      setTimeout(() => {
        partnerDB.setCurrent(partner);
        onSuccess(partner);
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          serviceType: "",
          address: "",
          city: "",
          state: "",
          pincode: "",
          experience: "",
        });
      }, 2000);
    } else {
      setError("Failed to register. Please try again.");
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Registration Successful!
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4 text-center">
            <div className="flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-primary" />
            </div>
            <p className="text-muted-foreground">
              Thank you for registering as a partner! Your application is under review.
              We'll contact you soon.
            </p>
            <p className="text-sm text-muted-foreground">
              Status: <span className="font-semibold text-primary">Pending Approval</span>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Partner Registration
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <p className="text-center text-muted-foreground">
            Join YAAN as a service partner and grow your business
          </p>

          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name (Optional)</Label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Enter business name"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="serviceType">Service Type *</Label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a service type</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  name="state"
                  type="text"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  name="pincode"
                  type="text"
                  placeholder="Enter pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input
                  id="experience"
                  name="experience"
                  type="text"
                  placeholder="e.g., 5 years"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "Registering..." : "Register as Partner"}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              By registering, you agree to YAAN's Terms of Service and Privacy Policy
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PartnerRegistrationModal;

