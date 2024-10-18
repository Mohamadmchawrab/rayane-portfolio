"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

// Import SVG icons from the public folder
import InstagramIcon from "../../../public/instagram.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const navLinks = [
  {
    title: "Instagram",
    path: "https://www.instagram.com/rayane.merhi?igsh=MWN0M3dzeTAwdDl0cA==", // Replace with actual Instagram URL
    icon: InstagramIcon, // Use imported icon
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/rayan-merhi-0a8935198?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", // Replace with actual LinkedIn URL
    icon: LinkedinIcon, // Use imported icon
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4">
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div>
          <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
            <Image
              src="/images/projects/ray_logo.png"
              alt="logo"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center justify-between">
            <Link href={navLinks[0].path} target="_blank" rel="noopener noreferrer">
              <Image src={navLinks[0].icon} alt={`${navLinks[0].title} Icon`} width={25} height={25} />
            </Link>
            <Link href={navLinks[1].path} target="_blank" rel="noopener noreferrer">
              <Image src={navLinks[1].icon} alt={`${navLinks[1].title} Icon`} width={30} height={30} />
            </Link>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
