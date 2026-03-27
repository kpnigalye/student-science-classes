import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { BookOpen, Award, Calculator, GraduationCap, Building, CheckSquare, Percent } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function JeeExam() {
  const iits = [
    { name: "IIT Bombay", location: "Mumbai, Maharashtra", rank: "1" },
    { name: "IIT Delhi", location: "New Delhi", rank: "2" },
    { name: "IIT Madras", location: "Chennai, Tamil Nadu", rank: "3" },
    { name: "IIT Kanpur", location: "Kanpur, Uttar Pradesh", rank: "4" },
    { name: "IIT Kharagpur", location: "Kharagpur, West Bengal", rank: "5" },
    { name: "IIT Roorkee", location: "Roorkee, Uttarakhand", rank: "6" },
    { name: "IIT Guwahati", location: "Guwahati, Assam", rank: "7" },
    { name: "IIT Hyderabad", location: "Hyderabad, Telangana", rank: "8" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <Logo />
          <Breadcrumb className="mt-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-blue-600">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>JEE Exam Details</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Joint Entrance Examination (JEE)</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A national-level engineering entrance exam for admissions to IITs, NITs, IIITs, and reputed engineering colleges across India.
            </p>
          </div>

          <section className="space-y-8">
            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  <CardTitle className="text-xl text-blue-900">Exam Objective</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Objective of JEE-Mains is to categorise candidates suitable for sitting in JEE (Advanced) or gaining admission to a Bachelor of Engineering (BE) or Bachelor of Technology (BTech) undergraduate programme at one of the following types of institutions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>National Institutes of Technology (NITs)</li>
                  <li>Indian Institutes of Information Technology (IIITs)</li>
                  <li>Other Centrally Funded Technical Institutions (CFTIs)</li>
                  <li>State-funded or -recognised institutions and universities</li>
                </ul>
                <p className="text-gray-700">
                  The JEE Advanced is similar to JEE-Main, but its questions are more thorough. Passage of the exam qualifies you for admittance to prestigious IITs.
                </p>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <CardTitle className="text-xl text-blue-900">JEE Mains Pattern</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="font-medium">Total Questions: 90</p>
                        <p className="text-sm text-gray-600">Physics: 30, Chemistry: 30, Mathematics: 30</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="font-medium">Total Marks: 300</p>
                        <p className="text-sm text-gray-600">Each question carries 4 marks</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="font-medium">Duration: 3 hours</p>
                        <p className="text-sm text-gray-600">Computer-based test</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <p className="font-medium">Mode: Computer-based (Online)</p>
                        <p className="text-sm text-gray-600">Multiple attempts allowed in a year</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                      <div>
                        <p className="font-medium">Marking Scheme:</p>
                        <p className="text-sm text-gray-600">+4 for correct answer, -1 for incorrect answer</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                  <div className="flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-xl text-blue-900">JEE Advanced Pattern</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                      <div>
                        <p className="font-medium">Paper Format: Two Papers</p>
                        <p className="text-sm text-gray-600">Paper 1 & Paper 2 (both mandatory)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                      <div>
                        <p className="font-medium">Duration: 3 hours each</p>
                        <p className="text-sm text-gray-600">Total 6 hours for both papers</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                      <div>
                        <p className="font-medium">Question Types:</p>
                        <p className="text-sm text-gray-600">MCQs, numerical answers, matching type</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                      <div>
                        <p className="font-medium">Eligibility:</p>
                        <p className="text-sm text-gray-600">Top 2,50,000 rankers in JEE Main</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                      <div>
                        <p className="font-medium">Conducting Body:</p>
                        <p className="text-sm text-gray-600">One of the 7 IITs on a rotational basis</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl text-blue-900">Eligibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">XII Science with PCM (Physics, Chemistry, Maths)</p>
                <p className="text-gray-700">There is no minimum percentage required to appear for JEE Main 2026. Students who have passed or are appearing in Class 12 from a recognised board can apply.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                <div className="flex items-center gap-3">
                  <Percent className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl text-blue-900">Qualifying Percentile</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-gray-700">The qualifying percentile for General category candidates to appear for JEE Advanced varies yearly but is typically around 90 percentile. However, for core branches at NITs/IIITs, admission cutoffs depend on individual institutions and ranks rather than just percentiles.</p>
                  <p className="text-gray-700">Top 2.5 lakh students qualify for JEE Advanced. This number has been consistent in recent years.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl text-blue-900">Career Opportunities after JEE</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                    <h4 className="font-semibold text-blue-900">Career Options at IIT/NIT/IIIT/State Colleges</h4>
                    <p className="text-gray-700">These institutions offer B.Tech/B.E. programs in various disciplines, including Computer Engineering, Mechanical Engineering, Civil Engineering, Electrical/E&TC, Chemical Engineering, Data Science/AI/ML, Aerospace Engineering, and IT/Software Engineering. These programs are standard offerings at IITs, NITs, IIITs, and state colleges for students qualifying through JEE Mains and Advanced.</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                    <h4 className="font-semibold text-green-900">Integrated/Specialised Programs</h4>
                    <p className="text-gray-700">Integrated M.Tech programs, B.Tech + MBA, Bachelor of Design (via UCEED), and Bachelor of Planning (B.Plan) are indeed available at select institutions like IITs and NITs. These specialized programs cater to students seeking interdisciplinary or advanced education.</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                    <h4 className="font-semibold text-purple-900">Private College Engineering</h4>
                    <p className="text-gray-700">Institutions like MIT Pune, Symbiosis Pune, VIT Vellore, SRM Chennai, Manipal University, and KIIT Bhubaneswar are well-known private colleges offering engineering programs. They accept JEE Mains scores or conduct their own entrance exams for admission.</p>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-900">Other Options</h4>
                    <p className="text-gray-700">Diploma to degree lateral entry is a valid pathway for students transitioning from diploma courses to engineering degrees. NDA (via UPSC) and technical roles in organisations like DRDO, ISRO, and Railways are alternative career options for JEE aspirants who may not pursue traditional engineering paths.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    Note: For precise and updated guidance, students are advised to refer to official NEET/JEE counseling portals and use authorised rank predictor tools.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl text-blue-900">Top IITs in India</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {iits.map((iit, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                      <div>
                        <span className="font-medium text-gray-900">{iit.name}</span>
                        <p className="text-sm text-gray-600">{iit.location}</p>
                      </div>
                      <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Rank {iit.rank}</span>
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
