import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

export const Slide = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?per_page=4&top=1")
      .then((res) => setData(res.data));
  }, []);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-[1216px] h-[651px] relative hidden md:flex">
      {data.map((article, index) => (
        <div
          key={index}
          className={`w-[1216px] h-[651px] relative ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          <Image
            src={article.social_image}
            width={1216}
            height={600}
            className="w-[1216px] h-[600px] left-0 top-0 absolute bg-gray-900 bg-opacity-40 rounded-xl"
          />

          <div className="w-[598px] h-[252px] p-10 left-[11px] top-[335px] absolute bg-white rounded-xl shadow border border-gray-200 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[124px] flex-col justify-start items-start gap-4 flex">
              <div className="px-2.5 py-1 bg-indigo-500 rounded-md justify-center items-center gap-1 inline-flex">
                <div className="text-white text-sm font-medium font-['Work Sans'] leading-tight">
                  {article.type_of}
                </div>
              </div>
              <div className="self-stretch text-gray-900 text-4xl font-semibold font-['Work Sans'] leading-10">
                {article.title}
              </div>
            </div>
            <div className="justify-start items-center gap-5 inline-flex">
              <div className="text-neutral-400 text-base font-normal font-['Work Sans'] leading-normal">
                {article.readable_publish_date}
              </div>
            </div>
          </div>
        </div>
      ))}
      <BsChevronCompactLeft
        size={40}
        className="w-10 h-10 left-[1127px] top-[611px] absolute rounded-md  border border-zinc-500 justify-center items-center inline-flex"
        onClick={goToPrevSlide}
      />
      <BsChevronCompactRight
        className="w-10 h-10 top-[611px] absolute left-[1180px] rounded-md border border-zinc-500"
        size={40}
        onClick={goToNextSlide}
      />
    </div>
  );
};
