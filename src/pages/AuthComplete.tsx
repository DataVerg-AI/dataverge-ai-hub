import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function AuthComplete() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const redirectTo = searchParams.get("redirect_to") || "/dashboard";

    if (token) {
      localStorage.setItem("token", token);
      toast.success("Successfully authenticated!");
      navigate(redirectTo, { replace: true });
    } else {
      toast.error("Authentication failed. Please try again.");
      navigate("/login", { replace: true });
    }
  }, [searchParams, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
        <p className="text-lg font-medium text-foreground">
          Completing authentication...
        </p>
        <p className="text-sm text-muted-foreground">
          Please wait while we log you in.
        </p>
      </div>
    </div>
  );
}
