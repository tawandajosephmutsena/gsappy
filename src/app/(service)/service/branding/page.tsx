import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "RVM Studio - Branding Service Details",
};

const BrandingServicePage = () => {
  return <ServiceDetailsMain />;
};

export default BrandingServicePage;
