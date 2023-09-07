import { BoxUtility } from ".";
import { CgArrowLongRight } from "react-icons/cg";

export default function Work() {
  return (
    <BoxUtility>
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div>
          <h1 className="max-w-full font-raleway text-4xl font-extrabold text-slate-800 sm:max-w-[50%] ">
            I build & design stuff
          </h1>

          <p className="mt-2 max-w-full font-raleway font-normal text-slate-700 sm:mt-4 sm:max-w-[80%] ">
            Open sourceprojects, web apps and experimentals and case studies
          </p>

          <button
            type="button"
            className="mt-12 flex items-center space-x-12 bg-white px-6 py-4 font-raleway font-medium text-slate-800"
          >
            <h2>See some work</h2>
            <CgArrowLongRight />
          </button>
        </div>
      </div>
    </BoxUtility>
  );
}
