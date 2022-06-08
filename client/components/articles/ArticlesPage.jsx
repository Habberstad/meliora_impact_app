import { useContext, useState } from "react";
import "../../styles/articlesPage.css";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { useLoading } from "../../useLoading";
import { ArticlesContent } from "./ArticlesContent";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import { GlobalHeader } from "../headers/GlobalHeader";
import { HEADER } from "../headers/HEADER";
import headerImg from "../../media/headers/articles_header.svg";
import { ArticleSection } from "./ArticleSection";
import { CategoryFilter } from "../shared-components/CategoryFilter";

const ArticlesPage = () => {
  const [category, setCategory] = useState("");
  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(async () => await getArticles());

  const filterList = () => {
    if (category.length === 0) {
      return data;
    } else {
      return data.filter((article) => {
        return article.category === category;
      });
    }
  };
  if (loading) return isLoading();

  if (error) return <Error error={error} />;

  function handleNavigationAndFiltering(event) {
    setCategory(event);
  }

  return (
    <div className="articles-wrapper">
      <GlobalHeader
        title={HEADER[1].title}
        subtitle={HEADER[1].subtitle}
        desc={HEADER[1].desc}
        image={headerImg}
      />
      <CategoryFilter
        onClick={handleNavigationAndFiltering}
        category={category}
        style={{ marginBottom: "50px" }}
      />

      <ArticlesContent filterList={filterList} />
      <div className="bottom-header">Articles You Should Check Out</div>
      <ArticleSection />
    </div>
  );
};

export default ArticlesPage;
