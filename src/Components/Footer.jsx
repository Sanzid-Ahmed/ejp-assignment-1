"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          MyShop
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row gap-6 text-white">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/products" className="hover:text-blue-400 transition">Products</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-xl">
          <a href="#" className="hover:text-blue-400 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaInstagram /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} MyShop. All rights reserved.
      </div>
    </footer>
  );
}
