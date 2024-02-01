import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/layout/footerLogo/Logo.svg";
import Facebook from "@/components/layout/footerLogo/facebook.svg"
import Twitter from "@/components/layout/footerLogo/Twitter.png"
import Instagram from "@/components/layout/footerLogo/Instagram.png"
import Linkedin from "@/components/layout/footerLogo/Linkedin.png"

export const Footer = () => {
  return (
    <div class="w-full  h-[495px]  pt-16 bg-neutral-100 border-t border-gray-200 flex-col justify-center items-center gap-[25px] inline-flex">
      <div class="w-[1215px] px-auto justify-start items-starts gap-5 inline-flex">
        <div class="w-[289px] flex-col justify-start items-start gap-6 inline-flex">
          <div class="flex-col justify-start items-start gap-3 flex">
            <div class="text-gray-900 text-lg font-semibold  leading-7">
              About
            </div>
            <div class="w-[280px] text-zinc-500 text-base font-normal  leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </div>
          </div>
          <div class="flex-col justify-start items-start gap-1 flex">
            <div>
              <span className="text-gray-900 text-base font-normal leading-normal">
                Email :{" "}
              </span>
              <span className="text-zinc-700 text-base font-normal  leading-normal">
                info@jstemplate.net
              </span>
            </div>
            <div>
              <span className="text-gray-900 text-base font-normal  leading-normal">
                Phone :{" "}
              </span>
              <span className="text-zinc-700 text-base font-normal  leading-normal">
                880 123 456 789
              </span>
            </div>
          </div>
        </div>
        <div class="h-[88px] justify-center items-start gap-20 flex">
          <div class="flex-col justify-start items-start gap-6 inline-flex">
            <div class="flex-col justify-start items-start gap-2 flex">
              <Link
                href="Home"
                class="text-zinc-700 text-base font-normal  leading-normal"
              >
                Home
              </Link>
              <Link
                href="Blog"
                class="text-zinc-700 text-base font-normal  leading-normal"
              >
                Blog
              </Link>
              <Link
                href="Contact"
                class="text-zinc-700 text-base font-normal  leading-normal"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div class="w-36 relative">
          <Image src={Facebook} class="w-4 h-4  absolute top-0 flex-col justify-start items-start inline-flex"></Image>
          <Image src={Twitter} class="w-4 h-4 left-[42.67px] top-0 absolute flex-col justify-start items-start inline-flex"></Image>
          <Image src={Instagram} class="w-4 h-4 left-[85.33px] top-0 absolute flex-col justify-start items-start inline-flex" />
          <Image src={Linkedin} className="w-4 h-4 right-0 top-0 absolute" />

          <div class="w-4 h-4 left-[128px] top-0 absolute flex-col justify-start items-start inline-flex"></div>
        </div>
      </div>
      <div class="w-[1216px] h-[95px] py-8 border-t border-zinc-200 justify-start items-center gap-16 inline-flex">
        <div class="justify-start items-center gap-2.5 flex">
          <div class="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="flex ">
              <Image src={Logo} />
              <p className="text-gray-900 text-xl font-normal font-['Plus Jakarta Sans'] leading-7">
                Meta
              </p>
              <p className="text-gray-900 text-xl font-extrabold font-['Plus Jakarta Sans'] leading-7">
                Blog
              </p>
            </div>
            <p class="text-zinc-700 text-base font-normal  leading-normal">
              © All Rights Reserved.
            </p>
          </div>
        </div>
        <div class="grow shrink basis-0 h-6 justify-end items-center gap-4 flex">
          <p class="text-zinc-700 text-base font-normal  leading-normal">
            Terms of Use
          </p>
          <div class="w-6 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
          <p class="text-zinc-700 text-base font-normal  leading-normal">
            Privacy Policy
          </p>
          <div class="w-6 h-[0px] origin-top-left rotate-90 border border-gray-200"></div>
          <p class="text-zinc-700 text-base font-normal  leading-normal">
            Cookie Policy
          </p>
        </div>
      </div>
    </div>
  );
};
