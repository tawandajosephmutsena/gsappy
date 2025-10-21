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

const ContentEmailMarketingPage = () => {
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
      price: 599,
      features: [
        "4 blog posts per month",
        "2 email campaigns",
        "Email template design",
        "Basic SEO optimization",
        "Content calendar",
        "Performance tracking",
      ],
    },
    {
      id: 2,
      title: "Professional",
      price: 1299,
      featured: true,
      features: [
        "8 blog posts per month",
        "4 email campaigns",
        "Newsletter management",
        "Lead magnet creation",
        "Advanced SEO strategy",
        "A/B testing",
        "Automation sequences",
        "Monthly performance reports",
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      price: 2799,
      features: [
        "16+ content pieces per month",
        "Unlimited email campaigns",
        "Full marketing automation",
        "Segmentation & personalization",
        "Content strategy & planning",
        "Ebooks & whitepapers",
        "Advanced analytics & attribution",
        "Dedicated content strategist",
        "Quarterly strategy reviews",
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
              subtitle="Digital Marketing"
              title="Content & Email Marketing"
              introText="Create, connect, and convert through engaging storytelling and direct outreach. Story-driven content that attracts, nurtures, and converts your ideal customers."
              mainDescription="We craft compelling content and strategic email campaigns that build relationships and drive sustainable business growth."
              features={[
                "Strategic content planning & creation",
                "SEO-optimized blog posts & articles",
                "Email campaign design & copywriting",
                "Marketing automation setup",
                "Lead nurturing sequences",
                "Performance analytics & optimization",
              ]}
              detailSections={[
                {
                  title: "Content That Connects",
                  description: "Great content doesn't just inform—it inspires action. We create valuable, engaging content that addresses your audience's pain points, answers their questions, and positions your brand as the trusted solution they've been searching for."
                },
                {
                  title: "Email Marketing That Converts",
                  description: "Email remains one of the highest-ROI marketing channels. We design and execute email campaigns that cut through the noise, deliver value to your subscribers, and guide them through the customer journey from awareness to advocacy."
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
              ctaTitle="Ready to Grow Through Content?"
              ctaText="Let's develop a content and email marketing strategy that attracts your ideal customers and builds lasting relationships that drive revenue."
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

export default ContentEmailMarketingPage;
