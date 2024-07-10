import Faq from "@/components/Faq";
import { Bento1 } from "@/components/globalui/Bento1";
import { Bento2 } from "@/components/globalui/Bento2";
import { Bento3 } from "@/components/globalui/Bento3";
import { InfiniteMovingCards } from "@/components/globalui/infinite-moving-cards";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() { 
  return (
    <>
    <Hero />
    <Bento1 />
    <Bento2 />
    <Bento3 />
    <Pricing />
    <Faq />
    </>
  );
}
