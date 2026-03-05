"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function Head() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Column normal
      gsap.fromTo(
        ".scroll-row",
        { x: 0 },
        {
          x: -300,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Column reverse
      gsap.fromTo(
        ".scroll-row-reverse",
        { x: 0 },
        {
          x: 300,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // مهم بزاف فـ Next
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/head/screen.svg')" }}
      />

      {/* Foreground image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/head/screen1.png"
          alt="Foreground"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center pt-24 space-y-6 px-6">

        {/* Logo */}
        <Image
          src="/head/logo.svg"
          alt="Logo"
          width={120}
          height={120}
        />

        {/* Headline */}
        <div className="text-center">
          <h2 className="text-black text-4xl font-semibold">
            Clean and Modern Services for
          </h2>
          <h2 className="text-black text-4xl font-semibold">
            Elevating Products, SaaS & Businesses
          </h2>
        </div>

        {/* Scroll Section */}
        <div
          ref={sectionRef}
          className="w-screen px-[100px] mt-16"
        >
          <div className="bg-[#F8F8F8] w-full h-[600px] rounded-[30px] overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex gap-6 rotate-[55deg] scale-110">

                {/* Column 1 */}
                <div className="space-y-6 scroll-row">
                  <img src="/images/img1.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                  <img src="/images/img2.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                  <img src="/images/img3.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                </div>

                {/* Column 2 */}
                <div className="space-y-6 scroll-row-reverse">
                  <img src="/images/img4.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                  <img src="/images/img5.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                  <img src="/images/img6.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                </div>

                {/* Column 3 */}
                <div className="space-y-6 scroll-row">
                  <img src="/images/img7.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                  <img src="/images/img8.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                  <img src="/images/img9.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}