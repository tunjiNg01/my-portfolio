"use client";
import * as React from "react";
import { useRef } from "react";
import { BoxUtility } from ".";
import Glider from "react-glider";
import "glider-js/glider.min.css";

export default function Blog() {
  // const gliderRef = React.useRef < GliderMethods > null;
  // const scrollLeftRef = useRef();
  // const scrollRightRef = useRef();
  const leftArrowEl = React.useRef(null);
  const rightArrowEl = React.useRef(null);
  const [isReady, setIsReady] = React.useState(false);

  const leftArrowCallbackRef = React.useCallback((element) => {
    leftArrowEl.current = element;
    setIsReady(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, []);

  const rightArrowCallbackRef = React.useCallback((element) => {
    rightArrowEl.current = element;
    setIsReady(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, []);

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
      <div className="container mt-8">
        {isReady && (
          <Glider
            className="glider-container space-x-4"
            draggable
            slidesToShow={3}
            slidesToScroll={1}
            scrollLock
            hasArrows
            responsive={[
              {
                breakpoint: 864,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 200,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
            arrows={{
              prev: leftArrowEl.current,
              next: rightArrowEl.current,
            }}
          >
            <div className="slide bg-white p-4 sm:p-8">
              <p className="font-raleway ">June 13, 2022</p>
              <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
                How To Set Up a GraphQL API Server in Node.js
              </h2>
              <p className="mt-3 font-raleway text-sm font-medium ">
                Mobile Application
              </p>
            </div>
            <div className="slide ml-4 bg-white p-4 sm:p-8 ">
              <p className="font-raleway ">June 13, 2022</p>
              <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
                How To Set Up a GraphQL API Server in Node.js
              </h2>
              <p className="mt-3 font-raleway text-sm font-medium ">
                Mobile Application
              </p>
            </div>
            <div className="slide ml-4 bg-white p-4 sm:p-8">
              <p className="font-raleway ">June 13, 2022</p>
              <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
                How To Set Up a GraphQL API Server in Node.js
              </h2>
              <p className="mt-3 font-raleway text-sm font-medium ">
                Mobile Application
              </p>
            </div>
            <div className="slide ml-4 bg-white p-4 sm:p-8">
              <p className="font-raleway ">June 13, 2022</p>
              <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
                How To Set Up a GraphQL API Server in Node.js
              </h2>
              <p className="mt-3 font-raleway text-sm font-medium ">
                Mobile Application
              </p>
            </div>
            <div className="slide  ml-4 flex items-center justify-center border p-4 align-middle sm:p-8">
              <p className="mt-3 font-raleway text-sm font-bold underline  ">
                View All Blog
              </p>
            </div>
          </Glider>
        )}
        <div className="mt-8 space-x-4">
          <button
            ref={leftArrowCallbackRef}
            type="button"
            aria-label="Previous"
            className=" bg-slate-900 px-4 py-2 font-raleway text-sm font-medium text-slate-50 "
          >
            Previous
          </button>
          <button
            ref={rightArrowCallbackRef}
            type="button"
            aria-label="Next"
            className=" bg-slate-900 px-4 py-2 font-raleway text-sm font-medium text-slate-50 "
          >
            Next
          </button>
        </div>
      </div>

      {/* <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 ">
        <div className="bg-white p-4 sm:p-8">
          <p className="font-raleway ">June 13, 2022</p>
          <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
            How To Set Up a GraphQL API Server in Node.js
          </h2>
          <p className="mt-3 font-raleway text-sm font-medium ">
            Mobile Application
          </p>
        </div>
        <div className="bg-white p-4 sm:p-8">
          <p className="font-raleway ">June 13, 2022</p>
          <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
            How To Set Up a GraphQL API Server in Node.js
          </h2>
          <p className="mt-3 font-raleway text-sm font-medium ">
            Mobile Application
          </p>
        </div>
        <div className="bg-white p-4 sm:p-8">
          <p className="font-raleway ">June 13, 2022</p>
          <h2 className="mt-4 max-w-[90%] font-raleway font-bold">
            How To Set Up a GraphQL API Server in Node.js
          </h2>
          <p className="mt-3 font-raleway text-sm font-medium ">
            Mobile Application
          </p>
        </div>
      </div> */}
    </BoxUtility>
  );
}
