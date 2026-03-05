import Image from "next/image";
import Head from "./components/head/page";
import Subscriptions from "./components/subscriptions/page";

export default function Home() {
  return (
    <main>
      <Head />
      <div className="w-screen h-screen"></div>
      <Subscriptions />
    </main>
   
  );
}
