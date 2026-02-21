import type { Metadata } from "next";
import LegalPage from "@/components/pages/legal/LegalPage";
import { privacyPolicyData } from "@/components/pages/legal/privacy-policy-data";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | NGO Experts - Get Expert Assistance for Your NGO",
  description:
    "Have questions about NGO registration, compliance, or funding? Contact NGO Experts today for expert guidance and support. We're here to help your NGO succeed!",
  alternates: {
    canonical: "https://ngoexperts.com/privacy-policy",
  },
  openGraph: {
    url: "https://ngoexperts.com/privacy-policy",
    type: "website",
    title: "Privacy Policy | NGO Experts - Get Expert Assistance for Your NGO",
    description:
      "Have questions about NGO registration, compliance, or funding? Contact NGO Experts today for expert guidance and support. We're here to help your NGO succeed!",
  },
  twitter: {
    title: "Privacy Policy | NGO Experts - Get Expert Assistance for Your NGO",
    description:
      "Have questions about NGO registration, compliance, or funding? Contact NGO Experts today for expert guidance and support. We're here to help your NGO succeed!",
  },
  other: {
    "twitter:domain": "ngoexperts.com",
    "twitter:url": "https://ngoexperts.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[89px]"></div>

      <LegalPage {...privacyPolicyData} />
      <Footer />
    </div>
  );
}
