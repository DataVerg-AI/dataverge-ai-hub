import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock, CheckCircle2, ShieldCheck, Loader2, ArrowLeft } from "lucide-react";
import { SubscriptionAPI } from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";
import DataStreamBg from "@/components/DataStreamBg";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const planSlug = searchParams.get("plan") || "pro";
  const billing = searchParams.get("billing") || "monthly";
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    card_number: "",
    expiry: "",
    cvv: "",
    card_holder: "",
    street: "",
    city: "",
    state: "",
    country: "USA"
  });

  // Plan metadata mapping
  const planDetails: Record<string, any> = {
    basic: {
      name: "Starter",
      price: billing === "yearly" ? 39 : 49,
      features: ["Up to 5 data sources", "10K records/month", "Basic analytics"]
    },
    pro: {
      name: "Professional",
      price: billing === "yearly" ? 119 : 149,
      features: ["Unlimited data sources", "1M records/month", "Advanced analytics & AI"]
    }
  };

  const currentPlan = planDetails[planSlug] || planDetails.pro;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    if (id === "card_number") {
      // Limit to 16 digits and format as XXXX XXXX XXXX XXXX
      const digitsOnly = value.replace(/\s/g, "").replace(/\D/g, "").slice(0, 16);
      const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1 ");
      setFormData(prev => ({ ...prev, [id]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simple validation
    if (formData.card_number.replace(/\s/g, "").length !== 16) {
      toast({
        title: "Invalid Card",
        description: "Please enter a valid 16-digit card number.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    if (formData.cvv.length < 3) {
      toast({
        title: "Invalid CVV",
        description: "Please enter a valid CVV (3-4 digits).",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    const [expiry_month, expiry_year] = formData.expiry.split("/");
    if (!expiry_month || !expiry_year || expiry_month.length !== 2 || expiry_year.length !== 2) {
      toast({
        title: "Invalid Expiry",
        description: "Please enter expiry date in MM/YY format.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    try {
      
      const res: any = await SubscriptionAPI.subscribe({
        plan_slug: planSlug,
        payment_method: {
          card_number: formData.card_number.replace(/\s/g, ""),
          expiry_month: expiry_month?.trim(),
          expiry_year: expiry_year?.trim(),
          cvv: formData.cvv,
          card_holder: formData.card_holder
        },
        billing_address: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          country: formData.country,
          zip: "10001", // Default for demo
        }
      });

      if (res.status === "success") {
        setIsSuccess(true);
        toast({
          title: "Subscription Active",
          description: `You are now subscribed to ${currentPlan.name}.`,
        });
        setTimeout(() => navigate("/dashboard"), 3000);
      }
    } catch (err: any) {
      toast({
        title: "Payment Failed",
        description: err.message || "An error occurred during payment processing.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <div className="flex min-h-[70vh] items-center justify-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-emerald-500/20 p-4">
                <CheckCircle2 className="h-16 w-16 text-emerald-500" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Activation Complete</h1>
            <p className="text-muted-foreground text-lg mb-8">
              System convergence initiated. Redirecting to your dashboard...
            </p>
            <Loader2 className="h-8 w-8 animate-spin mx-auto text-accent" />
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-background pt-32 pb-24">
        <DataStreamBg density="low" />
        <div className="container relative z-10 px-4">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="group text-muted-foreground hover:text-foreground pl-0"
              onClick={() => navigate("/pricing")}
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Pricing
            </Button>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left Column: Summary */}
            <div className="lg:col-span-5">
              <AnimatedSection>
                <div className="space-y-6">
                  <h1 className="text-4xl font-extrabold tracking-tight">Technical <span className="text-shine">Deployment</span></h1>
                  <p className="text-muted-foreground leading-relaxed">
                    Review your subscription parameters before initiating the secure handshake. 
                    All data is encrypted via military-grade protocols.
                  </p>

                  <GlowCard className="bg-card/30 backdrop-blur-md border hover:border-accent/40">
                    <div className="p-6 space-y-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <Badge variant="outline" className="mb-2 bg-accent/5 text-accent border-accent/20">
                            {billing.toUpperCase()} PLAN
                          </Badge>
                          <h3 className="text-2xl font-bold">{currentPlan.name}</h3>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-extrabold">${currentPlan.price}</span>
                          <p className="text-xs text-muted-foreground">/{billing === "yearly" ? "yr" : "mo"}</p>
                        </div>
                      </div>

                      <Separator className="bg-foreground/10" />

                      <ul className="space-y-3">
                        {currentPlan.features.map((f: string) => (
                          <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                            <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Separator className="bg-foreground/10" />

                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Due Now</span>
                        <span className="text-accent">${currentPlan.price}.00</span>
                      </div>
                    </div>
                  </GlowCard>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-600/80 text-xs">
                    <ShieldCheck className="h-5 w-5 shrink-0" />
                    Secure payment processing powered by DataVerge Shield. Your sensitive data never touches our persistent storage.
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Payment Form */}
            <div className="lg:col-span-7">
              <AnimatedSection delay={0.2}>
                <Card className="border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
                  <CardHeader className="bg-muted/30 pb-8">
                    <CardTitle className="flex items-center gap-2">
                       <CreditCard className="h-5 w-5 text-accent" />
                       Payment Parameters
                    </CardTitle>
                    <CardDescription>
                      Enter a valid 16-digit card number in the format shown below.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-8">
                    <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid gap-2">
                          <Label htmlFor="card_holder">Cardholder Name</Label>
                          <Input 
                            id="card_holder" 
                            placeholder="Name on card" 
                            value={formData.card_holder}
                            onChange={handleInputChange}
                            required
                            className="bg-background/50" 
                          />
                        </div>
                        
                        <div className="grid gap-2">
                          <Label htmlFor="card_number">Card Credentials</Label>
                          <div className="relative">
                            <Input 
                              id="card_number" 
                              placeholder="0000 0000 0000 0000" 
                              value={formData.card_number}
                              onChange={handleInputChange}
                              maxLength={19} // 16 digits + 3 spaces
                              required
                              className="bg-background/50 pr-12 font-mono text-lg tracking-wider border-2 border-border/50 focus:border-accent/50 transition-colors" 
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                              <div className="w-8 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm flex items-center justify-center">
                                <span className="text-white text-xs font-bold">DV</span>
                              </div>
                              <CreditCard className="h-4 w-4 text-muted-foreground/50" />
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">Enter a 16-digit card number for secure processing</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="expiry">Valid Until (MM/YY)</Label>
                            <Input 
                              id="expiry" 
                              placeholder="12/28" 
                              value={formData.expiry}
                              onChange={handleInputChange}
                              required
                              className="bg-background/50" 
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cvv">Secure Token (CVV)</Label>
                            <div className="relative">
                              <Input 
                                id="cvv" 
                                placeholder="123" 
                                type="password" 
                                maxLength={4}
                                value={formData.cvv}
                                onChange={handleInputChange}
                                required
                                className="bg-background/50 pr-10" 
                              />
                              <Lock className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground/50" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <Separator className="my-6 opacity-40" />

                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Logistics Interface</h4>
                        <div className="grid gap-2">
                          <Label htmlFor="street">Street Origin</Label>
                          <Input 
                            id="street" 
                            placeholder="123 Convergence Way" 
                            value={formData.street}
                            onChange={handleInputChange}
                            required
                            className="bg-background/50" 
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="city">Node Cluster (City)</Label>
                            <Input 
                              id="city" 
                              placeholder="New York" 
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="bg-background/50" 
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="state">State/Province</Label>
                            <Input 
                              id="state" 
                              placeholder="NY" 
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                              className="bg-background/50" 
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className="bg-muted/10 border-t border-border p-8 mt-4">
                    <Button 
                      type="submit" 
                      form="checkout-form"
                      className="w-full h-14 text-lg font-bold uppercase tracking-wider glow-accent transition-all hover:scale-[1.01]" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-3">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Processing Sequence...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                           Initiate Connection <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                        </span>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
