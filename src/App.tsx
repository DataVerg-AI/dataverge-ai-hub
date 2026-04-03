import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ProductShowcase from "./pages/ProductShowcase";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardOverview from "./pages/DashboardOverview";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardProjects from "./pages/DashboardProjects";
import DashboardSettings from "./pages/DashboardSettings";
import DashboardIntegrations from "./pages/DashboardIntegrations";
import DashboardModels from "./pages/DashboardModels";
import DashboardChat from "./pages/DashboardChat";
import Checkout from "./pages/Checkout";
import Fallback from "./pages/Fallback";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/product" element={<PageTransition><ProductShowcase /></PageTransition>} />
        <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/signup" element={<PageTransition><Signup /></PageTransition>} />
        <Route path="/dashboard" element={<ProtectedRoute><PageTransition><DashboardOverview /></PageTransition></ProtectedRoute>} />
        <Route path="/dashboard/analytics" element={<ProtectedRoute><PageTransition><DashboardAnalytics /></PageTransition></ProtectedRoute>} />
        <Route path="/dashboard/projects" element={<ProtectedRoute><PageTransition><DashboardProjects /></PageTransition></ProtectedRoute>} />
        <Route path="/dashboard/integrations" element={<ProtectedRoute><PageTransition><DashboardIntegrations /></PageTransition></ProtectedRoute>} />
        <Route path="/dashboard/models" element={<ProtectedRoute><PageTransition><DashboardModels /></PageTransition></ProtectedRoute>} />
        <Route path="/dashboard/chat" element={<ProtectedRoute><PageTransition><DashboardChat /></PageTransition></ProtectedRoute>} />
        <Route path="/dashboard/settings" element={<ProtectedRoute><PageTransition><DashboardSettings /></PageTransition></ProtectedRoute>} />
        <Route path="/checkout" element={<PageTransition><Checkout /></PageTransition>} />
        <Route path="/fallback" element={<PageTransition><Fallback /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
