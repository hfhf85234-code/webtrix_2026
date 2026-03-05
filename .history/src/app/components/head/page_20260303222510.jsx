"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";

export default function Head() {
    gsap.registerPlugin(ScrollTrigger);


    const sectionRef = useRef(null);

    useEffect(() => {
      // العمود الأول
      gsap.to(".scroll-row", {
        x: -300,
        duration: 5,
        ease: "linear",
        repeat: -1, // infinite
      });
    
      // العمود الثاني (عكس الاتجاه)
      gsap.to(".scroll-row-reverse", {
        x: 300,
        duration: 5,
        ease: "linear",
        repeat: -1,
      });
    }, []);;
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/head/screen.svg')" }}
      />

      {/* Foreground image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/head/screen1.png"
          alt="Foreground"
          fill
          className="object-cover"
        />
      </div>

      {/* Logo and content */}
      <div className="absolute inset-0 flex flex-col items-center pt-24 sm:pt-32 md:pt-40 space-y-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <Image
          src="/head/logo.svg"
          alt="Logo"
          width={120}
          height={120}
          className="w-20 h-20 sm:w-24 sm:h-24"
        />

        {/* Button-like container */}
        <div className="bg-[#F8F9FA] py-1 px-1 sm:px-4 border border-[#E6E9EE] rounded-full text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {/* Small avatars */}
            <div className="flex -space-x-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Members text */}
            <h1 className="text-[#262626] text-[12px] sm:text-[14px] whitespace-nowrap">
              Join 3k+ Members
            </h1>

            {/* Join button */}
            <button className="bg-[#c4fc5a] text-[#262626] text-[10px] sm:text-[12px] px-1 sm:px-3 py-1 rounded-full whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h2 className="text-black text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-snug">
            Clean and Modern Services for
          </h2>
          <h2 className="text-black text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-snug">
            Elevating Products, SaaS & Businesses
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-4">
          <button className="bg-[#404040] text-white text-[14px] sm:text-[16px] py-3 px-6 rounded-[10px] w-full sm:w-auto">
            Get Free Services
          </button>
          <button className="bg-[#F8F9FA] py-3 px-6 border border-[#E6E9EE] text-[#333333] text-[13px] sm:text-[14px] rounded-[10px] w-full sm:w-auto">
            Our Send Message Whatsapp
          </button>
        </div>

        {/* Description */}
        <div className="w-full max-w-3xl mx-auto mt-4">
          <p className="text-center text-[#303236] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed">
            L'équipe talentueuse de Webtrix est spécialisée dans les sites Web et
            les pages de destination, la conception de logos et l'image de marque,
            le développement SaaS et IA, ainsi que les applications mobiles et le
            codage, garantissant des solutions complètes adaptées à vos besoins.
          </p>
        </div>










        <div ref={sectionRef} className="w-screen h-full px-[100px] p-[10px]">
      <div className="bg-[#F8F8F8] w-full h-[600px] rounded-[30px] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-6 rotate-[55deg] scale-110">

            {/* Column 1 */}
            <div className="space-y-6 scroll-row">
              <img src="/images/img1.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
              <img src="/images/img2.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
              <img src="/images/img3.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
            </div>

            {/* Column 2 */}
            <div className="space-y-6 scroll-row-reverse">
              <img src="/images/img4.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
              <img src="/images/img5.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
              <img src="/images/img6.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
            </div>

            {/* Column 3 */}
            <div className="space-y-6 scroll-row">
              <img src="/images/img7.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
              <img src="/images/img8.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
              <img src="/images/img9.jpg" className="w-[220px] h-[160px] rounded-xl object-cover" />
            </div>

          </div>
        </div>
      </div>
    </div>
</div>
</div>

  );
}