import { Helmet } from "react-helmet-async";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CareerOptionsSection } from "@/components/CareerOptionsSection";

export default function CareerOptions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Career Options after XII - Students' Classes</title>
        <meta name="description" content="Explore PCM and PCB career paths after XII including engineering, medicine, pharmacy, research, agriculture, and professional courses." />
        <link rel="canonical" href="https://studentsclasses.in/career-options" />
        <meta property="og:title" content="Career Options after XII - Students' Classes" />
        <meta property="og:description" content="Explore PCM and PCB career paths after XII including engineering, medicine, pharmacy, and research." />
        <meta property="og:url" content="https://studentsclasses.in/career-options" />
      </Helmet>
      <header className="py-6 px-4 bg-white shadow-sm">
        <Logo />
      </header>

      {/* Page Hero */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Link to="/" className="text-blue-300 hover:text-white transition-colors text-sm">
              Home
            </Link>
            <ArrowRight className="w-3 h-3 text-blue-400" />
            <span className="text-white text-sm font-medium">Career Options</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Career Options after XII</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Explore career paths available after completing XII</p>
        </div>
      </section>

      <CareerOptionsSection />
    </div>
  );
}
