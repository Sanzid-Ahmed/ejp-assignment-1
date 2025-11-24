export default function Contact() {
  return (
    <div className="p-8 bg-white h-[100vh] pt-25">
      <h1 className="text-3xl font-bold mb-4 text-center text-black">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-4 text-center">
        Have any questions? Feel free to reach out to us using the contact form below
        or through our email and phone.
      </p>
      
      <form className="flex flex-col max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-3 p-2 border text-black rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-3 p-2 border text-black rounded"
        />
        <textarea
          placeholder="Your Message"
          className="mb-3 p-2 border text-black rounded"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
