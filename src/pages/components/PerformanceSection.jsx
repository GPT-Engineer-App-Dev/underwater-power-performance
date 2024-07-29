import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PerformanceSection = () => {
  const performanceMetrics = [
    { title: "Max Speed", value: "8 knots", description: "Top speed achieved in optimal conditions" },
    { title: "Endurance", value: "6 hours", description: "Maximum operational time on a single charge" },
    { title: "Depth", value: "100 meters", description: "Maximum safe operating depth" },
    { title: "Efficiency", value: "95%", description: "Power to thrust conversion efficiency" },
  ];

  return (
    <section id="performance" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{metric.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{metric.value}</p>
                <CardDescription>{metric.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;