import React from 'react';
import { Metadata } from 'next';
import HomeNineMain from '@/pages/homes/home-9';

export const metadata: Metadata = {
  title: "RVM Studio - Home Nine Page",
};

const HomePageNine = () => {
  return (
    <HomeNineMain/>
  );
};

export default HomePageNine;