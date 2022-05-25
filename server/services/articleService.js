import Article from "../models/articleModel.js";


async function listArticles(query) {
  try {
    return await Article.find(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getArticleById(id) {
  try {
    return await Article.findById(id);
  } catch (e) {

    throw Error();
  }
}

async function createArticle(query) {
  try {
    const data = new Article(query)
    return await data.save();
  } catch (e) {

    throw Error();
  }
}


export default { listArticles, getArticleById, createArticle };