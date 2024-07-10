import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "lucide-react";
import ShimmerButton from "./magicui/shimmer-button";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 glassmorphism z-[100] flex items-center border-b justify-between">
      <aside className="flex items-center gap-[2px]">
        <Image src={'/logo.svg'} alt="logo" height={50} width={50} />
        <p className="text-3xl font-bold"><span className="text-blue">DOC</span>LINK</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#" className="hover:text-blue/90">Products</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue/90">Pricing</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue/90">Clients</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue/90">Resources</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue/90">Documentation</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-blue/90">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <ShimmerButton className="shadow-2xl">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                Get Started
            </span>
          </ShimmerButton>
        </Link>
      </aside>
    </header>
  );
};

export default Navbar;
