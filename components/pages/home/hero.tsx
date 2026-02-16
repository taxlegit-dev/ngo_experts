"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-[#a3e635]/10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#65a30d]/10"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block rounded-full bg-gray-200 px-4  text-sm font-semibold text-[#65a30d] mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Ready to Start?
          </motion.span>

          <h2 className="text-4xl font-black tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#a3e635] via-[#65a30d] to-[#166534] bg-clip-text text-transparent animate-gradient-text">
              Meaningful
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#1a1a1a]/50 max-w-xl mx-auto">
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
              <motion.span className="absolute inset-0 bg-gradient-to-r from-[#a3e635] to-[#65a30d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Text */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#1a1a1a]">
                Explore Services →
              </span>
            </motion.button>

            <motion.a
              href="tel:+919999999999"
              className="rounded-full border-2 border-[#a3e635] px-10 py-4 text-base font-semibold text-[#166534] transition-all hover:bg-[#a3e635]/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.a>
          </div>

          {/* Trust badges */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#1a1a1a]/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              "100% Success Guarantee",
              "No Hidden Charges",
              "Expert Team",
              "24/7 Support",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
