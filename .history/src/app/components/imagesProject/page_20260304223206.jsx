"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ImagesProject() {
  const imagesRef = useRef(null);
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const container = imagesRef.current;
      if (!container) return;

      // Attendre que toutes les images soient chargées
      const images = container.children;
      if (images.length === 0) return;

      // Configuration
      const imageHeight = 300; // Hauteur fixe
      const gap = 20; // Espace entre images
      const totalImages = images.length;
      const totalHeight = (imageHeight + gap) * totalImages;

      // Style du conteneur
      gsap.set(container, {
        height: "400px",
        position: "relative",
        overflow: "hidden"
      });

      // Positionner les images initialement
      gsap.set(images, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "90%",
        height: imageHeight,
        objectFit: "cover",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      });

      // Position verticale de chaque image
      Array.from(images).forEach((img, i) => {
        gsap.set(img, {
          y: i * (imageHeight + gap)
        });
      });

      // Animation de défilement avec ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalHeight * 2}`,
          scrub: 2, // Plus fluide
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Effet de boucle infini
            const progress = self.progress;
            const yOffset = progress * totalHeight * 2;
            
            Array.from(images).forEach((img, i) => {
              const baseY = i * (imageHeight + gap);
              const newY = (baseY - yOffset) % totalHeight;
              gsap.set(img, { y: newY });
            });
          }
        }
      });

      // Animation continue pour l'effet infini
      tl.to({}, {
        duration: 1,
        repeat: -1,
        onRepeat: () => {
          // Réinitialiser la position pour boucle infinie
          Array.from(images).forEach((img, i) => {
            const currentY = gsap.getProperty(img, "y");
            if (currentY < -totalHeight) {
              gsap.set(img, {
                y: currentY + totalHeight
              });
            }
          });
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

          {/* Text Section avec les données de l'image */}
          <div className="w-full space-y-6">
            <div className="space-y-4">
              <h1 className="w-[280px] text-[#2B2D2D] text-[32px] font-semibold leading-tight">
                Real-time transactions with business insights
              </h1>
              <p className="w-[260px] text-[#666666] text-[16px]">
                Automated expense tracking, instant reconciliation, and detailed analytics.
              </p>
            </div>

            {/* Énergie SEO */}
            <div className="mt-8">
              <h3 className="text-[#2B2D2D] font-semibold">Energy SEO</h3>
              <p className="text-[14px] text-[#666]">Organic Sales This Month.</p>
              <p className="text-[32px] font-bold text-[#2B2D2D]">$32,700k</p>
              <p className="text-[14px] text-[#8CEF6C]">79% of goal</p>
            </div>

            {/* MaxTV */}
            <div className="mt-6">
              <p className="text-[18px] font-semibold">MaxTV</p>
              <p className="text-[14px] text-[#666]">Mira cómo funciona</p>
              <p className="text-[12px] text-[#999]">(2020-2030)</p>
            </div>

            {/* Canaux */}
            <div className="mt-4">
              <p className="text-[24px] font-bold">+34K Canales.</p>
              <p className="text-[14px] text-[#666]">
                Más de +23.000 canales al alcance de tu mano, sin interrupciones.
              </p>
            </div>

            {/* Métriques */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-[12px] text-[#666]">Velocidad</p>
                <p className="text-[16px] font-semibold">+100%</p>
                <p className="text-[10px] text-[#999]">cortar 0,00%</p>
              </div>
              <div>
                <p className="text-[12px] text-[#666]">Consumo</p>
                <p className="text-[16px] font-semibold">70K</p>
                <p className="text-[10px] text-[#999]">desde 2010</p>
              </div>
              <div>
                <p className="text-[12px] text-[#666]">Carga máxima</p>
                <p className="text-[16px] font-semibold">100</p>
                <p className="text-[10px] text-[#999]">en 1 hora</p>
              </div>
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
                src={`/imagesProject/img${i + 1}.jpg`}
                alt={`project ${i + 1}`}
                className="w-[90%] h-[300px] object-cover rounded-[10px] shadow-lg"
                onLoad={() => {
                  // Optionnel: suivre le chargement des images
                  if (i === 6) setImagesLoaded(true);
                }}
              />
            ))}
          </div>

          {/* Black sidebar avec les données Breakpoint */}
          <div className="flex justify-end w-full">
            <div className="bg-black w-[265px] h-[678px] rounded-[20px] p-6 text-white">
              <h3 className="text-[18px] font-semibold mb-4">Breakpoint</h3>
              <p className="text-[14px] text-gray-300">Position: 132 x 2 y</p>
              <p className="text-[14px] text-gray-300">Width: 1200 Fixed</p>
              <p className="text-[14px] text-gray-300">Height: 1000 Fixed</p>
              <p className="text-[14px] text-gray-300">Layout: +</p>
              
              <div className="mt-6">
                <h4 className="text-[16px] font-semibold mb-2">Effect</h4>
                <p className="text-[14px] text-gray-300">Style: +</p>
                <p className="text-[14px] text-gray-300">Fill: #FFFFFF</p>
                <p className="text-[14px] text-gray-300">Overflow: Hidden</p>
              </div>
              
              <div className="mt-6">
                <h4 className="text-[16px] font-semibold mb-2">Code Overrides</h4>
                <p className="text-[14px] text-gray-300">+</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}