"use client";
import React, { useState, useEffect } from "react";
import { initializeApp, getApps, getApp } from "firebase/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithPopup, 
    GoogleAuthProvider,
    signInWithCustomToken,
    signInAnonymously
} from "firebase/auth";
import { UserPlus, User, Mail, Lock, Globe, CheckCircle, XCircle } from "lucide-react";

// Firebase config
const firebaseConfig = typeof __firebase_config !== "undefined" 
    ? JSON.parse(__firebase_config) 
    : {};

// Initialize Firebase safely
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const initialAuthToken = typeof __initial_auth_token !== "undefined" ? __initial_auth_token : null;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
        try {
            if (initialAuthToken) {
                await signInWithCustomToken(auth, initialAuthToken);
            } else {
                await signInAnonymously(auth);
            }
        } catch (e) {
            console.error("Firebase Auth Error:", e);
        } finally {
            setAuthReady(true);
        }
    };
    authenticate();
  }, []);

  const handleRoute = (path) => {
    window.location.href = path; 
  };

  const resetMessages = () => {
      setError("");
      setSuccessMessage("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!authReady) {
        setError("Authentication service not ready. Please try again.");
        return;
    }

    resetMessages();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (name) {
          await updateProfile(userCredential.user, { displayName: name });
      }
      
      setSuccessMessage("Registration successful! Redirecting to home...");
      console.log("User Registered:", userCredential.user);

      setTimeout(() => handleRoute("/"), 1500); 

    } catch (err) {
      const msg = err.message || "An unknown error occurred during registration.";
      setError(msg.replace("Firebase: Error (auth/", "").replace(")", "").replaceAll("-", " "));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    if (!authReady) {
        setError("Authentication service not ready. Please try again.");
        return;
    }
    
    resetMessages();
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setSuccessMessage("Successfully logged in with Google! Redirecting to home...");
      console.log("Google User:", result.user);
      
      setTimeout(() => handleRoute("/"), 1500);

    } catch (err) {
      const msg = err.message || "An unknown error occurred during Google sign-up.";
      setError(msg.replace("Firebase: Error (auth/", "").replace(")", "").replaceAll("-", " "));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 p-4">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md border border-gray-100">
        
        <div className="text-center mb-8">
            <UserPlus size={40} className="text-blue-600 mx-auto mb-2" />
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="text-gray-500">Join MyShop today for a seamless shopping experience.</p>
        </div>

        {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2 text-sm">
                <CheckCircle size={18} />
                {successMessage}
            </div>
        )}
        
        {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2 text-sm">
                <XCircle size={18} />
                {error}
            </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name" 
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                required 
                disabled={!authReady || isLoading}
            />
          </div>

          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address" 
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                required 
                disabled={!authReady || isLoading}
            />
          </div>

          <div className="relative">
            <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password (min 6 characters)" 
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                required 
                disabled={!authReady || isLoading}
            />
          </div>

          <div className="relative">
            <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password" 
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" 
                required 
                disabled={!authReady || isLoading}
            />
          </div>

          <button 
            type="submit" 
            className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md disabled:opacity-50 mt-6"
            disabled={!authReady || isLoading}
          >
            {isLoading ? (
                <>
                    <Globe size={20} className="animate-spin" />
                    Processing...
                </>
            ) : (
                <>
                    <UserPlus size={20} />
                    Create Account
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
          onClick={handleGoogleRegister}
          className="flex items-center justify-center gap-3 bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition shadow-md w-full disabled:opacity-50"
          disabled={!authReady || isLoading}
        >
          Sign Up with Google
        </button>

        <p className="text-center mt-6 text-gray-600 text-sm">
          Already have an account?{" "}
          <a onClick={() => handleRoute("/login")} className="text-blue-600 font-medium hover:text-blue-800 transition cursor-pointer">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}