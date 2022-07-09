import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import FinalPage from "./components/FinalPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="*" element={<Navigate to="/page1" replace />} />
      </Routes>
    </div>
  );
}

export default App;
