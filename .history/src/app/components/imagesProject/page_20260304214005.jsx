"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImagesProject() {
 

  return (
    <div className="w-screen min-h-screen bg-white px-4 md:px-16 lg:px-24 p-[10px]">
        <div className="bg-[#8CEF6C] w-full h-full rounded-[24px] px-[40px] p-[40px] ">

            <div className="flex gap-1">

            <div className="w-full h-full px-1 p-1">
                <div className=" space-y-1">
                    <h1 className=" w-[234px] text-[#2B2D2D] text-[28px]">Real-time transactions
with business insights</h1>

                    <p className=" w-[230px] text-[#666666] text-[16px]">Automated expense tracking, instant
reconciliation, and detailed analytics.</p>
                </div>
            </div>






            <div className="w-full h-full px-1 p-1">
            <img className=" z-1  h-full" src="/imagesProject/img1.jpg" alt="project1" />
            <img className="  z-2  h-full" src="/imagesProject/img1.jpg" alt="project1" />
            <img className=" z-3  h-full" src="/imagesProject/img1.jpg" alt="project1" />
            <img className=" z-4  h-full" src="/imagesProject/img1.jpg" alt="project1" />
            <img className=" z-5  h-full" src="/imagesProject/img1.jpg" alt="project1" />
            <img className=" z-6  h-full" src="/imagesProject/img1.jpg" alt="project1" />
            </div>
            <div className="w-full h-full px-1 p-1"></div>

            </div>





            
        </div>
        
        
        
        </div>
  );
}