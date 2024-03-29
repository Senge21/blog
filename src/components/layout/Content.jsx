// components/Content.jsx
import { Slide } from "@/components/ui/Slide.jsx";
import { TrendingPost } from "@/components/ui/TrendingPost";
import { MainContent } from "../ui/MainContent";

export const Content = () => {
  return (
    <div className="w-full h-full flex-col justify-start items-center gap-[100px] flex">
      <Slide />
      <TrendingPost />
      <MainContent />
    </div>
  );
};

// export async function getServerSideProps() {
//   try {
//     const res = await fetch("https://dev.to/api/articles?username=gereltuyamz");
//     const articles = await res.json();

//     console.log("API Response:", articles);

//     return {
//       props: {
//         articles,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//     return {
//       props: {
//         articles: [], // Provide a default value or handle the error as needed
//       },
//     };
//   }
// }
