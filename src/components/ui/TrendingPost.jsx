import { TrendingPostLoop } from "./TrendingPostLoop";

export const TrendingPost = () => {
  return (
    <div className="mx-auto max-w-[1231px] h-[378px]  justify-start items-start gap-[30px] md:flex hidden">
      <div className="justify-start items-start gap-8 inline-flex flex-col">
        <div className="w-[184px] justify-start text-gray-900 text-2xl font-bold leading-7">
          Tranding Post
        </div>
        <TrendingPostLoop />
      </div>
      <div className="justify-start items-start gap-5 inline-flex"></div>
    </div>
  );
};
