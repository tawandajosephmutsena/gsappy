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

const WebDesignDevelopmentPage = () => {
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
      title: "Landing Page",
      price: 799,
      features: [
        "Single page design",
        "Responsive layout",
        "Contact form integration",
        "Basic SEO optimization",
        "Mobile-first approach",
        "1 month support",
      ],
    },
    {
      id: 2,
      title: "Business Website",
      price: 2499,
      featured: true,
      features: [
        "Up to 10 pages",
        "Custom responsive design",
        "CMS integration",
        "Advanced SEO setup",
        "Analytics integration",
        "Contact & booking forms",
        "3 months support & maintenance",
        "Performance optimization",
      ],
    },
    {
      id: 3,
      title: "E-Commerce",
      price: 4999,
      features: [
        "Full e-commerce platform",
        "Unlimited products",
        "Payment gateway integration",
        "Inventory management",
        "Customer accounts",
        "Advanced analytics",
        "Marketing integrations",
        "6 months support & training",
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
              subtitle="Digital Solutions"
              title="Web Design & Development"
              introText="Custom, responsive websites built to inspire action and drive growth. From landing pages to full-scale web applications, we create digital experiences that convert visitors into customers."
              mainDescription="Our web solutions combine stunning design with powerful functionality to help your business thrive online."
              features={[
                "Custom responsive web design",
                "Mobile-first development approach",
                "SEO optimization & performance tuning",
                "CMS integration (WordPress, Webflow, custom)",
                "E-commerce solutions",
                "Ongoing maintenance & support",
              ]}
              detailSections={[
                {
                  title: "Design That Converts",
                  description: "We create websites that don't just look beautiful—they're designed with conversion in mind. Every element is strategically placed to guide visitors through their journey and encourage them to take action."
                },
                {
                  title: "Built for Growth",
                  description: "Our websites are built on modern, scalable frameworks that grow with your business. Fast loading times, mobile optimization, and clean code ensure your site performs at its best while being easy to maintain and update."
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
              ctaTitle="Ready to Launch Your Website?"
              ctaText="Let's build a website that showcases your brand, engages your audience, and drives measurable results for your business."
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

export default WebDesignDevelopmentPage;
