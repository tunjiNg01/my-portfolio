import { BoxUtility, ContactForm } from ".";

export default function Contact() {
  return (
    <BoxUtility>
      <div className=" grid grid-cols-1 sm:grid-cols-3 sm:space-x-24">
        <div className="">
          <h1 className="fon-raleway text-5xl font-extrabold sm:text-7xl">
            Let&apos;s <br /> work together!
          </h1>
          <p className="mt-8 font-raleway">
            Got a question or proposal, or just want to say hello? Go ahead.
          </p>
        </div>
        <div className="sm: col-span-2 mt-6 space-y-8 sm:mt-0 ">
          <ContactForm />
        </div>
      </div>
    </BoxUtility>
  );
}
