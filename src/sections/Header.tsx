"use client";
import ArrowRight from "@/assets/ArrowRight";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
export const Navbar = () => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    if (!mobileMenuRef.current) return;
    if (isOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isOpen]);
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-3 items-center">
          <p className="text-white/60 hidden md:block">
            Streamline your workflow and boost your productivity.
          </p>
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className={clsx("p-5", isOpen && "border-b-2 border-white/10")}> 
        <div className="container">
          <div className="flex items-center justify-between">
            <Image className="pointer-events-none" src={Logo} alt="Saas Logo" height={40} width={40} />
            <div className="md:hidden">
              <Image
                onClick={() => setIsOpen((c) => !c)}
                className="h-5 w-5 cursor-pointer"
                src={MenuIcon}
                alt="Menu Icon"
                height={20}
                width={20}
              />
            </div>
            <nav className="hidden md:flex md:items-center gap-6 text-black/60">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="btn btn-primary">Get for free</button>
            </nav>
          </div>
          <nav
            ref={mobileMenuRef}
            className="flex md:hidden flex-col justify-center items-center gap-2 text-black/60 h-0 overflow-hidden z-30"
          >
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="btn btn-primary">Get for free</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
