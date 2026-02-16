"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurClients() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const clients = [
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/bc1a6eec-2bfc-45ac-92da-1fe74c980722.png",
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/c27437d4-5ee2-4a12-8171-138757fbb3e6.png",
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/431933f4-ce56-4e8d-90a5-b7e9acd59d34.jpeg",
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/d98ab650-fa68-4bd5-89f4-594c5418772e.png",
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/63d5fa5d-cb96-4cef-9b2a-c70db1df7cd0.png",
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/0860b708-1898-434a-8479-46b68811e84e.png",
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/80ff002d-6ea6-4b3d-9c44-3c791d3488c9.png",
    "https://ngoexperts.s3.ap-south-1.amazonaws.com/image-repeater/c7ab8535-2230-4928-bfe6-4b3eac31ae04.jpg",
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-slate-900"
          data-aos="fade-down"
        >
          Our <span className="text-lime-500">Clients</span>
        </h2>

        <p
          className="mt-4 text-green-900/80 text-base md:text-lg font-medium"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Some of the NGOs we have worked with
        </p>

        {/* Slider */}
        <div className="relative mt-14" data-aos="fade-up" data-aos-delay="200">
          {/* Fade Edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-green-100 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-green-100 to-transparent z-10" />

          <div className="flex gap-8 animate-scroll whitespace-nowrap">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[180px] md:w-[220px] h-[100px] md:h-[120px] bg-white rounded-xl border border-emerald-100 shadow-md flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(16,185,129,0.25)]"
              >
                <img
                  src={logo}
                  alt="NGO Client"
                  className="max-w-[120px] md:max-w-[150px] max-h-[70px] object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 18s;
          }
        }
      `}</style>
    </section>
  );
}
