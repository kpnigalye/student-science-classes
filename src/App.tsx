
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NeetExam from "./pages/NeetExam";
import JeeExam from "./pages/JeeExam";
import CetExam from "./pages/CetExam";
import Science from "./pages/Science";
import SchoolSection from "./pages/SchoolSection";
import CommerceArts from "./pages/CommerceArts";
import CareerOptions from "./pages/CareerOptions";
import XIAdmissions from "./pages/XIAdmissions";
import Privacy from "./pages/Privacy";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppChat } from "./components/WhatsAppChat";
import { ScrollToTopOnNavigation } from "./components/ScrollToTopOnNavigation";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNavigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/science" element={<Science />} />
          <Route path="/ix-x" element={<SchoolSection />} />
          <Route path="/commerce-arts" element={<CommerceArts />} />
          <Route path="/career-options" element={<CareerOptions />} />
          <Route path="/xi-admissions" element={<XIAdmissions />} />
          <Route path="/neet" element={<NeetExam />} />
          <Route path="/jee" element={<JeeExam />} />
          <Route path="/cet" element={<CetExam />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <WhatsAppChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
