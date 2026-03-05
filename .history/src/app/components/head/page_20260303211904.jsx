import Image from "next/image";

export default function Head() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
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

      {/* Logo and content */}
      <div className="absolute inset-0 flex flex-col items-center pt-24 sm:pt-32 md:pt-40 space-y-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        {/* Logo */}
        <Image
          src="/head/logo.svg"
          alt="Logo"
          width={120}
          height={120}
          className="w-20 h-20 sm:w-24 sm:h-24"
        />

        {/* Button-like container */}
        <div className="bg-[#F8F9FA] py-1 px-1 sm:px-4 border border-[#E6E9EE] rounded-full text-center">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            {/* Small avatars */}
            <div className="flex -space-x-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white overflow-hidden">
                <img
                  src="https://placehold.co/22x22"
                  alt="avatar3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Members text */}
            <h1 className="text-[#262626] text-[12px] sm:text-[14px] whitespace-nowrap">
              Join 3k+ Members
            </h1>

            {/* Join button */}
            <button className="bg-[#c4fc5a] text-[#262626] text-[10px] sm:text-[12px] px-1 sm:px-3 py-1 rounded-full whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center">
          <h2 className="text-black text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-snug">
            Clean and Modern Services for
          </h2>
          <h2 className="text-black text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[48px] leading-snug">
            Elevating Products, SaaS & Businesses
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-4">
          <button className="bg-[#404040] text-white text-[14px] sm:text-[16px] py-3 px-6 rounded-[10px] w-full sm:w-auto">
            Get Free Services
          </button>
          <button className="bg-[#F8F9FA] py-3 px-6 border border-[#E6E9EE] text-[#333333] text-[13px] sm:text-[14px] rounded-[10px] w-full sm:w-auto">
            Our Send Message Whatsapp
          </button>
        </div>

        {/* Description */}
        <div className="w-full max-w-3xl mx-auto mt-4">
          <p className="text-center text-[#303236] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-relaxed">
            L'équipe talentueuse de Webtrix est spécialisée dans les sites Web et
            les pages de destination, la conception de logos et l'image de marque,
            le développement SaaS et IA, ainsi que les applications mobiles et le
            codage, garantissant des solutions complètes adaptées à vos besoins.
          </p>
        </div>
        <div className="w-[1360px] h-[726px] relative bg-stone-50 rounded-3xl overflow-hidden">
  <img className="w-96 h-96 left-[1055.78px] top-[369.60px] absolute rounded-sm" src="https://placehold.co/398x431" />
  <img className="w-64 h-[574.01px] left-[708.47px] top-[179.45px] absolute rounded-sm" src="https://placehold.co/265x574" />
  <img className="w-96 h-72 left-[230.69px] top-[14.59px] absolute rounded-sm" src="https://placehold.co/398x298" />
  <img className="w-96 h-72 left-[912.28px] top-[-165.71px] absolute rounded-sm" src="https://placehold.co/398x298" />
  <img className="w-64 h-48 left-[860.91px] top-[748.39px] absolute rounded-sm" src="https://placehold.co/265x199" />
  <img className="w-64 h-64 left-[635.44px] top-[-91.55px] absolute rounded-sm" src="https://placehold.co/266x266" />
  <img className="w-96 h-96 left-[407.23px] top-[673.87px] absolute rounded-sm" src="https://placehold.co/398x398" />
  <img className="w-96 h-96 left-[310.59px] top-[313.21px] absolute rounded-sm" src="https://placehold.co/398x362" />
  <img className="w-96 h-96 left-[-215px] top-[-47.28px] absolute rounded-sm" src="https://placehold.co/398x359" />
  <img className="w-96 h-96 left-[-30.78px] top-[639.99px] absolute rounded-sm" src="https://placehold.co/397x356" />
  <img className="w-96 h-80 left-[-118.61px] top-[311.75px] absolute rounded-sm" src="https://placehold.co/398x325" />
  <img className="w-96 h-56 left-[993.34px] top-[135.64px] absolute rounded-sm" src="https://placehold.co/397x229" />
</div> 
      </div>
    </div>
  );
}