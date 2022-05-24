import {useContext, useState} from "react";
import "../../styles/articlesPage.css";
import {ArticleApiContext} from "../../api-client/articlesApiContext";
import {useLoading} from "../../useLoading";
import {ArticlesHeader} from "../headers/ArticlesHeader";
import {Sorter} from "./Sorter";
import * as PropTypes from "prop-types";
import {ArticlesContent} from "./ArticlesContent";


ArticlesContent.propTypes = {data: PropTypes.any};
const ArticlesPage = () => {
  const [category, setCategory] = useState("water");
  const [npoName, setNpoName] = useState("");
  const [_id, set_Id] = useState("");
  const [selectedTab, setSelectedTab] = useState("");

  const { getArticles } = useContext(ArticleApiContext);
  const { loading, error, data } = useLoading(
    async () => await getArticles({ category, _id }),
    [category]
  );

  if (loading) return <div>Loading...</div>;

  if (error)
    return (
      <div>
        <h1>Error</h1>
        <div id="error-text">{error.toString()}</div>
      </div>
    );

  function handleNavigationAndFiltering(event) {
    setCategory(event);
    setSelectedTab(event);
  }

  return (
    <div className="articles-wrapper">
      <ArticlesHeader/>
      <Sorter onClick={() => handleNavigationAndFiltering("")} selectedTab={selectedTab}
              onClick1={() => handleNavigationAndFiltering("water")}
              onClick2={() => handleNavigationAndFiltering("knowledge")}/>
      <ArticlesContent data={data}/>
    </div>
  );
};

export default ArticlesPage;
