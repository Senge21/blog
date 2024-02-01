import Image from "next/image";
import Rectangle from "@/components/layout/SlideImg/Rectangle.png";
import { useEffect, useState } from "react";

export const TrendingPostLoop = () => {
  return (
    <>
      <div class="w-[293px] h-80 rounded-xl flex-col justify-start items-start inline-flex">
        <div class="relative w-[289px] h-80 bg-gray-900 bg-opacity-40 rounded-xl">
          <Image src={Rectangle} />
          <div class="w-[230px] absolute bottom-6 left-7 h-[120px] flex-col justify-start items-start gap-4 flex">
            {/* <div class="px-2.5 py-1 bg-indigo-500 rounded-md justify-center items-center gap-1 inline-flex">
              <div class="text-white text-xs font-medium  leading-tight">
                Technology
              </div>
            </div> */}
            {/* <p class="w-[230px] h-[76px] text-white text-lg font-semibold  leading-7">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};
