import React, { useState } from "react";
import { TrendingUp, BarChart3 } from "lucide-react";

export default function DashboardCharts() {
  const [activeTab, setActiveTab] = useState("weekly");
  const [hoveredBar, setHoveredBar] = useState(null);
  const [activeSegment, setActiveSegment] = useState(null);

  // Pie chart data
  const pieData = [
    { label: "Income", value: 24000, color: "#dc2626", percentage: 60 },
    { label: "Expenses", value: 16000, color: "#f97316", percentage: 40 },
  ];

  // Bar chart data
  const barData = {
    weekly: [
      { date: "Jun 24", value: 180, label: "Mon" },
      { date: "Jun 25", value: 140, label: "Tue" },
      { date: "Jun 26", value: 250, label: "Wed" },
      { date: "Jun 27", value: 110, label: "Thu" },
      { date: "Jun 28", value: 200, label: "Fri" },
      { date: "Jun 29", value: 160, label: "Sat" },
      { date: "Jun 30", value: 220, label: "Sun" },
    ],
    monthly: [
      { date: "Week 1", value: 850, label: "W1" },
      { date: "Week 2", value: 920, label: "W2" },
      { date: "Week 3", value: 780, label: "W3" },
      { date: "Week 4", value: 1050, label: "W4" },
    ],
    today: [
      { date: "6 AM", value: 20, label: "6AM" },
      { date: "9 AM", value: 45, label: "9AM" },
      { date: "12 PM", value: 65, label: "12PM" },
      { date: "3 PM", value: 50, label: "3PM" },
      { date: "6 PM", value: 70, label: "6PM" },
      { date: "9 PM", value: 30, label: "9PM" },
    ],
  };

  const currentData = barData[activeTab];
  const maxValue = Math.max(...currentData.map((d) => d.value));

  // Interactive Pie Chart Functions
  const total = pieData.reduce((sum, item) => sum + item.value, 0);

  const segments = [];
  let currentAngle = -90;

  pieData.forEach((item, index) => {
    const percentage = (item.value / total) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;

    segments.push({
      ...item,
      percentage,
      startAngle,
      endAngle,
      index,
    });

    currentAngle = endAngle;
  });

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
      "M",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  const handleSegmentClick = (index) => {
    setActiveSegment(activeSegment === index ? null : index);
  };

  const cx = 150;
  const cy = 150;
  const outerRadius = 100;
  const innerRadius = 70;
  const popOutDistance = 0;

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {/* Pie Chart Card - Revenue */}
          <div className="bg-gray-800 rounded-xl shadow-black/50 shadow-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-semibold text-white">Revenue</h2>
            </div>

            <div className="flex items-center justify-center">
              <svg width="400" height="400" viewBox="-100 -100 500 500">
                {segments.map((segment, index) => {
                  const midAngle = (segment.startAngle + segment.endAngle) / 2;
                  const isActive = activeSegment === index;
                  const offset = isActive ? popOutDistance : 0;
                  const offsetX = offset * Math.cos((midAngle * Math.PI) / 180);
                  const offsetY = offset * Math.sin((midAngle * Math.PI) / 180);
                  const scale = isActive ? 1.05 : 1;

                  const outerPath = describeArc(
                    cx,
                    cy,
                    outerRadius,
                    segment.startAngle,
                    segment.endAngle
                  );
                  const innerPath = describeArc(
                    cx,
                    cy,
                    innerRadius,
                    segment.endAngle,
                    segment.startAngle
                  );
                  const endInner = polarToCartesian(
                    cx,
                    cy,
                    innerRadius,
                    segment.startAngle
                  );
                  const pathData = `${outerPath} L ${endInner.x} ${endInner.y} ${innerPath} Z`;

                  return (
                    <path
                      key={index}
                      d={pathData}
                      fill={segment.color}
                      stroke="#1f1f1f"
                      strokeWidth="2"
                      style={{
                        cursor: "pointer",
                        transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})`,
                        transformOrigin: `${cx}px ${cy}px`,
                        transition: "transform 0.3s ease",
                      }}
                      onClick={() => handleSegmentClick(index)}
                    />
                  );
                })}

                {activeSegment !== null &&
                  (() => {
                    const segment = segments[activeSegment];
                    const midAngle =
                      (segment.startAngle + segment.endAngle) / 2;
                    const labelRadius = outerRadius + 60;
                    const lineEnd = polarToCartesian(
                      cx,
                      cy,
                      outerRadius + 10,
                      midAngle
                    );
                    const labelPos = polarToCartesian(
                      cx,
                      cy,
                      labelRadius,
                      midAngle
                    );

                    return (
                      <g>
                        <line
                          x1={lineEnd.x}
                          y1={lineEnd.y}
                          x2={labelPos.x}
                          y2={labelPos.y}
                          stroke="#d1d5db"
                          strokeWidth="2"
                        />
                        <foreignObject
                          x={labelPos.x - 70}
                          y={labelPos.y - 35}
                          width="140"
                          height="70"
                        >
                          <div
                            style={{
                              background: "#1f1f1f",
                              border: "2px solid #374151",
                              borderRadius: "8px",
                              padding: "10px 14px",
                              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                              fontSize: "14px",
                              fontFamily:
                                "system-ui, -apple-system, sans-serif",
                              color: "white",
                            }}
                          >
                            <div
                              style={{
                                fontWeight: "700",
                                color: "white",
                                marginBottom: "6px",
                                fontSize: "15px",
                              }}
                            >
                              {segment.label}
                            </div>
                            <div
                              style={{
                                color: "#e5e7eb",
                                fontWeight: "600",
                                marginBottom: "4px",
                              }}
                            >
                              ${segment.value.toLocaleString()}
                            </div>
                            <div
                              style={{
                                color: "#9ca3af",
                                fontSize: "13px",
                                fontWeight: "500",
                              }}
                            >
                              {segment.percentage.toFixed(1)}%
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })()}

                <circle cx={cx} cy={cy} r={innerRadius} fill="#1f1f1f" />

                <text
                  x={cx}
                  y={cy - 10}
                  textAnchor="middle"
                  style={{
                    fontSize: "16px",
                    fill: "#9ca3af",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  Total
                </text>
                <text
                  x={cx}
                  y={cy + 15}
                  textAnchor="middle"
                  style={{
                    fontSize: "24px",
                    fill: "white",
                    fontWeight: "600",
                    fontFamily: "system-ui, -apple-system, sans-serif",
                  }}
                >
                  ${total.toLocaleString()}
                </text>
              </svg>
            </div>

            <div className="mt-6 space-y-3">
              {pieData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-800 rounded-lg
           border border-gray-700
           transition-all duration-300 cursor-pointer
           hover:scale-[1.05] hover:shadow-black/50 hover:bg-gray-700 hover:border-gray-600"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm font-medium text-white">
                      {item.label}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-white">
                      ${item.value.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {item.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bar Chart Card - Order Summary */}
          <div className="bg-gray-800 rounded-xl shadow-black/50 shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-red-500" />
                <h2 className="text-xl font-semibold text-white">
                  Order Summary
                </h2>
              </div>
              <div className="flex gap-2">
                {["monthly", "weekly", "today"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                      activeTab === tab
                        ? "bg-gray-900 text-white"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-2 px-4">
              {currentData.map((item, index) => {
                const barHeight = (item.value / maxValue) * 100;
                const isHovered = hoveredBar === index;

                return (
                  <div
                    key={index}
                    className="flex-1 flex flex-col items-center gap-2"
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <div className="relative w-full">
                      {isHovered && (
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                          {item.value} orders
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                            <div className="border-4 border-transparent border-t-gray-500"></div>
                          </div>
                        </div>
                      )}
                      <div
                        className="w-full rounded-t-lg transition-all duration-300 cursor-pointer"
                        style={{
                          height: `${barHeight}%`,
                          background: isHovered
                            ? "linear-gradient(to bottom, #dc2626, #f97316)"
                            : "linear-gradient(to bottom, #fca5a5, #fed7aa)",
                          minHeight: "20px",
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-300 font-medium">
                      {item.date}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-400">Total Orders</p>
                  <p className="text-2xl font-bold text-white">
                    {currentData.reduce((sum, item) => sum + item.value, 0)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">Average per period</p>
                  <p className="text-2xl font-bold text-white">
                    {Math.round(
                      currentData.reduce((sum, item) => sum + item.value, 0) /
                        currentData.length
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
