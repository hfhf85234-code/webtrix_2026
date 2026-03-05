import Image from "next/image";

export default function Head() {
  return (
    <div
  className="relative h-screen w-full"
  style={{
    backgroundImage: "url('/head/screen.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
    <img
    className="w-screen"
    src="head/screen1.png"
    />
    <div className="w-full h-full">


<div className="flex justify-center  ">
    <div className="space-y-[20px]">
        <img className="" src="head/logo.svg" alt="" />
    </div>



</div>

    </div>
</div>
  );
}