"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Consult",
    desc: "Free discovery call to understand your NGO goals and requirements.",
  },
  {
    step: "02",
    title: "Document",
    desc: "We prepare and verify all necessary documents and applications.",
  },
  {
    step: "03",
    title: "Register",
    desc: "Submit applications and handle all government portal interactions.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Receive your certificates with ongoing compliance support.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative  px-6 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#59A245]/5"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#65a30d]/5"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Process section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <motion.span
              className="inline-block rounded-full bg-[#59A245]/10 px-4 py-1.5 text-sm font-semibold text-[#59A245] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              How It Works
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Simple. Fast.{" "}
              <span className="bg-gradient-to-r from-[#59A245] via-[#65a30d] to-[#166534] bg-clip-text text-transparent">
                Done.
              </span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                className="group relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <motion.div
                  className="relative rounded-2xl  bg-white border border-[#166534] p-6 transition-all hover:border-[#166534]/30"
                  whileHover={{ y: -6 }}
                >
                  <span className="text-6xl  text-[#166534]/10 absolute top-3 right-4 select-none group-hover:text-slate-700 transition-colors">
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#59A245] text-sm font-black text-[#1a1a1a]">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-[#59A245]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
