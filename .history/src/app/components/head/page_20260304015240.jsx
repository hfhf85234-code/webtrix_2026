"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Image from "next/image";

export default function Head() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const logodRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const ctx = gsap.context(() => {

      // LOGOS TOP ANIMATION
      if (logodRef.current) {
        gsap.set(logodRef.current.children, { x: -100 });
      
        gsap.to(logodRef.current.children, {
          x: 100,
          duration: 3,
          ease: "none",
          repeat: -1,
          yoyo: true,
          stagger: {
            each: 0.2,
            repeat: -1,
            yoyo: true,
          },
        });
      }

      if (!titleRef.current || !paragraphRef.current) return;

      gsap.set([titleRef.current, paragraphRef.current], { opacity: 1 });

      const paragraphSplit = SplitText.create(paragraphRef.current, {
        type: "words,chars",
        mask: "chars",
        onSplit: (self) => {
          gsap.from(self.chars, {
            yPercent: 100,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 80%",
              toggleActions: "restart none restart none",
            },
          });
        },
      });

      const titleSplit = SplitText.create(titleRef.current, {
        type: "words,chars",
        mask: "chars",
        onSplit: (self) => {
          gsap.from(self.chars, {
            yPercent: 100,
            stagger: 0.01,
            duration: 1.5,
            ease: "expo.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "restart none restart none",
            },
          });
        },
      });

      if (logoRef.current) {
        gsap.to(logoRef.current, {
          rotate: 960,
          ease: "none",
          scrollTrigger: {
            trigger: logoRef.current,
            start: "top top",
            end: "bottom+=500 top",
            scrub: true,
          },
        });
      }

      gsap.to(".scroll-up", {
        yPercent: -50,
        duration: 12,
        ease: "linear",
        repeat: -1,
      });

      gsap.to(".scroll-down", {
        yPercent: 50,
        duration: 12,
        ease: "linear",
        repeat: -1,
      });

      return () => {
        paragraphSplit.revert();
        titleSplit.revert();
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);
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
              ref={logoRef}

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
        <div
                    ref={titleRef}

        className="text-center">
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
          <p 
                      ref={paragraphRef}

          className="text-center text-[#303236] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed">
            L'équipe talentueuse de Webtrix est spécialisée dans les sites Web et
            les pages de destination, la conception de logos et l'image de marque,
            le développement SaaS et IA, ainsi que les applications mobiles et le
            codage, garantissant des solutions complètes adaptées à vos besoins.
          </p>
        </div>










        <div ref={sectionRef} className="w-screen h-full px-[10px] md:px-[60px] lg:px-[100px] p-[1px] lg:p-[10px] md:p-[18px] ">
      <div className="bg-[#F8F8F8] w-full h-[600px] rounded-[30px] overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-6 rotate-[-15deg] scale-110">

            {/* Column 1 */}
            <div className="flex flex-col gap-6 scroll-up">
              <img src="/images/img1.jpg" className="img-style w-full h-full" />
              <img src="/images/img2.jpg" className="img-style w-full h-full" />
              <img src="/images/img3.jpg" className="img-style w-full h-full" />
              {/* duplicate */}
              <img src="/images/img1.jpg" className="img-style w-full h-full" />
              <img src="/images/img2.jpg" className="img-style w-full h-full" />
              <img src="/images/img3.jpg" className="img-style w-full h-full" />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 scroll-down">
              <img src="/images/img4.jpg" className="img-style w-full h-full" />
              <img src="/images/img5.jpg" className="img-style w-full h-full" />
              <img src="/images/img6.jpg" className="img-style w-full h-full" />
              {/* duplicate */}
              <img src="/images/img4.jpg" className="img-style w-full h-full" />
              <img src="/images/img5.jpg" className="img-style w-full h-full" />
              <img src="/images/img6.jpg" className="img-style w-full h-full" />
              <img src="/images/img12.jpg" className="img-style w-full h-full" />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 scroll-up">
              <img src="/images/img7.jpg" className="img-style w-full h-full" />
              <img src="/images/img8.jpg" className="img-style w-full h-full" />
              <img src="/images/img9.jpg" className="img-style w-full h-full" />
              <img src="/images/img11.jpg" className="img-style w-full h-full" />
              {/* duplicate */}
              <img src="/images/img7.jpg" className="img-style w-full h-full" />
              <img src="/images/img8.jpg" className="img-style w-full h-full" />
              <img src="/images/img9.jpg" className="img-style w-full h-full" />
              <img src="/images/img10.jpg" className="img-style w-full h-full" />
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="w-screen mt-[20px] ">
      <div
        ref={logodRef}
        className="flex gap-[10px] "
      >
        <img src="/subscriptions/logo1.svg" alt="" />
        <img src="/subscriptions/logo2.svg" alt="" />
        <img src="/subscriptions/logo3.svg" alt="" />
        <img src="/subscriptions/logo4.svg" alt="" />
        <img src="/subscriptions/logo1.svg" alt="" />
        <img src="/subscriptions/logo1.svg" alt="" />
        <img src="/subscriptions/logo1.svg" alt="" />
      </div>
    </div>

</div>


</div>

  );
}