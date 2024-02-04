import { Slide } from "@/components/ui/Slide.jsx";
import { TrendingPost } from "@/components/ui/TrendingPost";
import { useEffect, useState } from "react";
import { MainContent } from "../ui/MainContent";

export const Content = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArticlesArray] = useState(articles);
  const [topArticlesData, setTopArticlesData] = useState(articles);
  const [risingArticlesData, setRisingArticlesData] = useState(articles);

  const fetchData = async () => {
    try {
      const articlesRes = await fetch("https://dev.to/api/articles?per_page=9");
      const topArticlesRes = await fetch(
        "https://dev.to/api/articles?per_page=4&top=1"
      );
      const risingArticlesRes = await fetch(
        "https://dev.to/api/articles?per_page=4&state=rising"
      );
      const filteredArticlesRes = await fetch(
        "https://dev.to/api/articles?per_page=4&state=rising"
      );

      const articlesData = await articlesRes.json();
      const topArticlesData = await topArticlesRes.json();
      const risingArticlesData = await risingArticlesRes.json();
      const filteredArray = await setArticles(articlesData);

      setFilteredArray(articlesData);
      setRisingArticlesData(risingArticlesData);
      setTopArticlesData(topArticlesData);
      setFilteredArticlesArray(filteredArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex-col justify-start items-center gap-[100px] flex ">
      <Slide articles={topArticlesData} />
      <MainContent articles={filteredArray} />
      <TrendingPost articles={risingArticlesData} />
    </div>
  );
};
