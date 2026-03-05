"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Download() {

const statsRef = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const ctx = gsap.context(() => {
    const counters = gsap.utils.toArray(".counter");

    counters.forEach((counter) => {
      const text = counter.innerText.trim();

      // نقسم كل رقم ل span
      counter.innerHTML = text
        .split("")
        .map((char) => `<span class="digit inline-block">${char}</span>`)
        .join("");

      const digits = counter.querySelectorAll(".digit");

      gsap.from(digits, {
        yPercent: 120,
        opacity: 0,
        duration: 2.2,
        stagger: 0.05,
        ease: "expo.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          toggleActions: "restart none restart none",
        },
      });
    });
  }, statsRef);

  return () => ctx.revert();
}, []);
  return (
    <div className="w-screen min-h-screen bg-white p-[10px]">

      <div className="flex flex-col lg:flex-row gap-[10px] h-full">

        {/* Première carte */}
        <div className="bg-radial-[at_50%_-38%] from-white to-neutral-900 to-82% w-full h-auto lg:h-full rounded-[32px] px-[20px] md:px-[35px] py-[35px] overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="space-y-[10px]">
              <h1 className="text-white text-[24px] md:text-[28px] lg:text-[31.34px] leading-tight">
                Systems, Saas, Apps Desktop
              </h1>
              <p className="text-[#B3B3B3] w-full max-w-[442.84px] text-[16px] md:text-[18px]">
                Get the desktop app for SAP's comprehensive project management tools
              </p>

              <div className="flex flex-wrap gap-[10px] mt-[10px]">
                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/mac.svg" alt="" />
                </button>

                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/win.svg" alt="" />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end mt-8 lg:mt-auto">
              <img
                className="w-full mt-[43px] md:max-w-[400px] lg:max-w-full h-auto object-contain z-10"
                src="download/saas.png"
                alt="SaaS Desktop App"
              />
            </div>
          </div>
        </div>

        {/* Deuxième carte */}
        <div className="bg-radial-[at_50%_-38%] from-white to-neutral-900 to-82% w-full h-auto lg:h-full rounded-[32px] px-[20px] md:px-[35px] py-[35px] overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="space-y-[10px]">
              <h1 className="text-white text-[24px] md:text-[28px] lg:text-[31.34px] leading-tight">
                Jeux, Apps Mobile
              </h1>
              <p className="text-[#B3B3B3] w-full max-w-[541.26px] text-[16px] md:text-[18px]">
                Download the ultimate mobile app for SAP's project management on-the-go.
              </p>

              <div className="flex flex-wrap gap-[10px] mt-[10px]">
                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/and.svg" alt="" />
                </button>

                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/mac.svg" alt="" />
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8 lg:mt-auto">
              <img
                className="w-full md:max-w-[400px] lg:max-w-full h-auto object-contain"
                src="download/appmobile.png"
                alt="Mobile App"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Stats Section */}
      <div
        ref={statsRef}
        className="w-full h-full px-[20px] py-[30px] md:px-[70px] md:py-[40px]"
      >

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] justify-center">

          {/* Card 1 */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px]">
            <img className="w-[35px] md:w-auto" src="download/icon1.svg" alt="" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121]">300M+</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Total views generated
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px]">
            <img className="w-[35px] md:w-auto" src="download/icon2.svg" alt="" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121]">20%</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Audience growth
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px]">
            <img className="w-[35px] md:w-auto" src="download/icon3.svg" alt="" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121]">49%</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Growth in revenue
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px]">
            <img className="w-[35px] md:w-auto" src="download/icon4.svg" alt="" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121]">500K+</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Creator & agencies
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}