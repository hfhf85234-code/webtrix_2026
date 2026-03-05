"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ImagesProject() {
  const imagesRef = useRef(null);

  useEffect(() => {
    const images = imagesRef.current.children;
    const totalImages = images.length;

    // Convert HTMLCollection to array
    const imagesArray = Array.from(images);

    // Set initial positions
    imagesArray.forEach((img, i) => {
      gsap.set(img, { y: i * 320 }); // chaque image 320px f l'espace
    });

    // ScrollTrigger horizontal swipe
    gsap.to(imagesArray, {
      : `-=${(totalImages - 1) * 320}`, // slide all images left
      ease: "none",
      scrollTrigger: {
        trigger: imagesRef.current,
        start: "top top",
        end: `+=${totalImages * 320}`, // longueur totale
        scrub: true, // smooth scroll
        pin: true, // pin section while scrolling
      },
    });
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white px-4 md:px-16 lg:px-24 p-[10px]">
      <div className="bg-[#8CEF6C] w-full h-full rounded-[24px] px-[40px] p-[40px]">
        <div className="flex gap-1">
          <div className="w-full h-full px-1 p-1">
            <div className="space-y-1">
              <h1 className="w-[234px] text-[#2B2D2D] text-[28px]">
                Real-time transactions with business insights
              </h1>
              <p className="w-[230px] text-[#666666] text-[16px]">
                Automated expense tracking, instant reconciliation, and detailed analytics.
              </p>
            </div>
          </div>

          {/* Images container */}
          <div
            className="relative w-full h-[400px] overflow-hidden px-2 py-2"
            ref={imagesRef}
          >
            <img
              className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg z-10"
              src="/imagesProject/img1.jpg"
              alt="project1"
            />
            <img
              className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg z-20"
              src="/imagesProject/img2.jpg"
              alt="project2"
            />
            <img
              className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg z-30"
              src="/imagesProject/img3.jpg"
              alt="project3"
            />
            <img
              className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg z-40"
              src="/imagesProject/img4.jpg"
              alt="project4"
            />
            <img
              className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg z-50"
              src="/imagesProject/img5.jpg"
              alt="project5"
            />
            <img
              className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg z-60"
              src="/imagesProject/img6.jpg"
              alt="project6"
            />
            <img
              className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg z-70"
              src="/imagesProject/img7.jpg"
              alt="project7"
            />
          </div>

          <div className="flex justify-end w-full h-full px-1 p-1">
            <div className="bg-black w-[265px] h-[678px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}