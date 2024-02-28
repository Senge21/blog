import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

export const MainContent = ({ articles }) => {
  return (
    <div className="hidden w-full h-full md:flex justify-center">
      <div className="max-w-[1216px] h-[1585px] flex-col justify-center items-start inline-flex flex-wrap">
        <div className="self-stretch flex-col justify-start items-center gap-20 inline-flex">
          <div className="flex-col justify-start items-center gap-8 flex">
            <div className="self-stretch h-[85px] flex-col justify-start items-start gap-8 flex">
              <div className="w-[184px] text-gray-900 text-2xl font-bold leading-7">
                All Blog Post
              </div>
              <div className="w-[1216px] justify-start  gap-[30px] inline-flex">
                <div className="justify-start gap-5 flex text-zinc-600 leading-[25px] text-xs font-bold">
                  <div className="text-orange-300 font-bold leading-[25px]">
                    All
                  </div>
                  <div>Design</div>
                  <div>Travel</div>
                  <div>Fashion</div>
                  <div>Technology</div>
                  <div>Branding</div>
                </div>
                <button className="grow shrink basis-0 text-right text-zinc-600 text-xs font-bold leading-[25px]">
                  View All
                </button>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-start gap-5 inline-flex">
                {articles.map((article, index) => (
                  <div
                    key={index}
                    className="w-[392px] p-4 bg-white rounded-xl border border-gray-200 flex-col justify-center items-center gap-4 inline-flex"
                  >
                    <Image src={article.social_image} />
                    <div className="self-stretch h-[188px] p-2 flex-col justify-start items-start gap-5 flex">
                      <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
                        <div className="px-2.5 py-1 bg-indigo-500 bg-opacity-5 rounded-md justify-center items-center gap-1 inline-flex">
                          <div className="text-indigo-500 text-sm font-medium leading-tight">
                            {article.type}
                          </div>
                        </div>
                        <div className="self-stretch text-gray-900 text-2xl font-semibold leading-7">
                          {article.title}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-5 inline-flex">
                        <div className="text-neutral-400 text-base font-normal leading-normal">
                          {article.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://dev.to/api/articles?username=gereltuyamz");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
}
