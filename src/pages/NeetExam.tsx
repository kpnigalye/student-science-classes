import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { BookOpen, Award, GraduationCap, Building, CheckSquare, Percent } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default function NeetExam() {
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
                <BreadcrumbLink>NEET Exam Details</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">NEET Exam Details</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The National Eligibility cum Entrance Test (NEET) is the qualifying entrance exam for MBBS and BDS programs in Indian medical and dental colleges.
            </p>
          </div>

          <section className="space-y-8">
            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl text-blue-900">Exam Pattern</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">Total Questions: 180</p>
                      <p className="text-sm text-gray-600">Physics: 45, Chemistry: 45, Biology: 90</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Total Marks: 720</p>
                      <p className="text-sm text-gray-600">Each question carries 4 marks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Duration: 3 hours</p>
                      <p className="text-sm text-gray-600">Pen and paper test</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</div>
                    <div>
                      <p className="font-medium">Mode: Pen-and-paper (Offline)</p>
                      <p className="text-sm text-gray-600">OMR-based answer sheet</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</div>
                    <div>
                      <p className="font-medium">Marking Scheme:</p>
                      <p className="text-sm text-gray-600">+4 for correct answer, -1 for incorrect answer</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">6</div>
                    <div>
                      <p className="font-medium">Language:</p>
                      <p className="text-sm text-gray-600">Available in 13 languages</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <div className="flex items-center gap-3">
                  <CheckSquare className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl text-blue-900">Eligibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                    <div>
                      <p className="font-medium">XII Science with PCB</p>
                      <p className="text-sm text-gray-600">Physics, Chemistry, Biology as main subjects</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                    <div>
                      <p className="font-medium">Minimum Qualifying Marks in Board Exams</p>
                      <p className="text-sm text-gray-600">As per category norms</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                    <div>
                      <p className="font-medium">Age Criteria</p>
                      <p className="text-sm text-gray-600">Minimum 17 years as of December 31 of admission year. No upper age limit.</p>
                    </div>
                  </li>
                </ul>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-900">General Category</h4>
                    <p className="text-gray-700">50th percentile</p>
                  </div>
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                    <h4 className="font-semibold text-blue-900">SC/ST/OBC</h4>
                    <p className="text-gray-700">40th percentile</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-orange-50">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-xl text-blue-900">Career Options Based on Rank</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                    <h4 className="font-semibold text-blue-900">Rank 1–25,000</h4>
                    <p className="text-gray-700">MBBS in government medical colleges (Grant Medical, KEM, AIIMS)</p>
                    <p className="text-sm text-gray-600 mt-1">Top opportunities in prestigious institutions with best faculty and facilities</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                    <h4 className="font-semibold text-green-900">Rank 25,000–80,000</h4>
                    <p className="text-gray-700">MBBS in private/deemed universities, BDS, BAMS</p>
                    <p className="text-sm text-gray-600 mt-1">Quality education with higher fee structure in private institutions</p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200">
                    <h4 className="font-semibold text-orange-900">Rank 80,000–1,50,000</h4>
                    <p className="text-gray-700">BDS/BAMS/BHMS in private institutes, paramedical courses</p>
                    <p className="text-sm text-gray-600 mt-1">Alternative medicine and dental opportunities</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm text-gray-600 italic">
                    Note: The ranks and course options mentioned above are based on historical data and admission trends, intended to provide an estimated idea of admission possibilities. Actual outcomes may vary each year depending on exam difficulty, the number of applicants, seat availability, and changing cutoffs. Final admissions are subject to category reservations, state quotas, and institutional seat matrices.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl text-blue-900">Popular Career Options after NEET</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    ["MBBS (Medical)", "Bachelor of Medicine and Bachelor of Surgery"],
                    ["BDS (Dental)", "Bachelor of Dental Surgery"],
                    ["BAMS (Ayurveda)", "Bachelor of Ayurvedic Medicine and Surgery"],
                    ["BHMS (Homeopathy)", "Bachelor of Homeopathic Medicine and Surgery"],
                    ["B.Sc. Nursing", "Bachelor of Science in Nursing"],
                    ["B.Sc. Allied Health Sciences", "Various specialized healthcare programs"]
                  ].map(([title, description], index) => (
                    <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                      <h4 className="font-semibold text-purple-900">{title}</h4>
                      <p className="text-sm text-gray-700">{description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl text-blue-900">Top Medical Colleges</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-green-800 mb-4">Government Colleges</h3>
                    {[
                      "AIIMS Delhi",
                      "AFMC Pune",
                      "MAMC Delhi",
                      "JIPMER Puducherry",
                      "BHU Varanasi",
                      "Grant Medical College, Mumbai",
                      "Seth GS Medical College, Mumbai",
                      "BJ Medical College, Pune",
                      "Madras Medical College, Chennai",
                      "Dr RML Institute, Lucknow"
                    ].map((college, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-md hover:bg-green-100 transition-colors">
                        <span className="font-medium text-gray-900">{college}</span>
                        <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">Government</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-purple-800 mb-4">Private/Deemed Colleges</h3>
                    {[
                      "CMC Vellore",
                      "Kasturba Medical College, Manipal",
                      "Amrita Vishwa Vidyapeetham",
                      "St. John's Medical College",
                      "Dr. DY Patil Vidyapeeth, Pune",
                      "Saveetha Institute, Chennai"
                    ].map((college, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-md hover:bg-purple-100 transition-colors">
                        <span className="font-medium text-gray-900">{college}</span>
                        <span className="text-sm text-purple-600 bg-purple-50 px-2 py-1 rounded-full">Private</span>
                      </div>
                    ))}
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
