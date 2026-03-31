import DashboardLayout from "@/layouts/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function DashboardSettings() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground mt-1">
            Manage your account and billing.
          </p>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="api-keys">API Keys</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Profile Details</CardTitle>
                <CardDescription>
                  Update your personal information and contact details.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="John Doe" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="john@example.com" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="api-keys">
             <Card>
              <CardHeader>
                <CardTitle>API Access</CardTitle>
                <CardDescription>
                  Manage the API keys for your applications. Do not share these keys.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Production Key</p>
                    <p className="text-sm text-muted-foreground">sk-prod-••••••••••••••••</p>
                  </div>
                  <Button variant="secondary" size="sm">Revoke</Button>
                </div>
                <div className="rounded-md border p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Test Key</p>
                    <p className="text-sm text-muted-foreground">sk-test-••••••••••••••••</p>
                  </div>
                  <Button variant="secondary" size="sm">Revoke</Button>
                </div>
                <Button variant="outline" className="w-full mt-4">Generate New Key</Button>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing">
             <Card>
              <CardHeader>
                <CardTitle>Plan & Billing</CardTitle>
                <CardDescription>
                  Your current subscription plan is Pro.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-4">$49.00 / mo</div>
                <p className="text-sm text-muted-foreground mb-4">
                  You are currently billed monthly. Your next billing date is Nov 1, 2026.
                </p>
              </CardContent>
               <CardFooter className="flex justify-between">
                <Button variant="outline">View Invoices</Button>
                <Button>Manage Subscription</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
