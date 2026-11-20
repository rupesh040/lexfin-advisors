"use client";

import React from "react";
import Image from "next/image";
import contentData from "@/data/content.json";
import type { AboutSection } from "@/data/type";

const defaultAboutData: AboutSection =
  contentData.LexFin.sections.About.variants.LexFinAbout1;

export default function About({
  data = defaultAboutData,
  className = "",
}: {
  data?: AboutSection;
  className?: string;
}) {
  const tagline = data.tagline || "ABOUT US";

  const heading = data.heading || {
    line1: "Protecting People for",
    line2Prefix: "Over",
    line2Highlight: "Two Decades",
  };

  const founder = data.founder || {
    name: "Ernesto Wade",
    role: "CEO & Founder",
    image: "/about-founder.jpg",
    alt: "CEO & Founder Ernesto Wade",
  };

  const leadParagraph =
    data.leadParagraph ||
    "Our award-winning legal team has an impressive track record and extensive experience working on cases like yours. Our lawyers specialize in the practice areas that affect everyday.";

  const secondaryParagraph =
    data.secondaryParagraph ||
    "Our firm also can help if you're going through a divorce, child custody or child support proceedings, or have been charged with a crime. We offer a free consultation so that you can evaluate your options with no financial risk.";

  const badges = data.badges || [];
  const courthouseWatermark =
    data.courthouseWatermark || "/about-courthouse.png";

  return (
    <section
      id="about"
      aria-label="About LexFin Advisors"
      className={`relative w-full overflow-hidden bg-white text-zinc-900 py-12 sm:py-16 lg:py-10 ${className}`}
    >
      {courthouseWatermark && (
        <div className="absolute top-0 right-0 z-0 w-44 sm:w-64 lg:w-[290px] opacity-[0.16] pointer-events-none animate-hero-bg-in">
          <Image
            src={courthouseWatermark}
            alt=""
            width={448}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          <div className="lg:col-span-4">
            <div
              className="flex items-center gap-4 mb-10 lg:mb-[105px] animate-hero-fade-down"
              style={{ animationDelay: "150ms" }}
            >
              <span className="w-12 h-[2px] bg-[#C99A42]" />
              <span className="text-sm sm:text-base font-bold uppercase text-[#002629]">
                {tagline}
              </span>
            </div>

            <div
              className="relative max-w-[420px] mx-auto lg:mx-0 group animate-hero-image"
              style={{ animationDelay: "280ms" }}
            >
              <div className="absolute -top-4 -left-4 w-[48%] h-[55%] rounded-[30px] bg-[#DCAE62] transition-transform duration-500 group-hover:scale-105" />

              <div className="relative z-10 overflow-hidden rounded-[30px] bg-[#002629] shadow-xl border border-zinc-200/50 transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="relative aspect-[0.86] w-full">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 420px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="absolute bottom-0 inset-x-0 flex items-center gap-4 px-6 py-4 bg-[#002629]/95 backdrop-blur-sm border-t border-[#DCAE62]/30">
                  <div className="w-[3px] h-12 rounded-full bg-[#DCAE62]" />
                  <div>
                    <p className="text-sm sm:text-base text-white">
                      {founder.role}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {founder.name}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col">
            <div
              className="relative mb-10 lg:mb-12 animate-hero-fade-up"
              style={{ animationDelay: "250ms" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-serif font-bold text-[#002629] leading-[1.12] tracking-tight text-center lg:text-left lg:pl-0">
                {heading.line1}
                <span className="block">
                  {heading.line2Prefix}{" "}
                  <span className="text-[#B98A35] italic">
                    {heading.line2Highlight}
                  </span>
                </span>
              </h2>
            </div>

            <div className="lg:border-l-2 lg:border-zinc-200 lg:pl-12 flex-1 flex flex-col">
              <p
                className="text-lg sm:text-xl lg:text-[25px] font-bold text-black leading-[1.35] mb-5 animate-hero-fade-up"
                style={{ animationDelay: "380ms" }}
              >
                {leadParagraph}
              </p>

              <div
                className="w-16 h-[3px] bg-[#C99A42] mb-5 animate-hero-fade-up"
                style={{ animationDelay: "450ms" }}
              />

              <p
                className="text-base sm:text-lg text-[#454B50] leading-[1.55] mb-10 animate-hero-fade-up"
                style={{ animationDelay: "520ms" }}
              >
                {secondaryParagraph}
              </p>

              {badges.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-5 sm:gap-6 items-center mt-auto pt-4">
                  {badges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-105 animate-hero-fade-up"
                      style={{ animationDelay: `${600 + idx * 80}ms` }}
                      title={`${badge.title} - ${badge.subtitle}`}
                    >
                      <div className="relative w-full max-w-[105px] aspect-square">
                        <Image
                          src={badge.image}
                          alt={`${badge.title} ${badge.subtitle}`}
                          fill
                          sizes="105px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>

        <div
          className="mt-8 lg:mt-5 h-[2px] w-full bg-zinc-200 animate-hero-fade-up"
          style={{ animationDelay: "750ms" }}
        />
      </div>
    </section>
  );
}

export { About };
