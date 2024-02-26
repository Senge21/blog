import { TrendingPostLoop } from "./TrendingPostLoop";

export const TrendingPost = (article) => {
  return (
    <>
      {/* {article.map((article, index) => {
        return (
          <div
            key={index}
            className="mx-auto w-[1231px] h-[378px] flex-col justify-start items-start gap-[30px] flex"
          >
            <div className="justify-start items-start gap-8 inline-flex flex-col">
              <div className="w-[184px] text-gray-900 text-2xl font-bold leading-7">
                {article.type_of}
              </div>
              <TrendingPostLoop article={article} />
            </div>
            <div className="justify-start items-start gap-5 inline-flex"></div>
          </div>
        );
      })} */}
    </>
  );
};
