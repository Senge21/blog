import { Navbar, Footer } from "@/components/layout/index.js";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full flex justify-center my-[100px]">
        <div className="w-[642px] h-52 justify-center items-center gap-10 inline-flex">
          <div className="text-black text-7xl font-normal  leading-[72px]">404</div>

          <div className="py-2 flex-col justify-end items-start gap-5 inline-flex">
            <div className="text-black text-2xl font-semibold  leading-10">
              Page Not Found
            </div>
            <div className="w-[392px] text-zinc-500 text-lg font-normal  leading-relaxed">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </div>
            <div className="px-4 py-2.5 bg-indigo-500 rounded-md justify-center items-center inline-flex">
              <button className="text-center text-white text-sm font-medium  leading-tight">
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
