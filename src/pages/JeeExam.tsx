
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Award, Calculator, GraduationCap, Building } from "lucide-react";
import { JeeSection } from "@/components/EntranceDetails";

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
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">JEE Exam Details</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Joint Entrance Examination (JEE) is an engineering entrance assessment conducted for admission to various engineering colleges in India.
            </p>
          </div>

          <JeeSection />

          <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-green-600" />
                <CardTitle className="text-xl text-blue-900">Career Opportunities after JEE</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                  <h4 className="font-semibold text-blue-900">B.Tech / B.E. Programs</h4>
                  <p className="text-gray-700">Four-year undergraduate engineering programs in various specializations</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full">Computer Science</span>
                    <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full">Electrical</span>
                    <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full">Mechanical</span>
                    <span className="text-xs bg-white text-blue-700 px-2 py-1 rounded-full">Civil</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                  <h4 className="font-semibold text-green-900">Dual Degree Programs</h4>
                  <p className="text-gray-700">Five-year integrated bachelor's and master's programs</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs bg-white text-green-700 px-2 py-1 rounded-full">B.Tech + M.Tech</span>
                    <span className="text-xs bg-white text-green-700 px-2 py-1 rounded-full">Integrated MSc</span>
                  </div>
                </div>
                
                <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                  <h4 className="font-semibold text-purple-900">Research Opportunities</h4>
                  <p className="text-gray-700">Opportunities for research and innovation at prestigious institutions</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="text-xs bg-white text-purple-700 px-2 py-1 rounded-full">R&D Labs</span>
                    <span className="text-xs bg-white text-purple-700 px-2 py-1 rounded-full">Academic Research</span>
                  </div>
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
