import { BoxUtility } from ".";
import Image from "next/image";
import productImg from "../public/workcard.png";
import Link from "next/link";
import { routes } from "@/path/index";

export default function SelectedWorks() {
  return (
    <div className="mx-auto max-w-full px-4 pb-28 pt-16 sm:max-w-[85%]  sm:pb-28  sm:pt-4 ">
      <div class="grid gap-3 sm:grid-cols-3">
        <Link href={routes.workDetails}>
          <div class=" bg-white">
            <Image src={productImg} alt="logo" className=" " />
            <h2 className="p-4 font-raleway font-bold">Olix company</h2>
          </div>
        </Link>
        <Link href="#">
          <div class=" bg-white">
            <Image src={productImg} alt="logo" className=" " />
            <h2 className="p-4 font-raleway font-bold">Olix company</h2>
          </div>
        </Link>
        <Link href="#">
          <div class=" bg-white">
            <Image src={productImg} alt="logo" className=" " />
            <h2 className="p-4 font-raleway font-bold">Olix company</h2>
          </div>
        </Link>
        <Link href="#">
          <div class=" bg-white">
            <Image src={productImg} alt="logo" className=" " />
            <h2 className="p-4 font-raleway font-bold">Olix company</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}
