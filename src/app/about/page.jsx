"use client";
import { Users, Target, Eye, Handshake, Briefcase, Link } from 'lucide-react'; 

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      
      <header className="bg-blue-600 text-white py-24 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Our Story & Commitment
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Building a seamless shopping experience founded on quality, trust, and exceptional service.
          </p>
        </div>
      </header>
      

      <section className="py-20 bg-white shadow-inner">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="p-8 border border-blue-100 rounded-xl shadow-lg bg-white transition hover:shadow-2xl">
            <Target size={40} className="text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold mb-3 text-blue-900">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our core mission is to **simplify online retail** by providing a curated selection of high-quality products coupled with a fast, secure, and intuitive e-commerce platform. We strive to connect customers with the best goods easily and efficiently.
            </p>
          </div>
          
          <div className="p-8 border border-blue-100 rounded-xl shadow-lg bg-white transition hover:shadow-2xl">
            <Eye size={40} className="text-indigo-600 mb-4" />
            <h2 className="text-3xl font-bold mb-3 text-blue-900">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision MyShop becoming the **most trusted and customer-centric online marketplace**. We aim to set the standard for digital retail by continuously innovating our services and expanding our offerings based on user feedback and needs.
            </p>
          </div>

        </div>
      </section>

      

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Our Core Values</h2>
          <p className="text-xl text-gray-600 mb-12">
            The principles that guide our work and our relationship with you.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500">
              <Handshake size={32} className="text-blue-500 mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">We are honest and transparent in all our dealings.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500">
              <Briefcase size={32} className="text-blue-500 mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600 text-sm">Committed to the highest standards in products and service.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-500">
              <Users size={32} className="text-blue-500 mb-3 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm">Placing the user experience at the heart of every decision.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Meet The Team</h2>
          <p className="text-xl text-gray-600 mb-8">
            We are a small but dedicated team of tech and retail enthusiasts.
          </p>
          
          <div className="bg-blue-50 p-10 rounded-xl border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-800">Ready to start shopping?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Explore our full collection of high-quality items today!
            </p>
            <Link href="/itemList"className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}