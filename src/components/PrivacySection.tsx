import { Shield, Mail, MapPin } from 'lucide-react';

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">PRIVACY POLICY</h1>
          <div className="space-y-1 text-slate-600 font-medium">
            <p>Effective Date: August 8, 2026</p>
          </div>
          <p className="mt-6 text-slate-600 leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
            Welcome to Scorpii Solutions (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-800">1. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              We may collect the following information:
            </p>

            <div className="space-y-3 pl-2 sm:pl-4">
              <h3 className="text-base font-semibold text-slate-800">Personal Information</h3>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-2">
                <li>Full Name</li>
                <li>Company Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Business Address</li>
                <li>GST Number (where applicable)</li>
                <li>Payment Information</li>
                <li>Any information voluntarily submitted through enquiry forms or emails</li>
              </ul>
            </div>

            <div className="space-y-3 pl-2 sm:pl-4 pt-2">
              <h3 className="text-base font-semibold text-slate-800">Technical Information</h3>
              <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-2">
                <li>IP Address</li>
                <li>Browser Type</li>
                <li>Device Information</li>
                <li>Operating System</li>
                <li>Pages Visited</li>
                <li>Time and Date of Visit</li>
                <li>Cookies and Analytics Data</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">2. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>Respond to enquiries.</li>
              <li>Provide quotations and services.</li>
              <li>Manage customer relationships.</li>
              <li>Improve our website and services.</li>
              <li>Send service-related communications.</li>
              <li>Process invoices and payments.</li>
              <li>Meet legal and regulatory obligations.</li>
              <li>Prevent fraud and unauthorized access.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">3. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may use cookies to improve user experience and analyze website traffic. You may disable cookies through your browser settings; however, some website features may not function properly.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">4. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell your personal information.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We may share information with:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>Service providers and business partners.</li>
              <li>Government authorities where legally required.</li>
              <li>Payment processors.</li>
              <li>Professional advisors including auditors and legal consultants.</li>
              <li>Event organizers, advertisers, vendors, or logistics partners when necessary to provide our services.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">5. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-slate-600 leading-relaxed">
              While we strive to protect your information, no method of electronic transmission or storage is completely secure.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">6. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">7. Third-Party Websites</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.
            </p>
          </div>

          {/* Section 8 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">8. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              Subject to applicable law, you may:
            </p>
            <ul className="list-disc list-inside text-slate-600 leading-relaxed space-y-1.5 ml-4">
              <li>Request access to your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion where legally permissible.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Raise concerns regarding data processing.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed pt-1">
              Requests may be submitted using the contact details below.
            </p>
          </div>

          {/* Section 9 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">9. Children&apos;s Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our services are intended for individuals aged 18 years and above. We do not knowingly collect personal information from children.
            </p>
          </div>

          {/* Section 10 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">10. Compliance with Indian Law</h2>
            <p className="text-slate-600 leading-relaxed">
              This Privacy Policy is intended to align with applicable Indian laws, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and other applicable data protection laws, including provisions under the Digital Personal Data Protection Act, 2023, as applicable.
            </p>
          </div>

          {/* Section 11 */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-800">11. Changes to this Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify this Privacy Policy at any time. Updated versions will be posted on this page with a revise Effective Date.
            </p>
          </div>

          {/* Section 12 */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-800">12. Contact Us</h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
              <p className="font-semibold text-slate-900 text-lg">Scorpii Solutions</p>
              <div className="space-y-2 text-slate-700">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <p>
                    Email:{' '}
                    <a
                      href="mailto:scorpiisolutions@gmail.com"
                      className="text-blue-600 hover:text-blue-700 font-medium underline transition-colors"
                    >
                      scorpiisolutions@gmail.com
                    </a>
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Registered Office: Bidadi, Ramanagara, Bengaluru South, Karnataka - 562109
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          <p>Last Updated: August 8, 2026</p>
        </div>
      </div>
    </section>
  );
}
