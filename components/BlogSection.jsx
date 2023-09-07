import { BoxUtility } from ".";

export default function Blog() {
  return (
    <BoxUtility>
      <div>
        <h1 className="font-raleway text-4xl font-extrabold text-slate-800 ">
          Tips and Tricks
        </h1>
        <p className="mt-2 max-w-full font-raleway font-normal text-slate-700 sm:max-w-[30%] ">
          Been a fullstack engineer I can in the following skillset
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 ">
        <div className="bg-white p-8">
          <p className="font-raleway ">June 13, 2022</p>
          <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
            How To Set Up a GraphQL API Server in Node.js
          </h2>
          <p className="mt-3 font-raleway text-sm font-medium ">
            Mobile Application
          </p>
        </div>
        <div className="bg-white p-8">
          <p className="font-raleway ">June 13, 2022</p>
          <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
            How To Set Up a GraphQL API Server in Node.js
          </h2>
          <p className="mt-3 font-raleway text-sm font-medium ">
            Mobile Application
          </p>
        </div>
        <div className="bg-white p-8">
          <p className="font-raleway ">June 13, 2022</p>
          <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
            How To Set Up a GraphQL API Server in Node.js
          </h2>
          <p className="mt-3 font-raleway text-sm font-medium ">
            Mobile Application
          </p>
        </div>
      </div>
    </BoxUtility>
  );
}
