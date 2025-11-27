"use client";
import Link from "next/link";
import { ShoppingCart, Zap, Truck, ShieldCheck, Clock, Star, Users, CheckCircle } from 'lucide-react'; 

import { items } from "../data/items";

export default function Home() {
  const features = [
    { title: "Fast Delivery", desc: "Get your products delivered quickly and reliably.", icon: Truck },
    { title: "Quality Products", desc: "Only the best quality items, guaranteed.", icon: ShieldCheck },
    { title: "30-Day Returns", desc: "Hassle-free returns anytime within 30 days.", icon: Clock },
    { title: "Expert Support", desc: "Our dedicated team is here to help you anytime.", icon: Users },
  ];

  
  const featuredProducts = items.slice(0, 4); 

  const testimonials = [
    { name: "Alice M.", feedback: "Amazing products and incredibly fast delivery! The quality exceeded my expectations.", rating: 5 },
    { name: "Bob K.", feedback: "Excellent customer support and high-quality goods. A truly seamless shopping experience.", rating: 5 },
    { name: "Charlie L.", feedback: "I love shopping here! The website is easy to use and the prices are great.", rating: 4 },
  ];

  const IconWrapper = ({ children }) => (
    <div className="text-blue-600 bg-blue-100 p-4 rounded-full mb-4 inline-flex items-center justify-center shadow-lg">
      {children}
    </div>
  );

  const RatingStars = ({ rating }) => (
    <div className="flex justify-center mb-3">
      {Array.from({ length: 5 }, (_, index) => (
        <Star 
          key={index} 
          size={20} 
          // Fill star if its index is less than the rating
          className={index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
        />
      ))}
    </div>
  );

  return (
    <main className="font-sans text-gray-800 bg-white min-h-screen">
      
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-24 md:py-36 text-center border-b-4 border-blue-200">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-blue-900 leading-tight">
            Discover Your Next <span className="text-blue-600">Favorite Thing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-700 font-light">
            Shop the latest trends and enjoy a seamless, high-quality experience with guaranteed satisfaction.
          </p>
          <Link
            href="/itemList"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-blue-700 transition transform hover:scale-[1.03] shadow-2xl"
          >
            <ShoppingCart size={24} />
            Start Shopping Today
          </Link>
        </div>
      </section>
      
      <hr className="border-t border-gray-100" />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Why Choose MyShop?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 border border-gray-200 rounded-3xl hover:shadow-2xl transition duration-300 transform hover:translate-y-[-5px] text-center bg-white"
              >
                <IconWrapper><feature.icon size={32} /></IconWrapper>
                <h3 className="font-bold text-2xl mb-3 text-blue-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-gray-100" />
      
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Top Picks For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="p-5 border border-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.02] text-left bg-white flex flex-col h-full"
              >
                <div className="bg-gray-100 h-48 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                    
                    {product.img ? (
                        <img 
                            src={product.img} 
                            alt={product.title} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    ) : (
                        <Zap size={40} className="text-gray-400" />
                    )}
                </div>

                <h3 className="font-bold text-xl mb-1 text-gray-900 truncate">{product.title || product.name}</h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-grow">{product.desc}</p>
                <p className="font-extrabold text-2xl text-red-500 mb-4">{product.price}</p>
                <Link
                  href={`/itemList/${product.id}`}
                  className="mt-auto block text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <Link
            href="/itemList"
            className="mt-16 inline-flex items-center gap-2 text-blue-600 font-bold text-xl border-b-2 border-blue-600 hover:text-blue-800 transition"
          >
            Browse The Full Collection <Zap size={20} />
          </Link>
        </div>
      </section>

      <hr className="border-t border-gray-100" />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-900">Trusted By Our Customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 text-center bg-white flex flex-col items-center"
              >
                <RatingStars rating={t.rating} />
                <p className="mb-4 italic text-gray-700 leading-relaxed text-lg flex-grow">{t.feedback}</p>
                <p className="font-bold text-lg text-blue-600 border-t pt-4 w-full mt-4">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-blue-700 text-white text-center my-16 mx-4 md:mx-16 rounded-3xl shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Do not Miss Out On Great Deals!
        </h2>
        <p className="mb-10 text-xl md:text-2xl font-light">
          Sign up for our newsletter to get **20% OFF** your first order.
        </p>
        <Link
          href="/signup" 
          className="inline-flex items-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-2xl"
        >
          <CheckCircle size={24} />
          Sign Up & Claim Discount
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