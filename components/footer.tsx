"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="Farhama Logo"
                width={54}
                height={54}
                className="object-contain"
              />
              <span className="flex flex-col leading-tight">
                <h3 className="font-extrabold text-2xl">FARHAMA</h3>
                <p className="text-sm text-gray-300">Scents & Abayaa</p>
              </span>
            </Link>

            <p className="text-gray-400 text-sm max-w-xs">
              Timeless fashion pieces crafted with elegance and precision.
              Designed for those who value style that lasts forever.
            </p>
          </div>

          {/* Shop */}
          <div className="text-center md:text-left">
            <h4 className="text-sm tracking-widest font-semibold mb-5">
              SHOP
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Women", "Men", "Accessories", "New Arrivals"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="text-sm tracking-widest font-semibold mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["About Us", "Lookbook", "Careers", "Press"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h4 className="text-sm tracking-widest font-semibold mb-5">
              SUPPORT
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Contact", "Shipping", "Returns", "FAQs"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-14 pt-6">
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Farhama Scents and Abayaa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
