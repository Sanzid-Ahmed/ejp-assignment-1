"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase"; 
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, Eye, Trash2, Edit, Loader2, Package, DollarSign } from 'lucide-react'; 

import { items } from "@/data/items"; 

export default function ManageProducts() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [products, setProducts] = useState(items); 
  
  const [search, setSearch] = useState("");


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) setCurrentUser(u);
      else router.push("/login");
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product? This action cannot be undone.")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };
  
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase()) || 
    product.category?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
        <p className="text-lg text-gray-600">Authenticating user...</p>
      </div>
    );
  }
  
  if (!currentUser) return null; 

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gray-50">
      
      <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center border-b pb-4">
        <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-3">
          <Package size={36} className="text-blue-600" />
          Product Management
        </h1>
        <Link
          href="/add-product" 
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          <Plus size={20} />
          Add New Product
        </Link>
      </div>
      
      <div className="max-w-6xl mx-auto mb-6 flex gap-4">
          <input
            type="text"
            placeholder="Search by Title or Category..."
            className="border p-3 w-full rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition"
            onChange={(e) => setSearch(e.target.value)}
          />
      </div>

      {filteredProducts.length === 0 ? (
        <div className="max-w-6xl mx-auto p-12 bg-white rounded-xl shadow-lg text-center">
            <p className="text-xl text-gray-600">
                No products found matching your criteria.
            </p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto overflow-x-auto bg-white rounded-xl shadow-2xl">
          <table className="min-w-full">
            <thead className="bg-blue-600 text-white sticky top-0">
              <tr>
                <th className="py-3 px-4 text-left">Product Title</th>
                <th className="py-3 px-4 text-left hidden sm:table-cell">Category</th>
                <th className="py-3 px-4 text-left">Price</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-blue-50/50 transition">
                  <td className="py-3 px-4 font-medium text-gray-800">
                      {product.title}
                  </td>
                  
                  <td className="py-3 px-4 hidden sm:table-cell text-gray-600">
                      {product.category ? product.category.charAt(0).toUpperCase() + product.category.slice(1) : 'Uncategorized'}
                  </td>
                  
                  <td className="py-3 px-4 font-semibold text-green-700 flex items-center gap-1">
                      <DollarSign size={16} />{product.price}
                  </td>
                  
                  <td className="py-3 px-4 flex justify-center gap-3">
                    <Link
                      href={`/itemList/${product.id}`}
                      className="text-gray-500 hover:text-green-600 p-1 rounded transition"
                      title="View Details"
                    >
                      <Eye size={20} />
                    </Link>
                    
                    <Link
                      href={`/admin/edit-product/${product.id}`}
                      className="text-gray-500 hover:text-blue-600 p-1 rounded transition"
                      title="Edit Product"
                    >
                      <Edit size={20} />
                    </Link>
                    
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-gray-500 hover:text-red-600 p-1 rounded transition"
                      title="Delete Product"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}