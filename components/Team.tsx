"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, Users, ArrowRight } from "lucide-react";
import contentData from "@/data/content.json";
import type { TeamSection } from "@/data/type";

const defaultTeamData: TeamSection =
  contentData.LexFin.sections.Team.variants.LexFinTeam1;

export default function Team({
  data = defaultTeamData,
  className = "",
}: {
  data?: TeamSection;
  className?: string;
}) {
  const tagline = data.tagline;
  const heading = data.heading;
  const intro = data.intro;
  const items = data.items || [];

  return (
    <section
      id="team"
      aria-label={tagline?.text || "Our Legal Team"}
      className={`relative w-full overflow-hidden bg-white text-zinc-900 py-10 sm:py-12 lg:py-8 ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-7 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-12 items-start">
          <div className="flex flex-col text-left pt-2 lg:pt-14">
            {tagline && (
              <div
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FFF0D3] self-start mb-7 animate-hero-fade-down transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: "150ms" }}
              >
                <Scale
                  className="w-6 h-6 text-[#A77A25] shrink-0"
                  strokeWidth={1.9}
                  aria-hidden="true"
                />
                <span className="text-sm sm:text-base font-bold text-[#002D27] tracking-wide">
                  {tagline.text}
                </span>
              </div>
            )}

            {heading && (
              <h2
                className="text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[62px] font-serif font-bold text-[#002D27] leading-[1.13] tracking-tight animate-hero-fade-up"
                style={{ animationDelay: "260ms" }}
              >
                {heading.line1}
                <span className="block mt-1">
                  {heading.line2Prefix}{" "}
                  <span className="text-[#B88935] italic">
                    {heading.line2Highlight}
                  </span>
                </span>
              </h2>
            )}

            <div
              className="w-36 h-[3px] bg-gradient-to-r from-[#DCAE62] to-[#B98932] rounded-full mt-6 mb-8 animate-hero-fade-up"
              style={{ animationDelay: "360ms" }}
              aria-hidden="true"
            />

            {intro && (
              <div
                className="flex items-start gap-5 max-w-[620px] animate-hero-fade-up"
                style={{ animationDelay: "450ms" }}
              >
                <div className="shrink-0 pt-1">
                  <Users
                    className="w-14 h-14 text-[#B88935]"
                    strokeWidth={1.2}
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base sm:text-lg lg:text-[21px] text-[#29333C] leading-[1.5] font-medium">
                  {intro.text}
                </p>
              </div>
            )}

            <div
              className="w-full h-[2px] bg-zinc-200/80 mt-12 lg:mt-12 animate-hero-fade-up"
              style={{ animationDelay: "550ms" }}
              aria-hidden="true"
            />
          </div>

          <div className="w-full">
            {items.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-5">
                {items.map((member, idx) => (
                  <Link
                    key={idx}
                    href={member.href || "#contact"}
                    style={{ animationDelay: `${350 + idx * 100}ms` }}
                    className="
                      group relative block
                      w-full overflow-hidden
                      rounded-[22px]
                      bg-[#002D27]
                      border border-zinc-200/70
                      shadow-[0_3px_8px_rgba(0,0,0,0.07)]
                      transition-all duration-500
                      hover:-translate-y-1.5
                      hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#DCAE62]
                      animate-hero-fade-up
                    "
                  >
                    <div className="relative w-full aspect-[0.895] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        priority={idx < 2}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 380px"
                        className="
                          object-cover object-top
                          transition-transform duration-700 ease-out
                          group-hover:scale-106
                        "
                      />
                    </div>

                    <div className="
                      absolute bottom-0 inset-x-0
                      min-h-[92px]
                      bg-[#002D27]/[0.97]
                      border-t border-[#DCAE62]/30
                      px-4 sm:px-5 py-3
                      flex items-center justify-between gap-3
                      transition-colors duration-300
                      group-hover:bg-[#003B33]
                    ">
                      <div className="flex items-center gap-4 min-w-0">
                        <div
                          className="
                            w-[3px] h-12 shrink-0
                            rounded-full bg-[#DCAE62]
                            transition-transform duration-300
                            group-hover:scale-y-110
                          "
                          aria-hidden="true"
                        />

                        <div className="min-w-0 flex flex-col">
                          <h3 className="
                            text-base sm:text-lg lg:text-xl
                            font-serif font-bold
                            text-white leading-tight
                            truncate
                          ">
                            {member.name}
                          </h3>

                          <p className="
                            text-sm sm:text-base
                            text-zinc-200
                            font-medium leading-tight
                            mt-1
                          ">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      <div className="
                        w-11 h-11 sm:w-12 sm:h-12
                        rounded-full shrink-0
                        flex items-center justify-center
                        bg-gradient-to-br from-[#FFD77D] to-[#E5A52E]
                        text-[#002D27]
                        shadow-md
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:bg-white
                      ">
                        <ArrowRight
                          className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={2}
                        />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Team };
