export default function RealEstateJourney() {
  const journeyOptions = [
    {
      title: "Buying a Home",
      description: "Explore new listings and neighborhoods",
      image: "/house9.jpg",
      alt: "Buying a Home",
      aos: "fade-right",
    },
    {
      title: "Selling a Home",
      description: "Trusted guidance from start to close",
      image: "/house8.jpg",
      alt: "Selling a Home",
      aos: "fade-left",
    },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto py-8">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-5xl font-medium text-center px-4 md:py-4 mb-5 md:mb-10"
      >
        Your Real Estate Journey Starts Here
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-5">
        {journeyOptions.map((option, index) => (
          <a
            key={index}
            data-aos={option.aos}
            className="relative group overflow-hidden shadow-lg cursor-pointer aspect-[3/4] sm:aspect-[2/1] md:aspect-[3/2] lg:aspect-[4/3]"
          >
            {/* Image */}
            <img
              src={option.image}
              alt={option.alt}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Text Container */}
            <div className="absolute bottom-0 w-full h-[150px] p-5 pt-0 pb-8 group-hover:h-full group-hover:p-0 transition-all duration-500 ease-in-out">
              <div className="bg-brand text-white text-center p-2 w-full sm:w-3/4 h-full mx-auto flex justify-center flex-col group-hover:w-full group-hover:bg-zinc-800/80 transition-all duration-500 ease-in-out">
                <h2 className="text-xl md:text-4xl font-medium transition-colors duration-500">
                  {option.title}
                </h2>
                <p className="text-md mt-4 transition-opacity duration-500">
                  {option.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

