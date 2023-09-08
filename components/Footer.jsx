import { BoxUtility } from ".";
import Link from "next/link";

export default function Footer() {
  return (
    <BoxUtility>
      <div className="flex justify-between ">
        <div className="flex space-x-12">
          <div className="font-raleway text-sm sm:text-base">
            <p className="font-medium">Tunji Hammed</p>
            <p>Full-stack software engineer</p>
          </div>

          <div className="font-raleway text-sm sm:text-base">
            <p className="font-medium">Reach out to me </p>
            <p>hello@vanholtz.co</p>
          </div>
        </div>

        <div className=" font-raleway text-sm underline sm:text-base">
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
