"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Subscriptions() {
  const logosdRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logosdRef.current.children,
      {
        y: -100,       // start mn fo9
        opacity: 0,
      },
      {
        y: 0,          // yji l position dyalo
        opacity: 1,
        duration: 1,
        stagger: 0.2,  // wahd b wahd
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="w-screen mt-[20px] overflow-hidden">
      <div
        ref={logosdRef}
        className="flex gap-[20px] justify-center items-center"
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
  );
}