import Image from "next/image";
//import profile from "../public/portfolioImg.png";
export default function HeroSection(params) {
  return (
    <div className="mx-auto max-w-full px-4 pb-24 pt-36   sm:max-w-[85%]  sm:pt-40">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <h1 className="py-4 font-raleway text-4xl font-extrabold text-slate-800 sm:text-6xl">
            Fullstack software engineer
          </h1>
          <p className="max-w-full font-raleway font-medium text-slate-800 antialiased sm:max-w-[80%]">
            I help businesses build a performant, scalable, and robust
            application that helps them meet their client's needs and also helps
            to achieve their business objective.
          </p>

          <div className="mt-12 grid  grid-cols-2 gap-4 divide-x-[1px] divide-dashed divide-slate-600 sm:mt-24">
            <p className="max-w-full font-raleway text-xs font-medium text-slate-800 antialiased sm:max-w-[80%] sm:text-sm">
              I'm result oriented individual who has developed a mature and
              responsible approach to any task that I undertake.
            </p>
            <p className="max-w-full pl-4 font-raleway text-xs font-medium text-slate-800 antialiased sm:max-w-[90%] sm:pl-4 sm:text-sm">
              I’m highly skilled in system design, design patterns, data
              structure and algorithms, and general product engineering.
            </p>
          </div>
        </div>
        <div className="order-first sm:order-last">
          <div className="mx-auto h-96 max-w-[100%] rounded-2xl bg-profile-img bg-center sm:max-w-[55%] "></div>
          <p className="py-4  text-center font-dancingScript text-lg">
            Tunji hammed
          </p>
        </div>
      </div>
    </div>
  );
}
