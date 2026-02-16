"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function Counter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "NGOs Registered",
    description: "Across 20+ states",
  },
  {
    number: 98,
    suffix: "%",
    label: "Success Rate",
    description: "First-time approvals",
  },
  {
    number: 50,
    suffix: "Cr+",
    label: "CSR Funding",
    description: "Secured for clients",
  },
  {
    number: 10,
    suffix: "+",
    label: "Years Experience",
    description: "In NGO compliance",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  return (
    <section id="about" className="relative  px-6  overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#a3e635]/5"
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
        {/* Stats marquee */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div
            ref={sectionRef}
            className="grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group relative rounded-2xl  bg-gray-100 border border-lime-500 p-6 backdrop-blur-sm text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#a3e635]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="text-4xl font-black text-[#a3e635] lg:text-5xl">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-black">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-xs text-slate-800">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
