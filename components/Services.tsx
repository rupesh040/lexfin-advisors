"use client";

import React from "react";
import Image from "next/image";
import { Scale } from "lucide-react";
import contentData from "@/data/content.json";
import type { ServicesSection } from "@/data/type";

const defaultServicesData: ServicesSection =
  contentData.LexFin.sections.Services.variants.LexFinServices1;

export default function Services({
  data = defaultServicesData,
  className = "",
}: {
  data?: ServicesSection;
  className?: string;
}) {
  const tagline = data.tagline;
  const heading = data.heading;
  const description = data.description;
  const headerIconImage = data.headerIconImage;
  const watermarkImage = data.watermarkImage;
  const watermarkAlt = data.watermarkAlt;
  const items = data.items || [];

  return (
    <section
      id="service"
      aria-label={tagline?.text || "Our Services"}
      className={`relative w-full overflow-hidden bg-[#FEFAF6] text-zinc-900 py-7 sm:py-9 lg:py-8 ${className}`}
    >
      {watermarkImage && (
        <div className="absolute top-0 right-0 z-0 w-[170px] sm:w-[240px] lg:w-[350px] pointer-events-none select-none opacity-[0.18] animate-hero-bg-in">
          <Image
            src={watermarkImage}
            alt={watermarkAlt || ""}
            width={380}
            height={340}
            className="w-full h-auto object-contain object-top-right"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-6 lg:gap-10 mb-8 lg:mb-9">
          <div className="flex flex-col items-start text-left">
            {tagline && (
              <div
                className="flex items-center gap-4 mb-4 animate-hero-fade-down"
                style={{ animationDelay: "150ms" }}
              >
                <div className="inline-flex items-center gap-2.5 rounded-full bg-[#FFE9AA] px-4 py-2 transition-transform duration-300 hover:scale-105">
                  <Scale
                    className="w-5 h-5 text-[#002D27]"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-[#002D27]">
                    {tagline.text}
                  </span>
                </div>

                <span
                  className="w-16 h-[2px] bg-[#DCAE62]"
                  aria-hidden="true"
                />
              </div>
            )}

            {heading && (
              <h2
                className="max-w-[800px] text-[32px] sm:text-[40px] lg:text-[46px] xl:text-[50px] font-serif font-bold leading-[1.08] tracking-tight text-[#002D27] animate-hero-fade-up"
                style={{ animationDelay: "260ms" }}
              >
                {heading.line1}
                <span className="block mt-1">
                  {heading.line2Prefix}{" "}
                  <span className="italic text-[#C49432]">
                    {heading.line2Highlight}
                  </span>
                </span>
              </h2>
            )}
          </div>

          <div
            className="flex items-center gap-5 sm:gap-6 lg:pl-7 lg:mt-8 animate-hero-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <div className="hidden sm:block w-[2px] h-[90px] bg-[#DCAE62] shrink-0" />

            {headerIconImage && (
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 shrink-0 transition-transform duration-300 hover:scale-110">
                <Image
                  src={headerIconImage}
                  alt=""
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
            )}

            {description && (
              <p className="max-w-[390px] text-sm sm:text-base text-[#292929] font-medium leading-[1.55]">
                {description}
              </p>
            )}
          </div>
        </div>

        {items.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {items.map((item, idx) => (
              <article
                key={idx}
                style={{ animationDelay: `${450 + idx * 80}ms` }}
                className="
                  group relative
                  min-h-[185px] lg:min-h-[204px]
                  rounded-[23px]
                  border border-[#ECEAE6]
                  bg-white
                  px-5 py-5 sm:px-5 sm:py-5 lg:px-5 lg:py-5
                  shadow-[0_2px_5px_rgba(0,0,0,0.025),0_7px_15px_rgba(0,0,0,0.035)]
                  transition-all duration-300 ease-out
                  hover:-translate-y-1.5
                  hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]
                  text-left
                  animate-hero-fade-up
                "
              >
                <div className="flex items-center gap-4 mb-2.5">
                  {item.iconImage && (
                    <div className="relative w-[68px] h-[68px] sm:w-[72px] sm:h-[72px] lg:w-[80px] lg:h-[80px] shrink-0 overflow-hidden rounded-[18px]">
                      <Image
                        src={item.iconImage}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-contain transition-transform duration-300 group-hover:scale-108"
                      />
                    </div>
                  )}

                  <h3 className="text-lg sm:text-xl lg:text-[21px] xl:text-[22px] font-bold leading-[1.2] tracking-tight text-[#002D27] transition-colors duration-300 group-hover:text-[#B9892D]">
                    {item.title}
                  </h3>
                </div>

                <p className="pl-0 sm:pl-[48px] lg:pl-[50px] text-[14px] sm:text-[14px] lg:text-[15px] leading-[1.5] font-medium text-[#292929]">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export { Services };
