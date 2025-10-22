import React from "react";
import { Metadata } from "next";
import ServiceDetailsMain from "@/pages/service/service-details";

export const metadata: Metadata = {
  title: "RVM Studio - Webdesign Service Details",
};

const WebdesignServicePage = () => {
  return <ServiceDetailsMain />;
};

export default WebdesignServicePage;
