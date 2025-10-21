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

const SocialMediaManagementPage = () => {
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
      price: 699,
      features: [
        "2 social media platforms",
        "12 posts per month",
        "Basic content calendar",
        "Community management",
        "Monthly analytics report",
      ],
    },
    {
      id: 2,
      title: "Growth",
      price: 1499,
      featured: true,
      features: [
        "4 social media platforms",
        "24 posts per month",
        "Advanced content strategy",
        "Daily community management",
        "Paid ad management (up to $1000 spend)",
        "Weekly analytics & insights",
        "Monthly strategy calls",
        "Custom graphics & content",
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      price: 2999,
      features: [
        "All major platforms",
        "40+ posts per month",
        "Comprehensive social strategy",
        "24/7 community management",
        "Multi-channel ad campaigns",
        "Influencer outreach",
        "Real-time analytics dashboard",
        "Bi-weekly strategy sessions",
        "Dedicated account manager",
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
              title="Social Media Management"
              introText="Strategic content and platform management to amplify your brand. Build meaningful connections with your audience through consistent, engaging social media presence."
              mainDescription="We handle everything from content creation to community management, helping you build and nurture your online community."
              features={[
                "Multi-platform content strategy",
                "Content creation & curation",
                "Social media scheduling & posting",
                "Community engagement & management",
                "Paid social advertising campaigns",
                "Analytics & performance reporting",
              ]}
              detailSections={[
                {
                  title: "Strategic Social Presence",
                  description: "Social media is more than just posting—it's about building relationships. We develop comprehensive strategies that align with your business goals, create engaging content that resonates with your audience, and foster genuine connections that drive results."
                },
                {
                  title: "Data-Driven Growth",
                  description: "Our approach combines creativity with analytics. We continuously monitor performance, analyze engagement patterns, and optimize your social media strategy to maximize reach, engagement, and conversions across all platforms."
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
              ctaTitle="Ready to Grow Your Social Presence?"
              ctaText="Let's create a powerful social media strategy that builds your brand, engages your audience, and drives meaningful business results."
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

export default SocialMediaManagementPage;
