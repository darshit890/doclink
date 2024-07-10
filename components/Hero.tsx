import React from "react";
import RetroGrid from "@/components/magicui/retro-grid";
import { ContainerScroll } from "./globalui/container-scroll-animation";

const Hero = () => {
  return (
    <div className="relative flex h-[140vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl ">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center pb-12">
            <h1 className="small-heading text-3xl font-semibold">
              Meet Doclink
            </h1>
            <h4 className="text-5xl font-bold pt-1">
              Your cutting-edge SaaS solutions
            </h4>
            <p className="text-xl text-muted-foreground max-w-4xl text-center pt-4 font-medium">
              Harness the power of Framer to effortlessly create website with
              our SaaS framer template and create better websites to your
              customers.
            </p>
            <div className="flex flex-row gap-x-5 pt-5 ">
              <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-blue/90 px-8 py-2 bg-blue rounded-md text-white font-light transition duration-200 ease-linear">
                Get Started
              </button>
            </div>
          </div>
        }
      />

      <RetroGrid />
    </div>
  );
};

export default Hero;
