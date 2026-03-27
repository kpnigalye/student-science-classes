import {
  Users,
  Target,
  Clock,
  Award,
  BrainCircuit,
  BadgeCheck,
  FlaskConical,
  Palette,
  School,
  ArrowRight,
  Lock,
  Star,
  GraduationCap,
} from "lucide-react";
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

      {/* Our Courses - Category Selection */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-3 text-blue-900">Our Courses</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Choose your stream</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* IX-X Coming Soon */}
            <Card className="border border-gray-200 bg-gray-50 h-full opacity-75">
              <CardHeader className="text-center pb-3">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <School className="w-7 h-7 text-gray-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-500">IX – X</CardTitle>
                <p className="text-sm text-gray-400">State / CBSE Board</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Lock className="w-3 h-3" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>

            {/* Science - Active */}
            <Link to="/science" className="block group">
              <Card className="border-2 border-blue-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                <CardHeader className="text-center pb-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <FlaskConical className="w-7 h-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-blue-900">Science</CardTitle>
                  <p className="text-sm text-gray-500">XI – XII Science Stream</p>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold">
                    Explore Courses <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            {/* Commerce & Arts Coming Soon */}
            <Card className="border border-gray-200 bg-gray-50 h-full opacity-75">
              <CardHeader className="text-center pb-3">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <Palette className="w-7 h-7 text-gray-400" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-500">Commerce & Arts</CardTitle>
                <p className="text-sm text-gray-400">XI – XII</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-200 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Lock className="w-3 h-3" />
                  Coming Soon
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Career Options Link */}
          <div className="mt-10 text-center">
            <Link to="/career-options" className="group inline-flex items-center gap-2">
              <Card className="border border-blue-100 bg-white hover:shadow-lg transition-all duration-300 px-8 py-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  <span className="text-lg font-semibold text-blue-900">Career Options after XI + XII</span>
                  <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
