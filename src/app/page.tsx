"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="medium"
        background="grid"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Enrich Ventures"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Establish Your Legacy in Dubai"
      description="Premium business setup services designed for excellence, efficiency, and growth in the heart of the world's most dynamic economy."
      buttons={[
        {
          text: "Start Your Business",
          href: "#contact",
        },
      ]}
      carouselItems={[
        {
          id: "1",
          imageSrc: "http://img.b2bpic.net/free-photo/co-workers-planning-strategy_1098-1144.jpg?_wi=1",
          imageAlt: "Dubai luxury office",
        },
        {
          id: "2",
          imageSrc: "http://img.b2bpic.net/free-photo/scenic-aerial-view-downtown-dubai-united-arab-emirates-with-skyscrapers-highways-colourful-travel-background_231208-7638.jpg?_wi=1",
          imageAlt: "Dubai skyline",
        },
        {
          id: "3",
          imageSrc: "http://img.b2bpic.net/free-photo/business-partners-handshake-international-corporate_53876-102614.jpg?_wi=1",
          imageAlt: "Business meeting",
        },
        {
          id: "4",
          imageSrc: "http://img.b2bpic.net/free-photo/halloween-decor-white-table-black-surface_176420-9151.jpg",
          imageAlt: "Luxury desk",
        },
        {
          id: "5",
          imageSrc: "http://img.b2bpic.net/free-photo/skyscrapers-looking-up-sky-modern-metropolis-modern-city_231208-7548.jpg",
          imageAlt: "Corporate exterior",
        },
        {
          id: "6",
          imageSrc: "http://img.b2bpic.net/free-photo/black-person-signing-job-contract_482257-120993.jpg",
          imageAlt: "Contract signature",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Expertise in Dubai Business Landscape"
      description="We specialize in navigating the regulatory landscape for international companies setting up in Dubai. Our experts ensure seamless integration, legal compliance, and strategic growth."
      metrics={[
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "500+",
          title: "Companies Setup",
        },
        {
          value: "99%",
          title: "Client Success",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-people-working-office_329181-16073.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
      imageAlt="professional executive team"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Company Registration",
          description: "Legal entity structuring and registration with DED and free zone authorities.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/executives-smiling-workplace_1098-693.jpg",
            imageAlt: "Dubai luxury office",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/hudson-river-dusk-new-york-city_649448-5051.jpg",
            imageAlt: "Dubai business district",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/co-workers-planning-strategy_1098-1144.jpg?_wi=2",
          imageAlt: "Dubai luxury office",
        },
        {
          title: "Visa Processing",
          description: "Seamless residency visa processing for investors, employees, and their families.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/business-agreement-handshake-hand-gesture_53876-130006.jpg",
            imageAlt: "corporate handshake",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/catered-table-asian-restaurant-chopsticks-soy-sauce_627829-6149.jpg",
            imageAlt: "business luxury desk",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/scenic-aerial-view-downtown-dubai-united-arab-emirates-with-skyscrapers-highways-colourful-travel-background_231208-7638.jpg?_wi=2",
          imageAlt: "Dubai luxury office",
        },
        {
          title: "Corporate Banking",
          description: "Dedicated assistance with local and international corporate bank account setup.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/detail-shot-skyscrapers_1359-553.jpg",
            imageAlt: "Dubai architecture",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/start-working-day_1098-15922.jpg",
            imageAlt: "signing business contract",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/business-partners-handshake-international-corporate_53876-102614.jpg?_wi=2",
          imageAlt: "Dubai luxury office",
        },
      ]}
      showStepNumbers={true}
      title="Comprehensive Business Services"
      description="All-in-one setup solutions to get your company operational in record time."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",
          title: "Starter Pack",
          price: "AED 12,000",
          period: "/initial",
          features: [
            "DED Registration",
            "Visa Guidance",
            "Compliance Review",
          ],
          button: {
            text: "Get Started",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/business-meeting-office_1268-21517.jpg",
          imageAlt: "Business meeting in an office",
        },
        {
          id: "professional",
          title: "Professional",
          price: "AED 25,000",
          period: "/annual",
          features: [
            "Full Licensing",
            "Corporate Banking",
            "Office Solutions",
            "PRO Services",
          ],
          button: {
            text: "Select Professional",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/co-workers-planning-strategy_1098-1144.jpg?_wi=3",
          imageAlt: "Business meeting in an office",
        },
        {
          id: "enterprise",
          title: "Enterprise",
          price: "Custom",
          period: "/quote",
          features: [
            "Custom Structuring",
            "Priority Support",
            "Tax Planning",
            "Legal Consulting",
          ],
          button: {
            text: "Request Quote",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/scenic-aerial-view-downtown-dubai-united-arab-emirates-with-skyscrapers-highways-colourful-travel-background_231208-7638.jpg?_wi=3",
          imageAlt: "Business meeting in an office",
        },
      ]}
      title="Flexible Service Packages"
      description="Transparent pricing plans for every scale, from startup to multinational corporations."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Delivering Measurable Impact"
      tag="Our Impact"
      metrics={[
        {
          id: "1",
          value: "10+",
          description: "Active Sectors Served",
        },
        {
          id: "2",
          value: "24h",
          description: "Response Time Average",
        },
        {
          id: "3",
          value: "40+",
          description: "Dedicated Consultants",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "John Doe",
          role: "CEO",
          company: "Global Tech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/two-confident-business-man-shaking-hands-meeting-office-success-dealing-greeting-partner-concept_1423-185.jpg",
          imageAlt: "John Doe",
        },
        {
          id: "2",
          name: "Jane Smith",
          role: "Founder",
          company: "Creative Hub",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-colleagues-greeting-each-other-city_74855-4197.jpg",
          imageAlt: "Jane Smith",
        },
        {
          id: "3",
          name: "Ahmed Al-Farsi",
          role: "Partner",
          company: "Dubai Trade",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/business-people-shaking-hands_74855-1165.jpg",
          imageAlt: "Ahmed Al-Farsi",
        },
        {
          id: "4",
          name: "Elena Petrova",
          role: "Manager",
          company: "Petrova Logistics",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/receptionists-elegant-suits-work-hours_23-2149714404.jpg",
          imageAlt: "Elena Petrova",
        },
        {
          id: "5",
          name: "Marcus Ling",
          role: "Founder",
          company: "Innovate AI",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-people-office_23-2149622851.jpg",
          imageAlt: "Marcus Ling",
        },
      ]}
      title="Client Success Stories"
      description="Trusted by visionary leaders and businesses expanding into the UAE."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Begin Your Dubai Journey"
      description="Speak with our consultants today to start your business setup process in Dubai."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we assist you?",
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-female-barista-standing-inside-coffee-counter_93675-135319.jpg"
      mediaPosition="left"
      imageAlt="luxury office reception"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Enrich Ventures"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Setup",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Terms",
              href: "#",
            },
            {
              label: "Privacy",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Enrich Ventures Dubai."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
