"use client";
import Link from "next/link";
import { ShoppingCart, Zap, Truck, ShieldCheck, Clock, Star } from 'lucide-react'; // Importing icons for visual appeal
// NOTE: You need to install the lucide-react package: npm install lucide-react

// Assuming this path is correct for your item data
import { items } from "../data/items";

export default function Home() {
  const features = [
    { title: "Fast Delivery", desc: "Get your products delivered quickly and reliably.", icon: Truck },
    { title: "Quality Products", desc: "Only the best quality items, guaranteed.", icon: ShieldCheck },
    { title: "Easy Returns", desc: "Hassle-free returns anytime within 30 days.", icon: Clock },
    { title: "24/7 Support", desc: "Our team is here to help you anytime.", icon: Zap },
  ];

  
  const featuredProducts = items.slice(0, 4); 

  const testimonials = [
    { name: "Alice M.", feedback: "Amazing products and incredibly fast delivery! The quality exceeded my expectations.", rating: 5 },
    { name: "Bob K.", feedback: "Excellent customer support and high-quality goods. A truly seamless shopping experience.", rating: 5 },
    { name: "Charlie L.", feedback: "I love shopping here! The website is easy to use and the prices are great.", rating: 4 },
  ];

  const IconWrapper = ({ children }) => (
    <div className="text-blue-600 bg-blue-100 p-3 rounded-full mb-4 inline-flex items-center justify-center shadow-md">
      {children}
    </div>
  );

  return (
    <main className="font-sans text-gray-800 bg-white min-h-screen">
      
        
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-32 md:py-40 text-center shadow-inner">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-blue-900 leading-tight">
            Discover Your Next Favorite Thing
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600">
            Shop the latest trends and enjoy a seamless, high-quality shopping experience right now.
          </p>
          <Link
            href="/itemList"
            className="bg-blue-600 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
          >
            Start Shopping Today
          </Link>
        </div>
      </section>

      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-blue-900">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 border border-gray-100 rounded-2xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] text-center bg-white"
              >
                <IconWrapper><feature.icon size={28} /></IconWrapper>
                <h3 className="font-bold text-xl mb-3 text-blue-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-blue-900">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-left bg-white flex flex-col h-full"
              >
                
                <div className="bg-gray-200 h-40 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                    [Image Placeholder]
                </div>
                <h3 className="font-bold text-xl mb-1 text-gray-900 truncate">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-grow">{product.desc}</p>
                <p className="font-extrabold text-2xl text-blue-600 mb-4">{product.price}</p>
                <Link
                  href="/itemList"
                  className="mt-auto block text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  View Product
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/itemList"
            className="mt-12 inline-block text-blue-600 font-semibold text-lg border-b-2 border-blue-600 hover:text-blue-800 transition"
          >
            See All Products &rarr;
          </Link>
        </div>
      </section>

      
      
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-blue-900">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 border border-blue-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 text-center bg-white"
              >
                <div className="flex justify-center mb-3">
                    
                    {Array.from({ length: t.rating }, (_, index) => (
                        <Star key={index} size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    {Array.from({ length: 5 - t.rating }, (_, index) => (
                        <Star key={index} size={20} className="text-gray-300" />
                    ))}
                </div>
                <p className="mb-4 italic text-gray-700 leading-relaxed">"{t.feedback}"</p>
                <p className="font-bold text-blue-600">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      
      <section className="py-24 bg-blue-600 text-white text-center my-16 mx-4 md:mx-20 rounded-3xl shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Limited Time Offer!
        </h2>
        <p className="mb-10 text-xl md:text-2xl font-light">
          Get **20% OFF** your entire order this week only. Don't miss out!
        </p>
        <Link
          href="/itemList"
          className="bg-white text-blue-600 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
        >
          Claim Your Discount
        </Link>
      </section>
      
      
      <footer className="bg-gray-800 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved. | <Link href="#" className="hover:text-blue-400 transition">Privacy Policy</Link>
        </div>
      </footer>
      
    </main>
  );
}