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

const PhotographyVisualContentPage = () => {
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
      title: "Starter Package",
      price: "Custom",
      features: [
        "Basic photography session",
        "Professional photo editing",
        "High-resolution digital files",
        "Online gallery access",
        "Commercial usage rights",
      ],
    },
    {
      id: 2,
      title: "Deluxe Duo Package",
      price: "Get Quote",
      featured: true,
      features: [
        "2 hours combined photography & videography",
        "75 lightly edited photographs",
        "25 fully edited photographs",
        "1-minute highlight video",
        "Professional editing & color grading",
        "Online gallery & download access",
        "Full commercial usage rights",
      ],
    },
    {
      id: 3,
      title: "Platinum Pro Package",
      price: "Get Quote",
      features: [
        "3 hours combined photography & videography",
        "100 lightly edited photographs",
        "50 fully edited photographs",
        "2-minute highlight video",
        "Premium editing & color grading",
        "Multiple locations/setups included",
        "Priority delivery & support",
        "Full commercial usage rights",
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
              title="Photography. Invest in your brand's authenticity."
              introText="We believe that authenticity is key to building a strong brand. Our photography and videography services capture the true essence of your brand, ensuring that your visual content resonates with your audience and stands out in the crowded marketplace."
              mainDescription="Invest in authentic brand representation through impactful photography and videography. These are among the most effective tools in graphic design, vital for elevating brand awareness and engagement."
              features={[
                "Photography and Videography services",
                "Authentic brand representation",
                "High-quality visual content creation",
                "Marketing materials & website content",
                "Social media visual content",
                "Professional editing & post-production",
              ]}
              detailSections={[
                {
                  title: "Authentic Brand Representation",
                  description: "We believe that authenticity is key to building a strong brand. Our photography and videography services capture the true essence of your brand, ensuring that your visual content resonates with your audience and stands out in the crowded marketplace."
                },
                {
                  title: "Effective Tools in Graphic Design",
                  description: "Photography and videography are among the most effective tools in graphic design. They play a crucial role in conveying your brand's message, values, and personality. By investing in high-quality visual content, you can enhance your marketing materials, website, social media, and more."
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
              ctaTitle="Capture Every Angle"
              ctaText="Make your brand unforgettable with our premium photography and videography packages. Let's create stunning visual content that tells your brand story."
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

export default PhotographyVisualContentPage;
