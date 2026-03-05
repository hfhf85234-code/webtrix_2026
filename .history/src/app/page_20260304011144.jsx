import Image from "next/image";
import Head from "./components/head/page";
import Subscriptions from "./components/subscriptions";

export default function Home() {
  return (
    <main>
      <Head />
      <Subscriptions />
    </main>
   
  );
}
