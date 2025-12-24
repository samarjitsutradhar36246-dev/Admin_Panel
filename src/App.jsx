import "./App.css";
import React, { useState, useEffect } from "react";

// Import components
import AdminHeader from "./Components/Header/AdminHeader.jsx";
import FoodBNBSidebar from "./Components/SideBar/FoodBNBSideBar.jsx";
import AdminPanel from "./Components/Body/Admin_Body.jsx";
import DashboardCharts from "./Components/Charts/DashboardCharts.jsx";
import OrderList from "./Components/OrderList/OrderList.jsx";
import OrderListDashboard from "./Components/OrderListDashboard/OrderListDashboard.jsx";
import AdminAuth from "./Components/Login/AdminAuth.jsx";
import Setting from "./Components/settings_page/Setting.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Listen for navigation changes
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  console.log("Current path:", currentPath);

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

  // SETTINGS PAGE
  if (currentPath === "/settings") {
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
          <Setting />
        </main>
      </div>
    );
  }

  // MAIN PAGE (Dashboard)
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
