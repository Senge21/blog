export const Footer = () => {
  return (
    <div>
      <div className="w-[1440px] h-[560px] px-20 py-24 bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[368px] px-8 flex-col justify-center items-center gap-12 flex">
          <div className="self-stretch h-[100px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch h-7 flex-col justify-center items-center flex">
              <div className="px-5 py-1 bg-gray-200 rounded-xl justify-center items-center inline-flex">
                <div className="text-gray-600 text-sm font-medium font-['Inter'] leading-tight">
                  Get in touch
                </div>
              </div>
            </div>
            <div className="self-stretch h-14 flex-col justify-center items-center flex">
              <div className="self-stretch text-center text-gray-600 text-xl font-normal font-['Inter'] leading-7">
                What’s next? Feel free to reach out to me if you're looking for
                a developer, have a query, or simply want to connect.
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-center gap-4 flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative" />
              <div className="text-center text-gray-900 text-4xl font-semibold font-['Inter'] leading-10">
                reachsagarshah@gmail.com
              </div>
              <div className="p-1.5 rounded-lg justify-center items-center flex">
                <div className="w-8 h-8 relative" />
              </div>
            </div>
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-8 h-8 relative" />
              <div className="text-center text-gray-900 text-4xl font-semibold font-['Inter'] leading-10">
                +91 8980500565
              </div>
              <div className="p-1.5 rounded-lg justify-center items-center flex">
                <div className="w-8 h-8 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-xl justify-center items-center gap-16 inline-flex">
            <div className="flex-col justify-center items-center gap-2 inline-flex">
              <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
                You may also find me on these platforms!
              </div>
              <div className="self-stretch h-9 flex-col justify-center items-center gap-4 flex">
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="p-1.5 rounded-lg justify-center items-center flex">
                    <div className="w-6 h-6 relative" />
                  </div>
                  <div className="p-1.5 rounded-lg justify-center items-center flex">
                    <div className="w-6 h-6 relative" />
                  </div>
                  <div className="p-1.5 rounded-lg justify-center items-center flex">
                    <div className="w-6 h-6 relative" />
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
