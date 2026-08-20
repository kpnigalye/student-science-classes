import { Shield, Mail, MapPin } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto max-w-4xl">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Home
          </a>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-blue-900 mb-3">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: August 20, 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy and are committed to protecting it.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This website is operated by Students Classes and is intended to provide information about our institute, programs, courses, facilities, and activities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Information We Collect</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                This is a static informational website. We do not collect, store, or process personal information from visitors through this website.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mt-4">
              We do not have user registration, account creation, online forms, or other features that require visitors to provide personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              This website does not use cookies for collecting or storing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not knowingly use third-party services on this website to collect personal information from visitors.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              If this website contains links to external websites, those websites have their own privacy policies and practices. We are not responsible for the privacy practices or content of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Website Security</h2>
            <p className="text-gray-700 leading-relaxed">
              Although we do not collect personal information through this website, we take reasonable measures to maintain the security and proper functioning of the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy if the website's features or practices change. Any updates will be published on this page with a revised "Last updated" date.
            </p>
          </section>

          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, you may contact us at:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <span className="font-semibold text-blue-900">Students Classes</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:admin@studentsclasses.in" className="hover:text-blue-800 transition-colors">
                  admin@studentsclasses.in
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <span>2, 1st floor, Rajshri bldg, N.G. Acharya Marg, Chembur East, Mumbai</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
