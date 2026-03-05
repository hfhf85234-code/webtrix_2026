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

      {/* Logo on top */}
<div className="space-y-[20px]">
      <div className="absolute inset-0 flex justify-center items-start pt-[120px]">
        <Image
          src="/head/logo.svg"
          alt="Logo"
          width={120} // adjust size as needed
          height={120}
          className="sm:w-24 sm:h-24 w-20 h-20"
        />
      </div>
      <div className=" bg-[#F8F9FA] w-full py-[10px] p-[10px] border border-[#E6E9EE] rounded-full">sss</div>
      </div>
    </div>
  );
}