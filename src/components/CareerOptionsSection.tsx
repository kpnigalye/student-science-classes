import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Microscope } from "lucide-react";

export function CareerOptionsSection() {
  const pcmCareers = [
    {
      title: "Engineering & Technology",
      options: [
        "Mechanical Engineering",
        "Civil Engineering",
        "Electrical Engineering",
        "Computer Science",
        "Data Science",
        "AI & Machine Learning",
      ],
    },
    {
      title: "Design & Architecture",
      options: ["Architecture", "Product Design", "Urban Planning"],
    },
    {
      title: "Aviation & Defense",
      options: ["Merchant Navy", "Aviation", "Defense Services (NDA)", "Technical roles in Army/Navy/Air Force"],
    },
    {
      title: "Mathematics & Finance",
      options: ["Actuarial Science", "Investment Banking", "Statistics & Research"],
    },
  ];

  const pcbCareers = [
    {
      title: "Medical Sciences",
      options: ["MBBS", "BDS (Dentistry)", "BAMS (Ayurveda)", "BHMS (Homeopathy)"],
    },
    {
      title: "Allied Health Sciences",
      options: ["B.Sc. Nursing", "Physiotherapy", "Occupational Therapy", "Medical Lab Technology"],
    },
    {
      title: "Life Sciences",
      options: ["Biotechnology", "Microbiology", "Genetics", "Environmental Science"],
    },
    {
      title: "Healthcare Management",
      options: ["Hospital Administration", "Health Informatics", "Public Health", "Nutrition & Dietetics"],
    },
  ];

  return (
    <section className="py-14 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Career Options after XII</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <Card className="border border-blue-100 bg-white hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Code className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">Career Options after XII (PCM)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pcmCareers.map((category, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
                  >
                    <h4 className="font-semibold text-blue-800 mb-2">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.options.map((option, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-blue-100 bg-white hover:shadow-lg transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-green-50">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                  <Microscope className="w-5 h-5 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">Career Options after XII (PCB)</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pcbCareers.map((category, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100"
                  >
                    <h4 className="font-semibold text-green-800 mb-2">{category.title}</h4>
                    <ul className="space-y-1">
                      {category.options.map((option, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-green-400 flex-shrink-0" />
                          {option}
                        </li>
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
