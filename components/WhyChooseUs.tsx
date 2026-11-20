"use client";

import React from "react";
import Image from "next/image";
import {
  Scale,
  ShieldCheck,
  Users,
  Award,
  Target,
  Handshake,
  Calendar,
  Layers,
} from "lucide-react";
import contentData from "@/data/content.json";
import type { WhyChooseUsSection } from "@/data/type";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Scale,
  ShieldCheck,
  Users,
  Award,
  Target,
  Handshake,
  Calendar,
  Layers,
};

const defaultData: WhyChooseUsSection =
  contentData.LexFin.sections.CompanyStatistics.variants.LexFinStats1 as unknown as WhyChooseUsSection;

export default function WhyChooseUs({
  data = defaultData,
  className = "",
}: {
  data?: WhyChooseUsSection;
  className?: string;
}) {
  const tagline = data.tagline;
  const heading = data.heading;
  const description = data.description;
  const image = data.image;
  const imageAlt = data.imageAlt;
  const values = data.values || [];
  const stats = data.stats || [];

  const TaglineIcon = tagline?.icon ? iconMap[tagline.icon] || Scale : Scale;

  return (
    <section
      id="why-choose-us"
      aria-label={tagline?.text}
      className={`relative w-full bg-[#FDFBF7] text-zinc-900 py-16 sm:py-20 lg:py-24 overflow-hidden ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-stretch">
          {image && (
            <div
              className="w-full lg:w-[22%] shrink-0 animate-hero-image"
              style={{ animationDelay: "200ms" }}
            >
              <div className="relative h-[300px] lg:h-full min-h-[450px] rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src={image}
                  alt={imageAlt || "Lady Justice"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          )}

          {values && values.length > 0 && (
            <div
              className="hidden lg:flex w-[90px] shrink-0 flex-col justify-evenly items-center bg-[#013A2A] rounded-2xl py-6 px-2 shadow-sm border border-[#012A1E] text-white animate-hero-fade-down"
              style={{ animationDelay: "280ms" }}
            >
              {values.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || ShieldCheck;
                return (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center justify-center text-center gap-1.5 group cursor-default transition-transform duration-300 hover:scale-105">
                      <IconComponent className="w-7 h-7 text-[#C5A059] stroke-[1.5] transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-[11px] font-semibold tracking-wide whitespace-pre-line leading-tight">
                        {item.title}
                      </span>
                    </div>
                    {idx !== values.length - 1 && (
                      <div className="w-8 h-[1px] bg-white/20" aria-hidden="true" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          <div
            className="w-full flex-1 bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-[#E6D3B6] flex flex-col justify-between animate-hero-fade-up"
            style={{ animationDelay: "340ms" }}
          >
            <div className="flex flex-col text-left mb-6">
              {tagline && (
                <div
                  className="flex items-center gap-3 mb-4 animate-hero-fade-down"
                  style={{ animationDelay: "400ms" }}
                >
                  <TaglineIcon className="w-5 h-5 text-[#C5A059]" />
                  <span className="text-xs sm:text-sm font-bold tracking-[0.15em] text-zinc-900 uppercase">
                    {tagline.text}
                  </span>
                  <div className="w-12 h-[1.5px] bg-[#C5A059] rounded-full" />
                </div>
              )}

              {heading && (
                <h2
                  className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#1A1A1A] leading-[1.15] tracking-tight mb-3 animate-hero-fade-up"
                  style={{ animationDelay: "460ms" }}
                >
                  {heading.line1}
                  <br />
                  {heading.line2Prefix}{" "}
                  <span className="text-[#C5A059] italic font-serif">
                    {heading.line2Highlight}
                  </span>
                </h2>
              )}

              {description && (
                <p
                  className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal max-w-3xl animate-hero-fade-up"
                  style={{ animationDelay: "540ms" }}
                >
                  {description}
                </p>
              )}
            </div>

            {stats && stats.length > 0 && (
              <div className="flex flex-col gap-3">
                {stats.map((stat, idx) => {
                  const StatIcon = iconMap[stat.icon] || Calendar;
                  return (
                    <div
                      key={idx}
                      style={{ animationDelay: `${600 + idx * 100}ms` }}
                      className="group bg-white rounded-2xl p-4 sm:p-5 border border-[#EAEAEA] shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 transition-all duration-300 hover:border-[#DCAE62]/80 hover:shadow-md hover:-translate-y-0.5 animate-hero-fade-up"
                    >
                      <div className="flex items-center gap-4 sm:gap-5 w-full sm:w-[45%]">
                        <div className="w-14 h-14 rounded-xl bg-[#FCF6EC] flex items-center justify-center shrink-0 text-[#C5A059] transition-transform duration-300 group-hover:scale-110">
                          <StatIcon className="w-7 h-7 stroke-[1.5]" />
                        </div>
                        
                        <div className="flex flex-col text-left">
                          <span className="text-3xl sm:text-[34px] font-black text-[#1A1A1A] leading-none">
                            {stat.value}
                          </span>
                          <span className="text-[13px] text-zinc-700 font-medium mt-1">
                            {stat.label}
                          </span>
                        </div>
                      </div>

                      <div className="hidden sm:block w-[1.5px] h-12 bg-[#E5E5E5] shrink-0" />

                      <div className="flex flex-col text-left flex-1">
                        <h3 className="text-[17px] font-bold text-[#1A1A1A] mb-1 transition-colors duration-300 group-hover:text-[#B9892D]">
                          {stat.title}
                        </h3>
                        <p className="text-[13px] text-zinc-600 leading-snug">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { WhyChooseUs };
