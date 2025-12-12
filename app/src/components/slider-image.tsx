import { getSanityImage } from "@/lib/sanity/sanityImage";
import { motion } from "motion/react";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SanityImageProps } from "./sanity-image";

import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider({ images }: { images: SanityImageProps[] }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      speed={600}
      className="w-full h-full"
    >
      {images.map((img, idx) => {
        let src = "/placeholder.svg";
        let srcSet: string[] = [];

        if (img.asset) {
          const built = getSanityImage(img.asset._ref, img.width, img.height);
          src = built.src;
          srcSet = built.srcSet;
        }

        return (
          <SwiperSlide key={idx}>
            <motion.img
              src={src}
              srcSet={srcSet.length ? srcSet.join(", ") : undefined}
              alt={img.alt ?? ""}
              className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${img.className ?? ""}`}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
