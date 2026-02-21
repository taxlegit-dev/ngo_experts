import type { Metadata } from "next";
import AboutCompanyHero from "@/components/pages/about/aboutHero";
import RunningLogoCarousel from "@/components/pages/common/RunningLogoCarousel";
import WhyChooseUs from "@/components/pages/about/whyUs";
import HowItWork from "@/components/pages/home/HowWeWorkSection";
// import Ceo from "@/components/pages/about/ceo";
import RecentBlogsSection from "@/components/pages/home/RecentBlogsSection";
// import WhyChooseTaxlegit from "@/components/pages/home/WhyTaxlegit";
import Footer from "@/components/footer";
import AboutUsSection from "@/components/pages/about/AboutNgoexperts";

export const metadata: Metadata = {
  title: "About Us | NGO Experts - Trusted Partner in NGO Registration & Compliance",
  description:
    "Learn about NGO Experts, India's leading consultancy for NGO registration, compliance, 12A, 80G, FCRA & CSR services. Trusted by 10,000+ NGOs for expert support.",
  alternates: {
    canonical: "https://ngoexperts.com/about-us",
  },
  openGraph: {
    url: "https://ngoexperts.com/about-us",
    type: "website",
    title:
      "About Us | NGO Experts - Trusted Partner in NGO Registration & Compliance",
    description:
      "Learn about NGO Experts, India's leading consultancy for NGO registration, compliance, 12A, 80G, FCRA & CSR services. Trusted by 5,000+ NGOs for expert support.",
  },
  twitter: {
    title:
      "About Us | NGO Experts - Trusted Partner in NGO Registration & Compliance",
    description:
      "Learn about NGO Experts, India's leading consultancy for NGO registration, compliance, 12A, 80G, FCRA & CSR services. Trusted by 5,000+ NGOs for expert support.",
  },
  other: {
    "twitter:domain": "ngoexperts.com",
    "twitter:url": "https://ngoexperts.com/about-us",
  },
};

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
        <Footer />
      </div>
    </div>
  );
}
