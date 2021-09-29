import Navbar from "./components/Navbar/Navbar.jsx"
import About from "./components/About/About.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from "./components/Contact/Contact.jsx"
import "./App.css"


function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
