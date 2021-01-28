import Portfolio from "./pages/portfolio/Portfolio";
import Nav from "./components/Nav/Nav";
import About from "./pages/about/About.jsx";
import { HashRouter, Route} from "react-router-dom";


function App() {
  return (
    
    <HashRouter>
    <Nav />
      <Route exact path="/" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
    </HashRouter>
    
  );
}

export default App;
