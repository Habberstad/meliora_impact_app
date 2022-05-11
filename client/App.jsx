import Sidebar from "./components/navigation/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlesPage from "./components/articles/ArticlesPage";
import DiscoverPage from "./components/discover/DiscoverPage";
import MyNonProfitsPage from "./components/my-non-profits/MyNonProfitsPage";
import Dashboard from "./components/dashboard/Dashboard";
import Article from "./components/articles/Article";
import { LoginPage } from "./components/login/LoginPage";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(true);
  return (
    <div className="app-container">
      {login ?
        <div> </div>
        :
        <div className="sidebar-container">
        <Sidebar />
      </div>}
      <BrowserRouter>
        <Routes>
          {/* TODO: Insert routes */}
          <Route path="/login" element={<LoginPage/>} />
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
