"use client";
import React, { useEffect, useRef, useState } from "react";

export default function RealEstateWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);

  const slides = [
    {
      badge: "FOR SALE",
      image: "house1.jpg",
      address: "Pandion Lot, Unit 3A/B, Shelter Island, NY 11965",
      price: "$6,999,000",
      details: "6,000 Sq.Ft.",
    },
    {
      badge: "PRIVATE EXCLUSIVE",
      image: "house2.jpg",
      address: "Southampton Village New Construction",
      price: "$6,250,000",
      details: "6 Bedrooms • 7.5 Bathrooms • 4,600 Sq.Ft.",
    },
    {
      badge: "IN CONTRACT",
      image: "house3.jpg",
      address: "Bridgehampton Abutting Reserve",
      price: "$4,995,000",
      details: "4 Bedrooms • 4 Bathrooms • 4,000 Sq.Ft.",
    },
    {
      badge: "IN CONTRACT",
      image: "house4.jpg",
      address: "Bridgehampton Abutting Reserve",
      price: "$4,995,000",
      details: "4 Bedrooms • 4 Bathrooms • 4,000 Sq.Ft.",
    },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  useEffect(() => {
    // Autoplay
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [activeSlide, isTransitioning]);

  // Scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-aos]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Playfair+Display:wght@400;700&display=swap');
        
        h1, h2 {
          font-family: 'Playfair Display', serif;
        }
        
        body {
          font-family: 'Montserrat', sans-serif;
        }
        
        html, body {
          overflow-x: hidden !important;
          max-width: 100vw;
        }
        
        .text-shadow-black {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
        }

        [data-aos] {
          opacity: 0;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        [data-aos].aos-animate {
          opacity: 1;
        }

        [data-aos="fade-up"] {
          transform: translateY(30px);
        }

        [data-aos="fade-up"].aos-animate {
          transform: translateY(0);
        }

        [data-aos="fade-left"] {
          transform: translateX(30px);
        }

        [data-aos="fade-left"].aos-animate {
          transform: translateX(0);
        }

        [data-aos="fade-right"] {
          transform: translateX(-30px);
        }

        [data-aos="fade-right"].aos-animate {
          transform: translateX(0);
        }

        .property-slide {
          transition: all 0.8s ease-in-out;
        }

        @media (min-width: 1280px) {
          .property-slide.active {
            width: 150%;
          }
          
          .property-slide:not(.active) {
            transform: translateX(50%);
            width: 100%;
          }
          
          .property-slide.prev {
            opacity: 0;
          }
        }
      `}</style>

      <div className="overflow-x-hidden max-w-[100vw]">
        <section className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          >
            <source src="videos/real-estate3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <nav className="absolute w-full z-20">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="index.html" className="flex items-center space-x-3">
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                  PIXI
                </span>
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 bg-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>

              <div
                className={`${
                  menuOpen ? "" : "hidden"
                } w-full md:block md:w-auto transition-all duration-300 ease-in-out`}
                id="navbar-default"
              >
                <ul className="font-medium flex flex-col p-4 mt-4 bg-white rounded-lg shadow-lg md:p-0 md:mt-0 md:flex-row md:space-x-8 md:bg-transparent md:shadow-none">
                  <li>
                    <a
                      href="index.html"
                      className="block py-2 px-2 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b49e79] md:text-white underline"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="about.html"
                      className="block py-2 px-2 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b49e79] md:text-white"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="contact.html"
                      className="block py-2 px-2 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#b49e79] md:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-normal font-['Playfair_Display'] mb-4 text-shadow-black">
              Demo Real Estate
            </h1>
            <p className="text-lg mb-10 max-w-2xl font-['Montserrat'] tracking-widest text-shadow-black">
              Discover exclusive properties
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href="contact.html"
                className="border border-white text-white tracking-wider px-6 py-3 text-md font-normal text-shadow-black hover:bg-[#b49e79] hover:border-[#b49e79] hover:text-white transition-all duration-500"
              >
                Contact Us
              </a>
              <a
                href="#properties"
                className="border border-white tracking-wider text-white px-6 py-3 text-md font-normal text-shadow-black hover:bg-[#b49e79] hover:border-[#b49e79] hover:text-white transition-all duration-500"
              >
                View Listings
              </a>
            </div>
          </div>
        </section>

        <section
          id="properties"
          className="py-10 max-w-[1700px] w-100 md:w-[90%] mx-auto px-4 sm:px-6 md:px-8"
        >
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-medium text-center py-4 mt-8 md:mt-16"
          >
            Featured Properties
          </h2>

          <div
            data-aos="fade-left"
            className="my-4 md:my-12 pb-24 xl:pb-0 xl:h-[600px] 2xl:h-[650px] relative"
            ref={sliderRef}
          >
            <div className="overflow-hidden">
              <div className="flex gap-8 md:gap-32">
                {slides.map((slide, index) => {
                  const isActive = index === activeSlide;
                  const isPrev =
                    index === (activeSlide - 1 + slides.length) % slides.length;

                  return (
                    <a
                      key={index}
                      href="property-detail.html"
                      className={`shrink-0 w-full md:w-[calc(50%-4rem)] xl:w-[calc(33.33%-5.33rem)] property-slide ${
                        isActive ? "active" : ""
                      } ${isPrev ? "prev" : ""}`}
                      style={{
                        display:
                          index === activeSlide ||
                          index === (activeSlide + 1) % slides.length ||
                          index === (activeSlide + 2) % slides.length
                            ? "block"
                            : "none",
                      }}
                    >
                      <div>
                        <div className="relative">
                          <span className="absolute top-3 left-3 bg-white/80 text-xs px-2 py-2 rounded">
                            {slide.badge}
                          </span>
                          <img
                            src={slide.image}
                            className="aspect-3/2 object-cover w-full"
                            loading="lazy"
                            alt={`Property ${index + 1}`}
                          />
                        </div>
                        <div className="mt-4 text-sm text-gray-700">
                          {slide.address}
                        </div>
                        <div className="text-xl font-semibold mt-2">
                          {slide.price}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          {slide.details}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div
              onClick={prevSlide}
              className="custom-prev group absolute z-10 bottom-0 rounded-full w-16 h-16 border flex items-center justify-center hover:border-[#b49e79] cursor-pointer"
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
                  className="group-hover:stroke-[#b49e79]"
                />
              </svg>
            </div>
            <div
              onClick={nextSlide}
              className="custom-next group absolute z-10 bottom-0 left-20 rounded-full w-16 h-16 border flex items-center justify-center hover:border-[#b49e79] cursor-pointer"
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
                  className="group-hover:stroke-[#b49e79]"
                />
              </svg>
            </div>
            <div className="border-t absolute z-10 bottom-8 left-44 w-1/3 md:left-52 md:w-1/4 h-px"></div>
          </div>
        </section>

        <section className="max-w-screen-2xl mx-auto py-8">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-medium text-center px-4 md:py-4 mb-5 md:mb-10"
          >
            Your Real Estate Journey Starts Here
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-5">
            <a
              data-aos="fade-right"
              className="relative group overflow-hidden shadow-lg cursor-pointer aspect-3/4 sm:aspect-2/1 md:aspect-3/2 lg:aspect-4/3"
            >
              <img
                src="house9.jpg"
                alt="Buying a Home"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute bottom-0 w-full h-[150px] p-5 pt-0 pb-8 group-hover:h-full group-hover:p-0 transition-all duration-500 ease-in-out">
                <div className="bg-[#b49e79] text-white text-center p-2 w-full sm:w-3/4 h-full mx-auto flex justify-center flex-col group-hover:w-full group-hover:bg-zinc-800/80 transition-all duration-500 ease-in-out">
                  <h2 className="text-xl md:text-4xl font-medium transition-colors duration-500">
                    Buying a Home
                  </h2>
                  <p className="text-md mt-4 transition-opacity duration-500">
                    Explore new listings and neighborhoods
                  </p>
                </div>
              </div>
            </a>

            <a
              data-aos="fade-left"
              className="relative group overflow-hidden shadow-lg cursor-pointer aspect-3/4 sm:aspect-2/1d:aspect-[3/2] lg:aspect-4/3"
            >
              <img
                src="house8.jpg"
                alt="Selling a Home"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute bottom-0 w-full h-[150px] p-5 pt-0 pb-8 group-hover:h-full group-hover:p-0 transition-all duration-500 ease-in-out">
                <div className="bg-[#b49e79] text-white text-center p-2 w-full sm:w-3/4 h-full mx-auto flex justify-center flex-col group-hover:w-full group-hover:bg-zinc-800/80 transition-all duration-500 ease-in-out">
                  <h2 className="text-xl md:text-4xl font-medium transition-colors duration-500">
                    Selling a Home
                  </h2>
                  <p className="text-md mt-4 transition-opacity duration-500">
                    Trusted guidance from start to close
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="py-16">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-medium text-center px-4 md:py-4 mb-5 md:mb-10"
          >
            Discover Local Communities
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <a
              data-aos="fade-right"
              className="relative group overflow-hidden shadow-lg cursor-pointer aspect-square sm:aspect-2/1 md:aspect-3/2 lg:aspect-4/3"
            >
              <img
                src="toronto.jpg"
                alt="Toronto"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="border-2 border-white text-white px-8 py-3 font-medium text-xl group-hover:bg-[#b49e79] group-hover:border-[#b49e79] group-hover:scale-110 transition-all duration-500">
                  Toronto
                </span>
              </div>
            </a>
            <a
              data-aos="fade-left"
              className="relative group overflow-hidden shadow-lg cursor-pointer aspect-square sm:aspect-2/1 md:aspect-3/2 lg:aspect-4/3"
            >
              <img
                src="Ottawa.jpg"
                alt="Ottawa"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="border-2 border-white text-white px-8 py-3 font-medium text-xl group-hover:bg-[#b49e79] group-hover:border-[#b49e79] group-hover:scale-110 transition-all duration-500">
                  Ottawa
                </span>
              </div>
            </a>
            <a
              data-aos="fade-right"
              className="relative group overflow-hidden shadow-lg cursor-pointer aspect-square sm:aspect-2/1 md:aspect-3/2 lg:aspect-4/3"
            >
              <img
                src="city1.jpg"
                alt="Hamilton"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="border-2 border-white text-white px-8 py-3 font-medium text-xl group-hover:bg-[#b49e79] group-hover:border-[#b49e79] group-hover:scale-110 transition-all duration-500">
                  Mississauga
                </span>
              </div>
            </a>
            <a
              data-aos="fade-left"
              className="relative group overflow-hidden shadow-lg cursor-pointer aspect-square sm:aspect-2/1 md:aspect-3/2 lg:aspect-4/3"
            >
              <img
                src="Hamilton.jpg"
                alt="Hamilton"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
              />
              <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <span className="border-2 border-white text-white px-8 py-3 font-medium text-xl group-hover:bg-[#b49e79] group-hover:border-[#b49e79] group-hover:scale-110 transition-all duration-500">
                  Hamilton
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white text-black py-10">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-8">
            <div className="col-span-3 font-medium text-4xl">PIXI</div>

            <div className="col-span-1">
              <h3 className="font-medium mb-4 tracking-wide text-sm text-black/80">
                Sitemap
              </h3>
              <ul className="space-y-1 tracking-wide">
                <li>
                  <a
                    href="index.html"
                    className="hover:underline font-bold underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="font-medium mb-4 tracking-wide text-sm text-black/80">
                Contact
              </h3>
              <p className="tracking-wide">Demo Real Estate</p>
              <p>
                <a className="hover:underline tracking-wide">206-555-9284</a>
              </p>
            </div>

            <div className="col-span-3 md:col-span-1">
              <h3 className="font-medium mb-4 tracking-wide text-sm text-black/80">
                Address
              </h3>
              <p className="tracking-wide">123 Demo Street</p>
              <p className="tracking-wide">Toronto, ON M1M 1M1</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-8 text-sm text-gray-600 leading-relaxed tracking-wide">
            The information provided on this website is for demonstration
            purposes only and does not represent actual listings or
            transactions. All property details, prices, images, and availability
            are fictional and may not reflect real-world data. Measurements,
            descriptions, and features are approximate and created for sample
            display only. This template is not intended for use in real estate
            brokerage, legal, or financial activities. Any resemblance to actual
            properties, agents, or locations is purely coincidental.
          </div>

          <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col md:flex-row items-center justify-between mb-20">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; 2025 Demo Real Estate. All rights reserved.
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              >
                <svg
                  aria-label="Instagram"
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              >
                <svg
                  className="w-5 h-5 transform scale-125"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
                </svg>
              </a>
              <a
                href="#"
                className="border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transform scale-90"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
