import Image from "next/image";
// Required Core Stylesheet
import {
  HeroSection,
  Expertise,
  Work,
  Blog,
  Contact,
  Footer,
} from "@/components/index";

export default function Home() {
  return (
    <div className="">
      <div className="bg-slate-50">
        <HeroSection />
      </div>
      <Expertise />
      <div className="bg-slate-50">
        <Work />
        <Blog />
        <Contact />
      </div>
    </div>
  );
}
