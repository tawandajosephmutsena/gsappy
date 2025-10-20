import { Metadata } from "next";
import HomePageFour from "./(homes)/home-4/page";

export const metadata: Metadata = {
  title: "Liko - Home Page",
};

export default function Home() {
  return (
    <>
      <HomePageFour />
    </>
  );
}
