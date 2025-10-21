'use client';
import React from "react";
import { SwiperOptions } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

// products data
const products_data = [
  {
    id: 1,
    title: "Website Builder Personal",
    description: "Create an online presence for your business with our Website Builder Personal. Website hosting, Security (SSL), 24/7 support included.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Website Builder Online Store",
    description: "Sell products & services with our Website Builder Online Store website templates. Website hosting, Security (SSL), 24/7 support & so much more.",
    icon: "🛒",
  },
  {
    id: 3,
    title: "Custom Web Design",
    description: "We offer custom web design packages, SEO-optimised, mobile-friendly sites, with eCommerce, 1-year domain, 24/7 support, and CRM integration.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Professional Email & Office",
    description: "Look like a world-class business with professional email and Office apps that help you save time and be more productive.",
    icon: "📧",
  },
  {
    id: 5,
    title: "Email Marketing",
    description: "Our Email Marketing Beginner package is perfect for newcomers, while our advanced options cater to savvy marketers with growing mailing lists.",
    icon: "📊",
  },
  {
    id: 6,
    title: "VPS Hosting",
    description: "Ultra-fast speed of a Virtual Private Server with a super simple control panel — a perfect fit for those who don't have tech skills but still need powerful hosting.",
    icon: "⚡",
  },
  {
    id: 7,
    title: "Domain Services",
    description: "Direct any domain name you own to your website. Anyone who types that domain name into their browser is taken directly to your website.",
    icon: "🌍",
  },
  {
    id: 8,
    title: "Website Security",
    description: "Protect your site and keep customers safe. Your comprehensive and simplified security solution. From SSL certificates to full constant website backups.",
    icon: "🔒",
  },
];

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 4,
  loop: true,
  autoplay: false,
  spaceBetween: 60,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};

export default function DigitalProductsShowcase() {
  return (
    <div
      className="tp-service-4-area pt-120 pb-170 fix"
      data-background="assets/img/home-04/brand/overly.png"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="tp-service-4-title-wrap">
          <div className="row align-items-end">
            <div className="col-xl-12">
              <div className="tp-service-4-title-box tp_fade_bottom">
                <h4 className="tp-service-4-title">
                  Our Digital Products & Services
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-service-4-wrap">
        <Swiper
          {...slider_setting}
          className="swiper-container tp-service-4-slider-active"
        >
          {products_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="tp-service-4-item"
                style={{
                  backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
                }}
              >
                <div className="tp-service-4-icon" style={{ fontSize: "48px" }}>
                  {item.icon}
                </div>
                <div className="tp-service-4-content">
                  <h4 className="tp-service-4-title-sm">
                    {item.title}
                  </h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
