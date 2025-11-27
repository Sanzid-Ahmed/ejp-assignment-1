"use client";
import { Mail, Phone, MapPin, Send } from 'lucide-react'; 

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 py-12 md:py-20">
      
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-700">
          We are here to help! Whether you have questions about an order, need technical support, or just want to chat, feel free to reach out.
        </p>
      </div>
      

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="lg:col-span-1 bg-blue-600 text-white p-8 rounded-xl shadow-lg h-full">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Mail size={24} /> Contact Details
          </h2>
          <p className="mb-8 font-light">
            You can reach us directly through the following channels:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone size={24} className="flex-shrink-0 text-blue-200 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-blue-100">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail size={24} className="flex-shrink-0 text-blue-200 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-blue-100">support@myshop.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={24} className="flex-shrink-0 text-blue-200 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-blue-100">123 E-Commerce Blvd, Suite 100, Global City, GC 90210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us A Message</h2>
          
          <form className="flex flex-col space-y-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                    type="text"
                    placeholder="Your Full Name"
                    className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email Address"
                    className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                />
            </div>

            <input
                type="text"
                placeholder="Subject"
                className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition"
                required
            />

            <textarea
              placeholder="Your Message..."
              className="p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-blue-500 focus:border-blue-500 transition"
              rows={6}
              required
            ></textarea>
            
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md mt-4"
            >
              <Send size={20} />
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}