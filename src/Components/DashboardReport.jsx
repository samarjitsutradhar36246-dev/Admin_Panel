// DashboardReport.jsx should look something like this:
import React from "react";
import {
  ShoppingCart,
  Users,
  DollarSign,
  TrendingUp,
  Package,
  Star,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

/**
 * FoodBNB Premium Dashboard Statistics Component
 * Ultra-modern, glassmorphic design with advanced animations
 *
 * Features:
 * - Glassmorphism effects with backdrop blur
 * - Animated gradient backgrounds
 * - Micro-interactions and hover states
 * - Premium color schemes and shadows
 * - Floating elements and depth
 * - Responsive grid with dynamic scaling
 */
const DashboardStats = () => {
  /**
   * Premium statistics data configuration
   * Each stat contains enhanced styling and interaction data
   */
  const stats = [
    {
      title: "Total Orders",
      value: "1,245",
      icon: ShoppingCart,
      gradient: "from-blue-600 via-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
      change: "+12.5",
      trending: "up",
      subtitle: "This month",
    },
    {
      title: "Active Users",
      value: "3,842",
      icon: Users,
      gradient: "from-emerald-600 via-green-500 to-teal-400",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-emerald-500/10",
      change: "+8.2",
      trending: "up",
      subtitle: "Online now",
    },
    {
      title: "Total Revenue",
      value: "$24.5K",
      icon: DollarSign,
      gradient: "from-purple-600 via-violet-500 to-indigo-400",
      bgGradient: "from-purple-500/10 via-indigo-500/10 to-purple-500/10",
      change: "+15.3",
      trending: "up",
      subtitle: "This quarter",
    },
    {
      title: "Growth Rate",
      value: "23.5%",
      icon: TrendingUp,
      gradient: "from-orange-600 via-red-500 to-pink-400",
      bgGradient: "from-orange-500/10 via-pink-500/10 to-orange-500/10",
      change: "+5.1",
      trending: "up",
      subtitle: "YoY increase",
    },
    {
      title: "Pending Orders",
      value: "156",
      icon: Package,
      gradient: "from-rose-600 via-red-500 to-orange-400",
      bgGradient: "from-rose-500/10 via-orange-500/10 to-rose-500/10",
      change: "-3.2",
      trending: "down",
      subtitle: "Needs attention",
    },
    {
      title: "Avg Rating",
      value: "4.8",
      icon: Star,
      gradient: "from-amber-600 via-yellow-500 to-orange-400",
      bgGradient: "from-amber-500/10 via-orange-500/10 to-amber-500/10",
      change: "+0.3",
      trending: "up",
      subtitle: "From 2.4K reviews",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-gray-50 via-gray-100 to-gray-200 p-8">
      {/* Premium Header Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 mb-2">
              Dashboard Overview
            </h1>
            <p className="text-gray-600 text-base font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live data • Updated just now
            </p>
          </div>

          {/* Time Period Selector */}
          <div className="flex gap-2 bg-white rounded-xl p-1 shadow-lg">
            {["Today", "7 Days", "30 Days", "Year"].map((period, idx) => (
              <button
                key={period}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  idx === 2
                    ? "bg-linear-to-r from-red-500 to-orange-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Premium Statistics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          const TrendIcon =
            stat.trending === "up" ? ArrowUpRight : ArrowDownRight;

          return (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glassmorphic Card */}
              <div
                className={`relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:scale-[1.02] hover:-translate-y-1`}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                ></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Top Row: Icon and Trend */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Premium Icon Container */}
                    <div
                      className={`relative w-14 h-14 rounded-xl bg-linear-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                    >
                      <IconComponent
                        className="text-white"
                        size={26}
                        strokeWidth={2.5}
                      />

                      {/* Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-linear-to-br ${stat.gradient} blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Trend Indicator */}
                    <div
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
                        stat.trending === "up"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      } font-bold text-sm`}
                    >
                      <TrendIcon size={16} strokeWidth={3} />
                      <span>{stat.change}%</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">
                    {stat.title}
                  </h3>

                  {/* Value */}
                  <div className="flex items-baseline gap-2 mb-2">
                    <p className="text-4xl font-black text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                      {stat.value}
                    </p>
                  </div>

                  {/* Subtitle */}
                  <p className="text-gray-600 text-xs font-medium">
                    {stat.subtitle}
                  </p>

                  {/* Bottom Progress Bar */}
                  <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-linear-to-r ${stat.gradient} rounded-full transition-all duration-1000 group-hover:w-full`}
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating Particles Effect */}
              <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute top-4 right-4 w-20 h-20 bg-linear-to-br ${stat.gradient} rounded-full blur-2xl opacity-30 animate-pulse`}
                ></div>
                <div
                  className={`absolute bottom-4 left-4 w-16 h-16 bg-linear-to-br ${stat.gradient} rounded-full blur-2xl opacity-20 animate-pulse`}
                  style={{ animationDelay: "500ms" }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Premium Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="group relative px-8 py-4 bg-linear-to-r from-red-600 via-orange-600 to-orange-500 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
          <span className="relative z-10 flex items-center gap-2">
            View Detailed Analytics
            <ArrowUpRight
              size={18}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-bold border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 hover:shadow-lg transition-all duration-300 hover:scale-105">
          Export Report
        </button>

        <button className="px-8 py-4 bg-white/80 backdrop-blur-xl text-gray-700 rounded-xl font-bold border-2 border-white/40 hover:border-orange-400 hover:text-orange-600 hover:shadow-lg transition-all duration-300 hover:scale-105">
          Configure Dashboard
        </button>
      </div>
    </div>
  );
};

export default DashboardStats;
