
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, GraduationCap, Microscope } from "lucide-react";

export function CareerOptionsSection() {
  const pcmCareers = [
    {
      title: "Engineering & Technology",
      options: ["Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Computer Science", "Data Science", "AI & Machine Learning"]
    },
    {
      title: "Design & Architecture",
      options: ["Architecture", "Product Design", "Urban Planning"]
    },
    {
      title: "Aviation & Defense",
      options: ["Merchant Navy", "Aviation", "Defense Services (NDA)", "Technical roles in Army/Navy/Air Force"]
    },
    {
      title: "Mathematics & Finance",
      options: ["Actuarial Science", "Investment Banking", "Statistics & Research"]
    }
  ];

  const pcbCareers = [
    {
      title: "Medical Sciences",
      options: ["MBBS", "BDS (Dentistry)", "BAMS (Ayurveda)", "BHMS (Homeopathy)"]
    },
    {
      title: "Allied Health Sciences",
      options: ["B.Sc. Nursing", "Physiotherapy", "Occupational Therapy", "Medical Lab Technology"]
    },
    {
      title: "Life Sciences",
      options: ["Biotechnology", "Microbiology", "Genetics", "Environmental Science"]
    },
    {
      title: "Healthcare Management",
      options: ["Hospital Administration", "Health Informatics", "Public Health", "Nutrition & Dietetics"]
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Career Options after XI + XII (Plain Science)</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3">
                <Code className="w-6 h-6 text-blue-600" />
                <CardTitle className="text-xl text-blue-900">Career Options after XII (PCM)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pcmCareers.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-blue-800">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.options.map((option, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">{option}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-100 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center gap-3">
                <Microscope className="w-6 h-6 text-green-600" />
                <CardTitle className="text-xl text-blue-900">Career Options after XII (PCB)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pcbCareers.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-green-800">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.options.map((option, idx) => (
                        <li key={idx} className="text-gray-600 text-sm">{option}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
