import React, { useState } from "react";
import { Search, Bell, Phone, User } from "lucide-react";
import FoodBNBLOGO from "../assets/foodbnb1.svg";

/**
 * FoodBNB Admin Header Component
 * Fixed header with gradient background matching the sidebar
 * Contains logo, search, and action buttons
 */
const AdminHeader = () => {
  // Track notification count for badge display
  const [notificationCount] = useState(3);

  return (
    // Fixed header container with gradient matching sidebar
    // z-30 ensures header stays above content but below modals
    // Left padding accounts for sidebar width when expanded
    <header className="fixed top-0 right-0 left-0 h-16 bg-linear-to-r from-red-500 to-orange-500 shadow-lg z-30 ">
      <div className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LEFT SECTION: Logo and Brand Name */}
        <div className="flex items-center gap-3">
          {/* Logo container with white background for contrast */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img
              src={FoodBNBLOGO}
              alt="FoodBNB Logo"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                // Fallback if SVG fails to load - show text instead
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<span class="text-red-500 font-bold text-lg">F</span>';
              }}
            />
          </div>

          {/* Brand name - hidden on very small screens to save space */}
          <div className="hidden sm:block">
            <h1 className="text-white font-bold text-lg tracking-tight">
              FoodBNB Admin
            </h1>
            <p className="text-white/80 text-xs font-medium">
              Dashboard Control
            </p>
          </div>
        </div>

        {/* RIGHT SECTION: Search Bar and Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Bar - Hidden on mobile, visible on md screens and up */}
          <div className="hidden md:flex items-center relative">
            {/* Search icon positioned inside input on the left */}
            <Search
              className="absolute left-3 text-white/70 pointer-events-none"
              size={18}
            />

            {/* Search input with semi-transparent white background for glassmorphism effect */}
            <input
              type="search"
              placeholder="Search orders, users..."
              className="w-64 lg:w-80 pl-10 pr-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 transition-all duration-300"
              aria-label="Search dashboard"
            />
          </div>

          {/* Action Buttons Container */}
          <div className="flex items-center gap-2">
            {/* Mobile Search Button - Only visible on small screens */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Open search"
            >
              <Search size={20} />
            </button>

            {/* Support/Call Button */}
            <button
              className="p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm hover:scale-105"
              aria-label="Contact support"
            >
              <Phone size={20} />
            </button>

            {/* Notification Bell with Badge */}
            <button
              className="relative p-2 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm hover:scale-105"
              aria-label={`Notifications, ${notificationCount} unread`}
            >
              <Bell size={20} />

              {/* Notification badge - only shows if count > 0 */}
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 text-red-600 text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                  {notificationCount}
                </span>
              )}
            </button>

            {/* User Profile Button */}
            <button
              className="flex items-center gap-2 p-2 pl-3 pr-3 rounded-lg bg-white/20 hover:bg-white/30 text-white transition-all duration-300 backdrop-blur-sm hover:scale-105"
              aria-label="User profile"
            >
              <User size={20} />
              {/* User name - hidden on small screens */}
              <span className="hidden lg:inline text-sm font-semibold">
                Admin
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
