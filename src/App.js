import Home from "./components/Home";
import SkillsExperience from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
      <ul className="nav-list">
        <li><button >Home</button></li>
        <li><button >Skills & Experience</button></li>
        <li><button >Contact</button></li>
      </ul>
    </nav>


      <Home/>
      <SkillsExperience />
      <Contact />

    </div>
  );
}

export default App;
