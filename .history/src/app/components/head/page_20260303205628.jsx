import Image from "next/image";

export default function Head() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0  bg-cover bg-center"
        style={{ backgroundImage: "url('/head/screen.svg')" }}
      />

      {/* Foreground image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src="/head/screen1.png"
          alt="Foreground"
          fill
          className="object-cover"
        />
      </div>

      {/* Logo and button container */}
      <div className="absolute inset-0 flex flex-col items-center pt-[120px] space-y-5">
        {/* Logo */}
        <Image
          src="/head/logo.svg"
          alt="Logo"
          width={120}
          height={120}
          className="w-20 h-20 sm:w-24 sm:h-24"
        />

        {/* Button-like container */}
        <div className="bg-[#F8F9FA] py-2 px-4 border border-[#E6E9EE] rounded-full text-center">
          <div className="flex items-center gap-3">
            {/* Small avatars */}
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Members text */}
            <h1 className="text-[#262626] text-[14px] whitespace-nowrap">
              Join 3k+ Members
            </h1>

            {/* Join button */}
            <button className="bg-[#c4fc5a] text-[#262626] text-[12px] px-3 py-1 rounded-full whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
          
          
        </div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
  <h2 className="text-center text-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px]  leading-snug">
    Clean and Modern Services for
  </h2>
  <h2 className="text-center text-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[44px] xl:text-[48px]  leading-snug">
    Elevating Products, SaaS & Businesses
  </h2>
</div>
<div className="flex gap-[20px]">
<button className="bg-[#404040] text-white text-[12px] py-4 p-4 rounded-full">Get Free Services</button>
<button className="bg-[#404040] py-4 p-4 rounded-full"></button>
</div>
      </div>
     

    </div>
  );
}