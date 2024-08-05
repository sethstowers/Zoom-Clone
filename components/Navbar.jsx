
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed z-50 w-full bg-dark-1 lg:px-10 navbar">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/real-zoom.png"
          width={55}
          height={50}
          alt="Zoom Logo"
          className="max-sm:size-[60px]"
        />
        <Image
          src="/icons/zoom-text.png"
          width={110}
          height={50}
          alt="Zoom Logo"
          
        />
        {/* <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Zoom
        </p> */}
      </Link>

      <div className="flex justify-between gap-5">
      <SignedIn>
        <UserButton />
      </SignedIn>

      <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
