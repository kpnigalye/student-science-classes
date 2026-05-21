import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

const mistakes = [
  {
    title: "Choosing a College Only Based on Its Brand Name",
    intro: "Many students and parents assume that admission to a famous junior college automatically guarantees success in Boards, NEET, JEE, or MHT-CET.",
    realityItems: [
      "Large classroom sizes",
      "Limited personal attention",
      "Strict attendance requirements",
      "Less flexibility for competitive exam preparation",
    ],
    betterItems: [
      "Convenient location and travel time",
      "Minimal attendance pressure",
      "Quality of teaching",
      "Academic discipline and study environment",
      "Compatibility with your entrance exam preparation plan",
    ],
  },
  {
    title: "Not Deciding the Goal Early",
    intro: "Many students take admission to XI Science without clarity about:",
    introList: [
      "NEET, JEE, MHT-CET, or Boards",
      "Career options after XII",
      "Backup plans if the first choice doesn't work out",
      "Job opportunities and future prospects",
    ],
    subtitle: "Why this matters:",
    body: "Different exams require different preparation strategies.",
    strategies: [
      { label: "NEET", value: "Strong Biology and NCERT mastery" },
      { label: "JEE", value: "Deep conceptual understanding of Physics and Mathematics" },
      { label: "MHT-CET", value: "Speed, accuracy, and extensive MCQ practice" },
    ],
    closing: "Without a clear direction, students often spend XI experimenting and lose valuable preparation time.",
  },
  {
    title: "Taking Too Many Classes Together",
    intro: "This is one of the most common mistakes.",
    body: "Students often enroll in:",
    realityItems: [
      "Junior college",
      "Integrated coaching",
      "Separate subject-wise tuitions",
      "Test series",
      "Online courses",
    ],
    resultTitle: "Result:",
    realityItems2: [
      "Very little self-study time",
      "Excessive travelling",
      "Physical and mental fatigue",
      "Incomplete revision",
      "Difficulty maintaining consistency",
    ],
    closing: "Students remain busy throughout the day but make limited academic progress.",
  },
  {
    title: "Ignoring XI Fundamentals",
    intro: "Some parents believe: \"XII is important. XI can somehow be managed.\" Unfortunately, this approach creates major difficulties later.",
    subtitle: "Reality:",
    body: "XI forms the foundation for:",
    realityItems: [
      "XII Board examinations",
      "NEET",
      "JEE",
      "MHT-CET",
    ],
    closing: "Weak concepts in XI often become the biggest obstacle during XII.",
  },
  {
    title: "Choosing Coaching Because Friends Joined",
    intro: "Many students simply follow their friends while selecting coaching classes.",
    subtitle: "The problem:",
    body: "Every student is different in terms of:",
    realityItems: [
      "Learning speed",
      "Academic strengths",
      "Discipline level",
      "Career goals",
    ],
    closing: "A coaching program that works well for one student may not be suitable for another. Choose a coaching institute based on your needs, not your friend circle.",
  },
  {
    title: "Underestimating Daily Study Discipline",
    intro: "Many students believe serious preparation can begin in XII.",
    subtitle: "Reality:",
    body: "Competitive exams reward consistency, not last-minute effort. Success comes from:",
    realityItems: [
      "Daily revision",
      "Regular MCQ practice",
      "Timely doubt solving",
      "Continuous testing and improvement",
    ],
    closing: "Small daily efforts over two years produce the best results.",
  },
  {
    title: "Ignoring Travel Time",
    intro: "Students often choose colleges and coaching centres without considering daily travel.",
    resultTitle: "Result:",
    realityItems: [
      "Wasted hours every day",
      "Reduced study time",
      "Increased fatigue",
      "Lower concentration levels",
    ],
    closing: "Sometimes a nearby college or coaching centre can provide better outcomes simply because the student has more time and energy to study.",
  },
  {
    title: "Joining Integrated Programs Without Understanding the Commitment",
    intro: "Many students assume integrated programs automatically make preparation easier.",
    subtitle: "Reality:",
    body: "Integrated programs work only when students:",
    realityItems: [
      "Attend regularly",
      "Follow a disciplined schedule",
      "Complete assignments on time",
      "Take tests seriously",
    ],
    closing: "Without self-discipline, students may struggle in both Boards and entrance exams.",
  },
  {
    title: "Attending Lectures but Not Practising",
    intro: "A common mistake is focusing only on classroom teaching.",
    body: "Students attend lectures regularly but:",
    realityItems: [
      "Don't revise",
      "Solve very few questions",
      "Avoid mock tests",
      "Ignore mistakes",
    ],
    closing: "Remember: Selection depends on practice, application, and test performance—not just attendance.",
  },
  {
    title: "Falling for Marketing Claims and Topper Advertisements",
    intro: "Many institutes promote:",
    realityItems: [
      "AIRs and top ranks",
      "High selection numbers",
      "Exceptional success stories",
    ],
    subtitle: "Before making a decision, ask:",
    realityItems2: [
      "How many students were enrolled?",
      "What is the average student's improvement?",
      "Are results consistent every year?",
    ],
    closing: "Consistent outcomes matter more than a few exceptional cases.",
  },
  {
    title: "Ignoring Burnout and Schedule Balance",
    intro: "The transition from SSC to XI Science is significant.",
    body: "Students suddenly face:",
    realityItems: [
      "College",
      "Coaching",
      "Entrance preparation",
      "Tests and assignments",
    ],
    resultTitle: "Without proper planning, many students experience:",
    realityItems2: [
      "Loss of motivation",
      "Backlogs",
      "Stress",
      "Reduced confidence",
    ],
    closing: "A balanced and sustainable schedule is essential.",
  },
  {
    title: "Following the Wrong Boards + Entrance Strategy",
    intro: "Some students focus only on entrance exam MCQs and neglect Board preparation.",
    resultTitle: "Result:",
    realityItems: [
      "Weak writing skills",
      "Difficulty in descriptive answers",
      "Unnecessary stress before Board exams",
    ],
    closing: "A balanced approach to both Boards and entrance exams is necessary for long-term success.",
  },
  {
    title: 'Depending on "I\'ll Cover It Later"',
    intro: "Students often postpone difficult chapters thinking they can complete them later through online videos or self-study.",
    subtitle: "Reality:",
    body: "Backlogs rarely become smaller. They usually keep growing.",
    closing: "The best approach is to clear doubts and complete topics as they are taught.",
  },
];

