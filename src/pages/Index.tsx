
import { GraduationCap, Users, BookOpen, Target, Clock, Award, BrainCircuit, BadgeCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

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
      description: "Integrated program for Board & Competitive exam preparation",
      timing: "Morning Batch: 7:00 AM - 10:00 AM\nEvening Batch: 5:00 PM - 8:00 PM",
      subjects: "Physics, Chemistry, Biology/Mathematics",
      duration: "2 Years"
    },
    {
      title: "XII + Dropper Batch (NEET/JEE)",
      description: "Special batch for students after XII for competitive exams",
      timing: "Morning Batch: 8:00 AM - 1:00 PM\nEvening Batch: 2:00 PM - 7:00 PM",
      subjects: "Physics, Chemistry, Biology/Mathematics",
      duration: "1 Year"
    },
    {
      title: "XI + XII State Board",
      description: "Focus on State Board curriculum and exam preparation",
      timing: "Morning Batch: 7:00 AM - 9:00 AM\nEvening Batch: 6:00 PM - 8:00 PM",
      subjects: "Physics, Chemistry, Biology/Mathematics",
      duration: "2 Years"
    }
  ];

  const entranceExams = [
    {
      title: "NEET (National Eligibility cum Entrance Test)",
      description: "Medical entrance examination for MBBS and BDS courses",
      link: "/neet"
    },
    {
      title: "JEE (Joint Entrance Examination)",
      description: "Engineering entrance examination for IITs and NITs",
      link: "/jee"
    }
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
                      <Clock className="w-4 h-4 mr-2 text-blue-600" />
                      {course.timing.split('\n').map((time, i) => (
                        <span key={i} className="block">{time}</span>
                      ))}
                    </p>
                    <p className="flex items-center text-gray-700">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" /> {course.subjects}
                    </p>
                    <p className="flex items-center text-gray-700">
                      <Target className="w-4 h-4 mr-2 text-blue-600" /> Duration: {course.duration}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entrance Exams Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Entrance Exam Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {entranceExams.map((exam, index) => (
              <Link key={index} to={exam.link}>
                <Card className="border-2 border-blue-100 hover:border-blue-500 transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-900">{exam.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{exam.description}</p>
                  </CardContent>
                </Card>
              </Link>
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
