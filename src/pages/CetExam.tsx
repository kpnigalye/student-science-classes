
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { BookOpen, Award, GraduationCap, Building, Target, Users, Percent } from "lucide-react";
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
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl text-blue-900">What is MHT-CET?</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-3">MHT-CET (Maharashtra Health and Technical Common Entrance Test) is a state-level entrance exam conducted by the Maharashtra State Common Entrance Test Cell.</p>
                <p className="mb-3">It is used for admission to undergraduate courses in engineering (BE/BTech), pharmacy (BPharma, DPharma), and agriculture in Maharashtra.</p>
                <p className="mb-3">The exam is conducted once a year in online (computer-based) mode.</p>
                <p className="mb-3">The difficulty level is comparable to JEE Main and Maharashtra State Board Class 12 exams.</p>
                <p>Medical admissions are no longer through MHT-CET; NEET is now mandatory for medical courses across India.</p>
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
              <CardHeader className="bg-gradient-to-r from-blue-50 to-pink-50">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-pink-600" />
                  <CardTitle className="text-xl text-blue-900">Career Options After MHT-CET</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <p><strong>Engineering:</strong> Admission to BE/BTech programs in Maharashtra's government and private engineering colleges including reputed institutes like COEP, VJTI, and others.</p>
                    <p><strong>Pharmacy:</strong> Admission to BPharma and DPharma courses in Maharashtra colleges.</p>
                    <p><strong>Agriculture:</strong> Some agriculture-related undergraduate courses also accept MHT-CET scores.</p>
                    <p>Graduates can pursue careers in core engineering fields, pharmaceutical industries, research, academia, or further studies like MTech, MBA, or PharmD.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="mb-2">📧 info@studentscienceclasses.com</p>
          <p className="mb-2">📞 +91 98765 43210</p>
          <p>🏢 Science City Road, Near Metro Station, Mumbai - 400001</p>
        </div>
      </footer>
    </div>
  );
}
