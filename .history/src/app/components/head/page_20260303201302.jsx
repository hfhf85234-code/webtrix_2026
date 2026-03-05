import Image from "next/image";

export default function Head() {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: "url('/head/screen.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/head/screen1.png"
          alt="Overlay"
          width={300}       // Default width, adjust as needed
          height={300}      // Default height, adjust as needed
          className="max-w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}