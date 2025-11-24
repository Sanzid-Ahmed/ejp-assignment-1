"use client";
import React, { useState } from "react";
import { items } from "@/data/items";
import Link from "next/link";




export default function ItemList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredItems = items.filter((item) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? item.title.toLowerCase().includes(filter.toLowerCase()) : true)
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white text-black">

      
      <h1 className="text-3xl font-bold text-black">Item List</h1>
      <p className="text-black mb-6">
        Browse our latest items and explore what suits you best.
      </p>

      
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search items..."
          className="border p-2 w-full rounded-lg text-black bg-white"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded-lg text-black bg-white"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="laptop">Laptop</option>
          <option value="phone">Phone</option>
          <option value="speaker">Speaker</option>
          <option value="keyboard">Keyboard</option>
          <option value="watch">Watch</option>
        </select>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition text-black"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md"
            />

            <h2 className="text-xl font-semibold mt-4 text-black">{item.title}</h2>

            <p className="text-black text-sm mt-1 line-clamp-2">
              {item.desc}
            </p>

            <p className="font-bold mt-2 text-black">{item.price}</p>

            <Link href={`/itemList/${item.id}`} className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
