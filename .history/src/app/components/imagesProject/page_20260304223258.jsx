"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImagesProject() {
  const imagesRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray(".project-image");
      const container = imagesRef.current;
      
      // Attendre que les images soient chargées
      if (images.length === 0) return;

      // Calculer les dimensions
      const imageHeight = 320; // hauteur fixe pour chaque image
      const gap = 20; // espace entre les images
      const totalImages = images.length;
      const totalHeight = (imageHeight + gap) * totalImages;

      // Position initiale des images avec espacement
      images.forEach((img, i) => {
        gsap.set(img, {
          y: i * (imageHeight + gap),
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: imageHeight,
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        });
      });

      // Animation de défilement vertical infini
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalHeight * 2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });

      // Animation continue
      tl.to(images, {
        y: `-=${totalHeight}`,
        ease: "none",
        duration: 10,
        repeat: -1,
        modifiers: {
          y: (y) => {
            // Effet de boucle infini
            const position = parseFloat(y);
            const wrapped = position % totalHeight;
            return wrapped + "px";
          }
        }
      });

      // Dupliquer les images pour un effet plus fluide
      const imagesClone = images.map(img => img.cloneNode(true));
      imagesClone.forEach((clone, i) => {
        gsap.set(clone, {
          y: (i + totalImages) * (imageHeight + gap),
          position: "absolute",
          top: 0,
          left: 0,
          width: "90%",
          height: imageHeight,
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        });
        container.appendChild(clone);
      });

      // Ajouter les clones à l'animation
      const allImages = gsap.utils.toArray(".project-image");
      tl.to(allImages, {
        y: `-=${totalHeight * 2}`,
        ease: "none",
        duration: 20,
        repeat: -1,
        modifiers: {
          y: (y) => {
            const position = parseFloat(y);
            const wrapped = position % (totalHeight * 2);
            return wrapped + "px";
          }
        }
      });

    }, imagesRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="w-screen min-h-screen bg-white px-4 md:px-16 lg:px-24 p-[10px]">
      <div className="bg-[#8CEF6C] w-full h-full rounded-[24px] p-[40px]">
        <div className="flex gap-6">

          {/* Text Section */}
          <div className="w-full">
            <div className="space-y-4">
              <h1 className="w-[234px] text-[#2B2D2D] text-[28px] font-semibold">
                Real-time transactions with business insights
              </h1>
              <p className="w-[230px] text-[#666666] text-[16px]">
                Automated expense tracking, instant reconciliation, and detailed analytics.
              </p>
            </div>
          </div>

          {/* Images container */}
          <div
            ref={imagesRef}
            className="relative w-full h-[400px] overflow-hidden rounded-lg"
          >
            {Array.from({ length: 7 }).map((_, i) => (
              <img
                key={i}
                className="project-image"
                src={`/imagesProject/img${i + 1}.jpg`}
                alt={`project ${i + 1}`}
                loading="lazy"
              />
            ))}
          </div>

          {/* Black sidebar */}
          <div className="flex justify-end w-full">
            <div className="bg-black w-[265px] h-[678px] rounded-[20px]"></div>
          </div>

        </div>
      </div>
    </div>
  );
}