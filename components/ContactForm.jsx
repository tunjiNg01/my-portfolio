import { CgArrowLongRight } from "react-icons/cg";

export default function ContactForm() {
  return (
    <form action="">
      <div className="block space-y-8 sm:flex sm:space-x-4">
        <div className=" w-full ">
          <label className="font-raleway font-medium text-slate-600 ">
            Your Name:
          </label>
          <br></br>
          <input
            type="text"
            name="first"
            className="w-full border border-transparent border-b-slate-800 bg-slate-50 px-0 py-4 font-raleway  focus:outline-none "
          />
        </div>

        <div className=" w-full ">
          <label className="font-raleway font-medium text-slate-600">
            Email Address:
          </label>
          <br></br>
          <input
            type="text"
            name="first"
            className="w-full border border-transparent border-b-slate-800 bg-slate-50 px-0 py-4 font-raleway  focus:outline-none "
          />
        </div>
      </div>

      <div className=" w-full ">
        <label className="font-raleway font-medium text-slate-600">
          Your message:
        </label>
        <br></br>
        <textarea
          type="text"
          name="first"
          className="w-full border border-transparent border-b-slate-800 bg-slate-50 px-0 py-2 font-raleway  focus:outline-none "
        />
      </div>

      <button
        type="button"
        className="mt-12 flex items-center space-x-12 bg-white px-6 py-4 font-raleway font-medium text-slate-800"
      >
        <h2>Send message</h2>
        <CgArrowLongRight />
      </button>
    </form>
  );
}
