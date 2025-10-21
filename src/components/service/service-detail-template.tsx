import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  subtitle: string;
  title: string;
  introText: string;
  mainDescription: string;
  features: string[];
  detailSections: ServiceFeature[];
  mainImage: StaticImageData | string;
  smallImages: (StaticImageData | string)[];
  categoryLinks: string[];
  ctaTitle: string;
  ctaText: string;
}

export default function ServiceDetailTemplate({
  subtitle,
  title,
  introText,
  mainDescription,
  features,
  detailSections,
  mainImage,
  smallImages,
  categoryLinks,
  ctaTitle,
  ctaText,
}: ServiceDetailProps) {
  return (
    <div className="service-details__area service-details__space pt-200 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__title-box mb-40">
              <span className="service-details__subtitle tp-char-animation">
                {subtitle}
              </span>
              <h4 className="sv-hero-title tp-char-animation">
                {title}
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="offset-xl-4 col-xl-5">
              <div className="service-details__banner-text mb-80">
                <p className="mb-30 tp_title_anim">
                  {introText}
                </p>
                <p className="tp_title_anim">
                  {mainDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="service-details__tab-wrapper text-center mb-120">
              <div className="service-details__tab-thumb">
                <Image
                  data-speed="0.4"
                  src={mainImage}
                  alt="service-img"
                  style={{ height: "auto" }}
                  width={1200}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="service-details__left-wrap">
              <div className="service-details__left-text pb-20">
                {detailSections.map((section, index) => (
                  <p key={index} className={index === 0 ? "text-1 tp_title_anim" : ""}>
                    {section.description}
                  </p>
                ))}
              </div>
              <div className="service-details__fea-list">
                <ul>
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-details__sm-thumb-wrap mb-60">
                <div className="row">
                  {smallImages.slice(0, 2).map((img, index) => (
                    <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-20">
                      <div className="service-details__sm-thumb">
                        <Image
                          src={img}
                          alt="service-img"
                          style={{ height: "auto" }}
                          width={500}
                          height={400}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="service-details__right-wrap fix p-relative">
              <div className="service-details__rotate-text">
                <span>Full list of services</span>
              </div>
              <div className="service-details__right-category">
                {categoryLinks.map((link, index) => (
                  <a key={index} href={`/service/${link.toLowerCase().replace(/ /g, '-')}`}>
                    {link}
                  </a>
                ))}
              </div>
              <div className="service-details__right-text-box">
                <h4>{ctaTitle}</h4>
                <p className="mb-20">{ctaText}</p>
                <Link className="tp-btn-white background-black" href="/contact">
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
