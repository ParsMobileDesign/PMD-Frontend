import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./components/menu/menu";
import Portfolio from "./pages/Portfolio";
import PortfolioItemSelected from "./components/portfolio/portfolio-item-selected";
import About from "./pages/About";
function App() {
  const menuItem = [
    { srl: 1, title: "Home",path:'/' },
    { srl: 2, title: "Portfolio",path:'/portfolio' },
    { srl: 3, title: "About" ,path:'/about'},
    { srl: 4, title: "Contact" ,path:'/contact'},
  ];
  return (
    <Router>
      <div className="container">
        <Menu menuItems={menuItem} />
        <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/portfolio" exact>
            <Portfolio/>
          </Route>
          <Route path="/portfolio/:id/">
            <PortfolioItemSelected/>
          </Route>
          <Route path="/about">
          </Route>
          <Redirect to="/" />
        </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
