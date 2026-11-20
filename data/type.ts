
export interface NavLink {
  name: string;
  href: string;
  active?: boolean;
}

export interface HeaderContact {
  phone: string;
  email: string;
  tagline: string;
  description: string;
}

export interface HeaderSection {
  logo: string;
  links: NavLink[];
  button: string;
  contact: HeaderContact;
}

export interface BannerStat {
  value: string;
  label: string;
}

export interface HeroAvatar {
  name: string;
  image: string;
}

export interface HeroAppointmentCta {
  line1: string;
  line2: string;
  href: string;
}

export interface HeroHeading {
  line1White: string;
  line1Gold: string;
  line2Gold: string;
  line2White: string;
  line3White: string;
  line4White: string;
}

export interface HeroSection {
  tagline: {
    icon: string;
    text: string;
  };
  heading: HeroHeading;
  avatars: HeroAvatar[];
  description: string;
  appointmentCta: HeroAppointmentCta;
  mainPersonImage: string;
  backgroundImage: string;
  stats?: BannerStat[];
}

export type BannerSection = HeroSection;

export interface AboutBadge {
  title: string;
  subtitle: string;
  image: string;
}

export interface AboutFounder {
  name: string;
  role: string;
  image: string;
  alt: string;
}

export interface AboutHeading {
  line1: string;
  line2Prefix: string;
  line2Highlight: string;
}

export interface AboutSection {
  tagline?: string;
  heading?: AboutHeading;
  founder?: AboutFounder;
  leadParagraph?: string;
  secondaryParagraph?: string;
  badgesImage?: string;
  badges?: AboutBadge[];
  courthouseWatermark?: string;
  preTitle?: string;
  headingPart1?: string;
  headingPart2?: string;
  description?: string;
  features?: string[];
  philosophyTitle?: string;
  philosophyQuote?: string;
  headquarters?: string;
  practicingSince?: string;
}

export interface ServiceHeading {
  line1: string;
  line2Prefix: string;
  line2Highlight: string;
}

export interface ServiceTagline {
  icon: string;
  text: string;
}

export interface ServiceItem {
  icon: string;
  iconImage?: string;
  iconTheme?: "dark" | "gold" | string;
  title: string;
  desc: string;
  tags?: string[];
}

export interface ServicesSection {
  tagline?: ServiceTagline;
  heading?: ServiceHeading;
  description?: string;
  headerIcon?: string;
  headerIconImage?: string;
  watermarkImage?: string;
  watermarkAlt?: string;
  items: ServiceItem[];
  preTitle?: string;
}

export interface TeamTagline {
  icon: string;
  text: string;
}

export interface TeamHeading {
  line1: string;
  line2Prefix: string;
  line2Highlight: string;
}

export interface TeamIntro {
  icon: string;
  text: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  href?: string;
  credentials?: string;
  bio?: string;
}

export interface TeamSection {
  tagline?: TeamTagline;
  heading?: TeamHeading;
  intro?: TeamIntro;
  items: TeamMember[];
  preTitle?: string;
  description?: string;
}

export interface TestimonialTagline {
  text: string;
}

export interface TestimonialHeading {
  line1: string;
  line2Prefix: string;
  line2Highlight: string;
}

export interface TestimonialItem {
  quote: string;
  client: string;
  role: string;
  image?: string;
  title?: string;
  company?: string;
  rating?: number;
}

export interface TestimonialSection {
  tagline?: TestimonialTagline;
  heading?: TestimonialHeading;
  featuredImage?: string;
  featuredImageAlt?: string;
  items: TestimonialItem[];
  preTitle?: string;
  description?: string;
}

export interface WhyChooseUsTagline {
  icon: string;
  text: string;
}

export interface WhyChooseUsHeading {
  line1: string;
  line2Prefix: string;
  line2Highlight: string;
}

export interface WhyChooseUsValue {
  icon: string;
  title: string;
}

export interface WhyChooseUsStatItem {
  icon: string;
  value: string;
  label: string;
  title: string;
  description: string;
}

export interface WhyChooseUsSection {
  tagline?: WhyChooseUsTagline;
  heading?: WhyChooseUsHeading;
  description?: string;
  image?: string;
  imageAlt?: string;
  values?: WhyChooseUsValue[];
  stats?: WhyChooseUsStatItem[];
  preTitle?: string;
}

export type CompanyStatisticsSection = WhyChooseUsSection;

export interface FAQTagline {
  icon: string;
  text: string;
}

export interface FAQHeading {
  line1Prefix: string;
  line1Highlight: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  tagline?: FAQTagline;
  heading?: FAQHeading;
  description?: string;
  backgroundImage?: string;
  watermarkLeft?: string;
  watermarkRight?: string;
  items: FAQItem[];
  preTitle?: string;
}

export interface ContactTagline {
  icon: string;
  text: string;
}

export interface ContactHeading {
  line1Prefix: string;
  line1Highlight: string;
}

export interface ContactFormFields {
  namePlaceholder: string;
  emailPlaceholder: string;
  phonePlaceholder: string;
  servicePlaceholder: string;
  messagePlaceholder: string;
  submitButtonText: string;
  serviceOptions: string[];
}

export interface ContactSection {
  tagline?: ContactTagline;
  heading?: ContactHeading;
  description?: string;
  backgroundImage?: string;
  watermarkLeft?: string;
  watermarkRight?: string;
  form?: ContactFormFields;
  preTitle?: string;
  directLine?: string;
  email?: string;
  address?: string;
  responseGuarantee?: string;
  formTitle?: string;
  formDescription?: string;
  practiceOptions?: string[];
  submitButtonText?: string;
  confidentialityNotice?: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterOffice {
  city: string;
  addressLine1: string;
  addressLine2: string;
}

export interface FooterContactInfo {
  phone: string;
  email: string;
  offices: FooterOffice[];
}

export interface FooterBottomBar {
  copyright: string;
  designedByText?: string;
  designedByName?: string;
  designedByHref?: string;
  disclaimer?: string;
}

export interface FooterSocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterSection {
  logo: string;
  brandName?: string;
  brandSubtitle?: string;
  description?: string;
  quickLinksTitle?: string;
  quickLinks?: FooterLink[];
  socialLinks?: FooterSocialLink[];
  contact?: FooterContactInfo;
  bottomBar?: FooterBottomBar;
  backgroundImage?: string;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface LexFinContent {
  LexFin: {
    templateComponents: {
      "template-1": {
        shared: {
          Header: string;
          Footer: string;
        };
        pages: {
          home: {
            components: TemplateComponentItem[];
          };
        };
      };
    };
    sections: {
      Header: {
        variants: {
          LexFinHeader1: HeaderSection;
        };
      };
      Banner: {
        variants: {
          LexFinBanner1: BannerSection;
        };
      };
      About: {
        variants: {
          LexFinAbout1: AboutSection;
        };
      };
      Services: {
        variants: {
          LexFinServices1: ServicesSection;
        };
      };
      Team: {
        variants: {
          LexFinTeam1: TeamSection;
        };
      };
      Testimonial: {
        variants: {
          LexFinTestimonial1: TestimonialSection;
        };
      };
      CompanyStatistics: {
        variants: {
          LexFinStats1: CompanyStatisticsSection;
        };
      };
      FAQ: {
        variants: {
          LexFinFAQ1: FAQSection;
        };
      };
      Contact: {
        variants: {
          LexFinContact1: ContactSection;
        };
      };
      Footer: {
        variants: {
          LexFinFooter1: FooterSection;
        };
      };
    };
  };
}
