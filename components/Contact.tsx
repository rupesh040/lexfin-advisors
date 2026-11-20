"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Scale,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import contentData from "@/data/content.json";
import type { ContactSection } from "@/data/type";

const defaultData: ContactSection =
  contentData.LexFin.sections.Contact.variants.LexFinContact1;

export default function Contact({
  data = defaultData,
  className = "",
}: {
  data?: ContactSection;
  className?: string;
}) {
  const tagline = data.tagline;
  const heading = data.heading;
  const description = data.description;
  const backgroundImage = data.backgroundImage;
  const form = data.form;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      aria-label={tagline?.text}
      className={`relative w-full bg-white text-zinc-900 py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src={backgroundImage || "/contact/contact.webp"}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-center animate-hero-bg-in"
        />
        <div className="absolute inset-0 bg-white/70 sm:bg-white/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.35)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex justify-center mb-2.5 transition-transform duration-300 hover:scale-110">
            <Scale className="w-6 h-6 text-[#C5A059]" strokeWidth={2.2} />
          </div>

          {tagline && (
            <div
              className="inline-flex items-center gap-3 justify-center mb-3 animate-hero-fade-down"
              style={{ animationDelay: "150ms" }}
            >
              <span
                className="w-10 sm:w-14 h-[2px] bg-[#DCAE62] rounded-full shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-zinc-900 uppercase">
                {tagline.text}
              </span>
              <span
                className="w-10 sm:w-14 h-[2px] bg-[#DCAE62] rounded-full shrink-0"
                aria-hidden="true"
              />
            </div>
          )}

          {heading && (
            <h2
              className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#002629] leading-[1.16] tracking-tight animate-hero-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              {heading.line1Prefix}{" "}
              <span className="text-[#C5A059] italic font-serif font-bold">
                {heading.line1Highlight}
              </span>
            </h2>
          )}

          {description && (
            <p
              className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium mt-3.5 max-w-xl mx-auto animate-hero-fade-up"
              style={{ animationDelay: "360ms" }}
            >
              {description}
            </p>
          )}
        </div>

        {form && (
          <div
            className="relative max-w-4xl mx-auto rounded-3xl border-2 border-[#DCAE62]/80 bg-white/95 backdrop-blur-sm p-6 sm:p-10 lg:p-12 shadow-xl z-10 transition-shadow duration-300 hover:shadow-2xl animate-hero-fade-up"
            style={{ animationDelay: "450ms" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                <div className="relative flex items-center">
                  <User
                    className="w-5 h-5 text-[#C5A059] absolute left-4 shrink-0 pointer-events-none"
                    strokeWidth={2}
                  />
                  <input
                    type="text"
                    placeholder={form.namePlaceholder}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200/90 text-sm sm:text-base text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-[#DCAE62] focus:ring-1 focus:ring-[#DCAE62] transition-all duration-200"
                  />
                </div>

                <div className="relative flex items-center">
                  <Mail
                    className="w-5 h-5 text-[#C5A059] absolute left-4 shrink-0 pointer-events-none"
                    strokeWidth={2}
                  />
                  <input
                    type="email"
                    placeholder={form.emailPlaceholder}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200/90 text-sm sm:text-base text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-[#DCAE62] focus:ring-1 focus:ring-[#DCAE62] transition-all duration-200"
                  />
                </div>

                <div className="relative flex items-center">
                  <Phone
                    className="w-5 h-5 text-[#C5A059] absolute left-4 shrink-0 pointer-events-none"
                    strokeWidth={2}
                  />
                  <input
                    type="tel"
                    placeholder={form.phonePlaceholder}
                    required
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200/90 text-sm sm:text-base text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-[#DCAE62] focus:ring-1 focus:ring-[#DCAE62] transition-all duration-200"
                  />
                </div>

                <div className="relative flex items-center">
                  <Scale
                    className="w-5 h-5 text-[#C5A059] absolute left-4 shrink-0 pointer-events-none"
                    strokeWidth={2}
                  />
                  <select
                    defaultValue=""
                    className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-zinc-200/90 text-sm sm:text-base text-zinc-800 focus:outline-none focus:border-[#DCAE62] focus:ring-1 focus:ring-[#DCAE62] appearance-none bg-white transition-all duration-200 cursor-pointer"
                  >
                    <option value="" disabled>
                      {form.servicePlaceholder}
                    </option>
                    {form.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-5 h-5 text-[#002629] absolute right-4 shrink-0 pointer-events-none" />
                </div>
              </div>

              <div className="relative mb-2">
                <MessageSquare
                  className="w-5 h-5 text-[#C5A059] absolute left-4 top-4 shrink-0 pointer-events-none"
                  strokeWidth={2}
                />
                <textarea
                  placeholder={form.messagePlaceholder}
                  rows={4}
                  required
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-zinc-200/90 text-sm sm:text-base text-zinc-800 placeholder-zinc-500 focus:outline-none focus:border-[#DCAE62] focus:ring-1 focus:ring-[#DCAE62] transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group mt-6 px-10 py-3.5 rounded-2xl bg-[#B87A00] hover:bg-[#A36C00] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 mx-auto cursor-pointer"
              >
                <span>{form.submitButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {submitted && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold text-center animate-fadeIn">
                  ✓
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export { Contact };
