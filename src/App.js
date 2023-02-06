import "./components/styles/App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Values from "./components/pages/Values";
import Donations from "./components/pages/Donations";
import Contact from "./components/pages/Contact";
import Team from "./components/pages/Team";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="values" element={<Values />} />
          <Route path="donations" element={<Donations />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