const helps = [
  "Career guidance before admission",
  "Clear roadmap for NEET, JEE, MHT-CET and Boards",
  "Structured XI + XII integrated preparation",
  "Strong focus on XI fundamentals",
  "Regular testing, revision and doubt-solving sessions",
  "Personal attention and academic monitoring",
  "Parent-student counselling and progress reviews",
  "Balanced preparation for both Boards and entrance exams",
  "Disciplined study environment with manageable batch sizes",
  "Guidance on college selection, career options and backup plans",
];

export default function XIAdmissions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <Logo />
      </header>

      {/* Hero Banner */}
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
            Common admission mistakes students make after SSC while choosing XI Science — and how to avoid them.
          </p>
        </div>
      </section>

      {/* Mistakes Section */}
      <section className="py-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-900">
            Common Admission Mistakes Students Make After SSC While Choosing XI Science
          </h2>

          <div className="space-y-10">
            {mistakes.map((m, i) => (
              <div key={i} className="relative">
                {/* Number badge */}
                <div className="absolute -left-3 md:-left-4 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg z-10">
                  {i + 1}
                </div>

                <div className="ml-8 md:ml-10 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  {/* Title bar */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-blue-100">
                    <h3 className="text-lg md:text-xl font-bold text-blue-900 pl-2">{m.title}</h3>
                  </div>

                  <div className="px-6 py-6 space-y-5">
                    {/* Intro text */}
                    {m.intro && (
                      <p className="text-gray-700 leading-relaxed">{m.intro}</p>
                    )}

                    {/* Intro list */}
                    {m.introList && (
                      <ul className="space-y-1.5 pl-4 mt-2">
                        {m.introList.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Body text */}
                    {m.body && (
                      <p className="text-gray-700 font-medium">{m.body}</p>
                    )}

                    {/* Reality / warning items */}
                    {(m.realityItems?.length > 1 || m.resultTitle) && (
                      <div className="bg-amber-50/60 rounded-xl border border-amber-100 p-4">
                        {m.subtitle && (
                          <p className="font-semibold text-amber-800 mb-2">{m.subtitle}</p>
                        )}
                        {m.resultTitle && (
                          <p className="font-semibold text-amber-800 mb-2">{m.resultTitle}</p>
                        )}
                        <ul className="space-y-1.5">
                          {m.realityItems.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Single reality item */}
                    {m.realityItems?.length === 1 && !m.resultTitle && (
                      <div className="flex gap-2 text-gray-700">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                        {m.realityItems[0]}
                      </div>
                    )}

                    {/* Strategies (NEET/JEE/CET) */}
                    {m.strategies && (
                      <div className="bg-blue-50/60 rounded-xl border border-blue-100 p-4 space-y-2">
                        {m.strategies.map((s, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-blue-600 text-white text-xs font-bold flex-shrink-0 mt-0.5">
                              {s.label}
                            </span>
                            <span className="text-gray-700">{s.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Second reality block */}
                    {m.realityItems2 && (
                      <div className="bg-amber-50/60 rounded-xl border border-amber-100 p-4">
                        {m.resultTitle && !m.realityItems?.length && (
                          <p className="font-semibold text-amber-800 mb-2">{m.resultTitle}</p>
                        )}
                        <ul className="space-y-1.5">
                          {m.realityItems2.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Better approach */}
                    {m.betterItems && (
                      <div className="bg-blue-50/60 rounded-xl border border-blue-100 p-4">
                        <p className="font-semibold text-blue-800 mb-2">What to look for instead:</p>
                        <ul className="space-y-1.5">
                          {m.betterItems.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Closing text */}
                    {m.closing && (
                      <p className="text-gray-600 italic border-l-4 border-gray-200 pl-4 py-1">
                        {m.closing}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-14 px-4 bg-gradient-to-b from-blue-50/50 to-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl border border-blue-100 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-6 py-5">
              <h2 className="text-xl md:text-2xl font-bold text-white">
                How Students Classes Helps Students & Parents
              </h2>
            </div>
            <div className="px-6 py-6">
              <p className="text-gray-700 mb-5 leading-relaxed">
                At <span className="font-bold text-blue-900">Students Classes</span>, we help students avoid these common mistakes through:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {helps.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                <p className="text-blue-900 font-semibold text-center">
                  Our objective is simple: <span className="font-bold">help students make informed decisions in XI and stay on the right path throughout their two most important academic years.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8 md:p-10">
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
      </section>
    </div>
  );
}
