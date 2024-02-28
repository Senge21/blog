import Image from "next/image";
import Rectangle from "@/components/layout/SlideImg/Rectangle.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const TrendingPostLoop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?per_page=4&state=rising")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="justify-start items-start gap-8 inline-flex">
      {data.map((article, index) => (
        <div
          key={index}
          className="w-[293px] h-80 rounded-xl flex-col justify-start items-start inline-flex"
        >
          <div className="relative w-[289px] h-80 bg-gray-900 bg-opacity-50 rounded-xl">
            <Image
              width={289}
              height={80}
              src={article.social_image}
              className="rounded-md"
            />
            <div className="w-[230px] absolute z-10 bottom-6 left-7 h-[120px] flex-col justify-start items-start gap-4 flex">
              <div className="px-2.5 py-1 bg-indigo-500 rounded-md justify-center items-center gap-1 inline-flex">
                <div className="text-white text-xs font-medium  leading-tight">
                  {article.type_of}
                </div>
              </div>
              <p className="w-[230px] h-[76px] text-white text-lg font-semibold  leading-7">
                {article.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
