import "./App.css";
import React, { useState } from "react";

// Import components with correct paths
import AdminHeader from "./Components/Header/AdminHeader.jsx";
import FoodBNBSidebar from "./Components/SideBar/FoodBNBSideBar.jsx";
import AdminPanel from "./Components/Body/Admin_Body.jsx";
import DashboardCharts from "./Components/Charts/DashboardCharts.jsx";
import OrderList from "./Components/OrderList/OrderList.jsx";
import OrderListDashboard from "./Components/OrderListDashboard/OrderListDashboard.jsx";
import AdminAuth from "./Components/Login/AdminAuth.jsx";

function App() {
  // State to control sidebar open/close
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log("Sidebar toggled:", !isSidebarOpen);
  };

  // Get current path
  const currentPath = window.location.pathname;
  console.log("Current path:", currentPath);
  console.log("AdminHeader imported:", typeof AdminHeader);

  // LOGIN PAGE
  if (currentPath === "/login") {
    return <AdminAuth />;
  }

  // ORDERS PAGE
  if (currentPath === "/orders") {
    return (
      <div className="relative min-h-screen bg-gray-950">
        <AdminHeader
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <FoodBNBSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main
          className={`transition-all duration-300 ${
            isSidebarOpen ? "lg:ml-64" : "ml-0"
          } pt-16`}
        >
          <OrderListDashboard />
        </main>
      </div>
    );
  }

  // MAIN PAGE
  return (
    <div className="relative min-h-screen bg-gray-950">
      <AdminHeader
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />
      <FoodBNBSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "ml-0"
        } pt-16`}
      >
        <AdminPanel />
        <DashboardCharts />
        <OrderList />
      </main>
    </div>
  );
}

export default App;
