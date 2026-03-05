"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "./components/head/page";
import Download from "./components/download/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Head Section Scroll Effect
      gsap.to(".head-section", {
        y: -100,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".head-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Download Section Scroll Effect
      gsap.to(".download-section", {
        y: -120,
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: ".download-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="overflow-x-hidden">
      <section className="head-section min-h-screen flex items-center justify-center">
        <Head />
      </section>

      <section className="download-section min-h-screen flex items-center justify-center">
        <Download />
      </section>
    </main>
  );
}