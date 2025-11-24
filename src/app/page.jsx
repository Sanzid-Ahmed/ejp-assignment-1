"use client";
import Link from "next/link";
import { items } from "../data/items"; 

export default function Home() {
  const features = [
    { title: "Fast Delivery", desc: "Get your products delivered quickly." },
    { title: "Quality Products", desc: "Only the best quality items." },
    { title: "Easy Returns", desc: "Hassle-free returns anytime." },
    { title: "24/7 Support", desc: "We are here to help you anytime." },
  ];

  const testimonials = [
    { name: "Alice", feedback: "Amazing products and fast delivery!" },
    { name: "Bob", feedback: "Excellent support and quality." },
    { name: "Charlie", feedback: "I love shopping here!" },
  ];

  return (
    <main className="font-sans text-black">
      
      <section className="bg-gray-100 py-24 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to MyShop
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover amazing products and enjoy a seamless shopping experience.
          </p>
          <Link
            href="/itemList"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 text-center"
              >
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((product) => (
              <div
                key={product.id}
                className="p-6 border rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 text-left bg-white"
              >
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                <p className="mb-4">{product.desc}</p>
                <p className="font-bold text-lg mb-4">{product.price}</p>
                <Link
                  href="/itemList"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl hover:shadow-xl transition text-center bg-gray-50"
              >
                <p className="mb-4">"{t.feedback}"</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-200 text-center rounded-xl mx-4 md:mx-20 my-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Special Offer: 20% Off All Products!
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Grab your favorite items before the offer ends.
        </p>
        <Link
          href="/itemList"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}
