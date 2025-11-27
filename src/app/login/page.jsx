"use client";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogIn, Mail, Lock, Globe } from 'lucide-react'; 

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Logged In:", userCredential.user);
      router.push("/");
    } catch (err) {
      setError(err.message.replace("Firebase: Error (auth/", "").replace(")", "").replaceAll("-", " "));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google User:", result.user);
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 p-4">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-sm border border-gray-100">
        
        <div className="text-center mb-8">
            <LogIn size={40} className="text-blue-600 mx-auto mb-2" />
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-500">Sign in to access your dashboard and shop.</p>
        </div>

        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm text-center">
                {error}
            </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <div className="relative">
            <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
                <>
                    <Globe size={20} className="animate-spin" />
                    Logging In...
                </>
            ) : (
                <>
                    <LogIn size={20} />
                    Continue
                </>
            )}
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md w-full disabled:opacity-50"
          disabled={isLoading}
        >
          Sign in with Google
        </button>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Do not have an account?{" "}
          <a href="/register" className="text-blue-600 font-medium hover:text-blue-800 transition">
            Create an Account
          </a>
        </p>
      </div>
    </div>
  );
}