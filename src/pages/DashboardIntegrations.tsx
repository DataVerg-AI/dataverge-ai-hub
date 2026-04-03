import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GlowCard from "@/components/GlowCard";
import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2, Database, PlugZap, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const INITIAL_INTEGRATIONS = [
  { id: "snowflake", name: "Snowflake", category: "Data Warehouse", connected: true, lastSync: "10 mins ago" },
  { id: "postgres", name: "PostgreSQL", category: "Database", connected: true, lastSync: "1 hour ago" },
  { id: "salesforce", name: "Salesforce", category: "CRM", connected: false, lastSync: "Never" },
  { id: "hubspot", name: "HubSpot", category: "Marketing", connected: false, lastSync: "Never" },
  { id: "mongo", name: "MongoDB", category: "NoSQL", connected: false, lastSync: "Never" },
  { id: "stripe", name: "Stripe", category: "Billing", connected: false, lastSync: "Never" }
];

export default function DashboardIntegrations() {
  const [integrations, setIntegrations] = useState(INITIAL_INTEGRATIONS);
  const [connectingId, setConnectingId] = useState<string | null>(null);

  const toggleConnection = (id: string, currentlyConnected: boolean) => {
    if (currentlyConnected) {
      setIntegrations(prev => prev.map(inv => inv.id === id ? { ...inv, connected: false, lastSync: "Never" } : inv));
      toast("Integration Disconnected", {
        description: "Data sync has been paused."
      });
      return;
    }

    setConnectingId(id);
    // Simulate connection delay
    setTimeout(() => {
      setIntegrations(prev => prev.map(inv => inv.id === id ? { ...inv, connected: true, lastSync: "Just now" } : inv));
      setConnectingId(null);
      toast.success("Integration Connected", {
        description: "Data is now syncing in real-time."
      });
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Integrations</h2>
            <p className="text-muted-foreground mt-1">
              Connect external data sources to your Convergence Engine.
            </p>
          </div>
          <Button className="shrink-0 group">
            <PlugZap className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
            Add Custom Webhook
          </Button>
        </div>

        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration, idx) => (
              <AnimatedSection key={integration.id} delay={0.1 * idx}>
                <GlowCard className="h-full bg-card/80 backdrop-blur-md flex flex-col justify-between">
                   <div className="p-6">
                     <div className="flex items-start justify-between mb-4">
                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                         <Database className="text-accent h-6 w-6" />
                       </div>
                       {integration.connected && (
                         <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                           <CheckCircle2 className="w-3 h-3 mr-1" /> Connected
                         </span>
                       )}
                     </div>
                     <h3 className="text-xl font-bold text-foreground">{integration.name}</h3>
                     <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mt-1">{integration.category}</p>
                     
                     <div className="mt-6 flex items-center text-xs text-muted-foreground">
                        <RefreshCw className="w-3 h-3 mr-2" />
                        Last Sync: <strong className="ml-1 text-foreground">{integration.lastSync}</strong>
                     </div>
                   </div>
                   <div className="p-6 pt-0 mt-auto">
                     <Button 
                       variant={integration.connected ? "outline" : "default"} 
                       className="w-full"
                       onClick={() => toggleConnection(integration.id, integration.connected)}
                       disabled={connectingId === integration.id}
                     >
                       {connectingId === integration.id ? (
                         <span className="flex items-center">
                           <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> Connecting...
                         </span>
                       ) : integration.connected ? "Disconnect" : "Connect"}
                     </Button>
                   </div>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </DashboardLayout>
  );
}
