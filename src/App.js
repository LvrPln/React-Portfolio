import Home from "./components/Home";
import SkillsExperience from "./components/About";
import Contact from "./components/Contact";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-list">
          <li><button onClick={() => scrollToSection("home")}>Home</button></li>
          <li><button onClick={() => scrollToSection("skills")}>Skills & Experience</button></li>
          <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
      </nav>

      <div id="home">
        <Home />
      </div>
      <div id="skills">
        <SkillsExperience />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
