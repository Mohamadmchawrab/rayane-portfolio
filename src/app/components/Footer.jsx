import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto p-6 flex justify-between items-center">
        {/* Left side logo */}
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            src="/images/projects/ray_logo.png"
            alt="logo"
            width={70}
            height={70}
          />
        </Link>

        <div className="flex items-center space-x-2">
        <a target="_blank" href="https://www.instagram.com/code_bymo/">
          <Image
            src="/images/projects/logo.png"
            alt="logo"
            width={45}
            height={45}
          />
          <p className="text-slate-200">@2024
          </p>
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
