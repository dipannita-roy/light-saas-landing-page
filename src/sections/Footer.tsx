"use client";
import logo from "@/assets/logosaas.png";
import X from "@/assets/X";
import Insta from "@/assets/Insta";
import Pin from "@/assets/Pin";
import LinkedIn from "@/assets/LinkedIn";
import Youtube from "@/assets/Youtube";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:bottom-0 before:top-2 before:absolut before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1)]">
          <Image className="pointer-events-none relative" src={logo} alt="Saas Logo" height={40} width={40} />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <X className="text-white" />
          <Insta className="text-white" />
          <Pin className="text-white" />
          <LinkedIn className="text-white" />
          <Youtube className="text-white" />
        </div>
        <p className="mt-6">&copy; {currentYear} Trinity. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
