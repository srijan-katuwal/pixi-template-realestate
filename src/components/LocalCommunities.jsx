export default function LocalCommunities() {
  const communities = [
    {
      name: "Toronto",
      image: "/toronto.jpg",
      aos: "fade-right",
    },
    {
      name: "Ottawa",
      image: "/Ottawa.jpg",
      aos: "fade-left",
    },
    {
      name: "Mississauga",
      image: "/city1.jpg",
      aos: "fade-right",
    },
    {
      name: "Hamilton",
      image: "/Hamilton.jpg",
      aos: "fade-left",
    },
  ];

  return (
    <section className="py-16">
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-5xl font-medium text-center px-4 md:py-4 mb-5 md:mb-10"
      >
        Discover Local Communities
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {communities.map((community, index) => (
          <a
            key={index}
            data-aos={community.aos}
            className="relative group overflow-hidden shadow-lg cursor-pointer aspect-[1/1] sm:aspect-[2/1] md:aspect-[3/2] lg:aspect-[4/3]"
          >
            {/* Image */}
            <img
              src={community.image}
              alt={community.name}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-125"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-50"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className="border-2 border-white text-white px-8 py-3 font-medium text-xl group-hover:bg-brand group-hover:border-brand group-hover:scale-110 transition-all duration-500">
                {community.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

