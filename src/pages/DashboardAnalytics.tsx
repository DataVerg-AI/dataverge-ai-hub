import DashboardLayout from "@/layouts/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardAnalytics() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground mt-1">
            Detailed breakdown of your model performance and platform usage.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
           <Card>
            <CardHeader>
              <CardTitle>Latency Over Time</CardTitle>
              <CardDescription>Average P95 latency across all active endpoints.</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px] flex items-center justify-center bg-muted/20 border border-dashed rounded-md">
              [Latency Chart Placeholder]
            </CardContent>
          </Card>

           <Card>
            <CardHeader>
              <CardTitle>Error Rates</CardTitle>
              <CardDescription>Track failed API requests or 5xx status codes.</CardDescription>
            </CardHeader>
            <CardContent className="h-[250px] flex items-center justify-center bg-muted/20 border border-dashed rounded-md">
              [Error Rate Chart Placeholder]
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Resource Utilization</CardTitle>
            <CardDescription>GPU/CPU load across your allocated nodes.</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] flex items-center justify-center bg-muted/20 border border-dashed rounded-md">
            [Resource Heatmap Placeholder]
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
