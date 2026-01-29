"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Logo from "@/public/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-black h-10 flex font-light text-white justify-between px-4 sm:px-6 md:px-10 items-center text-xs sm:text-sm">
        <div className="flex gap-4 sm:gap-8">
          <span className="flex items-center">
            <MapPin size={14} className="mr-2" />
            <p className="hidden sm:block">Wolverhamton, UK</p>
          </span>

          <hr className="h-6 w-px bg-white hidden sm:block" />

          <span className="flex items-center">
            <Phone size={14} className="mr-2" />
            <p className="hidden sm:block">+8292747247</p>
          </span>
        </div>

        <span className="flex items-center">
          <Facebook size={14} className="mx-2" />
          <Twitter size={14} className="mx-2" />
          <Instagram size={14} className="mx-2" />
          <FaTiktok size={14} className="mx-2" />
        </span>
      </div>

      {/* Main Nav */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 bg-white h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="Farhama Logo" className="h-12 w-12 sm:h-14 sm:w-14" />
          <span className="flex flex-col leading-3 ml-2">
            <h3 className="font-extrabold text-xl sm:text-2xl md:text-3xl">
              FARHAMA
            </h3>
            <p className="text-xs sm:text-sm">Scents & Abayaa</p>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="customLink hidden md:flex text-sm items-center gap-10 uppercase tracking-widest">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 uppercase tracking-widest text-sm">
          <Search size={25} />
          <ShoppingBag size={25} />
          <Link href="/shop">Shop Now</Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-4">
          <Search size={22} />
          <ShoppingBag size={22} />
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-6 uppercase tracking-widest text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Shop Now</Link>
        </div>
      )}
    </header>
  );
}
