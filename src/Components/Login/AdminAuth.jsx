import React, { useState } from "react";
import { User, Lock, LogIn, UserPlus } from "lucide-react";

export default function AdminAuth() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert("Username and Password are required");
      return;
    }

    console.log("Admin Login:", form);

    // ✅ ADDED: redirect to main dashboard
    window.location.href = "/";
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.username || !form.password || !form.confirmPassword) {
      alert("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Admin Signup:", form);

    // Redirect back to login
    setIsSignup(false);
    setForm({ username: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-white">
      <div className="w-full max-w-md bg-black text-white rounded-2xl shadow-2xl p-8 border border-gray-800">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide">
            {isSignup ? "Admin Sign Up" : "Admin Login"}
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Secure access to admin panel
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={isSignup ? handleSignup : handleLogin}
          className="space-y-5"
        >
          {/* Username */}
          <div>
            <label className="text-sm mb-1 block">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                placeholder="Admin username"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm mb-1 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Confirm Password */}
          {isSignup && (
            <div>
              <label className="text-sm mb-1 block">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm password"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-white text-black py-2.5 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {isSignup ? (
              <>
                <UserPlus className="w-4 h-4" />
                Create Account
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                Login
              </>
            )}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6 text-sm text-gray-400">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setIsSignup(false)}
                className="text-white underline hover:text-gray-300"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-white underline hover:text-gray-300"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
