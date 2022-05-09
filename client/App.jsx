import Sidebar from "./components/navigation/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <BrowserRouter>
        <Routes>
          {/* TODO: Insert routes */}
          {/* TODO: Insert routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
