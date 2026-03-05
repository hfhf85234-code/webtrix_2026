"use client";

import Image from "next/image";

export default function Download() {
  return (
    <div className="w-full min-h-screen bg-gray-900 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Desktop / SaaS Card */}
        <div className="flex-1 bg-gradient-to-br from-white via-gray-700 to-neutral-900 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            
            {/* Text */}
            <div className="flex-1 space-y-5 text-center lg:text-left">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Systems, SaaS, Apps Desktop
              </h1>

              <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
                Get the desktop app for SAP's comprehensive project management tools
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-6 text-sm sm:text-base shadow w-full sm:w-auto">
                  Download for Windows
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-6 text-sm sm:text-base shadow w-full sm:w-auto">
                  Download for Mac
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/download/saas.png"
                alt="Desktop App"
                width={500}
                height={500}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>

          </div>
        </div>

        {/* Mobile / Game Card */}
        <div className="flex-1 bg-gradient-to-br from-white via-gray-700 to-neutral-900 rounded-2xl p-6 sm:p-8 lg:p-10 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            
            {/* Text */}
            <div className="flex-1 space-y-5 text-center lg:text-left">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                Jeux, Apps Mobile
              </h1>

              <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
                Download the ultimate mobile app for SAP's project management on-the-go
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-6 text-sm sm:text-base shadow w-full sm:w-auto">
                  Download for iOS
                </button>
                <button className="bg-gray-600 hover:bg-gray-700 transition rounded-lg text-white py-3 px-6 text-sm sm:text-base shadow w-full sm:w-auto">
                  Download for Android
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/download/appmobile.png"
                alt="Mobile App"
                width={500}
                height={500}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}