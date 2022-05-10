import Sidebar from "./components/navigation/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesPage from "./components/articles/ArticlesPage";
import DiscoverPage from "./components/discover/DiscoverPage";
import MyNonProfitsPage from "./components/my-non-profits/MyNonProfitsPage";
import Dashboard from "./components/dashboard/Dashboard";
import Article from "./components/articles/Article";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <BrowserRouter>
        <Routes>
          {/* TODO: Insert routes */}
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/articles" element={<ArticlesPage />} />
          <Route exact path="/articles/article" element={<Article />} />
          <Route exact path="/discover" element={<DiscoverPage />} />
          <Route exact path="/my-non-profits" element={<MyNonProfitsPage />} />
          {/* TODO: Insert routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
