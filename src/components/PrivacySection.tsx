import { Shield } from 'lucide-react';

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-slate-800 mb-4">Privacy Policy</h1>
          <div className="space-y-2 text-slate-600">
            <p>Effective Date: November 20, 2025</p>
            <p>Company: Scorpii Solutions, Bengaluru, India</p>
            <p>Email: scorpiisolutions@gmail.com</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Scorpii Solutions ('we,' 'our,' 'us') is committed to protecting your privacy under the Digital 
              Personal Data Protection Act (DPDPA) 2023 and IT Rules 2011.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We collect personal details (name, email, phone), technical data (IP, browser), and advertising 
              or event data shared by you.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">3. How We Use Your Data</h2>
            <p className="text-slate-600 leading-relaxed">
              We use data to deliver services, process ads, communicate, improve user experience, and comply with laws.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">4. Data Sharing</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell data. We may share it with trusted service providers or legal authorities when required.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">5. Data Storage and Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We apply appropriate technical and organizational security measures to protect your data.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">6. Cookies and Analytics</h2>
            <p className="text-slate-600 leading-relaxed">
              We may use cookies to improve performance. You can disable cookies via browser settings.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">7. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              Under DPDPA 2023, you can access, correct, or delete your data, and withdraw consent by contacting 
              us at <a href="mailto:scorpiisolutions@gmail.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                scorpiisolutions@gmail.com
              </a>.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">8. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain data only as long as necessary for business or legal reasons, after which it is deleted securely.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">9. Policy Changes</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy periodically. The latest version will always be available on this website.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-slate-800">10. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              For any questions or concerns, please email <a href="mailto:scorpiisolutions@gmail.com" 
              className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                scorpiisolutions@gmail.com
              </a>.
            </p>
          </div>
        </div>

        {/* Compliance Notice */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-slate-800 mb-3">Compliance Statement</h3>
            <p className="text-slate-600 leading-relaxed">
              This Privacy Policy has been prepared in accordance with the Digital Personal Data Protection Act 
              (DPDPA) 2023 and Information Technology (Reasonable Security Practices and Procedures and Sensitive 
              Personal Data or Information) Rules, 2011. We are committed to maintaining the highest standards of 
              data protection and privacy.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-slate-500">
          <p>Last Updated: November 20, 2025</p>
        </div>
      </div>
    </section>
  );
}
