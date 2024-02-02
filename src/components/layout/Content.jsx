import { Slide } from "@/components/layout/Slide.jsx";
import { TrendingPost } from "@/components/layout/TrendingPost";
import { useEffect, useState } from "react";

export const Content = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);
  const [topArticlesData, setTopArticlesData] = useState(articles);
  const [risingArticlesData, setRisingArticlesData] = useState(articles);

  const fetchData = async () => {
    try {
      const articlesRes = await fetch("https://dev.to/api/articles?per_page=9");
      const topArticlesRes = await fetch("https://dev.to/api/articles?per_page=4&top=1");
      const risingArticlesRes = await fetch("https://dev.to/api/articles?per_page=4&state=rising");

      const articlesData = await articlesRes.json();
      const topArticlesData = await topArticlesRes.json();
      const risingArticlesData = await risingArticlesRes.json();

      setArticles(articlesData);
      setFilteredArray(articlesData);
      setRisingArticlesData(risingArticlesData);
      setTopArticlesData(topArticlesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full h-full flex-col justify-start items-center gap-[100px] flex ">
      {/* Check if topArticlesData is not undefined before passing it to Slide component */}
      {topArticlesData && <Slide articles={topArticlesData} />}
      {/* Check if risingArticlesData is not undefined before passing it to TrendingPost component */}
      {risingArticlesData && <TrendingPost articles={risingArticlesData} />}
    </div>
  );
};
