import { Region } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import TaxLegitHero from "@/components/pages/home/hero";
import ServicesSection from "@/components/pages/home/serviceSection";
import HowWeWorkSection from "@/components/pages/home/HowWeWorkSection";
import Testimonial from "@/components/pages/home/ReviewSlider";
import RecentBlogsSection from "@/components/pages/home/RecentBlogsSection";
import { FAQSection } from "@/components/faq/faq-section";
// import AboutUs from "@/components/pages/about/AboutTaxlegit";
// import RunningLogoCarousel from "@/components/pages/common/RunningLogoCarousel";
import Footer from "@/components/footer";
// import OurProduct from "@/components/pages/home/OurProduct";
import MediaMentions from "@/components/pages/common/MediaMentions";
import OurClients from "@/components/pages/home/OurClient";
import MailchimpSection from "@/components/pages/common/MailchimpSection";
export default async function IndiaHomePage() {
  const region = Region.INDIA;

  // FIX → Do NOT use null. Use a special navbarItemId for homepage FAQ.
  const faq = await prisma.servicePageFAQ.findFirst({
    where: {
      navbarItemId: "cmj8eku4d000puo1sqyhqldh2", // create this manually in DB
      region: region,
      status: "PUBLISHED",
    },
    include: {
      questions: {
        orderBy: { order: "asc" },
      },
    },
  });

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mt-18">
        <TaxLegitHero />
        {/* <RunningLogoCarousel /> */}
        {/* <AboutUs /> */}
        <ServicesSection />
        <HowWeWorkSection />

        <OurClients />
        {/* <OurProduct /> */}
        <RecentBlogsSection />
        <MediaMentions />
        <Testimonial />

        {faq && faq.questions.length > 0 && (
          <FAQSection questions={faq.questions} region="INDIA" />
        )}
        <MailchimpSection />
        <Footer />
      </div>
    </div>
  );
}
