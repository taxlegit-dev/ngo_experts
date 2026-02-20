"use client";

import { motion } from "framer-motion";
import Trust from "@/components/pages/home/trust";

export default function CTA() {
  const heroSlides = ["/hero/5.png", "/hero/6.png"];
  const slideDuration = 5; // Slightly longer duration for better viewing
  const totalDuration = heroSlides.length * slideDuration;

  return (
    <section className="relative px-6 overflow-hidden">
      {/* Background image carousel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="hero-carousel"
          style={{ ["--hero-duration" as never]: `${totalDuration}s` }}
        >
          {heroSlides.map((src, index) => (
            <div
              key={src}
              className="hero-slide"
              style={{
                backgroundImage: `url(${src})`,
                animationDelay: `${index * slideDuration}s`,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-white/60" />
      </div>

      {/* Animated background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[#59A245]/10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#65a30d]/10"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-20 mx-auto max-w-3xl text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block rounded-full bg-yellow-500 px-4 text-sm font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Ready to Start?
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            First Step Toward &apos;s&nbsp;
            <span className="bg-gradient-to-r from-[#59A245] via-[#65a30d] to-[#166534] bg-clip-text text-transparent animate-gradient-text">
              Sustanable Future
            </span>
          </h2>

          <p className="mt-3 text-base md:text-lg text-slate-900 font-medium max-w-2xl mx-auto leading-relaxed">
            Join 500+ NGOs who trust us with their registration and compliance.
            Your first consultation is on us.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative overflow-hidden rounded-full bg-[#1a1a1a] px-10 py-4 text-base font-semibold text-white"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(163,230,53,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Gradient Layer */}
              <motion.span className="absolute inset-0 bg-[#59A245] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Explore Services →
              </span>
            </motion.button>

            <motion.a
              href="tel:+918595766812"
              className="rounded-full border-2 border-[#59A245] px-10 py-4 text-base font-semibold text-black transition-all hover:bg-[#59A245]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="py-16">
        <Trust />
      </div>

      <style jsx>{`
        .hero-carousel {
          position: absolute;
          inset: 0;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0;
          animation: heroFade var(--hero-duration, 10s) infinite;
          will-change: opacity;
        }
        @keyframes heroFade {
          0%,
          100% {
            opacity: 0;
          }
          10%,
          45% {
            opacity: 1;
          }
          55%,
          90% {
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-slide {
            animation: none;
            opacity: 0;
          }
          .hero-slide:first-child {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
