"use client";

import Image from "next/image";

export default function Download() {
  return (
    <div className="w-full min-h-screen px-4 py-6 bg-gray-900">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">

        {/* Desktop / SaaS Card */}
        <div className="flex-1 bg-gradient-to-br from-white via-gray-700 to-neutral-900 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Systems, SaaS, Apps Desktop
              </h1>
              <p className="text-gray-300 text-base sm:text-base md:text-lg lg:text-xl">
                Get the desktop app for SAP's comprehensive project management tools
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-5 text-sm sm:text-sm md:text-base lg:text-lg shadow w-full sm:w-auto">
                  Download for Windows
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-5 text-sm sm:text-sm md:text-base lg:text-lg shadow w-full sm:w-auto">
                  Download for Mac
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center">
              <img
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
                src="/download/saas.png"
                alt="Desktop App"
              />
            </div>
          </div>
        </div>

        {/* Mobile / Game Card */}
        <div className="flex-1 bg-gradient-to-br from-white via-gray-700 to-neutral-900 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                Jeux, Apps Mobile
              </h1>
              <p className="text-gray-300 text-base sm:text-base md:text-lg lg:text-xl">
                Download the ultimate mobile app for SAP's project management on-the-go
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-5 text-sm sm:text-sm md:text-base lg:text-lg shadow w-full sm:w-auto">
                  Download for iOS
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-5 text-sm sm:text-sm md:text-base lg:text-lg shadow w-full sm:w-auto">
                  Download for Android
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center">
              <img
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
                src="/download/appmobile.png"
                alt="Mobile App"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}