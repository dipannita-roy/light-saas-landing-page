"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logos = [
  {
    name: "Acme",
    logo: acmeLogo,
  },
  {
    name: "Quantum",
    logo: quantumLogo,
  },
  {
    name: "Echo",
    logo: echoLogo,
  },
  {
    name: "Celestial",
    logo: celestialLogo,
  },
  {
    name: "Pulse",
    logo: pulseLogo,
  },
  {
    name: "Apex",
    logo: apexLogo,
  },
];

export const LogoTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
      },
    });
    tl.to(containerRef.current, {
      xPercent: -50,
      duration: 17,
    });
  }, []);
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] md:flex-row">
          <div
            ref={containerRef}
            className="flex gap-14 items-center flex-none pr-14"
          >
            {logos.map((logo) => (
              <Image
                className="logo-ticker-image pointer-events-none"
                key={logo.name}
                src={logo.logo}
                alt={logo.name}
              />
            ))}
            {logos.map((logo) => (
              <Image
                className="logo-ticker-image pointer-events-none"
                key={logo.name}
                src={logo.logo}
                alt={logo.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
