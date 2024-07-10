import { FaLocationArrow } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { LinkedinIcon } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Feature", link: "#feature" },
    { name: "Process", link: '#process'},
    { name: "Benefits", link: '#benefits'},
    { name: "Pricing", link: "#pricing" },
    { name: 'FAQs', link: "#faq"},
  ];
  return (
    <footer className="mt-20 mx-auto  pt-10 pb-10 border px-5 rounded-xl min-h-[30vh] mb-5   dark:bg-black-100 bg-white  dark:bg-dot-black/[0.2] bg-dot-black/[1] relative flex justify-center" id="contact">
      <div className="absolute pointer-events-none  inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <div className="flex flex-col md:flex-row gap-x-20 lg:gap-x-52 gap-y-10">
        <div className="flex flex-col justify-center items-center gap-y-2 ml-10">
            <h1 className="text-2xl font-semibold ">AI <span className="text-blue">LOGO</span></h1>
            <p className=" text-md lg:text-lg text-gray-400 text-center">Empowering Businesses with Data-Driven Insights</p>
            <button className="rounded-xl px-5 py-2 bg-cyan">Get Started</button>
        </div>
        <div className="flex flex-col gap-y-10">
        <div className="flex flex-row items-center sm:gap-x-5 gap-x-2 justify-center">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              {/* add !cursor-pointer */}
              {/* remove hidden sm:block for the mobile responsive */}
              <span className=" sm:text-sm text-xs !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
          </div>
          <div className="flex basis-full flex-col p-4 tracking-tight  rounded-2xl text-slate-100/50 sm:basis-1/2  h-[20rem] bg-black-200 max-w-full w-[20rem]  items-center mx-auto gap-y-3 border border-gray-700 ">
            <h1 className="text-cyan text-xl font-semibold">Get in touch</h1>
            <p className="text-sm">info@gmal.com</p>
            <div className="flex flex-row gap-x-5 items-center">
              <BsTwitterX className="h-4 w-4"/>
              <BsInstagram className="h-4 w-4"/>
              <LiaLinkedin className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;