import React from "react";
import { RefreshCw } from "lucide-react";

export const refundPolicyData = {
  title: "Refund Policy",
  subtitle:
    "We aim to keep refunds fair, clear, and transparent for all clients.",
  icon: <RefreshCw className="w-12 h-12" strokeWidth={2} />,
  badgeText: "Simple, Transparent & Fair",

  introduction: (
    <>
      <p className="text-gray-800 leading-relaxed mb-4">
        Our pricing is shared upfront and full payment is required before we
        begin work. This covers both professional charges and, in some cases,
        government or third-party fees.
      </p>
      <p className="text-gray-800 leading-relaxed">
        We are always fair and reasonable. If you have a concern, please reach
        out and we will do our best to resolve it.
      </p>
    </>
  ),

  sections: [
    {
      id: 1,
      title: "When Refunds Are Considered",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              If we are unable to proceed with your service due to a government
              policy change or an unforeseen obstacle on our end, we will
              evaluate the case and issue a refund.
            </li>
            <li>
              Approved refunds are typically processed within 7-10 business
              days.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "When Refunds Are Not Available",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-2">
            <li>Payments are non-refundable once work has started.</li>
            <li>
              Refunds are not provided if delays or rejections occur due to
              incorrect or incomplete documents or information provided by the
              client.
            </li>
            <li>
              Government fees or third-party charges (if already paid) are not
              refundable.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "How to Request a Refund",
      expandable: true,
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            To request a refund, email us with your order details and reason for
            the request:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@ngoexperts.com"
              className="text-[#59A245] underline"
            >
              support@ngoexperts.com
            </a>
          </p>
        </div>
      ),
    },
  ],

  staticSections: [
    {
      id: 4,
      title: "Processing Notes",
      content:
        "If a refund is approved, it will be processed to the original payment method. Processing times may vary based on banks or payment gateways.",
    },
  ],

  contactInfo: {
    title: "Need Help with a Refund?",
    description:
      "Our support team is here to help you with any refund-related questions.",
    items: [
      {
        title: "Email",
        value: "support@ngoexperts.com",
        href: "mailto:support@ngoexperts.com",
      },
      {
        title: "Phone",
        value: "+91-8929218091",
        href: "tel:+918929218091",
      },
      {
        title: "Working Hours",
        value: "Mon-Sat: 9AM-7PM | Response within 24 hours",
      },
    ],
    note: "Please keep your order details ready for faster assistance.",
  },
};
