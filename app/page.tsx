import About from "@/components/About";
import Hero from "@/components/Hero";
import Lessons from "@/components/Lessons";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main>
        <Hero />
        <About />
        <Lessons />
        <Pricing /> 
    </main>
  );
}
