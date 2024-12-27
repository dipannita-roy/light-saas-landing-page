"use client";
import ArrowRight from "@/assets/ArrowRight";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!sectionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#imgae", {
      scale: 1,
      keyframes: {
        y: [150, -100],
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    })
  }, []);
  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up today</h2>
          <p className="section-paragraph mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            id="imgae"
            className="scale-50 pointer-events-none hidden md:block absolute -left-[350px] -top-[137px]"
            src={starImage}
            alt="Star Icon"
            height={360}
            width={360}
          />
          <Image
            id="imgae"
            className="scale-50 pointer-events-none hidden md:block absolute -right-[331px] -top-[19px]"
            src={springImage}
            alt="Spring Icon"
            height={360}
            width={360}
          />
        </div>
        <div className="flex gap-8 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
