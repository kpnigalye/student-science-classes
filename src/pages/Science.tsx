import { Helmet } from "react-helmet-async";
import { BookOpen, Target, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { IntegratedCoachingSection } from "@/components/IntegratedCoachingSection";

export default function Science() {
  const scienceCourses = [
    {
      title: "XI + XII + NEET / JEE",
      description: "A comprehensive program covering NEET/JEE entrance preparation + State Board syllabus",
      subjects: "Physics, Chemistry, Biology / Maths (NCERT + State board)",
      coursePlan: "Foundation + Concept clarity + Classroom practice + Test series + Doubt solving",
      duration: "24 months",
      lectureDuration: "4-5 hours daily (Regular batch). Extra lectures on Sundays and Holidays.",
    },
    {
      title: "XI + XII + MHT-CET",
      description: "Ideal for students targeting MHT-CET for Engineering / Pharmacy admissions in Maharashtra",
      subjects: "Physics, Chemistry, Biology, Maths (State board)",
      coursePlan: "Foundation + Concept clarity + Classroom practice + Test series + Doubt solving",
      duration: "24 months",
      lectureDuration: "4-5 hours daily (Regular batch). Extra lectures on Sundays and Holidays.",
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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Science Coaching and Integrated Batches - Students' Classes</title>
        <meta name="description" content="XI-XII Science integrated batches for NEET, JEE, MHT-CET and State Board. Explore structured coaching, experienced faculty, and entrance exam preparation." />
        <link rel="canonical" href="https://studentsclasses.in/science" />
        <meta property="og:title" content="Science Coaching and Integrated Batches - Students' Classes" />
        <meta property="og:description" content="XI-XII Science integrated batches for NEET, JEE, MHT-CET and State Board." />
        <meta property="og:url" content="https://studentsclasses.in/science" />
      </Helmet>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 px-4 py-3 backdrop-blur">
        <Logo />
      </header>

      {/* Page Hero */}
      <section className="py-12 px-4 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Link to="/" className="text-blue-300 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <ArrowRight className="w-3 h-3 text-blue-400" />
            <span className="text-white text-sm font-medium">Science</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Science Courses</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            XI – XII Science stream batches with Board & Entrance exam preparation
          </p>
        </div>
      </section>

      {/* Science Courses */}
      <section className="py-14 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">Our Batches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scienceCourses.map((course, index) => (
              <Card
                key={index}
                className="border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <CardHeader className="border-b border-border bg-gradient-panel">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-primary-foreground">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">{course.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-5">
                  <div className="space-y-4">
                    <p className="text-gray-600">{course.description}</p>
                    <div className="space-y-3 text-sm">
                      <p className="flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-steel mt-1 flex-shrink-0" />
                        <span>
                          <strong>Subjects:</strong> {course.subjects}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Target className="w-4 h-4 text-steel mt-1 flex-shrink-0" />
                        <span>
                          <strong>Course Plan:</strong> {course.coursePlan}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-steel mt-1 flex-shrink-0" />
                        <span>
                          <strong>Duration:</strong> {course.duration}
                        </span>
                      </p>
                      <p className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-steel mt-1 flex-shrink-0" />
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
      <section className="py-14 px-4 bg-secondary/40 border-y border-border">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">Entrance Exams</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {entranceExams.map((exam, index) => (
              <Link key={index} to={exam.link} className="block group">
                <Card className="border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift h-full text-center">
                  <CardHeader>
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-navy transition-colors group-hover:bg-navy group-hover:text-primary-foreground">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-[30px] font-bold text-primary">{exam.title}</CardTitle>
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
    </div>
  );
}
