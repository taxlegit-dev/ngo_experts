"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    step: "01",
    title: "Consult",
    desc: "Free discovery call to understand your NGO goals and requirements.",
    // Phone/speech bubble - represents consultation/communication
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <circle cx="9" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none"/>
        <circle cx="15" cy="10" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
    accent: "#61C100",
    glow: "rgba(97,193,0,0.45)",
    bg: "linear-gradient(135deg, rgba(97,193,0,0.12) 0%, rgba(255,255,255,0.9) 100%)",
  },
  {
    step: "02",
    title: "Document",
    desc: "We prepare and verify all necessary documents and applications.",
    // Document/file icon - represents documentation
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="8" y1="13" x2="16" y2="13"/>
        <line x1="8" y1="17" x2="13" y2="17"/>
        <line x1="8" y1="9" x2="10" y2="9"/>
      </svg>
    ),
    accent: "#78D11A",
    glow: "rgba(120,209,26,0.45)",
    bg: "linear-gradient(135deg, rgba(120,209,26,0.10) 0%, rgba(255,255,255,0.9) 100%)",
  },
  {
    step: "03",
    title: "Register",
    desc: "Submit applications and handle all government portal interactions.",
    // Stamp/official seal - represents registration
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
    accent: "#4FA300",
    glow: "rgba(79,163,0,0.45)",
    bg: "linear-gradient(135deg, rgba(79,163,0,0.10) 0%, rgba(255,255,255,0.9) 100%)",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Receive your certificates with ongoing compliance support.",
    // Trophy/award - represents delivery & success
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
      </svg>
    ),
    accent: "#61C100",
    glow: "rgba(97,193,0,0.45)",
    bg: "linear-gradient(135deg, rgba(97,193,0,0.12) 0%, rgba(255,255,255,0.9) 100%)",
  },
];

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor: string;
}

function TiltCard({ children, className, glowColor }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const [hovered, setHovered] = useState(false);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { x.set(0); y.set(0); setHovered(false); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {hovered && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor} 0%, transparent 70%)`,
            filter: "blur(10px)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    transition: { duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut" as const, delay: i * 0.5 },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[80vh] lg:min-h-[76vh] px-6 py-8 lg:py-6 overflow-hidden flex items-center"
      style={{
        background: "linear-gradient(135deg, #eef8ea 0%, #d7f4cc 50%, #eef8ea 100%)",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,600;0,800;1,400&family=Syne:wght@700;800&display=swap');

        .card-glass {
          background: linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(223,244,210,0.65) 100%);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255,255,255,0.85);
          box-shadow: 0 4px 24px rgba(97,193,0,0.08), 0 1px 0 rgba(255,255,255,0.9) inset;
        }
        .card-glass:hover {
          border-color: rgba(97,193,0,0.38);
          background: linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(223,244,210,0.82) 100%);
          box-shadow: 0 8px 40px rgba(97,193,0,0.14), 0 1px 0 rgba(255,255,255,1) inset;
        }
        .noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 150px 150px;
        }
        .glitch-text { font-family: 'Syne', sans-serif; }
        .connector-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #61C100;
          box-shadow: 0 0 10px #61C100, 0 0 20px #61C100;
        }

        /* ── TITLE BOX ── */
        .title-box {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 20px 8px 10px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(215,244,204,0.85) 100%);
          border: 1px solid rgba(97,193,0,0.30);
          box-shadow:
            0 0 0 4px rgba(97,193,0,0.07),
            0 2px 12px rgba(97,193,0,0.12),
            0 1px 0 rgba(255,255,255,0.9) inset;
          backdrop-filter: blur(10px);
        }
        .title-box-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px; height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #61C100, #4FA300);
          box-shadow: 0 0 14px rgba(97,193,0,0.45), 0 2px 4px rgba(0,0,0,0.12);
          flex-shrink: 0;
        }
        .title-box-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #3a8000;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      <div className="noise absolute inset-0 pointer-events-none opacity-30" />

      {/* Orbs */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(97,193,0,0.14) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[-80px] left-[-80px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(120,209,26,0.10) 60%, transparent 100%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(97,193,0,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(97,193,0,0.22) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl w-full">

        {/* ─── ENHANCED HEADER ─── */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Pill label */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="title-box">
              {/* Animated cog/process icon inside pill */}
              <div className="title-box-icon">
                <motion.svg
                  viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" width="15" height="15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                  <path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>
                </motion.svg>
              </div>
              <span className="title-box-text">How We Works</span>
              {/* Pulsing dot at end */}
              <motion.div
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#61C100",
                  boxShadow: "0 0 8px #61C100",
                  flexShrink: 0,
                }}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="relative">
            <motion.h2
              className="glitch-text text-5xl sm:text-7xl font-extrabold leading-none text-slate-900"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Simple.
              <br />
              <span style={{ WebkitTextStroke: "1.5px rgba(97,193,0,0.55)", color: "transparent" }}>
                Fast.
              </span>{" "}
              <span
                style={{
                  color: "#4FA300",
                  textShadow: "0 0 30px rgba(97,193,0,0.28), 0 0 60px rgba(97,193,0,0.12)",
                }}
              >
                Done.
              </span>
            </motion.h2>
          </div>
        </motion.div>

        {/* ─── CARDS ─── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 relative">
          <motion.div
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(97,193,0,0.28), rgba(97,193,0,0.28), transparent)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              custom={i}
              variants={floatVariants}
              animate="animate"
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard
                glowColor={item.glow}
                className="card-glass relative rounded-2xl p-5 cursor-pointer transition-all duration-500 group overflow-hidden"
              >
                {/* Ghost number */}
                <div
                  className="absolute -bottom-4 -right-2 text-[120px] font-black leading-none select-none pointer-events-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: `1px ${item.accent}16`,
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {item.step}
                </div>

                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${item.accent}, transparent)` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.8 }}
                />

                <div className="relative z-10">
                  {/* Icon container — white + green gradient mix */}
                  <div className="mb-4 relative">
                    <motion.div
                      className="relative flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{
                        background: `linear-gradient(145deg, rgba(255,255,255,0.98) 0%, ${item.accent}18 100%)`,
                        border: `1.5px solid rgba(255,255,255,0.9)`,
                        boxShadow: `0 4px 16px ${item.glow}, 0 1px 0 rgba(255,255,255,1) inset`,
                      }}
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span style={{ color: item.accent }}>
                        {item.icon}
                      </span>
                      <motion.div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{ border: `1px solid ${item.accent}50` }}
                        animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.06, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                      />
                    </motion.div>

                    {/* Step badge */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}, #4FA300)`,
                        color: "#fff",
                        boxShadow: `0 0 12px ${item.glow}, 0 2px 4px rgba(0,0,0,0.15)`,
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="glitch-text text-xl font-bold text-slate-900 mb-2 group-hover:translate-x-0.5 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(30,60,10,0.74)" }}>
                    {item.desc}
                  </p>

                  {/* CTA hint */}
                  <motion.div
                    className="mt-3 flex items-center gap-2 text-xs font-semibold"
                    style={{ color: item.accent }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.7 }}
                    viewport={{ once: true }}
                    whileHover={{ opacity: 1 }}
                  >
                    <span>Step {i + 1}</span>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at bottom right, ${item.accent}20, transparent 70%)` }}
                />

                {/* White sheen on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, transparent 50%)" }}
                />
              </TiltCard>

              {/* Connector dot */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-20 items-center justify-center">
                  <motion.div
                    className="connector-dot"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    style={{ boxShadow: `0 0 8px ${steps[i].accent}, 0 0 16px ${steps[i].accent}` }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
