"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ChevronUp, ChevronRight } from "lucide-react";
import contentData from "@/data/content.json";
import type { FooterSection, FooterSocialLink } from "@/data/type";

const defaultData: FooterSection =
  contentData.LexFin.sections.Footer.variants.LexFinFooter1;

const renderSocialIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case "linkedin":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "twitter":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer({
  data = defaultData,
  className = "",
}: {
  data?: FooterSection;
  className?: string;
}) {
  const logo = data.logo;
  const description = data.description;
  const socialLinks = data.socialLinks || [];
  const quickLinksTitle = data.quickLinksTitle;
  const quickLinks = data.quickLinks || [];
  const backgroundImage = data.backgroundImage;
  const contact = data.contact;
  const offices = contact?.offices || [];
  const bottomBar = data.bottomBar;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      aria-label="Footer"
      className={`relative w-full bg-[#002B24] text-white pt-16 pb-8 overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <div className="absolute inset-0 w-full h-full opacity-5 pointer-events-none select-none z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center animate-hero-bg-in"
          />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          <div
            className="lg:col-span-4 flex flex-col items-start space-y-6 animate-hero-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            {logo && (
              <Link
                href="#home"
                className="inline-block transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo}
                  alt="LexFin Advisors"
                  width={320}
                  height={80}
                  className="h-14 sm:h-16 w-auto object-contain"
                  priority
                />
              </Link>
            )}

            {description && (
              <p className="text-sm text-zinc-300/90 leading-relaxed font-normal max-w-sm text-left">
                {description}
              </p>
            )}

            {socialLinks.length > 0 && (
              <div className="flex items-center gap-3 pt-1">
                {socialLinks.map((social: FooterSocialLink, idx: number) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full border border-[#DCAE62]/40 bg-[#001f1a]/80 text-[#DCAE62] hover:bg-[#DCAE62] hover:text-[#002B24] hover:border-[#DCAE62] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    {renderSocialIcon(social.icon)}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div
            className="lg:col-span-3 flex flex-col space-y-4 text-left animate-hero-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            <div className="space-y-1.5">
              <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                {quickLinksTitle || "Quick Links"}
              </h4>
              <div className="w-10 h-[2.5px] bg-[#DCAE62] rounded-full" aria-hidden="true" />
            </div>

            {quickLinks.length > 0 && (
              <ul className="space-y-2.5 pt-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-[#DCAE62] transition-colors"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#DCAE62] group-hover:translate-x-1 transition-transform" />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className="md:col-span-2 lg:col-span-5 flex flex-col space-y-8 animate-hero-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            {contact && (contact.phone || contact.email) && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-4 rounded-xl bg-white/[0.03] border border-emerald-800/40">
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="group flex items-center gap-3 transition-colors hover:text-[#DCAE62]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#DCAE62]/10 border border-[#DCAE62]/40 flex items-center justify-center text-[#DCAE62] group-hover:bg-[#DCAE62] group-hover:text-[#002B24] transition-all shrink-0">
                      <Phone className="w-4 h-4 fill-current" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Phone</span>
                      <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#DCAE62] transition-colors">
                        {contact.phone}
                      </span>
                    </div>
                  </a>
                )}

                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="group flex items-center gap-3 transition-colors hover:text-[#DCAE62]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#DCAE62]/10 border border-[#DCAE62]/40 flex items-center justify-center text-[#DCAE62] group-hover:bg-[#DCAE62] group-hover:text-[#002B24] transition-all shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">Email</span>
                      <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#DCAE62] transition-colors">
                        {contact.email}
                      </span>
                    </div>
                  </a>
                )}
              </div>
            )}

            {offices.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
                {offices.map((office, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col text-left space-y-2 p-3.5 rounded-xl bg-white/[0.02] border border-emerald-900/40"
                  >
                    <h4 className="text-sm sm:text-base font-bold text-[#DCAE62] tracking-wide">
                      {office.city}
                    </h4>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#DCAE62] shrink-0 mt-0.5" />
                      <div className="flex flex-col text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                        <span>{office.addressLine1}</span>
                        <span>{office.addressLine2}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="w-full h-[1px] bg-emerald-800/40 mb-6" aria-hidden="true" />

        {bottomBar && (
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-300 animate-hero-fade-up"
            style={{ animationDelay: "480ms" }}
          >
            <span className="font-medium text-center sm:text-left">{bottomBar.copyright}</span>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              className="w-10 h-10 rounded-full bg-[#DCAE62] hover:bg-white text-[#002B24] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 shrink-0 cursor-pointer"
            >
              <ChevronUp className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}

export { Footer };
