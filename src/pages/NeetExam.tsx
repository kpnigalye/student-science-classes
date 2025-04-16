
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { BookOpen, Award, Microscope, GraduationCap, Building } from "lucide-react";
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
                  <Microscope className="w-6 h-6 text-green-600" />
                  <CardTitle className="text-xl text-blue-900">Important Topics</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-blue-800 border-b border-blue-100 pb-2">Physics</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Mechanics</li>
                      <li>• Electrodynamics</li>
                      <li>• Modern Physics</li>
                      <li>• Thermodynamics</li>
                      <li>• Optics</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-green-800 border-b border-green-100 pb-2">Chemistry</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Organic Chemistry</li>
                      <li>• Inorganic Chemistry</li>
                      <li>• Physical Chemistry</li>
                      <li>• Analytical Chemistry</li>
                      <li>• Surface Chemistry</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-purple-800 border-b border-purple-100 pb-2">Biology</h4>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Human Physiology</li>
                      <li>• Plant Physiology</li>
                      <li>• Genetics & Evolution</li>
                      <li>• Cell Biology</li>
                      <li>• Ecology & Environment</li>
                    </ul>
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
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center gap-3">
                  <Building className="w-6 h-6 text-purple-600" />
                  <CardTitle className="text-xl text-blue-900">Top Medical Colleges</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900">All India Institute of Medical Sciences (AIIMS), Delhi</span>
                    <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Top Ranked</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900">Christian Medical College (CMC), Vellore</span>
                    <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Top Ranked</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900">Armed Forces Medical College (AFMC), Pune</span>
                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">Government</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900">King George's Medical University, Lucknow</span>
                    <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">Government</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                    <span className="font-medium text-gray-900">Kasturba Medical College, Manipal</span>
                    <span className="text-sm text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Private</span>
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
