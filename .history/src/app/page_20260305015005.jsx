"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Head from "./components/head/page";
import Download from "./components/download/page";
import ImagesProject from "./components/imagesProject/page";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // Animate Head Section
      gsap.from(".head-section", {
        y: 120,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".head-section",
          start: "top 80%",
        },
      });

      // Animate Download Section
      gsap.from(".download-section", {
        y: 150,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".download-section",
          start: "top 85%",
        },
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main 
    className="bg-white "
    ref={mainRef}>
      <div className="head-section ">
        <Head />
      </div>

      <div className="download-section">
        <Download />
      </div>
      <div className="imagesProject-section">
      <ImagesProject />
      </div>
    </main>
  );
}