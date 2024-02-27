import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./Overview";
import Contact from "./Contact";
import Portfolio from "./Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
