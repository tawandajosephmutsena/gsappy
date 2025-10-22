import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "RVM Studio - Social Media Service Details",
};

const SocialMediaServicePage = () => {
  return <ServiceDetailsMain />;
};

export default SocialMediaServicePage;
