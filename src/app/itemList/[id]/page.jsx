"use client";
import { useParams, useRouter } from "next/navigation";
import { items } from "@/data/items";
import { ArrowLeft, Tag, Calendar, ShieldCheck, ShoppingCart, Star } from "lucide-react"; 

// 1. Rename the function to 'Page' (common Next.js convention)
// 2. Ensure it is the default export
export default function Page() { // Changed from export default function ItemDetail() 
  const params = useParams(); 
  const router = useRouter();
  const { id } = params;

  // Find the item, ensuring the id is parsed correctly
  const item = items.find((i) => i.id === parseInt(id));

  if (!item) return (
    <div className="max-w-7xl mx-auto p-10 text-center">
      <p className="text-2xl font-semibold mt-10 text-red-600">
        Item not found 😥
      </p>
      <button
        onClick={() => router.back()}
        className="mt-6 text-blue-600 hover:text-blue-800 transition"
      >
        ← Return to Shop
      </button>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen"> 
      
      {/* ... (rest of the component JSX) ... */}
      
      <div className="max-w-screen-xl mx-auto p-6 md:p-10 bg-white shadow-xl md:shadow-none">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition"
        >
          <ArrowLeft size={20} />
          Back to Products
        </button>
        
        {/* Main Content Layout: Image + Details (Two Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* 1. Product Image Section */}
          <div className="order-1">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 md:h-[450px] object-cover rounded-xl shadow-2xl transition duration-500 hover:shadow-xl"
            />
          </div>

          {/* 2. Product Details and CTA */}
          <div className="order-2 lg:p-4">
            
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1">
              <Tag size={16} /> 
              {item.category || 'General'}
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              {item.title}
            </h1>

            {/* Dummy Rating/Review section for completeness */}
            <div className="flex items-center gap-2 mb-6 text-yellow-500">
              {Array.from({ length: 4 }, (_, i) => <Star key={i} size={20} fill="currentColor" />)}
              <span className="text-gray-500 text-sm">(124 Reviews)</span>
            </div>

            {/* Pricing */}
            <p className="text-5xl font-extrabold text-blue-600 mb-8">
              {item.price}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-lg w-full sm:w-auto"
              >
                <ShoppingCart size={24} />
                Add to Cart
              </button>
              <button
                className="flex items-center justify-center gap-3 border border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 transition w-full sm:w-auto"
              >
                Buy Now
              </button>
            </div>

            {/* Key Information Blocks */}
            <div className="grid grid-cols-2 gap-4 text-gray-800 mb-8 border-t pt-6">
              <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3 shadow-sm">
                <Calendar size={24} className="text-blue-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Listed Date</p>
                  <p className="text-xs text-gray-600">{item.date || 'N/A'}</p>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3 shadow-sm">
                <ShieldCheck size={24} className="text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold">Quality/Priority</p>
                  <p className="text-xs text-gray-600">{item.priority || 'Standard'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Overview</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {item.desc || "Detailed product description not provided for this item. Please contact support for more information."}
          </p>
        </div>

      </div>
    </div>
  );
}