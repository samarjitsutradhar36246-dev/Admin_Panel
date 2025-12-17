import React, { useState } from "react";
import { Menu, X, Home, ShoppingCart, Users, Settings } from "lucide-react";
import FoodBNBLOGO from "../assets/foodbnb1.svg";

/**
 * FoodBNB Admin Panel Sidebar Component
 * A collapsible sidebar with smooth animations and gradient background
 *
 * Features:
 * - Collapsed by default, expands on hamburger menu click
 * - Smooth slide-in/out animations
 * - Responsive design for mobile and desktop
 * - Red to orange gradient background
 * - Modern, minimalist design
 */
const FoodBNBSidebar = () => {
  // State to track sidebar open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items configuration
  // Easy to maintain and extend with new menu items
  const navigationItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Orders", icon: ShoppingCart, path: "/orders" },
    { name: "Admin", icon: Users, path: "/users" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <>
      {/* Hamburger Menu Button - Fixed position on top left */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Toggle sidebar"
      >
        {/* Toggle between hamburger and close icon based on sidebar state */}
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay - Appears when sidebar is open on mobile/tablet */}
      {/* Clicking overlay closes the sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 pt-20
              bg-linear-to-b from-red-500 to-orange-500
              text-white shadow-2xl z-40
              transform transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              }`}
      >
        {/* Sidebar Header with Logo and Brand Name */}
        <div className="flex items-center gap-3 p-6 border-b border-white border-opacity-20">
          {/* Logo Image */}
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shadow-md bg-linear-to-b from-red-500 to-orange-500">
            <img
              src={FoodBNBLOGO}
              alt="FoodBNB Logo"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                // Fallback if image doesn't load - display first letter
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<span class="text-red-500 font-bold text-xl">F</span>';
              }}
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl font-bold tracking-tight">FoodBNB</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {/* Map through navigation items to create menu links */}
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white
           hover:bg-linear-to-r hover:from-red-600 hover:to-orange-600
           transition-all duration-200 group"
                  >
                    {/* Icon with subtle animation on hover */}
                    <IconComponent
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />

                    {/* Menu item text */}
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Section (Optional) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white border-opacity-20">
          <p className="text-xs text-white text-opacity-70 text-center">
            © 2025 FoodBNB Admin
          </p>
        </div>
      </aside>

      {/* Main Content Area - Adjusts when sidebar is open on desktop */}
      <div
        className={`min-h-screen transition-all duration-300 ${
          isOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        {/* Demo Content */}
        <div className="p-8 pt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome to FoodBNB Admin Panel
            </h2>
            <p className="text-gray-600 mb-6">
              Click the hamburger menu icon in the top left to open the sidebar
              navigation.
            </p>

            {/* Demo Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="w-12 h-12 bg-linear-to-r from-red-500 to-orange-500 rounded-lg mb-4"></div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Card {item}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    This is a demo card to showcase the layout with the sidebar
                    component.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodBNBSidebar;
