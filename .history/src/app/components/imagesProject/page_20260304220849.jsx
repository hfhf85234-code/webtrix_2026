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






            <div className="relative w-full h-full px-1 p-1">
  <img className="absolute top-0 left-0 rounded-[10px] z-10" src="/imagesProject/img1.jpg" alt="project1" />
  <img className="absolute top-5 left-0 rounded-[10px] z-20" src="/imagesProject/img2.jpg" alt="project2" />
  <img className="absolute top-10 left-0 rounded-[10px] z-30" src="/imagesProject/img3.jpg" alt="project4" />
  <img className="absolute top-15 left-0 rounded-[10px] z-40" src="/imagesProject/img4.jpg" alt="project5" />
  <img className="absolute top-20 left-0 rounded-[10px] z-50" src="/imagesProject/img5.jpg" alt="project6" />
  <img className="absolute top-25 left-0 rounded-[10px] z-60" src="/imagesProject/img6.jpg" alt="project7" />
  <img className="absolute top-30 left-0 rounded-[10px] z-70" src="/imagesProject/img7.jpg" alt="project8" />
</div>
            <div className=" flex justify-end w-full h-full px-1 p-1">
                <div className="bg-black w-[265px] h-[678px]"></div>
            </div>

            </div>





            
        </div>
        
        
        
        </div>
  );
}