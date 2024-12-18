import React from "react";
import {
  FaHome,
  FaFolderOpen,
  FaFileAlt,
  FaCalendarAlt,
  FaFileUpload,
} from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import assignmentPic from "../assets/assignment pic.png";
import jurpic from "../assets/jurpic.png";

const Sidebar = () => {
  return (
    <div className="bg-white shadow-lg  flex-col h-screen md:w-1/5 w-full p-4 md:p-6 hidden md:block">
      {/* Logo Header */}
      <div className="flex items-center gap-4 mb-8">
        <img
          src={jurpic}
          alt="Logo"
          className="w-16 h-auto object-contain md:w-20"
        />
      </div>

      {/* Navigation Links */}
      <ul className="space-y-4 text-gray-600 flex-1">
        <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
          <FaHome size={20} />
          Dashboard
        </li>
        <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
          <FaFolderOpen size={20} />
          My Cases
        </li>
        <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
          <FaFileAlt size={20} />
          Activities
        </li>
        <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
          <FaCalendarAlt size={20} />
          Calendar
        </li>
        <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
          <FaFileUpload size={20} />
          Files
        </li>
        <li className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
          <MdAddCircleOutline size={20} />
          Open a Dispute
        </li>
      </ul>

      {/* Footer */}
      <div className="bg-blue-50 p-4 rounded-lg text-center">
        <p className="text-blue-600 font-semibold mb-2">
          Get Justice on Every Claims
        </p>
        <img
          src={assignmentPic}
          alt="Justice"
          className="w-20 h-auto mx-auto object-contain"
        />
      </div>
    </div>
  );
};

export default Sidebar;
