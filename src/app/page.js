import Image from "next/image";
import { HeroSection, Expertise, Work } from "@/components/index";

export default function Home() {
  return (
    <div className="">
      <div className="bg-slate-50">
        <HeroSection />
      </div>
      <Expertise />
      <div className="bg-slate-50">
        <Work />
      </div>
    </div>
  );
}
