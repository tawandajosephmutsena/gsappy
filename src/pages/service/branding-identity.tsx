"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import ServiceDetailTemplate from "@/components/service/service-detail-template";
import ServicePricing from "@/components/pricing/service-pricing";
import FooterFour from "@/layouts/footers/footer-four";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const BrandingIdentityPage = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  const pricingTiers = [
    {
      id: 1,
      title: "Starter",
      price: 499,
      features: [
        "Logo design (3 concepts)",
        "Basic brand guidelines",
        "Color palette & typography",
        "2 rounds of revisions",
        "File formats: PNG, JPG, PDF",
      ],
    },
    {
      id: 2,
      title: "Professional",
      price: 1299,
      featured: true,
      features: [
        "Logo design (5 concepts)",
        "Comprehensive brand guidelines",
        "Color palette, typography & imagery",
        "Business card & letterhead design",
        "5 rounds of revisions",
        "All file formats including vector",
        "Brand style guide document",
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      price: 2999,
      features: [
        "Full brand identity system",
        "Logo suite (primary, secondary, marks)",
        "Complete brand guidelines book",
        "Marketing collateral templates",
        "Social media templates",
        "Unlimited revisions",
        "Brand workshop session",
        "6-month brand support",
      ],
    },
  ];

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* service details area */}
            <ServiceDetailTemplate
              subtitle="RVM Studio"
              title="Create a brand you're proud of"
              introText="At RVM Studio, we believe that a powerful brand is more than just a logo; it's a reflection of your company's essence, values, and aspirations. Our expertly crafted branding packages are designed to transform your vision into a brand that stands out in the market."
              mainDescription="Whether you're starting from scratch or refining your existing identity, our services are tailored to meet your unique needs. Transform your ideas into a stunning brand with our expert services."
              features={[
                "Brand Finder Session - In-depth consultation",
                "Clarify and define your brand's identity",
                "SWOT analysis to identify your USP",
                "Comprehensive brand brief",
                "Logo design and visual identity",
                "Brand purpose and positioning strategy",
              ]}
              detailSections={[
                {
                  title: "We Create Unique Branding That Helps Your Business Grow",
                  description: "At RVM Studio, we believe that a powerful brand is more than just a logo; it's a reflection of your company's essence, values, and aspirations. Our expertly crafted branding packages are designed to transform your vision into a brand that stands out in the market."
                },
                {
                  title: "Brand Finder Session",
                  description: "This in-depth consultation is designed to help you clarify and define your brand's identity. We work with you and your stakeholders to distil your ideas, highlight your brand purpose, and complete a SWOT analysis to identify your unique selling proposition (USP) and brand position. The session culminates in a comprehensive brand brief to guide your future efforts."
                }
              ]}
              mainImage="/assets/img/inner-service/sercive-details/sv-details-1.jpg"
              smallImages={[
                "/assets/img/inner-service/sercive-details/sv-details-2.jpg",
                "/assets/img/inner-service/sercive-details/sv-details-3.jpg",
              ]}
              categoryLinks={[
                "Branding & Identity",
                "Web Design & Development",
                "Photography & Visual Content",
                "Social Media Management",
                "Content & Email Marketing",
              ]}
              ctaTitle="Unlock Your Brand's Potential"
              ctaText="Transform your ideas into a stunning brand with our expert services. Let's build something amazing together."
            />
            {/* service details area */}

            {/* pricing section */}
            <ServicePricing tiers={pricingTiers} />
            {/* pricing section */}
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BrandingIdentityPage;
