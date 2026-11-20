"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import contentData from "@/data/content.json";
import type { LexFinContent } from "@/data/type";

export default function Home() {
  const typedContent = contentData as unknown as LexFinContent;
  const sections = typedContent.LexFin.sections;

  const headerData = sections.Header.variants.LexFinHeader1;
  const bannerData = sections.Banner.variants.LexFinBanner1;
  const aboutData = sections.About.variants.LexFinAbout1;
  const servicesData = sections.Services.variants.LexFinServices1;
  const teamData = sections.Team.variants.LexFinTeam1;
  const whyChooseUsData = sections.CompanyStatistics.variants.LexFinStats1;
  const testimonialData = sections.Testimonial.variants.LexFinTestimonial1;
  const faqData = sections.FAQ.variants.LexFinFAQ1;
  const contactData = sections.Contact.variants.LexFinContact1;
  const footerData = sections.Footer.variants.LexFinFooter1;

  return (
    <div className="min-h-screen bg-[#002629] text-zinc-100 flex flex-col antialiased selection:bg-[#E5A823] selection:text-[#002629]">
      <Navbar data={headerData} />
      <main className="flex-1">
        <Hero data={bannerData} />
        <About data={aboutData} />
        <Services data={servicesData} />
        <Team data={teamData} />
        <WhyChooseUs data={whyChooseUsData} />
        <Testimonials data={testimonialData} />
        <FAQ data={faqData} />
        <Contact data={contactData} />
      </main>
      <Footer data={footerData} />
    </div>
  );
}
