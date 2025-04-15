
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CareerSection() {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>
        <Tabs defaultValue="pcm" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pcm">PCM Careers</TabsTrigger>
            <TabsTrigger value="pcb">PCB Careers</TabsTrigger>
          </TabsList>
          <TabsContent value="pcm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Mechanical Engineering</li>
                    <li>Computer Science</li>
                    <li>Electrical Engineering</li>
                    <li>Civil Engineering</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Data Science</li>
                    <li>Artificial Intelligence</li>
                    <li>Software Development</li>
                    <li>Robotics</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Architecture</li>
                    <li>Merchant Navy</li>
                    <li>Aviation</li>
                    <li>Defense Services</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="pcb">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Medical</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>MBBS</li>
                    <li>BDS</li>
                    <li>BAMS</li>
                    <li>BPT</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Life Sciences</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Biotechnology</li>
                    <li>Microbiology</li>
                    <li>Genetics</li>
                    <li>Environmental Science</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Allied Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>B.Sc. Nursing</li>
                    <li>Medical Lab Technology</li>
                    <li>Nutrition & Dietetics</li>
                    <li>Occupational Therapy</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
