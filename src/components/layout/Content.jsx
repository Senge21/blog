// components/Content.jsx
import { Slide } from "@/components/ui/Slide.jsx";
import { TrendingPost } from "@/components/ui/TrendingPost";
import { MainContent } from "../ui/MainContent";

export const Content = ({ articles }) => {
  return (
    <div className="w-full h-full flex-col justify-start items-center gap-[100px] flex">
      <Slide articles={articles} />
      <MainContent articles={articles} />
      <TrendingPost articles={articles} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://dev.to/api/articles?username=gereltuyamz");
  const articles = await res.json();
  console.log(articles);
  return {
    props: {
      articles: articles,
    },
  };
}
