import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const closeMenu = () => setOpenMenu(null);

  return (
    <nav className="flex justify-between items-center p-6 ">
      {/* Nav List */}
      <ul className="flex space-x-8 text-lg font-medium text-[#fff]">
        {/* Services */}
        <li className="relative flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
          <span className="text-[14px] ">Services</span>
          <ChevronDownIcon
            className="w-4 h-4"
            onClick={() => toggleMenu("services")}
          />
          {openMenu === "services" && (
            <ul className="absolute top-full left-0 bg-[#101010] w-max text-sm text-[#8D8D8D] shadow-lg mt-2 rounded-md z-10">
              <li
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Social Media Marketing (SMM)
              </li>
              <li
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Community Management
              </li>
              <li
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                PR
              </li>
              <li
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Influencer Marketing
              </li>
              <li
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Web Development
              </li>
              <li
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Paid Advertising
              </li>
            </ul>
          )}
        </li>

        {/* Industries */}
        <li className="relative flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
          <span className="text-[14px] ">Industries</span>
          <ChevronDownIcon
            className="w-4 h-4"
            onClick={() => toggleMenu("industries")}
          />
          {openMenu === "industries" && (
            <ul className="absolute top-full left-0 bg-[#101010] w-max text-sm text-[#8D8D8D] shadow-lg mt-2 rounded-md z-10">
              <li
                onClick={() => {
                  document.getElementById("industries")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                IDO Marketing
              </li>
              <li
                onClick={() => {
                  document.getElementById("industries")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                NFTs Marketing
              </li>
              <li
                onClick={() => {
                  document.getElementById("industries")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Defi Marketing
              </li>
              <li
                onClick={() => {
                  document.getElementById("industries")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                GameFi Marketing
              </li>
              <li
                onClick={() => {
                  document.getElementById("industries")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Crypto Exchange
              </li>
            </ul>
          )}
        </li>

        {/* Cases (no dropdown) */}
        <li className="cursor-pointer hover:text-yellow-400 text-[14px]">
          Cases
        </li>

        {/* Companies */}
        <li className="relative flex items-center space-x-1 cursor-pointer hover:text-yellow-400">
          <span className="text-[14px] ">Companies</span>
          <ChevronDownIcon
            className="w-4 h-4  cursor-pointer hover:text-yellow-400"
            onClick={() => toggleMenu("companies")}
          />
          {openMenu === "companies" && (
            <ul className="absolute top-full left-0 bg-[#101010] w-max text-sm text-[#8D8D8D] shadow-lg mt-2 rounded-md z-10">
              <li
                onClick={() => {
                  document.getElementById("partners")?.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu(); // your existing function
                }}
                className="px-4 py-2 hover:text-amber-500 cursor-pointer"
              >
                Partners
              </li>
            </ul>
          )}
        </li>

        {/* Contact (no dropdown) */}
        <li className="cursor-pointer hover:text-yellow-400  text-[14px]">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
