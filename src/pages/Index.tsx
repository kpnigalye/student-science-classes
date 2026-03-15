
import { GraduationCap, Users, BookOpen, Target, Clock, Award, BrainCircuit, BadgeCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { CareerOptionsSection } from "@/components/CareerOptionsSection";

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
      title: "XI + XII + NEET/JEE",
      description: "Integrated program for Board & NEET/JEE exam preparation",
      timing: "Morning Batch: 7:00 AM - 10:00 AM\nEvening Batch: 5:00 PM - 8:00 PM",
      subjects: "Physics, Chemistry, Mathematics(for JEE), Biology (For NEET)",
      duration: "2 Years"
    },
    {
      title: "XI + XII + MHT-CET",
      description: "Integrated program for Board & MHT-CET exam preparation",
      timing: "Morning Batch: 7:00 AM - 11:00 AM\nEvening Batch: 5:00 PM - 9:00 PM",
      subjects: "Physics, Chemistry, Mathematics, Biology",
      duration: "2 Years"
    },
    {
      title: "XI + XII",
      description: "Focus on State Board curriculum and exam preparation",
      timing: "Morning Batch: 7:00 AM - 9:00 AM\nEvening Batch: 6:00 PM - 8:00 PM",
      subjects: "Physics, Chemistry, Mathematics, Biology",
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
      subtitle: "Joint Entrance Examination (Mains + Advanced)",
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
      <header className="py-6 px-4 bg-white shadow-sm">
        <Logo />
      </header>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 animate-pulse">
            Celebrating 45th Year of Excellence
          </h1>
        </div>
      </section>

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

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Courses</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-green-50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <CardTitle className="text-2xl font-bold text-blue-900">{course.title}</CardTitle>
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {entranceExams.map((exam, index) => (
              <Link key={index} to={exam.link} className="block">
                <Card className="border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-orange-50 hover:shadow-lg transition-shadow h-full text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-2">
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

      {/* Important Info Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
            <h2 className="text-3xl font-bold text-center text-blue-900">Important Information</h2>
          </div>
          <div className="bg-white rounded-lg border-2 border-amber-200 shadow-md p-8 space-y-4 text-gray-700 leading-relaxed">
            <h3 className="text-xl font-bold text-blue-900">Will NEET/JEE Courses Include Board Exam Coaching?</h3>
            
            <p>Many coaching classes claim to cover Board exam preparation within NEET/JEE courses, but in reality, independent effort by students is essential for scoring well in Board exams. <strong>Parents are requested to take note.</strong></p>
            
            <p>Board and competitive exams require different approaches and teaching styles, ideally handled by separate teaching teams. Given the vast NEET/JEE syllabus, the faculty may not have sufficient time to cover the Board syllabus comprehensively.</p>
            
            <p>That said, there is significant overlap in syllabus. A sincere and disciplined student usually does not need additional coaching for Boards. At <strong>Students' Classes</strong>, we support Board preparation in Std. XII by:</p>
            
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Conducting dedicated lectures for Board guidance</li>
              <li>Holding subjective tests and Board prelims</li>
            </ul>
            
            <h4 className="text-lg font-semibold text-blue-800 pt-2">Regarding Std. XI College Exams:</h4>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Students in our batches come from different colleges, and college syllabi often differ from our schedule.</li>
              <li>We follow NCERT chapter sequence to align with entrance exam goals.</li>
              <li>As a result, our syllabus may not always match college test portions.</li>
            </ul>
            
            <p>In such cases, our teachers offer extra revision support, provided:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Students inform us of the mismatched topics</li>
              <li>Students are willing to attend sessions beyond regular hours.</li>
            </ul>
            
            <p className="font-semibold text-blue-900 pt-2">We are committed to our students' success, especially in competitive exams, which remain our primary focus.</p>
          </div>
        </div>
      </section>

      <CareerOptionsSection />
    </div>
  );
}
