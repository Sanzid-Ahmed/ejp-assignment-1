"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import {
  Home,
  Package,
  Info,
  Mail,
  LogIn,
  LogOut,
  User,
  ChevronDown,
  Menu,
  X,
  PlusCircle,
  Settings,
} from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false); // Mobile Menu State
  const [dropdown, setDropdown] = useState(false); // Desktop Dropdown State

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  function signOut() {
    firebaseSignOut(auth)
      .then(() => setUser(null))
      .catch((error) => console.error(error));
    setDropdown(false);
    setOpen(false); // Close mobile menu if logout happened there
  }

  // Define navigation links with icons for better visual clarity
  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Shop", href: "/itemList", icon: Package },
    { name: "About", href: "/about", icon: Info },
    { name: "Contact", href: "/contactUs", icon: Mail },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg text-gray-700">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-blue-600 tracking-wider">
          MyShop
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
              >
                <link.icon size={18} className="text-blue-500" />
                {link.name}
              </Link>
            </li>
          ))}

          {/* Authentication/Profile */}
          {!user ? (
            <li>
              <Link
                href="/login"
                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-200 shadow-md"
              >
                <LogIn size={18} />
                Login
              </Link>
            </li>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full text-blue-600 hover:bg-blue-50 transition duration-200 text-sm font-semibold"
              >
                <User size={18} />
                <span className="truncate max-w-24">{user.name || user.email}</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${dropdown ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {/* Desktop Dropdown Menu */}
              {dropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white shadow-xl rounded-xl border border-gray-100 p-2 transform origin-top-right animate-fadeIn">
                  <p className="px-3 py-2 border-b text-xs text-gray-500 font-semibold truncate">
                    {user.email}
                  </p>
                  
                  <Link
                    href="/add-product"
                    onClick={() => setDropdown(false)}
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition"
                  >
                    <PlusCircle size={18} className="text-green-500" />
                    Add Product
                  </Link>
                  
                  <Link
                    href="/manage-products"
                    onClick={() => setDropdown(false)}
                    className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition"
                  >
                    <Settings size={18} className="text-yellow-600" />
                    Manage Products
                  </Link>

                  <button
                    onClick={signOut}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 mt-1 text-red-600 hover:bg-red-50 rounded-lg transition border-t border-gray-100"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 p-2 rounded-full hover:bg-gray-100 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Content (Transition Effect) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-screen opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
        } bg-white`}
      >
        <ul className="flex flex-col p-4 gap-4">
          {navLinks.map((link) => (
            <li key={`mobile-${link.name}`}>
              <Link
                href={link.href}
                className="flex items-center gap-2 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition"
                onClick={() => setOpen(false)}
              >
                <link.icon size={20} className="text-blue-500" />
                {link.name}
              </Link>
            </li>
          ))}

          <li className="border-t pt-4 mt-2 border-gray-100">
            {!user ? (
              <Link
                href="/login"
                className="flex items-center gap-2 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setOpen(false)}
              >
                <LogIn size={20} />
                Login / Sign Up
              </Link>
            ) : (
              <>
                <p className="px-3 py-2 text-sm text-gray-500 font-semibold truncate">{user.email}</p>
                
                <Link 
                  href="/add-product" 
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition"
                  onClick={() => setOpen(false)}
                >
                  <PlusCircle size={20} className="text-green-500" />
                  Add Product
                </Link>
                
                <Link 
                  href="/manage-products" 
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition"
                  onClick={() => setOpen(false)}
                >
                  <Settings size={20} className="text-yellow-600" />
                  Manage Products
                </Link>

                <button
                  onClick={signOut}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 mt-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}