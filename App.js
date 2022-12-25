import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import License from "./components/license";
import Notice from "./components/notice";
import Setting from "./components/setting";
import Write from "./components/write";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/license" element={<License/>} />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/write" element={<Write/>} />
      </Routes>
    </div>
  );
}

export default App;