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
<div className="flex gap-[10px]">
<div>
<div className="w-11 h-5 relative overflow-hidden">
  <div className="w-5 h-5 left-[0.03px] top-0 absolute bg-white/0 rounded-3xl shadow-[0px_0px_0px_2px_rgba(255,255,255,1.00)] overflow-hidden">
    <img className="w-5 h-5 left-0 top-0 absolute rounded-3xl" src="https://placehold.co/22x22" />
  </div>
  <div className="w-5 h-5 left-[12px] top-0 absolute bg-white/0 rounded-3xl shadow-[0px_0px_0px_2px_rgba(255,255,255,1.00)] overflow-hidden">
    <img className="w-5 h-5 left-0 top-0 absolute rounded-3xl" src="https://placehold.co/22x22" />
  </div>
  <div className="w-5 h-5 left-[23.96px] top-0 absolute bg-white/0 rounded-3xl shadow-[0px_0px_0px_2px_rgba(255,255,255,1.00)] overflow-hidden">
    <img className="w-5 h-5 left-0 top-0 absolute rounded-3xl" src="https://placehold.co/22x22" />
  </div>
</div>
</div>


<div>
    <h1 className="text-[#262626] text-[14px]">Join 3k+ Members</h1>
</div>


<div></div>

</div>
        </div>
      </div>
    </div>
  );
}