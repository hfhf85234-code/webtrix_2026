"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Download() {


  return (
   <div className="w-screen h-screen px-[10px] p-[10px]">

     <div className="flex gap-[10px]">
     {/* 111 */}

     <div className="bg-radial-[at_50%_-38%] from-white to-neutral-900 to 82%  w-full h-full rounded-[32px]  px-[35px] p-[35px] overflow-hidden  ">
       <div className=" flex justify-start">
         <div className="space-y-[10px]">
         <h1 className="text-white text-[31.34px]">Systems, Saas, Apps Desktop</h1>
         <p className="text-[#B3B3B3]  w-[442.84px] text-[18px]">SGet the desktop app for SAP's comprehensive project 
management tools</p>

<div className="flex gap-[10px] mt-[10px]">
<button className="bg-[#666666] rounded-[10px] text-white shadow text-[16px] py-4 p-4">Download For</button>
<button className="bg-[#666666] rounded-[10px] text-white shadow text-[16px] py-4 p-4">Download For</button>
</div>
<img class="justify-end z-100 ml-[37px] mt-[50px] object-cover" src="download/saas.png" alt="" />

</div>

</div>



     </div>













     <div className="bg-radial-[at_50%_-38%] from-white to-neutral-900 to 82%  w-full h-full rounded-[32px]  px-[35px] p-[35px] overflow-hidden  ">
       <div className=" flex justify-start">
         <div className="space-y-[10px]">
         <h1 className="text-white text-[31.34px]">Jeux, Apps Mobile</h1>
         <p className="text-[#B3B3B3]  w-[442.84px] text-[18px]">Download the ultimate mobile app for SAP's project management 
on-the-go.</p>

<div className="flex gap-[10px] mt-[10px]">
<button className="bg-[#666666] rounded-[10px] text-white shadow text-[16px] py-4 p-4">Download For</button>
<button className="bg-[#666666] rounded-[10px] text-white shadow text-[16px] py-4 p-4">Download For</button>
</div>
<img class="justify-end z-100 ml-[37px] mt-[50px] object-cover" src="download/saas.png" alt="" />

</div>

</div>



     </div>



     </div>
   </div>
  );
}