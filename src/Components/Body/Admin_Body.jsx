import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";
import {
  ShoppingCart,
  Star,
  XCircle,
  Filter,
  Store,
  PlusCircle,
  Truck,
} from "lucide-react";
import OrderList from "../OrderList/OrderList";

const restaurants = [
  "Food Hub",
  "Spice Villa",
  "Burger Point",
  "Pizza Town",
  "Green Bowl",
  "Sushi House",
  "Curry Corner",
  "Taco Loco",
  "Pasta Fiesta",
  "Vegan Vibes",
];

const newRestaurants = [
  { name: "Urban Bites", date: "2024-12-16" },
  { name: "Taco Street", date: "2024-12-15" },
  { name: "Curry Express", date: "2024-12-14" },
  { name: "Pasta Palace", date: "2024-12-13" },
  { name: "Vegan Delight", date: "2024-12-12" },
];

const deliveryPartners = [
  { name: "Alex Rider", status: "Active" },
  { name: "Brian Cole", status: "Active" },
  { name: "Sophia Lee", status: "On Delivery" },
  { name: "Daniel Cruz", status: "Inactive" },
  { name: "Sophie Lameo", status: "Inactive" },
];

export default function AdminPanel() {
  const [] = useState(false);
  const [filterCancellations, setFilterCancellations] = useState(false);
  const [orders, setOrders] = useState([]);
  // filter logic
  const [selectedRating, setSelectedRating] = useState(""); // "" = show all

  useEffect(() => {
    const fetchData = async () => {
      const ordersSnap = await getDocs(collection(db, "Order-History"));
      setOrders(ordersSnap.docs.map((doc) => doc.data()));

      console.log(
        "Fetched orders:",
        ordersSnap.docs.map((doc) => doc.data())
      );
      // console.log("Orders state:", orders.length);
      // const reviewsSnap = await getDocs(collection(db, "reviews"));
      // setReviews(reviewsSnap.docs.map((doc) => doc.data()));

      // const cancelSnap = await getDocs(collection(db, "cancellations"));
      // setCancellations(cancelSnap.docs.map((doc) => doc.data()));

      // const restSnap = await getDocs(collection(db, "restaurants"));
      // setRestaurants(restSnap.docs.map((doc) => doc.data()));

      // const newRestSnap = await getDocs(collection(db, "newRestaurants"));
      // setNewRestaurants(newRestSnap.docs.map((doc) => doc.data()));

      // const partnersSnap = await getDocs(collection(db, "deliveryPartners"));
      // setDeliveryPartners(partnersSnap.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);
  useEffect(() => {
    console.log("Orders state updated:", orders);
  }, [orders]);

  // const orders = [
  //   {
  //     id: "ORD-001",
  //     date: "2024-12-15",
  //     customer: "John Smith",
  //     status: "Delivered",
  //   },
  //   {
  //     id: "ORD-002",
  //     date: "2024-12-14",
  //     customer: "Emma Wilson",
  //     status: "Processing",
  //   },
  //   {
  //     id: "ORD-003",
  //     date: "2024-12-13",
  //     customer: "Michael Brown",
  //     status: "Shipped",
  //   },
  //   {
  //     id: "ORD-004",
  //     date: "2024-12-12",
  //     customer: "Sarah Davis",
  //     status: "Delivered",
  //   },
  //   {
  //     id: "ORD-005",
  //     date: "2024-12-11",
  //     customer: "James Taylor",
  //     status: "Processing",
  //   },
  //   {
  //     id: "ORD-006",
  //     date: "2025-12-11",
  //     customer: "Holland Taylor",
  //     status: "Processing",
  //   },
  //   {
  //     id: "ORD-007",
  //     date: "2025-12-10",
  //     customer: "Samuel Warron",
  //     status: "Cancelled",
  //   },
  //   {
  //     id: "ORD-008",
  //     date: "2025-12-10",
  //     customer: "Hilda Morgan",
  //     status: "Delivered",
  //   },
  // ];

  const reviews = [
    {
      customer: "Alice Johnson",
      rating: 5,
      comment: "Excellent product! Fast delivery.",
    },
    {
      customer: "Bob Martinez",
      rating: 4,
      comment: "Good quality, minor packaging issues.",
    },
    {
      customer: "Carol White",
      rating: 5,
      comment: "Amazing service and product quality!",
    },
    {
      customer: "David Lee",
      rating: 3,
      comment: "Average experience, room for improvement.",
    },
    { customer: "Eva Garcia", rating: 5, comment: "Best purchase this year!" },
  ];

  const cancellations = [
    {
      id: "ORD-045",
      customer: "Mark Wilson",
      reason: "Changed mind",
      date: "2024-12-16",
    },
    {
      id: "ORD-046",
      customer: "Lisa Anderson",
      reason: "Found cheaper",
      date: "2024-12-15",
    },
    {
      id: "ORD-047",
      customer: "Tom Harris",
      reason: "Changed mind",
      date: "2024-12-14",
    },
    {
      id: "ORD-048",
      customer: "Nina Clark",
      reason: "Duplicate order",
      date: "2024-12-13",
    },
  ];

  const filteredReviews = selectedRating
    ? reviews.filter((review) => review.rating === Number(selectedRating))
    : reviews;

  const filteredCancellations = filterCancellations
    ? cancellations.filter((c) => c.reason === "Changed mind")
    : cancellations;

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-700 text-white";
      case "Processing":
        return "bg-yellow-700 text-white";
      case "Shipped":
        return "bg-blue-700 text-white";
      default:
        return "bg-gray-700 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-black p-8 pt-24 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Card 1: Order History */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingCart className="w-4 h-4 text-white" />
              <h2 className="text-base font-semibold text-white">
                Order History
              </h2>
            </div>

            <div className="rounded-lg overflow-y-auto h-44 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-opacity-50">
              <table className="w-full text-white">
                <tbody className="text-xs">
                  {orders.map((order) => (
                    <tr
                      key={order["Order-Id"]}
                      className="border-b border-gray-700 border-opacity-20">
                      {/* <td className="py-1 px-0.5 text-xs text-white">
                        {order.date}
                      </td> */}
                      {/* <td className="py-1 px-0.5 text-xs font-medium text-white">
                        {order.Order-Id}
                      </td> */}
                      <td className="py-1 px-0.5 text-xs text-white">
                        {order.Name}
                      </td>
                      <td className="py-1 px-0.5 flex items-center">
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full ${getStatusColor(
                            order.Status
                          )}`}>
                          {order.Status}
                        </span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full ml-auto ${getStatusColor(
                            order.Order_Id
                          )}`}>
                          {order.Order_Id}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Customer Reviews */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-white" />
                <h2 className="text-base font-semibold text-white">
                  Customer Reviews
                </h2>
              </div>
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="ml-auto bg-gray-800 text-white text-xs rounded p-1">
                <option value="">All</option>
                <option value="5">5★</option>
                <option value="4">4★</option>
                <option value="3">3★</option>
                <option value="2">2★</option>
                <option value="1">1★</option>
              </select>
            </div>

            <div className="overflow-y-auto h-44 space-y-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-opacity-50">
              {filteredReviews.map((review, index) => (
                <div
                  key={index}
                  className="rounded p-2 border border-gray-700 border-opacity-20 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[10px] text-white">
                      {review.customer}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2.5 h-2.5 ${
                            i < review.rating
                              ? "fill-yellow-300 text-yellow-300"
                              : "text-white opacity-30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] opacity-90 text-white">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Order Cancellations */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-white" />
                <h2 className="text-base font-semibold text-white">
                  Cancellations
                </h2>
              </div>
              <label className="flex items-center gap-1.5 cursor-pointer text-white">
                <Filter className="w-3 h-3 text-white" />
                <input
                  type="checkbox"
                  checked={filterCancellations}
                  onChange={(e) => setFilterCancellations(e.target.checked)}
                  className="w-3 h-3 rounded"
                />
              </label>
            </div>

            <div className="text-center mb-2">
              <div className="text-2xl font-bold text-white">
                {filteredCancellations.length}
              </div>
              <div className="text-[10px] opacity-80 text-white">Total</div>
            </div>

            <div className="overflow-y-auto h-36 space-y-1.5 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
              {filteredCancellations.map((cancel) => (
                <div
                  key={cancel.id}
                  className="rounded p-1.5 border border-gray-700 border-opacity-20 text-white">
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-[10px] text-white">
                      {cancel.id}
                    </span>
                    <span className="text-[10px] opacity-70 text-white">
                      {cancel.date}
                    </span>
                  </div>
                  <div className="text-[10px] opacity-90 text-white">
                    {cancel.customer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Cards 4, 5, 6 */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 4: Restaurants */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-4 h-4 text-white" />
              <h2 className="text-base font-semibold text-white">
                Total Registered
              </h2>
            </div>

            <div className="flex flex-col items-center justify-center h-44">
              <div className="text-5xl font-bold text-white">
                {restaurants.length}
              </div>
              <div className="text-sm opacity-80 mt-2 text-white">
                Household Registered
              </div>
            </div>
          </div>

          {/* Card 5: New Restaurants */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-3">
              <PlusCircle className="w-4 h-4 text-white" />
              <h2 className="text-base font-semibold text-white">
                New Registered
              </h2>
            </div>

            <div className="text-center mb-2">
              <div className="text-2xl font-bold text-white">
                {newRestaurants.length}
              </div>
              <div className="text-[10px] opacity-80 text-white">
                Added This Week
              </div>
            </div>

            <div className="overflow-y-auto h-36 space-y-1.5 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-opacity-50">
              {newRestaurants.map((res, index) => (
                <div
                  key={index}
                  className="rounded p-1.5 border border-gray-700 border-opacity-20 text-white">
                  <div className="flex justify-between text-[10px]">
                    <span className="font-medium text-white">{res.name}</span>
                    <span className="opacity-70 text-white">{res.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6: Delivery Partners */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-3">
              <Truck className="w-4 h-4 text-white" />
              <h2 className="text-base font-semibold text-white">
                Delivery Partners
              </h2>
            </div>

            <div className="text-center mb-2">
              <div className="text-2xl font-bold text-white">
                {deliveryPartners.length}
              </div>
              <div className="text-[10px] opacity-80 text-white">
                Total Partners
              </div>
            </div>

            <div className="overflow-y-auto h-36 space-y-1.5 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-opacity-50">
              {deliveryPartners.map((partner, index) => (
                <div
                  key={index}
                  className="rounded p-1.5 border border-gray-700 border-opacity-20 text-white">
                  <div className="flex justify-between text-[10px]">
                    <span className="font-medium text-white">
                      {partner.name}
                    </span>
                    <span className="opacity-70 text-white">
                      {partner.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
