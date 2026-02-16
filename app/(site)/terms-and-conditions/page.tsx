import LegalPage from "@/components/pages/legal/LegalPage";
import { termsAndConditionsData } from "@/components/pages/legal/terms-and-conditions-data";
import Footer from "@/components/footer";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef8ea] via-[#dff4d2] to-[#eef8ea]">
      <div className="pt-[89px]"></div>

      <LegalPage {...termsAndConditionsData} />
      <Footer />
    </div>
  );
}
