"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImagesProject() {
  const imagesRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const images = Array.from(imagesRef.current.children);
      const imageHeight = 320;
      const totalImages = images.length;
      const totalHeight = totalImages * imageHeight;

      // Position images vertically
      images.forEach((img, i) => {
        gsap.set(img, {
          y: i * imageHeight,
        });
      });

      // Infinite vertical scroll effect
      gsap.to(images, {
        y: `+=${totalHeight}`,
        ease: "none",
        modifiers: {
          y: (y) => {
            return parseFloat(y) % totalHeight + "px";
          },
        },
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top top",
          end: `+=${totalHeight}`,
          scrub: true,
          pin: true,
        },
      });
    }, imagesRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white px-4 md:px-16 lg:px-24 p-[10px]">
      <div className="bg-[#8CEF6C] w-full h-full rounded-[24px] p-[40px]">
        <div className="flex gap-6">

          {/* Text Section */}
          <div className="w-full">
            <div className="space-y-4">
              <h1 className="w-[234px] text-[#2B2D2D] text-[28px] font-semibold">
                Real-time transactions with business insights
              </h1>
              <p className="w-[230px] text-[#666666] text-[16px]">
                Automated expense tracking, instant reconciliation, and detailed analytics.
              </p>
            </div>
          </div>

          {/* Images container */}
          <div
            className="relative w-full h-[400px] overflow-hidden"
            ref={imagesRef}
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <img
                key={i}
                className="absolute top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
                src={`/imagesProject/img${i + 1}.jpg`}
                alt={`project${i + 1}`}
              />
            ))}
          </div>

          {/* Black sidebar */}
          <div className="flex justify-end w-full">
            <div className="bg-black w-[265px] h-[678px] rounded-[20px]"></div>
          </div>

        </div>
      </div>
    </div>
  );
}