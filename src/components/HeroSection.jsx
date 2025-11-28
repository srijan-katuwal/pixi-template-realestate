"use client";
import Navigation from "./Navigation";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-svh overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/videos/real-estate3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navigation */}
      <Navigation />

      {/* Content Over Video */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-normal font-heading mb-4 text-shadow-black">
          Demo Real Estate
        </h1>
        <p className="text-lg mb-10 max-w-2xl font-body tracking-widest text-shadow-black">
          Discover exclusive properties
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/contact"
            className="border border-white text-white tracking-wider px-6 py-3 text-md font-normal text-shadow-black hover:bg-brand hover:border-brand hover:text-white transition-all duration-500"
          >
            Contact Us
          </Link>
          <a
            href="#properties"
            className="border border-white tracking-wider text-white px-6 py-3 text-md font-normal text-shadow-black hover:bg-brand hover:border-brand hover:text-white transition-all duration-500"
          >
            View Listings
          </a>
        </div>
      </div>
    </section>
  );
}

