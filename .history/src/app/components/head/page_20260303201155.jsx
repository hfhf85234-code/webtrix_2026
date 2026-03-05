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
    src="head/screen1.png"
    />
</div>
  );
}