"use client";
import { useParams, useRouter } from "next/navigation";
import { items } from "@/data/items";

export default function Page() {
  const params = useParams(); 
  const router = useRouter();
  const { id } = params;

  const item = items.find((i) => i.id === parseInt(id));

  if (!item) return <p className="text-center mt-10 text-red-600">Item not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white text-black">

      
      <button
        onClick={() => router.back()}
        className="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Back
      </button>

      
      <div className="mb-6">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
      </div>

      
      <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

      
      <p className="text-gray-800 mb-6">{item.desc}</p>

     
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-black mb-6">
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="font-semibold">Price</p>
          <p>{item.price}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="font-semibold">Date</p>
          <p>{item.date}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="font-semibold">Priority</p>
          <p>{item.priority}</p>
        </div>
      </div>

    </div>
  );
}
