import React, { useRef } from "react";
import { FaFileUpload, FaFileAlt } from "react-icons/fa";
import { MdPlace, MdLanguage } from "react-icons/md";
import { BsFileEarmarkText } from "react-icons/bs";

const Dashboard = () => {
  const statementRef = useRef();
  const contractRef = useRef();
  const arbitrationRef = useRef();
  const additionalDocRef = useRef();

  const handleFileUpload = (ref) => {
    ref.current.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* Main Content */}
      <main className="w-full max-w-7xl bg-white p-4 md:p-8 shadow-lg overflow-y-auto rounded-lg">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
          File your Claim.{" "}
          <span className="text-gray-400">(Approx 5 Minutes)</span>
        </h1>

        {/* Claim Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Claim Value */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FaFileAlt size={20} className="text-blue-600" />
                <h2 className="font-semibold text-lg">Claim Value</h2>
              </div>
              <label className="block text-sm text-gray-600 mb-2">
                Contract Value
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="10,00,00"
                  className="w-full border rounded-lg p-2 text-sm"
                />
                <select
                  className="border rounded-lg p-2 bg-white text-gray-600 cursor-pointer"
                  defaultValue="USD"
                >
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <label className="block text-sm text-gray-600 mt-4 mb-2">
                Claim Value
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="15,00,00"
                  className="w-full border rounded-lg p-2 text-sm"
                />
                <select
                  className="border rounded-lg p-2 bg-white text-gray-600 cursor-pointer"
                  defaultValue="USD"
                >
                  <option value="USD">USD</option>
                  <option value="INR">INR</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <p className="text-sm text-orange-500 mt-2">
                150% of Contract Value
              </p>
            </div>

            {/* Place */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MdPlace size={20} className="text-blue-600" />
                <h2 className="font-semibold text-lg">Place</h2>
              </div>
              <input
                type="text"
                placeholder="Select the Place for proceedings"
                className="w-full border rounded-lg p-2 text-sm"
              />
              <p className="text-sm text-gray-600 mt-4 mb-2">
                Is the place for the proceedings mentioned in the agreement?
              </p>
              <div className="flex gap-4">
                <button className="w-16 py-2 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-100">
                  Yes
                </button>
                <button className="w-16 py-2 border rounded-lg text-gray-600 border-gray-400 hover:bg-gray-100">
                  No
                </button>
              </div>
            </div>

            {/* Language */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MdLanguage size={20} className="text-blue-600" />
                <h2 className="font-semibold text-lg">Language</h2>
              </div>
              <input
                type="text"
                placeholder="Select the language for proceedings"
                className="w-full border rounded-lg p-2 text-sm"
              />
              <p className="text-sm text-gray-600 mt-4 mb-2">
                Is the language for the proceedings mentioned in the agreement?
              </p>
              <div className="flex gap-4">
                <button className="w-16 py-2 border rounded-lg text-blue-600 border-blue-600 hover:bg-blue-100">
                  Yes
                </button>
                <button className="w-16 py-2 border rounded-lg text-gray-600 border-gray-400 hover:bg-gray-100">
                  No
                </button>
              </div>
            </div>
          </div>

          {/* Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Statement */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BsFileEarmarkText size={20} className="text-blue-600" />
                <h2 className="font-semibold text-lg">Statement</h2>
              </div>
              <div
                className="border-dashed border-2 rounded-lg p-6 bg-gray-50 text-center cursor-pointer"
                onClick={() => handleFileUpload(statementRef)}
              >
                <FaFileUpload size={40} className="text-blue-500 mx-auto mb-2" />
                <p className="text-gray-600 text-sm">
                  Write your Statement Here or Upload a PDF
                </p>
              </div>
              <input type="file" ref={statementRef} className="hidden" />
            </div>

            {/* Agreement under Disputes */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BsFileEarmarkText size={20} className="text-blue-600" />
                <h2 className="font-semibold text-lg">Agreement under Disputes</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div
                  className="border-dashed border-2 rounded-lg p-4 bg-gray-50 text-center cursor-pointer flex-1"
                  onClick={() => handleFileUpload(contractRef)}
                >
                  <FaFileUpload size={30} className="text-blue-500 mx-auto mb-2" />
                  <p className="text-gray-600 text-xs">
                    Upload the Contract (Max 2MB, PDF)
                  </p>
                </div>
                <div
                  className="border-dashed border-2 rounded-lg p-4 bg-gray-50 text-center cursor-pointer flex-1"
                  onClick={() => handleFileUpload(arbitrationRef)}
                >
                  <FaFileUpload size={30} className="text-blue-500 mx-auto mb-2" />
                  <p className="text-gray-600 text-xs">
                    Upload Arbitration Agreement (Max 2MB, PDF)
                  </p>
                </div>
              </div>
              <input type="file" ref={contractRef} className="hidden" />
              <input type="file" ref={arbitrationRef} className="hidden" />
            </div>

            {/* Additional Documentation */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BsFileEarmarkText size={20} className="text-blue-600" />
                <h2 className="font-semibold text-lg">Additional Documentation</h2>
              </div>
              <div
                className="border-dashed border-2 rounded-lg p-6 bg-gray-50 text-center cursor-pointer"
                onClick={() => handleFileUpload(additionalDocRef)}
              >
                <FaFileUpload size={40} className="text-blue-500 mx-auto mb-2" />
                <p className="text-gray-600 text-xs">
                  Upload the Contract (Max 2MB, PDF)
                </p>
                <button className="text-blue-600 text-3xl mt-2">+</button>
              </div>
              <input type="file" ref={additionalDocRef} className="hidden" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
