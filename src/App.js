import Portfolio from "./pages/portfolio/Portfolio";
import Nav from "./components/Nav/Nav";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { HashRouter, Route, Switch} from "react-router-dom";
import { ThemeProvider} from "@material-ui/core";
import theme from "./utils/theme.jsx";



function App() {
  return (
    <ThemeProvider theme={theme}>
    <HashRouter>
    <Nav color={theme}/>
    <Switch>
      <Route exact path="/" component={About}/>
      <Route exact path="/portfolio" component={Portfolio} color={theme} />
      <Route exact path="/about" component={About} color={theme}/>
      <Route exact path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
    </ThemeProvider>
  );
}

export default App;
