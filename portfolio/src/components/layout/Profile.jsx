export const Profile = () => {
  return (
    <div className="w-[1280px] h-[360px] px-8 justify-start items-start gap-12 inline-flex">
      <div className="self-stretch flex-col justify-center items-start gap-12 inline-flex">
        <div className="self-stretch h-[152px] flex-col justify-center items-start gap-2 flex">
          <div className="text-gray-900 text-6xl font-bold font-['Inter'] leading-[72px]">
            Hi, I’m Sagar 👋
          </div>
          <div className="w-[768px] text-gray-600 text-base font-normal font-['Inter'] leading-normal">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
        </div>
        <div className="w-[768px] h-14 flex-col justify-center items-start gap-2 inline-flex">
          <div className="self-stretch justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 relative" />
            <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Ahmedabad, India
            </div>
          </div>
          <div className="justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 flex-col justify-center items-center inline-flex">
              <div className="w-2 h-2 relative bg-emerald-500 rounded-[20px]" />
            </div>
            <div className="text-gray-600 text-base font-normal font-['Inter'] leading-normal">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="w-[768px] h-9 flex-col justify-start items-start gap-4 inline-flex">
          <div className="justify-start items-center gap-1 inline-flex">
            <div className="p-1.5 rounded-lg justify-center items-center flex">
              <img src="" alt="github" />
            </div>
            <div className="p-1.5 rounded-lg justify-center items-center flex">
              <img src="" alt="figma" />
            </div>
            <div className="p-1.5 rounded-lg justify-center items-center flex">
              <img src="" alt="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] h-[360px] flex-col justify-center items-end inline-flex">
        <div className="w-80 h-[360px] relative">
          <div className="w-[280px] h-80 left-[40px] top-[40px] absolute bg-gray-200 border-8 border-white" />
          <img
            className="w-[280px] h-80 left-0 top-0 absolute border-8 border-white"
            src="https://s3-alpha-sig.figma.com/img/f85c/f455/11cd2ba02a83d564218d6500a134a91d?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6ilx-NOb63~KzVYyZfxx4qzRN~gm9QHjip~sIpK9MTVSZsX~huwLpZqpJyqW7GDTT8lB8QtBCj5-2PtU-Ygp48aaoTUuruT2gkBXQL~lHchh7pKMdkHIJrb2oMYnvdAYQNxOMjjUIF8HDscGx5Nt7iw4F0WHx0HmiLM~STQEdaUIw0hp1E28oW5KSCJTY9dpgSECxgzNyTUNroqNwgsE5X4gYOS6SIFW~iIc98LskU-vU9DVPo3dEzu2N-2Fz4UiQZedr6UAGezp4AEFbGvN6RWj7EetJyu7prBfAxtS4Q0dAi36VtSyse6uAVnFGuXHQ9Y83-~6UcTO1YSVEzzGQ__"
          />
        </div>
      </div>
    </div>
  );
};
