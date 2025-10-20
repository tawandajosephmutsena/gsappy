import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "Liko - Photography Service Details",
};

const PhotographyServicePage = () => {
  return <ServiceDetailsMain />;
};

export default PhotographyServicePage;
