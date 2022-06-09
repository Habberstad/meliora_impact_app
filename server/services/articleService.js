import ArticleRepository from "../repositories/articleRepository.js";


async function listArticles(query) {
  try {
    return await ArticleRepository.listArticles(query);
  } catch (e) {

    throw Error(e);
  }
}

async function getArticleById(id) {
  try {
    return await ArticleRepository.getArticleById(id);
  } catch (e) {

    throw Error();
  }
}

async function createArticle(query) {
  try {
    const data = new ArticleRepository.createArticle(query)
    return await data;
  } catch (e) {

    throw Error();
  }
}


export default { listArticles, getArticleById, createArticle };