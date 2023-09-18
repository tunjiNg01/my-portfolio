import { BoxUtility } from ".";
import Link from "next/link";

export default function Footer() {
  return (
    <BoxUtility>
      <div className="block justify-between sm:flex ">
        <div className="flex space-x-4 sm:space-x-12">
          <div className="font-raleway text-sm sm:text-base">
            <p className="font-medium">Tunji Hammed</p>
            <p>Full-stack software engineer</p>
          </div>

          <div className="font-raleway text-sm sm:text-base">
            <p className="font-medium">Reach out to me </p>
            <p>hello@vanholtz.co</p>
          </div>
        </div>

        <div className=" mt-5 font-raleway text-sm underline sm:mt-0 sm:text-base">
          <Link href="#" target="_blank">
            <p>Youtube</p>
          </Link>
          <Link href="#" target="_blank">
            <p> LinkedIn</p>
          </Link>
          <Link href="#" target="_blank">
            <p> X (formerly Twitter)</p>
          </Link>
        </div>
      </div>
    </BoxUtility>
  );
}
