import { TrendingPostLoop } from "../ui/TrendingPostLoop";

export const TrendingPost = () => {
  return (
    <div className="mx-auto w-[1231px] h-[378px] flex-col justify-start items-start gap-[30px] inline-flex">
      <div className="justify-start items-start gap-8 inline-flex flex-col">
        <div className="w-[184px] text-gray-900 text-2xl font-bold  leading-7">
          Trending
        </div>
        <TrendingPostLoop />
      </div>
      <div className="justify-start items-start gap-5 inline-flex"></div>
    </div>
  );
};
