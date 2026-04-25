import About from "@/components/MainLayouts/home/About";
import ExpandableCards from "@/components/MainLayouts/home/ExpandableCards";
import Hero from "@/components/MainLayouts/home/Hero";
import Newsletter from "@/components/MainLayouts/home/Newsletter";
import OurTeam from "@/components/MainLayouts/home/OurTeam";
import Testimonials from "@/components/MainLayouts/home/Testimonials";
import Trusted from "@/components/MainLayouts/home/Trusted";
import WeOffer from "@/components/MainLayouts/home/WeOffer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WeOffer />
      <ExpandableCards />
      <Trusted />
      <OurTeam />
      <Testimonials />
      <Newsletter />
    </>
  );
}
