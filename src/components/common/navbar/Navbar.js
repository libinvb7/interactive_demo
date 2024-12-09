"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import menu from "../../../data/menu/menuData";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import MobileMenu from "./MobileMenu";
import MegaMenuItem from "./MegaMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = (menuName) => {
    setIsOpen(isOpen === menuName ? null : menuName);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`lg:block  fixed top-0 left-0 w-full z-50 drop-shadow-sm transition-all ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-3 md:p-0">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/assets/images/Datapoint_logo.png"
            width={120}
            height={140}
            className="bg-white p-2 rounded-lg"
            alt="Datapoint Logo"
          />
        </Link>
        <button
          onClick={toggleMobileMenu}
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center bg-white p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          {isMobileMenuOpen ? (
            <MdClose className="text-2xl transition-all text-[#003058]" />
          ) : (
            <RxHamburgerMenu className="text-2xl transition-all text-[#003058]" />
          )}
        </button>
        <MegaMenuItem
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          menu={menu}
          isScrolled={isScrolled}
        />
      </div>

      {isMobileMenuOpen && (
        <MobileMenu
          menu={menu}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
