import React from "react";
import { UpArrow } from "../svg";
import Link from "next/link";

interface PricingTier {
  id: number;
  title: string;
  price: number | string;
  features: string[];
  featured?: boolean;
}

interface ServicePricingProps {
  tiers: PricingTier[];
}

export default function ServicePricing({ tiers }: ServicePricingProps) {
  return (
    <div className="tp-price-area pt-120 pb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-12 text-center">
            <h3 className="tp-section-title">Choose Your Plan</h3>
            <p>Select the perfect package for your needs</p>
          </div>
        </div>
        <div className="row">
          {tiers.map((tier) => (
            <div key={tier.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div
                className={`tp-price-item ${tier.featured ? "active" : ""}`}
                style={{
                  backgroundImage: tier.featured ? `url(/assets/img/price/price-bg-2.jpg)` : "",
                }}
              >
                <div
                  className="tp-price-head"
                  style={{
                    backgroundImage: !tier.featured ? `url(/assets/img/price/price-bg-${tier.id}.jpg)` : "",
                  }}
                >
                  <span>#{tier.id}</span>
                  <h5>{tier.title}</h5>
                </div>
                <div className="tp-price-body">
                  <span className="tp-price-monthly">
                    {typeof tier.price === 'number' ? (
                      <>
                        $<i>{tier.price}</i>/ per mo
                      </>
                    ) : (
                      <i>{tier.price}</i>
                    )}
                  </span>
                  <div className="tp-price-list">
                    <ul>
                      {tier.features.map((feature, i) => (
                        <li key={i}>
                          <i className="fa-sharp fa-light fa-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    className={`tp-btn-black-md ${tier.featured ? "white-bg" : ""} w-100 text-center`}
                    href="/contact"
                  >
                    Choose Plan
                    <span>
                      <UpArrow />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
