"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// تسجيل GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Download() {
  const statsRef = useRef(null);

  useEffect(() => {
    // التحقق من وجود العناصر قبل بدء الأنيميشن
    if (!statsRef.current) return;

    // إنشاء GSAP context للـ cleanup السهل
    const ctx = gsap.context(() => {
      // جلب جميع العناصر لي عندهم كلاس "counter"
      const counters = gsap.utils.toArray(".counter");
      
      // التأكد من وجود عدادات
      if (counters.length === 0) return;
      
      counters.forEach((counter) => {
        // حفظ النص الأصلي
        const originalText = counter.innerText.trim();
        
        // استخراج الرقم والـ suffix
        const number = parseFloat(originalText.replace(/[^\d.]/g, ""));
        const suffix = originalText.replace(/[\d.]/g, "");
        
        // التحقق من صحة الرقم
        if (isNaN(number)) return;
        
        // التحقق إذا كان الرقم فيه فواصل الآلاف أو K, M
        const hasCommas = originalText.includes(',');
        const hasK = originalText.includes('K');
        const hasM = originalText.includes('M');
        
        let obj = { val: 0 };
        
        // إنشاء الـ animation مع تحسينات
        gsap.to(obj, {
          val: number,
          duration: 3,
          ease: "power2.out",
          snap: { val: 1 },
          
          // ربط الأنيميشن بـ ScrollTrigger
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play none none none",
            once: true,
            markers: false, // شغّل markers: true للتصحيح
            onEnter: () => {
              console.log("🎯 Counter animation started!", originalText);
            }
          },
          
          // تحديث القيمة كل Frame
          onUpdate: () => {
            let displayValue;
            
            if (hasK || hasM) {
              // معالجة الأرقام مع K (آلاف) أو M (ملايين)
              if (obj.val >= 1000) {
                displayValue = (obj.val / 1000).toFixed(1) + 'K';
              } else {
                displayValue = Math.floor(obj.val).toString();
              }
            } else if (hasCommas) {
              // معالجة الأرقام مع فواصل
              displayValue = Math.floor(obj.val).toLocaleString();
            } else if (Number.isInteger(number)) {
              // أرقام صحيحة
              displayValue = Math.floor(obj.val).toString();
            } else {
              // أرقام عشرية
              displayValue = obj.val.toFixed(1);
            }
            
            // إضافة suffix إذا كان موجود
            if (suffix && !hasK && !hasM) {
              displayValue += suffix;
            }
            
            counter.innerText = displayValue;
          },
          
          // ضمان الوصول للقيمة النهائية الصحيحة
          onComplete: () => {
            counter.innerText = originalText;
          }
        });
      });
    }, statsRef);
    
    // تنظيف GSAP context و ScrollTrigger
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white p-[10px] overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-[10px] h-full">
        {/* Première carte - Desktop App */}
        <div className="bg-gradient-to-b from-white to-neutral-900 to-82% w-full h-auto lg:h-full rounded-[32px] px-[20px] md:px-[35px] py-[35px] overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="space-y-[10px]">
              <h1 className="text-white text-[24px] md:text-[28px] lg:text-[31.34px] leading-tight font-medium">
                Systems, Saas, Apps Desktop
              </h1>
              <p className="text-[#B3B3B3] w-full max-w-[442.84px] text-[16px] md:text-[18px]">
                Get the desktop app for SAP's comprehensive project management tools
              </p>

              <div className="flex flex-wrap gap-[10px] mt-[10px]">
                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-all duration-300 rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/mac.svg" alt="Mac" />
                </button>
                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-all duration-300 rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/win.svg" alt="Windows" />
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end mt-8 lg:mt-auto">
              <img
                className="w-full mt-[43px] md:max-w-[400px] lg:max-w-full h-auto object-contain z-10 hover:scale-105 transition-transform duration-500"
                src="download/saas.png"
                alt="SaaS Desktop App"
              />
            </div>
          </div>
        </div>

        {/* Deuxième carte - Mobile App */}
        <div className="bg-gradient-to-b from-white to-neutral-900 to-82% w-full h-auto lg:h-full rounded-[32px] px-[20px] md:px-[35px] py-[35px] overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="space-y-[10px]">
              <h1 className="text-white text-[24px] md:text-[28px] lg:text-[31.34px] leading-tight font-medium">
                Jeux, Apps Mobile
              </h1>
              <p className="text-[#B3B3B3] w-full max-w-[541.26px] text-[16px] md:text-[18px]">
                Download the ultimate mobile app for SAP's project management on-the-go.
              </p>

              <div className="flex flex-wrap gap-[10px] mt-[10px]">
                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-all duration-300 rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/and.svg" alt="Android" />
                </button>
                <button className="flex gap-2 bg-[#666666] hover:bg-[#777777] transition-all duration-300 rounded-[10px] text-white shadow text-[14px] md:text-[16px] py-3 px-4 md:py-4 md:px-4">
                  Download For
                  <img className="mt-1" src="download/mac.svg" alt="Mac" />
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-8 lg:mt-auto">
              <img
                className="w-full md:max-w-[400px] lg:max-w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                src="download/appmobile.png"
                alt="Mobile App"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section avec animations GSAP */}
      <div
        ref={statsRef}
        className="w-full h-full px-[20px] py-[30px] md:px-[70px] md:py-[40px]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px] justify-center">
          {/* Card 1 - 300M+ */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img className="w-[35px] md:w-auto" src="download/icon1.svg" alt="Views icon" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121] font-bold">300M+</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Total views generated
              </p>
            </div>
          </div>

          {/* Card 2 - 20% */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img className="w-[35px] md:w-auto" src="download/icon2.svg" alt="Growth icon" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121] font-bold">20%</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Audience growth
              </p>
            </div>
          </div>

          {/* Card 3 - 49% */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img className="w-[35px] md:w-auto" src="download/icon3.svg" alt="Revenue icon" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121] font-bold">49%</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Growth in revenue
              </p>
            </div>
          </div>

          {/* Card 4 - 500K+ */}
          <div className="bg-[#FAFAFA] border border-[#f2f2f2] rounded-[22px] w-full h-full p-[20px] md:p-[25px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img className="w-[35px] md:w-auto" src="download/icon4.svg" alt="Creator icon" />
            <div className="space-y-1 pt-[40px] md:pt-[100px]">
              <h1 className="counter text-[26px] md:text-[38.3px] text-[#212121] font-bold">500K+</h1>
              <p className="text-[14px] md:text-[17.7px] text-[#757575]">
                Creator & agencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}