"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerThree from "@/components/hero-banner/hero-banner-three";
import DigitalProductsShowcase from "@/components/service/digital-products-showcase";
import LineTextTwo from "@/components/line-text/line-text-2";
import ProjectThree from "@/components/project/project-three";
import BrandTwo from "@/components/brand/brand-two";
import TeamTwo from "@/components/team/team-two";
import FooterFour from "@/layouts/footers/footer-four";
// animation
import { bounceAnimation, charAnimation, fadeAnimation, revelAnimationTwo } from "@/utils/title-animation";
import { serviceMarqueAnim } from "@/utils/scroll-marque";
import { panelTwoAnimation } from "@/utils/panel-animation";
import { hoverBtn } from "@/utils/hover-btn";

const DigitalProductsMain = () => {
  useScrollSmooth();
  
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      serviceMarqueAnim();
      panelTwoAnimation();
      revelAnimationTwo();
      hoverBtn();
      bounceAnimation();
    },100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              className="tp-overlay-bg black-bg-2"
              style={{
                backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
              }}
            >
              {/* hero area start */}
              <HeroBannerThree />
              {/* hero area end */}

              {/* about area start */}
              <div className="tp-about-4-area pt-100 pb-110 p-relative">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-md-10">
                      <div className="tp-about-4-title-box tp_fade_bottom">
                        <h4 className="tp-about-4-title">
                          RVM Studio in partnership with Reveal Studios offers full-spectrum agency support to meet your growing needs
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-xl-12">
                      <div className="tp-about-4-content-wrap">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="tp-about-4-content item-1 tp_fade_bottom">
                              <p>
                                Our powerhouse Reveal Studios offers website hosting services and caters 
                                for dynamic website development and SEO strategies. Together we provide 
                                comprehensive digital solutions for your business.
                              </p>
                              <a href="https://www.revealstudios.com.au/" target="_blank" rel="noopener noreferrer">
                                Visit Partner Website
                              </a>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="tp-about-4-content item-2 tp_fade_bottom">
                              <p>
                                From website builders to custom web design, professional email to VPS hosting, 
                                we offer everything you need to establish and grow your online presence.
                              </p>
                              <a href="/contact">Get in Touch</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* about area end */}
            </div>

            {/* products area start */}
            <DigitalProductsShowcase />
            {/* products area end */}

            {/* marquee text */}
            <LineTextTwo />
            {/* marquee text */}

       
          </main>

          {/* footer area */}
          <FooterFour />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default DigitalProductsMain;
