"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Scale } from "lucide-react";
import contentData from "@/data/content.json";
import type { TestimonialSection } from "@/data/type";

const defaultData: TestimonialSection =
  contentData.LexFin.sections.Testimonial.variants.LexFinTestimonial1;

export default function Testimonials({
  data = defaultData,
  className = "",
}: {
  data?: TestimonialSection;
  className?: string;
}) {
  const tagline = data.tagline;
  const heading = data.heading;
  const featuredImage = data.featuredImage;
  const featuredImageAlt = data.featuredImageAlt;
  const items = data.items || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (items.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    if (items.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 400);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentItem = items[currentIndex] || items[0];
  const activeImage = currentItem?.image || featuredImage;
  const activeImageAlt = currentItem?.client || featuredImageAlt || "";

  return (
    <section
      id="testimonial"
      aria-label={tagline?.text}
      className={`relative w-full bg-white text-zinc-900 py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-4 flex flex-col text-left pt-2 lg:pt-6">
            {tagline && (
              <div
                className="inline-flex items-center gap-2.5 mb-3 animate-hero-fade-down"
                style={{ animationDelay: "150ms" }}
              >
                <span
                  className="w-8 sm:w-10 h-[2px] bg-[#DCAE62] rounded-full shrink-0"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-zinc-900 uppercase">
                  {tagline.text}
                </span>
              </div>
            )}

            {heading && (
              <h2
                className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#002629] leading-[1.18] tracking-tight animate-hero-fade-up"
                style={{ animationDelay: "260ms" }}
              >
                {heading.line1}
                <span className="block mt-1">
                  {heading.line2Prefix}{" "}
                  <span className="text-[#C5A059] italic font-serif font-bold">
                    {heading.line2Highlight}
                  </span>
                </span>
              </h2>
            )}
          </div>

          <div className="lg:col-span-8 flex flex-col">
            {items.length > 1 && (
              <div
                className="flex items-center justify-end gap-3 mb-6 sm:mb-8 animate-hero-fade-down"
                style={{ animationDelay: "320ms" }}
              >
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-full border border-zinc-200 bg-white text-zinc-700 flex items-center justify-center transition-all duration-300 hover:border-[#DCAE62] hover:bg-[#FAF7F2] hover:text-[#002629] hover:scale-105 active:scale-95 shadow-2xs"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5 px-2">
                  {items.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setIsAnimating(true);
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === currentIndex
                          ? "w-6 bg-[#DCAE62]"
                          : "w-2 bg-zinc-200 hover:bg-zinc-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-full border border-zinc-200 bg-white text-zinc-700 flex items-center justify-center transition-all duration-300 hover:border-[#DCAE62] hover:bg-[#FAF7F2] hover:text-[#002629] hover:scale-105 active:scale-95 shadow-2xs"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="relative flex flex-col sm:flex-row items-center sm:items-center justify-start">
              {activeImage && (
                <div
                  className="relative w-full max-w-[320px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[340px] shrink-0 z-10 mb-6 sm:mb-0 animate-hero-image"
                  style={{ animationDelay: "380ms" }}
                >
                  <div
                    className="absolute -top-3 -left-3 w-20 h-20 border-t-[3.5px] border-l-[3.5px] border-[#DCAE62] rounded-tl-[28px] pointer-events-none z-20"
                    aria-hidden="true"
                  />

                  <div className="relative rounded-3xl overflow-hidden shadow-xl bg-zinc-900 border border-zinc-200/50 aspect-[330/450] group transition-transform duration-500 hover:scale-[1.02]">
                    <div
                      key={activeImage}
                      className="relative w-full h-full animate-fadeIn"
                    >
                      <Image
                        src={activeImage}
                        alt={activeImageAlt}
                        fill
                        sizes="(max-width: 640px) 320px, 340px"
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                        priority
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentItem && (
                <div
                  className="relative w-full sm:flex-1 sm:-ml-14 md:-ml-18 lg:-ml-20 z-20 animate-hero-fade-up"
                  style={{ animationDelay: "480ms" }}
                >
                  <div
                    className="absolute -bottom-3 -right-3 w-24 h-24 border-b-[3.5px] border-r-[3.5px] border-[#DCAE62] rounded-br-[32px] pointer-events-none z-30 hidden sm:block"
                    aria-hidden="true"
                  />

                  <div
                    className={`relative bg-white rounded-3xl p-6 sm:p-8 lg:p-9 shadow-2xl border border-zinc-200/70 transition-all duration-500 hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)] overflow-hidden ${
                      isAnimating
                        ? "opacity-60 scale-[0.99] translate-y-1"
                        : "opacity-100 scale-100 translate-y-0"
                    }`}
                  >
                    <div
                      className="absolute right-4 bottom-3 w-24 h-24 text-[#DCAE62]/15 pointer-events-none select-none"
                      aria-hidden="true"
                    >
                      <Scale className="w-full h-full stroke-[1.2]" />
                    </div>

                    <div className="relative z-10 flex flex-col text-left">
                      <div className="text-[#C5A059] mb-3">
                        <svg
                          className="w-9 h-9 fill-current opacity-90 transition-transform duration-300 hover:scale-110"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      <blockquote className="text-sm sm:text-base lg:text-[17px] font-medium text-[#002629] leading-relaxed transition-all duration-300">
                        &ldquo;{currentItem.quote}&rdquo;
                      </blockquote>

                      <div
                        className="w-12 h-[2px] bg-[#DCAE62] rounded-full my-4 transition-all duration-300 hover:w-20"
                        aria-hidden="true"
                      />

                      <div className="flex flex-col">
                        <h3 className="text-base sm:text-lg font-bold text-[#002629] tracking-tight">
                          {currentItem.client}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-zinc-500 font-medium mt-0.5">
                          {currentItem.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Testimonials };
