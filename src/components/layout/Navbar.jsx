import Image from "next/image";
import Logo from "@/components/layout/navbarImg/Logo.png";
import search from "@/components/layout/navbarImg/search.png";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full h-[100px]  py-8 flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-start gap-[118px] inline-flex mx-auto">
        <Image src={Logo} className="w-[158px] h-9 relative" />
        <div className="h-full w-[854px] justify-start items-center gap-[21px] flex">
          <div className="flex w-[667px] h-[6] gap-10 justify-center items-center  ">
            <Link href={"Home"}>Home</Link>
            <Link href={"Blog"}>Blog</Link>
            <Link href={"Contact"}>Contact</Link>
          </div>
          <div className="justify-start items-center gap-10 flex">
            <div className="flex h-[36px] rounded-[5px] p-[8px] bg-[#f4f4f5] ">
              <input type="search " name="search" id="search " placeholder="Search " className="font-[400] bg-[#f4f4f5] size-[14px] leading-[20px] text-align text-[#a1a1aa] w-full h-secreen " />
              <Image src={search} className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
