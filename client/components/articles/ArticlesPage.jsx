import logo from '../../media/article-header.png';
import logo2 from '../../media/article-header.png';
const ArticlesPage = () => {
  return (
  <div>



    <h1>Meliora Articlels</h1>

    <div id={"filter_articles"}>
        <p>New</p>
        <p>Popular</p>
        <p>Water</p>
        <p>Knowledge</p>
    </div>

    <div id={"articles-container"}>

    <div id={"test"}>
      <img src={logo}/>
    </div>
    <div id={"test"}>
      <img src={logo2}/>
    </div>


    </div>
    <h1>Articles You Should Check Out</h1>
    <div id={"articles-recommendation-container"}>

      <div id={"test"}>
        <img src={logo}/>
      </div>

      <div id={"test"}>
        <img src={logo2}/>
      </div>

      <div id={"test"}>
        <img src={logo2}/>
      </div>


    </div>




  </div>
);
};

export default ArticlesPage;
