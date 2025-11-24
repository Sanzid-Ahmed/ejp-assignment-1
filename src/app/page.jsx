"use client";
import Link from "next/link";

export default function HomePage() {
  const features = [
    { title: "Fast Delivery", desc: "Get your products delivered quickly." },
    { title: "Quality Products", desc: "Only the best quality items." },
    { title: "Easy Returns", desc: "Hassle-free returns anytime." },
    { title: "24/7 Support", desc: "We are here to help you anytime." },
  ];

  const products = [
    { name: "Product 1", desc: "High quality item", price: "$49" },
    { name: "Product 2", desc: "Best seller", price: "$79" },
    { name: "Product 3", desc: "Top choice", price: "$99" },
    { name: "Product 4", desc: "Customer favorite", price: "$29" },
  ];

  const testimonials = [
    { name: "Alice", feedback: "Amazing products and fast delivery!" },
    { name: "Bob", feedback: "Excellent support and quality." },
    { name: "Charlie", feedback: "I love shopping here!" },
  ];

  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 text-center relative">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
            Welcome to MyShop
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8">
            Discover amazing products and enjoy a seamless shopping experience.
          </p>
          <Link
            href="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 border rounded-lg hover:shadow-lg transition text-black"
              >
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="p-6 border rounded-lg hover:shadow-lg transition text-black"
              >
                <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.desc}</p>
                <p className="font-bold">{product.price}</p>
                <Link
                  href="/products"
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Buy Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-6 border rounded-lg hover:shadow-lg transition text-black"
              >
                <p className="text-gray-600 mb-4">"{t.feedback}"</p>
                <p className="font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-blue-600 text-white text-center rounded-lg mx-4 md:mx-20 my-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Special Offer: 20% Off All Products!
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Grab your favorite items before the offer ends.
        </p>
        <Link
          href="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}
