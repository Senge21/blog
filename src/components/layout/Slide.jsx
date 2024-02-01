import SlideImg from "@/components/layout/SlideImg/Image.svg";
import Image from "next/image";

export const Slide = () => {
  return (
    <div class="w-[1216px] h-[651px] relative">
      <Image
        src={SlideImg}
        className="w-[1216px] h-[600px] left-0 top-0 absolute bg-gray-900 bg-opacity-40 rounded-xl"
      />
      <div class="w-[598px] h-[252px] p-10 left-[11px] top-[335px] absolute bg-white rounded-xl shadow border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
        <div class="self-stretch h-[124px] flex-col justify-start items-start gap-4 flex">
          <div class="px-2.5 py-1 bg-indigo-500 rounded-md justify-center items-center gap-1 inline-flex">
            <div class="text-white text-sm font-medium font-['Work Sans'] leading-tight">
              Technology
            </div>
          </div>
          <div class="self-stretch text-gray-900 text-4xl font-semibold font-['Work Sans'] leading-10">
            Grid system for better Design User Interface
          </div>
        </div>
        <div class="justify-start items-center gap-5 inline-flex">
          <div class="text-neutral-400 text-base font-normal font-['Work Sans'] leading-normal">
            August 20, 2022
          </div>
        </div>
      </div>
      <div class="w-10 h-10 left-[1176px] top-[611px] absolute rounded-md justify-center items-center inline-flex">
        <div class="w-10 h-10 rounded-md border border-zinc-500"></div>
      </div>
      <div class="w-10 h-10 left-[1127px] top-[611px] absolute rounded-md justify-center items-center inline-flex">
        <div class="w-10 h-10 rounded-md border border-zinc-500"></div>
      </div>
    </div>
  );
};
