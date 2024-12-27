"use client";
import CheckIcon from "@/assets/CheckIcon";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#pricing-card", {
      opacity: 1,
      y: 0,
      transformOrigin: "top",
      ease: "back.inOut",
      duration: 1,
      scaleY: 1,
      stagger: .5,
      scrollTrigger: {
        trigger: containerRef.current,
        // toggleActions: "play none none reverse",
      },
    });
    gsap.to("#popular-span", {
      backgroundPositionX: "-100%",
      repeat: -1,
      duration: 3,
      delay: 0.5,
      yoyo: true,
    })
  }, [])
  return (
    <section ref={containerRef} className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-paragraph mt-5">
            Free forever. Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              inverse,
              popular,
              buttonText,
              features,
            }) => (
              <div
                key={title}
                id="pricing-card"
                className={clsx(
                  "card opacity-0 translate-y-16 scale-y-0",
                  inverse && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={clsx(
                      "text-lg font-bold text-black/50",
                      inverse ? "text-white/50" : "text-black/50"
                    )}
                  >
                    {title}
                  </h3>
                  {popular && (
                    <div className="inline-flex justify-center items-center text-sm px-4 rounded-xl border border-white/20">
                      <span id="popular-span" className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:300%] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tight font-bold text-black/50">
                    /month
                  </span>
                </div>
                <button
                  className={clsx(
                    "btn btn-primary w-full mt-[30px]",
                    inverse && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
