import LegalPage from "@/components/pages/legal/LegalPage";
import { termsAndConditionsData } from "@/components/pages/legal/terms-and-conditions-data";
import Footer from "@/components/footer";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[89px]"></div>

      <LegalPage {...termsAndConditionsData} />
      <Footer />
    </div>
  );
}
