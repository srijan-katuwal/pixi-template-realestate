"use client";
import React, { useState } from "react";
import Navigation from "./Navigation";

export default function HeroSection({
  backgroundVideo,
  backgroundImage,
  title,
  subtitle,
  height = "60vh",
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className={`relative w-full`} style={{ height }}>
      {/* Background */}
      {backgroundVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
      ) : null}

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-4 text-shadow-black">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg mb-10 max-w-2xl tracking-widest text-shadow-black">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
