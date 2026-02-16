"use client";

import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import type { LucideIcon } from "lucide-react";
import {
  BadgePercent,
  Building2,
  FileCheck2,
  FileText,
  Handshake,
  Landmark,
  ScrollText,
  Users,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "NGO Registration",
    description:
      "Expert guidance for seamless NGO registration with complete legal compliance, documentation support, and filing assistance.",
    href: "/ngo-registration",
    icon: FileText,
  },
  {
    title: "12A and 80G Registration",
    description:
      "Secure tax exemptions and donor benefits through accurate filings, eligibility checks, and end-to-end application support.",
    href: "/12a-and-80g-registration",
    icon: BadgePercent,
  },
  {
    title: "CSR-1 Registration",
    description:
      "End-to-end support for CSR-1 registration, eligibility verification, and faster onboarding for CSR funding opportunities.",
    href: "/csr-1",
    icon: Handshake,
  },
  {
    title: "Trust Registration",
    description:
      "Complete trust registration from deed drafting to legal structuring, document preparation, and final submission.",
    href: "/trust-registration",
    icon: FileCheck2,
  },
  {
    title: "Section 8 Company",
    description:
      "Incorporation support for Section 8 entities including drafting, MCA filing, and compliance-ready setup for non-profits.",
    href: "/section-8-registration",
    icon: Building2,
  },
  {
    title: "Society Registration",
    description:
      "Smooth society formation with legal documentation, member structuring, and process support at every stage.",
    href: "/society-registration",
    icon: Users,
  },
  {
    title: "NITI Aayog Registration",
    description:
      "Assistance with NGO Darpan registration to improve transparency, credibility, and access to grants and CSR partnerships.",
    href: "/niti-aayog-registration",
    icon: Landmark,
  },
  {
    title: "NGO Project Report",
    description:
      "Professional project reports that present mission, impact, and financial planning clearly for donors and institutions.",
    href: "/ngo-project-report",
    icon: ScrollText,
  },
];

export default function ServicesSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 lg:px-0">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Our <span className="text-lime-500">Services</span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-green-900/80 font-medium max-w-2xl mx-auto">
            Comprehensive NGO registration, compliance, and advisory services to
            help your organization grow with confidence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div key={service.title}>
                <article
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                  className="group relative h-[310px] rounded-xl border border-[#e1e5f0] bg-white pt-16 px-6 pb-6
                             shadow-md transition-all duration-300
                             hover:-translate-y-2
                             hover:border-lime-400
                             hover:shadow-[0_0_35px_rgba(163,230,53,0.45)] flex flex-col justify-between"
                >
                  {/* Icon */}
                  <div
                    className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 rounded-full
                               bg-white flex items-center justify-center
                               shadow-lg ring-4 ring-[#eef0f6]
                               transition-all duration-300
                               group-hover:shadow-[0_0_20px_rgba(163,230,53,0.6)]"
                  >
                    <Icon className="h-8 w-8 text-lime-500" />
                  </div>

                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold text-center text-slate-900">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-[14px] md:text-[15px] leading-6 text-center text-slate-600">
                      {service.description}
                    </p>
                  </div>

                  {/* Read More Button */}
                  <div className="text-center">
                    <Link
                      href={service.href}
                      className="inline-block rounded-full border border-lime-500 px-5 py-2 text-sm font-semibold text-lime-600 transition-all duration-300 hover:bg-lime-500 hover:text-white hover:shadow-lg"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
