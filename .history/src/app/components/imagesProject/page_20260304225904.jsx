"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImagesProject() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".card");
    const total = cards.length;

    // Initial stacked position
    function setStack() {
      cards.forEach((card, i) => {
        gsap.set(card, {
          y: i * 25,
          z: -i * 60,
          scale: 1 - i * 0.05,
          opacity: i === 0 ? 1 : 0.7,
        });
      });
    }

    setStack();

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=2500",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        let progress = self.progress * total;

        cards.forEach((card, i) => {
          let position = i - progress;

          gsap.to(card, {
            y: position * 25,
            z: -position * 60,
            scale: 1 - position * 0.05,
            opacity: position < 0 ? 0 : 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      },
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen min-h-screen bg-white px-4 md:px-16 lg:px-24 p-[10px]"
    >
      <div className="bg-[#8CEF6C] w-full h-full rounded-[24px] px-[40px] p-[40px]">
        <div className="flex gap-1">
          {/* Left Text */}
          <div className="w-full h-full px-1 p-1">
            <div className="space-y-1">
              <h1 className="w-[234px] text-[#2B2D2D] text-[28px]">
                Real-time transactions
                <br />
                with business insights
              </h1>

              <p className="w-[230px] text-[#666666] text-[16px]">
                Automated expense tracking, instant reconciliation,
                <br />
                and detailed analytics.
              </p>
            </div>
          </div>

          {/* Cards Section */}
          <div className="relative w-full h-[400px] px-2 py-2 perspective-[1000px]">
            <img
              className="absolute card top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img1.jpg"
              alt="project1"
            />
            <img
              className="absolute card top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img2.jpg"
              alt="project2"
            />
            <img
              className="absolute card top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img3.jpg"
              alt="project3"
            />
            <img
              className="absolute card top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img4.jpg"
              alt="project4"
            />
            <img
              className="absolute card top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img5.jpg"
              alt="project5"
            />
            <img
              className="absolute card top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img6.jpg"
              alt="project6"
            />
            <img
              className="absolute card top-0 left-0 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img7.jpg"
              alt="project7"
            />
          </div>

          {/* Right Block */}
          <div className="flex justify-end w-full h-full px-1 p-1">
            <div className="bg-black w-[265px] h-[678px] rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}