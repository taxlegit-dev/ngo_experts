import React from "react";
import { Shield } from "lucide-react";

export const privacyPolicyData = {
  title: "Privacy Policy",
  subtitle:
    "At NGOExperts, we value your trust. This Privacy Policy explains how we collect, use, protect, and share your data when you use our website or services.",
  icon: <Shield className="w-12 h-12" strokeWidth={2} />,
  badgeText: "Your Privacy Matters",

  introduction: (
    <>
      <p className="text-gray-800 leading-relaxed mb-4">
        At NGOExperts, we value your trust. When you share your information with
        us -- whether as an individual, a team, or an organization -- you are
        not just filling out a form. You are handing us something important. We
        take that responsibility seriously.
      </p>
      <p className="text-gray-800 leading-relaxed">
        This Privacy Policy explains how we collect, use, protect, and share
        your data when you interact with us through our website ngoexperts.com
        or use any of our services. By continuing to use our platform, you agree
        to the practices described here.
      </p>
    </>
  ),

  sections: [
    {
      id: 1,
      title: "Who We Are",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            NGOExperts.com is a professional service platform that helps
            individuals and groups register and manage NGOs, Section 8
            Companies, Societies, and Trusts across India. Our offerings
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Registration services</li>
            <li>Compliance support (12A, 80G, FCRA, CSR, etc.)</li>
            <li>Document filing and tracking</li>
            <li>Advisory and consulting services</li>
            <li>CSR Implementation and Advisory Services</li>
            <li>CSR Funding Connections & Corporate Liaison</li>
            <li>Project Proposal Writing & Donor Pitch Decks</li>
          </ul>
          <p>
            In the course of providing these services, we may collect and
            process certain personal and organizational data to help you meet
            your legal and regulatory needs efficiently.
          </p>
        </div>
      ),
    },

    {
      id: 2,
      title: "Information We Collect",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            We collect the information you share with us so we can deliver
            services effectively. This typically includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 border rounded-lg">
              <h4 className="font-semibold mb-3">Personal Information</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Name, mobile number, email address</li>
                <li>Residential or office address</li>
                <li>Identity documents (e.g., PAN, Aadhaar)</li>
                <li>Communication records (emails, calls)</li>
              </ul>
            </div>
            <div className="p-5 border rounded-lg">
              <h4 className="font-semibold mb-3">Organizational Details</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>NGO/Entity name and objectives</li>
                <li>Board member details</li>
                <li>Registration numbers (PAN, TAN, etc.)</li>
                <li>Bank account details (for compliance, if applicable)</li>
              </ul>
            </div>
            <div className="p-5 border rounded-lg md:col-span-2">
              <h4 className="font-semibold mb-3">Website & Usage Data</h4>
              <ul className="space-y-2 list-disc pl-5">
                <li>Device type, IP address, browser information</li>
                <li>How you navigate and use our website</li>
                <li>Cookies and tracking data (for performance and experience)</li>
              </ul>
            </div>
          </div>
          <p>
            We collect this information through forms, emails, calls, direct
            uploads, and during consultations.
          </p>
        </div>
      ),
    },

    {
      id: 3,
      title: "Why We Collect Your Data",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>We only collect what is necessary -- and always with a clear purpose.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To process your NGO or company registration</li>
            <li>To prepare and file required compliance documents</li>
            <li>To stay in touch and update you about your project</li>
            <li>To respond to your queries or support tickets</li>
            <li>To meet any legal, regulatory, or audit requirements</li>
            <li>To improve our services and website functionality</li>
          </ul>
          <p className="font-medium">
            We do not sell, rent, or trade your information to anyone.
          </p>
        </div>
      ),
    },

    {
      id: 4,
      title: "How We Keep Your Data Secure",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            We store your data using secure systems, trusted service providers,
            and encryption wherever necessary. We take all reasonable steps to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Prevent unauthorized access</li>
            <li>Avoid accidental loss or misuse</li>
            <li>Restrict access only to authorized personnel</li>
          </ul>
          <p>
            While no digital platform is immune to risks, we maintain
            industry-standard protocols and review our practices regularly.
          </p>
        </div>
      ),
    },

    {
      id: 5,
      title: "When and Why We Share Information",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            In some cases, we need to share your data with third parties -- but
            only when necessary, and only with trusted partners. These may
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Government authorities and regulatory portals (e.g., MCA, NGO
              Darpan, Income Tax Department)
            </li>
            <li>
              Chartered Accountants, Company Secretaries, and legal professionals
              working on your project
            </li>
            <li>Payment gateways (for secure transaction processing)</li>
          </ul>
          <p className="font-medium">
            We never share your data for marketing or advertising purposes with
            third parties.
          </p>
        </div>
      ),
    },

    {
      id: 6,
      title: "Your Rights and Choices",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your data</li>
            <li>Ask us to correct or update inaccurate information</li>
            <li>Request deletion (where legally permitted)</li>
            <li>
              Withdraw your consent at any time (though this may limit our
              ability to provide services)
            </li>
          </ul>
          <p>
            Simply write to{" "}
            <a
              href="mailto:support@ngoexperts.com"
              className="text-[#59A245] underline"
            >
              support@ngoexperts.com
            </a>{" "}
            to raise any of these requests. We aim to respond within 7 working
            days.
          </p>
        </div>
      ),
    },

    {
      id: 7,
      title: "Cookies and Tracking Technologies",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            We use cookies to understand how visitors use our site and to
            improve user experience. Cookies help us:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analyze traffic and performance</li>
            <li>Remember user preferences</li>
            <li>Improve page speed and navigation</li>
          </ul>
          <p>
            You can disable cookies via your browser settings if you prefer,
            though some site functions may be affected.
          </p>
        </div>
      ),
    },

    {
      id: 8,
      title: "Data Retention",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>We retain your data only as long as necessary:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To complete the services you have requested</li>
            <li>To comply with legal and financial record-keeping requirements</li>
            <li>To provide post-service support and documentation if needed</li>
          </ul>
          <p>
            After that, we either delete your data securely or anonymize it for
            internal use.
          </p>
        </div>
      ),
    },
  ],

  staticSections: [
    {
      id: 9,
      title: "Third-Party Links",
      content:
        "Our website may occasionally link to external websites (e.g., government portals, blog references). We do not control those sites and their privacy practices. We recommend reviewing their policies separately if you visit them.",
    },
    {
      id: 10,
      title: "Updates to This Policy",
      content:
        "As our services evolve and laws change, this Privacy Policy may be updated. Any changes will be posted on this page with a new Effective Date. Significant updates may also be communicated via email or on-site notices. We encourage you to review this page from time to time to stay informed.",
    },
  ],

  contactInfo: {
    title: "Contact Us",
    description:
      "For questions regarding privacy or data protection, reach out to us.",
    items: [
      {
        title: "Email",
        value: "support@ngoexperts.com",
        href: "mailto:support@ngoexperts.com",
      },
      { title: "Phone", value: "+91-8929218091", href: "tel:+918929218091" },
      {
        title: "Website",
        value: "ngoexperts.com",
        href: "https://ngoexperts.com",
      },
    ],
  },
};
