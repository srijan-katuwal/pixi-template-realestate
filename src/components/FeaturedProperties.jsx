"use client";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const propertiesData = [
  {
    badge: "FOR SALE",
    image: "/house1.jpg",
    address: "Pandion Lot, Unit 3A/B, Shelter Island, NY 11965",
    price: "$6,999,000",
    details: "6,000 Sq.Ft.",
  },
  {
    badge: "PRIVATE EXCLUSIVE",
    image: "/house2.jpg",
    address: "Southampton Village New Construction",
    price: "$6,250,000",
    details: "6 Bedrooms • 7.5 Bathrooms • 4,600 Sq.Ft.",
  },
  {
    badge: "IN CONTRACT",
    image: "/house3.jpg",
    address: "Bridgehampton Abutting Reserve",
    price: "$4,995,000",
    details: "4 Bedrooms • 4 Bathrooms • 4,000 Sq.Ft.",
  },
  {
    badge: "IN CONTRACT",
    image: "/house4.jpg",
    address: "Bridgehampton Abutting Reserve",
    price: "$4,995,000",
    details: "4 Bedrooms • 4 Bathrooms • 4,000 Sq.Ft.",
  },
];

export default function FeaturedProperties() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const handleNavigation = (swiper) => {
    // Update navigation button references
    if (swiper.params.navigation) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <section
      id="properties"
      className="py-10 max-w-[1700px] w-full md:w-[90%] mx-auto px-4 sm:px-6 md:px-8"
    >
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-5xl font-medium text-center py-4 mt-8 md:mt-16"
      >
        Featured Properties
      </h2>

      <div
        data-aos="fade-left"
        data-aos-duration="500"
        className="my-4 md:my-12 pb-24 xl:pb-0 xl:h-[600px] 2xl:h-[650px] relative"
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={32}
          speed={800}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            // Add class to enable transitions after initialization
            setTimeout(() => {
              swiper.el.classList.add("custom-swiper-initialized");
            }, 100);
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              handleNavigation(swiper);
            }, 0);
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2.7, spaceBetween: 100 },
            1650: { slidesPerView: 3, spaceBetween: 180 },
          }}
          className="h-full"
        >
          <div className="swiper-wrapper">
          {propertiesData.map((slide, index) => (
            <SwiperSlide key={index} className="block">
                <Link href="/property-detail">
                  <div className="relative">
                    <span className="absolute top-3 left-3 bg-white/80 text-xs px-2 py-2 rounded">
                      {slide.badge}
                    </span>
                    <img
                      src={slide.image}
                      className="aspect-[3/2] object-cover w-full"
                      loading="lazy"
                      alt={`Property ${index + 1}`}
                    />
                  </div>
                  <div className="mt-4 text-sm text-gray-700">
                    {slide.address}
                  </div>
                  <div className="text-xl font-semibold mt-2">{slide.price}</div>
                  <div className="text-sm text-gray-500 mt-1">{slide.details}</div>
                </Link>
            </SwiperSlide>
          ))}
          </div>
        </Swiper>

        {/* Navigation Arrows */}
        <button
          ref={prevRef}
          className="custom-prev group absolute z-10 bottom-0 rounded-full w-16 h-16 border flex items-center justify-center hover:border-brand cursor-pointer bg-white"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(90deg)" }}
          >
            <path
              d="M4.75 9.75L10.94 15.94C11.2213 16.2209 11.6025 16.3787 12 16.3787C12.3975 16.3787 12.7787 16.2209 13.06 15.94L19.25 9.75"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-brand"
            />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="custom-next group absolute z-10 bottom-0 left-20 rounded-full w-16 h-16 border flex items-center justify-center hover:border-brand cursor-pointer bg-white"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(-90deg)" }}
          >
            <path
              d="M4.75 9.75L10.94 15.94C11.2213 16.2209 11.6025 16.3787 12 16.3787C12.3975 16.3787 12.7787 16.2209 13.06 15.94L19.25 9.75"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-brand"
            />
          </svg>
        </button>
        <div className="border-t absolute z-10 bottom-8 left-44 w-1/3 md:left-52 md:w-1/4 h-[1px]"></div>
      </div>
    </section>
  );
}
