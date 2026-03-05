"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImagesProject() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      // نخلي غير الأولى باينة
      gsap.set(cards, { opacity: 0, y: 50 });
      gsap.set(cards[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000",
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          tl.to(card, {
            opacity: 0,
            y: -50,
            duration: 1,
          }).to(
            cards[i + 1],
            {
              opacity: 1,
              y: 0,
              duration: 1,
            },
            "<"
          );
        }
      });

      // يرجع من image7 لـ image1
      tl.to(cards[cards.length - 1], {
        opacity: 0,
        y: -50,
        duration: 1,
      }).to(
        cards[0],
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "<"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen min-h-screen max-screen-[100px] bg-white px-4 md:px-16 lg:px-24 p-[10px]"
    >
      <div className="bg-[#8CEF6C] w-full h-full max-h-[100px] rounded-[24px] px-[40px] p-[40px]">
        <div className="flex gap-1">
          {/* Text */}
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

          {/* Images */}
          <div className="relative w-full h-[400px] px-2 py-2">
            <img className="absolute  card  top-10 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img1.jpg" alt="project1" />
            <img className="absolute card  top-20 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img2.jpg" alt="project2" />
            <img className="absolute card  top-30 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img3.jpg" alt="project3" />
            <img className="absolute card  top-40 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img4.jpg" alt="project4" />
            <img className="absolute card  top-50 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img5.jpg" alt="project5" />
            <img className="absolute card  top-60 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img6.jpg" alt="project6" />
            <img className="absolute card  top-70 w-[90%] rounded-[10px] shadow-lg"
              src="/imagesProject/img7.jpg" alt="project7" />
          </div>

          {/* Right block */}
          <div className="flex justify-end w-full h-full px-1 p-1">
            <div className="bg-black w-[265px] h-[678px] rounded-[20px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}