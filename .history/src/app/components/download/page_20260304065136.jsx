"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Download() {
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
                <button className=" flex gap-1 bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img src="download/mac.svg" alt="" />

                </button>
                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img src="download/win.svg" alt="" />

                </button>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-auto">
              <img 
                className="w-full  mt-[43px]  md:max-w-[400px] lg:max-w-full h-auto object-contain z-10" 
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
                <button className=" flex gap-1 bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img src="download/mac.svg" alt="" />
                </button>
                <button className="bg-[#666666] hover:bg-[#777777] transition-colors rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8 lg:mt-auto">
              <img 
                className="w-full  md:max-w-[400px] lg:max-w-full h-auto object-contain" 
                src="download/appmobile.png" 
                alt="Mobile App" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}