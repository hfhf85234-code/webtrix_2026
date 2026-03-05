import Image from "next/image";

export default function Head() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/head/screen.svg')" }}
      ></div>

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
          className="sm:w-24 sm:h-24 w-20 h-20"
        />

        {/* Button-like div */}
        <div className="bg-[#F8F9FA] py-2 px-4 border border-[#E6E9EE] rounded-full text-center">
          sss
        </div>
      </div>
    </div>
  );
}