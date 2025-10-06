import { footerNavItems, footerProductsNav, footerSocials } from "../data.ts";
import { useState, useEffect } from "react"; // <-- Add this line

const Footer = () => {
  const footerNavLinks = [
    { heading: "Product", links: footerProductsNav },
    { heading: "Social", links: footerSocials },
  ];

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex items-center justify-center w-full overflow-hidden pb-6">
      <div className="w-[95%] max-w-[1200px] mx-auto flex flex-col py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start justify-between w-full gap-4">
          <div className="md:max-w-80 flex flex-col gap-4 mb-8 col-span-1">
            <h1 className="text-[#101828] text-[40px] leading-[110%] tracking-[-3%] align-middle font-bold">
              Cuditech
            </h1>
            <p className="text-[#667085] text-base leading-6">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 items-start justify-between w-full gap-8 lg:col-span-3">
            <div className="lg:col-span-2 hidden lg:flex items-start justify-center gap-10 w-full">
              {footerNavLinks.map((nav, i) => (
                <div key={i} className="flex flex-col items-start mb-8 pr-10">
                  <h2 className="text-[#101828] text-lg leading-6 font-semibold mb-4">
                    {nav.heading}
                  </h2>
                  <nav className="flex flex-col gap-2">
                    {nav.links.map((link, j) => (
                      <a
                        key={j}
                        href={link.href}
                        className="text-[#667085] hover:text-[#1A73E8] transition duration-300 text-sm leading-5"
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
              ))}
            </div>
            <div className="md:col-span-2 w-full mb-6">
              <h2 className="text-[#101828] text-lg leading-6 font-semibold mb-4">
                Stay up to date
              </h2>
              <form className="flex flex-col sm:flex-row gap-2 justify-between w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-[14px] py-2.5 border border-[#D0D5DD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A73E8] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#1A73E8] text-white rounded-lg hover:bg-[#1669C1] transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 lg:hidden grid grid-cols-2 items-start justify-center gap-10 w-full">
          {footerNavLinks.map((nav, i) => (
            <div key={i} className="flex flex-col items-start mb-8 pr-10">
              <h2 className="text-[#101828] text-lg leading-6 font-semibold mb-4">
                {nav.heading}
              </h2>
              <nav className="flex flex-col gap-2">
                {nav.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    className="text-[#667085] hover:text-[#1A73E8] transition duration-300 text-sm leading-5"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full gap-2 border-t border-[#EAECF0] pt-8">
          <p className="text-[#98A2B3] text-center sm:text-start text-sm sm:text-base leading-5 sm:leading-6">
            &copy; {new Date().getFullYear()} Cuditech Services. All rights
            reserved.
          </p>
          <nav className="flex gap-4">
            {footerNavItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-[#98A2B3] hover:text-[#1A73E8] transition duration-300 text-sm sm:text-base leading-5 sm:leading-6"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed z-50 bottom-0 right-2 bg-[#1A73E8] text-white p-1.5 lg:p-2.5 rounded-full shadow-lg animate-bounce hover:bg-[#1669C1] transition duration-300"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-up"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      )}
    </footer>
  );
};

export default Footer;
