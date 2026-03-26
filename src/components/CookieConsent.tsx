import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("dataverge-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("dataverge-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background p-4 shadow-lg">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your experience. By continuing, you agree to our{" "}
          <a href="/privacy" className="font-medium text-foreground underline">Privacy Policy</a>.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => setVisible(false)}>Decline</Button>
          <Button variant="accent" size="sm" onClick={accept}>Accept</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
