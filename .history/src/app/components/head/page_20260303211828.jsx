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
        <div className="relative w-full max-w-[1360px] mx-auto bg-stone-50 rounded-3xl overflow-hidden aspect-[1360/726]">
  {/* Image 1 */}
  <img
    src="https://placehold.co/398x431"
    className="absolute w-[20%] h-auto top-[50%] left-[77%] rounded-sm -translate-y-1/2"
  />
  {/* Image 2 */}
  <img
    src="https://placehold.co/265x574"
    className="absolute w-[15%] h-auto top-[25%] left-[52%] rounded-sm"
  />
  {/* Image 3 */}
  <img
    src="https://placehold.co/398x298"
    className="absolute w-[20%] h-auto top-[2%] left-[17%] rounded-sm"
  />
  {/* Image 4 */}
  <img
    src="https://placehold.co/398x298"
    className="absolute w-[20%] h-auto top-[-10%] left-[67%] rounded-sm"
  />
  {/* Image 5 */}
  <img
    src="https://placehold.co/265x199"
    className="absolute w-[15%] h-auto top-[100%] left-[63%] rounded-sm -translate-y-full"
  />
  {/* Image 6 */}
  <img
    src="https://placehold.co/266x266"
    className="absolute w-[15%] h-auto top-[-12%] left-[47%] rounded-sm"
  />
  {/* Image 7 */}
  <img
    src="https://placehold.co/398x398"
    className="absolute w-[20%] h-auto top-[92%] left-[30%] rounded-sm -translate-y-full"
  />
  {/* Image 8 */}
  <img
    src="https://placehold.co/398x362"
    className="absolute w-[20%] h-auto top-[43%] left-[23%] rounded-sm"
  />
  {/* Image 9 */}
  <img
    src="https://placehold.co/398x359"
    className="absolute w-[20%] h-auto top-[-6%] left-[-16%] rounded-sm"
  />
  {/* Image 10 */}
  <img
    src="https://placehold.co/397x356"
    className="absolute w-[20%] h-auto top-[88%] left-[-2%] rounded-sm"
  />
  {/* Image 11 */}
  <img
    src="https://placehold.co/398x325"
    className="absolute w-[20%] h-auto top-[43%] left-[-8%] rounded-sm"
  />
  {/* Image 12 */}
  <img
    src="https://placehold.co/397x229"
    className="absolute w-[20%] h-auto top-[19%] left-[73%] rounded-sm"
  />
</div>
      </div>
    </div>
  );
}