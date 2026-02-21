"use client";

import Newsletter from "@/components/pages/common/newsletter";

export default function MailchimpSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#eef8ea] via-white to-[#eef8ea] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-green-100 bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
                Newsletter
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Stay updated with NGO insights
              </h2>
              <p className="mt-3 text-base text-slate-600 leading-relaxed">
                Get the latest updates on NGO registration, compliance,
                CSR funding, and best practices. No spam, only value.
              </p>
            </div>
            <div className="rounded-2xl bg-[#59A245] p-6 sm:p-8">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
