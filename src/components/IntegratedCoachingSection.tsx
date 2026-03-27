import {
  BookOpen,
  AlertCircle,
  Rocket,
  School,
  Heart,
  Lightbulb,
  MessageCircle,
  CheckCircle,
  XCircle,
  ArrowRight,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WHATSAPP_URL =
  "https://wa.me/918097740318?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20the%20integrated%20batches.";

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
      {/* Section 1: Why Integrated Batches */}
      <section className="py-14 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-20 w-40 h-40 border border-white rounded-full" />
          <div className="absolute bottom-10 right-20 w-60 h-60 border border-white rounded-full" />
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Integrated Batches is the need of the hour?
          </h2>
          <div className="space-y-6 text-blue-100 text-lg leading-relaxed">
            <p>
              In recent years, the academic landscape after Class 10 has changed significantly. Students are no longer
              preparing only for Board exams. They are simultaneously expected to perform well in competitive exams like{" "}
              <strong className="text-white">NEET, JEE, and MHT-CET</strong>. These exams demand Strong conceptual
              understanding, Regular practice and testing, Long-term, structured preparation.
            </p>
            <p className="text-center font-medium text-yellow-200">
              Because of this, starting preparation early (from Std. XI) has become essential — not optional.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Why Integrated Preparation is Necessary */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Why Integrated Preparation is Necessary?</h3>
          </div>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Traditionally, students prepare for Board exams and Entrance exams separately. However, this approach
                often leads to a lack of time, confusion between different study methods, incomplete syllabus coverage,
                and increased stress during Std. XII.
              </p>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Integrated batches are designed to solve these challenges by combining Board syllabus preparation and
                Entrance exam preparation into a single, well-structured system. Along with this, students benefit from
                regular testing and revision, ensuring consistent progress and better understanding throughout the
                academic journey.
              </p>
              <div className="mt-8 text-center">
                <CTAButton>Talk to an Academic Counsellor</CTAButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Board vs Entrance - The Reality */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Board Exams vs Entrance Exams — The Reality
            </h3>
          </div>
          <p className="text-center text-gray-600 text-lg mb-8">It is important for parents to understand:</p>
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
                  {["Theory + Presentation", "Step marking", "Predictable pattern"].map((item) => (
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
                  {["Concepts + Application", "Speed + Accuracy", "Competitive & unpredictable"].map((item) => (
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
            This means one approach cannot fully prepare students for both.
          </p>
        </div>
      </section>

      {/* Section 4: Important Clarification for Parents */}
      <section className="py-14 px-4 bg-amber-50/70">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Important Clarification for Parents</h3>
          </div>
          <Card className="border border-amber-200 shadow-md">
            <CardContent className="p-8 space-y-5">
              <p className="text-gray-700 text-lg leading-relaxed">
                Many coaching institutes claim that their NEET/JEE courses automatically cover Board preparation.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div>
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <p className="text-gray-800 font-medium text-lg">
                    <strong>Independent effort from students is essential</strong> to score well in Board exams.
                  </p>
                </div>
                <div>
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <p className="text-blue-900 text-lg leading-relaxed">
                    Board and Entrance preparation require <strong>different teaching styles and focus</strong>, which
                    ideally need separate planning and attention.
                  </p>
                </div>
              </div>
              <div className="pt-4 text-center">
                <CTAButton>Understand Our Teaching Approach</CTAButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Our Approach */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">Our Approach at Students' Classes</h3>
          </div>
          <p className="text-center text-gray-600 text-lg mb-8">
            At Students' Classes, we follow a balanced and practical approach:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-2 border-green-200 shadow-md">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-lg text-green-800 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  For Entrance Exams
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <ul className="space-y-3">
                  {[
                    "NCERT-based structured teaching",
                    "Concept clarity and problem-solving",
                    "Regular objective tests",
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
                  For Board Exams
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-5">
                <ul className="space-y-3">
                  {[
                    "Dedicated Board guidance lectures (Std. XII)",
                    "Subjective tests and answer-writing practice",
                    "Full-length Board prelim examinations",
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
          <div className="text-center">
            <CTAButton>Enroll for Integrated Batch</CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}
