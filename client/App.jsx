import Sidebar from "./components/navigation/Sidebar";
import { Outlet } from "react-router-dom";
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
      <Outlet />
    </div>
  );
}

export default App;
