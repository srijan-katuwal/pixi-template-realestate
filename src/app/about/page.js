"use client";
import React, { useEffect, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import TeamMembers from "@/components/TeamMembers";
import HeroSection from "@/components/HeroSection";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Playfair+Display:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    const aosCSS = document.createElement("link");
    aosCSS.href = "https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css";
    aosCSS.rel = "stylesheet";
    document.head.appendChild(aosCSS);

    const aosScript = document.createElement("script");
    aosScript.src = "https://unpkg.com/aos@next/dist/aos.js";
    aosScript.async = true;
    aosScript.onload = () => {
      if (window.AOS) window.AOS.init({ delay: 100, once: true });
    };
    document.head.appendChild(aosScript);

    document.title = "About | PIXI Real Estate";

    return () => {
      if (fontLink.parentNode) fontLink.parentNode.removeChild(fontLink);
      if (aosCSS.parentNode) aosCSS.parentNode.removeChild(aosCSS);
      if (aosScript.parentNode) aosScript.parentNode.removeChild(aosScript);
    };
  }, []);

  return (
    <div className="overflow-x-hidden max-w-full font-sans">
      <HeroSection
        backgroundImage="house1.jpg"
        title="About PIXI Real Estate"
        subtitle="Learn more about our mission, values, and the team"
        height="60vh"
      />

      <section className="max-w-6xl mx-auto py-24 px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-8 font-serif">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 text-center mb-12">
          PIXI Real Estate is committed to providing exceptional service and
          expertise in the real estate market.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 font-serif">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-4">
              To empower our clients with the knowledge and resources they need
              to make informed real estate decisions.
            </p>
            <h3 className="text-2xl font-semibold mb-4 font-serif">
              Our Values
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Client-Centric Approach</li>
              <li>Market Expertise</li>
              <li>Integrity & Trust</li>
              <li>Innovation</li>
              <li>Community Focus</li>
            </ul>
          </div>
          <div>
            <img
              src="gallery/image 1.png"
              alt="Our Team"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      <TeamMembers />
      <SiteFooter />
    </div>
  );
}
