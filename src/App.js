import React, { useState, useCallback } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
import Auth from "./pages/Auth";
import SignUp from "./pages/SignUp";
import { AuthContext } from "./components/context/authContext";
import Footer from "./components/footer/footer";
import CreateNewItem from "./pages/createNewItem";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  const menuItem = [
    { srl: 1, title: "Home", path: "/" },
    { srl: 2, title: "Portfolio", path: "/portfolio" },
    { srl: 3, title: "About", path: "/about" },
    { srl: 4, title: "Contact", path: "/contact" },
  ];
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, logIn: logIn, logOut: logOut }}
    >
      <Router>
        <div className="Appcontainer">
          <Menu menuItems={menuItem} />
          <main className='main-content'>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/portfolio" exact>
                <Portfolio />
              </Route>
              <Route path="/portfolio/:id/">
                <PortfolioItemSelected />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/auth">
                <Auth />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
              <Route path="/newItem">
                <CreateNewItem />
              </Route>
              <Redirect to="/" />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
