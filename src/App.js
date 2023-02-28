import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/story" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
