import { BoxUtility } from ".";
import Image from "next/image";
import productImg from "../public/workcard.png";
import Link from "next/link";

export default function SelectedWorks() {
  return (
    <BoxUtility>
      <div class="grid gap-3 sm:grid-cols-3">
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
        <Link href="#">
          <div class=" bg-white">
            <Image src={productImg} alt="logo" className=" " />
            <h2 className="p-4 font-raleway font-bold">Olix company</h2>
          </div>
        </Link>
      </div>
    </BoxUtility>
  );
}
