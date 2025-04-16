
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
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppChat } from "./components/WhatsAppChat";
import { ScrollToTopOnNavigation } from "./components/ScrollToTopOnNavigation";

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
          <Route path="/neet" element={<NeetExam />} />
          <Route path="/jee" element={<JeeExam />} />
          <Route path="/cet" element={<CetExam />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
        <WhatsAppChat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
