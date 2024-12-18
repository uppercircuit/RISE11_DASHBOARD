import React from "react";
import Sidebar from "./components/Sidebar";
import ProgressBar from "./components/ProgressBar";
import Dashboard from "./components/Dashboard";
import { FiBell, FiUser } from "react-icons/fi";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-4/5 p-8 bg-gray-50 relative">
        <ProgressBar step={3} />

        {/* Top-Right Corner Icons */}
        <div className="absolute top-4 right-4 flex space-x-4">
          {/* Notification Icon */}
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <FiBell className="text-blue-500 text-lg sm:text-xl" />
            <span className="absolute top-1 right-1 sm:top-2 sm:right-2 h-1.5 w-1.5 sm:h-2 sm:w-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>

          {/* User Icon */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <FiUser className="text-blue-500 text-lg sm:text-xl" />
          </div>
        </div>

        <Dashboard />
      </div>
    </div>
  );
};

export default App;
