import Link from "next/link";

export default function SiteFooter() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg aria-label="Instagram" role="img" viewBox="0 0 24 24" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5 transform scale-125" fill="currentColor" viewBox="0 0 32 32">
          <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transform scale-90" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white text-black py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-8">
        <div className="col-span-3 font-medium text-4xl">PIXI</div>

        {/* Sitemap */}
        <div className="col-span-1">
          <h3 className="font-medium mb-4 tracking-wide text-sm text-black/80">Sitemap</h3>
          <ul className="space-y-1 tracking-wide">
            <li>
              <Link href="/" className="hover:underline font-bold underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-medium mb-4 tracking-wide text-sm text-black/80">Contact</h3>
          <p className="tracking-wide">Demo Real Estate</p>
          <p>
            <a className="hover:underline tracking-wide">206-555-9284</a>
          </p>
        </div>

        {/* Address */}
        <div className="col-span-3 md:col-span-1">
          <h3 className="font-medium mb-4 tracking-wide text-sm text-black/80">Address</h3>
          <p className="tracking-wide">123 Demo Street</p>
          <p className="tracking-wide">Toronto, ON M1M 1M1</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 mt-8 text-sm text-gray-600 leading-relaxed tracking-wide">
        The information provided on this website is for demonstration purposes only and does not represent actual
        listings or transactions. All property details, prices, images, and availability are fictional and may not
        reflect real-world data. Measurements, descriptions, and features are approximate and created for sample
        display only. This template is not intended for use in real estate brokerage, legal, or financial activities.
        Any resemblance to actual properties, agents, or locations is purely coincidental.
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-4 mt-6 flex flex-col md:flex-row items-center justify-between mb-20">
        <div className="text-gray-600 text-sm mb-4 md:mb-0">
          &copy; 2025 Demo Real Estate. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="border border-black rounded-full p-2 hover:bg-black hover:text-white transition"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

