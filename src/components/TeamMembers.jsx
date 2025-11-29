import React from "react";

const teamMembers = [
  {
    img: "gallery/image 2.png",
    name: "Alex Morgan",
    role: "Lead Agent",
    desc: "Specializing in luxury properties and client relationships.",
  },
  {
    img: "gallery/image 3.png",
    name: "Jamie Lee",
    role: "Property Specialist",
    desc: "Expert in market analysis and property management.",
  },
  {
    img: "gallery/image 4.png",
    name: "Taylor Smith",
    role: "Client Advisor",
    desc: "Focused on client satisfaction and seamless transactions.",
  },
];

export default function TeamMembers() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-8 font-serif">
          Meet the Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-500 text-center">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
