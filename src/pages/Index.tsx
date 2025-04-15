
import { GraduationCap, Users, BookOpen, Target, Clock, Award, BrainCircuit, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";

export default function Index() {
  const whyChooseUs = [
    { icon: Users, title: "Expert Faculty", description: "Experienced teachers dedicated to your success" },
    { icon: Target, title: "Regular Tests", description: "Comprehensive test series and doubt-solving" },
    { icon: Clock, title: "Flexible Timings", description: "Morning & evening batches available" },
    { icon: Award, title: "Proven Success", description: "Outstanding track record in competitive exams" },
    { icon: BrainCircuit, title: "Smart Approach", description: "Structured, result-oriented coaching" },
    { icon: BadgeCheck, title: "Personal Attention", description: "Limited batch size for better focus" },
  ];

  const courses = [
    {
      title: "XI + XII + Entrance Batch (NEET/JEE)",
      description: "Comprehensive program covering NEET/JEE preparation with board syllabus",
      timing: "7:00-11:00 AM, 5:00-9:00 PM",
      subjects: "Physics, Chemistry, Biology/Maths",
    },
    {
      title: "XI + XII + MHT-CET Batch",
      description: "Specialized coaching for MHT-CET and board exams",
      timing: "7:00-11:00 AM, 5:00-9:00 PM",
      subjects: "Physics, Chemistry, Mathematics, Biology",
    },
    {
      title: "XI + XII State Board Batch",
      description: "Focused preparation for State Board examinations",
      timing: "6:45-9:00 PM",
      subjects: "Physics, Chemistry, Mathematics, Biology",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      {/* Header with Logo */}
      <header className="py-6 px-4 bg-white shadow-sm">
        <Logo />
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Excellence in Science Education</h1>
          <p className="text-xl md:text-2xl">Nurturing Future Scientists and Engineers</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-2 border-blue-100 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <item.icon className="w-10 h-10 text-blue-600 mb-4" />
                  <CardTitle className="text-blue-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-2 border-blue-100">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-blue-900">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-600">{course.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center text-gray-700">
                      <Clock className="w-4 h-4 mr-2 text-blue-600" /> {course.timing}
                    </p>
                    <p className="flex items-center text-gray-700">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" /> {course.subjects}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
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
