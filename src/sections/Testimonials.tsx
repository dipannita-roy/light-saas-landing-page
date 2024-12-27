"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

function TestimonialsColumn({
  testimonial,
  animDuration,
  className,
}: {
  testimonial: typeof testimonials;
  animDuration?: number;
  className?: string;
}) {
  const testimonialRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!testimonialRef.current) return;
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
      },
    })
    // tl.set(testimonialRef.current, { yPercent: -50 })
    tl.to(testimonialRef.current, {
      yPercent: -50,
      duration: animDuration || 10,
    })
  }, [])
  return (
    <div className={className}>
      <div ref={testimonialRef} className="flex flex-col items-center gap-6 pb-6">
        {Array.from({ length: 2 }).map((_, i) => (
          <React.Fragment key={i}>
            {testimonial.map(({ text, imageSrc, name, username }) => (
              <div key={name} className={clsx("card items-center")}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="tracking-tight leading-5 text-black/50">
                      {username}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export const Testimonials = () => {
  return (
    <section className="bg-white overflow-clip">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <div className="section-heading">
          <h2 className="section-title">What our users say</h2>
          <p className="section-paragraph">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] mt-10 h-[70vh]">
          <TestimonialsColumn testimonial={firstCol} animDuration={15} />
          <TestimonialsColumn
            testimonial={secondCol}
            className="hidden md:block"
            animDuration={19}
          />
          <TestimonialsColumn
            testimonial={thirdCol}
            className="hidden lg:block"
            animDuration={17}
          />
        </div>
      </div>
    </section>
  );
};
