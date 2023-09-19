import { BoxUtility } from ".";
import { Contact } from ".";

export default function PageTitles({ title, description }) {
  return (
    <div className="">
      <BoxUtility>
        <div className="space-y-4">
          <h1 className="pt-12 text-center font-raleway text-3xl font-extrabold text-slate-800 sm:text-4xl">
            {title}
          </h1>
          <p className="text-center font-raleway text-base text-slate-600 ">
            {description}
          </p>
        </div>
      </BoxUtility>
    </div>
  );
}
