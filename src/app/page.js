import Image from "next/image";
import { HeroSection, Expertise } from "@/components/index";

export default function Home() {
  return (
    <div className="">
      <div className="bg-slate-50">
        <HeroSection />
      </div>
      <Expertise />
    </div>
  );
}
