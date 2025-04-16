
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
      title: "XI + XII + MHT-CET Batch",
      description: "Ideal for students targeting MHT-CET for engineering or pharmacy admissions in Maharashtra. This batch includes board preparations along with CET coaching.",
      timing: "Morning Batch: 7:00 AM - 11:00 AM\nEvening Batch: 5:00 PM - 9:00 PM",
      subjects: "Physics, Chemistry, Mathematics, Biology",
      duration: "2 Years",
      focus: "Board & NEET/JEE syllabus concepts, MCQ-solving techniques, test series"
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
      title: "NEET",
      subtitle: "National Eligibility cum Entrance Test",
      description: "Medical Entrance Examination",
      link: "/neet"
    },
    {
      title: "JEE",
      subtitle: "Joint Entrance Examination",
      description: "Engineering Entrance Examination",
      link: "/jee"
    },
    {
      title: "MHT-CET",
      subtitle: "Maharashtra Common Entrance Test",
      description: "State level Entrance Exam",
      link: "/cet"
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-10 h-10 text-blue-600" />
                    <CardTitle className="text-lg text-blue-900">{item.title}</CardTitle>
                  </div>
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
              <Card key={index} className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-green-50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <CardTitle className="text-lg text-blue-900">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">{course.description}</p>
                    <div className="space-y-2 text-sm">
                      <p className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>
                          {course.timing.split('\n').map((time, i) => (
                            <span key={i} className="block">{time}</span>
                          ))}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{course.subjects}</span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Duration: {course.duration}</span>
                      </p>
                      {course.focus && (
                        <p className="flex items-start gap-2">
                          <BrainCircuit className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>{course.focus}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entrance Exams Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {entranceExams.map((exam, index) => (
              <Link key={index} to={exam.link} className="block">
                <Card className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-orange-50 hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex flex-col gap-2">
                      <GraduationCap className="w-8 h-8 text-orange-600" />
                      <CardTitle className="text-[30px] font-bold text-blue-900">{exam.title}</CardTitle>
                      <p className="text-lg text-gray-700">{exam.subtitle}</p>
                      <p className="text-sm text-gray-600">{exam.description}</p>
                    </div>
                  </CardHeader>
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
