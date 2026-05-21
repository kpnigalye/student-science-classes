import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mistakes = [
  {
    title: "Choosing College Only Based on \"Brand Name\"",
    reality: [
      "Huge batches",
      "Less personal attention",
      "High attendance pressure",
      "Long travel time and exhaustion",
    ],
    better: [
      "Distance from home",
      "Low attendance pressure",
      "Teaching quality",
      "Discipline and study environment",
      "Time available for self-study",
    ],
    help: [
      "Structured study planning",
      "Regular monitoring",
      "Personal attention",
      "Focused preparation without unnecessary pressure",
    ],
    realityIntro: "Many students take admission in famous junior colleges assuming reputation alone guarantees success. Big-name colleges often have:",
    betterLabel: "Better Approach – Choose based on:",
  },
  {
    title: "Not Deciding Their Target Early",
    realityIntro: "Many students join XI Science without clarity about NEET / JEE / MHT-CET, courses after XII, backup options, or career opportunities. Different exams require different preparation styles:",
    reality: [
      "NEET → Deep Biology + NCERT focus",
      "JEE → Strong Physics & Maths concepts",
      "MHT-CET → Speed + MCQ practice",
    ],
    help: [
      "Career paths after XII",
      "Suitable entrance exams",
      "Strength-based planning",
      "Backup options and realistic goal setting",
    ],
  },
  {
    title: "Taking Too Many Classes Together",
    realityIntro: "Students join college, integrated coaching, separate subject tuitions, test series, and online courses all at once. Result:",
    reality: [
      "No self-study time",
      "Constant travelling",
      "Burnout and stress",
      "Incomplete revision",
    ],
    help: [
      "Complete academic support under one roof",
      "Planned study schedules",
      "Regular tests and revision",
      "Balanced workload for long-term consistency",
    ],
  },
  {
    title: "Ignoring XI Fundamentals",
    realityIntro: "Some parents think \"XII is important, XI can be managed somehow.\" In reality, XI concepts form the foundation for:",
    reality: ["XII Boards", "NEET", "JEE", "MHT-CET"],
    help: [
      "Concept clarity",
      "Regular practice",
      "Strong foundation building",
      "Step-by-step learning approach",
    ],
  },
  {
    title: "Choosing Coaching Only Because Friends Joined",
    realityIntro: "Every student has different learning speed, academic strengths, goals, and discipline levels. A batch suitable for one may not suit another.",
    reality: [],
    help: [
      "Student capability",
      "Career goals",
      "Academic performance",
      "Study habits",
    ],
  },
  {
    title: "Underestimating Daily Study Discipline",
    realityIntro: "Many students believe serious preparation can start later. Entrance exams require:",
    reality: [
      "Daily revision",
      "Consistent MCQ practice",
      "Test analysis",
      "Proper time management",
    ],
    help: [
      "Daily study planning",
      "Regular tests",
      "Performance tracking",
      "Continuous motivation and guidance",
    ],
  },
  {
    title: "Ignoring Travel Time",
    realityIntro: "In Mumbai, students often spend 2–3 hours daily travelling between college and classes, resulting in:",
    reality: ["Fatigue", "Low concentration", "Reduced self-study time", "Poor productivity"],
    help: ["Practical planning so students save valuable time and energy for effective study and revision."],
  },
  {
    title: "Taking Integrated/Dummy Admission Without Understanding the System",
    realityIntro: "Many students assume integrated programs are automatically easier. They work only when students maintain:",
    reality: ["Discipline", "Regular study habits", "Test consistency", "Self-motivation"],
    help: [
      "Structured preparation",
      "Regular supervision",
      "Balanced board + entrance focus",
      "Continuous academic monitoring",
    ],
  },
  {
    title: "Focusing Only on Lectures, Not Practice",
    realityIntro: "Many students attend lectures sincerely but avoid revision and practice. Success depends on:",
    reality: ["Problem solving", "MCQ practice", "Revision cycles", "Mistake analysis"],
    help: [
      "Regular practice sessions",
      "Topic-wise tests",
      "Revision planning",
      "Error correction guidance",
    ],
  },
  {
    title: "Falling for \"100% Result\" Marketing",
    realityIntro: "Many institutes advertise toppers and ranks without showing the full picture. Parents should check:",
    reality: [
      "Average student improvement",
      "Consistency of results",
      "Teaching stability",
      "Student support system",
    ],
    help: [
      "Consistent performance",
      "Concept improvement",
      "Long-term student development",
      "Practical and honest guidance",
    ],
  },
  {
    title: "Ignoring Mental Burnout & Balance",
    realityIntro: "Students suddenly face college pressure, entrance preparation, travelling, and tests. Without proper balance, motivation drops quickly.",
    reality: [],
    help: [
      "Realistic scheduling",
      "Continuous mentoring",
      "Positive learning environment",
      "Focus on consistency over pressure",
    ],
  },
  {
    title: "Incorrect Boards + Entrance Strategy",
    realityIntro: "Some students focus only on MCQs and ignore board-writing practice, leading to difficulty in HSC boards, poor answer-writing skills, and last-minute board stress.",
    reality: [],
    help: [
      "Boards",
      "NEET",
      "JEE",
      "MHT-CET",
    ],
    helpIntro: "Balanced preparation through separate planning for theory and MCQ practice for:",
  },
  {
    title: "Depending Completely on Online Videos for Backlogs",
    realityIntro: "Students postpone difficult chapters thinking they will cover them later online. Backlogs keep increasing and confidence drops.",
    reality: [],
    help: [
      "Chapter completion",
      "Test performance",
      "Doubt solving",
      "Backlog management",
    ],
    helpIntro: "We regularly monitor:",
  },
];

export default function XIAdmissions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <Logo />
      </header>

      <section className="py-12 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Link to="/" className="text-blue-300 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <ArrowRight className="w-3 h-3 text-blue-400" />
            <span className="text-white text-sm font-medium">XI Admissions</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">XI Science Admissions – Mumbai</h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Common mistakes students make while taking XI Science admission — and how Students' Classes helps you avoid them.
          </p>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-blue-900">
            Common Mistakes Students Make While Taking XI Science Admission
          </h2>

          <div className="space-y-6">
            {mistakes.map((m, i) => (
              <Card key={i} className="border border-blue-100 bg-white hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <CardTitle className="text-lg md:text-xl text-blue-900 pt-1">{m.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-5">
                  {m.realityIntro && (
                    <div className="flex gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 leading-relaxed">{m.realityIntro}</p>
                    </div>
                  )}
                  {m.reality.length > 0 && (
                    <ul className="grid sm:grid-cols-2 gap-2 pl-8">
                      {m.reality.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  {m.betterLabel && (
                    <div className="flex gap-3 pt-2">
                      <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 font-medium">{m.betterLabel}</p>
                    </div>
                  )}
                  {m.better && (
                    <ul className="grid sm:grid-cols-2 gap-2 pl-8">
                      {m.better.map((r, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 p-4 mt-4">
                    <div className="flex gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="font-semibold text-green-900">
                        {m.helpIntro || "How Students' Classes Helps:"}
                      </p>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 pl-8">
                      {m.help.map((h, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">Plan Your XI Science Journey the Right Way</h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Get personal guidance from our team and start XI with clarity, discipline, and a proven strategy.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-yellow-400 text-blue-950 hover:bg-yellow-300 font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Book a Free Counselling Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}