import { BoxUtility } from ".";

export default function Expertise() {
  return (
    <BoxUtility>
      <div className="">
        <h1 className="font-raleway text-4xl font-extrabold text-slate-800 ">
          Expertise
        </h1>
        <p className="mt-2 max-w-full font-raleway font-normal text-slate-700 sm:max-w-[30%] ">
          Been a fullstack engineer, my skillset cover the area of product
          engineering.
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 divide-y-[1px] divide-dashed sm:grid-cols-3 sm:divide-x-[1px]  sm:divide-y-0">
        <div>
          <p className="mt-2 font-raleway font-semibold text-slate-700 ">
            Mobile Development
          </p>
          <p className="mt-2 font-raleway font-normal text-slate-700 sm:pr-8">
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </p>
          <div className="flex space-x-2 ">
            <p className="mt-2 rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Swift
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              SwiftUI
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Kotlin
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Jetpack compose
            </p>
          </div>
        </div>

        <div className="mt-5 sm:mt-0 sm:pl-8">
          <p className="mt-4 font-raleway font-semibold text-slate-700 sm:mt-2 ">
            Web Development
          </p>
          <p className="mt-2 font-raleway font-normal text-slate-700 ">
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </p>
          <div className="flex space-x-2 ">
            <p className="mt-2 rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Nextjs
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              React
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Tailwind Css
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Tailwind Css
            </p>
          </div>
        </div>

        <div className="mt-5 sm:mt-0 sm:pl-8">
          <p className="mt-4 font-raleway font-semibold text-slate-700 sm:mt-2 ">
            Backend Development
          </p>
          <p className="mt-2 font-raleway font-normal text-slate-700 ">
            Highly skilled at progressive enhancement, design systems & UI
            Engineering.
          </p>
          <div className="flex space-x-2 ">
            <p className="mt-2 rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Go
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              PHP
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              C#
            </p>
            <p className="mt-2  rounded-full bg-slate-50 px-3 py-1 font-raleway text-xs font-semibold  text-slate-800 ">
              Nodejs
            </p>
          </div>
        </div>
      </div>
    </BoxUtility>
  );
}
