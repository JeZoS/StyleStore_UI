import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/navbar/login";
import Contact from "./components/navbar/contact";
import About from "./components/navbar/about";
import PublicHomePage from "./components/Main/HomePage";

class App extends React.Component {
  moveto = () => {
    <Redirect from="/login" to="/" />;
    console.log("111");
  };

  render() {
    return (
      <div id="main">
        <>
          <BrowserRouter>
            <Switch>
              <Route path="/login">
                <Login moveto={this.moveto} />
              </Route>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/">
                <PublicHomePage />
              </Route>
            </Switch>
          </BrowserRouter>
        </>
      </div>
    );
  }
}
export default App;
