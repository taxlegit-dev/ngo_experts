import LegalPage from "@/components/pages/legal/LegalPage";
import { refundPolicyData } from "@/components/pages/legal/refund-policy-data";
import Footer from "@/components/footer";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef8ea] via-[#dff4d2] to-[#eef8ea]">
      <div className="pt-[89px]"></div>
      <LegalPage {...refundPolicyData} />
      <Footer />
    </div>
  );
}
