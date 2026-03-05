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

      // الحالة الابتدائية
      gsap.set(cards, {
        y: 100,
        autoAlpha: 0,
        zIndex: (i) => cards.length - i,
      });

      // أول صورة باينة
      gsap.set(cards[0], {
        y: 0,
        autoAlpha: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=5000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          tl.to(card, {
            y: -100,
            autoAlpha: 0,
            duration: 1,
            ease: "power2.out",
          })
            .to(
              cards[i + 1],
              {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                ease: "power2.out",
              },
              "<"
            );
        }
      });

      // ترجع من الأخيرة للأولى (loop effect)
      tl.to(cards[cards.length - 1], {
        y: -100,
        autoAlpha: 0,
        duration: 1,
      }).to(
        cards[0],
        {
          y: 0,
          autoAlpha: 1,
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
      className="w-screen min-h-screen bg-white px-4 md:px-16 lg:px-24 py-20"
    >
      <div className="bg-[#8CEF6C] w-full max-h-[600px] rounded-[24px] p-[40px] overflow-hidden">
        <div className="flex gap-8 items-center">
          
          {/* Text */}
          <div className="w-full">
            <h1 className="text-[#2B2D2D] text-[28px] font-semibold leading-tight">
              Real-time transactions
              <br />
              with business insights
            </h1>

            <p className="mt-4 text-[#666666] text-[16px] leading-relaxed">
              Automated expense tracking, instant reconciliation,
              <br />
              and detailed analytics.
            </p>
          </div>

          {/* Images */}
          <div className="relative w-full h-[400px] flex justify-center items-center">
            <img
              className="absolute card w-[85%] rounded-[16px] w-[727px] h-[450px]"
              src="/imagesProject/img1.jpg"
              alt="project1"
            />
            <img
              className="absolute card w-[85%] rounded-[16px] w-[727px] h-[450px]"
              src="/imagesProject/img2.jpg"
              alt="project2"
            />
            <img
              className="absolute card w-[85%] rounded-[16px] w-[727px] h-[450px]"
              src="/imagesProject/img3.jpg"
              alt="project3"
            />
            <img
              className="absolute card w-[85%] rounded-[16px] w-[727px] h-[450px]"
              src="/imagesProject/img4.jpg"
              alt="project4"
            />
            <img
              className="absolute card w-[85%] rounded-[16px] w-[727px] h-[450px]"
              src="/imagesProject/img5.jpg"
              alt="project5"
            />
            <img
              className="absolute card w-[85%] rounded-[16px] w-[727px] h-[450px]"
              src="/imagesProject/img6.jpg"
              alt="project6"
            />
            <img
              className="absolute card w-[85%] rounded-[16px] w-[727px] h-[450px]"
              src="/imagesProject/img7.jpg"
              alt="project7"
            />
          </div>

          {/* Right block */}
          <div className="flex justify-end w-full">
            <div className="bg-black w-[265px] h-[500px] rounded-[24px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}