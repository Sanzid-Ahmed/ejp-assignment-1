"use client";
import React, { useState } from "react";
import { items } from "@/data/items"; 
import Link from "next/link";
import { Search, ChevronDown, ShoppingCart, Info, Tag, Package, SlidersHorizontal, ListFilter, DollarSign } from "lucide-react"; 

export default function ItemList() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("default");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

  // Filter out null/undefined categories and ensure they are unique
  const categories = [...new Set(items.map(item => item.category).filter(Boolean))]; 

  const filteredItems = items
    .filter((item) => {
      // 1. Search Filter
      const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                            item.desc.toLowerCase().includes(search.toLowerCase());
      
      // 2. Category Filter (Safe check)
      const itemCategory = item.category ? item.category.toLowerCase() : '';
      const matchesFilter = filter ? itemCategory === filter : true;

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      // Sorting Logic
      const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
      const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));

      if (sort === 'price-asc') return priceA - priceB;
      if (sort === 'price-desc') return priceB - priceA;
      return 0; 
    });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setIsSidebarOpen(false); // Close sidebar on selection for mobile
  }

  return (
    // CHANGE 1: Full-width container with padding only
    <div className="p-0 bg-white min-h-[80vh]">
      
      {/* Header/Title Banner */}
      <div className="bg-gray-100 py-12 text-center border-b border-gray-200">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-2">
          Product Catalog
        </h1>
        <p className="text-lg text-gray-600">
          Find the item you need from our comprehensive list.
        </p>
      </div>

      {/* Main Content: Layout for Sidebar + Grid */}
      <div className="max-w-screen-2xl mx-auto p-4 md:p-8 flex gap-8">
        
        {/* Mobile Filter Button */}
        <button 
          className="md:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-2xl z-30 transition hover:bg-blue-700"
          onClick={() => setIsSidebarOpen(true)}
        >
          <SlidersHorizontal size={24} />
        </button>

        {/* 1. Filter Sidebar (Left Column) */}
        <div 
          className={`fixed md:sticky top-0 h-full md:h-auto w-64 md:w-auto bg-white p-6 md:p-0 shadow-2xl md:shadow-none z-40 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:block md:col-span-1`}
        >
          <div className="flex justify-between items-center md:hidden mb-6">
            <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2"><ListFilter size={20} /> Filters</h3>
            <button onClick={() => setIsSidebarOpen(false)} className="text-gray-500 hover:text-gray-800">
              <span className="text-2xl">&times;</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 border-b pb-2">Quick Search</h3>
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="border border-gray-300 p-2 pl-9 w-full rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          
          {/* Category Filter Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center gap-2">
                <Tag size={20} /> Categories
            </h3>
            <ul className="space-y-2 text-sm">
                <li>
                    <button 
                        onClick={() => handleFilterChange("")}
                        className={`w-full text-left p-2 rounded-lg transition ${filter === "" ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100 text-gray-700'}`}
                    >
                        All Products
                    </button>
                </li>
                {categories.map((cat) => (
                    cat && (
                        <li key={cat}>
                            <button 
                                onClick={() => handleFilterChange(cat)}
                                className={`w-full text-left p-2 rounded-lg transition ${filter === cat ? 'bg-blue-100 text-blue-600 font-bold' : 'hover:bg-gray-100 text-gray-700'}`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        </li>
                    )
                ))}
            </ul>
          </div>
          
          {/* Sort By Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center gap-2">
                <DollarSign size={20} /> Sort By
            </h3>
            <div className="relative">
                <select
                    className="appearance-none border border-gray-300 p-2 pr-8 w-full rounded-lg text-gray-700 bg-white cursor-pointer focus:ring-blue-500 focus:border-blue-500 transition"
                    onChange={(e) => setSort(e.target.value)}
                    value={sort}
                >
                    <option value="default">Default (Newest)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Overlay for Mobile Sidebar */}
        {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"></div>}


        {/* 2. Product Grid (Right Column) */}
        <div className="flex-grow">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-gray-700">No Items Found</h2>
                <p className="text-gray-500 mt-2">Try adjusting your search or filter settings.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden transition transform hover:scale-[1.02] hover:shadow-2xl flex flex-col"
                >
                  {/* Image Placeholder/Container */}
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center relative">
                    {item.img ? (
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Package size={48} className="text-gray-500" />
                    )}
                    
                    {item.category && (
                      <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                      </span>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-xl font-bold text-gray-900 line-clamp-2 mb-1">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">{item.desc}</p>

                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                        <p className="text-2xl font-extrabold text-blue-600">{item.price}</p>
                        
                        <div className="flex gap-2">
                            <Link
                                href={`/itemList/${item.id}`}
                                className="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition"
                                aria-label="View Details"
                            >
                                <Info size={20} />
                            </Link>
                            <button
                                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition shadow-md"
                                aria-label="Add to Cart"
                            >
                                <ShoppingCart size={20} />
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}