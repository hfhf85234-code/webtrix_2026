"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Initial state
    gsap.set(menuRef.current, {
      opacity: 0,
      y: 30,
      pointerEvents: "none",
    });

    // Timeline
    tl.current = gsap.timeline({ paused: true });

    tl.current
      // Expand navbar
      .to(navRef.current, {
        height: "60vh",
        ease: "power4.inOut",
        duration: 1.2,
        backgroundColor: "#56b651",
      })
      // Slide menu items
      .to(
        menuRef.current.children,
        {
          y: 0,
          opacity: 1,
          stagger: 1.1, // nice stagger effect
          ease: "power3.out",
          duration: 0.6,
        },
        "-=0.5" // overlap with navbar animation
      );
  }, []);

  const toggleMenu = () => {
    if (open) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
    setOpen(!open);
  };

  return (
      <div
        ref={navRef}
        className="fixed left-1/2 -translate-x-1/2
        top-[15px]
        w-[calc(100%-20px)]
        md:w-[calc(80%-10px)]
        h-[76px]
        bg-[#F8F8F8] rounded-xl overflow-hidden z-50 origin-top"
      >
        {/* HEADER */}
        <div className="relative h-[56px] flex items-center justify-between px-[16px]">
          <button
            onClick={toggleMenu}
            className="py-[8px] px-[14px] hover:bg-white/20 transition-colors rounded text-white text-[18px] font-medium"
          >
            {open ? "Close" : "Menu"}
          </button>

          <img
            src="/test.png"
            alt="logo"
            className="absolute left-1/2 rounded-full -translate-x-1/2 h-[46px] shadow-md"
          />

          <button className="py-[8px] px-[14px] bg-blue-700 hover:bg-blue-600 transition-colors rounded text-white text-[18px] font-medium">
            Join
          </button>
        </div>

        {/* MENU */}
        <div
          ref={menuRef}
          className="px-[24px] pt-[100px] flex flex-col gap-6 text-white text-[28px] font-semibold"
        >
          <p className="transform translate-y-10 opacity-0 cursor-pointer hover:text-blue-400 transition-colors">
            Home
          </p>
          <p className="transform translate-y-10 opacity-0 cursor-pointer hover:text-blue-400 transition-colors">
            About
          </p>
          <p className="transform translate-y-10 opacity-0 cursor-pointer hover:text-blue-400 transition-colors">
            Services
          </p>
          <p className="transform translate-y-10 opacity-0 cursor-pointer hover:text-blue-400 transition-colors">
            Contact
          </p>
        </div>
      </div>
  );
}
