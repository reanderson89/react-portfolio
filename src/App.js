import Portfolio from "./pages/portfolio/Portfolio";
import Nav from "./components/Nav/Nav";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { HashRouter, Route} from "react-router-dom";


function App() {
  return (
    
    <HashRouter>
    <Nav />
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />

    </HashRouter>
    
  );
}

export default App;
