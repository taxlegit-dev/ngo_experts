import React from "react";
import Link from "next/link";
import { FileText, AlertTriangle, Scale, Users, Clock, Lock } from "lucide-react";

export const termsAndConditionsData = {
  title: "Terms & Conditions",
  subtitle:
    "These terms and conditions outline the rules for using NGOExperts and our services. By using our site or working with us, you agree to these terms.",
  icon: <FileText className="w-12 h-12" strokeWidth={2} />,
  badgeText: "Clear, Transparent & Fair Terms",
  introduction: (
    <>
      <p className="text-gray-800 leading-relaxed mb-4">
        Hey there! Welcome to NGOExperts -- your trusted partner in setting up
        and supporting NGOs across India. Whether you are just starting your
        nonprofit journey or managing compliance for an existing one, we are
        here to help make the process simpler and smoother.
      </p>
      <p className="text-gray-800 leading-relaxed">
        These terms and conditions outline the rules governing your use of our
        website and services. Please read them carefully. By using our site or
        working with us, you agree to all terms mentioned here. If something
        does not sit right with you, we respect your decision, but we kindly ask
        that you refrain from using our platform or services.
      </p>
    </>
  ),
  sections: [
    {
      id: 1,
      title: "What We Do (and What We Don't)",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            NGOExperts helps individuals, social workers, and organisations
            start and manage NGOs by offering end-to-end support. Services
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Section 8 Company registration</li>
            <li>Society and Trust registration</li>
            <li>12A & 80G registrations</li>
            <li>FCRA application and advisory</li>
            <li>CSR-1 filing</li>
            <li>Annual compliance</li>
            <li>And more</li>
          </ul>
          <p>
            We act as a facilitator, guiding you through the legal and
            procedural steps involved in running an NGO. Our team comprises
            professionals who understand the system and are committed to
            making your compliance experience stress-free.
          </p>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <p>
                We are not a law firm or a government body. We do not provide
                legal opinions or represent you in court. For deep legal or
                financial advice, consult your lawyer or CA.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Who Can Use Our Services?",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>To use our services, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be 18 years or older</li>
            <li>Provide correct, updated, and honest information</li>
            <li>Use our services for genuine, lawful purposes only</li>
          </ul>
          <p>
            If we detect misuse, misrepresentation, or unethical activity, we
            may cancel your service or restrict access without prior notice.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Payments and Refunds - Keeping It Fair",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <Scale className="w-5 h-5 text-[#59A245] mt-0.5" />
            <p>
              Our pricing is shared upfront. Before we begin work, full payment
              is required. This covers professional charges and, in some cases,
              government or third-party fees.
            </p>
          </div>
          <p className="font-medium">Refund policy highlights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payments are non-refundable once work has started.</li>
            <li>
              If we are unable to proceed due to a policy change or an
              unforeseen obstacle on our end, we will evaluate the case and
              process a refund, typically within 7-10 business days.
            </li>
            <li>
              If delays or rejections occur due to incorrect documents or
              information provided by you, refunds are not available.
            </li>
          </ul>
          <p>
            We aim to be fair and reasonable. If there is an issue, please
            reach out and we will try to resolve it.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "Service Timelines - What to Expect",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#59A245] mt-0.5" />
            <p>
              We provide estimated timelines, not fixed deadlines. Delays may
              happen due to government departments, portals, or verification
              steps. We will inform you as early as possible if delays arise.
            </p>
          </div>
          <p>
            While we follow up and push things forward, we cannot control
            external authorities or guarantee approvals.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "What We Expect From You",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>To keep things smooth and fast, please:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Submit required documents correctly and in requested formats</li>
            <li>Double-check spelling, names, PAN, addresses, and numbers</li>
            <li>Respond promptly to our queries, emails, or calls</li>
            <li>
              Stay engaged if government portals send OTPs or verification
              emails to your phone or inbox
            </li>
          </ul>
          <p>
            If delays or rejections are caused by incorrect or incomplete
            documents from your side, NGOExperts will not be liable.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Disclaimer & Limitation of Liability",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            We facilitate NGO-related work, but we are not responsible for final
            approvals. Those decisions lie with regulatory authorities (e.g.,
            MCA, Income Tax Department).
          </p>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-medium">We are not liable for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Delays in application approvals</li>
              <li>Technical issues on government portals</li>
              <li>Penalties due to late filings caused by delayed client response</li>
              <li>Rejections caused by data mismatch or missing documents</li>
            </ul>
          </div>
          <p>
            We cannot offer financial compensation for losses arising from the
            above scenarios.
          </p>
        </div>
      ),
    },
    {
      id: 7,
      title: "Your Data & Privacy",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <div className="flex items-start gap-3">
            <Lock className="w-5 h-5 text-[#59A245] mt-0.5" />
            <p>
              We take your data seriously. Any personal, financial, or
              organizational information you share is kept confidential, used
              only for delivering our services, and never sold or misused.
            </p>
          </div>
          <p>
            While we use secure systems, we are not liable for cyber threats,
            hacks, or data breaches caused by third-party platforms like payment
            gateways, government portals, or hosting providers.
          </p>
          <p>
            For more details, please read our{" "}
            <Link
              href="/privacy-policy"
              className="text-[#59A245] font-semibold hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      ),
    },
  ],
  staticSections: [
    {
      id: 8,
      title: "Policy Updates and Modifications",
      content:
        "We may update, modify, or discontinue these terms at any time. Significant changes will be communicated where possible.",
    },
  ],
  contactInfo: {
    title: "Need Help Understanding Our Terms?",
    description:
      "Our support team is here to help you understand our terms and conditions better.",
    items: [
      {
        title: "Website",
        value: "ngoexperts.com",
        href: "https://ngoexperts.com",
      },
      {
        title: "Email",
        value: "support@ngoexperts.com",
        href: "mailto:support@ngoexperts.com",
      },
      { title: "Phone", value: "+91-8929218091", href: "tel:+918929218091" },
    ],
    note:
      "Address: NGO Experts Consulting Private Limited, 1117, Supertech Astralis, Sec-94, Noida, Uttar Pradesh-201301, India",
  },
};
