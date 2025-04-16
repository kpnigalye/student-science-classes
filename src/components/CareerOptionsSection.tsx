
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Microscope } from "lucide-react";

export function CareerOptionsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <CardTitle className="text-xl text-blue-900">Career Options after XI + XII (Plain Science)</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <p className="text-lg font-semibold mb-4">📚 Plain Science (State Board Science Students)</p>
              <p className="text-gray-600 mb-6">For students pursuing XI + XII Science without entrance exams.</p>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">📊 Career Options after XII (PCM)</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
                    <li>Engineering (Mechanical, Civil, Electrical, Aerospace, Chemical, Industrial, etc.)</li>
                    <li>Architecture</li>
                    <li>Data Science</li>
                    <li>Computer Science & IT (BCA, B.Sc. IT, Software Development, AI, Machine Learning)</li>
                    <li>Merchant Navy</li>
                    <li>Aviation (Pilot, Aviation Management)</li>
                    <li>Robotics and Biomedical Engineering</li>
                    <li>Mathematics and Statistics (Actuarial Science, Research)</li>
                    <li>Design and Planning (Urban Planning, Product Design)</li>
                    <li>Investment Banking and Finance</li>
                    <li>Defense Services (NDA, technical roles in Army, Navy, Air Force)</li>
                    <li>Pharmacy and Chemical Engineering</li>
                    <li>Environmental Science and Research</li>
                    <li>Teaching and Academia (Science teacher, professor)</li>
                    <li>Entrepreneurship in technology, manufacturing, or services</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Microscope className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-blue-900">📊 Career Options after XII (PCB)</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
                    <li>MBBS (Medicine)</li>
                    <li>BDS (Dentistry)</li>
                    <li>BPT (Physiotherapy)</li>
                    <li>B.Sc. Nursing</li>
                    <li>Pharmacy (B.Pharm)</li>
                    <li>Biotechnology</li>
                    <li>Microbiology</li>
                    <li>Genetics</li>
                    <li>Biomedical Engineering</li>
                    <li>Agriculture and Forestry</li>
                    <li>Environmental Science</li>
                    <li>Nutrition and Dietetics</li>
                    <li>Medical Laboratory Technology</li>
                    <li>Occupational Therapy</li>
                    <li>Research and Academics in Life Sciences</li>
                    <li>Government Jobs in healthcare and allied sectors</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
