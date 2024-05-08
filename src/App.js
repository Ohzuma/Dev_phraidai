import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Project from "./pages/Project/Index";
import Skill from "./pages/Skills/Index";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<About />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Project />} path="/project" />
        <Route element={<Skill />} path="/skills" />
      </Routes>
    </div>
  );
}

export default App;
