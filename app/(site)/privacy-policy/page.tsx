import LegalPage from "@/components/pages/legal/LegalPage";
import { privacyPolicyData } from "@/components/pages/legal/privacy-policy-data";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef8ea] via-[#dff4d2] to-[#eef8ea]">
      <div className="pt-[89px]"></div>

      <LegalPage {...privacyPolicyData} />
      <Footer />
    </div>
  );
}
