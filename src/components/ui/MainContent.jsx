export const MainContent = (article) => {
  return (
    <div className="w-full h-full flex justify-center">
      <div class="w-[1216px] h-[1585px] flex-col justify-center items-center inline-flex flex-wrap">
        <div class="self-stretch flex-col justify-start items-center gap-20 inline-flex">
          <div class="flex-col justify-start items-center gap-8 flex">
            <div class="self-stretch h-[85px] flex-col justify-start items-start gap-8 flex">
              <div class="w-[184px] text-gray-900 text-2xl font-bold  leading-7">
                All Blog Post
              </div>
              <div class="w-[1216px] justify-start items-center gap-[30px] inline-flex">
                <div class="justify-start items-center gap-5 flex text-zinc-600 leading-[25px] text-xs font-bold">
                  <div class="text-orange-300  font-bold  leading-[25px]">
                    All
                  </div>
                  <div>Design</div>
                  <div>Travel</div>
                  <div>Fashion</div>
                  <div>Technology</div>
                  <div>Branding</div>
                </div>
                <button class="grow shrink basis-0 text-right text-zinc-600 text-xs font-bold  leading-[25px]">
                  View All
                </button>
              </div>
            </div>
            <div class="flex-col justify-start items-start gap-5 flex">
              <div class="justify-start items-start gap-5 inline-flex">
                <div class="w-[392px] p-4 bg-white rounded-xl border border-gray-200 flex-col justify-center items-center gap-4 inline-flex">
                  <img
                    class="w-[360px] h-60 rounded-md"
                    src="https://via.placeholder.com/360x240"
                  />
                  <div class="self-stretch h-[188px] p-2 flex-col justify-start items-start gap-5 flex">
                    <div class="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
                      <div class="px-2.5 py-1 bg-indigo-500 bg-opacity-5 rounded-md justify-center items-center gap-1 inline-flex">
                        <div class="text-indigo-500 text-sm font-medium  leading-tight">
                          Technology
                        </div>
                      </div>
                      <div class="self-stretch text-gray-900 text-2xl font-semibold  leading-7">
                        The Impact of Technology on the Workplace: How
                        Technology is Changing
                      </div>
                    </div>
                    <div class="justify-start items-center gap-5 inline-flex">
                      <div class="text-neutral-400 text-base font-normal  leading-normal">
                        August 20, 2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
