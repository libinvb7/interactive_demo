"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import menu from "../../data/menu/menu";

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(null);
  const toggleMenu = (menuName) => {
    setIsOpen(isOpen === menuName ? null : menuName);
  };

  return (
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 drop-shadow-sm transition-all duration-150">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/images/Datapoint_logo.png"
            width={120}
            height={150}
            className="h-8"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
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
          id="mega-menu-full"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            {menu.navItems.map((menuItem, j) => (
              <li key={j}>
                <button
                  onMouseEnter={() => toggleMenu(menuItem.name)}
                  onMouseLeave={() => toggleMenu(null)}
                  id="mega-menu-full-dropdown-button"
                  data-collapse-toggle="mega-menu-full-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {menuItem.name}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {menuItem.name === isOpen && (
                  <div
                    onMouseEnter={() => toggleMenu(menuItem.name)}
                    onMouseLeave={() => toggleMenu(null)}
                    id="mega-menu-full-dropdown "
                    className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 absolute top-14 w-full left-0"
                  >
                    {
                        menuItem.sections.map((section, k) =>(
                            <div key={k} className=" max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white flex md:px-6s">
                            <div className=" w-2/5 border border-r-1  border-t-0 border-b-0 border-l-0">
                              <h2 className="text-primary text-left px-3 text-base uppercase">
                                {section.title}
                              </h2>
                              <div className="flex justify-between flex-wrap">
                                {section.navMenu.map((item, i) => (
                                  <div className="w-1/3" key={i}>
                                    <Link
                                      href="#"
                                      className="  block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                      <div className="font-semibold text-sm text-[#003058]">
                                        {item.title}
                                      </div>
                                      <span className="text-sm text-gray-500 dark:text-gray-400 text-[#003058]">
                                        {item.desc}
                                      </span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))
                    }
                   
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
