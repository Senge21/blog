export const About = () => {
  return (
    <div className="w-[1440px ] bg-[#f9fafb] h-[962px] justify-between py-24 px-20">
      <div className="w-[1280px] h-[770px] px-[32px] gap-4 flex flex-col">
        <div className="flex justify-center mb-[48px]">
          <button className="py-[4px] px-[20px] rounded-[12px] bg-[#e5e7eb]  ">
            About me
          </button>
        </div>
        <div className="w-[1216px] h-[694px] flex gap-12 items-center justify-start ">
          <div className="w-[584px] h-[694px] flex-col justify-start items-start">
            <div className="relative h-[520px] w-[440px] ">
              <div className="w-[400px] h-[480px] absolute top-[40px] bg-gray-200 border-8 border-gray-50"></div>
              <img
                className="w-[400px] h-[480px] absolute top-0 left-[40px] border-8 border-gray-50 "
                src="https://s3-alpha-sig.figma.com/img/8781/bda6/7a25952db5724f48492cd455a6e81952?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iD776LocC9a2IKsEEOaYst01NN5Lo3uvEsPe-g-xHHCoZ3YH2nTx6vngudPrjvMx9V8fPVT4IK3s3nj1Myeef6xBPc9vfd3E4iP1c2fe7QC-nBR2k~YbfdlJNFiyDEEFAXF6TtkbM5EehR2t8RehwXWG5DL-QW2AgEX4WhHCUHTCwg8YVAk0fK5PiQ2zyyV9zL0bfPyOdcr7ihc1WFlz7Tdf-PKy6ukX3mjD0Vo2wuGgontjFSSetothS6hfcwSOXmbzezxEO4NmD29qL1pCYvp2iVoFU~lu0h6JaoLlT3hc0LVsjWRZdSiwGHT0XXpjzdYHAbrDM70dMS1aH~n-hw__"
                alt=""
              />
            </div>
          </div>
          <div className="flex w-[584px] h-[694px] items-start  gap-6 flex-col *:group-[text-[16px] text-sm-[24px] text-gray-600 font-[400]]:">
            <div>
              <p className=" text-[#111827] font-semibold text-3xl text-center">
                Curious about me? Here you have it:
              </p>
            </div>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col">
                <p>* B.E. in Computer Engineering</p>
                <p> * Full time freelancer</p>
              </div>
              <div className="flex flex-col">
                <p> * Avid learner</p>
                <p>* Aspiring indie hacker</p>
              </div>
            </div>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
