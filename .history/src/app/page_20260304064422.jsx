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

      // 🔥 Head Premium Reveal
      gsap.fromTo(
        ".head-section",
        {
          y: 140,
          opacity: 0,
          scale: 0.96,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".head-section",
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
        }
      );

      // 🔥 Download Heavy Premium Animation
      gsap.fromTo(
        ".download-section",
        {
          y: 180,
          opacity: 0,
          scale: 0.94,
          filter: "blur(12px)",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".download-section",
            start: "top 90%",
            end: "top 65%",
            scrub: 1.2,
          },
        }
      );

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="overflow-hidden">
      <div className="head-section will-change-transform">
        <Head />
      </div>

      <div className="download-section will-change-transform">
        <Download />
      </div>
    </main>
  );
}