import React, { useState } from "react";
import { X, ShoppingCart, Clock, MapPin } from "lucide-react";
// ✅ FIXED: Changed from "./App.css" to "../../App.css"
// This goes up 2 levels: OrderListDashboard -> Components -> src
import "../../App.css";

const OrderListDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Sam Moore",
      phone: "+1 9876543210",
      status: "New Order",
      statusColor: "bg-blue-100 text-blue-700",
      time: "11:00 AM, 08 Feb, 2024",
      table: "Table 1",
      items: [
        { name: "Chicken Curry", price: 12.0 },
        { name: "Garlic Bread", price: 3.5 },
        { name: "Caesar Salad", price: 3.5 },
      ],
      total: 22.5,
    },
    {
      id: 2,
      customer: "Esther Howard",
      phone: "+1 9876543210",
      status: "New Order",
      statusColor: "bg-blue-100 text-blue-700",
      time: "11:30 AM, 08 Feb, 2024",
      table: "Table 2",
      items: [
        { name: " Aloo Potol Posto", quantity: 2, price: 14.0 },
        { name: "Salad", price: 8.0 },
      ],
      total: 22.0,
    },
    {
      id: 3,
      customer: "Jacob Jones",
      phone: "+1 9876543210",
      status: "New Order",
      statusColor: "bg-blue-100 text-blue-700",
      time: "12:00 PM, 08 Feb, 2024",
      table: "Table 3",
      items: [
        { name: " Shukto", price: 10.0 },
        { name: " Ilish Macher Jhol", price: 8.0 },
        { name: " Sandesh", quantity: 2, price: 8.0 },
      ],
      total: 26.0,
    },
    {
      id: 4,
      customer: "Arlene McCoy",
      phone: "+1 9876543210",
      status: "On Cook",
      statusColor: "bg-orange-100 text-orange-700",
      time: "01:00 PM, 08 Feb, 2024",
      table: "Table 5",
      items: [
        { name: "Chicken Kasha", price: 13.0 },
        { name: "Mutton Biryani", price: 3.5 },
        { name: " Aam Pora Shorbot", price: 4.5 },
      ],
      total: 21.0,
    },
    {
      id: 5,
      customer: "Eleanor Pena",
      phone: "+1 9876543210",
      status: "On Cook",
      statusColor: "bg-orange-100 text-orange-700",
      time: "02:00 PM, 08 Feb, 2024",
      table: "Table 6",
      items: [
        { name: "Tangra Macher Jhol", price: 9.0 },
        { name: "Sweet Potato Fries", price: 4.5 },
        { name: " Mutton Biryani", price: 2.5 },
      ],
      total: 16.0,
    },
    {
      id: 6,
      customer: "Brooklyn Simmons",
      phone: "+1 9876543210",
      status: "On Cook",
      statusColor: "bg-orange-100 text-orange-700",
      time: "03:00 PM, 08 Feb, 2024",
      table: "Table 7",
      items: [
        { name: "BBQ Chicken Pizza", price: 12.5 },
        { name: "Caesar Salad", price: 7.0 },
        { name: "Lemonade", quantity: 2, price: 3.0 },
      ],
      total: 22.5,
    },
    {
      id: 7,
      customer: "Davon Lane",
      phone: "+1 9876543210",
      status: "Complete",
      statusColor: "bg-green-100 text-green-700",
      time: "10:00 AM, 08 Feb, 2024",
      table: "Table 4",
      items: [
        { name: "Sandesh", price: 8.0 },
        { name: "Orange Juice", price: 4.0 },
      ],
      total: 12.0,
    },
    {
      id: 8,
      customer: "Courtney Henry",
      phone: "+1 9876543210",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-700",
      time: "09:30 AM, 08 Feb, 2024",
      table: "Table 8",
      items: [{ name: "Eggs Curry", price: 11.0 }],
      total: 11.0,
    },
  ]);

  const [isVisible] = useState(true);

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  if (!isVisible) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Dashboard closed</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-white">Order List</h1>
            </div>
            <button className="relative p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-white" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {orders.filter((o) => o.status === "New Order").length}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-gray-800 rounded-xl border border-gray-700 p-5 hover:shadow-lg hover:shadow-gray-900/50 transition-shadow relative"
            >
              {/* Delete Button */}
              <button
                onClick={() => handleDeleteOrder(order.id)}
                className="absolute top-3 right-3 p-1.5 hover:bg-red-900/20 rounded-lg transition-colors group"
                title="Delete order"
              >
                <X className="w-4 h-4 text-gray-400 group-hover:text-red-400" />
              </button>

              {/* Order Header */}
              <div className="flex items-start justify-between mb-4 pr-8">
                <div>
                  <h3 className="font-semibold text-white">{order.customer}</h3>
                  <p className="text-sm text-gray-400">{order.phone}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${order.statusColor}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Time and Table */}
              <div className="flex flex-col gap-2 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{order.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{order.table}</span>
                </div>
              </div>

              {/* Order Items */}
              <div className="border-t border-gray-700 pt-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-300">
                    {order.items.length} Items
                  </span>
                  <span className="text-sm font-semibold text-white">
                    ${order.total.toFixed(2)}
                  </span>
                </div>
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-gray-400">
                        {item.quantity ? `${item.quantity} ` : "1 "}
                        {item.name}
                      </span>
                      <span className="text-gray-300">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderListDashboard;
