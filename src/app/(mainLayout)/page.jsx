import About from "@/components/MainLayouts/home/About";
import ExpandableCards from "@/components/MainLayouts/home/ExpandableCards";
import Hero from "@/components/MainLayouts/home/Hero";
import WeOffer from "@/components/MainLayouts/home/WeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WeOffer />
      <ExpandableCards />
    </>
  );
}
