import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "./components/Navbar/Navbar.jsx"
import About from "./components/About/About.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import "./App.css"


function App() {
  return (
    <Router>
    <main className="app">
      <Switch >
                <Redirect exact from="/20-portfolior" to="/about"></Redirect>
                
                <Route exact path="/">
                  <Redirect to="/home"/>
                </Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/contact" component={Contact}></Route>
      </Switch>
    </main>
    
    <Footer />
    </Router>
  );
}

export default App;
