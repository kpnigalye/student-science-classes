import {
  BookOpen,
  AlertCircle,
  Rocket,
  School,
  Heart,
  MessageCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WHATSAPP_URL = "https://wa.me/918097740318?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20integrated%20batches.";

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </a>
  );
}

export function IntegratedCoachingSection() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 right-20 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-4 py-1.5 mb-6">
            <Target className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-200 text-sm font-medium">Integrated Coaching</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Integrated XI–XII Science + NEET/JEE Coaching in Mumbai
          </h2>
          <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
            Start early. Stay ahead. Build strong concepts for Boards + Entrance Exams together.
          </p>
          <CTAButton>Book a Free Counselling Session</CTAButton>
        </div>
      </section>

      {/* Section 1: Why Integrated Batches */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Why Integrated Coaching is the Need of the Hour
            </h3>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                After Class 10, students must prepare for both <strong>Board Exams</strong> and{" "}
                <strong>Competitive Exams</strong> (NEET/JEE/CET). Managing both separately often leads to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {["Time pressure", "Confusion in study approach", "Increased stress in Std. XII"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-800 text-lg">
                  Our <strong>Integrated Batches</strong> combine both preparations into a single structured system.
                </p>
              </div>
              <div className="mt-8 text-center">
                <CTAButton>Talk to an Academic Counsellor</CTAButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Board vs Entrance */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Board Exams vs Entrance Exams
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Board Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Theory-based answers", "Presentation & neatness", "Step-wise marking"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-orange-600" />
                  Entrance Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {["Concept clarity & application", "Speed & accuracy", "Problem-solving skills"].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-lg font-semibold text-blue-900">
            👉 One study method is not enough for both.
          </p>
        </div>
      </section>

      {/* Section 3: The Reality Parents Must Know */}
      <section className="py-14 px-4 bg-amber-50/70">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Do NEET/JEE Classes Cover Board Exams?
            </h3>
          </div>
          <Card className="border border-amber-200 shadow-md">
            <CardContent className="p-8 space-y-5">
              <p className="text-gray-700 text-lg leading-relaxed">
                Many institutes claim complete Board preparation within entrance coaching.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-gray-800 font-medium text-lg">
                  👉 In reality, students must put <strong>independent effort</strong> for Board exams.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                {[
                  "Board and Entrance exams require different teaching approaches",
                  "Faculty time is often focused more on entrance preparation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="text-blue-900 font-semibold text-lg">
                  👉 That's why a balanced system is important.
                </p>
              </div>
              <div className="pt-4 text-center">
                <CTAButton>Understand Our Teaching Approach</CTAButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Our Approach */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Our Integrated Approach at Students' Classes
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-green-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Entrance Preparation (Primary Focus)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <ul className="space-y-3">
                  {[
                    "NCERT-based concept clarity",
                    "Regular objective tests",
                    "Problem-solving focus",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  Board Support
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <ul className="space-y-3">
                  {[
                    "Dedicated Board guidance (Std. XII)",
                    "Subjective tests & writing practice",
                    "Full Board prelim exams",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center mb-8">
            <p className="text-gray-800 text-lg">
              👉 A disciplined student typically doesn't need <strong>separate Board coaching</strong>.
            </p>
          </div>
          <div className="text-center">
            <CTAButton>Enroll for Integrated Batch</CTAButton>
          </div>
        </div>
      </section>

      {/* Section 5: Std. XI College Exam Support */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <School className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              What About College Exams in Std. XI?
            </h3>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 space-y-5">
              <div className="space-y-3">
                {[
                  "Students come from different colleges",
                  "College syllabus may differ from our schedule",
                  "We follow NCERT sequence for NEET/JEE",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-gray-800 font-medium">👉 Hence, mismatch may occur.</p>
              </div>

              <h4 className="text-lg font-semibold text-blue-900 pt-2">Support Provided:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Extra revision sessions", "Personal guidance"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-blue-900 pt-2">Conditions:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["Inform in advance", "Attend extra sessions if needed"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-lg p-4">
                    <MessageCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <CTAButton>Speak to Our Team</CTAButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 6: Final Trust Section */}
      <section className="py-14 px-4 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-yellow-300" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">
              Our Commitment to Your Child's Success
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: "Strong Foundation", icon: BookOpen },
              { label: "Consistent Progress", icon: Target },
              { label: "Competitive Exam Readiness", icon: Rocket },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <item.icon className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <p className="font-semibold text-lg">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-blue-200 text-lg mb-8">
            While we support Boards, our <strong className="text-white">primary focus remains NEET/JEE success</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
