"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const accessoriesImages = [
  {
    src: "/images/DubinskoPranje035_slika2.jpg",
    alt: "Detalj opreme za dubinsko pranje - rezervoari i creva",
  },
  {
    src: "/images/DubinskoPranje035_slika3.jpg",
    alt: "Kompletna oprema spremna za rad - nastavci i creva",
  },
  {
    src: "/images/DubinskoPranje035_slika4.jpg",
    alt: "Pogled na mašinu i dodatnu opremu za dubinsko čišćenje",
  },
  {
    src: "/images/DubinskoPranje035_slika5.jpg",
    alt: "Set pribora koji dobijate uz mašinu za iznajmljivanje",
  },
];

export function AccessoriesSlideshow() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % accessoriesImages.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + accessoriesImages.length) % accessoriesImages.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeImage = accessoriesImages[current];

  return (
    <div className="relative w-full">
      {/* Main slide */}
      <div className="aspect-[16/9] md:aspect-[5/3] rounded-3xl bg-gradient-to-br from-secondary to-primary/5 border border-border/50 overflow-hidden shadow-2xl shadow-primary/15">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover md:object-contain bg-background/80 transition-transform duration-700 ease-out"
          priority={current === 0}
        />

        {/* Suptilan overlay za luksuzniji izgled */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

        {/* Navigation buttons */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition cursor-pointer backdrop-blur-sm"
          aria-label="Prethodna slika"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition cursor-pointer backdrop-blur-sm"
          aria-label="Sledeća slika"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {accessoriesImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setCurrent(index)}
            className={`relative aspect-[4/3] rounded-2xl overflow-hidden border transition-all cursor-pointer ${
              index === current
                ? "border-primary ring-2 ring-primary/60 shadow-lg shadow-primary/20 scale-[1.03]"
                : "border-border/60 hover:border-primary/40 hover:shadow-md hover:scale-[1.02]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="120px"
              className="object-cover"
            />
            <div
              className={`absolute inset-0 bg-black/30 transition-opacity ${
                index === current ? "opacity-0" : "opacity-40 hover:opacity-20"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

