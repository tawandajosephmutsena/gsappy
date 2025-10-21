import React from "react";

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

export default function DigitalProductsShowcase() {
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-3-title-box mb-60">
              <h4 className="tp-section-title-90 tp_fade_bottom">
                Our Digital Products & Services
              </h4>
            </div>
          </div>
        </div>

        {products_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-2 col-lg-2 col-md-12">
                <div className="tp-service-3-icon-box">
                  <span style={{ fontSize: "48px" }}>{item.icon}</span>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    {item.title}
                  </h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="tp-service-3-content">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
