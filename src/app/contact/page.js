"use client";
import React, { useEffect, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
export default function Contact() {
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

    document.title = "Contact | PIXI Real Estate";

    return () => {
      if (fontLink.parentNode) fontLink.parentNode.removeChild(fontLink);
      if (aosCSS.parentNode) aosCSS.parentNode.removeChild(aosCSS);
      if (aosScript.parentNode) aosScript.parentNode.removeChild(aosScript);
    };
  }, []);

  return (
    <div className="overflow-x-hidden max-w-full font-sans">
      <HeroSection
        backgroundImage="house2.jpg"
        title="Contact Us"
        subtitle=" We're here to help you with all your real estate needs. Reach out to
            us today!"
        height="60vh"
      />

      <ContactForm />

      <SiteFooter />
    </div>
  );
}
