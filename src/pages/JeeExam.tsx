
import { JeeSection } from "@/components/EntranceDetails";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function JeeExam() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <Logo />
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <JeeSection />
      </main>
    </div>
  );
}
