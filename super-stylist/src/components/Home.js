import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./navbar/login";
import Contact from "./navbar/contact";
import About from "./navbar/about";
import MainPage from "./Main/mainpage";
import FashionTips from "./options/tips";
import SlideShow from "./home files/slideshow";
import MenCard from "./options/menCard";
import WomenCard from "./options/womenCard";
import LookBook from "./Main/lookbook";
import MenCollection from "./Men/men";
import WomenCollection from "./women/women";
import WomenSummer from "./women/WomenSummer";
import WomenWinter from "./women/WomenWinter";
import SingleProd from "./women/SingleProd";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHoverMen = this.handleMouseHoverMen.bind(this);
    this.handleMouseHoverWomen = this.handleMouseHoverWomen.bind(this);
    this.state = {
      isHoveringMen: false,
      isHoveringWomen: false,
    };
  }

  handleMouseHoverMen() {
    this.setState(this.toggleHoverStateMen);
  }
  handleMouseHoverWomen() {
    this.setState(this.toggleHoverStateWomen);
  }

  toggleHoverStateMen(state) {
    return {
      isHoveringMen: !state.isHoveringMen,
    };
  }
  toggleHoverStateWomen(state) {
    return {
      isHoveringWomen: !state.isHoveringWomen,
    };
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <MainPage
                handleMouseHoverMen={this.handleMouseHoverMen}
                handleMouseHoverWomen={this.handleMouseHoverWomen}
              />
              <SlideShow />
              {this.state.isHoveringMen && <MenCard />}
              {this.state.isHoveringWomen && <WomenCard />}
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/FashionTips">
              <FashionTips />
            </Route>
            <Route exact path="/Men">
              <MenCollection />
            </Route>
            <Route exact path="/Women">
              <WomenCollection />
            </Route>
            <Route exact path="/LookBook">
              <LookBook />
            </Route>
            <Route exact path="/women_summer">
              <WomenSummer />
            </Route>
            <Route exact path="/women_winter">
              <WomenWinter />
            </Route>
            <Route exact path="/summer/:id">
              <SingleProd />
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Home;
