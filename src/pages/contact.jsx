import { Navbar, Footer } from "@/components/layout/index.js";

export default function Home() {
  return (
    <div className="flex flex-col justify-center ">
      <Navbar />
      <div className="w-full h-full justify-center flex">
        <div className="w-[895px] h-[895px] flex-col justify-start items-center inline-flex mx-auto">
          <div className="w-[769px] h-[389px] px-2.5 pt-3.5 flex-col justify-start items-center gap-5 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="text-black text-4xl font-semibold  leading-10">
                Contact Us
              </div>
              <div className="w-[624px] h-[103px] text-zinc-500 text-base font-normal font-['Plus Jakarta Sans'] leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam
              </div>
            </div>
            <div className="py-2.5 justify-start items-center gap-[50px] inline-flex">
              <div className="w-[294px] h-[133px] p-4 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-2xl font-semibold  leading-10">
                  Address
                </div>
                <div className="w-[260px] text-zinc-500 text-lg font-normal  leading-relaxed">
                  1328 Oak Ridge Drive, Saint Louis, Missouri
                </div>
              </div>
              <div className="w-[294px] h-[133px] p-4 rounded-xl border border-gray-200 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-black text-2xl font-semibold  leading-10">
                  Contact
                </div>
                <div className="w-40 text-zinc-500 text-lg font-normal leading-relaxed">
                  313-332-8662
                  <br />
                  info@email.com
                </div>
              </div>
            </div>
          </div>
          <div className="w-[643px] h-[440px] pl-[35px] pr-[130px] pt-[29px] pb-[26px] bg-neutral-100 rounded-[10px] justify-start items-center inline-flex">
            <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-black text-lg font-semibold  leading-relaxed">
                Leave a Message
              </div>
              <div className="w-[478px] pb-[18px] justify-center items-center inline-flex">
                <div className="w-[478px] h-[317px] relative flex-col justify-start items-start flex">
                  <div className="w-[589px] h-[39px] relative">
                    <div className="w-[225px] h-[38px] pl-5 pr-3.5 py-3.5 left-0 top-0 absolute bg-white rounded-[5px] border border-zinc-200 justify-start items-center gap-3 inline-flex">
                      <div className="w-6 h-6 relative" />
                    </div>
                    <div className="left-[18px] top-[5px] absolute text-neutral-400 text-base font-normal  leading-relaxed">
                      <input
                        type="search "
                        name="search"
                        id="search "
                        placeholder="Your Name"
                        className="border-none font-[400] bg-[#f4f4f5] size-[14px] leading-[20px] text-align text-[#a1a1aa] w-full h-secreen "
                      />
                    </div>
                    <div className="w-[225px] h-[38px] pl-5 pr-3.5 py-3.5 left-[253px] top-[1px] absolute bg-white rounded-[5px] border border-zinc-200" />
                    <div className="left-[272px] top-[7px] absolute text-neutral-400 text-base font-normal  leading-relaxed">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        multiple
                      />
                    </div>
                  </div>
                  <div className="w-[478px] h-[35px] pl-5 pr-3.5 py-3.5 bg-white rounded-[5px] border border-zinc-200 justify-start items-center gap-3 inline-flex">
                    <div className=" basis-0 text-neutral-400 text-base font-normal font-['Inter'] leading-normal">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        multiple
                        placeholder="Subject"
                      />
                    </div>
                    <div className="w-6 h-6 relative" />
                  </div>
                  <div className="w-[478px] h-[134px] pl-5 pr-3.5 py-3.5 bg-white rounded-[5px] border border-zinc-200 justify-start items-start gap-3 inline-flex">
                    <div className=" basis-0 text-neutral-400 text-base font-normal font-['Inter'] leading-normal">
                      <input
                        type="text"
                        id="Write a massege"
                        name="Write a massege"
                        multiple
                        placeholder="Write a massege"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-2.5 bg-indigo-500 rounded-md flex-col justify-center items-center inline-flex">
                    <button className="text-center text-white text-sm font-medium  leading-tight">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
