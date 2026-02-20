"use client";

import React from "react";
import { Mail, Phone } from "lucide-react";

const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] w-full bg-[#59A245] text-black text-md">
      <div className="max-w-7xl mx-auto flex h-10 items-center justify-end sm:justify-between px-4 lg:px-0">
        {/* left Side - Social Media */}

        {/* right Side - Contact Info */}
        <div className="flex items-center gap-4 sm:ml-auto">
          {/* <a
            href="https://wa.me/918595766812"
            target="_blank"
            className="flex items-center gap-1 hover:text-green-400 transition"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a> */}

          <a
            href="mailto:support@ngoexperts.com"
            className="flex items-center gap-1 hover:text-yellow-500 transition"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">support@ngoexperts.com</span>
          </a>

          <a
            href="tel:+918595766812"
            className="flex items-center gap-1 hover:text-gray-100 transition"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+91 8595766812</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
