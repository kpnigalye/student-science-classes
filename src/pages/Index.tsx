
import { GraduationCap, Users, BookOpen, Target, Clock, Award, BrainCircuit, BadgeCheck } from "lucide-react";
import { NeetSection, JeeSection } from "@/components/EntranceDetails";
import { CareerSection } from "@/components/CareerSection";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-purple-700 to-blue-700 text-white">
        <div className="container mx-auto">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">STUDENTS SCIENCE CLASSES</h1>
          <p className="text-xl md:text-2xl mb-8">Nurturing Future Scientists and Engineers</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <item.icon className="w-10 h-10 text-purple-600 mb-4" />
                  <CardTitle>{item.title}</CardTitle>
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
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-purple-700">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{course.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {course.timing}</p>
                    <p className="flex items-center"><BookOpen className="w-4 h-4 mr-2" /> {course.subjects}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entrance Exams Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Entrance Exam Preparation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NeetSection />
            <JeeSection />
          </div>
        </div>
      </section>

      {/* Career Section */}
      <CareerSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
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
