import { Slide } from "@/components/layout/Slide.jsx";
import { TrendingPost } from ".";

export const Content = () => {
  return (
    <div className="w-full h-full flex-col justify-start items-center gap-[100px] flex ">
      <Slide />
      <TrendingPost />
    </div>
  );
};
