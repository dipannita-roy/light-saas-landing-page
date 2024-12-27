"use client";
import ArrowRight from "@/assets/ArrowRight";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const cogImageRef = useRef<HTMLImageElement>(null);
  const cylinderImageRef = useRef<HTMLImageElement>(null);
  const noodleImageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    if (!cogImageRef.current || !heroRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(cogImageRef.current, {
      keyframes: {
        y: [-30, 30, -30],
      },
      duration: 6,
      repeat: -1,
    });
    gsap.to([cylinderImageRef.current, noodleImageRef.current], {
      y: -150,
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 10%",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])
  return (
    <section ref={heroRef} className="pt-8 md:pt-5 pb-20 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">
              Version 2.0 is here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Pathway to productivity
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="h-5 w-5 inline-flex justify-center items-center" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 relative md:h-[648px] md:flex-1">
            <Image
              ref={cogImageRef}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0 pointer-events-none -translate-y-[30px]"
              src={cogImage}
              alt="cog"
            />
            <Image
              ref={cylinderImageRef}
              className="hidden md:block -top-8 -left-32 md:absolute pointer-events-none"
              src={cylinderImage}
              alt="cylinder"
              height={220}
              width={220}
            />
            <Image
              ref={noodleImageRef}
              className="hidden md:block top-[524px] left-[448px] md:absolute rotate-[30deg] pointer-events-none"
              src={noodleImage}
              alt="noodle"
              height={220}
              width={220}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
