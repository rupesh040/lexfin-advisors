"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale } from "lucide-react";
import contentData from "@/data/content.json";
import type { HeroSection } from "@/data/type";

const defaultHeroData: HeroSection =
  contentData.LexFin.sections.Banner.variants.LexFinBanner1;

export default function Hero({
  data = defaultHeroData,
  className = "",
}: {
  data?: HeroSection;
  className?: string;
}) {
  const {
    tagline,
    heading,
    avatars,
    description,
    appointmentCta,
    mainPersonImage,
    backgroundImage,
  } = data;

  return (
    <section
      id="home"
      aria-label="Hero Section"
      className={`relative w-full bg-[#002629] text-white overflow-hidden min-h-[680px] flex items-end ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <Image
          src={backgroundImage || "/hero-bg.webp"}
          alt="Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center animate-hero-bg-in"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002629]/25 via-transparent to-[#002629]/25 pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center lg:items-end gap-y-6 sm:gap-y-8 lg:gap-y-0 w-full pt-8 sm:pt-10 lg:pt-0">
          
          <div className="order-1 lg:order-1 lg:col-span-4 xl:col-span-4 flex flex-col justify-center self-center text-left space-y-5 sm:space-y-6 lg:space-y-7 z-20 py-2 sm:py-4 lg:py-10">
            <div
              className="inline-flex items-center gap-2 sm:gap-2.5 whitespace-nowrap flex-nowrap select-none animate-hero-fade-down"
              style={{ animationDelay: "150ms" }}
            >
              <Scale
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#DEAF5D] shrink-0 transition-transform duration-300 hover:rotate-12 cursor-default"
                strokeWidth={2.4}
                aria-hidden="true"
              />
              <span className="text-[11px] sm:text-xs md:text-sm lg:text-[13px] xl:text-sm font-bold tracking-[0.18em] text-white uppercase whitespace-nowrap">
                {tagline?.text || "JUSTICE & COMPLIANCE TOGETHER"}
              </span>
              <span
                className="w-8 sm:w-12 h-[2px] bg-[#DEAF5D] shrink-0 ml-1 rounded-full"
                aria-hidden="true"
              />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-[34px] xl:text-[42px] 2xl:text-[48px] font-black tracking-normal sm:tracking-[0.02em] uppercase leading-none text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] space-y-2.5 sm:space-y-3 lg:space-y-3.5">
              <div
                className="block whitespace-nowrap animate-hero-fade-up"
                style={{ animationDelay: "250ms" }}
              >
                <span className="text-white">
                  {heading?.line1White || "YOUR"}{" "}
                </span>
                <span className="text-[#DEAF5D]">
                  {heading?.line1Gold || "LEGAL &"}
                </span>
              </div>

              <div
                className="block whitespace-nowrap animate-hero-fade-up"
                style={{ animationDelay: "350ms" }}
              >
                <span className="text-[#DEAF5D]">
                  {heading?.line2Gold || "FINANCIAL"}{" "}
                </span>
                <span className="text-white">
                  {heading?.line2White || "CASE"}
                </span>
              </div>

              <div
                className="block whitespace-nowrap text-white animate-hero-fade-up"
                style={{ animationDelay: "450ms" }}
              >
                {heading?.line3White || "DESERVES THE"}
              </div>

              <div
                className="flex items-center whitespace-nowrap gap-2.5 sm:gap-3 pt-1 animate-hero-fade-up"
                style={{ animationDelay: "550ms" }}
              >
                <span className="text-white">
                  {heading?.line4White || "BEST"}
                </span>

                {avatars && avatars.length > 0 && (
                  <div
                    className="inline-flex items-center -space-x-2 sm:-space-x-2.5 ml-1.5"
                    aria-label="Advisory Team Members"
                  >
                    {avatars.map((avatar, idx) => (
                      <div
                        key={idx}
                        className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-9 lg:h-9 xl:w-11 xl:h-11 rounded-full border-2 sm:border-[2.5px] border-[#DEAF5D] overflow-hidden bg-[#0A352C] shadow-md ring-1 ring-black/40 transition-all duration-300 hover:scale-115 hover:-translate-y-1 hover:z-30 cursor-pointer animate-hero-avatar"
                        style={{ animationDelay: `${620 + idx * 80}ms` }}
                        title={avatar.name}
                      >
                        <Image
                          src={avatar.image}
                          alt={avatar.name}
                          width={44}
                          height={44}
                          className="w-full h-full object-cover object-bottom"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </h1>
          </div>

          <div
            className="order-3 lg:order-2 lg:col-span-4 xl:col-span-4 flex justify-center items-end self-end relative z-10 w-full overflow-visible pt-4 lg:pt-0 animate-hero-image"
            style={{ animationDelay: "280ms" }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] lg:max-w-[500px] xl:max-w-[580px] 2xl:max-w-[640px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[550px] xl:h-[620px] 2xl:h-[660px] flex items-end justify-center scale-105 sm:scale-110 lg:scale-115 xl:scale-125 2xl:scale-130 origin-bottom transition-all duration-700 hover:brightness-105">
              <Image
                src={mainPersonImage || "/hero-person.webp"}
                alt="LexFin Lead Legal & Financial Advisor"
                fill
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 460px, 640px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
              />
            </div>
          </div>

          <div className="order-2 lg:order-3 lg:col-span-4 xl:col-span-4 flex flex-col justify-center self-center space-y-6 sm:space-y-7 text-left z-20 py-2 sm:py-4 lg:py-10 lg:pl-6 xl:pl-10">
            <p
              className="text-xs sm:text-sm md:text-base lg:text-[14px] xl:text-base text-zinc-100/90 leading-[1.8] sm:leading-loose font-normal max-w-sm sm:max-w-md tracking-wide animate-hero-fade-up"
              style={{ animationDelay: "520ms" }}
            >
              {description ||
                "Your case deserves dedicated attention, experienced legal guidance, and a strategic approach tailored to your unique needs we stand beside."}
            </p>

            {appointmentCta && (
              <Link
                href={appointmentCta.href || "#contact"}
                style={{ animationDelay: "660ms" }}
                className="group inline-flex items-center gap-3.5 sm:gap-4 text-left transition-all duration-300 hover:translate-x-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DEAF5D] animate-hero-fade-up"
                aria-label="Get a Free Estimate or Schedule an Appointment With Us"
              >
                <div className="shrink-0 text-[#DEAF5D] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="4" width="18" height="17" rx="3" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <circle cx="7.5" cy="13.5" r="1" fill="currentColor" />
                    <circle cx="12" cy="13.5" r="1" fill="currentColor" />
                    <circle cx="7.5" cy="17" r="1" fill="currentColor" />
                    <circle cx="17.5" cy="16.5" r="4" fill="#002629" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M15.8 16.5L17 17.7L19.2 15.3" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </div>

                <div
                  className="w-[1.5px] h-8 sm:h-9 bg-emerald-600/40 group-hover:bg-[#DEAF5D] group-hover:h-10 transition-all duration-300 shrink-0"
                  aria-hidden="true"
                />

                <div className="flex flex-col space-y-0.5">
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#DEAF5D] transition-colors leading-snug whitespace-nowrap tracking-wide">
                    {appointmentCta.line1 || "Get a Free Estimate or Schedule an"}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#DEAF5D] transition-colors leading-snug whitespace-nowrap tracking-wide">
                    {appointmentCta.line2 || "Appointment With Us"}
                  </span>
                </div>
              </Link>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export { Hero };
