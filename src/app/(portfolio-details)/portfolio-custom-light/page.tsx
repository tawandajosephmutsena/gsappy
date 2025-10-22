import React from "react";
import { Metadata } from "next";
import PortfolioDetailsCustomLightMain from "@/pages/portfolio/details/portfolio-custom-light-main";


export const metadata: Metadata = {
  title: "RVM Studio - Portfolio Details Custom Light page",
};

const PortfolioDetailsCustomLightPage = () => {
  return (
    <PortfolioDetailsCustomLightMain/>
  );
};

export default PortfolioDetailsCustomLightPage;
