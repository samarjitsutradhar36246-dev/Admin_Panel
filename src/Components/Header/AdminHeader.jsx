import React from "react";
import { Menu, X, Search, Bell, User } from "lucide-react";
import FoodBNBLogo from "../../assets/foodbnb1.svg";

const AdminHeader = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white shadow-lg z-50">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section - Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>

        {/* Center Section - Title */}
        <div className="flex items-center gap-2">
          <img src={FoodBNBLogo} alt="FoodBNB Logo" className="h-7 w-auto" />
          <h1 className="text-xl font-bold text-white">
            FoodBNB Admin Dashboard
          </h1>
        </div>

        {/* Right Section - Search and User */}
        <div className="flex items-center gap-4">
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search orders, users..."
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Notification Icon */}
          <button className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 relative">
            <Bell size={20} className="text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
            <span className="hidden lg:block font-medium text-white">
              Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
