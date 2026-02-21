import type { Metadata } from "next";
import LegalPage from "@/components/pages/legal/LegalPage";
import { termsAndConditionsData } from "@/components/pages/legal/terms-and-conditions-data";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | NGO Experts",
  description:
    "Read the terms and conditions of NGO Experts to understand our policies, user responsibilities, and legal guidelines. Stay informed before using our services.",
  alternates: {
    canonical: "https://ngoexperts.com/terms-and-conditions",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: "https://ngoexperts.com/terms-and-conditions",
    type: "website",
    title: "Terms and Conditions | NGO Experts",
    description:
      "Read the terms and conditions of NGO Experts to understand our policies, user responsibilities, and legal guidelines. Stay informed before using our services.",
    siteName: "NGOExperts",
  },
  twitter: {
    title: "Terms and Conditions | NGO Experts",
    description:
      "Read the terms and conditions of NGO Experts to understand our policies, user responsibilities, and legal guidelines. Stay informed before using our services.",
  },
  other: {
    "twitter:domain": "ngoexperts.com",
    "twitter:url": "https://ngoexperts.com/terms-and-conditions",
  },
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[89px]"></div>

      <LegalPage {...termsAndConditionsData} />
      <Footer />
    </div>
  );
}
