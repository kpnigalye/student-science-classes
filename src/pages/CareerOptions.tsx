import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CareerOptionsSection } from "@/components/CareerOptionsSection";

export default function CareerOptions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <Logo />
      </header>

      {/* Page Hero */}
      <section className="py-12 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Link to="/" className="text-blue-300 hover:text-white transition-colors text-sm">Home</Link>
            <ArrowRight className="w-3 h-3 text-blue-400" />
            <span className="text-white text-sm font-medium">Career Options</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Career Options after XI + XII</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Explore career paths available after completing Science stream
          </p>
        </div>
      </section>

      <CareerOptionsSection />
    </div>
  );
}
