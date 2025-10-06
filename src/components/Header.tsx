import { useState } from "react";
import { navItems } from "../data.ts";
import Button from "./subComponents/Button.tsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-center w-full shadow-sm overflow-hidden sticky top-0 bg-white z-50">
      <div className="w-[95%] max-w-[1200px] mx-auto flex items-center justify-between py-6">
        <h1 className="text-[32px] md: lg:text-[40px] leading-[110%] tracking-[-3%] align-middle font-bold">
          <a href="#">Cuditech</a>
        </h1>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 lg:gap-2.5">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-[#101828] border border-transparent hover:border-[#101828] md:py-1.5 md:px-4 lg:py-2 lg:px-6 rounded-full transition duration-300 text-xs sm:text-base leading-6"
            >
              {item.name}
            </a>
          ))}
        </nav>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-[#1A73E8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Button
          children="Get Free Demo"
          className="bg-[#1A73E8] hover:bg-transparent border border-[#1A73E8] text-xs sm:text-base leading-6 text-white hover:text-[#1A73E8] py-1.5 px-4 lg:py-4 lg:px-7 rounded-full hidden md:inline-block"
        />
      </div>
      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 w-full bg-white shadow-lg z-50">
          <nav className="flex flex-col gap-3 py-6 px-4">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-[#101828] border border-transparent hover:border-[#101828] py-2.5 px-4 transition duration-300 w-full rounded-full text-base leading-6"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button
              children="Get Free Demo"
              className="bg-[#1A73E8] hover:bg-transparent border border-[#1A73E8] text-base leading-6 text-white hover:text-[#1A73E8] py-4 px-7 rounded-full"
            />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
