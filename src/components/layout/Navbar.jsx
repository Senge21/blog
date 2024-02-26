import Image from "next/image";
import Logo from "@/components/layout/navbarImg/Logo.png";
import search from "@/components/layout/navbarImg/search.png";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export const Navbar = () => {
  return (
    <div className="w-full  h-[100px]   py-8 flex-col  items-start gap-2.5 inline-flex mx-auto">
      <div className=" max-w-[1130px] justify-start items-start gap-[118px] inline-flex mx-auto">
        <Image src={Logo} className="w-[158px] h-9 relative" />
        <div className="h-full w-[854px] hidden md:flex justify-start items-center gap-[21px] ">
          <div className="hidden w-[667px] md:flex  h-[6] gap-10 justify-center items-center  ">
            <Link href={"http://localhost:3000/"}>Home</Link>
            <Link href={"http://localhost:3000/blogListening"}>Blog</Link>
            <Link href={"http://localhost:3000/contact"}>Contact</Link>
          </div>
          <div className=" justify-start items-center gap-10 hidden md:flex">
            <div className="flex h-[36px] rounded-[5px] p-[8px] bg-[#f4f4f5] ">
              <input
                type="search "
                name="search"
                id="search "
                placeholder="Search "
                className="font-[400] bg-[#f4f4f5] size-[14px] leading-[20px] text-align text-[#a1a1aa] w-full h-secreen "
              />
              <Image src={search} className="w-4 h-4" />
            </div>
          </div>
        </div>
        <AiOutlineMenu className="md:hidden w-[32px] h-[32px]" />
      </div>
    </div>
  );
};
