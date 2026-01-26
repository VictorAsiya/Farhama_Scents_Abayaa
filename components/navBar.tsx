"use client";

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
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Logo from "@/public/logo.png";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Top Bar */}
      <div className="bg-black h-10 flex font-light  text-white justify-between px-10 items-center text-sm">
        <div className="flex gap-8">
          <span className="flex">
            <MapPin size={16} className="inline mr-2" />
            <p>Wolverhamton, UK</p>
          </span>
          <hr className="h-6 w-px bg-white border" />

          <span className="flex">
            <Phone size={16} className="inline mr-2" />
            <p>+8292747247</p>
          </span>
        </div>

        <div className="flex gap-8">
          <span className="flex gap-5">
            <Link href="/faq">FAQ</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </span>
          <hr className="h-6 w-px bg-white border" />
          <span className="flex">
            <Facebook size={16} className="inline mx-2 hover:cursor-pointer" />
            <Twitter size={16} className="inline mx-2 hover:cursor-pointer" />
            <Instagram size={16} className="inline mx-2 hover:cursor-pointer" />
            <FaTiktok size={16} className="inline mx-2 hover:cursor-pointer" />
          </span>
        </div>
      </div>

      <nav className="flex items-center justify-between px-10 bg-white">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <Image src={Logo} alt="Farhama Logo" className="h-30 w-30" />
          <span className=" flex flex-col leading-3">
            <h3 className="ml-[-3vh] font-extrabold text-3xl">FARHAMA</h3>
            <p className="ml-[-3vh] ">Scents & Abayaa</p>
          </span>
        </Link>

        {/* Navigation Links */}
        <div  className="customLink hidden md:flex text-sm items-center gap-10 uppercase tracking-widest">
          <Link href="/" className="hover:opacity-60 transition">
            Home
          </Link>
          <Link href="/shop" className="hover:opacity-60 transition">
            Shop
          </Link>
          <Link href="/about" className="hover:opacity-60 transition">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition">
            Contact
          </Link>
        </div>

        {/* Right Action */}
        <div className="hidden md:flex text-sm uppercase tracking-widest items-center">
          <Search size={25} className="inline mr-6 hover:cursor-pointer" />
          <ShoppingBag size={25} className="inline hover:cursor-pointer" />
          <Link href="/shop" className="hover:opacity-60 transition">
            Shop Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
