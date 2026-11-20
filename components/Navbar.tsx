"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  X,
  ChevronRight,
} from "lucide-react";
import contentData from "@/data/content.json";
import type { HeaderSection, NavLink } from "@/data/type";

const defaultHeaderData: HeaderSection =
  contentData.LexFin.sections.Header.variants.LexFinHeader1;

export default function Navbar({
  data = defaultHeaderData,
  activeHref: controlledActiveHref,
  className = "",
}: {
  data?: HeaderSection;
  activeHref?: string;
  className?: string;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    controlledActiveHref || data.links[0]?.href || "#home"
  );

  useEffect(() => {
    if (controlledActiveHref) {
      setActiveSection(controlledActiveHref);
    }
  }, [controlledActiveHref]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!controlledActiveHref) {
        const sections = data.links
          .map((item) => {
            if (item.href.startsWith("#")) {
              const el = document.getElementById(item.href.replace("#", ""));
              return el ? { id: item.href, top: el.offsetTop - 120 } : null;
            }
            return null;
          })
          .filter(Boolean) as { id: string; top: number }[];

        const currentPos = window.scrollY;
        for (let i = sections.length - 1; i >= 0; i--) {
          if (currentPos >= sections[i].top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.links, controlledActiveHref]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`w-full sticky top-0 z-40 animate-nav-down transition-all duration-300 ${
          isScrolled
            ? "bg-[#002629]/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.35)] border-b border-emerald-900/50"
            : "bg-[#002629] border-b border-emerald-950/40"
        } ${className}`}
      >
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex items-center shrink-0">
              <Link
                href="#home"
                className="group inline-flex items-center transition-opacity hover:opacity-95 select-none"
                aria-label="LexFin Advisors - Law & Finance Home"
              >
                <Image
                  src={data.logo}
                  alt="LexFin Advisors - Law & Finance"
                  width={320}
                  height={80}
                  priority
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>
            </div>

            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] xl:text-[15px] font-medium tracking-wide"
              aria-label="Main Navigation"
            >
              {data.links.map((item: NavLink) => {
                const isActive = activeSection === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveSection(item.href)}
                    className={`relative px-3 py-2 rounded-lg transition-all duration-200 group ${
                      isActive
                        ? "text-[#E5A823] font-semibold"
                        : "text-zinc-200/90 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/[0.06] transition-colors duration-200 pointer-events-none" />
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full transition-all duration-300 pointer-events-none ${
                        isActive
                          ? "bg-[#E5A823] opacity-100 scale-x-100 shadow-[0_0_8px_rgba(229,168,35,0.7)]"
                          : "bg-[#E5A823] opacity-0 scale-x-0 group-hover:opacity-80 group-hover:scale-x-75"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="#contact"
                className="hidden lg:inline-flex group items-center justify-center font-bold tracking-tight rounded-full bg-gradient-to-r from-[#F3C45E] via-[#E5A823] to-[#CF8E12] text-[#06201B] px-6 py-2.5 text-sm gap-2 shadow-[0_4px_16px_rgba(229,168,35,0.28)] transition-all duration-300 ease-out hover:brightness-105 hover:shadow-[0_6px_22px_rgba(229,168,35,0.45)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] select-none whitespace-nowrap"
              >
                <span>{data.button}</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                  strokeWidth={2.4}
                />
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-white hover:text-[#E5A823] hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A823]/70"
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <div className="w-6 h-5 flex flex-col justify-between items-center py-0.5">
                  <span className="block h-[2.5px] w-6 bg-white rounded-full transition-all duration-300" />
                  <span className="block h-[2.5px] w-6 bg-white rounded-full transition-all duration-300" />
                  <span className="block h-[2.5px] w-6 bg-white rounded-full transition-all duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          aria-modal="true"
          role="dialog"
        >
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-[380px] bg-[#002629] border-l border-emerald-900/60 shadow-2xl flex flex-col z-10 transition-transform duration-300 animate-slideLeft">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#051E1A]">
              <Link
                href="#home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center"
              >
                <Image
                  src={data.logo}
                  alt="LexFin Advisors"
                  width={240}
                  height={60}
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E5A823]"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6 text-white" strokeWidth={2.2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-1 divide-y divide-white/5">
              <div className="pb-3 px-2">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E5A823]/80">
                  Navigation Menu
                </span>
              </div>

              <div className="pt-2 space-y-1">
                {data.links.map((item: NavLink) => {
                  const isActive = activeSection === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.href);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#E5A823]/20 to-transparent text-[#E5A823] border-l-4 border-[#E5A823] font-semibold"
                          : "text-zinc-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isActive
                            ? "text-[#E5A823] translate-x-0.5"
                            : "text-white/40"
                        }`}
                      />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="p-4 border-t border-white/10 bg-[#051E1A]">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center font-bold tracking-tight rounded-full bg-gradient-to-r from-[#F3C45E] via-[#E5A823] to-[#CF8E12] text-[#06201B] px-6 py-3.5 text-sm gap-2 shadow-[0_4px_16px_rgba(229,168,35,0.28)] hover:brightness-105 transition-all select-none"
              >
                <span>{data.button}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export { Navbar };
