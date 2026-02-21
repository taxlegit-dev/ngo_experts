import AboutCompanyHero from "@/components/pages/about/aboutHero";
import RunningLogoCarousel from "@/components/pages/common/RunningLogoCarousel";
import WhyChooseUs from "@/components/pages/about/whyUs";
import HowItWork from "@/components/pages/home/HowWeWorkSection";
// import Ceo from "@/components/pages/about/ceo";
import RecentBlogsSection from "@/components/pages/home/RecentBlogsSection";
// import WhyChooseTaxlegit from "@/components/pages/home/WhyTaxlegit";
import Footer from "@/components/footer";
import AboutUsSection from "@/components/pages/about/AboutTaxlegit";
import MailchimpSection from "@/components/pages/common/MailchimpSection";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-[89px]">
        <AboutCompanyHero />
        <AboutUsSection />
        <RunningLogoCarousel />
        <WhyChooseUs />
        <HowItWork />
        {/* <Ceo /> */}
        {/* <WhyChooseTaxlegit /> */}
        <RecentBlogsSection />
        <MailchimpSection />
        <Footer />
      </div>
    </div>
  );
}
