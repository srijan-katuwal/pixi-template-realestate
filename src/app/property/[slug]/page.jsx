"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import SiteFooter from "@/components/SiteFooter";

// Dynamically import MapboxMap to avoid SSR issues
const MapboxMap = dynamic(() => import("@/components/MapboxMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-56 bg-gray-200 rounded-lg animate-pulse" />
  ),
});

// Demo property data
const propertyData = {
  title: "Luxury Estate in Toronto",
  price: "$1,240,000",
  address: "123 Demo Street, Toronto, ON M1M 1M1",
  beds: 4,
  baths: 3,
  sqft: "2,380",
  pricePerSqft: "$521",
  yearBuilt: "2023",
  estPayment: "$5,200/mo",
  status: "Active",
  listedDate: "Feb 20, 2025",
  updatedDate: "Sep 10",
  description: `OAKWOOD MANOR, a stunning estate built by award-winning architect Samuel Rhodes. This 8-acre property in the heart of Napa Valley blends modern design with timeless elegance. Featuring expansive gardens, walking trails, and a private vineyard, it offers a seamless connection between indoor luxury and outdoor beauty. Imported marble, custom woodwork, and panoramic glass walls make this estate a rare find. Scenic hillside views complete this unique retreat, perfect for entertaining and relaxation.`,
  images: [
    "/gallery/images0.jpeg",
    "/gallery/image 3.png",
    "/gallery/image 4.png",
    "/gallery/image 5.png",
    "/gallery/image 6.png",
  ],
  agent: {
    name: "Demo Agent",
    company: "Demo Realty",
    mobile: "(000) 000-0000",
    office: "(000) 000-0000",
    email: "demo@demo.com",
    image: "/agent.jpg",
  },
  details: {
    projectName: "Upper Vista Luxury Homes On The Muskoka River",
    builder: "Evertrust Development",
    occupancy: "Fall 2023",
    propertyType: "Semi-Detached",
    size: "2,380 feet²",
    parking: "Attached 2 garage",
    builderPrice: "$1,240,000",
    listingNumber: "HSE03143",
    dataSource: "Exclusive",
    statusChange: "2 years ago",
    addedDate: "2023-08-11",
    updatedOn: "2023-08-24",
  },
  location: {
    latitude: 43.6532,
    longitude: -79.3832,
  },
};

