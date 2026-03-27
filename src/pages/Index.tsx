import {
  Users,
  BookOpen,
  Target,
  Clock,
  Award,
  BrainCircuit,
  BadgeCheck,
  GraduationCap,
  Star,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { CareerOptionsSection } from "@/components/CareerOptionsSection";
import { IntegratedCoachingSection } from "@/components/IntegratedCoachingSection";

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
      title: "XI + XII + NEET / JEE",
      description: "A comprehensive program covering NEET/JEE entrance preparation + State Board syllabus",
      subjects: "Physics, Chemistry, Biology / Maths (NCERT + State board)",
      coursePlan: "Foundation + Concept clarity + Classroom practice + Test series + Doubt solving",
      duration: "24 months",
      lectureDuration: "7-8 Hours Daily (Integrated batch) & 4-5 hours daily (Regular batch)",
    },
    {
      title: "XI + XII + MHT-CET",
      description: "Ideal for students targeting MHT-CET for Engineering / Pharmacy admissions in Maharashtra",
      subjects: "Physics, Chemistry, Biology, Maths (State board)",
      coursePlan: "Foundation + Concept clarity + Classroom practice + Test series + Doubt solving",
      duration: "24 months",
      lectureDuration: "4-5 hours daily (Regular batch)",
    },
    {
      title: "XI + XII State Board",
      description: "For students focusing only on State board exams",
      subjects: "Physics, Chemistry, Biology, Maths (State board)",
      coursePlan: "Foundation + Concept clarity + Classroom practice + Test series + Doubt solving",
      duration: "22 months",
      lectureDuration: "3-4 hours daily (Regular batch)",
    },
    {
      title: "Rank Booster (NEET/JEE Repeaters)",
      description:
        "Accelerate your prep with targeted revision, high-impact practice, and expert mentorship. Ideal for repeaters and serious aspirants aiming for top ranks.",
      subjects: "Physics, Chemistry, Biology/Mathematics",
      coursePlan: "Foundation + Concept clarity + Classroom practice + Test series + Doubt solving",
      duration: "10-12 months",
      lectureDuration: "4-5 hours daily (Regular batch)",
    },
  ];

  const entranceExams = [
    {
      title: "NEET",
      subtitle: "National Eligibility cum Entrance Test",
      description: "Medical Entrance Examination",
      link: "/neet",
    },
    {
      title: "JEE",
      subtitle: "Joint Entrance Examination (Mains + Advanced)",
      description: "Engineering Entrance Examination",
      link: "/jee",
    },
    {
      title: "MHT-CET",
      subtitle: "Maharashtra Common Entrance Test",
      description: "State level Entrance Exam",
      link: "/cet",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <Logo />
      </header>

      {/* Hero Banner */}
      <section className="relative py-12 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-8 w-24 h-24 border-2 border-yellow-300 rounded-full" />
          <div className="absolute bottom-4 right-12 w-32 h-32 border-2 border-yellow-300 rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-yellow-300 rounded-full" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-5 py-2 mb-5">
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
            <span className="text-yellow-200 text-sm font-medium tracking-wide uppercase">Since 1981</span>
            <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Celebrating 45th Year
            </span>
          </h1>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-blue-900">Why Choose Us?</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">What sets Students' Classes apart</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="relative group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-blue-100/60 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Courses */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border border-blue-100 bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-blue-900">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="space-y-4">
                    <p className="text-gray-600">{course.description}</p>
                    <div className="space-y-3 text-sm">
                      <p className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Subjects:</strong> {course.subjects}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Course Plan:</strong> {course.coursePlan}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Duration:</strong> {course.duration}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>
                          <strong>Lecture Duration:</strong> {course.lectureDuration}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Entrance Exams */}
      <section className="py-14 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {entranceExams.map((exam, index) => (
              <Link key={index} to={exam.link} className="block group">
                <Card className="border border-blue-100 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <GraduationCap className="w-6 h-6 text-orange-600" />
                      </div>
                      <CardTitle className="text-[30px] font-bold text-blue-900">{exam.title}</CardTitle>
                      <p className="text-base text-gray-700">{exam.subtitle}</p>
                      <p className="text-sm text-gray-500">{exam.description}</p>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <IntegratedCoachingSection />

      <CareerOptionsSection />
    </div>
  );
}
