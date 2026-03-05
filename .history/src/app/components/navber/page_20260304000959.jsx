"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export default function Navbar() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!navRef.current || !menuRef.current) return;

    // نخلي العناصر مخبيين فالأول
    gsap.set(menuRef.current.children, {
      opacity: 0,
      y: 40,
    });

    // Timeline
    tl.current = gsap.timeline({ paused: true });

    tl.current
      // Expand navbar fullscreen
      .to(navRef.current, {
        height: "100vh",
        ease: "power4.inOut",
        duration: 0.8,
        borderRadius: "0px",
      })
      // Animate links
      .to(
        menuRef.current.children,
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          ease: "power3.out",
          duration: 0.6,
        },
        "-=0.4"
      );
  }, []);

  const toggleMenu = () => {
    if (!tl.current) return;

    if (open) {
      tl.current.reverse();
      document.body.style.overflow = "auto";
    } else {
      tl.current.play();
      document.body.style.overflow = "hidden";
    }

    setOpen(!open);
  };

  return (
    <div className="w-full">
      <div
        ref={navRef}
        className="fixed top-0 left-0 w-full h-[60px] bg-black text-white z-50 overflow-hidden"
      >
        {/* HEADER */}
        <div className="h-[60px] flex items-center justify-between px-6">
          <button
            onClick={toggleMenu}
            className="text-[16px] font-medium hover:opacity-70 transition"
          >
            {open ? "Close" : "Menu"}
          </button>

          <img
            src="/test.png"
            alt="logo"
            className="h-[42px] rounded-full"
          />

          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md text-[14px] transition">
            Join
          </button>
        </div>

        {/* MENU */}
        <div
          ref={menuRef}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-[32px] font-semibold bg-black"
        >
          <p className="cursor-pointer hover:text-blue-400 transition">
            Home
          </p>
          <p className="cursor-pointer hover:text-blue-400 transition">
            About
          </p>
          <p className="cursor-pointer hover:text-blue-400 transition">
            Services
          </p>
          <p className="cursor-pointer hover:text-blue-400 transition">
            Contact
          </p>
        </div>
      </div>
    </div>
  );
}