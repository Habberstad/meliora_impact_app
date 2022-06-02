import { useContext, useState } from "react";
import "../../styles/articlesPage.css";
import { ArticleApiContext } from "../../api-client/articlesApiContext";
import { useLoading } from "../../useLoading";
import { Sorter } from "./Sorter";
import { ArticlesContent } from "./ArticlesContent";
import { isLoading } from "../shared-components/Loading";
import { Error } from "../shared-components/Error";
import { GlobalHeader } from "../headers/GlobalHeader";
import { HEADER } from "../headers/HEADER";
import headerImg from "../../media/articles_header_image.png";

const ArticlesPage = () => {
  const [category, setCategory] = useState("");
  const [npoName, setNpoName] = useState("");
  const [_id, set_Id] = useState("");
  const [selectedTab, setSelectedTab] = useState("");
  const [test, setTesting] = useState(true);
  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(
    async () => await getArticles({ category, _id }),
    [category]
  );

  if (loading) return isLoading();

  if (error) return <Error error={error} />;

  function handleNavigationAndFiltering(event) {
    setCategory(event);
    setSelectedTab(event);
  }

  return (
    <div className="articles-wrapper">
      <GlobalHeader
        title={HEADER[1].title}
        subtitle={HEADER[1].subtitle}
        desc={HEADER[1].desc}
        image={headerImg}
      />

      <Sorter
        onClick={() => handleNavigationAndFiltering("")}
        selectedTab={selectedTab}
        onClick1={() => handleNavigationAndFiltering("water")}
        onClick2={() => handleNavigationAndFiltering("knowledge")}
      />
      <ArticlesContent data={data} />
    </div>
  );
};

export default ArticlesPage;
