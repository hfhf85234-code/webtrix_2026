"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Image from "next/image";

export default function HomePage() {
  const sectionRef = useRef(null);
  const logoRef = useRef(null);
  const logodRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const ctx = gsap.context(() => {

      // Horizontal logos animation
      if (logodRef.current) {
        gsap.to(logodRef.current, {
          xPercent: -50,
          duration: 40,
          ease: "linear",
          repeat: -1,
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
            duration: 2.2,
            stagger: 0.01,
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
            stagger: 0.11,
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

      // Logo rotation
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

      // Continuous scroll animations for image columns
      gsap.to(".scroll-up", {
        yPercent: -50,
        duration: 52,
        ease: "linear",
        repeat: -1,
      });
      gsap.to(".scroll-down", {
        yPercent: 50,
        duration: 52,
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
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen max-h-[600px] 
  sm:h-[600px] sm:max-h-[600px]   /* small screens */
  md:h-[700px] md:max-h-[700px]   /* medium screens */
  lg:h-screen lg:max-h-[800px]    /* large screens */
  overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/head/screen.svg')" }}
        />

        {/* Foreground Image */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image src="/head/screen1.png" alt="Foreground" fill className="object-cover" />
        </div>

        {/* Main Content */}
        <div className="absolute inset-0 flex flex-col items-center pt-24 sm:pt-32 md:pt-40 space-y-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">

          {/* Rotating Logo */}
          <div ref={logoRef} className="w-24 h-24 sm:w-28 sm:h-28">
            <Image src="/head/logo.svg" alt="Logo" width={120} height={120} />
          </div>

          {/* Members Button */}
          <div className="bg-[#F8F9FA] py-1 px-1 sm:px-4 border border-[#E6E9EE] rounded-full text-center">
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
              <div className="flex -space-x-2">
                {["1", "2", "3"].map((i) => (
                  <div key={i} className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://placehold.co/22x22`} alt={`avatar${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <h1 className="text-[#262626] text-[12px] sm:text-[14px] whitespace-nowrap">Join 3k+ Members</h1>
              <button className="bg-[#c4fc5a] text-[#262626] text-[10px] sm:text-[12px] px-1 sm:px-3 py-1 rounded-full whitespace-nowrap">
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Headline */}
          <div ref={titleRef} className="text-center">
            <h2 className="text-black text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-snug">
              Clean and Modern Services for
            </h2>
            <h2 className="text-black text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-snug">
              Elevating Products, SaaS & Businesses
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-4">
            <button className="bg-[#404040] text-white text-[14px] sm:text-[16px] py-3 px-6 rounded-[10px] w-full sm:w-auto">Get Free Services</button>
            <button className="bg-[#F8F9FA] py-3 px-6 border border-[#E6E9EE] text-[#333333] text-[13px] sm:text-[14px] rounded-[10px] w-full sm:w-auto">
              Our Send Message Whatsapp
            </button>
          </div>

          {/* Description */}
          <div className="w-full max-w-3xl mx-auto mt-4">
            <p ref={paragraphRef} className="text-center text-[#303236] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed">
              L'équipe talentueuse de Webtrix est spécialisée dans les sites Web et
              les pages de destination, la conception de logos et l'image de marque,
              le développement SaaS et IA, ainsi que les applications mobiles et le
              codage, garantissant des solutions complètes adaptées à vos besoins.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SCROLLING IMAGES SECTION ================= */}
      <section ref={sectionRef} className="w-full py-12 px-4 md:px-16 lg:px-24 bg-[#F8F8F8]">

        <div className="relative w-full h-[600px] rounded-[30px] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex gap-6 -rotate-15 scale-110">

              {/* Column 1 */}
              <div className="flex flex-col gap-6 scroll-up">
                {["img1","img2","img3","img1","img2","img3"].map((img,i)=>(
                  <img key={i} src={`/images/${img}.jpg`} className="w-full h-full object-cover" />
                ))}
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6 scroll-down">
                {["img4","img5","img6","img4","img5","img6","img12"].map((img,i)=>(
                  <img key={i} src={`/images/${img}.jpg`} className="w-full h-full object-cover" />
                ))}
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6 scroll-up">
                {["img7","img8","img9","img11","img7","img8","img9","img10"].map((img,i)=>(
                  <img key={i} src={`/images/${img}.jpg`} className="w-full h-full object-cover" />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= HORIZONTAL LOGOS SECTION ================= */}
      <section className="bg-white w-full py-6 overflow-hidden">
        <div className="w-full relative h-12 sm:h-16 md:h-20">
          <div ref={logodRef} className="flex gap-[50px] lg:gap-[150px] md:gap-[100px] w-max items-center">
            {["logo1","logo2","logo3","logo4","logo6","logo5","logo1","logo2","logo3","logo4","logo1","logo2","logo3","logo6","logo4","logo5","logo1","logo2","logo3","logo6","logo4","logo5"].map((logo,i)=>(
              <img key={i} src={`/subscriptions/${logo}.svg`} className="h-6 sm:h-8 md:h-10 w-auto" />
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEW SECTION YOU CAN ADD ================= */}
      <section className="w-full py-16 px-4 md:px-16 lg:px-24 bg-[#E6E9EE]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-6">
            Our Additional Services
          </h2>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-700 leading-relaxed">
            This is a new section where you can add more content, features, or services. It's fully responsive and integrates perfectly with the hero and scrolling sections above.
          </p>
          <button className="mt-6 bg-[#404040] text-white px-6 py-3 rounded-[10px] text-[14px] sm:text-[16px]">
            Learn More
          </button>
        </div>
      </section>

    </div>
  );
}