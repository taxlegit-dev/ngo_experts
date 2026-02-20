"use client";

import Image from "next/image";
import Link from "next/link";
import data from "@/data/mediaMentions.json";

type MediaRow = {
  no: number;
  media: string;
  media_type: string;
  industry: string;
  potential_audiences: string;
  link: string;
  logo_url: string;
};

export default function MediaMentions() {
  const rows = data.rows as MediaRow[];
  const loopItems = [...rows, ...rows];

  return (
    <section className="w-full bg-white py-8 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto lg:px-0 px-5">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Featured Media{" "}
            <span className="bg-gradient-to-r from-[#59A245] via-[#65a30d] to-[#166534] bg-clip-text text-transparent">
              Mentions
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            How to lay the foundation of your dream business: choosing between
            private limited, LLP, and OPC
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="relative overflow-hidden px-0 md:px-1 media-marquee">
            <div className="flex w-max items-stretch gap-6 md:gap-8 animate-media-marquee">
              {loopItems.map((item, index) => (
                <Link
                  key={`${item.no}-${index}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0"
                  aria-label={item.media}
                >
                  <article className="flex h-40 w-[220px] flex-col items-center justify-center rounded-2xl border border-green-100 bg-white px-6 py-5 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-20 w-full items-center justify-center">
                      <Image
                        src={item.logo_url}
                        alt={item.media}
                        width={180}
                        height={80}
                        className="h-14 w-auto object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="mt-3 text-xs font-semibold text-green-700">
                      {item.potential_audiences}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes media-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-media-marquee {
          animation: media-marquee 70s linear infinite;
          will-change: transform;
        }
        .media-marquee:hover .animate-media-marquee,
        .media-marquee:focus-within .animate-media-marquee {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-media-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
