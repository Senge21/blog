export const Profile = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white p-12">
      <div className="flex gap-8">
        <div className="flex flex-col gap-8">
          <p className="text-4xl font-bold text-gray-900 ">Hi, I’m Sagar 👋</p>
          <p className="text-sm font-normal text-gray-600 w-[768px]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating exceptional digital experiences that are fast, accessible,
            visually appealing, and responsive. Even though I have been creating
            web applications for over 7 years, I still love it as if it was
            something new.
          </p>
          <div className="flex items-center gap-2">
            <img
              className="w-4 h-4"
              src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
              alt=""
            />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#10b981] rounded-full"></div>
            <p>Available for new projects </p>
          </div>
          <div className="flex gap-4">
            <img
              className="w-[36px] h-[36px]"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              className="w-[36px] h-[36px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVtGKbvACvyYohtOhs9c12GvjP7y9YG5hZQ&usqp=CAU"
              alt=""
            />
            <img
              className="w-[36px] h-[36px]"
              src="https://static-00.iconduck.com/assets.00/figma-logo-icon-347x512-a63o070i.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
