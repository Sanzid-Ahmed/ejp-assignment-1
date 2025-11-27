"use client";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail, Package, Info, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "Quick Links", links: [
      { name: "Home", href: "/" },
      { name: "Shop Now", href: "/itemList" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
    ]},
    { title: "Legal & Help", links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Returns & Refunds", href: "/returns" },
      { name: "FAQ", href: "/faq" },
    ]},
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-700 pb-12">

          
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-3xl font-extrabold text-blue-500 tracking-wider mb-4 block">
              MyShop
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Quality products, fast delivery, and world-class support for a seamless online shopping experience.
            </p>
            <div className="flex gap-4 text-white text-xl">
              <a 
                href="#" 
                aria-label="Facebook"
                className="hover:text-blue-500 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              ><FaFacebookF /></a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="hover:text-blue-500 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              ><FaTwitter /></a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="hover:text-blue-500 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
              ><FaInstagram /></a>
            </div>
          </div>

          
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block pb-1">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-blue-400 transition flex items-center gap-2 text-sm"
                    >
                      <ChevronRight size={16} className="text-blue-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-blue-500 inline-block pb-1">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                <span>123 E-Commerce Blvd, Suite 100, Global City, GC 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500 flex-shrink-0" />
                <a href="mailto:support@myshop.com" className="hover:text-blue-400 transition">support@myshop.com</a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {currentYear} MyShop. All Rights Reserved. Built with Next.js and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}