import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PerformanceSection = () => {
  return (
    <section id="performance" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Speed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">8 knots</p>
              <p>Maximum speed achieved</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Endurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">2 hours</p>
              <p>Continuous operation time</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Depth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">100 meters</p>
              <p>Maximum operating depth</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;