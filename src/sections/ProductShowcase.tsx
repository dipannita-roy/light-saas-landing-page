"use client"
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pyramidImageRef = useRef<HTMLImageElement>(null);
  const tubeImageRef = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    if (!sectionRef.current || !pyramidImageRef.current || !tubeImageRef.current) return;
    gsap.registerPlugin(ScrollTrigger );
    gsap.to([pyramidImageRef.current, tubeImageRef.current], {
      keyframes: {
        y: [150, -150],
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }, [])
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex items-center justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track your progress
          </h2>
          <p className="section-paragraph mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image className="pointer-events-none mt-10" src={productImage} alt="Product Image" />
          <Image ref={pyramidImageRef} className="pointer-events-none hidden md:block absolute -right-36 -top-32" height={262} width={262} src={pyramidImage} alt="Pyramid Image" /> 
          <Image ref={tubeImageRef} className="pointer-events-none hidden md:block absolute -left-36 bottom-24" height={248} width={248} src={tubeImage} alt="Tube Image" />
        </div>                                              
      </div>
    </section>
  );
};

export default ProductShowcase;
