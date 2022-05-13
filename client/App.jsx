import Sidebar from "./components/navigation/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (window.location.href.toString().includes("/login")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className="app-container">
      {isLogin ? (
        <></>
      ) : (
        <div className="sidebar-container">
          <Sidebar />
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default App;
