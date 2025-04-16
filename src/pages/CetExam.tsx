
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { BookOpen, Award, GraduationCap, Building, Target, Users, Percent, Microscope, Code } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function CetExam() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <Logo />
          <Breadcrumb className="mt-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>MHT-CET</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Maharashtra Common Entrance Test (MHT-CET)</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              State Level Engineering and Pharmacy Entrance Examination
            </p>
          </div>

          <section className="space-y-8">
            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl text-blue-900">Exam Pattern</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p><strong>Mode:</strong> Online Computer Based Test (CBT)</p>
                    <p><strong>Duration:</strong> 3 hours total (90 minutes per section)</p>
                    <p><strong>Language:</strong> English, Marathi, Hindi, Urdu</p>
                    <p><strong>Syllabus Weightage:</strong> 20% questions from Class 11 syllabus, 80% from Class 12 syllabus</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Groups:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>PCM (Physics, Chemistry, Mathematics) for engineering aspirants</li>
                      <li>PCB (Physics, Chemistry, Biology) for pharmacy aspirants</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Number of Questions:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>PCM group: 150 questions (50 each from Physics, Chemistry, Mathematics)</li>
                      <li>PCB group: 200 questions (50 each from Physics and Chemistry, 100 from Biology)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Marking Scheme:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Physics & Chemistry: 1 mark per correct answer</li>
                      <li>Mathematics: 2 marks per correct answer</li>
                      <li>Biology: 1 mark per correct answer</li>
                      <li>Negative Marking: None</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl text-blue-900">Eligibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p>Candidates must have passed or be appearing in Class 12 or equivalent from a recognized board.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p>For engineering courses (PCM group), candidates should have studied Physics, Chemistry, and Mathematics.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p>For pharmacy courses (PCB group), candidates should have studied Physics, Chemistry, and Biology.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                    <div>
                      <p>There is no specific age limit mentioned.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                    <div>
                      <p>Candidates must fulfill the domicile and other criteria as per Maharashtra state norms for reservation and admission.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3">
                  <Percent className="w-6 h-6 text-indigo-600" />
                  <CardTitle className="text-xl text-blue-900">Qualifying Percentile</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-2">
                  <li>The qualifying percentile varies each year based on the difficulty and number of candidates.</li>
                  <li>Candidates must meet or exceed the cutoff percentile to be eligible for admission through MHT-CET counseling.</li>
                  <li>Cutoffs differ by category (General, OBC, SC, ST) and by course.</li>
                  <li>Typically, a percentile above 50-60 is considered competitive for general category candidates.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl text-blue-900">Popular Career Options after CET</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ["Engineering", "BE/BTech in various branches"],
                    ["Pharmacy", "BPharma and DPharma programs"],
                    ["Research", "Research and development in engineering"],
                    ["Industry", "Manufacturing and production"],
                    ["IT Sector", "Software development and technology"],
                    ["Academia", "Teaching and educational roles"]
                  ].map(([title, description], index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                      <h4 className="font-semibold text-purple-900">{title}</h4>
                      <p className="text-sm text-gray-700">{description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