export default function PropertyDetailPage() {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(propertyData.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback
      const textarea = document.createElement("textarea");
      textarea.value = propertyData.address;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <>
      {/* Navigation */}
      <section className="relative w-full overflow-hidden h-[80px] bg-black">
        <nav className="absolute w-full z-20">
          <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center space-x-3">
              <span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
                PIXI
              </span>
            </Link>
            <div className="hidden w-full md:block md:w-auto">
              <ul className="font-medium flex flex-col p-4 mt-4 bg-white rounded-lg shadow-lg md:p-0 md:mt-0 md:flex-row md:space-x-8 md:bg-transparent md:shadow-none">
                <li>
                  <Link href="/" className="block py-2 px-2 md:text-white hover:text-brand">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block py-2 px-2 md:text-white hover:text-brand">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block py-2 px-2 md:text-white hover:text-brand">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 rounded-lg overflow-hidden">
          <div className="md:col-span-3">
            <img
              src={propertyData.images[0]}
              alt="Main property"
              className="w-full h-[400px] object-cover rounded-l-lg"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-1 rounded-r-lg">
            {propertyData.images.slice(1, 5).map((img, idx) => (
              <div key={idx} className={idx === 3 ? "relative" : ""}>
                <img src={img} alt={`Gallery ${idx + 2}`} className="w-full h-[198px] object-cover" />
                {idx === 3 && (
                  <button className="absolute inset-0 bg-black/50 text-white font-medium flex items-center justify-center">
                    All photos
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="mt-6 flex flex-col items-start lg:flex-row gap-8">
          {/* Left side */}
          <div className="flex-1">
            <div className="flex items-center space-x-6 text-gray-700 text-sm">
              <span className="flex items-center gap-1">
                <BedIcon /> {propertyData.beds} Beds
              </span>
              <span className="flex items-center gap-1">
                <BathIcon /> {propertyData.baths} Baths
              </span>
              <span className="flex items-center gap-1">
                <ScanIcon /> {propertyData.sqft} sqft
              </span>
            </div>
            <h2 className="text-3xl font-bold mt-6">{propertyData.price}</h2>
            <p className="text-gray-600 mt-1">{propertyData.address}</p>
            <p className="text-gray-500 mt-1">Est. payment: {propertyData.estPayment}</p>

            {/* Stats */}
            <div className="flex gap-4 mt-6 bg-white flex-wrap">
              <div className="p-6 w-[150px] border rounded-lg">
                <DollarIcon />
                <p className="font-medium mt-3">{propertyData.pricePerSqft}</p>
                <p className="text-gray-500 text-sm">Price per sqft</p>
              </div>
              <div className="p-6 w-[150px] border rounded-lg">
                <ClockIcon />
                <p className="font-medium mt-3">{propertyData.yearBuilt}</p>
                <p className="text-gray-500 text-sm">Built in</p>
              </div>
              <div className="p-6 w-[150px] border rounded-lg">
                <ScanIcon />
                <p className="font-medium mt-3">{propertyData.sqft} sqft</p>
                <p className="text-gray-500 text-sm">Property size</p>
              </div>
            </div>

            {/* Overview */}
            <div className="mt-8">
              <span className="text-lg font-bold text-gray-900 mb-2">Overview</span>
              <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="font-medium text-gray-700">{propertyData.status}</span>
                <span>|</span>
                <span>Listed {propertyData.listedDate}</span>
                <span>|</span>
                <span>Updated {propertyData.updatedDate}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{propertyData.description}</p>
            </div>
          </div>

          {/* Agent card */}
          <div className="w-full lg:w-80 bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4">
              <img
                src={propertyData.agent.image}
                alt="Agent"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{propertyData.agent.name}</p>
                <p className="text-gray-500 text-sm">{propertyData.agent.company}</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p><span className="font-medium">Mobile:</span> {propertyData.agent.mobile}</p>
              <p><span className="font-medium">Office:</span> {propertyData.agent.office}</p>
              <p><span className="font-medium">Email:</span> {propertyData.agent.email}</p>
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800">
              Contact agent
            </button>
          </div>
        </div>

        {/* Property Details Section */}
        <div className="border rounded-lg p-6 mt-8 bg-white">
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <InfoIcon />
            Property Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-gray-800">
            <div className="space-y-2">
              <DetailRow label="Project Name:" value={propertyData.details.projectName} />
              <DetailRow label="Builder(s):" value={propertyData.details.builder} />
              <DetailRow label="Occupancy Date:" value={propertyData.details.occupancy} />
              <DetailRow label="Property Type:" value={propertyData.details.propertyType} />
              <DetailRow label="Size:" value={propertyData.details.size} />
              <DetailRow label="Parking:" value={propertyData.details.parking} />
              <DetailRow label="Builder Price:" value={propertyData.details.builderPrice} />
            </div>
            <div className="space-y-2">
              <DetailRow label="Listing #:" value={propertyData.details.listingNumber} />
              <DetailRow label="Data Source:" value={propertyData.details.dataSource} />
              <DetailRow label="Status Change:" value={propertyData.details.statusChange} />
              <DetailRow label="Added to HouseSigma:" value={propertyData.details.addedDate} />
              <DetailRow label="Updated on:" value={propertyData.details.updatedOn} />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mt-8">
          <span className="text-lg font-bold text-gray-900 mb-2">Address</span>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm">{propertyData.address}</span>
            <button onClick={copyAddress} className="text-gray-500 hover:text-gray-700">
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>

          {/* Map */}
          <MapboxMap
            latitude={propertyData.location.latitude}
            longitude={propertyData.location.longitude}
            markerTitle={propertyData.address}
          />

          {/* Price and Mortgage */}
          <div className="mt-8">
            <p className="text-2xl font-bold">$5,200<span className="text-lg font-medium">/mo</span></p>
            <p className="text-sm text-gray-500">Est. mortgage payment based on a $1,240,000 home price.</p>
          </div>

          {/* Accordion Section */}
          <div className="divide-y divide-gray-200 border rounded-lg mt-4">
            <details className="p-4">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                Down payment
                <span className="text-gray-500">$248,000 (20%)</span>
              </summary>
            </details>
            <details className="p-4">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                Loan details
                <span className="text-gray-500">30-year fixed, 5.5%</span>
              </summary>
            </details>
            <details className="p-4">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                Property tax
                <span className="text-gray-500">$520 / month</span>
              </summary>
            </details>
            <details className="p-4">
              <summary className="cursor-pointer font-medium flex justify-between items-center">
                HOA fees
                <span className="text-gray-400">--</span>
              </summary>
            </details>
          </div>

          {/* Total Monthly Payment */}
          <div className="mt-2 p-4 bg-gray-50 border rounded-lg flex flex-col md:flex-row md:items-center md:justify-between">
            <span className="font-medium text-lg">Total Monthly Payment</span>
            <span className="text-xl font-medium text-brand">$5,720</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

// Detail Row Component
const DetailRow = ({ label, value }) => (
  <div className="flex">
    <span className="w-40 font-medium text-gray-500">{label}</span>
    <span className="ml-2">{value}</span>
  </div>
);

// Icons
const BedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
  </svg>
);

const BathIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/>
  </svg>
);

const ScanIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
  </svg>
);

const DollarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b49e79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
  </svg>
);

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="green" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

