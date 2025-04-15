
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Award, Microscope, GraduationCap, Building } from "lucide-react";
import { NeetSection } from "@/components/EntranceDetails";

export default function NeetExam() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Logo />
          </div>
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

          <NeetSection />

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
