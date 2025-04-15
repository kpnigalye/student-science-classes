
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function NeetSection() {
  return (
    <ScrollArea className="h-[500px] rounded-md border p-4">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">NEET Exam Details</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Exam Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Total Questions: 180</li>
              <li>Total Marks: 720</li>
              <li>Duration: 3 hours</li>
              <li>Mode: Pen-and-paper (Offline)</li>
              <li>Marking: +4 correct, -1 incorrect</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Career Options Based on Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Rank 1–25,000</h4>
                <p>MBBS in government medical colleges (Grant Medical, KEM, AIIMS)</p>
              </div>
              <div>
                <h4 className="font-semibold">Rank 25,000–80,000</h4>
                <p>MBBS in private/deemed universities, BDS, BAMS</p>
              </div>
              <div>
                <h4 className="font-semibold">Rank 80,000–1,50,000</h4>
                <p>BDS/BAMS/BHMS in private institutes, paramedical courses</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}

export function JeeSection() {
  const iits = [
    { name: "IIT Bombay", location: "Mumbai, Maharashtra" },
    { name: "IIT Delhi", location: "New Delhi" },
    { name: "IIT Madras", location: "Chennai, Tamil Nadu" },
    { name: "IIT Kanpur", location: "Kanpur, Uttar Pradesh" },
    { name: "IIT Kharagpur", location: "Kharagpur, West Bengal" }
  ];

  return (
    <ScrollArea className="h-[500px] rounded-md border p-4">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold">JEE Exam Details</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">JEE Mains Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Total Questions: 90</li>
              <li>Total Marks: 300</li>
              <li>Duration: 3 hours</li>
              <li>Mode: Computer-based (Online)</li>
              <li>Marking: +4 correct, -1 incorrect</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top IITs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {iits.map((iit, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{iit.name}</span>
                  <span className="text-gray-600 text-sm">{iit.location}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
