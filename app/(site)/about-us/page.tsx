import AboutCompanyHero from "@/components/pages/about/aboutHero";
import RunningLogoCarousel from "@/components/pages/common/RunningLogoCarousel";
import WhyChooseUs from "@/components/pages/about/whyUs";
import HowItWork from "@/components/pages/home/HowWeWorkSection";
// import Ceo from "@/components/pages/about/ceo";
import RecentBlogsSection from "@/components/pages/home/RecentBlogsSection";
import Footer from "@/components/footer";
import AboutUsSection from "@/components/pages/about/AboutTaxlegit";
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef8ea] via-[#dff4d2] to-[#eef8ea]">
      <div className="pt-[89px]">
        <AboutCompanyHero />
        <AboutUsSection />
        <RunningLogoCarousel />
        <WhyChooseUs />
        <HowItWork />
        {/* <Ceo /> */}
        <RecentBlogsSection />
        <Footer />
      </div>
    </div>
  );
}
