import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About/Index";
import Contact from "./pages/Contact/Index";
import Project from "./pages/Project/Index";
import Skill from "./pages/Skills/Index";
import { Hammer } from "./Context/Context";
function App() {
  const doc = document.addEventListener("click", () => {
    console.log("hello");
  });
  return (
    // <Hammer>
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
    // </Hammer>
  );
}

export default App;
