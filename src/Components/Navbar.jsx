"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function signOut() {
    setUser(null);
    setDropdown(false);
    window.location.reload();
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md text-black">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">

        
        <Link href="/" className="text-2xl font-bold text-black">
          MyShop
        </Link>

      
        <ul className="hidden md:flex items-center gap-6 font-medium text-black">
          <li><Link href="/" className="text-black">Home</Link></li>
          <li><Link href="/products" className="text-black">Products</Link></li>
          <li><Link href="/itemList/" className="text-black">Item List</Link></li>
          <li><Link href="/contact" className="text-black">About</Link></li>

          
          {!user && (
            <>
              <li><Link href="/login" className="text-black">Login</Link></li>
            </>
          )}

          
          {user && (
            <div className="relative text-black">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 border px-3 py-1 rounded-md text-black"
              >
                <span>{user.name || "User"}</span>
                <span>▼</span>
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md p-2 text-sm text-black">
                  <p className="px-2 py-2 border-b font-semibold text-black">{user.email}</p>

                  <Link
                    href="/add-product"
                    className="block px-2 py-2 hover:bg-gray-100 rounded text-black"
                  >
                    Add Product
                  </Link>

                  <Link
                    href="/manage-products"
                    className="block px-2 py-2 hover:bg-gray-100 rounded text-black"
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={signOut}
                    className="w-full text-left px-2 py-2 hover:bg-red-100 rounded text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </ul>


        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

     
      {open && (
        <div className="md:hidden bg-white shadow-md text-black">
          <ul className="flex flex-col p-4 gap-3 text-black">
            <Link href="/" className="text-black" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/products" className="text-black" onClick={() => setOpen(false)}>Products</Link>
            <Link href="/itemList/" className="text-black" onClick={() => setOpen(false)}>Item List</Link>
            <Link href="/contact" className="text-black" onClick={() => setOpen(false)}>About</Link>

            {!user && (
              <>
                <Link href="/login" className="text-black" onClick={() => setOpen(false)}>Login</Link>
              </>
            )}

            {user && (
              <>
                <p className="font-semibold text-black">{user.email}</p>

                <Link href="/add-product" className="text-black" onClick={() => setOpen(false)}>Add Product</Link>

                <Link href="/manage-products" className="text-black" onClick={() => setOpen(false)}>Manage Products</Link>

                <button
                  onClick={() => {
                    signOut();
                    setOpen(false);
                  }}
                  className="text-left text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
