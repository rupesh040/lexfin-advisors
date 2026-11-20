"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Scale, Plus, Minus } from "lucide-react";
import contentData from "@/data/content.json";
import type { FAQSection } from "@/data/type";

const defaultData: FAQSection =
  contentData.LexFin.sections.FAQ.variants.LexFinFAQ1;

export default function FAQ({
  data = defaultData,
  className = "",
}: {
  data?: FAQSection;
  className?: string;
}) {
  const tagline = data.tagline;
  const heading = data.heading;
  const description = data.description;
  const backgroundImage = data.backgroundImage;
  const items = data.items || [];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-label={tagline?.text}
      className={`relative w-full bg-white text-zinc-900 py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <Image
          src={backgroundImage || "/faq/faq-bg.webp"}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-right animate-hero-bg-in"
        />
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

        {items && items.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  style={{ animationDelay: `${440 + idx * 70}ms` }}
                  className="rounded-2xl transition-all duration-300 animate-hero-fade-up"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    aria-expanded={isOpen}
                    className={`w-full px-6 py-4 sm:py-4.5 flex items-center justify-between text-left font-bold text-base sm:text-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DCAE62] group ${
                      isOpen
                        ? "bg-[#002629] text-white rounded-t-2xl shadow-sm"
                        : "bg-white text-[#002629] rounded-2xl border-[1.5px] border-[#DCAE62]/60 hover:border-[#DCAE62] hover:bg-[#FAF7F2]/60 shadow-xs hover:shadow-sm"
                    }`}
                  >
                    <span className="pr-4 leading-snug">{item.question}</span>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-white text-[#002629] rotate-180 shadow-xs"
                          : "border-[1.5px] border-[#DCAE62] text-[#DCAE62] group-hover:bg-[#DCAE62] group-hover:text-white group-hover:rotate-90"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.6]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="bg-white px-6 py-4 sm:py-5 text-xs sm:text-sm text-zinc-600 leading-relaxed border-x border-b border-zinc-200/80 rounded-b-2xl shadow-sm text-left">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export { FAQ };
