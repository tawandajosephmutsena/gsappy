import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo-white.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about-us">About Us</Link></li>
                      <li><Link href="/digital-products">Digital Products</Link></li>
                      <li><Link href="/service">Our Services</Link></li>
                      <li><Link href="/portfolio-standard">Portfolio</Link></li>
                      <li><Link href="/blog-modern">Blog</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Drop us a line say Hi! <br />
                    We would love to hear from you
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} RVM Studio <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="https://www.google.com/maps/place/Goodna+QLD+4300/@-27.6116,152.8986,13z"
                      target="_blank">Goodna, Brisbane, QLD, Australia, 4300</a>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>P: <a href="tel:+61493031463">+61 493 031 463</a></span>
                    <span>E: <a href="mailto:real@rvmstudio.org">real@rvmstudio.org</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <a href="https://instagram.com/RealValeryManyuchi" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://tiktok.com/@rvm_studio" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a>
                    <a href="https://www.youtube.com/@rvmstudio" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a>
                    <a href="https://www.facebook.com/rvmstudio" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
